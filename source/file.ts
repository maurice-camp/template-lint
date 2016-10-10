import { Stream } from 'stream';
import { Issue } from "./issue";
import { ASTNode } from "./ast";
import { FileKind } from './file-kind';
export { FileKind } from './file-kind';

export class File {
  public content: string | Stream;
  public kind: FileKind;
  public path?: string;
  public issues = new Array<Issue>();
  public imports: { [key: string]: boolean } = {};

  constructor(opts: { content: string|Stream, kind: FileKind, path?: string }) {
    if (opts == null)
      throw Error("opts cannot be null");
    if (opts.content == null)
      throw Error("content cannot be null");
    if (opts.kind == null)
      throw Error("kind cannot be null");
    if (opts.path && opts.path.trim() == "")
      throw Error("path cannot be empty string");
    Object.assign(this, opts);
  }
}
