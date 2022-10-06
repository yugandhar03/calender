import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";

const iconSize = 30;

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome size={iconSize} />,
    cName: "nav-text"
  },
  {
    title: "Events",
    path: "/Events",
    icon: <MdIcons.MdEventAvailable size={iconSize} />,
    cName: "nav-text"
  },
  {
    title: "To-do List",
    path: "/TodoList",
    icon: <BsIcons.BsListCheck size={iconSize} />,
    cName: "nav-text"
  },
  {
    title: "Scheduler",
    path: "/Scheduler",
    icon: <AiIcons.AiOutlineSchedule size={iconSize} />,
    cName: "nav-text"
  },
  {
    title: "Messages",
    path: "/Messages",
    icon: <FaIcons.FaEnvelopeOpenText size={iconSize - 5} />,
    cName: "nav-text"
  },
  {
    title: "Logout",
    path: "/Logout",
    icon: <BiIcons.BiLogOut size={iconSize} />,
    cName: "nav-text footer"
  }
];
