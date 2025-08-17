import { Icons } from "@data";

import { INavigationItem } from "@types";

export const Home: INavigationItem = {
  url: "/",
  Icon: Icons.Home,
  name: "Home",
  segments: ["/"],
  breadcrumb: [{ url: "/", Icon: Icons.Home, name: "Home" }],
};

export const blogs: INavigationItem = {
  url: "/blogs",
  Icon: Icons.BookOpen,
  name: "Blogs",
  segments: ["/blogs"],
  breadcrumb: [
    { url: "/", Icon: Icons.Home, name: "Home" },
    { url: "/blogs", Icon: Icons.BookOpen, name: "Blogs" },
  ],
};

export const Release: INavigationItem = {
  url: "/release",
  Icon: Icons.Package,
  name: "Release",
  segments: ["/release"],
  breadcrumb: [
    { url: "/", Icon: Icons.Home, name: "Home" },
    { url: "/release", Icon: Icons.Package, name: "Release" },
  ],
};

export const Navigation: INavigationItem[] = [
  Home,
  blogs,
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
  blogs,
  Release,
};
