/**
 * State abbreviation to full name mapping
 */
export const STATE_NAMES: Record<string, string> = {
	'IN': 'Indiana',
	'TX': 'Texas',
	'CA': 'California',
	'NY': 'New York',
	'FL': 'Florida',
	// Add more states as they are added to the directory
};

/**
 * Parse address string into components
 * Expects format: "Street, City, State ZIP, Country"
 */
export interface AddressParts {
	street: string;
	city: string;
	state: string;
	stateAbbrev: string;
	zip: string;
	country: string;
	stateName: string;
}

export function parseAddress(address: string): AddressParts {
	const parts = address.split(',').map(p => p.trim());

	// Extract components (working backwards from the address)
	const country = parts[parts.length - 1] || '';
	const stateWithZip = parts[parts.length - 2] || '';
	const city = parts[parts.length - 3] || '';
	const street = parts.slice(0, parts.length - 3).join(', ');

	// Extract state abbreviation and ZIP
	const stateZipParts = stateWithZip.split(' ');
	const stateAbbrev = stateZipParts[0] || '';
	const zip = stateZipParts[1] || '';

	// Get full state name
	const stateName = STATE_NAMES[stateAbbrev] || stateAbbrev;

	return {
		street,
		city,
		state: stateAbbrev,
		stateAbbrev,
		zip,
		country,
		stateName
	};
}

/**
 * Create URL-friendly slug from text
 */
export function createSlug(text: string): string {
	return text
		.toLowerCase()
		.replace(/\s+/g, '-')
		.replace(/[^a-z0-9-]/g, '');
}

/**
 * Get state slug from state name or abbreviation
 */
export function getStateSlug(stateNameOrAbbrev: string): string {
	// Check if it's an abbreviation
	const fullName = STATE_NAMES[stateNameOrAbbrev];
	if (fullName) {
		return createSlug(fullName);
	}
	// Otherwise assume it's already a full name
	return createSlug(stateNameOrAbbrev);
}

/**
 * Get city slug from city name
 */
export function getCitySlug(cityName: string): string {
	return createSlug(cityName);
}
