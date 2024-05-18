import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
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

    <Section yPadding="pt-8 pb-32">
      <HeroOneButton
        title={<>{'Поиск работы на автопилоте \n'}</>}
        subtitle="для WEB-разработчиков"
        description="Забудьте о рутине откликов доверьте это Joclic"
        button={
          <Link href="https://t.me/Joclic_bot">
            <Button xl>Открыть Telegram Bot</Button>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
