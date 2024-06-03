// File: ProfilePage.tsx
import type {FC} from 'react';
import {Link} from '@/components/Link/Link.tsx';
import {Placeholder, Title, Text, Button} from '@telegram-apps/telegram-ui';

const ProfilePage: FC = () => {
    return (
        <Placeholder
            header={<Title >Привет работничек</Title>}
            description={
                <Text style={{
                    textAlign: 'center',
                    marginBottom: '20px',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', margin: '0 auto',
                    maxWidth: '100%'

                }}>
                    <Text style={{padding: '0 16px',}}>
                        <p style={{padding: '0', margin: '0'}}>Ищете путь сквозь</p>
                        <p style={{padding: '0', margin: '0'}}>дебри вакансий?</p>

                    </Text>
                    <Text style={{padding: '0 16px',}}>Joclic проведет вас напрямик</Text>
                </Text>
            }
            action={
                <Link to="/works">
                    <Button size="l" stretched>Даа это так утомительно</Button>
                </Link>
            }
        >

        </Placeholder>
    );
};

export {ProfilePage}
