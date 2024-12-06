import { PropsWithChildren } from 'react';
import Headline from './Healine';

interface CardProps {
    headline?: string;
}

const Card = ({ headline, children }: PropsWithChildren<CardProps>) => {
    return (
        <div className="bg-white border-slate-300 rounded-md border w-full p-5 mb-4">
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