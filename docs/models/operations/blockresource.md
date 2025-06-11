# BlockResource

Types of web resources that can be blocked during screenshot capture

## Example Usage

```typescript
import { BlockResource } from "@screenshothis/sdk/models/operations";

let value: BlockResource = "script";
```

## Values

```typescript
"document" | "stylesheet" | "image" | "media" | "font" | "script" | "texttrack" | "xhr" | "fetch" | "prefetch" | "eventsource" | "websocket" | "manifest" | "signedexchange" | "ping" | "cspviolationreport" | "preflight" | "other"
```