
import { Placeholder, Title, Text, Button } from '@telegram-apps/telegram-ui';
import { FC, useState } from 'react';
import {Link} from "@/components/Link/Link.tsx";
import {HomeOutlined} from "@ant-design/icons";

const SecurityPage: FC = () => {

    const authlink = `https://hh.ru/oauth/authorize?response_type=code&client_id=VMCTV29C1QNJQVPSNEG4BRKKQDCH96GFBPT2S40IHFKCGP3MRNK7JB8AC4VOINKD&state=${telegram_id}`
    const [isLoading, setIsLoading] = useState(false);

    return (
        <Placeholder
            action={
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

                    {/*{authStatus && <div>{`Статус авторизации: ${authStatus}`}</div>}*/}
                </Link>
            }
            header={<Title level='2'>Security Information</Title>}
            description={
                <>
                    <Text style={{textAlign: 'center', color: '#000'}}>
                        Рекомендую создать новый аккаунт с аналогичными резюме специально для приложения и обезопасить себя
                        еще больше.
                    </Text>
                </>
            }
        >
        </Placeholder>
    );
};

export {SecurityPage}














// import { useLaunchParams } from '@tma.js/sdk-react';
// import { List } from '@telegram-apps/telegram-ui';
// import type { FC } from 'react';
//
// import { DisplayData } from '@/components/DisplayData/DisplayData.tsx';
//
// export const SecurityScreen: FC = () => {
//   const lp = useLaunchParams();
//
//   return (
//     <List>
//       <DisplayData
//         rows={[
//           { title: 'tgWebAppPlatform', value: lp.platform },
//           { title: 'tgWebAppShowSettings', value: lp.showSettings },
//           { title: 'tgWebAppVersion', value: lp.version },
//           { title: 'tgWebAppBotInline', value: lp.botInline },
//           { title: 'tgWebAppStartParam', value: lp.showSettings },
//           { title: 'tgWebAppData', type: 'link', value: '/init-data' },
//           { title: 'tgWebAppThemeParams', type: 'link', value: '/theme-params' },
//         ]}
//       />
//     </List>
//   );
// };
