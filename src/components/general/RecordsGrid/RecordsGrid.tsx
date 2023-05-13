import React, { FC } from "react";
import { useWindowWidth } from "utils/hooks/useWindowWidth";
import { getGridColumnNumber } from "utils/helpers/styleHelpers";
import { RecordBlock } from "components/general/RecordBlock/RecordBlock";
import { RecordsGridProps } from "./RecordsGrid.type";
import { SCol, SRow } from "./RecordsGrid.style";

export const RecordsGrid: FC<RecordsGridProps> = ({
  onRecordDelete,
  onRecordEdit,
  records,
}) => {
  const width = useWindowWidth();
  return (
    <SRow justify={width > 1070 ? "start" : "center"}>
      {records?.map((record) => (
        <SCol span={getGridColumnNumber(width)}>
          <RecordBlock
            record={record}
            onDelete={onRecordDelete}
            onEdit={onRecordEdit}
          />
        </SCol>
      ))}
    </SRow>
  );
};
