<script lang="tsx">
import { defineComponent, toRefs } from 'vue';
import { FormSchema, FormProps } from '../types/form'
import type { PropType, Ref } from 'vue';
import { componentMap } from '../componentMap';
import { ElFormItem } from 'element-plus'

export default defineComponent({
    name: 'BasicFormItem',
    inheritAttrs: false,
    props: {
        schema: {
            type: Object as PropType<FormSchema>,
            default: () => ({}),
        },
        formProps: {
            type: Object as PropType<FormProps>,
            default: () => ({}),
        },
    },
    setup(props, { slots }) {
        const { schema } = toRefs(props) as {
            schema: Ref<FormSchema>;
        };
        //组件渲染
        const renderComponent = () => {
            const { component, componentProps, label } = props.schema;
            const Comp = componentMap.get(component) as ReturnType<typeof defineComponent>;

            const compAttr = {
                placeholder: `请${['input'].includes(component) ? '输入' : '选择'}${label}`,
                ...componentProps
            }
            return <Comp  {...compAttr} />
        }
        const renderItem = () => {
            const { itemProps, slot, render, field, label, suffix, component } = props.schema;

            return (<ElFormItem
                prop={field}
                label={label}
                {...itemProps}
            >
                {renderComponent()}
            </ElFormItem>)
        }
        return () => {
            const { colProps = {} } = props.schema;
            const realColProps = { ...colProps }
            return (
                <el-col {...realColProps}>

                </el-col >
            );
        }
    }
})

</script>