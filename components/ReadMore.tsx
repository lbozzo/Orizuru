import { ExpandLess } from '@styled-icons/material-rounded/ExpandLess';
import { ExpandMore } from '@styled-icons/material-rounded/ExpandMore';
import { createRef, FC, useEffect, useState } from 'react';
import { Box, Flex, Text } from 'rebass/styled-components';

export interface ReadMoreProps {
    textShow?: string;
    textHide?: string;
}

const ReadMore: FC<ReadMoreProps> = ({
    children,
    textShow = 'Show more',
    textHide = 'Show less'
}) => {
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
        <Box aria-expanded={show}>
            <Text
                ref={textRef}
                variant="body"
                color="gray.700"
                style={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: show ? 'normal' : 'nowrap'
                }}
                title={children.toString()}>
                {children}
            </Text>
            {(ellipsis || show) && (
                <Box width="fit-content">
                    <Text
                        as="button"
                        variant="body"
                        fontSize={1}
                        fontWeight="medium"
                        color="primary">
                        <Flex
                            flexDirection="row"
                            alignItems="center"
                            pt={1}
                            width="fit-content"
                            onClick={() => toggleShow(!show)}
                            style={{ cursor: 'pointer' }}>
                            {show ? textHide : textShow}
                            {show ? <ExpandLess size={22} /> : <ExpandMore size={22} />}
                        </Flex>
                    </Text>
                </Box>
            )}
        </Box>
    );
};

export default ReadMore;
