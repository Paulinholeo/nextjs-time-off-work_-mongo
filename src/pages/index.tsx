import type { NextPage } from 'next';
import { useState } from 'react';
import Form from '../components/Form';
import Message from '../components/Message';
import { Time } from '../time';

const Home: NextPage = () => {
    const [time, setTime] = useState<Time>({});

    const divStyle = {
        display: time.disabled ? 'block' : 'none',
    };

    return (
        <>
            <h3>Time Off Work</h3>
            <p>type the time to calculate</p>

            <Form setTime={setTime} />

            <Message time={time} className="" />
        </>
    );
};

export default Home;
