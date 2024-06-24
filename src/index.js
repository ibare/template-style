import { layout, navBar } from './Components'
import { RegularExpression, pageNotFound } from './pages'

const app = () => {
  init()
  route()
}

const init = () => {
  const root = document.querySelector('#root')

  root.innerHTML = layout()

  navBar({ 
    cid: 'nav',
    menus: [
      { path: '/', label: '홈' },
      { path: '/regexp', label: '정규 표현식' },
    ]
  })

  window.addEventListener('popstate', route)
  document.body.addEventListener('click', navigatePage)
}

const navigatePage = event => {
  event.preventDefault()

  const path = event.target.getAttribute('href')
  const anchor = event.target.closest('a')

  if (anchor && anchor.href) {
    history.pushState(null, null, anchor.href)
    route()
  }
}

const route = () => {
  const path = window.location.pathname
  const content = document.querySelector('#content')
  const regularExpression = new RegularExpression('content', {})

  switch(path) {
    case '/':
      content.innerHTML = '<h1>Home</h1>'
      break;
    case '/regexp':
      regularExpression.render()
      break;
    default:
      content.innerHTML = pageNotFound()
      break;
  }
}

document.addEventListener('DOMContentLoaded', app);
