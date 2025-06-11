# HealthCheckError

## Example Usage

```typescript
import { HealthCheckError } from "@screenshothis/sdk/models/errors";

// No examples available for this model
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             | Example                                 |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `status`                                | [models.Status](../../models/status.md) | :heavy_check_mark:                      | Overall health status of the system     |                                         |
| `timestamp`                             | *string*                                | :heavy_check_mark:                      | Timestamp of the health check           |                                         |
| `uptime`                                | *number*                                | :heavy_check_mark:                      | Uptime of the service in seconds        |                                         |
| `checks`                                | [models.Check](../../models/check.md)[] | :heavy_check_mark:                      | Array of health check results           |                                         |
| `version`                               | *string*                                | :heavy_minus_sign:                      | Application version or commit hash      | 1.0.0                                   |