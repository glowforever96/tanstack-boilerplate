import { createPost } from "@/data/createPost";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { FormEvent, useState } from "react";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate(); // useNavigate hook

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    try {
      setErrorMsg("");
      const res = await createPost({ data: formData });
      console.log(res);
      navigate({ to: "/posts" }); // posts 페이지로 리다이렉트
    } catch (err) {
      if (err instanceof Error) {
        setErrorMsg(err.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center">
      <div>
        <label>이름</label>
        <input
          name="userName"
          className="border border-gray-300 rounded px-3 py-2 ml-2"
        />
      </div>
      <div>
        <label>내용</label>
        <input
          name="content"
          className="border border-gray-300 rounded px-3 py-2 ml-2"
        />
      </div>
      <button
        type="submit"
        className="w-fit px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        등록
      </button>
      <span className="text-red-500">{errorMsg && errorMsg}</span>
    </form>
  );
}
