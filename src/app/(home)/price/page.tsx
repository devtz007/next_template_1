/* Import media */

/* Import custom components */

/* Import styles */
import './page.scss';

/**
 * This component supports passing additional styles via props and displays a default label if none is provided.
 * @example
 * ```tsx
 * <Price1Page />
 * ```
 */
const Price1Page: React.FC = () => {
  return <div className="price_3_page page_type_1">PRICE PAGE</div>;
};

Price1Page.displayName = 'Price1Page';

export default Price1Page;
