import { IDiscussion, IAddDiscussion } from "../models/discussion";

export interface IDBAddDiscussion {
	add: (discussion: IAddDiscussion) => Promise<IDiscussion>;
}
