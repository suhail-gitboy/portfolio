import React from "react";
import { FloatingDock } from "../ui/Foating-doc";
import { FaRegUser } from "react-icons/fa";
import { SiExpertsexchange } from "react-icons/si";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

export function FloatingDockDemo() {
  const Navigate=useNavigate()

  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      onClick: () => Navigate("/"),
    },
    {
      title: "Projects",
      icon: <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
     onClick: () => Navigate("/projects"),
    },
    {
      title: "About Me",
      icon: <FaRegUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      onClick: () => Navigate("/about"),
    },
    {
      title: "Experience",
      icon: <SiExpertsexchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      onClick: () => Navigate("/experience"),
    },
    {
      title: "Reach Me",
      icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      onClick: () => Navigate("/contact"),
    },
  ];
  return (
    <div className="flex items-center justify-center h-40 w-full">
      <FloatingDock
        
        mobileClassName="translate-y-20"
        items={links} />
    </div>
  );
}
