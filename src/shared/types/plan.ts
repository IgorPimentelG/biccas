export type Plan = {
	name: string;
	description: string;
	price: number;
	benefits: string[];
	promo?: string;
	labelRedirect: string;
	highlighted?: boolean;
}
