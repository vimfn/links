import type { NextComponentType } from "next";
import type { NowPlayingSong } from "../../@types/now-playing-song.type";

import Image from "next/image";
import Link from "next/link";

import useSWR from "swr";
import { fetcher } from "../../lib/fetcher";

const SpotifyCard: NextComponentType = () => {
  const { data, error } = useSWR<NowPlayingSong>("/api/now-playing", fetcher);

  function truncateTitle(title) {
    if (!title) {
      return;
    }

    const words = title.split(" ");

    if (words.length <= 7) {
      return title;
    }

    return `${words[0]} ${words[1]} ${words[2]} ${words[3]} ...`;
  }

  const truncatedTitle = truncateTitle(data?.title);
  const truncatedArtist = truncateTitle(data?.artist);

  return (
    <>
      <div className="font-sen mb-8 flex max-w-full flex-row items-center gap-x-2 rounded-md text-center text-lg text-gray-300">
        <Image
          src="/assests/spotify.svg"
          width="20"
          height="20"
          alt="spotify icon"
        />
        {data?.isPlaying ? (
          <Link href={data?.songUrl} passHref>
            <p className="cursor-pointer truncate">
              Playing <span className="text-white">{truncatedTitle}</span>{" "}
              {/* <span className="">{truncatedArtist}</span> */}
            </p>
          </Link>
        ) : (
          <p>Everything so calm here.</p>
        )}
      </div>
    </>
  );
};

export default SpotifyCard;
