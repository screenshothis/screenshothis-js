# Check

## Example Usage

```typescript
import { Check } from "@screenshothis/sdk";

let value: Check = {
  name: "<value>",
  status: "fail",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `name`                                         | *string*                                       | :heavy_check_mark:                             | N/A                                            |
| `status`                                       | [models.CheckStatus](../models/checkstatus.md) | :heavy_check_mark:                             | N/A                                            |
| `duration`                                     | *number*                                       | :heavy_minus_sign:                             | N/A                                            |
| `error`                                        | *string*                                       | :heavy_minus_sign:                             | N/A                                            |
| `details`                                      | Record<string, *any*>                          | :heavy_minus_sign:                             | N/A                                            |