const name = "Arunava Ghosh";
const belowLink = "hi.arnvgh.me 👋🏻"
const bio = "typescript, python, go"
const portfolio = "https://arnvgh.me"
// only github url is supported (change in next.config.js for more domain support)
const avatar = "https://avatars.githubusercontent.com/u/102473837?v=4";

const twitter = "https://x.com/arnvgh";
const linkedin = "https://www.linkedin.com/in/arnvgh/";
const github = "https://github.com/arnvgh";
const lichess = "https://lichess.org/@/arunava";
const spotify = "https://arnvgh.me/spotify";
const lastfm = "https://www.last.fm/user/arunava_";
const telegram = "https://telegram.me/arnvgh";
const BuyMeACoffee = "https://www.buymeacoffee.com/arunava";
const mail = "mailto:arnvgh@gmail.com";
const discord = "https://discord.com/user/1127992874785591448";
const discordTag = "@arnvgh";

export const Badges = [
    {
        emoji: "💻",
        label: "Coder",
    },
    {
        emoji: "🎨",
        label: "Designer",
    },
    {
        emoji: "🎐",
        label: "Anime",
    },
    {
        emoji: "♟️",
        label: "Chess",
    },
    {
        emoji: "🎵",
        label: "Music",
    },
]


export const config = {
    name,
    belowLink,
    bio,
    avatar,
    portfolio,
    socials: {
        twitter,
        linkedin,
        github,
        lichess,
        spotify,
        lastfm,
        telegram,
        BuyMeACoffee,
        mail,
        discord,
        discordTag,
    }
}