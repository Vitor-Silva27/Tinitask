import { ReactNode } from 'react';
import {
  Container,
  InputWrapper,
  Label,
  ErrorText,
} from './styles';

interface FormFieldProps {
  label?: string;
  error?: string;
  children: ReactNode;
}

export function FormField({ label, error, children }: FormFieldProps) {
  return (
    <Container>
      {label && <Label>{label}</Label>}

      <InputWrapper>
        {children}
      </InputWrapper>

      {error && <ErrorText>{error}</ErrorText>}
    </Container>
  );
}
