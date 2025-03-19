/* src/app/(home)/page.tsx */
import Image from 'next/image';

/* Import media */

/* Import custom components */

/* Import styles */
import './page.scss';

/**
 * This component supports passing additional styles via props and displays a default label if none is provided.
 
 * @param infoP - Pass info here
 * @example
 * ```tsx
 * <Home3Page />
 * ```
 */

const Home3Page: React.FC = () => {
  return <div className="home_3_page page_type_1">HOME PAGE</div>;
};

Home3Page.displayName = 'Home3Page';

export default Home3Page;
