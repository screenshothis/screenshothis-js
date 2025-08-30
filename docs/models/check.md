# Check

## Example Usage

```typescript
import { Check } from "@screenshothis/sdk/models";

let value: Check = {
  name: "<value>",
  status: "fail",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `name`                                         | *string*                                       | :heavy_check_mark:                             | Name of the health check                       |
| `status`                                       | [models.CheckStatus](../models/checkstatus.md) | :heavy_check_mark:                             | Status of the health check                     |
| `duration`                                     | *number*                                       | :heavy_minus_sign:                             | Duration of the health check in milliseconds   |
| `details`                                      | Record<string, *any*>                          | :heavy_minus_sign:                             | Detailed information about the health check    |
| `error`                                        | *string*                                       | :heavy_minus_sign:                             | Error message if the health check failed       |