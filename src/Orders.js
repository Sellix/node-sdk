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

  e.list = async (page = null) => {
    return request({
      apiKey,
      merchant,
      endpoint: _base,
      key: page ? `orders?page=${page}` : "orders",
    })
  }

  e.update = async (id, body) => {
    return request({
      apiKey,
      merchant,
      endpoint: `${_base}/update/${id}`,
      method: "PUT",
      key: "order",
      body
    })
  }

  e.issue_replacement = async (id, body) => {
    return request({
      apiKey,
      merchant,
      endpoint: `${_base}/replacement/${id}`,
      method: "POST",
      body
    })
  }

  e.update_custom_fields = async (id, body) => {
    return request({
      apiKey,
      merchant,
      endpoint: `${_base}/${id}/custom_fields`,
      method: "PUT",
      body
    })
  }

  return e
}