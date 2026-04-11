interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
}

export default function CTAButton({ href, children, variant = "primary" }: CTAButtonProps) {
  const styles: React.CSSProperties =
    variant === "primary"
      ? {
          display: "inline-block",
          background: "#3b82f6",
          color: "#ffffff",
          padding: "12px 24px",
          borderRadius: "8px",
          fontWeight: 600,
          fontSize: "15px",
          textDecoration: "none",
          border: "2px solid #3b82f6",
          cursor: "pointer",
          transition: "background 0.15s",
        }
      : variant === "secondary"
        ? {
            display: "inline-block",
            background: "#0f172a",
            color: "#ffffff",
            padding: "12px 24px",
            borderRadius: "8px",
            fontWeight: 600,
            fontSize: "15px",
            textDecoration: "none",
            border: "2px solid #0f172a",
            cursor: "pointer",
          }
        : {
            display: "inline-block",
            background: "transparent",
            color: "#3b82f6",
            padding: "12px 24px",
            borderRadius: "8px",
            fontWeight: 600,
            fontSize: "15px",
            textDecoration: "none",
            border: "2px solid #3b82f6",
            cursor: "pointer",
          };

  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow sponsored noopener noreferrer"
      style={styles}
    >
      {children}
    </a>
  );
}
