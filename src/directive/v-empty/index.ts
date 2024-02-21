/**
 * @description: v-empty指令
 * @LastEditors: ileostar
 * @LastEditTime: 2024/02/07 11:12:16
 * @description: 设置空状态
 */
import { Directive, DirectiveBinding, isRef, watch } from 'vue';

let originalContent = '';
let emptyState = '';
const insertEmptyState = (el: HTMLElement,content:string,img:string) => {
  const image = img ? `<img src="${img}" style="width: 90%; border-radius: 5px;" />` : '';
  emptyState = `
    <div style="position: absolute; top: 0; left: 0; z-index: 9999; background: #fff; display: flex; justify-content: center; align-items: center; height: ${el.offsetHeight}px; width: ${el.offsetWidth}px; border-radius: 5px;">
      <div style="display: flex; justify-content: center; align-items: center; flex-direction: column;">
        ${image}
        <div style="color: #000">${content}</div>
      </div>
    </div>
  `;
  el.innerHTML = emptyState;
};

const vEmpty: Directive = {
  beforeMount(el: HTMLElement, binding: DirectiveBinding) {
    originalContent = el.innerHTML;
  },
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    el.style.position = el.style.position || 'relative';

    const { visible, content = '暂无数据', img } = binding.value;
    console.log(visible, content, img)

    const insertContent = () => {
      el.innerHTML = originalContent;
    };

    const handleVisibilityChange = () => {
      const isVisible = isRef(visible) ? visible.value : visible;
      if (isVisible) {
        insertEmptyState(el,content,img);
      } else {
        insertContent();
      }
    };

    if (isRef(visible)) {
      watch(visible, handleVisibilityChange);
    }

    handleVisibilityChange();
  },
  updated(el: HTMLElement, binding: DirectiveBinding) {
    const { visible } = binding.value;
    const isVisible = isRef(visible) ? visible.value : visible;
    if (!isVisible) {
      el.innerHTML = originalContent.trim();
    } else {
      el.innerHTML = emptyState
    }
  }
};

export default vEmpty;
