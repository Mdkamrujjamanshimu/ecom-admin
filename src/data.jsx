// @ts-nocheck
import GridViewTwoToneIcon from "@mui/icons-material/GridViewTwoTone";
import CategoryTwoToneIcon from "@mui/icons-material/CategoryTwoTone";
import { RiProductHuntLine } from "react-icons/ri";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import MarkEmailUnreadTwoToneIcon from "@mui/icons-material/MarkEmailUnreadTwoTone";
import MarkChatUnreadTwoToneIcon from "@mui/icons-material/MarkChatUnreadTwoTone";
import PeopleAltTwoToneIcon from "@mui/icons-material/PeopleAltTwoTone";
import LogoutTwoToneIcon from "@mui/icons-material/LogoutTwoTone";

export const sidebarMenu = [
  {
    title: "Dashboard",
    href: "/",
    icon: <GridViewTwoToneIcon size={16} />,
  },
  {
    title: "Category",
    href: "/category",
    icon: <CategoryTwoToneIcon size={16} />,
  },
  {
    title: "Products",
    href: "/products/list",
    icon: <RiProductHuntLine size={20} />,
    items: [
      {
        title: "Products List",
        href: "/products/list",
      },
      {
        title: "Add Products",
        href: "/products/add",
      },
      {
        title: "Edit Products",
        href: "/products/edit",
      },
    ],
  },
  {
    title: "Customers",
    href: "/customers/list",
    icon: <PeopleAltTwoToneIcon size={16} />,
  },
  {
    title: "Orders",
    href: "/orders/list",
    icon: <ShoppingCartTwoToneIcon size={16} />,
  },
  {
    title: "Mail",
    href: "/mail/list",
    icon: <MarkEmailUnreadTwoToneIcon size={16} />,
  },
  {
    title: "Chat",
    href: "/chat/list",
    icon: <MarkChatUnreadTwoToneIcon size={16} />,
  },
  {
    title: "logout",
    href: "/login",
    icon: <LogoutTwoToneIcon size={16} />,
  },
];
