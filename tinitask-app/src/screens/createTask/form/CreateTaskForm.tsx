import { useForm, Controller } from 'react-hook-form'
import { createTaskSchema, CreateTaskSchema } from '../../../../containers/createtaskForm/createTaskSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Container, FormFieldsContainer } from './styles';
import { Button } from '@app/shared/components/button/Button';
import { FormField } from '@app/shared/components/form/formField/FormField';
import { TextField } from '@app/shared/components/form/textField/TextField';
import { DateField } from '@app/shared/components/form/dateField/DateField';
import { PriorityField } from './priorityField/PriorityField';


interface CreateTaskFormProps {
    onSubmit: (data: CreateTaskSchema) => void;
}

export function CreateTaskForm({ onSubmit }: CreateTaskFormProps) {
    const { control, handleSubmit } = useForm<CreateTaskSchema>({
        resolver: zodResolver(createTaskSchema),
        defaultValues: {
            title: '',
            description: '',
            dueDate: new Date(),
            priority: 'low',
        },
    });

    return (
        <Container>
            <FormFieldsContainer>
                <Controller
                    control={control}
                    name="title"
                    render={({ field, fieldState }) => (
                        <FormField
                            label="Task Title"
                            error={fieldState.error?.message}
                        >
                            <TextField
                                placeholder="Enter task title"
                                autoCapitalize="none"
                                value={field.value}
                                onChangeText={field.onChange}
                                onBlur={field.onBlur}
                            />
                        </FormField>
                    )}
                />

                <Controller
                    control={control}
                    name="description"
                    render={({ field, fieldState }) => (
                        <FormField
                            label="Description"
                            error={fieldState.error?.message}
                        >
                            <TextField
                                placeholder="Enter task description"
                                value={field.value}
                                onChangeText={field.onChange}
                                onBlur={field.onBlur}
                                multiline
                                numberOfLines={4}
                            />
                        </FormField>
                    )}
                />

                <Controller
                    control={control}
                    name="dueDate"
                    render={({ field, fieldState }) => (
                        <FormField
                            label="Due date"
                            error={fieldState.error?.message}
                        >
                            <DateField
                                value={field.value}
                                onChange={field.onChange}
                            />
                        </FormField>
                    )}
                />

                <Controller
                    control={control}
                    name="priority"
                    render={({ field, fieldState }) => (
                        <FormField
                            label="Priority"
                            error={fieldState.error?.message}
                        >
                            <PriorityField
                                value={field.value}
                                onChange={field.onChange}
                            />
                        </FormField>
                    )}
                />
            </FormFieldsContainer>

            <Button
                text="Create Task"
                onPress={handleSubmit(onSubmit)}
            />
        </Container>
    );
}
