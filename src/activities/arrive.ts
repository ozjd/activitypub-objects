import { Activity, IntransitiveActivity, Activities } from "./activity";
import { Actor } from "../actors/actor";
import { ActivityObject } from "../objects/object";
import { URL } from "url";

/**
 * https://www.w3.org/TR/activitystreams-vocabulary/#dfn-arrive
 */
export class Arrive implements IntransitiveActivity {
  public readonly type = Activities.ARRIVE;
  constructor(
    public readonly actor: Actor | URL,
    public readonly location: Activity | URL,
    public readonly origin?: ActivityObject | URL,
  ) { }
}
