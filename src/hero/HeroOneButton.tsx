import type { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  subtitle: string;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <h1 className="whitespace-pre-line text-5xl font-bold leading-hero text-gray-900">
      {props.title}
    </h1>
    <div className="my-4 text-2xl  font-bold text-primary-500">
      <span>{props.subtitle}</span>
    </div>
    <div className="mb-5">
      <span className="mb-16 mt-4 text-2xl">{props.description}</span>
    </div>

    {props.button}
  </header>
);

export { HeroOneButton };
