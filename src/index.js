module.exports = (apiKey, merchant = null) => {
  const e = {}
  
  void [
    "Blacklists",
    "Whitelists",
    "Categories",
    "Coupons",
    "Feedback",
    "Orders",
    "Products",
    "Queries",
    "Payments"
  ].forEach(component => {
    e[component.toLowerCase()] = require(`./${component}.js`)(apiKey, merchant)
  })

  return e
}