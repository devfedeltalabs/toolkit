import React, { useContext } from "react";
import { MenuContext } from "../../widgets/Menu/context";
import { Flex } from "../Box";
import AnimatedIconComponent from "../Svg/AnimatedIconComponent";
import { StyledBottomNavItem, StyledBottomNavText } from "./styles";
import { BottomNavItemProps } from "./types";

const BottomNavItem: React.FC<BottomNavItemProps> = ({
  label,
  iconName,
  href,
  showItemsOnMobile = false,
  isActive = false,
  ...props
}) => {
  const { linkComponent } = useContext(MenuContext);
  const bottomNavItemContent = (
    <Flex flexDirection="column" justifyContent="center" alignItems="center" height="100%">
      {iconName && (
        <AnimatedIconComponent
          iconName={iconName}
          height="22px"
          width="21px"
          color={isActive ? "primaryBright" : "textSubtle"}
          isActive={isActive}

        />
      )}
      <StyledBottomNavText
        color={isActive ? "primaryBright" : "textSubtle"}
        fontWeight={isActive ? "600" : "400"}
        fontSize="14px"
      >
        {label}
      </StyledBottomNavText>
    </Flex>
  );

  return showItemsOnMobile ? (
    <StyledBottomNavItem type="button" {...props}>
      {bottomNavItemContent}
    </StyledBottomNavItem>
  ) : (
    <StyledBottomNavItem as={linkComponent} href={href} {...props}>
      {bottomNavItemContent}
    </StyledBottomNavItem>
  );
};

export default BottomNavItem;
