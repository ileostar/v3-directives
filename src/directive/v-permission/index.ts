/**
 * @description: v-permission指令
 * @LastEditors: ileostar
 * @LastEditTime: 2024/02/07 11:12:16
 * @description: 快速实现鉴权
 */
import type { Directive } from 'vue'

const vPermission: Directive = {
  mounted(el, binding) {
    // 从服务获取用户的权限列表，一般获取后存放于vuex中，本案例为了方便演示将直接以字符串的形式展示
    // 权限之间以分号分隔
    // 管理员权限："add;del;update;query"
    // 普通用户权限："add;del;update;query"
    let permission = 'add;del' // 权限字符串
    let permissionList = []// 权限列表
    if (!permission)
      permission = ''
    permissionList = permission.split(';')

    // 获取需要的权限标识，即元素给指令传进来的参数值
    let inValue
    if (typeof binding.value === 'string') {
      inValue = binding.value
    }
    else if (Array.isArray(binding.value)) {
      inValue = binding.value.join(';')
    }
    else {
      // eslint-disable-next-line no-console
      console.log('数据格式不正确，请输入字符串（以分号分隔）或数组')
    }

    let passText = inValue // 可以是多个值，中间以分号分隔
    let passTextArr = []// 将权限解析到数组中
    if (!passText)
      passText = ''
    passTextArr = passText.split(';')

    // 定义一个权限标识变量，用于标识是否有权限
    let flag = false
    // 循环遍历权限列表，检测用户是否有相应的操作权限
    for (let i = 0; i < passTextArr.length; i++) {
      if (permissionList.includes(passTextArr[i])) {
        // 如果从服务器中获取的权限列表中有组件所需的权限，则将flag置为true,同时跳出循环
        flag = true
        break
      }
    }
    // 如果flag为false，也就是没权限则直接将元素移除或者隐藏
    if (!flag)
      el.parentNode && el.parentNode.removeChild(el)
  },
}

export default vPermission
