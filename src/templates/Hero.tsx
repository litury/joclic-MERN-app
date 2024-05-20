import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';


const Hero = () => (
    <Background color="bg-gray-100" className="h-screen">
        <Section yPadding="py-6">
            <NavbarTwoColumns logo={<Logo xl />}>
                <li>
                    <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
                        GitHub
                    </Link>
                </li>
                <li>
                    <Link href="/">Sign in</Link>
                </li>
            </NavbarTwoColumns>
        </Section>

        <Section yPadding="pt-32 pb-0" >
            <HeroOneButton
                title={<>{'Ваша карьера на автопилоте'}</>}
                subtitle=" для Frontend разработчиков"

                button={
                    <Link href="https://t.me/Joclic_bot">
                        <Button xl icon={true} >Запустить Joclic</Button>
                    </Link>
                }
            />
        </Section>
    </Background>
);

export { Hero };