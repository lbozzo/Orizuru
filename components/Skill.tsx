import { StyledIcon } from '@styled-icons/styled-icon';
import { FC } from 'react';

import Box from './Box';
import Flex from './Flex';
import Icon from './Icon';
import Text from './Text';

export interface SkillProps {
    icon: StyledIcon;
    name: string;
}

const Skill: FC<SkillProps> = ({ icon, name }) => (
    <Flex pt={4} mx={4} flexDirection={{ _: 'column', md: 'row' }} alignItems="center">
        <Box color="gray.900">
            <Icon icon={icon} size={40} />
        </Box>
        <Box mx={2}>
            <Text textAlign={{ _: 'center', md: 'left' }} fontSize={2}>
                {name}
            </Text>
        </Box>
    </Flex>
);

export default Skill;
