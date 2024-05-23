import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
    <Section id="verticalFeatures" yPadding="pt-6 pb-6">
      <VerticalFeatureRow
          title="Умный поиск вакансий"
          description="JoClic непрерывно мониторит актуальные вакансии, соответствующие вашему стеку технологий и предпочтениям. Бот всегда в курсе последних трендов и горячих предложений на рынке труда."
          image="/assets/images/feature.svg"
          imageAlt="First feature alt text"
      />
      <VerticalFeatureRow
          title="Автоотправка откликов"
          description="JoClic автоматически отправляет лучшие отклики от вашего имени, повышая шансы на успех. Больше никакой рутины – только результаты."
          image="/assets/images/feature2.svg"
          imageAlt="Second feature alt text"
          reverse
      />
      <VerticalFeatureRow
          title="Личный индекс успеха"
          description="JoClic отслеживает статистику откликов, приглашений и отказов, а затем рассчитывает JOCindex – уникальный показатель вашей востребованности на рынке труда."
          image="/assets/images/feature3.svg"
          imageAlt="Third feature alt text"
      />
    </Section>
);

export { VerticalFeatures };