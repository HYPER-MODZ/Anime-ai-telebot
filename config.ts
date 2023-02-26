const config: Config = {
    mode: 'AI_PAINTING_ANIME', // 'DIFFERENT_DIMENSION_ME' | 'AI_PAINTING_ANIME'
    botToken: '5778803513:AAGqTkyF--atxLBdKisq4xx6YXgFUvSiUW8',
    keepFiles: {
        compared: true,
        input: true,
        single: true,
        video: true,
    },
    messages: {
        blocked: 'The Chinese website has blocked the bot, too bad 🤷‍♂️',
        bye:
            '💚 Thanks For Using Bot 💚\n' +

            '💚 You can add bot your groups 💚\n' +

            '💚 [Bot Channel](https://t.me/animebotc) 💚\n' +

            'special Thanks For script Owner Imcsu',

        hello: 'Hi 👋 Send me a photo to convert it into a 2D anime art\n 🌸 Be sure to join the channel @animebotc',

        media: '@Anime\\qq\\Ai\\_bot',

       received: 'Photo has been received please wait 🍀',
    },
    sendMedia: {
        compared: true,
        single: true, // much slower and works only with mode=AI_PAINTING_ANIME
        video: true, // much slower and works only with mode=AI_PAINTING_ANIME
    },
    parallelRequests: 10,
    proxyUrl: 'socks5://HIA:HIA@117.86.109.75:1080',
};

export default config;
