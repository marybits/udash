export default function Badge({ children, variant = "default", className = "" }) {
  const base =
    "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium";

  const styles = {
    
    default: "bg-slate-100 text-slate-700",

    dark: "bg-slate-900 text-white",
    
    success:
      "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200",

    info:
      "bg-slate-50 text-sky-800 ring-1 ring-slate-200",
  };

  return (
    <span className={`${base} ${styles[variant]} ${className}`}>
      {children}
    </span>
  );
}
