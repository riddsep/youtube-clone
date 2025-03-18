"use client";

import { FlameIcon, HomeIcon, PlaySquareIcon } from "lucide-react";

const items = [
  {
    title: "Home",
    url: "/",
    icon: HomeIcon,
  },
  {
    title: "Subcriptions",
    url: "/feed/subcriptions",
    icon: PlaySquareIcon,
    auth: true,
  },
  {
    title: "Trending",
    url: "/feed/trending",
    icon: FlameIcon,
  },
];
export const MainSection = () => {
  return <div>MainSection</div>;
};
