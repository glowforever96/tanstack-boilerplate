import { getPostById } from "@/data/getPostById";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/posts/_post-layout/$postId/")({
  component: RouteComponent,
  errorComponent: ({ error }) => {
    return (
      <div className="text-3xl text-muted-foreground">{error.message}</div>
    );
  },
  loader: async ({ params }) => {
    const post = await getPostById({ data: params.postId });
    return {
      post,
      postId: params.postId,
    };
  },
});

function RouteComponent() {
  const { post, postId } = Route.useLoaderData();

  return (
    <div className="p-6">
      <h1 className="text-3xl">{`/posts/${postId} 페이지 입니다!`}</h1>
      <h2 className="text-2xl">게시글</h2>
      <div className="flex flex-col gap-4 border-2 mt-3 p-4">
        <span>유저 이름: {post.userName}</span>
        <span>내용: {post.content}</span>
      </div>
    </div>
  );
}
