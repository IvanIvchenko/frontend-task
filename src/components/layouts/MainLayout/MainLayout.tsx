import React from "react";
import { Outlet } from "react-router-dom";
import { NavigationBar } from "components/general/Breadcrumb/Breadcrumb";
import {
  SLayout,
  SLayoutInner,
  SLayoutContent,
  SMainLayoutHeaderWrapper,
  SNavigationBarWrapper,
} from "./MainLayout.styles";
import { MainLayoutHeader } from "./Header/Header";

export const MainLayout: React.FC = () => (
  <SLayout>
    <SMainLayoutHeaderWrapper>
      <MainLayoutHeader />
    </SMainLayoutHeaderWrapper>
    <SNavigationBarWrapper>
      <NavigationBar />
    </SNavigationBarWrapper>

    <SLayoutInner>
      <SLayoutContent>
        <Outlet />
      </SLayoutContent>
    </SLayoutInner>
  </SLayout>
);
