# HealthCheck

Performs a comprehensive health check of all critical system components including database connectivity, storage availability, job queue status, and S3 functionality. Returns detailed status information for monitoring and alerting systems.

## Example Usage

```typescript
import { HealthCheck } from "@screenshothis/sdk";

let value: HealthCheck = {
  status: "healthy",
  timestamp: "2024-01-01T00:00:00.000Z",
  uptime: 3600,
  checks: [
    {
      name: "database",
      status: "pass",
      duration: 12,
    },
    {
      name: "storage",
      status: "pass",
      duration: 25,
    },
    {
      name: "queue",
      status: "pass",
      duration: 8,
      details: {
        "waiting": 2,
        "active": 1,
        "completed": 1543,
        "failed": 0,
        "workerRunning": true,
      },
    },
    {
      name: "s3",
      status: "pass",
      duration: 156,
    },
  ],
  version: "1.0.0",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          | Example                              |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `status`                             | [models.Status](../models/status.md) | :heavy_check_mark:                   | Overall health status of the system  |                                      |
| `timestamp`                          | *string*                             | :heavy_check_mark:                   | Timestamp of the health check        |                                      |
| `uptime`                             | *number*                             | :heavy_check_mark:                   | Uptime of the service in seconds     |                                      |
| `checks`                             | [models.Check](../models/check.md)[] | :heavy_check_mark:                   | Array of health check results        |                                      |
| `version`                            | *string*                             | :heavy_minus_sign:                   | Application version or commit hash   | 1.0.0                                |