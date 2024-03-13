import { People } from "@mui/icons-material";
import SignIn from "layouts/authentication/sign-in";
import Data from "layouts/data";
import Dashboard from "layouts/dashboard";
import ScrapeData from "layouts/scrape";
import { BsFillPersonFill, BsDatabaseAdd, BsDownload } from "react-icons/bs";

const routes = [
  // {
  //   type: "collapse",
  //   name: "Dashboard",
  //   key: "dashboard",
  //   route: "/dashboard",
  //   icon: <IoHome size="15px" color="inherit" />,
  //   component: Dashboard,
  //   noCollapse: true,
  // },
  // {
  //   type: "collapse",
  //   name: "Products",
  //   key: "products",
  //   route: "/products",
  //   icon: <IoRocketSharp size="15px" color="inherit" />,
  //   component: Products,
  //   noCollapse: true,
  // },
  {
    type: "collapse",
    name: "Scrape Data",
    key: "scrape",
    route: "/scrape",
    icon: <BsDownload size="15px" color="inherit" />,
    component: ScrapeData,
    noCollapse: true,
  },
  // {
  //   type: "collapse",
  //   name: "Product Details",
  //   key: "productDetails",
  //   route: "/products/:id",
  //   icon: <IoRocketSharp size="15px" color="inherit" />,
  //   component: ProductDetails,
  //   noCollapse: true,
  //   noLink: true,
  // },
  {
    type: "collapse",
    name: "Data",
    key: "data",
    route: "/data",
    icon: <BsDatabaseAdd size="15px" color="inherit" />,
    component: Data,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "login",
    route: "/login",
    icon: <BsFillPersonFill size="15px" color="inherit" />,
    component: SignIn,
    noCollapse: true,
  },
];

export default routes;
