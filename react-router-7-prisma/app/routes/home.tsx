import type { Route } from "./+types/home";
import prisma from "../lib/prisma"

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

export default function Home({ loaderData }: Route.ComponentProps) {
    const { prefectures } = loaderData;
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-8 font-[family-name:var(--font-geist-sans)] mt-16">
                47都道府県旅行記録
            </h1>
            <ol className="list-decimal list-inside font-[family-name:var(--font-geist-sans)]">
                {prefectures.map((prefecture) => (
                    <li key={prefecture.id} className="mb-2">
                        {prefecture.name}
                    </li>
                ))}
            </ol>
        </div>
    );
}