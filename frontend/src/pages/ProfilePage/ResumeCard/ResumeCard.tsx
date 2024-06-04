import React from 'react';
import { Cell, Divider, Badge, Switch } from '@telegram-apps/telegram-ui';

const ResumeCard = ({ resumeName, responses, invitations, rejections, views, onToggleScript }) => {
    const cardStyle: React.CSSProperties = {
        backgroundColor: `var(--tg-theme-bg-color)`,
        marginBottom: '8px',
    };

    return (
        <>
            <Divider/>
        <Cell
            style={cardStyle}
            subhead={resumeName}
            subtitle="Поиск по рекомендациям HH.ru"
            after={
                <Switch
                    onChange={() => onToggleScript(resumeName)}
                />
            }
            description={
                <div style={{marginTop: 8}}>
                    <div>Откликов: {responses} | Просмотров: {views}</div>
                    <div>Приглашений: {invitations} | конверсия 5.4%</div>
                    <div>Отказов: {rejections} | конверсия 10%</div>
                </div>
            }
        />
        </>
    );
};

export  {ResumeCard};