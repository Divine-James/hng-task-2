import React from "react";
import { Routes, Route } from "react-router-dom";

const Index = ({ components }) => {
  return (
    <Routes>
      {components.map(({ component, path }, index) => {
        return <Route key={index} path={path} exact element={component} />;
      })}
    </Routes>
  );
};

export default Index;
