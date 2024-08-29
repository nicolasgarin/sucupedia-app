import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

function HomePage() {
  return (
    <div className="flex justify-between">
      <h1 className="text-4xl font-bold">Sucupedia</h1>
      <Link href="/sucus/new"
      className={buttonVariants()}>Create product</Link>
    </div>
  );
}

export default HomePage;
