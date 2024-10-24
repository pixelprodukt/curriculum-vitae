import { PropsWithChildren } from 'react';
import Headline from './Healine';

interface CardProps {
    headline?: string;
}

const Card = ({ headline, children }: PropsWithChildren<CardProps>) => {
    return (
        <div className="bg-white border-sky-500 rounded-md shadow-md borderzt w-full p-5">
            {headlineIsPresent(headline)}
            {children}
        </div>
    );
};

function headlineIsPresent(headline?: string) {
    if (!headline) return;
    return (
        <Headline content={headline} />
    );
}

export default Card;