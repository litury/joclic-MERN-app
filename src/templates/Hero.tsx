import Link from 'next/link';

import {Background} from '../background/Background';
import {Button} from '../button/Button';
import {HeroOneButton} from '../hero/HeroOneButton';
import {Section} from '../layout/Section';
import {NavbarTwoColumns} from '../navigation/NavbarTwoColumns';
import {Logo} from './Logo';
// import {ScrollDown} from './ScrollDown';
import {SupportedSites} from './SupportedSites';


const Hero = () => (
    <Background color="bg-gray-100" className="h-screen grid grid-rows-[auto, 1fr, min-content]">
        <Section className='items-start justify-start w-full pb-0' yPadding="py-6">
            <NavbarTwoColumns logo={<Logo xl/>}>
                <li>
                    <Link href="https://github.com/litury/joclic-landing">
                        Open Source
                    </Link>
                </li>
            </NavbarTwoColumns>
        </Section>

        <Section className='flex items-center justify-center' yPadding="pt-0 pb-0">
            <HeroOneButton
                title={<>{'Ваша карьера на автопилоте'}</>}
                subtitle=" для Frontend разработчиков"

                button={
                    <Link href="https://t.me/Joclic_bot">
                        <Button xl icon={true}>Запустить Joclic</Button>
                    </Link>
                }
            />
        </Section>
        <SupportedSites/>

    </Background>
);

export {Hero};