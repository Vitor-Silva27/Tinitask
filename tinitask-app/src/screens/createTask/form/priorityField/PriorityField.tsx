import { RadioField } from '@app/shared/components/form/radioField/RadioField';
import { PRIORITY_OPTIONS, Priority } from '@app/shared/modules/task/form/priorities/PriorityOptions';

interface PriorityFieldProps {
    value?: Priority;
    onChange: (value: Priority) => void;
}

export function PriorityField({
    value,
    onChange,
}: PriorityFieldProps) {
    return (
        <RadioField
            value={value}
            onChange={onChange}
            options={PRIORITY_OPTIONS}
        />
    );
}
