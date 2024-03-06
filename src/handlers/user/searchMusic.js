const { InlineResultArticle, InputTextMessageContent } = require("grammy");
const { searchMusic } = require("./src/api/YandexMusic");

async function searchMusic(ctx) {
  const query = ctx.inlineQuery.query;

  const results = await searchMusic;
  query;

  const inlineResults = results.map((result, index) => {
    return new InlineResultArticle(
        String(index),
        result.title,
        new InputTextMessageContent(result.url)
    );
  });

  await ctx.answerInlineQuery(inlineResults);

}

module.exports = { searchMusic };