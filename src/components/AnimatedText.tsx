import { motion, useInView, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useMemo, useRef } from "react";

const ease = [0.16, 1, 0.3, 1] as const;

type WordsPullUpProps = {
  text: string;
  className?: string;
  showAsterisk?: boolean;
};

export function WordsPullUp({ text, className = "", showAsterisk = false }: WordsPullUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });
  const words = text.split(" ");

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="overflow-hidden">
          <motion.span
            className="relative inline-block"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.9, delay: index * 0.08, ease }}
          >
            {word}
            {showAsterisk && index === words.length - 1 ? (
              <span className="absolute -right-[0.3em] top-[0.65em] text-[0.31em] leading-none">*</span>
            ) : null}
          </motion.span>
          {index < words.length - 1 ? <span>&nbsp;</span> : null}
        </span>
      ))}
    </span>
  );
}

type Segment = {
  text: string;
  className?: string;
};

export function WordsPullUpMultiStyle({
  segments,
  className = "",
}: {
  segments: Segment[];
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" });

  const words = useMemo(
    () =>
      segments.flatMap((segment) =>
        segment.text.split(" ").filter(Boolean).map((word) => ({
          word,
          className: segment.className ?? "",
        })),
      ),
    [segments],
  );

  return (
    <div ref={ref} className={`inline-flex flex-wrap justify-center ${className}`}>
      {words.map((item, index) => (
        <span key={`${item.word}-${index}`} className="overflow-hidden">
          <motion.span
            className={`inline-block ${item.className}`}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.9, delay: index * 0.08, ease }}
          >
            {item.word}
          </motion.span>
          {index < words.length - 1 ? <span>&nbsp;</span> : null}
        </span>
      ))}
    </div>
  );
}

function AnimatedLetter({
  character,
  index,
  total,
  progress,
}: {
  character: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const charProgress = index / total;
  const opacity = useTransform(progress, [charProgress - 0.1, charProgress + 0.05], [0.2, 1]);

  return (
    <motion.span style={{ opacity }} aria-hidden="true">
      {character}
    </motion.span>
  );
}

export function ScrollRevealParagraph({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });
  const characters = useMemo(() => Array.from(text), [text]);

  return (
    <p ref={ref} className={`relative ${className}`} style={{ position: "relative" }} aria-label={text}>
      {characters.map((character, index) => (
        <AnimatedLetter
          key={`${character}-${index}`}
          character={character}
          index={index}
          total={characters.length}
          progress={scrollYProgress}
        />
      ))}
    </p>
  );
}
