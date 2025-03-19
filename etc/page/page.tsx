/* Import custom components */

/* Import media */

/* Import styles */
import './page.scss';

/* Define data type of props */
interface Props {
  infoP?: object;
}

/**
 * This component supports passing additional styles via props and displays a default label if none is provided.
 
 * @param infoP - Pass info here
 * @example
 * <Prototype1RPagePart
 *   infoP={{ }}
 * />
 */

const Prototype1RPagePart: React.FC<Props> = ({ infoP }) => {
  return <div className="prototype_1_r_pagePart">abcd</div>;
};

Prototype1RPagePart.displayName = 'Prototype1RPagePart';

export default Prototype1RPagePart;
