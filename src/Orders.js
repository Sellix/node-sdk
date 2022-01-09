const request = require("./Request.js")

module.exports = (apiKey, merchant) => {
  const e = {}

  const _base = "orders"

  e.get = async (id) => {
    return request({
      apiKey,
      merchant,
      endpoint: `${_base}/${id}`,
      key: "order"
    })
  }

  e.list = async () => {
    return request({
      apiKey,
      merchant,
      endpoint: _base,
      key: "orders"
    })
  }

  return e
}