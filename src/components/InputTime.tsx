interface Props {
    id: string;
    text: string;
    type: string;
    step: string;
    name: string;
    min?: string;
    max?: string;
    value: string;
    required: boolean;
    className?: string;
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
    className,
    onChange,
}: Props) {
    return (
        <>
            <label htmlFor={id} className="text-gray-700">
                {text}
            </label>
            <input
                id={id}
                type={type}
                step={step}
                name={name}
                min={min}
                max={max}
                value={value}
                required={required}
                className={className}
                onChange={(event) => onChange?.(event.target.value)}
            />
        </>
    );
}
