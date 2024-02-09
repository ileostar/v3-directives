import { DirectiveBinding } from "vue";

export default {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const ele = document.getElementById(binding.arg);
    const target = ele || window;
    const type = ele ? 1 : 2;

    // 点击监听
    el.addEventListener('click', () => {
      if (ele) {
        smooth(target);
      } else {
        target.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    });

    // 滚动监听
    const scrollHandler = (e: { target: { documentElement: any; }; srcElement: { documentElement: any; }; }) => {
      const doc = type === 1 ? (e.target || e.srcElement) :
        (e.target.documentElement || e.srcElement.documentElement);

      if (doc.scrollTop > binding.value) {
        el.style.visibility = 'unset';
      } else {
        el.style.visibility = 'hidden';
      }
    };
    target.addEventListener('scroll', scrollHandler);

    el.style.visibility = 'hidden'; // 默认隐藏
  },

  unmounted(el: HTMLElement, binding: DirectiveBinding) {
    const target = binding.arg ? document.getElementById(binding.arg) : window;
    const scrollHandler = (e) => {
      const doc = type === 1 ? (e.target || e.srcElement) :
        (e.target.documentElement || e.srcElement.documentElement);

      if (doc.scrollTop > binding.value) {
        el.style.visibility = 'unset';
      } else {
        el.style.visibility = 'hidden';
      }
    };
    target.removeEventListener('scroll', scrollHandler);
    el.removeEventListener('click', null); // 将 null 传入作为事件处理函数
  }
};

// 平滑移动，里面的数值都可以使用参数形式传入。这里直接写成固定值了。
function smooth(ele) {
  let distance = ele.scrollTop;
  const step = (distance / 300) * 10;
  const timer = setInterval(() => {
    distance = distance - step;
    if (distance <= 0) {
      clearInterval(timer);
      ele.scrollTop = 0;
      return false;
    }
    ele.scrollTop = distance;
  }, 10);
}
