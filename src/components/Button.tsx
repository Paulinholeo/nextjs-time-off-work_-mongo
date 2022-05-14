interface Props {
    type: 'button' | 'submit' | 'reset' | undefined;
    className?: string;
    children?: React.ReactNode;
    onClick?: () => void;
}
export default function Button({ type, className, children, onClick }: Props) {
    return (
        <>
            <button type={type} className={className} onClick={onClick}>
                {children}
            </button>
        </>
    );
}
