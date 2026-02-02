export type Priority = 'low' | 'medium' | 'high';

export const PRIORITY_OPTIONS = [
    { label: 'Low', value: 'low', color: '#22c55e' },
    { label: 'Medium', value: 'medium', color: '#eab308' },
    { label: 'High', value: 'high', color: '#ef4444' },
] as const;
