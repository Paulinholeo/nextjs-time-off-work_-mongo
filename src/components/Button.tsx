interface Props {
    type: 'button' | 'submit' | 'reset' | undefined;
    children?: React.ReactNode;
    onClick?: () => void;
}
export default function Button({ type, children, onClick }: Props) {
    return (
        <button type={type} onClick={onClick}>
            {children}
        </button>
    );
}
