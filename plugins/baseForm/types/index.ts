import { Component, VNodeProps } from "vue";

type ColSpanType = number;
export interface ColEx {
  style?: any;
  /**
   *栅格占据的列数
   * @default 24
   * @type ColSpanType
   */
  span?: ColSpanType;

  /**
   * 栅格左侧的间隔格数
   * @default 0
   * @type ColSpanType
   */
  offset?: ColSpanType;

  /**
   * 栅格向右移动格数
   * @default 0
   * @type ColSpanType
   */
  push?: ColSpanType;

  /**
   * 栅格向左移动格数
   * @default 0
   * @type ColSpanType
   */
  pull?: ColSpanType;

  /**
   *<768px 响应式栅格数或者栅格属性对象
   * @type { span: ColSpanType, offset: ColSpanType } | ColSpanType
   */
  xs?: { span: ColSpanType; offset: ColSpanType } | ColSpanType;

  /**
   * ≥768px 响应式栅格数或者栅格属性对象
   * @type { span: ColSpanType, offset: ColSpanType } | ColSpanType
   */
  sm?: { span: ColSpanType; offset: ColSpanType } | ColSpanType;

  /**
   * ≥992px 响应式栅格数或者栅格属性对象
   * @type { span: ColSpanType, offset: ColSpanType } | ColSpanType
   */
  md?: { span: ColSpanType; offset: ColSpanType } | ColSpanType;

  /**
   * ≥1200px 响应式栅格数或者栅格属性对象
   * @type { span: ColSpanType, offset: ColSpanType } | ColSpanType
   */
  lg?: { span: ColSpanType; offset: ColSpanType } | ColSpanType;

  /**
   *≥1920px 响应式栅格数或者栅格属性对象
   * @type { span: ColSpanType, offset: ColSpanType } | ColSpanType
   */
  xl?: { span: ColSpanType; offset: ColSpanType } | ColSpanType;
}
export type ComponentType = keyof ComponentProps;
type ExtractPropTypes<T extends Component> = T extends new (...args: any) => any
  ? Omit<InstanceType<T>["$props"], keyof VNodeProps>
  : never;

//组件props
export interface ComponentProps {
  input: ExtractPropTypes<
    typeof import("element-plus/es/components/input")["default"]
  >;
  radio: ExtractPropTypes<
    typeof import("element-plus/es/components/radio")["default"]
  >;
  radioGroup: ExtractPropTypes<
    typeof import("element-plus/es/components/radio")["ElRadioGroup"]
  >;
  checkbox: ExtractPropTypes<
    typeof import("element-plus/es/components/checkbox")["default"]
  >;
  checkboxGroup: ExtractPropTypes<
    typeof import("element-plus/es/components/checkbox")["ElCheckboxGroup"]
  >;
}
