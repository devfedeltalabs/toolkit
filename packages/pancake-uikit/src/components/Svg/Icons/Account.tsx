import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => (
  <Svg viewBox="0 0 25 24"{...props} style={{fill:"none"}}>
<path d="M12.1666 11C14.3758 11 16.1666 9.20914 16.1666 7C16.1666 4.79086 14.3758 3 12.1666 3C9.95749 3 8.16663 4.79086 8.16663 7C8.16663 9.20914 9.95749 11 12.1666 11Z" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.16663 21V19C6.16663 17.9391 6.58805 16.9217 7.3382 16.1716C8.08834 15.4214 9.10576 15 10.1666 15H14.1666C15.2275 15 16.2449 15.4214 16.9951 16.1716C17.7452 16.9217 18.1666 17.9391 18.1666 19V21" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>

  </Svg>
);

export default Icon;
