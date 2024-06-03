import React, { useState } from 'react';
import { Accordion, Cell } from '@telegram-apps/telegram-ui';
import { Link } from '../../../components/Link/Link';
import './ResumeCard.css';

const numberEmojis = ['0️⃣', '1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'];

interface VacancyObject {
    [key: string]: string | undefined;
}

interface ResumeCardProps {
    resumeData: {
        title: string;
        applies: number;
        vacancies: VacancyObject[];
    };
}
const ResumeCard: React.FC<ResumeCardProps> = ({ resumeData }) => {
    const [expanded, setExpanded] = useState<boolean>(false);

    const handleAccordionChange = (expanded: boolean) => {
        setExpanded(expanded);
    };

    return (
        <Accordion expanded={expanded} onChange={(expandedValue) => handleAccordionChange(expandedValue)}>
            <Accordion.Summary description={`Отправлено откликов: ${resumeData.applies}`}>
                {resumeData.title}
            </Accordion.Summary>
            <Accordion.Content>
                {resumeData.vacancies.map((vacancy, index) => {
                    const vacancyName: string = Object.keys(vacancy)[0];
                    const vacancyUrl: string = vacancy[vacancyName] || '';

                    return (
                        <Link key={index} to={vacancyUrl}>
                            <Cell>
                                {numberEmojis[index + 1 < 10 ? index + 1 : 10]} {vacancyName}
                            </Cell>
                        </Link>
                    );
                })}
            </Accordion.Content>
        </Accordion>
    );
};

export { ResumeCard };