import className from 'classnames';
import TelegramIcon from '../templates/TelegramIcon';

type IButtonProps = {
  xl?: boolean;
  children: string;
  icon?: boolean;
};

const Button = (props: IButtonProps) => {
  const btnClass = className({
    btn: true,
    'btn-xl': props.xl,
    'btn-base': !props.xl,
    'btn-primary': true,
  });

  return (
    <div className={btnClass}>
      {props.icon && <TelegramIcon  />}
      {props.children}

      <style jsx>
        {`
          .btn {
            @apply inline-flex items-center justify-start gap-2 rounded-md text-center;
          }

          .btn-base {
            @apply text-lg font-semibold py-2 px-4;
          }

          .btn-xl {
            @apply font-extrabold text-xl py-4 px-6;
          }

          .btn-primary {
            @apply text-white bg-primary-500;
          }

          .btn-primary:hover {
            @apply bg-primary-600;
          }
        `}
      </style>
    </div>
  );
};

export { Button };
