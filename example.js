const sellix = require("@sellix/node-sdk")("<API_KEY>", "<MERCHANT_NAME>")

void (async () => {
  try {
    const blacklists = await sellix.blacklists.list()
    console.log(blacklists)
  } catch (e) {
    console.log(e)
  }
})()