import moment from 'moment';
import React, { useState } from 'react';
import { Time } from '../time';
import Button from './Button';
import InputTime from './InputTime';

interface Props {
    setTime: any;
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

        setTime((time: Time) => ({
            timeOffWork: `
                ${String(timeOffWork.hours()).padStart(2, '0')} :
                ${String(timeOffWork.minutes()).padStart(2, '0')}`,
        }));
    }

    return (
        <form onSubmit={calculateEstimatedTime}>
            <div className="flex justify-center">
                <div>
                    <div className="form-floating mb-3 xl:w-96">
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
                            className={`
                                form-control
                                block
                                w-full
                                px-4
                                py-2
                                text-xl
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                            `}
                            onChange={setTimeOne}
                        />
                    </div>

                    <div className="form-floating mb-3 xl:w-96">
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
                            className={`
                                form-control
                                block
                                w-full
                                px-4
                                py-2
                                text-xl
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                            `}
                            onChange={setTimeTwo}
                        />
                    </div>

                    <div className="form-floating mb-3 xl:w-96">
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
                            className={`
                                form-control
                                block
                                w-full
                                px-4
                                py-2
                                text-xl
                                font-normal
                                text-gray-700
                                bg-white bg-clip-padding
                                border border-solid border-gray-300
                                rounded
                                transition
                                ease-in-out
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                            `}
                            onChange={setTimeThree}
                        />
                    </div>

                    <div className="flex space-x-2 justify-center">
                        <Button
                            type="submit"
                            className={`
                                inline-block 
                                px-7 py-3 
                                bg-blue-600 
                                text-white font-medium text-sm 
                                leading-snug 
                                uppercase 
                                rounded 
                                shadow-md 
                                hover:bg-blue-700 hover:shadow-lg 
                                focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 
                                active:bg-blue-800 active:shadow-lg 
                                transition 
                                duration-150 
                                ease-in-out
                            `}
                        >
                            Calculate Estimated Time
                        </Button>
                    </div>
                </div>
            </div>
        </form>
    );
}
