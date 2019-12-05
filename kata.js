const axios = require("axios");
const $ = require("cheerio");

module.exports = async function(url) {
  const { data } = await axios.get(url);

  const info = $("#description", data);

  return {
    description: info.html()
  };
};
