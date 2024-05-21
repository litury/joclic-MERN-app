import React from 'react';
import { Timeline, Typography } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const RoadmapSection = () => {
    const timelineItems = [
        {
            label: (
                <div className="flex items-center">
                    <span className="bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold mr-2">Завершено</span>
                    <span className="text-gray-500">Ноябрь 2022</span>
                </div>
            ),
            content: (
                <ul className="list-disc ml-4">
                    <li className="text-gray-700">Создание базового функционала приложения для автоматической отправки откликов</li>
                    <li className="text-gray-700">Интеграция с популярными сайтами по поиску вакансий</li>
                    <li className="text-gray-700">Возможность создания и редактирования резюме</li>
                </ul>
            ),
        },
        {
            label: (
                <div className="flex items-center">
                    <span className="bg-green-200 rounded-full px-2 py-1 text-sm font-semibold mr-2">В процессе</span>
                    <span className="text-gray-500">Май 2023</span>
                </div>
            ),
            content: (
                <ul className="list-disc ml-4">
                    <li className="text-gray-700">Улучшение алгоритмов подбора вакансий</li>
                    <li className="text-gray-700">Расширение базы доступных вакансий</li>
                    <li className="text-gray-700">Оптимизация процесса отправки откликов</li>
                </ul>
            ),
        },
        {
            label: (
                <div className="flex items-center">
                    <ClockCircleOutlined className="text-yellow-500 mr-2" />
                    <span className="text-gray-500">Август 2023</span>
                </div>
            ),
            content: (
                <ul className="list-disc ml-4">
                    <li className="text-gray-700">Подключение новых сайтов для поиска вакансий: career.habr.com и getmatch.ru</li>
                    <li className="text-gray-700">Интеграция агрегатора телеграм-каналов с вакансиями</li>
                    <li className="text-gray-700">Разработка AI-сопровождения с использованием Claude API для создания сопроводительных писем</li>
                    <li className="text-gray-700">Лидерборд приглашений и отказов</li>
                    <li className="text-gray-700">Запуск мем-койна $JOC</li>
                </ul>
            ),
        },
    ].map((item, index) => (
        <Timeline.Item key={index} label={item.label}>
            {item.content}
        </Timeline.Item>
    ));

    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <Title level={2} className="text-center text-3xl font-bold mb-8">
                    Дорожная карта
                </Title>
                <Paragraph className="text-center text-gray-600 mb-12">
                    Ознакомьтесь с нашей дорожной картой, чтобы узнать о текущем статусе разработки, достижениях и планах на будущее.
                </Paragraph>

                <div className="flex justify-center animate-fade-in">
                    <div className="w-full md:w-2/3 lg:w-1/2">
                        <Timeline mode="alternate" className="md:mr-8">
                            {timelineItems}
                        </Timeline>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { RoadmapSection };

