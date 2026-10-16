export default function Logo({ tone = "dark" }) {
  const ink = tone === "light" ? "#FFFFFF" : "#171717";
  const word = tone === "light" ? "text-white" : "text-[#171717]";

  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark ink={ink} className="h-9 w-auto shrink-0 sm:h-10" />
      <span className={`font-display text-[13px] font-bold tracking-[0.14em] sm:text-[15px] sm:tracking-[0.16em] ${word}`}>
        NARMADA MOTORS
      </span>
    </span>
  );
}

export function LogoMark({ ink = "#171717", className = "h-10 w-auto" }) {
  return (
    <svg viewBox="0 0 112 64" className={className} aria-hidden="true">
      <path fill="#FF3D57" d="M0 0h14v64H0z" />
      <path fill={ink} d="M14 0h16L48 52H44L14 0z" />
      <path fill="#FF3D57" d="M48 52h4L78 0H62L48 52z" />
      <path fill={ink} d="M78 0h12L66 52H52L78 0z" />
      <path fill={ink} d="M98 0h14v64H98z" />
    </svg>
  );
}
