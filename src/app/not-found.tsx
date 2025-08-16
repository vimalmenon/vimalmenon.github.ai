import { MainLayout } from "@layouts";
import { NotFound } from "@/views";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen p-8 text-center">
      <MainLayout>
        <NotFound />
      </MainLayout>
    </div>
  );
}
