/* src/app/(home)/layout.tsx */

/* Import media */

/* Import styles */
import styles from './layout.module.scss';

/* Import components */

/* Home3Layout component defines the layout structure of the homepage */
const Home3Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.home_3_layout}>
      {/* COMPONENT: Header7PagePart */}
      <div>HEADER</div>
      {/* Main content to render the child components */}
      <main className={styles.home_main}>{children}</main>
      {/* COMPONENT: Footer3PagePart */}
      <div>FOOTER</div>
    </div>
  );
};

Home3Layout.displayName = 'Home3Layout';

export default Home3Layout;
