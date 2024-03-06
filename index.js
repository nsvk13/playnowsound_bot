const { Bot } = require("grammy");
const dotenv = require("dotenv");

const { searchMusic } = require("./src/api/YandexMusic.js");

dotenv.config();

const bot = new Bot(process.env.BOT_TOKEN);

bot.on("inline_query", searchMusic);

bot.start();