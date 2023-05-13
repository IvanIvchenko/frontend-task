import React, { useState, FC, useEffect, SetStateAction } from "react";
import { CustomContainer } from "components/theme/CustomContainer/CustomContainer";
import { useRecord } from "utils/hooks/useRecord";
import { Filters } from "components/general/Filters/Filters";
import { FiltersFormValues } from "vars/types/filters.type";
import { CustomButton } from "components/theme/CustomButton/CustomButton";
import { useWindowWidth } from "utils/hooks/useWindowWidth";
import { RecordsGrid } from "components/general/RecordsGrid/RecordsGrid";
import { RecordType } from "vars/types/record.type";
import { SRecordsWrapper } from "./MainPage.styles";
import { EditModal } from "./EditModal/EditModal";
import { CreateModal } from "./CreateModal/CreateModal";
import { DeleteModal } from "./DeleteModal/DeleteModal";

export const MainPage: FC = () => {
  const width = useWindowWidth();

  const {
    records: fetchedRecords,
    getAllRecordsData,
    getAllRecordsStatus,
  } = useRecord();

  const [records, setRecords] = useState<RecordType[]>([]);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isCreateModalVisible, setIsCreateModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [selectedRecordId, setSelectedRecordId] = useState("");

  useEffect(() => {
    getAllRecordsData?.();
  }, []);

  useEffect(() => {
    if (getAllRecordsStatus?.isSuccess) {
      setRecords(fetchedRecords);
    }
  }, [getAllRecordsStatus]);

  const handleFiltersSubmit = (filterValues: FiltersFormValues) => {
    setRecords(
      fetchedRecords?.filter((record) => {
        let result = true;

        if (filterValues.name) {
          result =
            result &&
            record.name.toLowerCase().includes(filterValues.name.toLowerCase());
        }
        if (filterValues.role) {
          result = result && record.role === filterValues.role;
        }
        if (filterValues.status) {
          result = result && record.status === filterValues.status;
        }

        return result;
      })
    );
  };

  const handleFiltersReset = () => {
    setRecords(fetchedRecords);
  };

  const handleRecordCreate = () => {
    setIsCreateModalVisible(true);
  };

  const handleRecordEdit = (recordId: string) => {
    setSelectedRecordId(recordId);
    setIsEditModalVisible(true);
  };

  const handleRecordDelete = (recordId: string) => {
    setSelectedRecordId(recordId);
    setIsDeleteModalVisible(true);
  };

  const handleModalClose = (
    handler: (value: SetStateAction<boolean>) => void
  ) => {
    setSelectedRecordId("");
    handler(false);
  };

  return (
    <>
      <CustomContainer
        justifyContent="flex-start"
        alignItems="flex-start"
        flexDirection={width > 1070 ? "row" : "column"}
        width="100%"
        gap={30}
      >
        <CustomContainer
          flexDirection="column"
          justifyContent={width > 1070 ? "flex-start" : "center"}
          width={width > 1070 ? "auto" : "100%"}
        >
          <CustomContainer
            width="100%"
            justifyContent="center"
            marginBottom={10}
          >
            <Filters
              onSubmit={handleFiltersSubmit}
              onReset={handleFiltersReset}
            />
          </CustomContainer>
          <CustomContainer
            width="100%"
            justifyContent="center"
            marginBottom={10}
          >
            <CustomButton onClick={() => handleRecordCreate()}>
              Create Record
            </CustomButton>
          </CustomContainer>
        </CustomContainer>
        <SRecordsWrapper>
          <RecordsGrid
            records={records || []}
            onRecordDelete={handleRecordDelete}
            onRecordEdit={handleRecordEdit}
          />
        </SRecordsWrapper>
      </CustomContainer>
      <EditModal
        isVisible={isEditModalVisible}
        onClose={() => handleModalClose(setIsEditModalVisible)}
        recordId={selectedRecordId}
      />
      <CreateModal
        isVisible={isCreateModalVisible}
        onClose={() => handleModalClose(setIsCreateModalVisible)}
      />
      <DeleteModal
        isVisible={isDeleteModalVisible}
        onClose={() => handleModalClose(setIsDeleteModalVisible)}
        recordId={selectedRecordId}
      />
    </>
  );
};
