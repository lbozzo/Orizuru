import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

const HeartBeat = (): JSX.Element => (
    <motion.div
        initial={false}
        animate={{ scale: [1, 1, 1, 1, 1, 1] }}
        whileHover={{
            scale: [1, 1.3, 1, 1.3, 1, 1],
            transition: {
                duration: 1,
                ease: 'linear',
                times: [0, 0.2, 0.4, 0.6, 0.8, 1],

                repeat: Infinity
            }
        }}
        className="inline-block cursor-pointer px-1 text-red-500">
        <FaHeart aria-label="Heart" />
    </motion.div>
);

export default HeartBeat;
