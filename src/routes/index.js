import Detail from "../pages/Detail";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Watch from "../pages/Watches";

//public routes
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/product", component: Product },
  { path: "/detail", component: Detail },
  { path: "/watch/kien-khanh-khanh", component: Watch },
];
//privateRotesr

const privateRoutes = [];
export { privateRoutes, publicRoutes };
