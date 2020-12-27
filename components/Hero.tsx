import Tippy from '@tippyjs/react';
import Image from 'next/image';
import { FC } from 'react';

import Navbar from '~components/Navbar';

const HeroSimple: FC = () => (
    <div className="flex flex-col h-screen px-8 md:px-28 bg-gray-100">
        <Navbar />
        <div className="flex flex-1 flex-col md:flex-row md:items-end justify-end md:justify-between md:space-x-10 w-full max-w-3xl text-sm md:text-base font-medium font-sans text-gray-600">
            <Tippy
                render={() => (
                    <div className="px-4 py-3 rounded-md shadow-md bg-gray-700 max-w-sm">
                        <div className="font-sans font-medium text-lg leading-loose text-white">
                            Hey stranger! How are you?
                            <span role="img" aria-label="Hello">
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
                        src="/assets/images/profile.jpg"
                        layout="fill"
                        objectFit="cover"
                        loading="eager"
                        alt="Lucas Bozzo"
                    />
                </div>
            </Tippy>
            <div className="py-6">
                <p>I&apos;m Lucas Bozzo, a Panamanian</p>
                <p>Living in London</p>
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
                Obsessed with Quality.
            </h1>
        </div>
    </div>
);

export default HeroSimple;
