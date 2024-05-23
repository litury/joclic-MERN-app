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
        'flex',
        'flex-wrap',
        'items-center',
        'vertical-feature',

        {
            'flex-row-reverse': props.reverse,
        },
    );

    return (
        <div className={verticalFeatureClass}>
            <div className="w-full text-center  sm:w-1/2 sm:px-2 pb-4">
                <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900 pb-4">{props.title}</h3>
                <div className="text-base lg:text-lg leading-6">{props.description}</div>
            </div>


            <div className="w-full p-2 sm:w-1/2">
            <img src={`${router.basePath}${props.image}`} alt={props.imageAlt} />
            </div>
        </div>
    );
};

export { VerticalFeatureRow };



