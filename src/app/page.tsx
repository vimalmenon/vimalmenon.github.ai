import { MainLayout } from "@layouts";
import { navigationMap } from "@data";

export default function Home() {
  return (
    <div className="min-h-screen p-8 text-center">
      <MainLayout navigation={navigationMap.Home}>
        Vimal Menon
      </MainLayout>
    </div>
  );
}
