export type IDiscussion = {
	id: string;
	title: string;
	content: string;
	authorId: string;
	likes: number;
	dislikes: number;
	updatedAt: string;
	createdAt: string;
};

export type IAddDiscussion = Omit<
	IDiscussion,
	"id" | "likes" | "dislikes" | "updatedAt"
>;
