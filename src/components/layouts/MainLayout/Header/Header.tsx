import React from "react";
import { CustomText } from "components/theme/CustomText/CustomText";
import { SMainLayoutHeader } from "./Header.styles";

export const MainLayoutHeader: React.FC = () => (
  <SMainLayoutHeader>
    <CustomText fontWeight="stronger" size="bigger" textColor="blueLight">
      {`BESKYD Front-End Task | `}
      <CustomText
        fontWeight="stronger"
        size="bigger"
        textColor="blue"
        display="inline"
      >
        Ivan Ivchenko
      </CustomText>
    </CustomText>
  </SMainLayoutHeader>
);
