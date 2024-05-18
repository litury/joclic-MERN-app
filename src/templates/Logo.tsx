import { AppConfig } from '../utils/AppConfig';
import {useRouter} from "next/router";


type ILogoProps = {
    xl?: boolean;
};

const Logo = (props: ILogoProps) => {
    const size = props.xl ? '34' : '22';
    const fontStyle = props.xl
        ? 'font-semibold text-3xl'
        : 'font-semibold text-xl';

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
