import { PropsWithChildren } from 'react';
import { CareerAndEducation } from '../models/career-and-education';

interface CurriculumVitaeInfoProps {
    data: CareerAndEducation[];
}

const CurriculumVitaeInfo = ({ data }: PropsWithChildren<CurriculumVitaeInfoProps>) => {
    return (
        <>
            {data.map((item, index) => {
                return (
                    <div className='flex flex-row mb-4' key={index}>
                        <div className='basis-1/4'>
                            <div className='font-bold text-sky-500'>{item.timespan}</div>
                        </div>
                        <div className='basis-3/4'>
                            <div className='font-bold text-gray-600'>{item.title}</div>
                            <ul className='list-disc text-gray-600'>
                                {item.activities.map((activity, index) => <li key={index}>{activity}</li>)}
                            </ul>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default CurriculumVitaeInfo;