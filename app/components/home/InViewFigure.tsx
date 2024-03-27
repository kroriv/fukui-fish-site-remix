import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { m, domAnimation, useAnimation, AnimatePresence, LazyMotion } from "framer-motion";

export default function HeroFigure({ ...props }: {
  src: string;
  alt: string;
}) {
  // Props
  const { src, alt } = props;
  // Hooks
  const controls = useAnimation();
  const [ref, inView] = useInView();
  // Effects
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  // Variants
  const variants = {
    visible: { opacity: 1, transition: { duration: 1 } },
    hidden: { opacity: 0,  }
  };
  // Render
  return (
    <figure>
      <LazyMotion features={ domAnimation }>
        <AnimatePresence>
          <m.img 
            ref={ ref }
            variants={ variants }
            initial={ "hidden" }
            animate={ controls }
            src={ src } 
            alt={ alt } 
            loading={ "lazy" }
          />
        </AnimatePresence>
      </LazyMotion>
    </figure>
  );
}