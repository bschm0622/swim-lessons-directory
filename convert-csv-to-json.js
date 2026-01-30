import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Simple CSV parser that handles quoted fields
function parseCSV(csvContent) {
  const rows = [];
  let currentRow = [];
  let currentField = '';
  let insideQuotes = false;

  for (let i = 0; i < csvContent.length; i++) {
    const char = csvContent[i];
    const nextChar = csvContent[i + 1];

    if (char === '"') {
      if (insideQuotes && nextChar === '"') {
        // Escaped quote
        currentField += '"';
        i++; // Skip next quote
      } else {
        // Toggle quote state
        insideQuotes = !insideQuotes;
      }
    } else if (char === ',' && !insideQuotes) {
      // End of field
      currentRow.push(currentField);
      currentField = '';
    } else if (char === '\n' && !insideQuotes) {
      // End of row
      currentRow.push(currentField);
      if (currentRow.some(f => f.trim())) {
        rows.push(currentRow);
      }
      currentRow = [];
      currentField = '';
    } else {
      currentField += char;
    }
  }

  // Add last field and row
  if (currentField || currentRow.length > 0) {
    currentRow.push(currentField);
    if (currentRow.some(f => f.trim())) {
      rows.push(currentRow);
    }
  }

  return rows;
}

// Read and parse CSV
const csvPath = path.join(__dirname, 'Private Swim Lessons Data - Sheet2.csv');
const csvContent = fs.readFileSync(csvPath, 'utf-8');
const rows = parseCSV(csvContent);

// Get headers
const headers = rows[0];
const nameIdx = headers.indexOf('name');
const placeIdIdx = headers.indexOf('google_place_id');
const websiteIdx = headers.indexOf('swim_lesson_website');
const summaryIdx = headers.indexOf('summary');
const categoriesIdx = headers.indexOf('categories');
const addressIdx = headers.indexOf('address');
const phoneIdx = headers.indexOf('phone');
const latIdx = headers.indexOf('lat');
const longIdx = headers.indexOf('long');
const ratingIdx = headers.indexOf('rating');
const hoursIdx = headers.indexOf('hours');

// Helper functions
function createSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function parseCategories(categoriesStr) {
  try {
    const parsed = JSON.parse(categoriesStr);
    return {
      categories: parsed.Lesson_Categories || [],
      priceTier: parsed.Price_Tier || '$$',
      facilityType: parsed.Facility_Type || 'Community Center',
      specialFeatures: parsed.Special_Features || [],
      shortDescription: parsed.Short_Description || ''
    };
  } catch (e) {
    return {
      categories: [],
      priceTier: '$$',
      facilityType: 'Community Center',
      specialFeatures: [],
      shortDescription: ''
    };
  }
}

function simplifyHours(hoursStr) {
  if (!hoursStr || hoursStr === 'nan') return 'Call for hours';

  const lines = hoursStr.split(';').map(s => s.trim()).filter(Boolean);
  if (lines.length === 0) return 'Call for hours';

  // Try to find Mon-Fri pattern
  const monMatch = lines.find(l => l.startsWith('Monday:'));
  if (monMatch) {
    const time = monMatch.replace('Monday: ', '').split(',')[0];
    return `Mon-Fri ${time}`;
  }

  return lines[0];
}

// Parse all schools
const schools = [];

for (let i = 1; i < rows.length; i++) {
  const row = rows[i];
  if (row.length < headers.length) continue;

  const name = row[nameIdx]?.trim();
  if (!name) continue;

  const categoriesData = parseCategories(row[categoriesIdx]);

  const school = {
    id: createSlug(name),
    name: name,
    placeId: row[placeIdIdx]?.trim() || '',
    website: row[websiteIdx]?.trim() ? `https://${row[websiteIdx].trim().replace(/^https?:\/\//, '')}` : '',
    summary: row[summaryIdx]?.trim() || '',
    address: row[addressIdx]?.trim() || '',
    phone: row[phoneIdx]?.trim() || '',
    coordinates: {
      lat: parseFloat(row[latIdx]) || 0,
      lng: parseFloat(row[longIdx]) || 0
    },
    rating: parseFloat(row[ratingIdx]) || 0,
    categories: categoriesData.categories,
    priceTier: categoriesData.priceTier,
    facilityType: categoriesData.facilityType,
    specialFeatures: categoriesData.specialFeatures,
    shortDescription: categoriesData.shortDescription,
    hours: simplifyHours(row[hoursIdx]?.trim())
  };

  schools.push(school);
}

// Write to JSON file
const outputPath = path.join(__dirname, 'src', 'data', 'swim-schools.json');
fs.writeFileSync(outputPath, JSON.stringify(schools, null, 2));

console.log(`✅ Converted ${schools.length} swim schools to JSON!`);
console.log(`📄 Output: ${outputPath}`);
