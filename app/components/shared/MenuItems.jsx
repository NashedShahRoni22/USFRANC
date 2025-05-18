import {
  FaHome,
  FaInfoCircle,
  FaUsers,
  FaShoppingCart,
  FaWallet,
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
        title: "What is USF and What not?",
        path: "/difference",
      },
      {
        title: "USF Peer to Peer Transfer Fees",
        path: "/usf-peer-to-peer-transfer-fees",
      },
      {
        title: "USFRANC assurance statement",
        path: "/usfranc-confidentiality-and-assurance-statement",
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
  {
    title: "Investors", path: "/investors", icon: <FaUsers />,
    child: [
      {
        title: "Distribution Policy",
        path: "usfranc-investors-distribution-policy"
      },
      {
        title: "Terms & Condtions",
        path: "investors-terms-and-condtions"
      }
    ]
  },
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
  {
    title: "Get USF", path: "/buy", icon: <FaShoppingCart />, 
    child: [
      {
        title: "Private Sale",
        path: "/buy"
      },
      {
        title: "Order USFRANC Now",
        path: "/pre-order"
      },
      {
        title: "Participation Terms",
        path: "participation-terms"
      },
      {
        title: "Terms & Conditions",
        path: "participation-terms-and-condtions"
      }
    ]
  },
  { title: "Wallet", path: "/wallet", icon: <FaWallet /> },
  { title: "Contact", path: "/contact", icon: <MdEmail /> },
];
