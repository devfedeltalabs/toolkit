import * as React from "react";
import { useTheme } from "styled-components";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme()
  return (
    <Svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12.5 25C5.59644 25 0 19.4036 0 12.5C0 5.59644 5.59644 0 12.5 0C19.4036 0 25 5.59644 25 12.5C25 19.4036 19.4036 25 12.5 25Z"/>
      <path d="M19.9745 13.2036L17.929 6.60668C17.8014 6.24374 17.4955 6 17.0864 6C16.6773 6 16.3452 6.21883 16.2175 6.58177L14.8626 10.414H10.1355L8.78056 6.58355C8.65295 6.22061 8.32079 6.00178 7.91169 6.00178C7.50259 6.00178 7.17043 6.24374 7.06909 6.60846L5.02547 13.2036C4.94853 13.4456 5.05174 13.7125 5.25629 13.8584L12.4887 19L19.7456 13.8584C19.9482 13.7142 20.0514 13.4474 19.9745 13.2036Z" fill={theme.isDark ? "#000" : "#fff"}/>
    </Svg>
  );
};

export default Icon;
