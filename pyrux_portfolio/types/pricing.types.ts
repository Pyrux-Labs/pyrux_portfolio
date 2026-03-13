export interface PackageFeature {
	text: string;
	included: boolean;
}

export interface MaintenanceItem {
	icon: string;
	title: string;
	description: string;
}

export interface ServicePackage {
	number: string;
	name: string;
	price: string;
	maintenancePrice: string;
	deliveryTime: string;
	popular: boolean;
	features: PackageFeature[];
	maintenanceCards: MaintenanceItem[];
}

export interface Step {
	number: string;
	title: string;
	description: string;
}

export interface FAQItem {
	question: string;
	answer: string;
}
