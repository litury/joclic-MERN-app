// components/Roadmap.js
import React, {useEffect, useState} from 'react';
import {Timeline, Typography} from 'antd';

const {Title, Paragraph} = Typography;

const Roadmap = () => {
    const [isDesktopOrLaptop, setIsDesktopOrLaptop] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 1224px)');
        setIsDesktopOrLaptop(mediaQuery.matches);
    }, []);

    function getColor(section: any) {
        switch (section) {
            case 'Завершенные задачи':
                return 'green';
            case 'Текущие задачи':
                return 'orange';
            case 'Дорожная карта':
                return 'blue';
            default:
                return 'gray';
        }
    }

    function getCategoryColor(category: any) {
        switch (category) {
            case 'Завершенные задачи':
                return 'green-200';
            case 'Текущие задачи':
                return 'orange-200';
            case 'Дорожная карта':
                return 'blue-200';
            default:
                return 'gray-200';
        }
    }

    const categories = {
        'Завершенные задачи': [
            {
                title: '🧰 Инициализация проекта',
                description: 'Старт проекта на стеке MERN.',
                link: 'https://t.me/divatoz/1025',
                time: '2023-29-11'
            },
            {
                title: '💻 Клиентское приложение',
                description: 'React-приложение для управления скриптом',
                link: 'https://t.me/divatoz/1061',
                time: '2024-16-02'
            },
            {
                title: '🚀 Деплой',
                description: 'Связь клиента с контролерами и настройка Nginx',
                link: 'https://t.me/divatoz/1062',
                time: '2024-20-02'
            },
            {
                title: '🌓 Темная тема',
                description: 'Светлая и темная тема в зависимости от Telegram клиента',
                link: 'https://t.me/divatoz/1079',
                time: '2024-15-03'
            },
            {
                title: '⚙️ Очереди задач',
                description: 'Добавил BullMQ для обработки очередей',
                link: 'https://t.me/divatoz/1094',
                time: '2024-05-04'
            },
            {
                title: '🕸️ API интеграция',
                description: 'Изменил логику взаимодействия с Puppeteer на API запросы',
                link: 'https://t.me/divatoz/1094',
                time: '2024-26-04'
            },
        ],
        'Текущие задачи': [
            {
                title: '📈 JOCIndex',
                description: 'Индекс расчета успешности резюме',
                link: 'https://t.me/divatoz/1025',
                time: 'Июнь'
            },
            {
                title: '🤖 AI-сопроводительные',
                description: 'Модуль с Claude API для создания идеальных сопроводительных писем.',
                link: 'https://t.me/divatoz/1025',
                time: 'Июнь'
            },
            {
                title: '🏆 Лидерборд',
                description: 'Отслеживай свои достижения на фоне других участников проекта на основании JOCINDEX',
                link: 'https://t.me/divatoz/1025',
                time: 'Июль'
            },
        ],
        'Дорожная карта': [
            {
                title: '💰 Мем-койн $JOC',
                description: '1 $JOC = 1 отклик * JOCIndex. Монеты можно будет использовать для покупки премиум-функций и различных бонусов внутри проекта.',
                link: 'https://t.me/divatoz/1025',
                time: 'Август'
            },
            {
                title: '🔗 Новые интеграции',
                description: 'Career.habr.com и getmatch.ru.',
                link: 'https://t.me/divatoz/1025',
                time: 'Сентябрь'
            },
        ]
    };

    return (
        <div className={`mx-auto p-4 ${isDesktopOrLaptop ? 'max-w-4xl' : 'max-w-max'}`}>
            <Title level={2} className="text-center text-3xl font-bold mb-8">
                Дорожная карта
            </Title>
            <Paragraph className="text-center text-gray-600 text-base md:text-lg md:max-w-96 ml-auto mr-auto pb-4">
                Ознакомьтесь с нашей дорожной картой, чтобы узнать о текущем статусе разработки, достижениях и планах на
                будущее.
            </Paragraph>

            <Timeline mode={isDesktopOrLaptop ? 'alternate' : 'left'}>
                {Object.entries(categories).map(([category, steps], categoryIndex) => (
                    <React.Fragment key={categoryIndex}>
                        <Timeline.Item color="gray">
                            <div className={`p-2 rounded-md bg-${getCategoryColor(category)}`}>
                                <h2 className="text-lg font-bold">{category}</h2>
                            </div>
                        </Timeline.Item>
                        {steps.map((step, stepIndex) => (
                            <Timeline.Item
                                key={stepIndex}
                                color={getColor(category)}
                                label={''}
                                className="py-2"
                            >
                                <div
                                    className={`flex flex-col ${isDesktopOrLaptop ? 'justify-between' : 'items-start'}`}>
                                    <a href={step.link} target="_blank" rel="noopener noreferrer">
                                        <h3 className="text-lg font-bold text-gray-800 hover:text-blue-600">{step.title}</h3>
                                    </a>
                                    <p className="text-sm text-gray-600">{step.description}</p>
                                    <div className="mt-1">
                                        <span
                                            className="max-w-36 text-xs font-semibold bg-gray-200 bg-auto rounded py-1 px-2">{step.time}</span>
                                    </div>
                                </div>
                            </Timeline.Item>
                        ))}
                    </React.Fragment>
                ))}
            </Timeline>
        </div>
    );
};

export {Roadmap};

