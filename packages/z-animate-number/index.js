// 导入组件，组件必须声明 name
import ZAnimateNumber from "./ZAnimateNumber.vue";

// 为组件提供 install 安装方法，供按需引入
ZAnimateNumber.install = function(Vue) {
  Vue.component(ZAnimateNumber.name, ZAnimateNumber);
};

// 默认导出组件
export default ZAnimateNumber;
