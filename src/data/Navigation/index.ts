import { Icons } from "@data";

import { INavigationItem } from "@types";

export const Home: INavigationItem = {
  url: "/",
  Icon: Icons.Home,
  name: "Home",
  segments: ["/"],
  breadcrumb: [{ url: "/", Icon: Icons.Home, name: "Home" }],
};

export const Release: INavigationItem = {
  url: "/release",
  Icon: Icons.Package,
  name: "Release",
  segments: ["/release"],
  breadcrumb: [{ url: "/release", Icon: Icons.Package, name: "Release" }],
};

export const Navigation: INavigationItem[] = [
  Home,

  {
    url: "/blogs",
    Icon: Icons.BookOpen,
    name: "Blogs",
    segments: ["/blogs"],
    breadcrumb: [
      {
        url: "/blogs",
        Icon: Icons.BookOpen,
        name: "Blogs",
      },
    ],
  },
  Release,
  {
    url: "/admin",
    Icon: Icons.Settings,
    name: "Admin",
    segments: ["/admin"],
    breadcrumb: [
      {
        url: "/admin",
        Icon: Icons.Settings,
        name: "Admin",
      },
    ],
  },
];

export const navigationMap = {
  Home,
  Release,
};
