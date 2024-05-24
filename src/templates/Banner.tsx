import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (

    <Section yPadding="pt-0 pb-10">
        <CTABanner
            title="Больше откликов"
            subtitle="Экономьте время"
            text="Автоматизируйте процесс"
            button={
                <Link href="https://creativedesignsguru.com/category/nextjs/">
                    <Button>Попробовать бесплатно</Button>
                </Link>
            }
        />
    </Section>
);

export { Banner };
