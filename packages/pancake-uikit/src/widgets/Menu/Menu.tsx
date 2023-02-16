import throttle from "lodash/throttle";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import BottomNav from "../../components/BottomNav";
import { Box } from "../../components/Box";
import Flex from "../../components/Box/Flex";
import Footer from "../../components/Footer";
import MenuItems from "../../components/MenuItems/MenuItems";
import { SubMenuItems } from "../../components/SubMenuItems";
import { useMatchBreakpoints } from "../../hooks";
import CakePrice from "../../components/CakePrice/CakePrice";
import Logo from "./components/Logo";
import { MENU_HEIGHT, MENU_HEIGHT_MOBILE, MOBILE_MENU_HEIGHT, TOP_BANNER_HEIGHT, TOP_BANNER_HEIGHT_MOBILE } from "./config";
import { NavProps } from "./types";
import LangSelector from "../../components/LangSelector/LangSelector";
import { MenuContext } from "./context";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
`;

const StyledNav = styled.nav<{ bgColorMenu: any, showMenuUp: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${MENU_HEIGHT}px;
  /* background-color: ${({ theme }) => theme.nav.background}; */
  background-color: ${({ bgColorMenu, showMenuUp }) => showMenuUp ? bgColorMenu : ""};
  box-shadow: ${({ showMenuUp }) => showMenuUp ? "rgba(17, 17, 26, 0.1) 0px 1px 0px" : ""};
  /* border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder}; */
  transform: translate3d(0, 0, 0);

  padding-left: 150px;
  padding-right: 150px;

  @media screen and (max-width: 1024px) {
    padding: 0px 100px;
  }

  @media screen and (max-width: 768px) {
    padding: 0px 70px    
  }

  @media screen and (max-width: 600px) {
    padding: 0px 30px;
  }

  @media screen and (max-width: 350px) {
    padding: 0px 10px;
  }
`;

const FixedContainer = styled.div<{ showMenu: boolean; height: number }>`
  position: fixed;
  top: ${({ showMenu, height }) => (showMenu ? 0 : `-${height}px`)};
  left: 0;
  transition: top 0.2s;
  height: ${({ height }) => `${height}px`};
  width: 100%;
  z-index: 20;
`;

const TopBannerContainer = styled.div<{ bgColorMenu: string, showMenuUp: boolean, height: number }>`
  height: ${({ height }) => `${height}px`};
  min-height: ${({ height }) => `${height}px`};
  max-height: ${({ height }) => `${height}px`};
  width: 100%;
  background-color: ${({ bgColorMenu, showMenuUp }) => showMenuUp ? bgColorMenu : ""};
`;

const BodyWrapper = styled(Box)`
  position: relative;
  display: flex;
`;

const Inner = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  flex-grow: 1;
  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate3d(0, 0, 0);
  max-width: 100%;
