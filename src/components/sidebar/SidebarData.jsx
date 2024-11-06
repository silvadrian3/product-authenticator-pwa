import React from "react";
import { RiDashboardFill, RiSettings5Fill } from "react-icons/ri";
import { MdAccountCircle } from "react-icons/md";
import { AppRoutes } from "../../constants/AppRoutes";

export const SidebarData = [
  {
    title: "Dashboard",
    path: AppRoutes.DASHBOARD,
    icon: <RiDashboardFill style={{ color: "var(--mysteryGrey)" }} />,
    cName: "nav-text",
  },
  {
    title: "My Account",
    path: AppRoutes.PROFILE,
    icon: <MdAccountCircle style={{ color: "var(--mysteryGrey)" }} />,
    cName: "nav-text",
  },
  {
    title: "Settings",
    path: AppRoutes.SETTINGS,
    icon: <RiSettings5Fill style={{ color: "var(--mysteryGrey)" }} />,
    cName: "nav-text",
  },
];
