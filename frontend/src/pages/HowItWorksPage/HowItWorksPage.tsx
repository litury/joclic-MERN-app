// File: HowItWorksPage.tsx

import {
    Placeholder,
    List,
    Text, LargeTitle
} from '@telegram-apps/telegram-ui';

import AuthButton from '../../components/AuthButton/AuthButton'

const HowItWorksPage = () => {

    return (
        <Placeholder
            header={<LargeTitle style={{textAlign: 'center'}}>Как это работает?</LargeTitle>}
            description={
                <List
                    style={{
                        display: 'flex',
                        justifyContent: "left",
                        flexDirection: 'column',
                        alignItems: 'left',
                        gap: '10px',
                        margin: '0 auto',
                        maxWidth: '100%',
                        textAlign: 'left'
                    }}
                >

                    <Text weight="3">🎁 После входа получаете 50 откликов для старта работы.</Text>
                    <Text weight="3">📈 Оцените эффективность резюме с помощью JOC Index.</Text>
                    <Text weight="3">✏️ В кабинете запускайте скрипт, задавайте число и типы откликов.</Text>
                    <Text weight="3">⏰ Автоматическая рассылка стартует ежедневно в 12:00 МСК.</Text>
                    <Text weight="3">💰 За каждый отправленный отклик вы получаете мем-токен $JOC для внутренних
                        покупок</Text>
                    <AuthButton/>
                </List>
            }>
        </Placeholder>
    );
};

export {HowItWorksPage}