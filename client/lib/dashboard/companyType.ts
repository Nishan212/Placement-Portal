export type CompanyType = {
	logo: string;
	name: string;
	registrations: number;
	ctc: number;
	stipend: number;
	profile: string;
	offerType: string;
	isSpot: boolean;
	locations: string[];
	category: string;
	dates: string;
	company: {
		name: string;
		logo: string;
	};
	registrationStartDate: string;
	registrationDeadline: string;
};
