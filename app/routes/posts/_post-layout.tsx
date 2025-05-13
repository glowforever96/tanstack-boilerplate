import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/posts/_post-layout")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <header className="w-full text-3xl text-blue-500 p-4 border-b-2 border-black">
        Posts 페이지 헤더입니다!
      </header>
      <Outlet />
    </>
  );
}
