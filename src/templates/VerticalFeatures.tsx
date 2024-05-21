import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
    <Section id="verticalFeatures"
    >
      <VerticalFeatureRow
          title="JoClic знает, что вы хотите"
          description="Бот постоянно мониторит актуальные вакансии, соответствующие вашему стеку технологий и предпочтениям. Он всегда в курсе последних трендов и горячих предложений на рынке труда."
          image="/assets/images/feature.svg"
          imageAlt="First feature alt text"
      />
      <VerticalFeatureRow
          title="Автоматизация на высоте"
          description="Забудьте о рутине откликов на вакансии. JoClic автоматически отправляет лучшие отклики от вашего имени, повышая шансы на успех. Больше никакой утомительной работы – только результаты."
          image="/assets/images/feature2.svg"
          imageAlt="Second feature alt text"
          reverse
      />
      <VerticalFeatureRow
          title="Ваш личный индекс успеха"
          description="Бот собирает и анализируем данные о ваших откликах, приглашениях и отказах. Исходя из этой информации вы получаете расчет JOCindex – уникальный показатель, отражающий вашу востребованность на рынке труда."
          image="/assets/images/feature3.svg"
          imageAlt="Third feature alt text"
      />
    </Section>
);

export { VerticalFeatures };