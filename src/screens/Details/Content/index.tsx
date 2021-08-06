import React from "react";
import { useState } from "react";
import TabViewCustom from "../../../components/TabView";
import { factoryRouteTabs } from "./model";
import { Container } from "./styles";

const Content: React.FC = () => {
  const [index, setIndex] = useState(0);
  const routes = factoryRouteTabs();

  const renderScene = () => {
    switch (index) {
      case 0:
        return renderBaseStats();
      case 1:
        return <Container />;
      case 2:
        return <Container />;
    }
  };

  const renderBaseStats = () => <Container />;

  return (
    <Container>
      <TabViewCustom
        index={index}
        setIndex={setIndex}
        renderScene={renderScene}
        routes={routes}
      />
    </Container>
  );
};

export default Content;
