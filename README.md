# Sellix NodeJS SDK 

![node-sdk-tag](https://img.shields.io/github/v/tag/sellix/node-sdk?sort=date&color=blueviolet)
![npm](https://img.shields.io/npm/v/@sellix/node-sdk)
![downloads](https://img.shields.io/npm/dt/@sellix/node-sdk)

## Introduction

Sellix public API for developers to access merchant resources

## Requirements

- NodeJS

## Installation

Install the package through NPM.

```
npm i @sellix/node-sdk
```

## Usage

```js
// pass <MERCHANT_NAME> only if you need to be authenticated as an additional store
const sellix = require("@sellix/node-sdk")("<YOUR_API_KEY>", "<MERCHANT_NAME>")

void (async () => {
  try {
    const products = await sellix.products.list()
  } catch (e) {
    console.log(e)
  }
})()
```

## Documentation

[Sellix Developers API](https://developers.sellix.io)
