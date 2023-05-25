const request = require("./Request.js")

module.exports = (apiKey, merchant) => {
  const e = {}

  const _base = "products"

  e.get = async (id) => {
    return request({
      apiKey,
      merchant,
      endpoint: `${_base}/${id}`,
      key: "product"
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
      key: "products"
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

  e.licensing = {
    check: async (body) => {
      return request({
        apiKey,
        merchant,
        endpoint:`${_base}/licensing/check`,
        method: "POST",
        key: "license",
        body
      })
    }
  }

  e.licensing = {
    update_hardware_id: async (body) => {
      return request({
        apiKey,
        merchant,
        endpoint:`${_base}/licensing/hardware_id`,
        method: "PUT",
        key: "license",
        body
      })
    }
  }

  return e
}
