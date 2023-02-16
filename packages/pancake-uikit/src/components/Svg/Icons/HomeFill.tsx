import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 25 24" fill="none" {...props}>
<path fill="none" d="M19.8333 8.71001L14.5003 4.56201C14.0323 4.19792 13.4563 4.00024 12.8633 4.00024C12.2704 4.00024 11.6944 4.19792 11.2263 4.56201L5.89234 8.71001C5.57179 8.9593 5.31244 9.27854 5.1341 9.64336C4.95576 10.0082 4.86315 10.4089 4.86334 10.815V18.015C4.86334 18.5454 5.07406 19.0542 5.44913 19.4292C5.8242 19.8043 6.33291 20.015 6.86334 20.015H18.8633C19.3938 20.015 19.9025 19.8043 20.2776 19.4292C20.6526 19.0542 20.8633 18.5454 20.8633 18.015V10.815C20.8633 9.99201 20.4833 9.21501 19.8333 8.71001Z" stroke="#6B39F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.8333 15C14.6233 16.333 11.0413 16.333 8.83334 15" stroke="#6B39F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Svg>
  );
};

export default Icon;
