<!-- Start SDK Example Usage [usage] -->
```typescript
import { Screenshothis } from "@screenshothis/sdk";

const screenshothis = new Screenshothis();

async function run() {
  const result = await screenshothis.screenshots.take({
    apiKey: "<value>",
    url: "https://powerful-tackle.org/",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->