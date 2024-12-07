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
            bgColorClass = 'bg-custom-dark-green'
            break;
        case SkillLevel.GOOD:
            bgColorClass = 'bg-custom-light-green';
            break;
        case SkillLevel.MEDIOCRE:
            bgColorClass = 'bg-custom-dark-orange';
            break;
        case SkillLevel.READ_ABOUT_IT:
            bgColorClass = 'bg-custom-light-orange';
            break;
        default:
            bgColorClass = 'bg-red-700';
    }

    return `${bgColorClass} text-white font-bold rounded-2xl p-2 mr-1`;
}

export default SkillTags;