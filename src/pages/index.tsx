import type { NextPage } from 'next';
import { useState } from 'react';
import Form from '../components/Form';
import Message from '../components/Message';
import { Time } from '../time';

const Home: NextPage = () => {
    const [time, setTime] = useState<Time>();

    return (
        <div className="flex justify-center">
            <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center">
                <div className="py-3 px-6 border-b border-gray-300">
                    Time Off Work
                </div>
                <div className="p-6 mb-4">
                    <Form setTime={setTime} />
                </div>
                <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
                    <Message
                        time={time}
                        className="font-bold text-red-500 text-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
