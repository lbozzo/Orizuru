import { StyledIcon } from '@styled-icons/styled-icon';
import { createElement, FC } from 'react';
import { Link } from 'rebass/styled-components';

interface SocialLinkProps {
    href: string;
    altText: string;
    color?: string;
    icon: StyledIcon;
    size: number;
}

const SocialLink: FC<SocialLinkProps> = ({ href, icon, size, color, altText }) => (
    <Link
        href={href}
        title={altText}
        alt={altText}
        target="_blank"
        rel="noreferrer"
        color="gray.900"
        sx={{ ':hover': { color: color || 'primary' } }}>
        {createElement(icon, { size: size, title: altText, color: 'inherit' })}
    </Link>
);

export default SocialLink;
