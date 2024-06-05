// ProfilePage.tsx
import React from 'react';
import {Section, Avatar, Text, List, Cell, Badge, Button, ButtonCell, Placeholder, Card} from '@telegram-apps/telegram-ui';
import {ResumeCard} from './ResumeCard/ResumeCard.tsx';
import './ProfilePage.css'
interface Resume {
    id: number;
    title: string;
    conversion: {
        invites: number;
        rejections: number;
    };
}

const user = {
    name: 'Иван Петров',
    avatarUrl: 'https://picsum.photos/id/1/100/100',
    jobCoins: 120,
    remainingApplications: 8,
    resumes: [
        {
            id: 1,
            title: 'Резюме 1',
            conversion: {
                invites: 5,
                rejections: 2,
            },
        },
        {
            id: 2,
            title: 'Резюме 2',
            conversion: {
                invites: 3,
                rejections: 1,
            },
        },
    ],
};

const placeholderStyle: React.CSSProperties = {
    backgroundColor: `var(--tg-theme-bg-color)`,
    marginBottom: '8px',
    textAlign: 'center' as const, // Указываем 'center' как константу
};

const ProfilePage: React.FC = () => {
    const handleToggleScript = (resumeId) => {
        console.log(`Запуск скрипта для резюме ${resumeId}`);
    };


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
                Привет {user.name}
            </Cell>

            <div>
                <ResumeCard
                    resumeName="Frontend-разработчик"
                    views={100}
                    onToggleScript={handleToggleScript}
                />

            </div>
        </>
    );
};

export default ProfilePage;


export {ProfilePage}
