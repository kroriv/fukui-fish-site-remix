import { Link } from "@remix-run/react";
import { useEffect, useState, useRef, useMemo } from "react";
import { m, domAnimation, LazyMotion, AnimatePresence } from "framer-motion";
import Logo from "~/components/shared/Logo";
//import Arrow from "./Arrow";

export default function Header() {
  // States
  const [loaded, setLoaded] = useState<boolean>(false);
  // Memos
  const images = useMemo(() => [
    "/assets/images/header-01.webp",
    "/assets/images/header-02.webp",
    "/assets/images/header-03.webp",
    "/assets/images/header-04.webp",
    "/assets/images/header-05.webp",
    "/assets/images/header-06.webp",
  ], []);
  // Refs
  const gridRef = useRef<HTMLDivElement>(null);
  // Effects
  useEffect(() => {
    if (gridRef && gridRef.current) {
      gridRef.current.style.height = `${ (window.innerHeight < 700) ? 700 : window.innerHeight }px`;
    }
  }, [gridRef]);
  useEffect(() => {
    const loadImages = async () => {
      const promises = images.map((src) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => resolve();
          img.src = src;
        });
      });
      await Promise.all(promises);
      setLoaded(true);
    };
    loadImages();
  }, [images]);
  // Render
  return (
    <header className={ "relative bg-blue-550 lg:h-screen" }>
      <section className={ "relative z-10 mb-0" }>
        <div className={ "grid grid-cols-2 lg:grid-cols-3" } ref={ gridRef }>
          { loaded && images.map((src, i) => 
          <Figure src={ src } alt={ `ヘッダ画像${ i + 1 }` } index={ i } key={ i }/>
          )}
        </div>
        <div className={ "absolute top-0 left-0 w-full h-full flex justify-center items-center z-10" }>
          <LazyMotion features={ domAnimation }>
            <AnimatePresence>
              { loaded &&
              <m.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 1.6, ease: "easeInOut" }}
              >
                <Logo className={ "fill-white w-60 drop-shadow-xl" }/>
              </m.p>
              }
            </AnimatePresence>
          </LazyMotion>
        </div>
        <div className={ "absolute bottom-[33px] md:bottom-[44px] flex justify-center items-center w-full z-10" }>
          <Button/>
        </div>
      </section>
    </header>
  );
}

/**
 * SubHeader
 * @returns 
 */
export const SubHeader = () => (
  <header>
    <section>
      <div className={ "w-full h-full flex justify-center items-center z-10 py-16" }>
        <Link to="/">
          <Logo className={ "fill-blue-550 w-60" }/>
        </Link>
      </div>
    </section>
  </header>
);

/**
 * Figure
 * @param props 
 * @returns 
 */
const Figure = ({ ...props }: {
  src: string;
  alt: string;
  index: number;
}) => {
  // Props
  const { src, alt, index } = props;
  // Render
  return (
    <figure className={ "block relative w-full pt-[66.7%]" }>
      <LazyMotion features={ domAnimation }>
        <AnimatePresence>
          <m.img 
            src={ src } 
            alt={ alt } 
            loading={ "eager" }
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 * index, duration: 2, ease: "easeInOut" }}
            className={ "absolute top-0 left-0 w-full h-full object-cover" }
          />
        </AnimatePresence>
      </LazyMotion>
    </figure>
  );
};

/**
 * Button
 * @returns 
 */
const Button = () => (
  <>
  {/*
    <a href={ "https://app.fukui-sakana.com" } target={ "_blank" } rel={ "noreferrer" } className={ "group flex gap-4 justify-center items-center w-[92%] md:w-[70%] h-[66px] md:h-[88px] bg-yellow-550 rounded-full hover:bg-blue-550" }>
      <span className="block text-blue-550 text-20ptr md:text-24ptr font-bold group-hover:text-white">生産・市場情報を見る</span>
      <Arrow className={ "h-2 md:h-3 stroke-blue-550 group-hover:stroke-white" }/>
    </a>
  */}
  </>
);