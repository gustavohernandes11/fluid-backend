import { IComment, IAddComment } from "../models/comment";

export interface IDBAddComment {
	add: (comment: IAddComment) => Promise<IComment>;
}
