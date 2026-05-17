import { ArrowRight, Check, Coffee, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

type FeatureCardProps = {
  title: string;
  eyebrow: string;
  icon: "playstore" | "java" | "zoho";
  points: string[];
  linkLabel: string;
  href: string;
  delay?: number;
};

const cardEase = [0.22, 1, 0.36, 1] as const;

function FeatureIcon({ type }: { type: FeatureCardProps["icon"] }) {
  if (type === "playstore") {
    return (
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/15 bg-black/55 shadow-[0_0_32px_rgba(222,219,200,0.08)]">
        <img src="assets/logo-google-play.svg" alt="Google Play" className="h-7 w-7 object-contain" />
      </span>
    );
  }

  if (type === "zoho") {
    return (
      <span className="flex h-12 w-16 items-center justify-center rounded-2xl border border-primary/15 bg-black/55 px-2 shadow-[0_0_32px_rgba(222,219,200,0.08)]">
        <img src="assets/logo-zoho.svg" alt="Zoho" className="h-8 w-full object-contain" />
      </span>
    );
  }

  if (type === "java") {
    return (
      <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/15 bg-[#0d1a1d] shadow-[0_0_32px_rgba(222,219,200,0.08)]">
        <Coffee className="h-6 w-6 text-primary" strokeWidth={1.6} />
        <span className="absolute -bottom-1 rounded-full bg-primary px-1.5 py-0.5 text-[8px] font-bold leading-none text-black">
          Java
        </span>
      </span>
    );
  }

  return null;
}

function SkillIcon({ type }: { type: FeatureCardProps["icon"] }) {
  if (type === "playstore") {
    return (
      <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-black/40">
        <img src="assets/logo-google-play.svg" alt="" className="h-4 w-4 object-contain" />
      </span>
    );
  }

  return null;
}

export function FeatureCard({ title, eyebrow, icon, points, linkLabel, href, delay = 0 }: FeatureCardProps) {
  const isHash = href.startsWith("#");

  return (
    <motion.article
      className="flex h-full min-h-[420px] flex-col justify-between rounded-[1.35rem] bg-[#212121] p-5 sm:p-6 lg:min-h-[480px]"
      initial={{ opacity: 0, scale: 0.95, y: 24 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.75, delay, ease: cardEase }}
    >
      <div>
        <div className="flex items-start justify-between gap-4">
          <FeatureIcon type={icon} />
          <span className="text-xs text-primary/50">{eyebrow}</span>
        </div>
        <div className="mt-7 flex items-start justify-between gap-4">
          <h3 className="max-w-[12rem] text-2xl font-normal leading-[0.95] text-[#E1E0CC] sm:text-3xl">{title}</h3>
          <SkillIcon type={icon} />
        </div>
        <div className="mt-8 space-y-4">
          {points.map((point) => (
            <div key={point} className="flex gap-3">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.8} />
              <p className="text-sm leading-snug text-gray-400">{point}</p>
            </div>
          ))}
        </div>
      </div>
      <a
        href={href}
        target={isHash ? undefined : "_blank"}
        rel={isHash ? undefined : "noreferrer"}
        className="group mt-10 inline-flex w-fit items-center gap-2 text-sm font-medium text-primary"
      >
        {linkLabel}
        {isHash ? (
          <ArrowRight className="h-4 w-4 -rotate-45 transition-transform group-hover:translate-x-1" />
        ) : (
          <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        )}
      </a>
    </motion.article>
  );
}
