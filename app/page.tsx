import { notFound } from "next/navigation";

// No UI served. All traffic should go directly to /outreach-preview.jpg
export default function Page() {
  notFound();
}
