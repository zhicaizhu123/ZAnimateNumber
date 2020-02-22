# z-animate-number 基于 Vue 的数字动画组件

> 数字动画组件可以让你的数字初始化或则修改变化时可以动画过渡

### 安装

```sh
npm run -S z-animate-number
```

### 使用

#### 全局

```js
// 在根文件注册
import ZAnimateNumber from "z-animate-number";

Vue.use(ZAnimateNumber);
```

#### 局部

```js
import { ZAnimateNumber } from 'z-animate-number'
...
components: {
  ZAnimateNumber
}
...
```

### 参数描述

| 参数      | 描述                 |   类型   | 默认                                                                                                 | 是否必选 |
| --------- | -------------------- | :------: | ---------------------------------------------------------------------------------------------------- | :------: |
| start     | 动画其实数字         |  Number  | 0                                                                                                    |    否    |
| end       | 期望的结果数字       |  Number  | 0                                                                                                    |    否    |
| duration  | 动画时长，单位为`ms` |  Number  | 3000                                                                                                 |    否    |
| autoplay  | 自动动画             | Boolean  | true                                                                                                 |    否    |
| decimals  | 保留的小数个数       |  Number  | 0                                                                                                    |    否    |
| decimal   | 整数与小数的分割符   |  String  | ''                                                                                                   |    否    |
| separator | 三进位的分割符       |  String  | ','                                                                                                  |    否    |
| prefix    | 在数字前需要加前缀   |  String  | ''                                                                                                   |    否    |
| suffix    | 在数字后需要加的后缀 |  String  | ''                                                                                                   |    否    |
| useEasing | 动画函数             | Boolean  | true                                                                                                 |    否    |
| easingFn  | 动画函数             | Function | function (t, b, c, d) { <br> return (c _ (-Math.pow(2, (-10 _ t) / d) + 1) \* 1024) / 1023 + b <br>} |    否    |

### 示例

#### 保留两位小数

- 示例代码

```js

...
<z-animate-number
    :end="9999.56"
    :decimals="2"
    decimal='.'
></z-animate-number>
...
```

- 效果图  
  ![image](https://note.youdao.com/yws/public/resource/3cf1f986da86e945691b281e19c02ca2/E22A5A485665456A97297F504F3EF1DD?ynotemdtimestamp=1582353027907)

#### 添加前缀

- 示例代码

```js

...
<z-animate-number
    :end="9999"
    prefix="$"
></z-animate-number>
...
```

- 效果图  
  ![image](https://note.youdao.com/yws/public/resource/3cf1f986da86e945691b281e19c02ca2/571ECB428BCB45E4AEB6B73C4A241C72?ynotemdtimestamp=1582353027907)

#### 添加后缀

- 示例代码

```js

...
<z-animate-number
    :end="12387"
    sufffix="元"
></z-animate-number>
```

- 效果图  
  ![image](https://note.youdao.com/yws/public/resource/3cf1f986da86e945691b281e19c02ca2/82C2E2A0B9334EFAAA6EF0E826462954?ynotemdtimestamp=1582353027907)

#### 设置动画时间

- 示例代码

```js

...
<z-animate-number
    :end="65646"
    :duration="5000"
></z-animate-number>
```

- 效果图  
  ![image](https://note.youdao.com/yws/public/resource/3cf1f986da86e945691b281e19c02ca2/E46E65E654714CCBBBB140966307B488?ynotemdtimestamp=1582353027907)
