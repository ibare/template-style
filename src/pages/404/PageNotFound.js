import handlebars from 'handlebars'

const html = handlebars.compile(`
  <h1>404</h1>
  <p>{{content}}</p>  
`)

export default function pageNotFound() {
  
  return html({ content: '페이지를 찾을 수 없습니다.'})
}
