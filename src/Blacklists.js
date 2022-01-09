const request = require("./Request.js")

module.exports = (apiKey, merchant) => {
  const e = {}

  const _base = "blacklists"

  e.get = async (id) => {
    return request({
      apiKey,
      merchant,
      endpoint: `${_base}/${id}`,
      key: "blacklist"
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
      key: "blacklists"
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