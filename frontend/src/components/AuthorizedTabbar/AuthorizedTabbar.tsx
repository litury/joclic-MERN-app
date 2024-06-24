import React, { useState } from 'react';
import { Tabbar } from '@telegram-apps/telegram-ui';
import { useNavigate } from 'react-router-dom';
import { HomeOutlined, UserOutlined, ShoppingOutlined } from '@ant-design/icons';
import './AuthorizedTabbar.css';
const AuthorizedTabbar: React.FC = () => {
    const navigate = useNavigate();
    const [currentTab, setCurrentTab] = useState('/profile');

    const iconStyle = {
        fontSize: '16px',
        paddingTop: '8px',
        paddingBottom: '8px',
    };

    const tabs = [
        { id: 'board', text: 'Доска', icon: <HomeOutlined style={iconStyle} />, route: '/board' },
        { id: 'profile', text: 'Профиль', icon: <UserOutlined style={iconStyle} />, route: '/profile' },
        { id: 'shop', text: 'Магазин', icon: <ShoppingOutlined style={iconStyle} />, route: '/shop' },
    ];

    const tabbarStyle = {
        height: '50px',
        backgroundColor: `var(--tg-theme-bg-color)`,
    };

    return (
        <Tabbar style={tabbarStyle}>
            {tabs.map(tab => (
                <Tabbar.Item
                    key={tab.id}
                    selected={currentTab === tab.route}
                    onClick={() => {
                        setCurrentTab(tab.route);
                        navigate(tab.route);
                    }}
                >
                    {tab.icon}
                </Tabbar.Item>
            ))}
        </Tabbar>
    );
};

export { AuthorizedTabbar };
