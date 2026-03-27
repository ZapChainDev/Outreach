import { notFound } from "next/navigation";

// No UI served. All traffic should go directly to /pic for road.png
export default function Page() {
  notFound();
}
