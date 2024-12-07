import './App.css'
import Card from './components/Card';
import CurriculumVitaeInfo from './components/CurriculumVitaeInfo';
import { CareerPathData } from './data/career-path-data';
import { EducationData } from './data/education-data';
import { SkillTagData } from './data/skill-tag-data';
import Headline from './components/Healine';
import GithubLink from './components/GithubLink';
import SkillTags from './components/SkillTags';

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

                    <p className='text-slate-600 text-xl leading-8 mb-4'>
                        Ich würde mich gerne näher bei Ihnen vorstellen: Ich 
                        bin 40 Jahre alt, in Berlin geboren und lebe auch dort. Ich habe mich bereits in der Jugend für das Programmieren 
                        interessiert, da ich gerne Computerspiele entwickeln wollte. Manchmal kommt es jedoch 1. anders und 2. als man denkt 
                        und ich habe eine Ausbildung als Grafiker im Bereich Printmedien absolviert.
                    </p>
                    <p className='text-slate-600 text-xl leading-8 mb-4'>
                        Dennoch tauchte das Thema Programmieren immer wieder mal auf und ich beschloss irgendwann, meinen beruflichen Fokus mehr 
                        auf Webseitengestaltung und später dann auch -programmierung zu legen. Ich lernte in einem Kurs HTML, CSS und JavaScript, 
                        beschäftigte mich in meiner Freizeit mit kleinen Projekten und hatte einen Kumpel, der als gelernter Anwendungsentwickler 
                        eine Art Mentor-Rolle übernahm und von dem ich viel lernen konnte.

                    </p>
                    <p className='text-slate-600 text-xl leading-8 mb-4'>
                        Aktuell bin ich jetzt seit ca. 6 Jahren als Softwareentwickler tätig und habe frontendseitig mit Angular und React gearbeitet,
                        auf Backendseite mit Java/Springboot oder NestJS und versuche mich stets auch privat weiter zu bilden. Ich habe Spaß daran, besser
                        in Kotlin als auch C++ zu werden, meine React-Kenntnisse wieder up-to-date zu bringen und mir neue Webframeworks anzuschauen. 
                        Da der Wunsch, Computerspiele zu entwickeln, nie erloschen ist, beschäftige ich mich damit ebenso und bastele ab und zu einige kleinere
                        Prototypen.
                        <br />
                        <br />
                        Vielen Dank für Ihre Zeit
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
                    <SkillTags data={skillTagData} />

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

export default App;
