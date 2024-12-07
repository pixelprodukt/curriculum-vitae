import { SkillLevel } from '../models/skill-level';
import { SkillTag } from '../models/skill-tag';

interface SkillTagsProps {
    data: SkillTag[];
}

const SkillTags = ({ data }: SkillTagsProps) => {
    return (
        <div className='flex flex-wrap'>
            {data.map(tag => {
                return (
                    <div className={`${getTagClasses(tag)} mb-2`} key={tag.name}>{tag.name}</div>
                );
            })}
        </div>
    );
};

function getTagClasses(tag: SkillTag) {
    let bgColorClass = '';

    switch (tag.level) {
        case SkillLevel.VERY_GOOD:
            bgColorClass = 'bg-green-700';
            break;
        case SkillLevel.GOOD:
            bgColorClass = 'bg-lime-500';
            break;
        case SkillLevel.MEDIOCRE:
            bgColorClass = 'bg-orange-500';
            break;
        case SkillLevel.READ_ABOUT_IT:
            bgColorClass = 'bg-amber-400';
            break;
        default:
            bgColorClass = 'bg-red-700';
    }

    return `${bgColorClass} text-white font-bold rounded-2xl p-2 mr-1`;
}

export default SkillTags;