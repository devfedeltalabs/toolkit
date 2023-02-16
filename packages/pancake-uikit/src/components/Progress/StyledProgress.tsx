import styled from "styled-components";
import { space, variant as StyledSystemVariant } from "styled-system";
import { lightColors } from "../../theme";
import { styleVariants, styleScales } from "./themes";
import { ProgressProps, variants } from "./types";

interface ProgressBarProps {
  primary?: boolean;
  $useDark: boolean;
  $background?: string;
}

export const Bar = styled.div<ProgressBarProps>`
  position: absolute;
  top: 0;
  left: 0;
  background: ${({ theme, $useDark, primary, $background }) => {
    if ($background) return $background;
    if ($useDark) return primary ? theme.colors.primaryBright : `${theme.colors.primaryBright}80`;
    return primary ? lightColors.primaryBright : `${lightColors.primaryBright}80`;
  }};
  height: 100%;
  transition: width 200ms ease;
`;

Bar.defaultProps = {
  primary: false,
};

interface StyledProgressProps {
  variant: ProgressProps["variant"];
  scale: ProgressProps["scale"];
  $useDark: boolean;
}

const StyledProgress = styled.div<StyledProgressProps>`
  position: relative;
  background-color: ${({ theme}) => (theme.isDark ? theme.colors.backgroundModal : lightColors.input)};
  box-shadow: ${({ theme }) => theme.shadows.inset};
  overflow: hidden;

  ${Bar} {
    // border-top-left-radius: ${({ variant }) => (variant === variants.FLAT ? "0" : "32px")};
    // border-bottom-left-radius: ${({ variant }) => (variant === variants.FLAT ? "0" : "32px")};
    border-radius: ${({ variant }) => (variant === variants.FLAT ? "0" : "32px")};
  }

  ${StyledSystemVariant({
    variants: styleVariants,
  })}
  ${StyledSystemVariant({
    prop: "scale",
    variants: styleScales,
  })}
  ${space}
`;

export default StyledProgress;
