import {Cell, Info, Title} from "@telegram-apps/telegram-ui";
import {HomeOutlined} from "@ant-design/icons";
import {useBackButton} from "@tma.js/sdk-react";
import {useEffect} from "react";

const SellPage = () => {
    const backButton = useBackButton();

    useEffect(() => {
        backButton.hide();

        return () => {
            backButton.show();
        }
    }, [])

    return (
        <>
            <Title style={{textAlign: 'center'}}>Тарифы откликов:</Title>
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
                after={<Info subtitle="за 1 товарища" type="text">+ 25 откликов</Info>}
                before={<HomeOutlined style={{fontSize: '20px'}}/>}
                subtitle="Cрочный"
            >
                Тариф
            </Cell>
        </>
    )
}

export {SellPage}