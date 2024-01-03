import { FormItemProp, FormRules } from "element-plus";
import { Arrayable } from "element-plus/es/utils";
import { PropType } from "vue";
import {ColEx} from './types'
export const basicProps = {
  model: {
    //表单数据对象
    type: Object as PropType<Record<string, any>>,
    default: () => {},
  },
  rules: {
    //表单验证规则
    type: Object as PropType<FormRules>,
  },
  labelPosition: {
    //表单域标签的位置
    type: String as PropType<"left" | "right" | "top">,
    default: "right",
  },
  labelWidth: {
    //标签的长度
    type: [Number, String] as PropType<string | number>,
  },
  labelSuffix: {
    //表单域标签的后缀
    type: String as PropType<string>,
  },
  hideRequiredAsterisk: {
    //是否隐藏必填字段标签旁边的红色星号
    type: Boolean as PropType<boolean>,
    default: false,
  },
  requireAsteriskPosition: {
    //星号的位置
    type: String as PropType<"left" | "right">,
    default: "left",
  },
  showMessage: {
    //是否显示校验错误信息
    type: Boolean as PropType<boolean>,
    default: true,
  },
  inlineMessage: {
    //是否以行内形式展示校验信息
    type: Boolean as PropType<boolean>,
    default: false,
  },
  statusIcon: {
    //是否在输入框中显示校验结果反馈图标
    type: Boolean as PropType<boolean>,
    default: false,
  },
  validateOnRuleChange: {
    //是否在 rules 属性改变后立即触发一次验证
    type: Boolean as PropType<boolean>,
    default: true,
  },
  size: {
    //用于控制该表单内组件的尺寸
    type: String as PropType<"" | "large" | "default" | "small">,
  },
  disabled: {
    //是否禁用该表单内的所有组件
    type: Boolean as PropType<boolean>,
    default: false,
  },
  scrollToError: {
    //当校验失败时，滚动到第一个错误表单项
    type: Boolean as PropType<boolean>,
    default: false,
  },
  scrollIntoViewOptions: {
    //当校验有失败结果时，滚动到第一个失败的表单项目
    tyoe: [Object, Boolean] as PropType<Record<string, any> | boolean>,
  },
  //重置该表单项，将其值重置为初始值，并移除校验结果
  resetFields: {
    type: Function as PropType<
      (props?: Arrayable<FormItemProp> | undefined) => void
    >,
    baseColProps: {
      type: Object as PropType<Partial<ColEx>>,
    },
  },
};
