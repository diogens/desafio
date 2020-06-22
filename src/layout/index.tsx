import React from "react";
import { WrapperContainer } from "./styled";

import SiderBar from "../components/SiderBar";
import Content from "../components/Content";
import ToolBar from "../components/ToolBar";
import ListProduto from "../components/ListProduto";
import BarData from "../components/BarData";

const Layout: React.FC = ({ children }) => {
  return (
    <WrapperContainer>
      <SiderBar />
      <Content>{children}</Content>
      <ToolBar />
      <ListProduto />
      <BarData />
    </WrapperContainer>
  );
};

export default Layout;
