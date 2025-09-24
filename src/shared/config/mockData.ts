import type { INavigationItem } from "@/types";

export const NAVIGATION_ITEMS: INavigationItem[] = [
  { name: "Widgets", href: "/widgets", current: true },
  { name: "About", href: "/about", current: false },
];

export const USER_NAVIGATION_ITEMS = [{ name: "Sign out", href: "/" }];
