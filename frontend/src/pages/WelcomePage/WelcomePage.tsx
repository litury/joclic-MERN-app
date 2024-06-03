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
    FixedLayout
} from '@telegram-apps/telegram-ui';
import {ResumeCard} from './ResumeCard/ResumeCard.tsx';
import {useInitData, useBackButton} from "@tma.js/sdk-react";
import './WelcomePage.css'
import {Link} from "@/components/Link/Link.tsx";

const WelcomePage = () => {
    const initData = useInitData();
    const backButton = useBackButton();
    const telegram_id = initData?.user?.id
    const [resumes, setResumes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [expanded, setExpanded] = useState(false);
    const handleAccordionChange = () => {
        setExpanded(!expanded);
    };

    // useEffect(() => {
    //     const fetchApply = async () => {
    //         const response = await fetch('https://2537546-ps47079.twc1.net/free-apply', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({ telegram_id: telegram_id }),
    //         });
    //         const data = await response.json();
    //         setResumes(data);
    //         setIsLoading(false);
    //     };
    //
    //     fetchApply();
    //
    // }, [telegram_id]);

    useEffect(() => {
        backButton.hide();

        return () => {
            backButton.show();
        }
    }, [])

    const resumesData = {
        '4c2985b1ff0d3e39020039ed1f635976343969': {
            title: "Frontend React",
            applies: 10,
            vacancies: [
                {'Вакансия Frontend React': "https://example.com/vacancy/1"},
                {'Вакансия Frontend React 2': "https://example.com/vacancy/2"},
                {'Вакансия Frontend React 3': "https://example.com/vacancy/3"},
                {'Вакансия Frontend React 4': "https://example.com/vacancy/4"},
                {'Вакансия Frontend React 5': "https://example.com/vacancy/5"},
                {'Вакансия Frontend React 6': "https://example.com/vacancy/6"},
                {'Вакансия Frontend React 7': "https://example.com/vacancy/7"}
            ]
        },
        '9f2cf605ff0cb204570039ed1f6f65496f7761': {
            title: "Frontend-разработчик",
            applies: 10,
            vacancies: [
                {'Вакансия Frontend-разработчик 1': "https://example.com/vacancy/8"},
                {'Вакансия Frontend-разработчик 2': "https://example.com/vacancy/9"},
                {'Вакансия Frontend-разработчик 3': "https://example.com/vacancy/10"},
                {'Вакансия Frontend-разработчик 4': "https://example.com/vacancy/11"},
                {'Вакансия Frontend-разработчик 5': "https://example.com/vacancy/12"},
                {'Вакансия Frontend-разработчик 6': "https://example.com/vacancy/13"}
            ]
        },
        '096735b7ff0d3e393a0039ed1f526830726435': {
            title: "Frontend Vue",
            applies: 10,
            vacancies: [
                {'Вакансия Frontend Vue 1': "https://example.com/vacancy/14"},
                {'Вакансия Frontend Vue 2': "https://example.com/vacancy/15"},
                {'Вакансия Frontend Vue 3': "https://example.com/vacancy/16"},
                {'Вакансия Frontend Vue 4': "https://example.com/vacancy/17"},
                {'Вакансия Frontend Vue 5': "https://example.com/vacancy/18"}
            ]
        },
    };

    useEffect(() => {
        console.log(resumes);
    }, [resumes]);

    const totalApplies = Object.values(resumesData).reduce((acc, curr) => {
        return acc + curr.applies;
    }, 0);

    if (!isLoading) {
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

            {Object.entries(resumesData).map(([resumeId, resumeData]) => (
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