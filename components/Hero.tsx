import Tippy from '@tippyjs/react';
import Image from 'next/image';
import { FC, useEffect } from 'react';
import Typed, { TypedOptions } from 'typed.js';

import Navbar from '~components/Navbar';

const Hero: FC = () => {
    const typedOptions: TypedOptions = {
        strings: [
            'Obsessed with Quality.',
            'Obsessed with Learning.',
            'Coffee Addict.',
            'Traveller.'
        ],
        loop: true,
        startDelay: 900,
        backDelay: 2900,
        typeSpeed: 65,
        backSpeed: 65,
        smartBackspace: true
    };

    useEffect(() => {
        const typed = new Typed('#typedSpan', typedOptions);
        return () => typed.destroy();
    });
    return (
        <div className="flex flex-col h-auto md:h-screen px-8 md:px-28 bg-gray-100 dark:bg-gray-900">
            <Navbar />
            <div className="flex md:flex-1 flex-col md:flex-row md:items-end justify-end md:justify-between md:space-x-10 w-full max-w-3xl pt-20 md:pt-20 text-sm md:text-base font-medium font-sans text-gray-600 dark:text-gray-300">
                <Tippy
                    render={() => (
                        <div className="px-4 py-3 rounded-md shadow-md bg-gray-700 dark:bg-gray-600 max-w-sm">
                            <div className="font-sans font-medium text-lg leading-loose text-white">
                                Hey stranger! How are you?
                                <span className="px-1" role="img" aria-label="Hello">
                                    👋
                                </span>
                                <div data-popper-arrow="" className="ml-12 mt-4 text-gray-400">
                                    <svg height="18" width="18">
                                        <line
                                            x1="0"
                                            y1="18"
                                            x2="18"
                                            y2="0"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    )}
                    placement="top-start"
                    visible
                    arrow={true}
                    popperOptions={{
                        modifiers: [
                            {
                                name: 'flip',
                                options: {
                                    fallbackPlacements: []
                                }
                            },
                            {
                                name: 'preventOverflow',
                                options: {
                                    mainAxis: false
                                }
                            }
                        ]
                    }}>
                    <div className="relative w-20 h-20 rounded-full overflow-hidden shadow-lg">
                        <Image
                            src="/images/profile.jpg"
                            layout="fill"
                            objectFit="cover"
                            loading="eager"
                            alt="Lucas Bozzo"
                        />
                    </div>
                </Tippy>
                <div className="py-6">
                    <p>My name is Lucas Bozzo.</p>
                </div>
                <div className="py-6">
                    You can check out
                    <br /> my{' '}
                    <a href="/#timeline" className="underline">
                        work experience
                    </a>{' '}
                    or{' '}
                    <a href="/#contact" className="underline">
                        contact me
                    </a>
                    .
                </div>
            </div>
            <div className="py-12 md:py-32">
                <h1 className="text-3xl md:text-7xl font-bold font-sans text-gray-900 leading-tight capitalize">
                    <span
                        className="inline-block bg-gradient-to-r from-green-400 to-blue-500"
                        style={{
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent'
                        }}>
                        Software Developer
                    </span>
                    <br />
                    <div className="h-14 text-gray-800 dark:text-gray-100">
                        <span id="typedSpan" />
                    </div>
                </h1>
            </div>
        </div>
    );
};

export default Hero;
