import { useState, useEffect } from 'react';
import { Button } from '@telegram-apps/telegram-ui';
import { HomeOutlined } from '@ant-design/icons';
import pusher from '../pusher/pusher'
import {Link} from '../Link/Link'
import { useInitData } from '@tma.js/sdk-react';
import { useNavigate } from 'react-router-dom';



const AuthButton = () => {
    const initData = useInitData();
    const telegram_id = initData?.user?.id
    const authlink = `https://hh.ru/oauth/authorize?response_type=code&client_id=VMCTV29C1QNJQVPSNEG4BRKKQDCH96GFBPT2S40IHFKCGP3MRNK7JB8AC4VOINKD&state=${telegram_id}`
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [authStatus, setAuthStatus] = useState('');
    const [authMessage, setAuthMessage] = useState('');

    useEffect(() => {
        // Подписка на канал и события
        const channel = pusher.subscribe(`auth-channel-${telegram_id}`);
        console.log(`Подписались на канал ${channel.name}`)

        channel.bind('auth-success', (data: any) => {
            setAuthStatus('success');
            setAuthMessage(data.message);
            setIsLoading(false);
            navigate('/profile');
            console.log(authMessage);

        });
        channel.bind('auth-error', (data: any) => {
            setAuthStatus('error');
            setAuthMessage(data.message);
            setIsLoading(false);
            console.log(authMessage);
        });

        // Отключение от сервера при размонтировании компонента
        return () => {
            channel.unbind_all();
            channel.unsubscribe();
        };
    }, []);

    return (
        <Link
            to={authlink}
            onClick={() => setIsLoading(true)}
        >
            <Button
                before={<HomeOutlined style={{ fontSize: '20px' }} />}
                size="l"
                stretched
                disabled={isLoading}
                loading={isLoading}
            >
                Авторизация
            </Button>
            {authStatus && <div>{`Статус авторизации: ${authStatus}`}</div>}
        </Link>
    );
};

export default AuthButton;