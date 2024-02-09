import { Directive, DirectiveBinding, onMounted, onUnmounted } from 'vue';

const vScrollLoading: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
      const { fn, distance = 100 } = binding.value;

      function handleScroll() {
        const scrollHeight = el.scrollHeight;
        const offsetHeight = el.offsetHeight;
        const scrollTop = el.scrollTop;

        if (scrollHeight - offsetHeight - scrollTop <= distance) {
          fn();
        }
      }

      // 监听滚动事件，调用 handleScroll
      el.addEventListener('scroll', handleScroll);

      // 在组件卸载前移除事件监听
      onUnmounted(() => {
        el.removeEventListener('scroll', handleScroll);
      });
    }
}


export default vScrollLoading
