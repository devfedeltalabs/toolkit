import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 25 24" fill="none" {...props}>
<path fill="none" d="M19.8333 8.70977L14.5003 4.56177C14.0323 4.19768 13.4563 4 12.8633 4C12.2704 4 11.6943 4.19768 11.2263 4.56177L5.89233 8.70977C5.57177 8.95905 5.31242 9.2783 5.13408 9.64312C4.95574 10.0079 4.86314 10.4087 4.86333 10.8148V18.0148C4.86333 18.5452 5.07404 19.0539 5.44911 19.429C5.82419 19.8041 6.33289 20.0148 6.86333 20.0148H18.8633C19.3938 20.0148 19.9025 19.8041 20.2775 19.429C20.6526 19.0539 20.8633 18.5452 20.8633 18.0148V10.8148C20.8633 9.99177 20.4833 9.21477 19.8333 8.70977Z" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.8333 15C14.6233 16.333 11.0413 16.333 8.83333 15" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Svg>
  );
};

export default Icon;
