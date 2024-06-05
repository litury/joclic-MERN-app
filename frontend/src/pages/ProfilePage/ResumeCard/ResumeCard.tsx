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
            subtitle="Поиск по рекомендациям HH.ru"
            after={
                <Switch
                    onChange={() => onToggleScript(resumeName)}
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