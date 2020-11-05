import { ExpandLess } from '@styled-icons/material-rounded/ExpandLess';
import { ExpandMore } from '@styled-icons/material-rounded/ExpandMore';
import css from '@styled-system/css';
import { createRef, FC, useEffect, useState } from 'react';
import styled from 'styled-components';

import Box from './Box';
import Flex from './Flex';
import Link from './Link';
import Text from './Text';

const ReadMoreText = styled(Text)<{ show: boolean }>(({ show = false }) =>
    css({
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: show ? 'normal' : 'nowrap'
    })
);

const ReadMore: FC = ({ children }) => {
    const [show, toggleShow] = useState(false);
    const [ellipsis, setEllipsis] = useState(false);
    const textRef = createRef<HTMLParagraphElement>();

    useEffect(() => {
        const { current } = textRef;
        if (current) {
            setEllipsis(
                current.offsetHeight < current.scrollHeight ||
                    current.offsetWidth < current.scrollWidth
            );
        }
    }, []);
    return (
        <Box>
            <ReadMoreText ref={textRef} show={show}>
                {children}
            </ReadMoreText>
            {(ellipsis || show) && (
                <Box width="fit-content">
                    <Link as="div">
                        <Flex
                            flexDirection="row"
                            alignItems="center"
                            pt={1}
                            width="fit-content"
                            onClick={() => toggleShow(!show)}
                            style={{ cursor: 'pointer' }}>
                            <Text fontSize={1} fontWeight="medium" color="primary">
                                {show ? 'Show less' : 'Show more'}
                            </Text>
                            {show ? <ExpandLess size={22} /> : <ExpandMore size={22} />}
                        </Flex>
                    </Link>
                </Box>
            )}
        </Box>
    );
};

export default ReadMore;
