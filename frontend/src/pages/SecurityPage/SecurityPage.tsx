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
        const fetchApply = async () => {
            const response = await fetch('https://2537546-ps47079.twc1.net/free-apply', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ telegram_id: telegram_id }),
            });
            const data = await response.json();
            setResumes(data);
            setIsLoading(false);
        };
        fetchApply();

    }, [telegram_id]);

    useEffect(() => {
        console.log(resumes);
    }, [resumes]);

    if (isLoading) {
        return <div>Loading...</div>; // Здесь можно добавить компонент загрузки
    }

    return (
        <div>ЗАГРУЗИЛИ!</div>
    );
};

export { ResumesPage };