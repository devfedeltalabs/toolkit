import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 57 56" fill="none" {...props}>
<rect x="0.5" width="56" height="56" rx="28" fill="#F8F5FF"/>
<path fill="none" d="M32.75 33.14V34.4C32.75 35.98 31.35 37.25 29.62 37.25H22.37C20.64 37.25 19.24 35.97 19.24 34.4V21.6C19.24 20.02 20.64 18.75 22.37 18.75H29.62C31.35 18.75 32.75 20.03 32.75 21.6V22.86" stroke="#6B39F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path  d="M37.75 28H27.8" stroke="#6B39F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path  d="M27.78 28L31.06 31.26" stroke="#6B39F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path  d="M27.78 28L31.06 24.74" stroke="#6B39F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </Svg>
  );
};

export default Icon;
