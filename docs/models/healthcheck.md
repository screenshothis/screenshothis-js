# HealthCheck

## Example Usage

```typescript
import { HealthCheck } from "@screenshothis/sdk";

let value: HealthCheck = {
  status: "unhealthy",
  timestamp: "<value>",
  uptime: 6855.11,
  checks: [],
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `status`                             | [models.Status](../models/status.md) | :heavy_check_mark:                   | N/A                                  |
| `timestamp`                          | *string*                             | :heavy_check_mark:                   | N/A                                  |
| `uptime`                             | *number*                             | :heavy_check_mark:                   | N/A                                  |
| `checks`                             | [models.Check](../models/check.md)[] | :heavy_check_mark:                   | N/A                                  |
| `version`                            | *string*                             | :heavy_minus_sign:                   | N/A                                  |