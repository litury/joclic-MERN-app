import { useRouter } from 'next/router';

import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '24' : '12';
  const fontStyle = props.xl
    ? 'font-semibold text-xl'
    : 'font-semibold text-lg';

  const router = useRouter();

  return (
    <span className={`inline-flex items-center text-gray-900 ${fontStyle}`}>
      <img
        src={`${router.basePath}/assets/images/Logo.png`}
        alt="Logo"
        width={size}
        height={size}
        className="mr-1"
      />

      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
