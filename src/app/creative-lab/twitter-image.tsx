import { ImageResponse } from "next/og";
import opengraphImage, {
  alt,
  size,
  contentType,
} from "./opengraph-image";

export { alt, size, contentType };
export const dynamic = "force-static";

export default function TwitterImage() {
  return opengraphImage();
}
