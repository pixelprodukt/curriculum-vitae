import './App.css'
import Card from './components/Card';
import CurriculumVitaeInfo from './components/CurriculumVitaeInfo';
import { CareerPathData } from './data/career-path-data';
import { EducationData } from './data/education-data';
import { SkillTagData } from './data/skill-tag-data';
import { SkillLevel } from './models/skill-level';
import { SkillTag } from './models/skill-tag';
import Headline from './components/Healine';
import GithubLink from './components/GithubLink';

const App = () => {
    const careerPathData = CareerPathData;
    const educationData = EducationData;
    const skillTagData = SkillTagData;

    return (
        <>
            <div className='w-full'>
                <div className="container mx-auto px-4">

                    <div className='mt-24'></div>

                    <div className='w-full'>
                        <div className='ml-auto mr-auto red-sun'></div>
                    </div>

                    <div className='mb-24'></div>

                    <h2 className='text-slate-600 text-3xl mb-2'>Curriculum Vitae</h2>
                    <h1 className='text-custom-red text-6xl font-light'>ADRIAN SEMMLER</h1>

                    <div className='mb-12'></div>

                    <p className='text-slate-600 text-lg mb-4'>
                        ...
                    </p>

                    <div className='mb-8'></div>

                    <div className='columns-2 columns-lg'>
                        <Card headline={'Werdegang'}>
                            <CurriculumVitaeInfo data={careerPathData} />
                        </Card>

                        <Card headline={'Aus- und Weiterbildung'}>
                            <CurriculumVitaeInfo data={educationData} />
                        </Card>
                    </div>

                    <div className='p-6'></div>

                    <Headline content='Angewandte Technologien / Know-how' />
                    <div className='flex flex-wrap'>
                        {skillTagData.map(tag => {
                            return (
                                <div className={`${getTagClasses(tag)} mb-2`} key={tag.name}>{tag.name}</div>
                            );
                        })}
                    </div>

                    <div className='p-6'></div>

                    <div className='columns-4 columns-md'>
                        <GithubLink />
                    </div>

                    <div className='p-6'></div>

                </div>

            </div>
        </>
    )
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

export default App;
