import React, { FC, useEffect } from "react";
import { useRecord } from "utils/hooks/useRecord";
import { Form } from "antd";
import { CustomContainer } from "components/theme/CustomContainer/CustomContainer";
import { CustomText } from "components/theme/CustomText/CustomText";
import { CustomInput } from "components/theme/CustomInput/CustomInput";
import { CustomButton } from "components/theme/CustomButton/CustomButton";
import { CustomNumberInput } from "components/theme/CustomNumberInput/CustomNumberInput";
import { CustomDropdown } from "components/theme/CustomDropdown/CustomDropdown";
import { ROLES, STATUSES } from "vars/consts/record";
import { RecordType } from "vars/types/record.type";
import { EditModalProps } from "./EditModal.type";
import { SCustomMoodal, SForm } from "./EditModal.style";

export const EditModal: FC<EditModalProps> = ({
  isVisible,
  onClose,
  recordId,
}) => {
  const [form] = Form.useForm();

  const {
    getAllRecordsData,
    getSingleRecordData,
    getSingleRecordStatus,
    updateRecordData,
    updateRecordStatus,
    selectedRecord,
  } = useRecord();

  useEffect(() => {
    if (isVisible) {
      getSingleRecordData(recordId);
    }
  }, [isVisible]);

  useEffect(() => {
    if (getSingleRecordStatus.isSuccess) {
      form.resetFields();
    }
  }, [getSingleRecordStatus]);

  useEffect(() => {
    if (updateRecordStatus.isSuccess && isVisible) {
      getAllRecordsData();
      onClose();
    }
  }, [updateRecordStatus]);

  const handleDropdownChange = (value: { [key: string]: string }) => {
    form.setFieldsValue(value);
  };

  const handleFormCompletion = (values: Omit<RecordType, "_id">) => {
    updateRecordData?.({ _id: selectedRecord?._id || "", ...values });
  };

  return (
    <SCustomMoodal
      open={isVisible}
      topPosition={30}
      onCancel={onClose}
      destroyOnClose
      closable
    >
      <SForm
        autoComplete="off"
        layout="vertical"
        form={form}
        requiredMark={false}
        onFinish={(values) =>
          handleFormCompletion(values as Omit<RecordType, "_id">)
        }
        initialValues={{
          name: selectedRecord?.name,
          address: selectedRecord?.address,
          amount: selectedRecord?.amount,
          status: selectedRecord?.status,
          role: selectedRecord?.role,
        }}
      >
        <Form.Item
          name="name"
          validateTrigger={["onBlur", "onChange"]}
          rules={[
            {
              required: true,
              message: "Please input name!",
            },
          ]}
          noStyle
        >
          <CustomContainer
            marginBottom={15}
            marginTop={15}
            width="100%"
            flexDirection="column"
          >
            <CustomText textColor="grey500" marginBottom={10}>
              Name:
            </CustomText>
            <CustomInput name="name" />
          </CustomContainer>
        </Form.Item>
        <Form.Item
          name="address"
          validateTrigger={["onBlur", "onChange"]}
          rules={[
            {
              required: true,
              message: "Please input address!",
            },
          ]}
          noStyle
        >
          <CustomContainer
            marginBottom={15}
            width="100%"
            flexDirection="column"
          >
            <CustomText textColor="grey500" marginBottom={10}>
              Address:
            </CustomText>
            <CustomInput name="address" />
          </CustomContainer>
        </Form.Item>
        <Form.Item
          name="amount"
          validateTrigger={["onBlur", "onChange"]}
          rules={[
            {
              required: true,
              message: "Please input amount!",
            },
          ]}
          noStyle
        >
          <CustomContainer
            marginBottom={15}
            width="100%"
            flexDirection="column"
          >
            <CustomText textColor="grey500" marginBottom={10}>
              Amount:
            </CustomText>
            <CustomNumberInput name="amount" />
          </CustomContainer>
        </Form.Item>
        <Form.Item
          name="status"
          validateTrigger={["onBlur", "onChange"]}
          rules={[
            {
              required: true,
              message: "Please input status!",
            },
          ]}
          noStyle
        >
          <CustomContainer
            marginBottom={15}
            width="100%"
            flexDirection="column"
          >
            <CustomText textColor="grey500" marginBottom={10}>
              Status:
            </CustomText>
            <CustomDropdown
              name="status"
              onChange={(value: string) =>
                handleDropdownChange({ status: value })
              }
              dropdownOptions={STATUSES}
            />
          </CustomContainer>
        </Form.Item>
        <Form.Item
          name="role"
          validateTrigger={["onBlur", "onChange"]}
          rules={[
            {
              required: true,
              message: "Please input role!",
            },
          ]}
          noStyle
        >
          <CustomContainer
            marginBottom={15}
            width="100%"
            flexDirection="column"
          >
            <CustomText textColor="grey500" marginBottom={10}>
              Role:
            </CustomText>
            <CustomDropdown
              name="role"
              onChange={(value: string) =>
                handleDropdownChange({ role: value })
              }
              dropdownOptions={ROLES}
            />
          </CustomContainer>
        </Form.Item>
        <Form.Item noStyle>
          <CustomContainer width="100%" justifyContent="center">
            <CustomButton
              type="primary"
              htmlType="submit"
              bgColor="blue"
              borderColor="blue"
              textColor="white"
              marginBottom={50}
              disabled={false}
            >
              Confirm
            </CustomButton>
          </CustomContainer>
        </Form.Item>
      </SForm>
    </SCustomMoodal>
  );
};
