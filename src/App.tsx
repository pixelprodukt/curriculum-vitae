import './App.css'
import Card from './components/Card';
import CurriculumVitaeInfo from './components/CurriculumVitaeInfo';
import { CareerPathData } from './data/career-path-data';
import { EducationData } from './data/education-data';
import { SkillTagData } from './data/skill-tag-data';
import { SkillLevel } from './models/skill-level';
import { SkillTag } from './models/skill-tag';
import profileImg from './assets/iceland_black_beach.jpg';
import yellowSunsetImage from './assets/red_sunset.svg';

/* const frameworkIcons = import.meta.glob('./assets/framework-icons/*.svg');
console.log('frameworkIcons', frameworkIcons); */
/* const resolvedIcons: string[] = [];
for (const icon in frameworkIcons) {
    frameworkIcons[icon]().then((icn: string) => resolvedIcons.push(icn)));
} */

const App = () => {
    const frameworkIcons = Object.values(import.meta.glob('./assets/framework-icons/*.{png,jpg,jpeg,PNG,JPEG,svg}', { eager: true, as: 'url' }));
    console.log('test', frameworkIcons);
    const careerPathData = CareerPathData;
    const educationData = EducationData;
    const skillTagData = SkillTagData;

    return (
        <>
            <div className='w-full'>
                <div className="container mx-auto px-4">

                    {/* <img src={yellowSunsetImage} className='rounded-md w-full' alt="" /> */}
                    <div className='header-image'></div>
                    <div className='mb-16'></div>


                    <h2 className='text-slate-600 text-3xl mb-2'>Curriculum Vitae</h2>
                    <h1 className='text-custom-red text-6xl font-light'>ADRIAN SEMMLER</h1>
                    {/* <hr className='border-slate-600 border' /> */}

                    <div className='mb-12'></div>

                    <div className='flex flex-row'>
                        <div className='basis-1/5 mr-2'>
                            <img src={profileImg} className='rounded-md' />
                        </div>
                        <div className='basis-4/5 text-slate-600 text-lg ml-2'>
                            <p className='mb-4'>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                                ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                                et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                                rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            </p>
                            <p className='mb-4'>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                                ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                                et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                                rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                    </div>

                    <div className='mb-8'></div>

                    <div className='flex flex-row'>
                        <div className='basis-1/2 mr-2'>
                            <Card headline={'Werdegang'}>
                                <CurriculumVitaeInfo data={careerPathData} />
                            </Card>
                        </div>
                        <div className='basis-1/2 ml-2'>
                            <Card headline={'Aus- und Weiterbildung'}>
                                <CurriculumVitaeInfo data={educationData} />
                            </Card>
                        </div>
                    </div>

                    <div className='p-6'></div>

                    {/* <div className='flex flex-row'>
                        {skillTagData.map(tag => {
                            return (
                                <div className={getTagClasses(tag)} key={tag.name}>{tag.name}</div>
                            );
                        })}
                    </div> */}

                    <div className='flex flex-row'>
                        {frameworkIcons.map((icon, index) => {
                            return (
                                <>
                                    <div className='w-25'>
                                        <img src={icon} key={index} className='w-28 mr-3' />
                                    </div>
                                </>
                            );
                        })}
                    </div>

                </div>

            </div>
        </>
    )
};

function getTagClasses(tag: SkillTag) {
    let bgColorClass = '';

    if (tag.level === SkillLevel.VERY_GOOD) {
        bgColorClass = 'bg-green-700';
    } else if (tag.level === SkillLevel.GOOD) {
        bgColorClass = 'bg-lime-500';
    } else if (tag.level === SkillLevel.MEDIOCRE) {
        bgColorClass = 'bg-orange-500';
    } else if (tag.level === SkillLevel.READ_ABOUT_IT) {
        bgColorClass = 'bg-amber-400';
    }

    return `${bgColorClass} text-white font-bold rounded-2xl p-2 mr-1`;
}

export default App;
