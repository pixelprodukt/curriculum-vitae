import { PropsWithChildren } from 'react';

interface HeadlineProps {
    content: string;
}

const Headline = ({ content }: PropsWithChildren<HeadlineProps>) => {
    return (
        <>
            <h3 className='text-3xl font-bold text-sky-500 mb-2'>{content}</h3>
            <div className='mb-8'></div>
        </>
    );
};

export default Headline;