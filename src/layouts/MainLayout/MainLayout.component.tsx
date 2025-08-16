import { IReactChildren } from '@/types';
import { Footer, Header } from '@components';

export const MainLayout: React.FC<IReactChildren> = ({ children }) => {
  return (
    <div>
      <Header url="/" />
      {children}
      <Footer />
    </div>
  );
}