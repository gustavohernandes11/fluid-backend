export type ISection = {
	id: string;
	name: string;
	description: string;
};

export type IAddSection = Omit<ISection, "id">;
