import React from "react";
import { useTheme } from "styled-components";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
    const theme = useTheme()
  return (
    <Svg viewBox="0 0 25 24" {...props}>
<path d="M17.141 1.71069L16.085 2.78994L19.2972 5.99994H3.49995V7.49994H19.2972L16.0857 10.7107L17.141 11.7892L22.1787 6.74994L17.141 1.71069ZM7.8597 12.2107L2.8197 17.2499L7.8597 22.2892L8.9142 21.2107L5.70345 17.9999H21.5V16.4999H5.7027L8.9142 13.2892L7.8597 12.2107Z" fill={theme.colors.text}/>
    </Svg>
  );
};

export default Icon;
