import { StyledIcon } from '@styled-icons/styled-icon';
import { createElement, FC } from 'react';
import { Box, Flex } from 'rebass/styled-components';

export interface SkillProps {
    icon: StyledIcon;
    name: string;
}

const Skill: FC<SkillProps> = ({ icon, name }) => (
    <Flex
        flexDirection={['column', 'row']}
        alignItems="flex-start"
        sx={{
            textAlign: 'left'
        }}>
        <Box
            color="gray.500"
            py={2}
            sx={{
                transition: 'all 250ms ease-in-out',
                ':hover': {
                    color: 'primary'
                }
            }}>
            {createElement(icon, { size: 36, title: name })}
        </Box>
    </Flex>
);

export default Skill;
