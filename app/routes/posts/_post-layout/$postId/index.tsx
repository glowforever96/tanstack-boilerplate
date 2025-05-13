import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/posts/_post-layout/$postId/")({
  component: RouteComponent,
  loader: async ({ params }) => {
    return {
      postId: params.postId,
    };
  },
});

function RouteComponent() {
  const { postId } = Route.useLoaderData();
  return <div>posts/{postId} 페이지입니다!</div>;
}
