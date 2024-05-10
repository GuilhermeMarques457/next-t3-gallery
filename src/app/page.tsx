import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany();

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {images.map((image) => (
          <div key={image.id} className="w-48 p-4">
            <img src={image.url} alt="image"></img>
          </div>
        ))}
      </div>
      <p>Hello!! galery in progress</p>
    </main>
  );
}
