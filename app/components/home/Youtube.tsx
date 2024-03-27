/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect } from "react";
import $ from "jquery";

export default function Youtube({ ...props }: {
  id: string;
}) {
  // Props
  const { id } = props;
  // Effects
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // @ts-ignore
      new VideoBackgrounds("[data-vbg]");
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [$]);
  // Render
  return (
    <>
      <script type={ "text/javascript" } src={ "https://unpkg.com/youtube-background/jquery.youtube-background.min.js" }></script>
      <div data-vbg={ `https://www.youtube.com/watch?v=${ id }` } className={ "h-[200px] md:h-[400px] lg:h-[1200px]" }></div>
    </>
  );
}