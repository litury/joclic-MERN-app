import React, {useEffect} from 'react';
import { Typography, Button } from 'antd';
import TelegramIcon from '../templates/TelegramIcon';

const { Title, Paragraph } = Typography;

const RedirectPage = () => {

    useEffect(() => {
        handleRedirect();
    }, []);


    const handleRedirect = () => {
        // Попытка открыть Telegram бота через схему URL
        const telegramUrl = 'tg://resolve?domain=joclic_bot';
        window.open(telegramUrl, '_self');
    };


    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                backgroundColor: '#F3F4F6',
            }}
        >
            <div
                style={{
                    maxWidth: '90%',
                    padding: '16px',
                    backgroundColor: '#ffffff',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '16px',
                    }}
                >
                    <Title level={3} style={{ fontSize: '20px', fontWeight: 'bold', color: '#333333' }}>
                        Добро пожаловать в JoClic Bot!
                    </Title>
                </div>
                <Paragraph
                    style={{
                        color: '#666666',
                        marginBottom: '24px',
                        textAlign: 'center',
                    }}
                >
                    Вы успешно авторизовались с помощью OAuth2. Теперь вы можете перейти
                    к JoClic Bot в Telegram и смело использовать все его возможности.
                </Paragraph>
                <Button
                    type="primary"
                    size="large"
                    block
                    onClick={handleRedirect}
                    icon={<TelegramIcon />}
                    style={{
                            backgroundColor: '#0088cc',
                            borderColor: '#0088cc',
                            color: '#ffffff',
                            fontWeight: 'bold',
                            padding: '0',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                >
                    Перейти к JoClic Bot
                </Button>
            </div>
        </div>
    );
};

export default RedirectPage;