`;

const Menu: React.FC<NavProps> = ({
  linkComponent = "a",
  userMenu,
  banner,
  globalMenu,
  isDark,
  toggleTheme,
  currentLang,
  setLang,
  cakePriceUsd,
  links,
  subLinks,
  footerLinks,
  activeItem,
  activeSubItem,
  langs,
  buyCakeLabel,
  children,
  linkImages,
  bgColorMenu
}) => {
  const { isMobile } = useMatchBreakpoints();
  let TOP_BANNER = TOP_BANNER_HEIGHT_MOBILE;

  if (window.innerWidth > 768) {
   TOP_BANNER = 160
  } 
  if (window.innerWidth <= 768 && window.innerWidth > 680) {
    TOP_BANNER = 65
  } 
  if (window.innerWidth <= 680 && window.innerWidth > 600) {
    TOP_BANNER = 100
  } 
  else if (window.innerWidth <= 600) {
    TOP_BANNER = 120
  }
  const [topBannerSize, setTopBannerSize] = useState(TOP_BANNER);
  const [windowSize, setWindowSize] = useState(window.innerWidth)
  
  const [showMenu, setShowMenu] = useState(true);
  const [showMenuUp, setShowMenuUp] = useState(false);
  const refPrevOffset = useRef(typeof window === "undefined" ? 0 : window.pageYOffset);


  // const topBannerHeight = windowSize <= 768 ? TOP_BANNER_HEIGHT_MOBILE : TOP_BANNER_HEIGHT;

  // const topBannerHeight = windowSize <= 600 ? TOP_BANNER_HEIGHT_MOBILE : TOP_BANNER_HEIGHT;

  const totalTopMenuHeight = banner ? MENU_HEIGHT + topBannerSize : MENU_HEIGHT;


  useEffect(() => {
      const handleResize = () => {
          setWindowSize(window.innerWidth)
          if (window.innerWidth > 768) {
            setTopBannerSize(160)
          } 
          if (window.innerWidth <= 768 && window.innerWidth > 680) {
            setTopBannerSize(65)
          } 
          if (window.innerWidth <= 680 && window.innerWidth > 600) {
            setTopBannerSize(100)
          } 
          else if (window.innerWidth <= 600) {
            setTopBannerSize(120)
          }
      }

      window.addEventListener('resize', handleResize)

      return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset;
      const isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
      const isTopOfPage = currentOffset === 0;
      // Always show the menu when user reach the top
      if (isTopOfPage) {
        setShowMenu(true);
        setShowMenuUp(false);
      }
      // Avoid triggering anything at the bottom because of layout shift
      else if (!isBottomOfPage) {
        if (currentOffset < refPrevOffset.current || currentOffset <= totalTopMenuHeight) {
          // Has scroll up
          setShowMenu(true);
          setShowMenuUp(true);
        } else {
          // Has scroll down
          setShowMenu(false);
          setShowMenuUp(false);
        }
      }
      refPrevOffset.current = currentOffset;
    };
    const throttledHandleScroll = throttle(handleScroll, 200);

    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, [totalTopMenuHeight]);

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === "Home");

  const subLinksWithoutMobile = subLinks?.filter((subLink) => !subLink.isMobileOnly);
  const subLinksMobileOnly = subLinks?.filter((subLink) => subLink.isMobileOnly);

  return (
    <MenuContext.Provider value={{ linkComponent }}>
      <Wrapper> 
        <FixedContainer showMenu={showMenu} height={totalTopMenuHeight}>
          {banner && <TopBannerContainer bgColorMenu="#FFFFFF" showMenuUp={showMenuUp} height={topBannerSize}>{banner}</TopBannerContainer>}
          <StyledNav bgColorMenu="#FFFFFF" showMenuUp={showMenuUp}>
            <Flex>
              <Logo isDark={isDark} href={homeLink?.href ?? "/"} linkImages={linkImages}/>
              {windowSize> 840 && <MenuItems items={links} activeItem={activeItem} activeSubItem={activeSubItem} ml="12px" />}
            </Flex>
            <Flex alignItems="center" height="100%">
              {/* {!isMobile && (
                <Box mr="12px">
                  <CakePrice cakePriceUsd={cakePriceUsd} />
                </Box>
              )}
              <Box mt="4px">
                <LangSelector
                  currentLang={currentLang}
                  langs={langs}
                  setLang={setLang}
                  buttonScale="xs"
                  color="textSubtle"
                  hideLanguage
                />
              </Box> */}
              {/* {globalMenu}  */}
              {userMenu}
            </Flex>
          </StyledNav>
        </FixedContainer>
        {subLinks && (
          <Flex justifyContent="space-around">
            <SubMenuItems items={subLinksWithoutMobile} activeItem={activeSubItem}/>

            {subLinksMobileOnly?.length > 0 && (
              <SubMenuItems
                items={subLinksMobileOnly}
                // mt={`${totalTopMenuHeight + 1}px`}
                activeItem={activeSubItem}
                isMobileOnly
              />
            )}
          </Flex>
        )}
        {/* <BodyWrapper mt={!subLinks ? `${totalTopMenuHeight + 1}px` : "0"}> */}
        <BodyWrapper>
          <Inner isPushed={false} showMenu={showMenu}>
            {children}
            {/* <Footer
              items={footerLinks}
              isDark={isDark}
              toggleTheme={toggleTheme}
              langs={langs}
              setLang={setLang}
              currentLang={currentLang}
              cakePriceUsd={cakePriceUsd}
              buyCakeLabel={buyCakeLabel}
              mb={[`${MOBILE_MENU_HEIGHT}px`, null, "0px"]}
            /> */}
          </Inner>
        </BodyWrapper>
        {windowSize<= 840 && <BottomNav items={links} activeItem={activeItem} activeSubItem={activeSubItem} />}
      </Wrapper>
    </MenuContext.Provider>
  );
};

export default Menu;
