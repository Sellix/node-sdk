const request = require("./Request.js")

module.exports = (apiKey, merchant) => {
  const e = {}

  const _base = "categories"

  e.get = async (id) => {
    return request({
      apiKey,
      merchant,
      endpoint: `${_base}/${id}`,
      key: "category"
    })
  }

  e.create = async (body) => {
    return request({
      apiKey,
      merchant,
      endpoint: _base,
      method: "POST",
      key: "uniqid",
      body
    })
  }

  e.list = async () => {
    return request({
      apiKey,
      merchant,
      endpoint: _base,
      key: "categories"
    })
  }

  e.update = async (id, body) => {
    return request({
      apiKey,
      merchant,
      endpoint: `${_base}/${id}`,
      method: "PUT",
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