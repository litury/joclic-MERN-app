import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (

  <Section yPadding="pt-0 pb-0">
    <CTABanner
      title="Забудьте о рутинне поиска"
      subtitle="Joclic сделает это за вас!"
      text="Совершенно бесплатно"
      button={
        <Link href="https://creativedesignsguru.com/category/nextjs/">
          <Button>Отправить отклики</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
