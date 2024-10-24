import { useEffect, useState } from 'react';

const useGetAllFrameworkIcons = () => {
    const [icons, setIcons] = useState<any[]>([]);

    useEffect(() => {
        const imports = import.meta.glob('../assets/framework-icons/*.svg');
        console.log('object keys', Object.keys(imports));

        Promise.all(Object.keys(imports).map(key => imports[key]()))
        .then(result => {
            console.log('result', result);
            setIcons(result);
        })
        .catch(err => console.log('Error while fetching icon files: ' + err));
    }, []);

    return icons;
};

export default useGetAllFrameworkIcons;