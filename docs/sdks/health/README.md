# Health
(*health*)

## Overview

### Available Operations

* [get](#get) - Comprehensive health check
* [getReady](#getready) - Readiness probe
* [getLive](#getlive) - Liveness probe

## get

Performs a comprehensive health check of all critical system components including database connectivity, storage availability, job queue status, and S3 functionality. Returns detailed status information for monitoring and alerting systems.

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

Kubernetes-compatible readiness probe that verifies the service is ready to accept traffic. Checks database connectivity to ensure the service can handle requests. Used by orchestrators to determine when to route traffic to this instance.

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

**Promise\<[operations.ReadyResponse](../../models/operations/readyresponse.md)\>**

### Errors

| Error Type                       | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| errors.NotReadyError             | 503                              | application/json                 |
| errors.ScreenshothisDefaultError | 4XX, 5XX                         | \*/\*                            |

## getLive

Kubernetes-compatible liveness probe that indicates whether the service is alive and functioning. This lightweight check verifies the application is responsive and should be used by orchestrators to determine if the container needs to be restarted.

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

**Promise\<[operations.LiveResponse](../../models/operations/liveresponse.md)\>**

### Errors

| Error Type                       | Status Code                      | Content Type                     |
| -------------------------------- | -------------------------------- | -------------------------------- |
| errors.NotAliveError             | 503                              | application/json                 |
| errors.ScreenshothisDefaultError | 4XX, 5XX                         | \*/\*                            |