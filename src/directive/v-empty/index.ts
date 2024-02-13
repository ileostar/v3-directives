/**
 * @description: v-empty指令
 * @LastEditors: ileostar
 * @LastEditTime: 2024/02/07 11:12:16
 * @description: 设置空状态
 */
import { Directive, DirectiveBinding } from 'vue';

const vEmpty: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    el.style.position = el.style.position || 'relative';
    const { visible, content, img } = binding.value;
    const originalContent = el.innerHTML;

    const insertContent = () => {
      el.innerHTML = originalContent;
    };

    const insertEmptyState = () => {
      const image = img ? `<img src="${img}" style="height: 30%; width: 30%;" />` : '';
      const emptyState = `
        <div style="position:absolute;top:0;left:0;z-index:9999;background:#fff;display:flex;justify-content:center;align-items:center;height:${el.offsetHeight}px;width:${el.offsetWidth}px;">
          <div style="text-align:center;">
            ${image}
            <div>${content || '暂无数据'}</div>
          </div>
        </div>
      `;
      el.innerHTML = emptyState;
    };

    if (!visible) {
      insertContent();
    } else {
      insertEmptyState();
    }
  },
  updated(el: HTMLElement, binding: DirectiveBinding) {
    const { visible } = binding.value;
    if (!visible) {
      el.innerHTML = el.innerHTML.trim();
    }
  }
};

export default vEmpty;
