import Image from 'next/image';
import useSWR from 'swr';
import { BrandSpotify } from 'tabler-icons-react';

const PlayingNow = (): JSX.Element => {
    const { data } = useSWR('/api/now-playing');

    return (
        <div className="flex flex-row items-center space-x-4 w-72 border-2 rounded-md border-gray-600 p-2">
            <div className="relative w-14 h-14 rounded-md overflow-hidden bg-indigo-300">
                {data?.albumImageUrl && (
                    <Image src={data.albumImageUrl} layout="fill" objectFit="cover" />
                )}
            </div>
            <div className="flex-1 overflow-hidden overflow-ellipsis whitespace-nowrap">
                <a
                    href={data?.songUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-base text-gray-700">
                    {data?.title ?? 'Nothing Playing'}
                </a>
                <br />
                <span className="font-normal text-sm text-gray-600">
                    {data?.artist ?? 'Spotify'}
                </span>
            </div>
            <BrandSpotify size={22} />
        </div>
    );
};

export default PlayingNow;
