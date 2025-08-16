import { MainLayout } from "@layouts";
import { NotFound } from "@/views";
import { navigationMap } from "@data";

export default function NotFoundPage() {
  return (
    <MainLayout navigation={navigationMap.Home}>
      <NotFound />
    </MainLayout>
  );
}
