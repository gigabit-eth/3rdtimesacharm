import Link from "next/link";
import WSB from "@/components/ui/wsb";
import WordMark from "./wordmark";

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="$GMEonSol">
      {/* <WSB /> */}
      <WordMark />
    </Link>
  );
}
