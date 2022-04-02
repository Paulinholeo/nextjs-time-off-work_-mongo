import { Time } from '../time';

interface Props {
    time: Time | undefined;
    className?: string;
}

export default function Message({ time, className }: Props) {
    return <label className={className}>{time?.timeOffWork}</label>;
}
