import { type } from 'os';

interface Props {
    id: string;
    text: string;
    type: 'time';
    step: string;
    name: string;
    min?: string;
    max?: string;
    value: string;
    required: boolean;
    onChange?: (value: any) => void;
}
export default function InputTime({
    id,
    text,
    type,
    step,
    name,
    min,
    max,
    value,
    required,
    onChange,
}: Props) {
    return (
        <div>
            <label htmlFor={id}>{text}</label>
            <input
                id={id}
                type={type}
                step={step}
                name={name}
                min={min}
                max={max}
                value={value}
                required={required}
                onChange={(event) => onChange?.(event.target.value)}
            />
        </div>
    );
}
