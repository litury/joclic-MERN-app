import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (

  <Section>
    <CTABanner
      title="Пока вы думаете, другие ищут работу без отсановки"
      subtitle="Совершенно бесплатно"
      button={
        <Link href="https://creativedesignsguru.com/category/nextjs/">
          <Button>Отправить отклики</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
