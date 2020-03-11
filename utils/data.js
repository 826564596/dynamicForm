const formConfig = [
    //领料
    {
        formId: "101", //对应动态表单层级
        fieldName: "基本信息",
        formInfo: [
            //每个层级下面 具体表单元素
            {
                name: "name1", //表单获取数据时用到的字段
                type: "text", //表单类型
                label: "单行输入框", //标题
                id: "input-name-form", //表单id
                placeholder: "请输入", //设置文本框默认提示
                disable: true, //是否能修改
                isFill: true, //是否必填
                isShow: false, //表单校验参数
                role: {
                    type: "notnull",
                    value: "", //正则表达式
                    msg: "名字不为空",
                },
            },
            //每个层级下面 具体表单元素
            {
                name: "name2",
                type: "text", //表单类型
                label: "单行输入框", //标题
                id: "input-name-form", //表单id
                placeholder: "请输入", //设置文本框默认提示
                disable: true, //是否能修改
                isFill: true, //是否必填
                isShow: false, //表单校验参数
                role: {
                    type: "notnull",
                    value: "", //正则表达式
                    msg: "名字不为空",
                },
            },
        ],
    },
    //入库
    {
        formId: "102", //对应动态表单层级
        fieldName: "基本信息",
        formInfo: [
            //每个层级下面 具体表单元素
            {
                name: "name1", //表单获取数据时用到的字段
                type: "text", //表单类型
                label: "单行输入框", //标题
                id: "input-name-form", //表单id
                placeholder: "请输入", //设置文本框默认提示
                disable: true, //是否能修改
                isFill: true, //是否必填
                isShow: false, //表单校验参数
                role: {
                    type: "notnull",
                    value: "", //正则表达式
                    msg: "名字不为空",
                },
            },
        ],
    },
];
export default formConfig;
