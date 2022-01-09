const request = require("./Request.js")

module.exports = (apiKey, merchant) => {
  const e = {}

  const _base = "queries"

  e.get = async (id) => {
    return request({
      apiKey,
      merchant,
      endpoint: `${_base}/${id}`,
      key: "query"
    })
  }

  e.list = async () => {
    return request({
      apiKey,
      merchant,
      endpoint: _base,
      key: "queries"
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

  e.close = async (id) => {
    return request({
      apiKey,
      merchant,
      endpoint: `${_base}/close/${id}`,
      method: "POST"
    })
  }

  e.reopen = async (id) => {
    return request({
      apiKey,
      merchant,
      endpoint: `${_base}/reopen/${id}`,
      method: "POST"
    })
  }

  return e
}