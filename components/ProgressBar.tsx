import { motion, useTransform, useViewportScroll } from 'framer-motion';

const ProgressBar = (): JSX.Element => {
    const { scrollYProgress } = useViewportScroll();
    const width = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
    return (
        <motion.div
            className="fixed top-0 left-0 z-10 h-1 bg-gradient-to-r from-green-400 to-blue-500"
            style={{ width }}
        />
    );
};

export default ProgressBar;
