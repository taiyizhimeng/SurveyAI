import { View } from "@tarojs/components";

import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "taro-ui/dist/style/index.scss"; // 引入组件样式 - 方式一
import "./index.scss";

/*
 * 全局底部栏组件
 */

export default () => {
  return (
    <View className="globalFooter">
      author: luo
    </View>
  );
};
