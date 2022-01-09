const request = require("./Request.js")

module.exports = (apiKey, merchant) => {
  const e = {}

  const _base = "payments"

  e.create = async (body) => {
    return request({
      apiKey,
      merchant,
      endpoint: _base,
      method: "POST",
      key: {
        oneOf: ["url,uniqid", "invoice"]
      },
      body
    })
  }

  e.delete = async (id) => {
    return request({
      apiKey,
      merchant,
      endpoint: `${_base}/${id}`,
      method: "DELETE"
    })
  }

  return e
}