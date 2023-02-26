const config: Config = {
    mode: 'DIFFERENT_DIMENSION_ME', // 'DIFFERENT_DIMENSION_ME' | 'AI_PAINTING_ANIME'
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
    // Uncomment the line below and set your proxy if you need it.
    // proxyUrl: 'socks5://user:password@11.22.33.44:1234',
};

export default config;
