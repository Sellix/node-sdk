const sellix = require("../src/index.js")("<API_KEY>", "<MERCHANT_NAME>")
const debug = require("debug")("SellixApiClient")

void (async () => {
  const tests = []

  try {
    if (!tests.length || tests.includes("blacklists")) {
      debug("Testing blacklists")
      const blacklistPayload = {
        type: "EMAIL",
        data: "sample@gmail.com",
        note: "demo"
      }
      const blacklistId = await sellix.blacklists.create(blacklistPayload)
      debug("  Create blacklist passed ✓")
      await sellix.blacklists.get(blacklistId)
      debug("  Get blacklist passed ✓")
      await sellix.blacklists.list()
      debug("  List blacklists passed ✓")
      await sellix.blacklists.update(blacklistId, blacklistPayload)
      debug("  Update blacklist passed ✓")
      await sellix.blacklists.delete(blacklistId)
      debug("  Delete blacklist passed ✓")
    }

    if (!tests.length || tests.includes("whitelists")) {
      debug("Testing whitelists")
      const whitelistPayload = {
        type: "EMAIL",
        data: "sample@gmail.com",
        note: "demo"
      }
      const whitelistId = await sellix.whitelists.create(whitelistPayload)
      debug("  Create whitelist passed ✓")
      await sellix.whitelists.get(whitelistId)
      debug("  Get whitelist passed ✓")
      await sellix.whitelists.list()
      debug("  List whitelists passed ✓")
      await sellix.whitelists.update(whitelistId, whitelistPayload)
      debug("  Update whitelist passed ✓")
      await sellix.whitelists.delete(whitelistId)
      debug("  Delete whitelist passed ✓")
    }

    if (!tests.length || tests.includes("categories")) {
      debug("Testing categories")
      const categoryPayload = {
        title: "Software",
        unlisted: false,
        products_bound: [],
        sort_priority: 0
      }
      const categoryId = await sellix.categories.create(categoryPayload)
      debug("  Create category passed ✓")
      await sellix.categories.get(categoryId)
      debug("  Get category passed ✓")
      await sellix.categories.list()
      debug("  List categories passed ✓")
      await sellix.categories.update(categoryId, categoryPayload)
      debug("  Update category passed ✓")
      await sellix.categories.delete(categoryId)
      debug("  Delete category passed ✓")
    }

    if (!tests.length || tests.includes("coupons")) {
      debug("Testing coupons")
      const couponPayload = {
        code: "TESTING_COUPON",
        discount_value: 35,
        max_uses: 50,
        products_bound: [],
        discount_type: "PERCENTAGE",
        disabled_with_volume_discounts: true
      }
      const couponId = await sellix.coupons.create(couponPayload)
      debug("  Create coupon passed ✓")
      await sellix.coupons.get(couponId)
      debug("  Get coupon passed ✓")
      await sellix.coupons.list()
      debug("  List coupons passed ✓")
      await sellix.coupons.update(couponId, couponPayload)
      debug("  Update coupon passed ✓")
      await sellix.coupons.delete(couponId)
      debug("  Delete coupon passed ✓")
    }

    if (!tests.length || tests.includes("feedback")) {
      debug("Testing feedback")
      const feedbackList = await sellix.feedback.list()
      debug("  List feedback passed ✓")
      if (feedbackList[0]) {
        const { uniqid: feedbackId } = feedbackList[0]
        await sellix.feedback.get(feedbackId)
        debug("  Get feedback passed ✓")
        await sellix.feedback.reply(feedbackId, {
          reply: "Testing reply"
        })
        debug("  Reply feedback passed ✓")
      }
    }

    if (!tests.length || tests.includes("orders")) {
      debug("Testing orders")
      const ordersList = await sellix.orders.list()
      debug("  List orders passed ✓")
      if (ordersList[0]) {
        const { uniqid: orderId } = ordersList[0]
        await sellix.orders.get(orderId)
        debug("  Get order passed ✓")
      }
    }

    if (!tests.length || tests.includes("products")) {
      debug("Testing products")
      const productPayload = {
        title: "Software Activation Keys",
        price: 12.5,
        description: "Product description example.",
        currency: "EUR",
        gateways: ["PAYPAL", "STRIPE", "BITCOIN"],
        type: "SERIALS",
        serials: [
          "activation-key-#1"
        ]
      }
      const productId = await sellix.products.create(productPayload)
      debug("  Create product passed ✓")
      await sellix.products.get(productId)
      debug("  Get product passed ✓")
      await sellix.products.list()
      debug("  List products passed ✓")
      await sellix.products.update(productId, productPayload)
      debug("  Update product passed ✓")
      await sellix.products.delete(productId)
      debug("  Delete product passed ✓")
    }

    if (!tests.length || tests.includes("queries")) {
      debug("Testing queries")
      const queries = await sellix.queries.list()
      debug("  List queries passed ✓")
      if (queries[0]) {
        const { uniqid: queryId } = queries[0]
        await sellix.queries.get(queryId)
        debug("  Get query passed ✓")
        await sellix.queries.reply(queryId, {
          reply: "Testing reply"
        })
        debug("  Reply query passed ✓")
        await sellix.queries.close(queryId)
        debug("  Close query passed ✓")
        await sellix.queries.reopen(queryId)
        debug("  Reopen query passed ✓")
      }
    }

    if (!tests.length || tests.includes("payments")) {
      debug("Testing payments")
      const paymentPayload = {
        title: "Sellix Payment",
        value: 1.5,
        currency: "EUR",
        quantity: 5,
        email: "no-reply@sellix.io",
        white_label: false,
        return_url: "https://sample.sellix.io/return"
      }
      const paymentNoWhiteLabel = await sellix.payments.create(paymentPayload)
      debug("  Create payment no white label passed ✓")
      paymentPayload.white_label = true
      const paymentWhiteLabel = await sellix.payments.create(paymentPayload)
      debug("  Create payment white label passed ✓")
      await sellix.payments.delete(paymentNoWhiteLabel.uniqid)
      debug("  Delete payment no white label passed ✓")
      await sellix.payments.delete(paymentWhiteLabel.uniqid)
      debug("  Delete payment white label passed ✓")
      await sellix.payments.complete(paymentWhiteLabel.uniqid)
      debug("  Complete payment white label passed ✓")
    }

    if (!tests.length || tests.includes("customers")) {
      debug("Testing customers")
      const customerPayload = {
        "email": "sampleJames@gmail.com",
        "name": "James",
        "surname": "Smith",
        "phone": "3287261000",
        "phone_country_code": "IT",
        "country_code": "IT",
        "street_address": "St. Rome 404",
        "additional_address_info": null,
        "city": "Rome",
        "postal_code": "0",
        "state": "Italy"
      }
      const customerId = await sellix.customers.create(customerPayload)
      debug("  Create customer passed ✓")
      await sellix.customers.get(customerId)
      debug("  Get customer passed ✓")
      await sellix.customers.list()
      debug("  List customers passed ✓")
      await sellix.customers.update(customerId, customerPayload)
      debug("  Update customer passed ✓")
    }
    
    if (!tests.length || tests.includes("subscriptions")) {
      debug("Testing subscriptions")
      const subscriptionPayload = {
        "product_id": "61a8de6277597",
        "coupon_code": null,
        "custom_fields": {
          "user_id": "demo"
        },
        "customer_id": "cst_9f006addc898a645",
        "gateway": null
      }
      await sellix.subscriptions.create(subscriptionPayload)
      debug("  Create subscription passed ✓")
      await sellix.subscriptions.list()
      debug("  List subscriptions passed ✓")
    }
  } catch (e) {
    debug(e)
  }
})()