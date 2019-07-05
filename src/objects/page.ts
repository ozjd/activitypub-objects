import { ActivityObject, Objects } from "./object";
import { Link } from "../link";
import { URL } from "url";

export class Page implements ActivityObject {
  public readonly type = Objects.PAGE;
  public readonly name: string;
  public readonly id?: URL;
  public readonly url: Link | URL | Array<Link | URL>;
  constructor(params: {
    name: string,
    url: Link | URL | Array<Link | URL>,
    id?: URL,
  }) {
    this.name = params.name;
    this.url = params.url;
    if (params.id != null) {
      this.id = params.id;
    }
  }
}
