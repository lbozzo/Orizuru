import { ExpandLess } from '@styled-icons/material-rounded/ExpandLess';
import { ExpandMore } from '@styled-icons/material-rounded/ExpandMore';
import { createRef, FC, useEffect, useState } from 'react';

import Box from './Box';
import Flex from './Flex';
import Text from './Text';

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
            <Text
                ref={textRef}
                style={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: show ? 'normal' : 'nowrap'
                }}>
                {children}
            </Text>
            {(ellipsis || show) && (
                <Flex
                    flexDirection="row"
                    alignItems="center"
                    pt={1}
                    width="fit-content"
                    onClick={() => toggleShow(!show)}
                    style={{ cursor: 'pointer' }}>
                    <Text fontWeight="medium">{show ? 'Show less' : 'Show more'}</Text>
                    {show ? <ExpandLess size={22} /> : <ExpandMore size={22} />}
                </Flex>
            )}
        </Box>
    );
};

export default ReadMore;
