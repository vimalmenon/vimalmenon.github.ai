import { MainLayout } from "@layouts";
import { NotFound } from "@/views";
import { navigationMap } from "@data";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen p-8 text-center">
      <MainLayout navigation={navigationMap.Home}>
        <NotFound />
      </MainLayout>
    </div>
  );
}
