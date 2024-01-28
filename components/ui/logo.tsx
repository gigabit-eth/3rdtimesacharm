import Link from "next/link";
import WSB from "@/components/ui/wsb";

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="$GMEonSol">
      <WSB />
    </Link>
  );
}
