import { Activity, Activities } from "./activity";
import { Actor } from "../actors/actor";
import { ActivityObject } from "../objects/object";
import { URL } from "url";

/**
 * https://www.w3.org/TR/activitystreams-vocabulary/#dfn-block
 */
export class Block implements Activity {
  public readonly type = Activities.BLOCK;
  constructor(
    public readonly actor: Actor | URL,
    public readonly object: ActivityObject | URL,
  ) { }
}
