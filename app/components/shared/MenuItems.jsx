import {
  FaHome,
  FaInfoCircle,
  FaUsers,
  FaCog,
  FaShieldAlt,
  FaShoppingCart,
  FaWallet,
  FaPhone,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GiHedgehog } from "react-icons/gi";

export const MenuItems = [
  { title: "Home", path: "/", icon: <FaHome /> },
  {
    title: "About",
    path: "/about",
    icon: <FaInfoCircle />,
    child: [
      {
        title: "Learn USF",
        path: "/about",
      },
      {
        title: "Whitepaper",
        path: "/Whitepaper",
      },
      {
        title: "Compliance",
        path: "/compliance",
      },
      {
        title: "Aml Compliance",
        path: "/aml-compliance",
      },
      {
        title: "Privacy Policy",
        path: "/privacy-policy",
      },
      {
        title: "Terms & Conditions",
        path: "/terms-and-conditions",
      },
    ],
  },
  { title: "Investors", path: "/investors", icon: <FaUsers /> },
  {
    title: "Capital Hedge",
    path: "/capital-hedge",
    icon: <GiHedgehog />,
    child: [
      {
        title: "Learn Capital Hedge",
        path: "/capital-hedge",
      },
      {
        title: "Capital Reserve Transparency",
        path: "/capital-reserve-transparencey",
      },
      {
        title: "Capital Investment Overview",
        path: "/capital-investment-overview",
      },
      {
        title: "Policy",
        path: "/policy",
      },
      {
        title: "Flow Chart",
        path: "/flow-chart",
      },
    ],
  },
  // { title: "Reserves", path: "/reserves", icon: <FaCog /> },
  // { title: "Compliance", path: "/compliance", icon: <FaShieldAlt /> },
  // { title: "Whitepaper", path: "/Whitepaper", icon: <FaShieldAlt /> },
  { title: "Get USF", path: "/buy", icon: <FaShoppingCart /> },
  { title: "Wallet", path: "/wallet", icon: <FaWallet /> },
  { title: "Contact", path: "/contact", icon: <MdEmail /> },
];
