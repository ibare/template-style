import handlebars from 'handlebars'

export default function pageNotFound() {
  
  return handlebars.compile(`
    <h1>404</h1>
    <p>{{content}}</p>
  `)({ content: '페이지를 찾을 수 없습니다.'})
}
