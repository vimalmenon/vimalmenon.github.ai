import { IReactChildren } from "@/types";
import * as motion from 'motion/react-client';

export const AdminLayout: React.FC<IReactChildren> = ({ children }) => {
  return (
    <main className="min-h-screen flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        key={location?.pathname}
      >
        {children}
      </motion.div>
    </main>
  );
}