import Link from 'next/link';

import PlayingNow from './PlayingNow';
import SocialLinkStrip from './SocialLinkStrip';

const Footer = (): JSX.Element => (
    <footer className="py-6 px-8 bg-gray-200">
        <div className="max-w-screen-lg mx-auto font-sans">
            <div className="flex flex-col-reverse md:flex-row items-start font-sans font-medium text-sm text-gray-800">
                <div className="flex-1 flex flex-col items-start space-y-3">
                    <Link href="/" passHref>
                        <a>Home</a>
                    </Link>
                </div>
                <div className="py-2">
                    <PlayingNow />
                </div>
            </div>
            <div className="pt-6">
                <div className="flex py-4 justify-center">
                    <SocialLinkStrip size="small" />
                </div>
                <p className="text-center text-xs text-gray-600">
                    Copyright &reg; {new Date().getFullYear()}. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
);

export default Footer;
