/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { Health } from "./health.js";
import { Screenshots } from "./screenshots.js";

export class Screenshothis extends ClientSDK {
  private _screenshots?: Screenshots;
  get screenshots(): Screenshots {
    return (this._screenshots ??= new Screenshots(this._options));
  }

  private _health?: Health;
  get health(): Health {
    return (this._health ??= new Health(this._options));
  }
}
