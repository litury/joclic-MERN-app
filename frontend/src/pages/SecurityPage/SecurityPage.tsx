import { useEffect, useState } from 'react';
import { List } from '@telegram-apps/telegram-ui';
import { ResumeCard } from './ResumeCard';
import {useInitData} from "@tma.js/sdk-react";

const ResumesPage = () => {
    const initData = useInitData();
    const telegram_id = initData?.user?.id
    const [resumes, setResumes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchResumes = async () => {
            const response = await fetch(`https://2537546-ps47079.twc1.net/resumes?telegram_id=${telegram_id}`);
            const data = await response.json();
            setResumes(data.items);
            setIsLoading(false);
        };

        console.log(`Fetching resumes for ${telegram_id}`);
        fetchResumes();
        console.log(`Fetched resumes for ${telegram_id}`);

    }, [telegram_id]);

    if (isLoading) {
        return <div>Loading...</div>; // Здесь можно добавить компонент загрузки
    }

    return (
        <List>
            {resumes.map(resume => <ResumeCard key={resume.id} resume={resume} />)}
        </List>
    );
};

export { ResumesPage };