import {ScrollDownIcon} from '../templates/ScrollDownIcon';
import {motion} from 'framer-motion';
import {Link} from 'react-scroll';

const ScrollDown = () => {

    const bounceAnimation = {
        infinite: {
            y: [0, "-16px", 0],
            transition: {
                y: {
                    repeat: Infinity,
                    duration: 1.6,
                    ease: "easeInOut"
                },
            }
        }
    };

    return (
        <Link to="verticalFeatures" smooth={true} duration={500}>
            <motion.div
                className="flex justify-center flex-col items-center text-4xl text-gray-700 cursor-pointer pb-4"
                animate='infinite'
                variants={bounceAnimation}
            >
                <span className='text-lg'>Как это работает?</span>
                <ScrollDownIcon/>
            </motion.div>
        </Link>
    );
};

export {ScrollDown};
