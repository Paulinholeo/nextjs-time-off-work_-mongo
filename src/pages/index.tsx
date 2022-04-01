import type { NextPage } from 'next';
import { useState } from 'react';
import Form from '../components/Form';
import Message from '../components/Message';
import { Time } from '../time';

const Home: NextPage = () => {
    const [time, setTime] = useState<Time>();

    return (
        <div>
            <Form setTime={setTime} />
            <p />
            <Message time={time} />
        </div>
    );
};

export default Home;
