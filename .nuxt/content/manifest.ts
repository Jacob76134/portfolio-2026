export const checksums = {
  "home": "v3.5.0--6xyLHrtJ3P27Fx_kWCpQIZfhl8W6xuLqifX1OZKDcSo",
  "work": "v3.5.0--rjpcQUVkWBpo_1OA2ctvLp5HNmj6qa8kL38BTwqFA4o",
  "blog": "v3.5.0--gmELlxwh2-Nzy0tppDJTxq8P1xiwfdi_ASSjcpi1cmM"
}
export const checksumsStructure = {
  "home": "HjuXH8Lce6kUPDfgg8uphgxO0P7cUg4GVkWhsc_IZ2U",
  "work": "3qDFdGbnx8ETW4VVEGUKCtKyqu2_VMsYq_joj9ODW-0",
  "blog": "a79RgHF3F7CwOXwVZzawuBGhn3r1mI_7Jqb039pEnhY"
}

export const tables = {
  "home": "_content_home",
  "work": "_content_work",
  "blog": "_content_blog",
  "info": "_content_info"
}

export default {
  "home": {
    "type": "data",
    "fields": {
      "id": "string",
      "title": "string",
      "awards": "json",
      "bio": "string",
      "extension": "string",
      "meta": "json",
      "stack": "json",
      "stem": "string",
      "subtitle": "string"
    }
  },
  "work": {
    "type": "page",
    "fields": {
      "id": "string",
      "title": "string",
      "body": "json",
      "date": "string",
      "description": "string",
      "extension": "string",
      "meta": "json",
      "navigation": "json",
      "order": "number",
      "path": "string",
      "published": "boolean",
      "seo": "json",
      "stem": "string",
      "tags": "json"
    }
  },
  "blog": {
    "type": "page",
    "fields": {
      "id": "string",
      "title": "string",
      "body": "json",
      "date": "string",
      "description": "string",
      "extension": "string",
      "meta": "json",
      "navigation": "json",
      "order": "number",
      "path": "string",
      "published": "boolean",
      "seo": "json",
      "stem": "string",
      "tags": "json"
    }
  },
  "info": {
    "type": "data",
    "fields": {}
  }
}