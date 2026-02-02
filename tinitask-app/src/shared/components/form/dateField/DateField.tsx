import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

import { DateButton, DateText } from './styles';

interface DateFieldProps {
  value?: Date;
  onChange: (date: Date) => void;
}

export function DateField({ value, onChange }: DateFieldProps) {
  const [show, setShow] = useState(false);

  const selectedDate = value ?? new Date(Date.now());

  function handleChange(_: any, date?: Date) {
    setShow(false);

    if (date) {
      onChange(date);
    }
  }

  return (
    <>
      <DateButton onPress={() => setShow(true)}>
        <DateText>
          {selectedDate.toLocaleDateString('pt-BR')}
        </DateText>
      </DateButton>

      {show && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display={'default'}
          onChange={handleChange}
        />
      )}
    </>
  );
}
