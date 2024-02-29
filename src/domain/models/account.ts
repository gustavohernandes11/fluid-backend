export type IAccount = {
	id: string;
	name: string;
	email: string;
	password: string;
	createdAt: string;
};

export type IAddAccount = Omit<IAccount, "id">;
