import { useRouter } from 'next/router';

import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '30' : '18';

  const router = useRouter();

  return (
    <span className={`inline-flex items-center text-gray-900 text-lg`}>
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
