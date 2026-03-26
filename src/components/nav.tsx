import { ThemeSwitcher } from "./ThemeProvider";
import { HomeIcon, List, Download, ScrollText } from "lucide-react";
import NextLink from "next/link";

import { Dock, DockIcon, DockItem, DockLabel } from "~~/components/ui/dock";

const data = [
  {
    title: "Home",
    icon: (
      <HomeIcon className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "/",
  },
  {
    title: "Sections",
    icon: (
      <List className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "/#sections",
  },
  {
    title: "Download PDF",
    icon: (
      <Download className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "/Arthur_Labs_Whitepaper.pdf",
  },
  {
    title: "Arthur Labs",
    icon: (
      <ScrollText className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "https://arthurlabs.net",
  },
  {
    title: "Theme",
    icon: <ThemeSwitcher />,
    href: "",
  },
];

const Nav = () => {
  return (
    <div className="w-full bg-transparent relative z-[100]">
      <Dock className="items-end pb-3 bg-white dark:bg-neutral-900 z-[100]">
        {data.map((item, idx) => {
          const content = (
            <DockItem
              key={idx}
              className="aspect-square rounded-full  dark:bg-neutral-800"
            >
              <DockLabel>{item.title}</DockLabel>
              <DockIcon>{item.icon}</DockIcon>
            </DockItem>
          );

          if (item.href.startsWith("/")) {
            return (
              <NextLink href={item.href} key={idx}>
                {content}
              </NextLink>
            );
          }

          if (
            item.href.startsWith("http") ||
            item.href.startsWith("mailto") ||
            item.href.startsWith("#")
          ) {
            return (
              <a
                href={item.href}
                key={idx}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                {content}
              </a>
            );
          }

          return content;
        })}
      </Dock>
    </div>
  );
};

export default Nav;
