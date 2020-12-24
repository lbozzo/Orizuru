import { BrandGithub, BrandInstagram, BrandLinkedin, BrandTwitter } from 'tabler-icons-react';

const SocialLinkStrip = ({ size = 'normal' }: { size?: 'small' | 'normal' }): JSX.Element => {
    const iconSize = size === 'small' ? 18 : 24;
    return (
        <div className="flex flex-row space-x-8 text-gray-700 dark:text-gray-50">
            <div className="hover:text-blue-600">
                <a
                    href="https://www.linkedin.com/in/lucas-bozzo/"
                    title="Follow me on LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer">
                    <BrandLinkedin size={iconSize} />
                </a>
            </div>
            <div className="hover:text-gray-500">
                <a
                    href="https://github.com/lbozzo"
                    title="Follow me on Github"
                    target="_blank"
                    rel="noopener noreferrer">
                    <BrandGithub size={iconSize} />
                </a>
            </div>
            <div className="hover:text-red-500">
                <a
                    href="https://www.instagram.com/lucasbozzo"
                    title="Follow me on Instagram"
                    target="_blank"
                    rel="noopener noreferrer">
                    <BrandInstagram size={iconSize} />
                </a>
            </div>
            <div className="hover:text-blue-400">
                <a
                    href="https://twitter.com/ljbozzo"
                    title="Follow me on Twitter"
                    target="_blank"
                    rel="noopener noreferrer">
                    <BrandTwitter size={iconSize} />
                </a>
            </div>
        </div>
    );
};

export default SocialLinkStrip;
