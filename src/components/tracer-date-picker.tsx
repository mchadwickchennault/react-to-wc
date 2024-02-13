import { DatePicker, DatePickerInput } from '@carbon/react';

type TracerDatePickerProps = {
    range?: boolean;
    hideLabel?: boolean;
};

export function TracerDatePicker(props: TracerDatePickerProps) {
  return <DatePicker {...props}><DatePickerInput labelText='Hello' id='test'/></DatePicker>;
}