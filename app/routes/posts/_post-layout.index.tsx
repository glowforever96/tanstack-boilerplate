import { getPosts } from "@/data/getPosts";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/posts/_post-layout/")({
  component: RouteComponent,
  loader: async () => {
    const posts = await getPosts();
    return {
      posts,
    };
  },
});

function RouteComponent() {
  const { posts } = Route.useLoaderData();

  return (
    <div className="p-4">
      <h1 className="text-3xl">게시물 목록</h1>
      <div className="flex flex-col gap-2 mt-4">
        {posts.map((post) => (
          <Link
            key={post.id}
            to="/posts/$postId"
            params={{ postId: post.id.toString() }}
          >
            <div className="flex flex-col gap-2 border-2 p-2">
              <span>유저 이름: {post.userName}</span>
              <span>내용: {post.content}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
