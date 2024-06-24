import { Page } from '../../Components'
import { compile } from 'handlebars'

export default class RegularExpression extends Page {
  constructor(cid, props) {
    super(cid)
    this.props = { ...props }
  }

  attachHandler = () => {
    this.container.querySelector('input[name=phone]').addEventListener('keyup', this.onValidatePhone)
  }

  setValidateMessage = message => {
    // this.container.querySelector('.validate-message').innerHTML = message.replace('\n', '<br>')
    this.container.querySelector('.validate-message').innerHTML = message.replace(/\n/g, '<br>')
  }

  setValidateMessage2 = (...args) => {
    this.container.querySelector('.validate-message').innerHTML = args.join('<br>')
  }

  onValidatePhone = event => {
    const match = /^(0(\d|\d{2})-(\d{4}|\d{3})-\d{4})$/.test(event.target.value)

    if (match) {
      this.setValidateMessage('✅ 올바른 전화번호 형식')
    } else {
      this.setValidateMessage(`다음과 같은 형식으로 입력해 주세요.
        ex: 010-1234-1234 또는
        02-123-1234`)
      // this.setValidateMessage('다음과 같은 형식으로 입력해 주세요.\nex: 010-1234-1234 또는\n02-123-1234')
      // this.setValidateMessage2('다음과 같은 형식으로 입력해 주세요.', 'ex: 010-1234-1234 또는 02-123-1234')
    }
  }

  render() {
    this.container.innerHTML = compile(`
      <h1>정규 표현식</h1>
      <form>
        <input type="text" name="phone" placeholder="010-1234-1234">
        <p class="validate-message"></p>
      </form>
    `)(this.props)

    this.attachHandler()
  }
}
