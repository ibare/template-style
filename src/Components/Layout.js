import { compile } from "handlebars"

export default function layout() {
  return compile(`
    <nav id="nav"></nav>
    <div id="content"></div>
  `)()
}