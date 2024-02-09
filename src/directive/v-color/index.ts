import { DirectiveBinding } from "vue";

const vColor = {
  mounted(el: HTMLElement, binding: DirectiveBinding){
    el.style.color = binding.value;
  }
}

export default vColor;
