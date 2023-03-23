import React, { useState } from "react";
import { Filters } from "components/general/Filters/Filters";
import { CustomBlock } from "components/theme/CustomBlock/CustomBlock";
import { CustomButton } from "components/theme/CustomButton/CustomButton";
import { CustomContainer } from "components/theme/CustomContainer/CustomContainer";
import { CustomIcon } from "components/theme/CustomIcon/CustomIcon";
import { CustomText } from "components/theme/CustomText/CustomText";
import { useGoods } from "utils/hooks/useGoods";
import { IFormValues } from "components/general/Filters/Filters.types";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "vars/ROUTES";
import { SGoodsWrapper, SImage, SImageContainer } from "./MainPage.styles";

export const MainPage: React.FC = () => {
  const navigate = useNavigate();
  const { goods } = useGoods();

  const [items, setItems] = useState(goods);

  const handleLowToHighClick = () => {
    const sortedItems = [...items].sort(
      (itemOne, itemTwo) => itemOne.price - itemTwo.price
    );
    setItems(sortedItems);
  };

  const handleHighToLowClick = () => {
    const sortedItems = [...items].sort(
      (itemOne, itemTwo) => itemTwo.price - itemOne.price
    );
    setItems(sortedItems);
  };

  const handleFiltersSubmit = (filterValues: IFormValues) =>
    setItems(
      goods.filter((item) => {
        if (
          filterValues.brands.length &&
          !filterValues.brands.includes(item.brand)
        ) {
          return false;
        }
        if (item.price < filterValues.min || item.price > filterValues.max) {
          return false;
        }
        return true;
      })
    );

  const handleFiltersReset = () => {
    setItems(goods);
  };

  return (
    <>
      <CustomBlock marginBottom={20} minHeight="64px">
        <CustomContainer gap={8} width="100%" justifyContent="flex-end">
          <CustomButton buttonSize="middle" onClick={handleLowToHighClick}>
            <CustomContainer
              cursorPointer
              gap={18}
              width="100%"
              justifyContent="center"
            >
              <CustomText cursorPointer>Price: Low to High</CustomText>
              <CustomIcon cursorPointer name="arrowDown" size="smaller" />
            </CustomContainer>
          </CustomButton>
          <CustomButton buttonSize="middle" onClick={handleHighToLowClick}>
            <CustomContainer
              cursorPointer
              gap={18}
              width="100%"
              justifyContent="center"
            >
              <CustomText cursorPointer>Price: High to Low</CustomText>
              <CustomIcon cursorPointer name="arrowUp" size="smaller" />
            </CustomContainer>
          </CustomButton>
        </CustomContainer>
      </CustomBlock>
      <CustomContainer
        justifyContent="space-between"
        alignItems="flex-start"
        gap={30}
      >
        <Filters
          onSubmit={handleFiltersSubmit}
          onReset={handleFiltersReset}
          brands={Array.from(new Set(goods.map((good) => good.brand)))}
          prices={Array.from(new Set(goods.map((good) => good.price)))}
        />
        <SGoodsWrapper>
          {items.map((item) => (
            <CustomBlock
              marginBottom={8}
              paddingBottom={10}
              paddingLeft={10}
              paddingRight={85}
              paddingTop={10}
              key={item.id}
              onClick={() => navigate(`${ROUTES.main.path}/${item.id}`)}
            >
              <CustomContainer alignItems="center" gap={12}>
                <SImageContainer>
                  <SImage src={item.imageUrl} alt={item.imageUrl} />
                </SImageContainer>
                <CustomContainer flexDirection="column" alignItems="flex-start">
                  <CustomText size="big" fontWeight="strong" marginBottom={16}>
                    {item.name}
                  </CustomText>
                  <CustomText
                    size="bigger"
                    fontWeight="stronger"
                    marginBottom={4}
                  >
                    {`$${item.price}`}
                  </CustomText>
                  <CustomText textColor="grey500" size="big" marginBottom={8}>
                    {item.brand}
                  </CustomText>
                  <CustomText size="big" marginBottom={8}>
                    {item.description.replace(/^(.{150}[^\s]*).*/, "$1")}
                  </CustomText>
                  <CustomText textColor="blue" size="big" fontWeight="strong">
                    View details
                  </CustomText>
                </CustomContainer>
              </CustomContainer>
            </CustomBlock>
          ))}
        </SGoodsWrapper>
      </CustomContainer>
    </>
  );
};
