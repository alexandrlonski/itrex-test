export type USER = {
	id: number;
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	adress: {
		streetAddress: string;
		city: string;
		state: string;
		zip: string;
	};
	description: string;
};
