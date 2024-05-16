import FullPageImage from "~/app/_components/full-image-page";

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return <FullPageImage photoId={Number(photoId)}></FullPageImage>;
}
