import { getMyImages } from "~/server/queries";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await getMyImages();

  return (
    <main className="">
      <div className="flex flex-wrap justify-center gap-4">
        {images
          ? [
              ...images,
              ...images,
              ...images,
              ...images,
              ...images,
              ...images,
              ...images,
              ...images,
              ...images,
            ].map((image) => (
              <div key={image.id} className="h-48 w-48  p-4">
                <Link href={`/img/${image.id}`}>
                  <Image
                    src={image.url}
                    style={{ objectFit: "contain" }}
                    width={192}
                    height={192}
                    alt={image.name}
                  ></Image>
                </Link>
              </div>
            ))
          : "Please sign in to see your images"}
      </div>
      <p>Hello!! galery in progress</p>
    </main>
  );
}
