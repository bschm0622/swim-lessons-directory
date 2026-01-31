export interface SpecialtyConfig {
	name: string;
	categoryName: string; // Matches the category name in the data
	slug: string;
	icon: string;
	color: string;
	seoTitle: string;
	shortDescription: string;
	longDescription: string;
	benefits: string[];
	targetAudience: string;
}

export const SPECIALTIES: Record<string, SpecialtyConfig> = {
	'private-swim-lessons': {
		name: 'Private Swim Lessons',
		categoryName: 'Private / Semi-Private',
		slug: 'private-swim-lessons',
		icon: '🏊‍♂️',
		color: 'bg-blue-50 dark:bg-blue-950/20',
		seoTitle: 'Private Swim Lessons',
		shortDescription: 'One-on-one or small group instruction tailored to individual learning pace and goals',
		longDescription: 'Private swim lessons offer personalized instruction that adapts to your unique needs, schedule, and goals. Whether you\'re a beginner overcoming fear of water, a child with special needs, or an athlete refining technique, private lessons provide the focused attention needed to progress quickly and confidently. With flexible scheduling and customized curriculum, private instruction eliminates the pressure of group settings and allows swimmers to learn at their own pace in a supportive, judgment-free environment.',
		benefits: [
			'Customized curriculum based on skill level',
			'Flexible scheduling around your availability',
			'Ideal for students with special needs or anxiety',
			'Accelerated progress with focused attention',
			'One-on-one instructor feedback',
			'Safe, comfortable learning environment'
		],
		targetAudience: 'Children and adults seeking individualized attention, students with special needs, nervous swimmers, competitive swimmers refining technique'
	},
	'parent-child-swim-lessons': {
		name: 'Parent & Child Swim Lessons',
		categoryName: 'Parent & Child',
		slug: 'parent-child-swim-lessons',
		icon: '👶',
		color: 'bg-pink-50 dark:bg-pink-950/20',
		seoTitle: 'Parent & Child Swim Lessons',
		shortDescription: 'Water confidence classes for infants and toddlers (6 months - 3 years) with parent participation',
		longDescription: 'Parent and child swim lessons introduce your baby or toddler to the water through play-based activities while you\'re right there in the pool. These gentle, nurturing classes build water confidence from the earliest age, teaching essential safety skills like floating and breath control while strengthening the bond between parent and child. Instructors guide you through age-appropriate exercises that make learning fun, helping your little one develop a positive, fearless relationship with water that will serve them for life.',
		benefits: [
			'Early water safety and confidence',
			'Bonding experience in the water',
			'Gentle introduction for babies and toddlers',
			'Builds trust and comfort with water',
			'Parent learns safety techniques',
			'Foundation for future swim skills'
		],
		targetAudience: 'Parents with babies and toddlers (6 months to 3 years), first-time swimmers, families wanting early water introduction'
	},
	'adult-swim-lessons': {
		name: 'Adult & Teen Swim Lessons',
		categoryName: 'Adult & Teen',
		slug: 'adult-swim-lessons',
		icon: '👨‍🦱',
		color: 'bg-purple-50 dark:bg-purple-950/20',
		seoTitle: 'Adult & Teen Swim Lessons',
		shortDescription: 'Swimming lessons designed for teens and adults who are learning to swim or improving technique',
		longDescription: 'It\'s never too late to learn to swim. Adult and teen swim lessons provide a supportive, judgment-free environment where older learners can overcome fear, build confidence, and master swimming skills at their own pace. Whether you never learned as a child, want to improve your technique for fitness, or need to conquer a lifelong fear of water, specialized adult programs offer patient instruction tailored to mature learners. With smaller class sizes and instructors who understand adult learning styles, you\'ll gain the skills and confidence to enjoy pools, lakes, and oceans safely.',
		benefits: [
			'Never too late to learn',
			'Overcome fear in supportive environment',
			'Judgment-free instruction',
			'Learn at your own pace',
			'Improve fitness and technique',
			'Gain water safety confidence'
		],
		targetAudience: 'Teens and adults who never learned to swim, nervous or fearful swimmers, fitness swimmers improving technique, adults seeking water confidence'
	},
	'competitive-swim-lessons': {
		name: 'Competitive Swim Lessons',
		categoryName: 'Competitive / Clinics',
		slug: 'competitive-swim-lessons',
		icon: '🏅',
		color: 'bg-yellow-50 dark:bg-yellow-950/20',
		seoTitle: 'Competitive Swim Lessons & Clinics',
		shortDescription: 'Advanced stroke development, starts and turns, and competitive swimming technique',
		longDescription: 'Competitive swim lessons and clinics take swimmers to the next level with advanced instruction in racing techniques, stroke refinement, starts, turns, and race strategy. Perfect for swimmers on teams or aspiring to join one, these programs focus on efficiency, speed, and competitive edge. Expert coaches provide detailed feedback on form, analyze technique, and help athletes shave seconds off their times. From mastering flip turns to perfecting butterfly stroke, competitive clinics offer the specialized training needed to excel in meets and competitions.',
		benefits: [
			'Refine stroke technique and efficiency',
			'Gain competitive edge in races',
			'Expert coaching from competitive swimmers',
			'Race preparation and strategy',
			'Master starts, turns, and finishes',
			'Improve speed and endurance'
		],
		targetAudience: 'Swimmers on teams, athletes seeking improvement, pre-competitive swimmers, students interested in joining swim teams'
	},
	'survival-swim-lessons': {
		name: 'Survival Swim Lessons',
		categoryName: 'Survival-First',
		slug: 'survival-swim-lessons',
		icon: '🛟',
		color: 'bg-red-50 dark:bg-red-950/20',
		seoTitle: 'Survival Swim Lessons',
		shortDescription: 'Water safety and self-rescue focused programs that prioritize survival skills',
		longDescription: 'Survival swim lessons prioritize life-saving skills over traditional stroke technique. These programs teach children and adults how to survive if they unexpectedly fall into water, focusing on self-rescue techniques like rolling onto their back to float, calling for help, and swimming to safety. Particularly valuable for families with backyard pools or living near water, survival-first instruction gives parents peace of mind knowing their child has the skills to save their own life in an emergency. The focus is on building reflexive responses that kick in when needed most.',
		benefits: [
			'Critical water safety skills',
			'Self-rescue techniques and survival responses',
			'Drowning prevention focused',
			'Confidence in emergency situations',
			'Reflexive safety responses',
			'Peace of mind for parents'
		],
		targetAudience: 'Young children, families prioritizing safety, families with backyard pools, water-adjacent property owners, parents seeking drowning prevention'
	},
	'special-needs-swim-lessons': {
		name: 'Adaptive / Special Needs Swim Lessons',
		categoryName: 'Adaptive / Special Needs',
		slug: 'special-needs-swim-lessons',
		icon: '💙',
		color: 'bg-indigo-50 dark:bg-indigo-950/20',
		seoTitle: 'Special Needs Swim Lessons',
		shortDescription: 'Specialized instruction for swimmers with physical, developmental, or sensory needs',
		longDescription: 'Adaptive swim lessons provide specialized instruction for children and adults with physical disabilities, developmental delays, autism spectrum disorder, or sensory sensitivities. These programs feature trained instructors who understand how to modify teaching techniques to accommodate each swimmer\'s unique needs, whether that means quieter pools for sensory sensitivities, adaptive equipment for physical challenges, or extra time and patience for developmental differences. Swimming offers tremendous therapeutic benefits—building strength, confidence, and independence—while providing a safe, supportive environment where every swimmer can succeed.',
		benefits: [
			'Patient, specially-trained instructors',
			'Sensory-friendly environments',
			'Flexible pacing tailored to individual needs',
			'Smaller class sizes or 1-on-1 instruction',
			'Adaptive equipment available',
			'Inclusive, supportive atmosphere'
		],
		targetAudience: 'Children and adults with autism, sensory sensitivities, physical disabilities, developmental delays, swimmers needing accommodations'
	},
	'at-home-swim-lessons': {
		name: 'At-Home / Mobile Swim Lessons',
		categoryName: 'Mobile / At-Home',
		slug: 'at-home-swim-lessons',
		icon: '🚗',
		color: 'bg-green-50 dark:bg-green-950/20',
		seoTitle: 'At-Home Swim Lessons',
		shortDescription: 'Convenient swim instruction at your home pool or preferred location',
		longDescription: 'Mobile swim lessons bring professional instruction directly to your backyard pool, eliminating commute time and making swim lessons fit seamlessly into your busy schedule. Learning in a familiar, comfortable environment helps children (especially young ones) feel more relaxed and confident, while parents appreciate the convenience of watching from their own deck. Mobile instructors arrive with all necessary equipment and provide the same quality instruction you\'d find at a facility—just with the added benefits of privacy, flexibility, and no travel time. Perfect for families with home pools or those seeking ultimate convenience.',
		benefits: [
			'Ultimate convenience with no commute',
			'Familiar, comfortable environment',
			'Flexible scheduling around your life',
			'Private instruction at your pool',
			'Watch from the comfort of home',
			'Time-saving for busy families'
		],
		targetAudience: 'Families with home pools, busy schedules, young children preferring familiar settings, families seeking privacy and convenience'
	}
};

/**
 * Get specialty configuration by URL slug
 */
export function getSpecialtyBySlug(slug: string): SpecialtyConfig | undefined {
	return SPECIALTIES[slug];
}

/**
 * Get specialty configuration by category name (as it appears in the data)
 */
export function getSpecialtyByCategoryName(categoryName: string): SpecialtyConfig | undefined {
	return Object.values(SPECIALTIES).find(s => s.categoryName === categoryName);
}

/**
 * Create URL slug from a category name
 */
export function createSpecialtySlug(categoryName: string): string {
	return Object.values(SPECIALTIES)
		.find(s => s.categoryName === categoryName)?.slug || '';
}

/**
 * Get all specialty configurations as an array
 */
export function getAllSpecialties(): SpecialtyConfig[] {
	return Object.values(SPECIALTIES);
}
