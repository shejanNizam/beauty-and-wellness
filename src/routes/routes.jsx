import { createBrowserRouter } from "react-router-dom";

import { dashboardItems } from "../constants/router.constants";
import Main from "../layouts/Main";
import { routesGenerators } from "../utils/routesGenerators";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: routesGenerators(dashboardItems),
  },
]);

export default router;
