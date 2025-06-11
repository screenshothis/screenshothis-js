<!-- Start SDK Example Usage [usage] -->
```typescript
import { Screenshothis } from "@screenshothis/sdk";

const screenshothis = new Screenshothis();

async function run() {
  const result = await screenshothis.screenshots.take({
    apiKey: "sk_live_abcdef1234567890abcdef1234567890",
    url: "https://example.com",
    selector: ".main-content",
    blockRequests: "*.doubleclick.net\n"
      + "*.googletagmanager.com\n"
      + "*/analytics/*",
    blockResources: [
      "script",
      "stylesheet",
      "font",
    ],
    cacheKey: "homepage-desktop-light",
    headers: "User-Agent: MyBot/1.0\n"
      + "Authorization: Bearer token123\n"
      + "X-Custom-Header: value",
    cookies: "session_id=abc123; Domain=example.com; Path=/; Secure\n"
      + "user_pref=dark_mode; Max-Age=3600",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->