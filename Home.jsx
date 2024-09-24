import React from "react";

import Homesec1 from "../components/Homesec1";
import Boxes from "../components/Boxes";
import Welcome from "../components/Welcome";
import Team from "../components/Team";
import Blog from "../components/Blog";

const Home = () => {
  return (
    <div>
      <Homesec1 />
      <Boxes />
      <Welcome />
      <Team />
      <Blog />
    </div>
  );
};

export default Home;
