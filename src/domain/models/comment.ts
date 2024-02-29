export type IComment = {
	id: string;
	content: string;
	authorId: string;
	parentId: string;
	likes: number;
	dislikes: number;
	updatedAt: string;
	createdAt: string;
};

export type IAddComment = Omit<
	IComment,
	"id" | "likes" | "dislikes" | "updatedAt"
>;
