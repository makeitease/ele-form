<script lang="tsx">
import { defineComponent, toRefs } from 'vue';
import { FormSchema } from '../types/form'
import type { PropType, Ref } from 'vue';

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