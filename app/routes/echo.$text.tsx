import { useParams } from "@remix-run/react";

export default function Echo() {
  const params = useParams();
  const text = params.text || "";

  // Replace hyphens with spaces
  const displayText = text.replace(/-/g, " ");

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">{displayText}</h1>
      </div>
    </div>
  );
}
