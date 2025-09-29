"use client";
export function BuyButton({ product, children }:{product:"audit"|"gbp"; children:React.ReactNode}) {
  const onClick = async () => {
    const res = await fetch("/api/checkout", { method:"POST", headers:{ "Content-Type":"application/json" }, body: JSON.stringify({ product }) });
    const data = await res.json();
    if (data.url) window.location.href = data.url; else alert(data.error || "Something went wrong.");
  };
  return <button onClick={onClick} className="btn">{children}</button>;
}