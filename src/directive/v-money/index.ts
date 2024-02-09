import { Directive, DirectiveBinding } from 'vue'

const setInnerHTML = (el: HTMLElement, binding: DirectiveBinding) => {
  const { value } = binding

  const parts = String(value).split('.')

  const moneyReverse = Array.from(parts[0]).reverse()

  const moneyArray = []

  for (let i = 0; i < moneyReverse.length; i++) {
    if (i % 3 === 0 && i !== 0) {
      moneyArray.push(',')
    }

    moneyArray.push(moneyReverse[i])
  }

  const moneyString = moneyArray.reverse().join('')

  if (parts.length > 1) {
    el.innerHTML = `${moneyString}.${parts[1]}`
  } else {
    el.innerHTML = moneyString
  }
}

const vMoney: Directive = {
  mounted(el: HTMLElement, binding) {
    setInnerHTML(el, binding)
  },
  updated(el: HTMLElement, binding) {
    setInnerHTML(el, binding)
  }
}
export default vMoney
