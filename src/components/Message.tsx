import { Time } from '../time';

interface Props {
    time: Time | undefined;
}

export default function Message({ time }: Props) {
    return <label>Check Out: {time?.timeOffWork}</label>;
}
