import React, {useState} from 'react';
import { Cell, Switch } from '@telegram-apps/telegram-ui';
import {useInitData} from "@tma.js/sdk-react";

interface ResumeCardProps {
    resumeName: string;
    views: string;
    resume_id: string;
    isScriptActive: boolean
}

const ResumeCard: React.FC<ResumeCardProps> = ({ resumeName, views, resume_id, isScriptActive }) => {
    const [isScript, setIsScriptActive] = useState(isScriptActive);
    const initData = useInitData();
    const telegram_id = initData?.user?.id

    console.log(`Статус ${isScript} для резюме ${resume_id}`)

    const cardStyle: React.CSSProperties = {
        backgroundColor: `var(--tg-theme-bg-color)`,
        marginBottom: '8px',
    };

    const handleToggleScript = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const shouldStart = event.target.checked;
        setIsScriptActive(shouldStart);
        console.log(`Скрипт для резюме ${resume_id} ${shouldStart ? 'запущен' : 'остановлен'}`);

        const endpoint = shouldStart ? 'https://2537546-ps47079.twc1.net/apply' : 'https://2537546-ps47079.twc1.net/stop';
        const method = shouldStart ? 'POST' : 'DELETE';

        try {
            const response = await fetch(endpoint, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    resumeId: resume_id,
                    telegram_id: telegram_id,
                    maxApplies: 10,
                }),
            });

            if (!response.ok) {
                throw new Error('Проблема с отправкой запроса');
            }

            const result = await response.json();
            console.log(result);

        } catch (error) {
            console.error('Ошибка при отправке запроса:', error);
        }
    };

    return (
        <>
        <Cell
            style={cardStyle}
            subtitle="Поиск по рекомендациям HH.ru"
            after={
                <Switch
                    checked={isScript}
                    onChange={handleToggleScript}
                />
            }
            description={
                <div style={{marginTop: 8}}>
                    <div>Просмотров: {views}</div>
                </div>
            }
        >
            {resumeName}
        </Cell>

        </>
    );
};

export  {ResumeCard};