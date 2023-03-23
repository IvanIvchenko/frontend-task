export interface IFormValues {
  min: number;
  max: number;
  brands: string[];
}

export interface IFiltersProps {
  brands: string[];
  prices: number[];
  onSubmit: (formValues: IFormValues) => void;
  onReset: () => void;
};