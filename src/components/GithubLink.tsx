import { useEffect, useState } from "react";
import Card from './Card';
import githubLogo from '../assets/github_logo.svg';

interface GithubLinkProps { }

const GithubLink = (props: GithubLinkProps) => {

    const [profileData, setProfileData]: [any, any] = useState({});

    const fetchData = async () => {
        try {
            const response = await fetch('https://api.github.com/users/pixelprodukt');

            if (!response.ok) {
                throw new Error('Github response was not ok');
            }

            const result = await response.json();
            console.log('result: ', result);
            setProfileData(result);
        }
        catch (error: any) {
            console.error('Error fetching data:', error.message);
        }
    };

    useEffect(() => { fetchData(); }, []);

    return (
        <Card>
            <a className='flex flex-wrap items-center font-semibold' href={profileData.html_url} target='_blank'>
                <img src={githubLogo} className='w-8 mr-2' /><div>Visit my GitHub profile</div>
            </a>
        </Card>
    );
}

export default GithubLink;