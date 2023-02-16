import { noop } from "lodash";
import { DropdownMenuItems, DropdownMenuItemType } from "../../components/DropdownMenu/types";
import { MenuItemsType } from "../../components/MenuItems/types";
import { LinkStatus } from "./types";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export const links: MenuItemsType[] = [
  {
    label: 'Trade',
    icon: 'Account',
    href: '/swap',
    showItemsOnMobile: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/liquidity',
      },
    ],
  },
  {
    label: 'Earn',
    href: '/farms',
    icon: 'Earn',
    items: [
      {
        label:'Farms',
        href: '/farms',
      },
      {
        label: 'Pools',
        href: '/pools',
      },
    ],
  },
  {
    label: 'Membership',
    icon: 'Membership',
    href: '/membership',
    showItemsOnMobile:true,
    items: [
      {
        label: 'Membership',
        href: '/membership',
      },
    ]
  },
  {
    label: 'DIPO ®',
    icon: 'Dipo',
    href: '/dipo/live',
    showItemsOnMobile:true,
    items: [
      {
        label: 'DIPO®',
        href: '/dipo/live',
      },
    ]
  }
];

export const userMenulinks: DropdownMenuItems[] = [
  {
    label: "Wallet",
    onClick: noop,
    type: DropdownMenuItemType.BUTTON,
  },
  // {
  //   label: "Transactions",
  //   type: DropdownMenuItemType.BUTTON,
  // },
  // {
  //   type: DropdownMenuItemType.DIVIDER,
  // },
  // {
  //   type: DropdownMenuItemType.BUTTON,
  //   disabled: true,
  //   label: "Dashboard",
  // },
  // {
  //   type: DropdownMenuItemType.BUTTON,
  //   disabled: true,
  //   label: "Portfolio",
  // },
  // {
  //   label: "Profile",
  //   href: "/profile",
  // },
  // {
  //   type: DropdownMenuItemType.EXTERNAL_LINK,
  //   href: "https://pancakeswap.finance",
  //   label: "Link",
  // },
  // {
  //   type: DropdownMenuItemType.DIVIDER,
  // },
  {
    type: DropdownMenuItemType.BUTTON,
    onClick: noop,
    label: "Disconnect",
  },
];

export const MENU_HEIGHT = 90;
export const MENU_HEIGHT_MOBILE = 150;
export const MENU_ENTRY_HEIGHT = 48;
export const MOBILE_MENU_HEIGHT = 44;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
export const TOP_BANNER_HEIGHT = 160;
export const TOP_BANNER_HEIGHT_MOBILE_768 = 65;
export const TOP_BANNER_HEIGHT_MOBILE = 120;
