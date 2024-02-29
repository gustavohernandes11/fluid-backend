import { ISection, IAddSection } from "../models/section";

export interface IDBAddSection {
	add: (Section: IAddSection) => Promise<ISection>;
}
