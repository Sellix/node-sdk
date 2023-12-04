const fetch = require("node-fetch")

const _request = async ({
  apiKey,
  merchant,
  endpoint,
  key = null,
  method = "GET",
  body = null
}) => {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    }
  }

  if (body) {
    options.body = JSON.stringify(body)
  }

  if (merchant) {
    options.headers["X-Sellix-Merchant"] = merchant
  }

  const response = await fetch(`https://dev.sellix.io/v1/${endpoint}`, options)
  const data = await response.json()

  return _handleResponse({
    response: data,
    key
  })
}

const _handleResponse = ({
  response,
  key
}) => {
  if (response.status !== 200) {
    if (response.error) {
      throw new Error(response.error)
    }

    throw new Error(JSON.stringify(response))
  } else {
    if (key === null) {
      return null
    }

    if (!!key && key.constructor === Object && key.oneOf) {
      updatedResponse = {}

      for (const option of key.oneOf) {
        if (option.includes(",")) {
          option.split(",").forEach(keyOption => {
            if (response.data && response.data[keyOption]) {
              updatedResponse[keyOption] = response.data[keyOption]
            }
          })
        } else if (response.data && response.data[option]) {
          return response.data[option]
        }
      }

      return updatedResponse
    }

    return response.data[key]
  }
}

module.exports = (obj) => {
  return _request(obj)
}