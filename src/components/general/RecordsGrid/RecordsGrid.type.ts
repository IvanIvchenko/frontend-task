import { RecordType } from 'vars/types/record.type';

export interface RecordsGridProps {
  onRecordDelete: (id: string) => void;
  onRecordEdit: (id: string) => void;
  records: RecordType[];
};