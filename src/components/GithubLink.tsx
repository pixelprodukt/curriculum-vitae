import { useEffect, useState } from "react";

interface GithubLinkProps { }

const GithubLink = (props: GithubLinkProps) => {

    const [profileData, setProfileData] = useState(null);

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
        <>
            <div>Here comes the github profile</div>
        </>
    );
}

export default GithubLink;