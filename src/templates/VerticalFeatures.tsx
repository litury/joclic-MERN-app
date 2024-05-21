import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
    <Section id="verticalFeatures"
        title="Как работает наш секретный рецепт успеха?"
        description="Забудьте о рутинном поиске работы и откликах на вакансии. Joclic возьмет все на себя, открывая для вас новые возможности карьерного роста."
    >
      <VerticalFeatureRow
          title="Мы знаем, что вы хотите"
          description="Наш бот постоянно мониторит актуальные вакансии, соответствующие вашему стеку технологий и предпочтениям. Мы всегда в курсе последних трендов и горячих предложений на рынке труда."
          image="/assets/images/feature.svg"
          imageAlt="First feature alt text"
      />
      <VerticalFeatureRow
          title="Автоматизация на высшем уровне"
          description="Забудьте о рутинном отклике на вакансии. Joclic автоматически отправляет профессиональные отклики от вашего имени, повышая шансы на успех. Больше никакой утомительной работы – только результаты."
          image="/assets/images/feature2.svg"
          imageAlt="Second feature alt text"
          reverse
      />
      <VerticalFeatureRow
          title="Ваш личный индекс успеха"
          description="Мы собираем и анализируем данные о ваших откликах, приглашениях и отказах. На основе этой информации мы рассчитываем ваш JOCindex – уникальный показатель, отражающий вашу востребованность на рынке труда."
          image="/assets/images/feature3.svg"
          imageAlt="Third feature alt text"
      />
    </Section>
);

export { VerticalFeatures };