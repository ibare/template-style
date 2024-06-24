import { compile } from 'handlebars'

export default function navBar(props) {
  const { cid } = props
  const container = document.querySelector(`#${cid}`)

  container.innerHTML = compile(`
    <ul>
    {{#each menus}}
      <li><a href="{{path}}"><span>{{label}}</span></a></li>
    {{/each}}
    </ul>
  `)(props)
}
