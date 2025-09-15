import type { Route } from "./+types/home";
import prisma from "../lib/prisma";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader() {
  const prefectures = await prisma.prefecture.findMany();
  return { prefectures: prefectures };
}

export default function prefecture({ loaderData }: Route.ComponentProps) {
  const { prefectures } = loaderData;
  const prefectureId = window.location.pathname.split("/prefectures/")[1];

  const foundPrefecture = prefectures.find(
    (prefecture) => prefecture.id === prefectureId
  );

  const prefectureName = foundPrefecture ? foundPrefecture.name : undefined;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8 font-[family-name:var(--font-geist-sans)] mt-16">
        {prefectureName}
      </h1>
      <Link to={"/"}>戻る</Link>
    </div>
  );
}
