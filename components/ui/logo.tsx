import Link from "next/link";
import WordMark from "./wordmark";

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="$GMEonSol">
      <WordMark />
    </Link>
  );
}
