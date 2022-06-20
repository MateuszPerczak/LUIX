import Taskbar from "./Pages/Taskbar";

const Dummy = () => {
  return <span>Page not ready</span>;
};

export const pages = [
  {
    id: 1,
    icon: "\uE771",
    name: "Aperance",
    content: Dummy,
  },
  {
    id: 2,
    icon: "\uE90E",
    name: "Taskbar",
    content: Taskbar,
  },
  {
    id: 3,
    icon: "\uE74C",
    name: "Apps",
    content: Dummy,
  },
  {
    id: 4,
    icon: "\uEA86",
    name: "Modules",
    content: Dummy,
  },
];
