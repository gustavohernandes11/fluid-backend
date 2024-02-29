import { IAccount, IAddAccount } from "../models/account";

export interface IDBAddAccount {
	add: (account: IAddAccount) => Promise<IAccount>;
}
