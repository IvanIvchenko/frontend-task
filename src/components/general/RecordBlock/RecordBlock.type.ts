import { RecordType } from "vars/types/record.type";

export interface RecordBlockProps {
  record: RecordType;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}
