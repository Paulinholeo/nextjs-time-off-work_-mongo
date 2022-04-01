import { Time } from '../time';

interface Props {
    time: Time | undefined;
}

export default function ({ time }: Props) {
    return <label>Check Out: {time?.timeOffWork}</label>;
}
