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
    "Groups",
    "Queries",
    "Payments",
    "Customers",
    "Subscriptions"
  ].forEach(component => {
    e[component.toLowerCase()] = require(`./${component}.js`)(apiKey, merchant)
  })

  return e
}