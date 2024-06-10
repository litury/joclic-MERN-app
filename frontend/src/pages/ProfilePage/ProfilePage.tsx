// ProfilePage.tsx
import React, {useEffect, useState} from 'react';
import { Cell, Card} from '@telegram-apps/telegram-ui';
import {ResumeCard} from './ResumeCard/ResumeCard.tsx';
import './ProfilePage.css'
import {useInitData} from "@tma.js/sdk-react";

interface Resume {
    id: string;
    title: string;
    totalViews: string;
    isScriptActive: boolean;
}

const placeholderStyle: React.CSSProperties = {
    backgroundColor: `var(--tg-theme-bg-color)`,
    marginBottom: '8px',
    textAlign: 'center' as const, // Указываем 'center' как константу
};

const ProfilePage: React.FC = () => {
    const initData = useInitData();
    const telegram_id = initData?.user?.id
    const telegram_name = initData?.user?.firstName
    const [resumes, setResumes] = useState<Resume[]>([]);    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchResumes = async () => {
            const response = await fetch(`https://litury-josclicprod-a0d4.twc1.net/profile?telegram_id=${telegram_id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            setResumes(data);
            setIsLoading(false);
        };

        fetchResumes();

    }, [telegram_id]);

    useEffect(() => {
        console.log(resumes)

    }, [resumes]);


    return (
        <>

            <Cell
                className='profile-header'
                style={placeholderStyle}
                description={
                    <div style={{display: 'flex', justifyContent: 'space-between', gap: '8px'}}>
                        <Card style={{padding: '8px', width: '100%', textAlign: 'center'}}>
                            <div style={{fontSize: '12px'}}>Откликов</div>
                            <div style={{fontSize: '16px', fontWeight: 'bold'}}>9</div>
                        </Card>
                        <Card style={{padding: '8px', width: '100%', textAlign: 'center'}}>
                            <div style={{fontSize: '12px'}}>JOC</div>
                            <div style={{fontSize: '16px', fontWeight: 'bold'}}>20</div>
                        </Card>
                        <Card style={{padding: '8px', width: '100%', textAlign: 'center'}}>
                            <div style={{fontSize: '12px'}}>JOCIndex</div>
                            <div style={{fontSize: '16px', fontWeight: 'bold'}}>7.65</div>
                        </Card>
                    </div>
                }
                subtitle={`Ваш общий баланс и средняя метрика:`}
            >
                Привет {telegram_name}
            </Cell>

            <div>
                {isLoading ? (
                    <div>Загрузка...</div>
                ) : (
                    resumes.map((resume) => (
                        <ResumeCard
                            key={resume.id}
                            resumeName={resume.title}
                            views={resume.totalViews}
                            resume_id={resume.id}
                            isScriptActive={resume.isScriptActive}
                        />
                    ))
                )}
            </div>
        </>
    );
};

export {ProfilePage}
