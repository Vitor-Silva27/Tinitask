import {
    Container,
    Option,
    Circle,
    InnerCircle,
    Label,
} from './styles';

export interface RadioOption<T extends string = string> {
    label: string;
    value: T;
    color?: string;
}

interface RadioFieldProps<T extends string = string> {
    value?: T;
    onChange: (value: T) => void;
    options: readonly RadioOption<T>[];
}

export function RadioField<T extends string>({
    value,
    onChange,
    options
}: RadioFieldProps<T>) {
    return (
        <Container>
            {options.map(option => {
                const selected = value === option.value;

                return (
                    <Option
                        key={option.value}
                        selected={selected}
                        color={option.color ?? '#e5e7eb'}
                        onPress={() => onChange(option.value)}
                    >
                        <Circle
                            selected={selected}
                            color={option.color ?? '#6b7280'}
                        >
                            {selected && (
                                <InnerCircle color={option.color ?? '#6b7280'} />
                            )}
                        </Circle>

                        <Label color={option.color ?? '#111827'}>
                            {option.label}
                        </Label>
                    </Option>
                );
            })}
        </Container>
    );
}
