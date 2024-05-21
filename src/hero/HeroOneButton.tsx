import { ReactNode, useEffect, useState } from 'react';
import CountUp from 'react-countup';
import useTypewriter from 'react-typewriter-hook';


const MagicOcean = [
    "Frontend Dev ",
    "Backend Dev",
    "Full Stack Dev",
    "Python Dev",
    "JavaScript Dev",
    "TypeScript Dev",
    "React Dev",
    "Angular Dev",
    "Vue Dev"
];

let index = 0;

type IHeroOneButtonProps = {
    title: ReactNode;
    subtitle: string;
    button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => {
    const [responses, setResponses] = useState(2323);
    const [previousResponses, setPreviousResponses] = useState(2323);

    const [magicName, setMagicName] = useState(MagicOcean[index]);
    const magicNameTyping = magicName ? useTypewriter(magicName) : '';

    const [isCursorVisible, setIsCursorVisible] = useState(false);
    const [isTypingFinished, setIsTypingFinished] = useState(false);


    useEffect(() => {
        const timer = setInterval(() => {
            index = index > 7 ? 0 : ++index;
            setIsTypingFinished(false);
            setMagicName(MagicOcean[index]);
        }, 5000); // меняем текст каждые 5 секунд
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (isTypingFinished) {
            const timer = setInterval(() => {
                setIsCursorVisible(v => !v);
            }, 500); // переключаем видимость курсора каждые 0.5 секунды
            return () => clearInterval(timer);
        }
        return; // Добавлено
    }, [isTypingFinished]);


    useEffect(() => {
        if (magicName === magicNameTyping) {
            setIsTypingFinished(true);
        }
    }, [magicName, magicNameTyping]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setPreviousResponses(responses);
            setResponses(responses + 1);
        }, 2000);

        return () => clearTimeout(timer);
    }, [responses]);


    return (
        <header className="text-center">
            <h1 className="whitespace-pre-line text-5xl font-bold leading-hero text-gray-900">
                {props.title}
            </h1>
            <div className="my-4 text-2xl  font-bold text-primary-500">
                <span>для </span>
                <span>{magicNameTyping}</span>
                <span style={{
                    visibility: isTypingFinished && isCursorVisible ? 'visible' : 'hidden',
                    fontFamily: 'monospace',
                    color: '#455A64',
                }}>
  {' |'}
</span>
            </div>
            <div className="mb-5">
                <span className="mb-16 mt-4 ">{`Уже отправлено `}</span>
                <span className="relative inline-block">
                    <CountUp start={previousResponses} end={responses} duration={1.5}/>
                    <span>{` откликов`}</span>
                    {/*<span*/}
                    {/*    style={{ top: '5px', right: '-5px' }}*/}
                    {/*    className="animate-pulse bg-green-500 rounded-full h-2 w-2 absolute transform translate-x-1/2 -translate-y-1/2">*/}
                    {/*</span>*/}
                </span>
            </div>

            {props.button}
        </header>
    );
};

export {HeroOneButton};
