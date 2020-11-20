import { Heart } from '@styled-icons/zondicons/Heart';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const HeartBeat = motion.custom(styled(Heart)({ display: 'inline-block' }));

HeartBeat.defaultProps = {
    initial: false,
    animate: {
        scale: [1, 1, 1, 1, 1, 1]
    },
    whileHover: {
        scale: [1, 1.6, 1, 1.6, 1, 1],
        transition: {
            duration: 1,
            ease: 'linear',
            times: [0, 0.2, 0.4, 0.6, 0.8, 1],

            repeat: Infinity
        }
    }
};

export default HeartBeat;
