import React from 'react';
import { Timeline, Typography } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const RoadmapSection = () => {
    return (
        <div className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <Title level={2} className="text-center text-3xl font-bold mb-8">
                    Дорожная карта
                </Title>
                <Paragraph className="text-center text-gray-600 mb-12">
                    Ознакомьтесь с нашей дорожной картой, чтобы узнать о текущем статусе разработки, достижениях и планах на будущее.
                </Paragraph>

                <div className="flex flex-col md:flex-row justify-center animate-fade-in">
                    <Timeline mode="alternate" className="md:mr-8">
                        <Timeline.Item>
                            <Typography.Text mark className="text-lg font-semibold">
                                Уже сделано
                            </Typography.Text>
                            <ul className="list-disc ml-4">
                                <li className="text-gray-700">Создание базового функционала приложения для автоматической отправки откликов</li>
                                <li className="text-gray-700">Интеграция с популярными сайтами по поиску вакансий</li>
                                <li className="text-gray-700">Возможность создания и редактирования резюме</li>
                            </ul>
                        </Timeline.Item>

                        <Timeline.Item color="green">
                            <Typography.Text mark className="text-lg font-semibold">
                                Текущая разработка
                            </Typography.Text>
                            <ul className="list-disc ml-4">
                                <li className="text-gray-700">Улучшение алгоритмов подбора вакансий</li>
                                <li className="text-gray-700">Расширение базы доступных вакансий</li>
                                <li className="text-gray-700">Оптимизация процесса отправки откликов</li>
                            </ul>
                        </Timeline.Item>

                        <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                            <Typography.Text mark className="text-lg font-semibold">
                                Скоро
                            </Typography.Text>
                            <ul className="list-disc ml-4">
                                <li className="text-gray-700">Подключение новых сайтов для поиска вакансий: career.habr.com и getmatch.ru</li>
                                <li className="text-gray-700">Интеграция агрегатора телеграм-каналов с вакансиями</li>
                                <li className="text-gray-700">Разработка AI-сопровождения с использованием Claude API для создания сопроводительных писем</li>
                                <li className="text-gray-700">Лидерборд приглашений и отказов</li>
                                <li className="text-gray-700">Запуск мем-койна $JOC</li>
                            </ul>
                        </Timeline.Item>
                    </Timeline>
                </div>
            </div>
        </div>
    );
};

export {RoadmapSection};