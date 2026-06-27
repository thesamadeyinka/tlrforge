const SectionFade = ({ position = "bottom", color = "hsl(224,50%,6%)" }: { position?: "top" | "bottom"; color?: string }) => (
  <div
    className="absolute left-0 right-0 h-24 pointer-events-none z-20"
    style={{
      [position]: 0,
      background:
        position === "bottom"
          ? `linear-gradient(to bottom, transparent, ${color})`
          : `linear-gradient(to top, transparent, ${color})`,
    } as React.CSSProperties}
  />
);

export default SectionFade;
