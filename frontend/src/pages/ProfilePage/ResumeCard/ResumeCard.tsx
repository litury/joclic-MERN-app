import React from 'react';
import { Cell, Switch } from '@telegram-apps/telegram-ui';

interface ResumeCardProps {
    resumeName: string;
    views: string;
    id: string;
    onToggleScript: (resumeId: string, shouldStart: boolean) => void;
}

const ResumeCard: React.FC<ResumeCardProps> = ({ resumeName, views, id, onToggleScript }) => {
    const cardStyle: React.CSSProperties = {
        backgroundColor: `var(--tg-theme-bg-color)`,
        marginBottom: '8px',
    };

    const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // Вызываем onToggleScript с ID резюме и состоянием переключателя
        onToggleScript(id, event.target.checked);
    };

    return (
        <>
        <Cell
            style={cardStyle}
            subtitle="Поиск по рекомендациям HH.ru"
            after={
                <Switch
                    onChange={handleSwitchChange}
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