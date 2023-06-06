import { Form } from "antd";
import { CustomButton } from "components/theme/CustomButton/CustomButton";
import { CustomContainer } from "components/theme/CustomContainer/CustomContainer";
import { CustomDropdown } from "components/theme/CustomDropdown/CustomDropdown";
import { CustomNumberInput } from "components/theme/CustomNumberInput/CustomNumberInput";
import { CustomText } from "components/theme/CustomText/CustomText";
import React, { FC, useEffect, useState } from "react";
import { TYPES } from "vars/consts/numbers";
import { NumbersRequestType } from "vars/types/numbers.type";
import { NumberFormInputProps } from "./NumberFormType";

export const NumbersForm: FC<NumberFormInputProps> = ({ onComplete }) => {
  const [form] = Form.useForm<NumbersRequestType>();
  const typeValue = Form.useWatch("type", form);

  const [isSizeDisabled, setIsSizeDisabled] = useState(true);

  useEffect(() => {
    if (typeValue === "hex8" || typeValue === "hex16") {
      setIsSizeDisabled(false);
    } else {
      setIsSizeDisabled(true);
    }
  }, [typeValue]);

  const handleDropdownChange = (value: string) => {
    form.setFieldValue("type", value);
  };

  const handleFormCompletion = (values: NumbersRequestType) => {
    onComplete(values);
  };

  return (
    <CustomContainer
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Form
        autoComplete="off"
        layout="vertical"
        form={form}
        requiredMark={false}
        onFinish={handleFormCompletion}
        initialValues={{
          size: "",
        }}
      >
        <CustomContainer flexDirection="column" marginBottom={15}>
          <CustomText marginBottom={5}>Type:</CustomText>
          <Form.Item
            name="type"
            rules={[{ required: true, message: "Please input your password!" }]}
            noStyle
          >
            <CustomDropdown
              name="type"
              onChange={handleDropdownChange}
              dropdownOptions={TYPES}
            />
          </Form.Item>
        </CustomContainer>
        <CustomContainer flexDirection="column" marginBottom={15}>
          <CustomText marginBottom={5}>Length (1-1000):</CustomText>
          <Form.Item
            name="length"
            validateTrigger={["onBlur", "onChange"]}
            rules={[
              { required: true, message: "Please input length" },
              {
                required: true,
                pattern: /^([1-9][0-9]{0,2}|1000)$/,
                message: "Length must be in range of 1-1024",
              },
            ]}
            noStyle
          >
            <CustomNumberInput type="number" name="length" />
          </Form.Item>
        </CustomContainer>
        <CustomContainer flexDirection="column" marginBottom={15}>
          <CustomText marginBottom={5}>Size (1-10):</CustomText>
          <Form.Item
            name="size"
            validateTrigger={["onBlur", "onChange"]}
            rules={[
              (formInstance) => ({
                message: "Size must be in range of 1-10",
                validator(_, value) {
                  const type = formInstance.getFieldValue("type");
                  if (type === "hex8" || type === "hex16") {
                    const regex = /^(?:[1-9]|10)$/.test(value);
                    return regex
                      ? Promise.resolve()
                      : Promise.reject(new Error());
                  }
                  return Promise.resolve();
                },
              }),
            ]}
            noStyle
          >
            <CustomNumberInput
              type="number"
              name="size"
              disabled={isSizeDisabled}
            />
          </Form.Item>
        </CustomContainer>
        <Form.Item noStyle shouldUpdate>
          {() => (
            <CustomContainer
              width="100%"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <CustomButton
                type="primary"
                htmlType="submit"
                bgColor="blue"
                borderColor="blue"
                textColor="white"
                marginBottom={50}
                disabled={
                  !form.isFieldTouched("type") ||
                  !form.isFieldTouched("length") ||
                  !!form.getFieldsError().filter(({ errors }) => errors.length)
                    .length
                }
              >
                Confirm
              </CustomButton>
              {form
                .getFieldsError()
                .map(({ errors }) => errors)
                .flat()
                .map((error) => (
                  <CustomText textColor="red" key={error}>
                    {error}
                  </CustomText>
                ))}
            </CustomContainer>
          )}
        </Form.Item>
      </Form>
    </CustomContainer>
  );
};
