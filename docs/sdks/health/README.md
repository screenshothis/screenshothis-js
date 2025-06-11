# Health
(*health*)

## Overview

### Available Operations

* [get](#get)
* [getReady](#getready)
* [getLive](#getlive)

## get

### Example Usage

```typescript
import { Screenshothis } from "@screenshothis/sdk";

const screenshothis = new Screenshothis();

async function run() {
  const result = await screenshothis.health.get();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ScreenshothisCore } from "@screenshothis/sdk/core.js";
import { healthGet } from "@screenshothis/sdk/funcs/healthGet.js";

// Use `ScreenshothisCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const screenshothis = new ScreenshothisCore();

async function run() {
  const res = await healthGet(screenshothis);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("healthGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.HealthCheck](../../models/healthcheck.md)\>**

### Errors

| Error Type                       | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| errors.HealthCheckError          | 503                              | application/json                 |
| errors.ScreenshothisDefaultError | 4XX, 5XX                         | \*/\*                            |

## getReady

### Example Usage

```typescript
import { Screenshothis } from "@screenshothis/sdk";

const screenshothis = new Screenshothis();

async function run() {
  const result = await screenshothis.health.getReady();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ScreenshothisCore } from "@screenshothis/sdk/core.js";
import { healthGetReady } from "@screenshothis/sdk/funcs/healthGetReady.js";

// Use `ScreenshothisCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const screenshothis = new ScreenshothisCore();

async function run() {
  const res = await healthGetReady(screenshothis);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("healthGetReady failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetHealthReadyResponse](../../models/operations/gethealthreadyresponse.md)\>**

### Errors

| Error Type                       | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| errors.NotReadyError             | 503                              | application/json                 |
| errors.ScreenshothisDefaultError | 4XX, 5XX                         | \*/\*                            |

## getLive

### Example Usage

```typescript
import { Screenshothis } from "@screenshothis/sdk";

const screenshothis = new Screenshothis();

async function run() {
  const result = await screenshothis.health.getLive();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { ScreenshothisCore } from "@screenshothis/sdk/core.js";
import { healthGetLive } from "@screenshothis/sdk/funcs/healthGetLive.js";

// Use `ScreenshothisCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const screenshothis = new ScreenshothisCore();

async function run() {
  const res = await healthGetLive(screenshothis);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("healthGetLive failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetHealthLiveResponse](../../models/operations/gethealthliveresponse.md)\>**

### Errors

| Error Type                       | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| errors.NotAliveError             | 503                              | application/json                 |
| errors.ScreenshothisDefaultError | 4XX, 5XX                         | \*/\*                            |