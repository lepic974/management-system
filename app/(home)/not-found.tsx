import { TriangleAlert } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="card py-10 text-white text-center bg-blue-400">
      <h2 className="header flex-center">
        <TriangleAlert className="mr-2" size={32} />
        <span>Not Found</span>
      </h2>
      <p className="sub-header p-10">Could not find requested resource.</p>
      <Link href="/features" className="text-sm underline">
        Return Home
      </Link>
    </div>
  );
}
