const request = require("./Request.js")

module.exports = (apiKey, merchant) => {
  const e = {}

  const _base = "feedback"

  e.get = async (id) => {
    return request({
      apiKey,
      merchant,
      endpoint: `${_base}/${id}`,
      key: "feedback"
    })
  }

  e.reply = async (id, body) => {
    return request({
      apiKey,
      merchant,
      endpoint: `${_base}/reply/${id}`,
      method: "POST",
      body
    })
  }

  e.list = async () => {
    return request({
      apiKey,
      merchant,
      endpoint: _base,
      key: "feedback"
    })
  }

  return e
}