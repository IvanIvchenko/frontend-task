import React, { ReactNode } from "react";
import {
  SLayout,
  SLayoutInner,
  SLayoutContent,
  SMainLayoutHeaderWrapper,
} from "./MainLayout.styles";
import { MainLayoutHeader } from "./Header/Header";

export const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => (
  <SLayout>
    <SMainLayoutHeaderWrapper>
      <MainLayoutHeader />
    </SMainLayoutHeaderWrapper>

    <SLayoutInner>
      <SLayoutContent>{children}</SLayoutContent>
    </SLayoutInner>
  </SLayout>
);
