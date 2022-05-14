import moment from 'moment';
import React, { useState } from 'react';
import { Time } from '../time';
import Button from './Button';
import InputTime from './InputTime';

interface Props {
    setTime: React.Dispatch<React.SetStateAction<Time>>;
}

export default function Form({ setTime }: Props) {
    const [timeOne, setTimeOne] = useState('09:00');
    const [timeTwo, setTimeTwo] = useState('12:00');
    const [timeThree, setTimeThree] = useState('13:00');

    function calculateEstimatedTime(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        // hours worked
        const time1 = moment.duration(timeOne);
        const time2 = moment.duration(timeTwo);
        const hoursWorked = time2.subtract(time1);

        // remaining hours
        const hoursPerDay = moment.duration('08:00');
        const remainingHours = hoursPerDay.subtract(hoursWorked);

        // time off work
        const time3 = moment.duration(timeThree);
        const timeOffWork = time3.add(remainingHours);

        setTime(() => ({
            timeOffWork: `
                ${String(timeOffWork.hours()).padStart(2, '0')} :
                ${String(timeOffWork.minutes()).padStart(2, '0')}`,
            disabled: true,
        }));
    }

    return (
        <div>
            <form onSubmit={calculateEstimatedTime}>
                <InputTime
                    id="timeOne"
                    type="time"
                    step="1"
                    name="timeOne"
                    min="09:00"
                    max="10:00"
                    value={timeOne}
                    required
                    text="Time One"
                    onChange={setTimeOne}
                />

                <InputTime
                    id="timeTwo"
                    type="time"
                    step="1"
                    name="timeTwo"
                    min="12:00"
                    max="13:00"
                    value={timeTwo}
                    required
                    text="Time Two"
                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    onChange={setTimeTwo}
                />

                <InputTime
                    id="timeThree"
                    type="time"
                    step="1"
                    name="timeThree"
                    min="13:00"
                    max="15:00"
                    value={timeThree}
                    required
                    text="Time Three"
                    onChange={setTimeThree}
                />

                <Button type="submit">Calculate Estimated Time</Button>
            </form>
        </div>
    );
}
