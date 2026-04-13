import Image from "next/image";
import { urlFor } from "@/sanity/image";

interface Props {
  image: { asset: { _ref: string }; alt?: string } | null | undefined;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
}

export default function SanityImage({ image, width, height, className, priority }: Props) {
  if (!image?.asset) return null;
  return (
    <Image
      src={urlFor(image).width(width).height(height).auto("format").url()}
      alt={image.alt ?? ""}
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
  );
}
