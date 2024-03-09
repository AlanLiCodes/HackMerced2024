import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import HeaderThree from "pages/HeaderThree";
import FeaturesFour from "pages/FeaturesFour";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "headerthree",
      element: <HeaderThree />,
    },
    {
      path: "featuresfour",
      element: <FeaturesFour />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
