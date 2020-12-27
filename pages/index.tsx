import {
    SiAmazonaws as Amazonaws,
    SiApollographql as Apollographql,
    SiNextDotJs as NextDotJs,
    SiNodeDotJs as NodeDotJs,
    SiReact as ReactLogo,
    SiStyledComponents as StyledComponents,
    SiTailwindcss as Tailwindcss,
    SiTypescript as Typescript
} from 'react-icons/si';

import Footer from '~components/Footer';
import HeartBeat from '~components/HeartBeat';
import Hero from '~components/Hero';
import Prose from '~components/Prose';
import SocialLinkStrip from '~components/SocialLinkStrip';
import Timeline from '~components/Timeline';

export default function Home(): JSX.Element {
    return (
        <main className="bg-white dark:bg-gray-800">
            <Hero />
            <section id="skills" className="pt-32">
                <Prose>
                    <h2 className="font-sans font-bold text-3xl leading-normal">
                        My skills allow me to work on anything.
                    </h2>
                    <div className="pt-16 font-serif font-normal text-lg text-gray-700 leading-loose">
                        <p className="text-lg font-serif font-normal leading-loose text-gray-700">
                            I have specialized in open source technologies capable of operating
                            cross-platforms. It also allows me to develop on the web, mobile and
                            backend.
                            <span role="img" aria-label="Strong arm">
                                💪
                            </span>
                        </p>
                    </div>
                </Prose>
                <div className="flex flex-wrap items-end justify-center space-x-8 space-y-5 px-8 py-6 text-4xl text-gray-300">
                    <NextDotJs aria-label="Next.js" />
                    <Tailwindcss aria-label="TailwindCSS" />
                    <ReactLogo aria-label="React" />
                    <Typescript aria-label="Typescript" />
                    <NodeDotJs aria-label="Node.js" />
                    <Apollographql aria-label="ApolloGraphql" />
                    <StyledComponents aria-label="Styled-components" />
                    <Amazonaws aria-label="AWS" />
                </div>
                <div className="flex flex-row justify-center font-sans text-sm text-center leading-none text-gray-700">
                    I <HeartBeat /> Open Source
                </div>
            </section>
            <section id="timeline" className="pt-32">
                <Prose>
                    <h2 className="font-sans font-bold text-3xl leading-normal">
                        My story is simple, but my dreams are big.
                    </h2>
                    <div className="pt-16 font-serif font-normal text-lg text-gray-700 leading-loose">
                        My story is short as I&apos;m only {new Date().getFullYear() - 1993} years
                        old. However, I want to share with you some of the highlights in my life. If
                        you want a more detailed professional career, you can{' '}
                        <a
                            className="underline"
                            href={process.env.NEXT_PUBLIC_CV_URL}
                            target="_blank"
                            rel="noopener noreferrer">
                            download my CV
                        </a>
                        .
                    </div>
                </Prose>
                <div className="mt-10 md:mt-16 overflow-x-hidden">
                    <Timeline />
                </div>
            </section>
            <section id="contact" className="pt-32">
                <Prose>
                    <h2 className="font-sans font-bold text-3xl leading-normal">
                        Want to talk about your project or just say hello?
                    </h2>
                    <div className="pt-16 font-serif font-normal text-lg text-gray-700 leading-loose">
                        <div>
                            <p>
                                Don&apos;t hesitate to send me a message at{' '}
                                <a
                                    href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}?subject=Hi Lucas! Let's get in touch`}
                                    className="underline">
                                    {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
                                </a>{' '}
                                or contact me on my social media.
                            </p>
                        </div>
                        <div className="flex justify-center py-8">
                            <SocialLinkStrip />
                        </div>
                    </div>
                </Prose>
            </section>

            <Footer />
        </main>
    );
}
