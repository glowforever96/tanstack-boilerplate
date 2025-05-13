import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/posts/_post-layout/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/posts/_layout/"!</div>;
}
