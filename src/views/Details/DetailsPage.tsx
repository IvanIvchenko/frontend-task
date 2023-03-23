import { CustomBlock } from "components/theme/CustomBlock/CustomBlock";
import { CustomButton } from "components/theme/CustomButton/CustomButton";
import { CustomContainer } from "components/theme/CustomContainer/CustomContainer";
import { CustomIcon } from "components/theme/CustomIcon/CustomIcon";
import { CustomText } from "components/theme/CustomText/CustomText";
import React from "react";
import { useParams } from "react-router-dom";
import { useGoods } from "utils/hooks/useGoods";
import {
  SCustomText,
  SImage,
  SInfoWrapper,
  SSeparatorLine,
} from "./DetailsPage.styles";

export const DetailsPage: React.FC = () => {
  const { id } = useParams();
  const { getGoodById } = useGoods();
  const good = getGoodById(Number(id));

  return (
    <>
      <CustomBlock
        minHeight="507px"
        marginBottom={33}
        paddingBottom={20}
        paddingTop={20}
        paddingLeft={20}
        paddingRight={20}
      >
        <CustomContainer gap={22}>
          <CustomBlock minHeight="380px">
            <SImage src={good?.imageUrl} alt={good?.imageUrl} />
          </CustomBlock>
          <SInfoWrapper flexDirection="column" width="stretch">
            <CustomText marginBottom={10} size="bigger" fontWeight="stronger">
              {good?.name}
            </CustomText>
            <CustomText marginBottom={10} size="xl" fontWeight="stronger">
              {`$${good?.price}`}
            </CustomText>
            <CustomButton
              marginBottom={28}
              bgColor="blueGradient"
              borderColor="transparent"
              buttonSize="large"
            >
              <CustomContainer gap={10}>
                <CustomIcon name="cart" size="small" cursorPointer />
                <CustomText textColor="white" fontWeight="strong" cursorPointer>
                  Buy
                </CustomText>
              </CustomContainer>
            </CustomButton>
            <CustomContainer marginBottom={15} width="100%">
              <CustomText textColor="grey500">Category:</CustomText>
              <SCustomText textColor="grey600">{good?.category}</SCustomText>
            </CustomContainer>
            <SSeparatorLine />
            <CustomContainer marginBottom={15} width="100%">
              <CustomText textColor="grey500">Type:</CustomText>
              <SCustomText textColor="grey600">{good?.type}</SCustomText>
            </CustomContainer>
            <CustomContainer marginBottom={15} width="100%">
              <CustomText textColor="grey500">Material:</CustomText>
              <SCustomText textColor="grey600">{good?.material}</SCustomText>
            </CustomContainer>
            <CustomContainer marginBottom={15} width="100%">
              <CustomText textColor="grey500">Design:</CustomText>
              <SCustomText textColor="grey600">{good?.design}</SCustomText>
            </CustomContainer>
            <SSeparatorLine />
          </SInfoWrapper>
        </CustomContainer>
      </CustomBlock>
      <CustomBlock minHeight="285px" marginBottom={140}>
        <CustomText textColor="grey600">{good?.description}</CustomText>
      </CustomBlock>
    </>
  );
};
