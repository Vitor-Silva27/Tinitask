import {useForm, Controller} from 'react-hook-form'
import { createTaskSchema, CreateTaskSchema } from '../../../../containers/createtaskForm/createTaskSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormField } from '@app/shared/components/formField/FormField';
import { Container } from './styles';
import { Button } from '@app/shared/components/button/Button';

interface CreateTaskFormProps {
    onSubmit: (data: CreateTaskSchema) => void;
}

export function CreateTaskForm({ onSubmit }: CreateTaskFormProps) {

    const {control, handleSubmit} = useForm<CreateTaskSchema>({
        resolver: zodResolver(createTaskSchema),
    });

    return (
        <Container>
            <Controller control={control} name='title' render={({field, fieldState}) => (
                <FormField
                    label="Task Title"
                    placeholder="Enter task title"
                    autoCapitalize='none'
                    value={field.value}
                    onChangeText={field.onChange}
                    onBlur={field.onBlur}
                    error={fieldState.error?.message}
                />
            )} />
            <Controller control={control} name='description' render={({field, fieldState}) => (
                <FormField
                    label="Description"
                    placeholder="Enter task description"
                    value={field.value}
                    onChangeText={field.onChange}
                    onBlur={field.onBlur}
                    error={fieldState.error?.message}
                    multiline
                    numberOfLines={4}
                />
            )} />
            <Button text="Create Task" onPress={handleSubmit(onSubmit)} />
        </Container>
    );
}