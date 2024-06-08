// File: WelcomePage.tsx

import {useEffect, useState} from 'react';
import {
    Accordion,
    Cell,
    Skeleton,
    Spinner,
    Divider,
    Placeholder,
    Button,
} from '@telegram-apps/telegram-ui';
import {ResumeCard} from './ResumeCard/ResumeCard.tsx';
import {useInitData, useBackButton} from "@tma.js/sdk-react";
import './WelcomePage.css'
import {Link} from "@/components/Link/Link.tsx";

type Vacancy = {
    [key: string]: string; // Каждый элемент массива vacancies представляет собой объект с одной парой ключ-значение
};

type ResumeData = {
    title: string;
    applies: number;
    vacancies: Vacancy[];
};

type Resume = {
    [key: string]: ResumeData; // Объект resumes содержит ключи, соответствующие ID резюме, и значения типа ResumeData
};

const WelcomePage = () => {
    const initData = useInitData();
    const backButton = useBackButton();
    const telegram_id = initData?.user?.id
    const [resumes, setResumes] = useState<Resume>({});
    const [isLoading, setIsLoading] = useState(true);
    const [expanded, setExpanded] = useState(false);
    const handleAccordionChange = () => {
        setExpanded(!expanded);
    };

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
            console.log(data);
            setResumes(data);
            setIsLoading(false);
        };

        fetchApply();

    }, [telegram_id]);

    useEffect(() => {
        backButton.hide();

        return () => {
            backButton.show();
        }
    }, [])

    useEffect(() => {
        console.log(resumes);
    }, [resumes]);

    const totalApplies = Object.values(resumes).reduce((acc, curr) => acc + curr.applies, 0);

    if (isLoading) {
        return (
            <>
                <Skeleton className="skeleton">
                <Placeholder
                    description={
                        <Spinner size="m"/>}
                    header="Собираем данные... 📊"
                >

                </Placeholder>
                </Skeleton>
                <Divider/>
                <Skeleton className="skeleton">
                    <Accordion expanded={expanded} onChange={handleAccordionChange}>
                        <Accordion.Summary
                            description={
                                <div style={{display: "flex", alignItems: "center"}}>
                                    <span style={{paddingRight: '8px'}}>Отправлено откликов: </span>
                                    <Spinner size="s"/>
                                </div>

                            }
                        >
                            Подгружаем резюме...
                        </Accordion.Summary>
                        <Accordion.Content>


                            <Cell className="skeleton">
                                Пожалуйста подождите...
                            </Cell>


                        </Accordion.Content>
                    </Accordion>
                </Skeleton>

            </>
        );
    }

    return (
        <>
            <Placeholder
                description={
                    `Я отправил ${totalApplies} подарочных откликов и конвертировал их в ${totalApplies} JOC коинов.
                
                `}
                header="Успешно! 🎉"
            >

            </Placeholder>

            {Object.entries(resumes).map(([resumeId, resumeData]) => (
                <>
                    <ResumeCard key={resumeId} resumeData={resumeData}/>
                    <Divider/>
                </>
            ))}

                <div style={{display: 'flex', justifyContent: 'center', marginTop: '16px'}}>
                    <Link to="/profile">
                        <Button size="l">Перейти в профиль</Button>
                    </Link>
                </div>


        </>
    );
};

export {WelcomePage};