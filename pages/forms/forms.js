// pages/forms/forms.js

//导入组件ast数据结构 开发过程中有后端返回过来
import data from "../../utils/formconfig.js";
import menu from "../../utils/menu.js";
import sort from "../../utils/sort.js";

import util from "../../utils/util.js";

Page({
    data: {
        sort: sort,
        menu: menu,
    },
    /**
     * 页面的初始数据
     */
    detail(e) {
        let formId = e.target.dataset.formId;
        dd.navigateTo({
            url: "/pages/index/index?formId=" + formId,
        });
    },
});
