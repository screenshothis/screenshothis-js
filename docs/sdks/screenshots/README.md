# Screenshots
(*screenshots*)

## Overview

### Available Operations

* [take](#take) - Generate optimized website screenshot

## take

Captures high-quality screenshots of websites with advanced optimization features including smart caching, CDN integration, request deduplication, and quota management. Supports multiple image formats (JPEG, PNG, WebP) with customizable dimensions, device emulation, and viewport settings. Implements efficient S3 streaming for large images and conditional requests for optimal performance.

### Example Usage

```typescript
import { Screenshothis } from "@screenshothis/sdk";

const screenshothis = new Screenshothis();

async function run() {
  const result = await screenshothis.screenshots.take({
    apiKey: "sk_live_abcdef1234567890abcdef1234567890",
    url: "https://example.com",
    selector: ".main-content",
    blockRequests: "*.doubleclick.net\n" +
    "*.googletagmanager.com\n" +
    "*/analytics/*",
    blockResources: [
      "script",
      "stylesheet",
      "font",
    ],
    cacheKey: "homepage-desktop-light",
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    headers: "User-Agent: MyBot/1.0\n" +
    "Authorization: Bearer token123\n" +
    "X-Custom-Header: value",
    cookies: "session_id=abc123; Domain=example.com; Path=/; Secure\n" +
    "user_pref=dark_mode; Max-Age=3600",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ScreenshothisCore } from "@screenshothis/sdk/core.js";
import { screenshotsTake } from "@screenshothis/sdk/funcs/screenshotsTake.js";

// Use `ScreenshothisCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const screenshothis = new ScreenshothisCore();

async function run() {
  const res = await screenshotsTake(screenshothis, {
    apiKey: "sk_live_abcdef1234567890abcdef1234567890",
    url: "https://example.com",
    selector: ".main-content",
    blockRequests: "*.doubleclick.net\n" +
    "*.googletagmanager.com\n" +
    "*/analytics/*",
    blockResources: [
      "script",
      "stylesheet",
      "font",
    ],
    cacheKey: "homepage-desktop-light",
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    headers: "User-Agent: MyBot/1.0\n" +
    "Authorization: Bearer token123\n" +
    "X-Custom-Header: value",
    cookies: "session_id=abc123; Domain=example.com; Path=/; Secure\n" +
    "user_pref=dark_mode; Max-Age=3600",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("screenshotsTake failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.TakeScreenshotRequest](../../models/operations/takescreenshotrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.TakeScreenshotResponse](../../models/operations/takescreenshotresponse.md)\>**

### Errors

| Error Type                       | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| errors.ForbiddenError            | 403                              | application/json                 |
| errors.InternalServerError       | 500                              | application/json                 |
| errors.ScreenshothisDefaultError | 4XX, 5XX                         | \*/\*                            |