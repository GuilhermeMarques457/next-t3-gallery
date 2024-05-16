import { getImage } from "~/server/queries";
import Image from "next/image";
import { Modal } from "~/app/_components/modal";
import FullPageImage from "~/app/_components/full-image-page";

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return (
    <Modal>
      <FullPageImage photoId={Number(photoId)}></FullPageImage>
    </Modal>
  );
}
