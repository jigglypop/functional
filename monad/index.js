const request = require("sync-request");

const searchReddit = (search) => {
  let response;
  try {
    response = JSON.parse(
      request(
        "GET",
        "https://www.reddit.com/search.json?q=" + encodeURI(search)
      ).getBody("utf8")
    );
  } catch (err) {
    response = { message: "error", errorCode: err["statusCode"] };
  }
  return response;
};

const getComments = (link) => {
  let response;
  try {
    response = JSON.parse(
      request("GET", "https://www.reddit.com/" + link).getBody("utf8")
    );
  } catch (err) {
    response = { message: "error", errorCode: err["statusCode"] };
  }
  return response;
};

console.log(searchReddit("functional programming"));
