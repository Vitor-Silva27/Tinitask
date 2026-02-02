import { TextInputProps } from 'react-native';
import { Input } from './styles';

export function TextField(props: TextInputProps) {
  return (
    <Input
      {...props}
      placeholderTextColor="#9ca3af"
    />
  );
}
