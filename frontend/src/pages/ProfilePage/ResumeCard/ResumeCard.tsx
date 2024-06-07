import React, {useState} from 'react';
import { Cell, Switch } from '@telegram-apps/telegram-ui';

interface ResumeCardProps {
    resumeName: string;
    views: string;
    id: string;
    isScriptActive: boolean
}

const ResumeCard: React.FC<ResumeCardProps> = ({ resumeName, views, id, isScriptActive }) => {
    const [isScript, setIsScriptActive] = useState(isScriptActive);

    console.log(`Статус ${isScriptActive} для резюме ${id}`)

    const cardStyle: React.CSSProperties = {
        backgroundColor: `var(--tg-theme-bg-color)`,
        marginBottom: '8px',
    };

    const handleToggleScript = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const shouldStart = event.target.checked;
        setIsScriptActive(shouldStart);
        console.log(`Скрипт для резюме ${id} ${shouldStart ? 'запущен' : 'остановлен'}`);

        try {
            const response = await fetch('https://2537546-ps47079.twc1.net/apply', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    resumeId: '43434',
                    telegram_id: '43434',
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