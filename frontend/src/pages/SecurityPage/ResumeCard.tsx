import { Accordion, Text, Blockquote } from '@telegram-apps/telegram-ui';
import { useState } from 'react';

const ResumeCard = ({ resume }) => {
    const [expanded, setExpanded] = useState(false);

    const handleAccordionChange = () => {
        setExpanded(!expanded);
    };

    return (
        <Accordion expanded={expanded} onChange={handleAccordionChange}>
            <Accordion.Summary
                title={`${resume.last_name} ${resume.first_name}`}
                subtitle={`Опыт работы: ${resume.total_experience.months} месяцев`}
                description={`Обновлено: ${resume.updated_at}`}
            >

                <Text>{resume.title}</Text>
            </Accordion.Summary>
            <Accordion.Content>
                <div
                    style={{
                        padding: '10px 20px 20px'
                    }}
                >
                    <Blockquote>
                        The accordion's basic form is believed to have been invented in Berlin, in 1822, by Christian
                        Friedrich Ludwig Buschmann, although one instrument was discovered in 2006 that appears to have
                        been built earlier. The earliest history of the accordion in Russia is poorly documented.
                    </Blockquote>
                </div>
            </Accordion.Content>
        </Accordion>
    );
}

export {ResumeCard}