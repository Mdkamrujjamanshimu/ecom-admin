// @ts-nocheck
import GridViewTwoToneIcon from "@mui/icons-material/GridViewTwoTone";
import CategoryTwoToneIcon from "@mui/icons-material/CategoryTwoTone";
import { RiProductHuntLine } from "react-icons/ri";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import MarkEmailUnreadTwoToneIcon from "@mui/icons-material/MarkEmailUnreadTwoTone";
import MarkChatUnreadTwoToneIcon from "@mui/icons-material/MarkChatUnreadTwoTone";
import PeopleAltTwoToneIcon from "@mui/icons-material/PeopleAltTwoTone";
import LogoutTwoToneIcon from "@mui/icons-material/LogoutTwoTone";
import { title } from "node:process";

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
    items: [
      {
        title: "Category List",
        href: "/category/list",
      },
      {
        title: "Add Category",
        href: "/category/add",
      },
      {
        title: "Edit Category",
        href: "/category/edit",
      },
    ],
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
    title: "Orders",
    href: "/orders",
    icon: <ShoppingCartTwoToneIcon size={16} />,
  },
];
