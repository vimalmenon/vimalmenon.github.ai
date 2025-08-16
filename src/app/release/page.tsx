import { MainLayout } from "@layouts";
import { navigationMap } from "@data";

export default function Home() {
  return (
    <MainLayout navigation={navigationMap.Home}>
      Release
    </MainLayout>
  );
}
