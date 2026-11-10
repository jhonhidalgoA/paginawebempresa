import useReveal from "@hooks/useReveal";
import "./Reveal.css";


export default function Reveal({
  as: Tag = "div",
  variant = "fade-up",
  delay = 0,
  duration,
  once = true,
  threshold,
  className = "",
  style,
  children,
  ...rest
}) {
  const [ref, isVisible] = useReveal({ once, threshold });

  const vars = {
    "--reveal-delay": `${delay}ms`,
    ...(duration ? { "--reveal-duration": `${duration}ms` } : {}),
    ...style,
  };

  const isLine = variant === "line";

  return (
    <Tag
      ref={ref}
      className={`reveal ${isLine ? "" : className}`.trim()}
      data-variant={variant}
      data-visible={isVisible}
      style={vars}
      {...rest}
    >
      {isLine ? (
        <span className={`reveal__inner ${className}`.trim()}>{children}</span>
      ) : (
        children
      )}
    </Tag>
  );
}