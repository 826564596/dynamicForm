import formConfig from "../../utils/data.js";
Page({
    data: { formConfig: formConfig },
    onLoad(option) {
        console.log(option);
        //模拟从服务器获取表单相关数据
        for (let i of formConfig) {
            if (i.formId == option.formId) {
                this.setData({
                    formConfigs: { i },
                });
            }
        }
    },
    //表单校验
    formValidate(item) {
        if (item.force) {
            console.log(item, item.force, item.label);
            //获取验证类型和验证方式
            let { type, value } = item.role;
            console.log("value", value);
            if (type === "notnull") {
                if (item.input_text === "") {
                    let { msg } = item.role;
                    if (!msg) {
                        msg = item.label + "不为空";
                    }
                    dd.showToast({
                        title: msg,
                        icon: "none",
                    });
                    return false;
                } else {
                    return true;
                }
            }
        }
    },
    getInputValue() {
        let result = [];
        formConfig.forEach((item, i) => {
            result.push(item.formInfo);
        });
        let forms = result.reduce((a, b) => {
            return a.concat(b);
        });
        console.log(forms);
        for (let key in forms) {
            let items = forms[key];
            if (!this.formValidate(items)) {
                break;
            } else {
                console.log("okk");
            }
        }
    },
    input(a, b) {
        console.log(a, b);
    },
    submit(e) {
        console.log(e.detail.value);
    },
});
