import { Footer, Header, DynamicBreadcrumb } from '@components';
import { IMainLayoutProps } from './MainLayout';
import * as motion from 'motion/react-client';


export const MainLayout: React.FC<IMainLayoutProps> = ({ children, navigation }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header url={navigation.url} />
      <DynamicBreadcrumb breadcrumbs={navigation.breadcrumb} />
      <motion.main
        className="flex-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
}