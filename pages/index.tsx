import { NowPlaying } from "../components";
import Image from "next/image";

const name = "Arunava Ghosh";
const twitter = "https://twitter.com/ag_arunava";
const instagram = "https://instagram.com/ag_arunava"
const github = "https://github.com/its-ag";
const lichess = "https://arunava.tech/lichess";
const spotify = "https://arunava.tech/spotify";
const lastfm = "https://www.last.fm/user/arunava_";
const mail = "mailto:itsag0024@gmail.com";
const discord = "https://discord.com/user/968448572641124352";
const discordTag = "Arunava#1288";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col">
        <div className="bg-primary flex min-h-screen flex-col">
          <div
            style={{ backgroundSize: "cover", backgroundPosition: "center" }}
            className="bg-banner h-60 w-full"
          />
          <div className="mx-auto -mt-20 flex w-full max-w-2xl flex-1 flex-col items-center px-0 sm:px-10">
            <div className="relative mb-6 flex w-full flex-col justify-center bg-opacity-90 px-2 sm:min-h-full sm:rounded-lg sm:px-6">
              <div className="flex flex-col items-center justify-center rounded-md p-2 py-4">
                <div className="relative">
                  <Image
                    className=" bg-primary border-10 border-primary h-32 w-32 rounded-full object-cover"
                    src={"https://hi.arunava.tech/assets/pfp.png"}
                    alt="pfp"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="relative flex flex-row items-center justify-center">
                  <div className="mb-1 flex flex-col">
                    <div className="mt-1 flex flex-row items-center justify-center">
                      <span className="flex text-center text-2xl font-bold leading-tight text-zinc-300">
                        {name}
                      </span>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="ml-1 h-5 w-5 text-indigo-600"
                        >
                          <path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                        </svg>
                      </div>
                    </div>
                    <p className="text-center text-sm text-gray-400 dark:text-gray-500">
                      <a
                        // rel="noopener noreferrer nofollow"
                        // target="_blank"
                        href=""
                      >
                        hi.arunava.tech 👋🏻
                      </a>
                    </p>
                    <div className="mt-3 flex flex-col">
                      <p className="inline-block whitespace-pre-wrap text-center text-sm text-gray-500 dark:text-gray-400">
                        frontend &amp; design | nextjs, typescript
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div>
                    <div className="mx-auto flex flex-wrap items-center justify-center gap-1">
                      <div>
                        <div className="border-banner flex select-none flex-row items-center justify-center space-x-1 rounded-full border px-2 py-1 ">
                          <span className="w-5">💻</span>
                          <span className="text-banner text-xs">Coder</span>
                        </div>
                      </div>
                      <div>
                        <div className="border-banner flex select-none flex-row items-center justify-center space-x-1 rounded-full border px-2 py-1 ">
                          <span className="w-5">🎨</span>
                          <span className="text-banner text-xs">Designer</span>
                        </div>
                      </div>
                      <div>
                        <div className="border-banner flex select-none flex-row items-center justify-center space-x-1 rounded-full border px-2 py-1 ">
                          <span className="w-5">🎐</span>
                          <span className="text-banner text-xs">Anime</span>
                        </div>
                      </div>
                      <div>
                        <div className="border-banner flex select-none flex-row items-center justify-center space-x-1 rounded-full border px-2 py-1 ">
                          <span className="w-5">♟️</span>
                          <span className="text-banner text-xs">Chess</span>
                        </div>
                      </div>
                      <div>
                        <div className="border-banner flex select-none flex-row items-center justify-center space-x-1 rounded-full border px-2 py-1 ">
                          <span className="w-5">🎵</span>
                          <span className="text-banner text-xs">Music</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-1 rounded pt-2">
                  <div>
                    <div className="flex flex-row flex-wrap  items-center justify-center">
                      <a
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                        href={twitter}
                        className="flex cursor-pointer items-center justify-center rounded-full border-white border-opacity-10 bg-opacity-10 p-1.5 transition-all"
                      >
                        <svg
                          className="h-6 fill-current text-blue-400 transition-all"
                          role="img"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Twitter</title>
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                        </svg>
                      </a>
                      <a
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                        href={instagram}
                        className="flex cursor-pointer items-center justify-center rounded-full border-white border-opacity-10 bg-opacity-10 p-1.5 transition-all"
                      >
                        <svg
                          className="h-6 w-6"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 48 48"
                          width="48px"
                          height="48px"
                        >
                          <radialGradient
                            id="yOrnnhliCrdS2gy~4tD8ma"
                            cx="19.38"
                            cy="42.035"
                            r="44.899"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0" stopColor="#fd5" />
                            <stop offset=".328" stopColor="#ff543f" />
                            <stop offset=".348" stopColor="#fc5245" />
                            <stop offset=".504" stopColor="#e64771" />
                            <stop offset=".643" stopColor="#d53e91" />
                            <stop offset=".761" stopColor="#cc39a4" />
                            <stop offset=".841" stopColor="#c837ab" />
                          </radialGradient>
                          <path
                            fill="url(#yOrnnhliCrdS2gy~4tD8ma)"
                            d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                          />
                          <radialGradient
                            id="yOrnnhliCrdS2gy~4tD8mb"
                            cx="11.786"
                            cy="5.54"
                            r="29.813"
                            gradientTransform="matrix(1 0 0 .6663 0 1.849)"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop offset="0" stopColor="#4168c9" />
                            <stop
                              offset=".999"
                              stopColor="#4168c9"
                              stopOpacity="0"
                            />
                          </radialGradient>
                          <path
                            fill="url(#yOrnnhliCrdS2gy~4tD8mb)"
                            d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
                          />
                          <path
                            fill="#fff"
                            d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
                          />
                          <circle cx="31.5" cy="16.5" r="1.5" fill="#fff" />
                          <path
                            fill="#fff"
                            d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
                          />
                        </svg>
                      </a>
                      <a
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                        href={github}
                        className="flex cursor-pointer items-center justify-center rounded-full border-white border-opacity-10 bg-opacity-10 p-1.5 transition-all"
                      >
                        <svg
                          className="text-primary h-6 fill-current transition-all dark:text-gray-200"
                          role="img"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>GitHub</title>
                          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
                        </svg>
                      </a>
                      <a
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                        href={lichess}
                        className="flex cursor-pointer items-center justify-center rounded-full border-white border-opacity-10 bg-opacity-10 p-1.5 transition-all"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24px"
                          height="24px"
                          viewBox="0 0 1024 1024"
                        >
                          <title>Lichess</title>
                          <circle cx="512" cy="512" r="512" fill="black" />
                          <path
                            d="M766.7 551.8v-.1l-124.6-226 16.2-69.5c0-.2 0-.3-.1-.4-.1-.1-.3-.2-.4-.2-36.9 4.4-67.5 9.4-97.1 31.2-55.6-3.9-105.2 1.5-147.4 15.9-37.6 12.8-69.4 32.9-94.6 59.6-25.2 26.7-43.3 59.2-53.7 96.5-9 32.4-11.6 66.7-7.5 99.1 7.1 52.4 30.5 99.3 67.8 135.7 33.9 33.1 77.5 56.5 126.3 67.8 20.8 4.8 41.6 7.2 62 7.2 23.8 0 47-3.3 68.9-9.8 43-12.8 77.8-37.7 100.7-71.8.1-.2.1-.5-.1-.7-.2-.2-.5-.1-.7 0-75.8 78.4-200 91.9-295.3 32.1-99.7-62.5-137.8-187.1-86.8-283.7 50.8-96.1 140.9-137.4 253.9-116.4.1 0 .2 0 .3-.1 2.4-1.4 4.8-2.8 7.3-4.3 23-13.6 49.1-28.9 71.8-29L616.1 335v.4l133.2 223.2c-2.4 30.2-17.6 45.8-30 53.5-12.2 7.6-24 9.4-26.2 9.7-5.7-14.5-16-29.5-50.6-62.9-8.9-8.6-25.9-20.1-45.6-33.4-55.7-37.7-132.1-89.4-119.3-135.4.1-.3-.1-.5-.3-.6-.3-.1-.5.1-.6.3-7.3 25.5 2.6 53.2 30.2 84.9 23.5 26.9 55.7 51.8 81.6 71.8 14.3 11 26.7 20.6 35 28.4 37.1 34.9 55.8 61.3 60.5 70.5.1.2.3.3.6.3.2-.1 24.9-6.7 47.2-21.5 29.4-19.8 41.6-44.8 34.9-72.4z"
                            fill="white"
                          />
                        </svg>
                      </a>
                      <a
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                        href={spotify}
                        className="flex cursor-pointer items-center justify-center rounded-full border-white border-opacity-10 bg-opacity-10 p-1.5 transition-all"
                      >
                        <svg
                          className="h-6 fill-current text-green-400"
                          role="img"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <title>Spotify</title>
                          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"></path>
                        </svg>
                      </a>
                      <a
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                        href={lastfm}
                        className="flex cursor-pointer items-center justify-center rounded-full border-white border-opacity-10 bg-opacity-10 p-1.5 transition-all"
                      >
                        <svg
                          className="h-6 w-6"
                          viewBox="0 0 230 115"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M 100.831 113.498 l -8.354 -22.708 c 0 0 -13.575 15.14 -33.932 15.14 c -18.013 0 -30.802 -15.662 -30.802 -40.721 c 0 -32.106 16.182 -43.591 32.107 -43.591 c 22.969 0 30.277 14.878 36.543 33.934 l 8.354 26.103 c 8.351 25.318 24.013 45.678 69.17 45.678 c 32.37 0 54.295 -9.918 54.295 -36.02 c 0 -21.143 -12.009 -32.107 -34.458 -37.328 l -16.705 -3.654 c -11.484 -2.61 -14.877 -7.309 -14.877 -15.14 c 0 -8.875 7.046 -14.096 18.533 -14.096 c 12.529 0 19.315 4.699 20.36 15.923 l 26.102 -3.133 c -2.088 -23.492 -18.271 -33.15 -44.896 -33.15 c -23.491 0 -46.462 8.875 -46.462 37.327 c 0 17.75 8.614 28.975 30.277 34.195 l 17.752 4.175 c 13.312 3.133 17.748 8.614 17.748 16.185 c 0 9.656 -9.396 13.572 -27.146 13.572 c -26.364 0 -37.325 -13.834 -43.591 -32.89 l -8.614 -26.101 c -10.961 -33.934 -28.452 -46.463 -63.169 -46.463 c -38.37 0 -58.731 24.275 -58.731 65.517 c 0 39.677 20.361 61.08 56.906 61.08 C 86.733 127.332 100.831 113.498 100.831 113.498 L 100.831 113.498 z"
                            id="path5"
                            fill="#d51007"
                            fillOpacity={1}
                          />
                        </svg>
                      </a>
                    
                      <a
                        rel="noopener noreferrer nofollow"
                        target="_blank"
                        href={mail}
                        className="flex cursor-pointer items-center justify-center rounded-full border-white border-opacity-10 bg-opacity-10 p-1.5 transition-all"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 text-gray-700 dark:text-gray-300"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          ></path>
                          <title>Email</title>
                        </svg>
                      </a>
                      <div className="flex items-center">
                        <div className="mx-auto inline-block">
                          <div
                            onClick={() => {
                              navigator.clipboard.writeText(discordTag);
                            }}
                            className="flex cursor-pointer items-center justify-center space-x-2 rounded-full border-white border-opacity-10 px-2 py-2 hover:bg-white hover:bg-opacity-5"
                          >
                            <svg
                              className="h-5 fill-current text-indigo-500"
                              role="img"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <title>Discord</title>
                              <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"></path>
                            </svg>
                            <p className="text-sm font-medium text-indigo-100">
                              {/* <a href={discord}>{discordTag}</a> */}
                              {discordTag}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="max-w-s mt-1 w-full space-y-2">
                        <div className="bg-animate group mb-1 w-full cursor-pointer rounded bg-gradient-to-r from-zinc-900 via-zinc-600 to-zinc-900 text-sm text-zinc-400 shadow transition-all">
                          <a
                            href="https://arunava.tech"
                            target="_blank"
                            rel="noopener noreferrer nofollow"
                            className="w-full transition-all sm:hover:opacity-70"
                          >
                            <div>
                              <span className="relative mt-2 flex w-full flex-row items-center justify-between rounded bg-zinc-900 text-sm leading-tight">
                                <div className="flex items-center justify-center">
                                  <div className="flex h-16 w-16 items-center justify-center rounded bg-zinc-800 bg-opacity-50">
                                    <span className=""> 🌊 </span>
                                  </div>
                                  <div className="mx-4 flex flex-col">
                                    <span
                                      title="My Blog"
                                      className="text-ellipsis text-[16px] text-zinc-400"
                                    >
                                      My Blog
                                    </span>
                                    <span
                                      title="https://arunava.tech"
                                      className="xs:w-[220px] mt-1 w-[175px] truncate text-ellipsis whitespace-nowrap text-[14px] text-zinc-700 sm:w-[275px] md:w-[340px] lg:w-[400px]"
                                    >
                                      arunava.tech
                                    </span>
                                  </div>
                                </div>
                                <span className="absolute right-2 text-zinc-600 transition-all">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="h-4 w-8"
                                  >
                                    <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                                  </svg>
                                </span>
                              </span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="mb-4 flex justify-center">
                      <div className="bg-primary text-banner flex items-center justify-center rounded-full bg-opacity-90 text-xs font-medium"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-4 flex justify-center">
            <div className="bg-primary text-banner flex items-center justify-center rounded-full bg-opacity-90 text-xs font-medium">
              <NowPlaying />
            </div>
          </div>
        </div>
      </div>
      <div />
    </div>
  );
}
