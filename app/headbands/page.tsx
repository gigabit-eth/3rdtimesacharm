// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Generator from "./generator";

export default function Page() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Generator />
    </div>
  );
}
