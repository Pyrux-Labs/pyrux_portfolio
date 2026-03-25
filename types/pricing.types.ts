export interface PackageFeature {
	text: string;
	included: boolean;
}

export interface MaintenanceItem {
	icon: string;
	title: string;
	description: string;
}

export type PlanColor = "growth" | "pro" | "business" | "custom";
export type PlanCategory = "estandar" | "ecommerce" | "personalizado";

export interface ServicePackage {
	number: string;
	name: string;
	price: string;
	discountedPrice?: string;
	maintenancePrice: string;
	deliveryTime: string;
	popular: boolean;
	category: PlanCategory;
	planColor: PlanColor;
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
