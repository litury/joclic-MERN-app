import className from 'classnames';
import { useRouter } from 'next/router';

type IVerticalFeatureRowProps = {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    reverse?: boolean;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
    const router = useRouter();
    const verticalFeatureClass = className(
        'mb-12 sm:flex',
        'flex',
        'flex-wrap',
        'items-center',
        {
            'flex-row-reverse': props.reverse,
        },
    );

    return (
        <div className={verticalFeatureClass}>
            <div className="w-full text-center sm:w-1/2 sm:px-6">
                <h3 className="text-3xl font-semibold text-gray-900 sm:text-3xl">{props.title}</h3>
                <div className="mt-6 text-xl leading-9 sm:text-xl sm:mt-6">{props.description}</div>
            </div>

            <div className="w-full p-6 sm:w-1/2 sm:pb-12">
                <img src={`${router.basePath}${props.image}`} alt={props.imageAlt} />
            </div>
        </div>
    );
};

export { VerticalFeatureRow };


