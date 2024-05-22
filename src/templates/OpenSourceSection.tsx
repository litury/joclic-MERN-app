import React from 'react';
import { Typography, Card, Button } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const OpenSourceSection = () => {
    return (
        <div className="bg-white py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-center">
                    <Card className="w-full md:w-1/2 lg:w-1/3 mb-8 md:mb-0 md:mr-8 p-8 shadow-lg rounded-lg">
                        <div className="flex flex-col items-center">
                            <GithubOutlined className="text-4xl text-gray-500 mb-4" />
                            <Title level={3} className="text-xl font-bold mb-4">
                                Open Source
                            </Title>
                            <Paragraph className="text-center text-gray-600 mb-6">
                                Этот проект имеет открытый исходный код, и каждый желающий может присоединиться к его развитию.
                            </Paragraph>
                            <Button
                                type="primary"
                                href="https://github.com/your-repo"
                                target="_blank"
                                rel="noopener noreferrer"
                                icon={<GithubOutlined />}
                            >
                                Перейти к репозиторию
                            </Button>
                        </div>
                    </Card>

                    <div className="w-full md:w-1/2 lg:w-1/3">
                        <Title level={3} className="text-xl font-bold mb-4">
                            Статистика проекта
                        </Title>
                        <div className="flex flex-col md:flex-row justify-between">
                            <div className="bg-gray-100 p-4 rounded-lg mb-4 md:mb-4 md:mr-4 w-full md:w-1/2">
                                <Paragraph className="text-gray-600 text-center">
                                    <span className="text-2xl font-bold">42</span>
                                    <br/>
                                    Участников
                                </Paragraph>
                            </div>
                            <div className="bg-gray-100 p-4 rounded-lg mb-4 md:mb-4 md:mr-4 w-full md:w-1/2">
                                <Paragraph className="text-gray-600 text-center">
                                    <span className="text-2xl font-bold">128</span>
                                    <br/>
                                    Часов разработки
                                </Paragraph>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row justify-between">
                            <div className="bg-gray-100 p-4 rounded-lg mb-4 md:mb-0 md:mr-4 w-full md:w-1/2">
                                <Paragraph className="text-gray-600 text-center">
                                    <span className="text-2xl font-bold">128</span>
                                    <br/>
                                    Коммитов
                                </Paragraph>
                            </div>
                            <div className="bg-gray-100 p-4 rounded-lg mb-4 md:mb-0 md:mr-4 w-full md:w-1/2">
                                <Paragraph className="text-gray-600 text-center">
                                    <span className="text-2xl font-bold">128</span>
                                    <br/>
                                    Строчек кода
                                </Paragraph>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export {OpenSourceSection};