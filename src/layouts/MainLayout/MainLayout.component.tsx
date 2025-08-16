import { Footer, Header } from '@components';
import { IMainLayoutProps } from './MainLayout';

export const MainLayout: React.FC<IMainLayoutProps> = ({ children, navigation }) => {
  return (
    <div>
      <Header url={navigation.url} />
      {children}
      <Footer />
    </div>
  );
}