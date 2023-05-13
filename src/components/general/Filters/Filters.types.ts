import { FiltersFormValues } from "vars/types/filters.type";

export interface FiltersProps {
  onSubmit: (formValues: FiltersFormValues) => void;
  onReset: () => void;
}
