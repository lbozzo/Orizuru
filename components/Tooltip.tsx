import Tippy, { TippyProps } from '@tippyjs/react/headless';
import { motion, useSpring } from 'framer-motion';
import { FC } from 'react';

export interface TooltipProps extends TippyProps {
    content: string;
}

const Tooltip: FC<TooltipProps> = ({ children, content, ...props }) => {
    const opacity = useSpring(0, { duration: 150 });
    const initialScale = 0.65;
    const scale = useSpring(initialScale, { duration: 150 });

    function onMount() {
        opacity.set(1);
        scale.set(1);
    }
    function onHide({ unmount }) {
        const cleanup = scale.onChange((value) => {
            if (value <= initialScale) {
                cleanup();
                unmount();
            }
        });
        opacity.set(0);
        scale.set(initialScale);
    }

    return (
        <Tippy
            render={() => (
                <motion.div style={{ scale, opacity }}>
                    <div className="px-4 py-3 rounded-md shadow-md bg-gray-700 max-w-sm">
                        <div className="font-sans font-medium text-sm leading-loose text-white">
                            {content}
                        </div>
                    </div>
                </motion.div>
            )}
            delay={[175, 0]}
            animation={true}
            onMount={onMount}
            onHide={onHide}
            {...props}>
            {children}
        </Tippy>
    );
};

export default Tooltip;
