import {Cell, Info, Text} from "@telegram-apps/telegram-ui";
import {HomeOutlined} from "@ant-design/icons";
import {useBackButton} from "@tma.js/sdk-react";
import React, {useEffect} from "react";

const SellPage = () => {
    const backButton = useBackButton();

    const placeholderStyle: React.CSSProperties = {
        backgroundColor: `var(--tg-theme-bg-color)`,
        marginBottom: '8px',
        textAlign: 'center' as const, // Указываем 'center' как константу
    };


    useEffect(() => {
        backButton.hide();

        return () => {
            backButton.show();
        }
    }, [])

    return (
        <>
            <Cell
                subhead={
                    <Text weight="2">
                        Тарифы откликов
                    </Text>
                }
                style={placeholderStyle}
                subtitle="Тут вы можете обменять отклики"
            />

            <Cell
                after={<Info subtitle="за 2 JOC" type="text">+ 1 отклик</Info>}
                before={<HomeOutlined style={{fontSize: '20px'}}/>}
                subtitle="Стандартный"
            >
                Тариф
            </Cell>

            <Cell
                after={<Info subtitle="за 1 товарища" type="text">+ 25 откликов</Info>}
                before={<HomeOutlined style={{fontSize: '20px'}}/>}
                subtitle="Братский"
            >
                Тариф
            </Cell>

            <Cell
                after={<Info subtitle="за 2 рубля" type="text">+ 1 отклик</Info>}
                before={<HomeOutlined style={{fontSize: '20px'}}/>}
                subtitle="Cрочный"
            >
                Тариф
            </Cell>
        </>
    )
}

export {SellPage}