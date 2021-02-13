import { motion } from 'framer-motion';
import { Planet as Year0 } from 'tabler-icons-react';

import Tooltip from '~components/Tooltip';

const events = [
    {
        year: <Year0 size={21} />,
        title: <>The Beginning Of Time</>
    },
    {
        year: 1993,
        title: (
            <>
                Born in Colombia{' '}
                <span role="img" aria-label="Baby Lucas">
                    👶🏻
                </span>
                <span role="img" aria-label="Colombian Flag">
                    🇨🇴
                </span>
            </>
        )
    },
    {
        year: 2000,
        title: (
            <>
                Became an Orgami teacher
                <span role="img" aria-label="Origami teacher">
                    🍎
                </span>
            </>
        )
    },
    { year: 2011, title: 'Graduated school' },
    {
        year: 2013,
        title: (
            <>
                Landed my first full-time job as software developer and consultant
                <span role="img" aria-label="First job">
                    👔
                </span>
            </>
        )
    },
    {
        year: 2015,
        title: (
            <>
                Got a Ba. in Telematic Systems Engineering{' '}
                <span role="img" aria-label="Graduation">
                    🎓
                </span>
            </>
        )
    },
    {
        year: 2020,
        title: (
            <div>
                Survived the COVID-19 pandemic and got married to the most wonderful woman on the
                planet
                <span role="img" aria-label="Married">
                    💘
                </span>
            </div>
        )
    },
    {
        year: 2021,
        title: (
            <>
                Moved to UK{' '}
                <span role="img" aria-label="UK">
                    💂
                </span>
            </>
        )
    },
    {
        year: `${new Date().getFullYear() + 1}+`,
        title: 'To make a difference in the world.',
        visible: true,
        zIndex: 0
    }
];

const Event = ({ year, title, ...props }) => (
    <div className="flex flex-row w-full items-center">
        <div className="flex-1 h-1 bg-gray-100" />
        <Tooltip
            content={title}
            offset={[0, 12]}
            delay={[0, 0]}
            zIndex={1}
            appendTo={() => document.body}
            placement="top"
            popperOptions={{
                strategy: 'fixed',
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
                            mainAxis: false,
                            tether: false,
                            tetherOffset: ({ popper }) => popper.width / 2
                        }
                    }
                ]
            }}
            {...props}>
            <div className="relative">
                <div className="w-5 h-5 rounded-full border-4 cursor-pointer border-gray-100 bg-gray-600 hover:bg-indigo-400 transition-all duration-150" />
                <span className="absolute left-1/2 transform -translate-x-1/2 pt-1 font-sans text-sm font-medium text-gray-700">
                    {year}
                </span>
            </div>
        </Tooltip>
    </div>
);

const Timeline = (): JSX.Element => {
    return (
        <div className="w-auto py-4 overflow-x-scroll overflow-y-hidden no-scrollbar">
            <motion.div className="flex flex-row items-center justify-center py-2 md:py-16 pr-32 md:pr-8 lg:pr-24 min-w-min md:w-full lg:w-10/12">
                <div className="w-32 h-1 my-2 bg-gray-100" />
                {events.flatMap((props, i) => (
                    <div key={i} style={{ flex: i + 1 }} className={`w-24 md:w-auto my-4`}>
                        <Event {...props} />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Timeline;
