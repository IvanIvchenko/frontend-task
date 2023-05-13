import React, { FC } from "react";
import { CustomBlock } from "components/theme/CustomBlock/CustomBlock";
import { CustomContainer } from "components/theme/CustomContainer/CustomContainer";
import { CustomText } from "components/theme/CustomText/CustomText";
import {
  SCustomText,
  SFieldsWrapper,
  SIconDelete,
  SIconEdit,
} from "./RecordBlock.style";
import { RecordBlockProps } from "./RecordBlock.type";

export const RecordBlock: FC<RecordBlockProps> = ({
  record,
  onDelete,
  onEdit,
}) => (
  <CustomBlock
    paddingBottom={10}
    paddingLeft={10}
    paddingRight={10}
    paddingTop={10}
    key={record._id}
    width="290px"
  >
    <SIconDelete onClick={() => onDelete(record._id)} />
    <SIconEdit onClick={() => onEdit(record._id)} />
    <CustomContainer alignItems="center" gap={12}>
      <SFieldsWrapper flexDirection="column" width="stretch">
        <CustomContainer marginBottom={15} width="100%">
          <CustomText textColor="grey500">Name:</CustomText>
          <SCustomText textColor="grey600">{record.name}</SCustomText>
        </CustomContainer>
        <CustomContainer marginBottom={15} width="100%">
          <CustomText textColor="grey500">Address:</CustomText>
          <SCustomText textColor="grey600">{record.address}</SCustomText>
        </CustomContainer>
        <CustomContainer marginBottom={15} width="100%">
          <CustomText textColor="grey500">Amount:</CustomText>
          <SCustomText textColor="grey600">{record.amount}</SCustomText>
        </CustomContainer>
        <CustomContainer marginBottom={15} width="100%">
          <CustomText textColor="grey500">Status:</CustomText>
          <SCustomText textColor="grey600">{record.status}</SCustomText>
        </CustomContainer>
        <CustomContainer width="100%">
          <CustomText textColor="grey500">Role:</CustomText>
          <SCustomText textColor="grey600">{record.role}</SCustomText>
        </CustomContainer>
      </SFieldsWrapper>
    </CustomContainer>
  </CustomBlock>
);
