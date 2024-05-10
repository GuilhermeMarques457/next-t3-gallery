import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/08b19f68-58da-46bf-8637-d8a0d1a6c44c-frdshv.png",
  "https://utfs.io/f/ca4588c3-964f-40f3-9209-ae712c9e5f69-fd38st.png",
  "https://utfs.io/f/eeba8fa9-ae2a-4d35-8436-f7dcc9046180-fd38t0.png",
  "https://utfs.io/f/ac75b37f-2a6b-431a-803d-48d6b2fc49b3-roqnvi.png",
  "https://utfs.io/f/5edf3286-8981-44c1-9305-58ba65af98ae-fdaq0e.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48 p-4">
            <img src={image.url} alt="image"></img>
          </div>
        ))}
      </div>
      <p>Hello!! galery in progress</p>
    </main>
  );
}
