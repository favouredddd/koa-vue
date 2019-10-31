<template>
    <div class="plugin-list el-plugin-list" style="getHight">
        <ul class="plugin-types shows" :class="{'active':show}">
            <li v-for="(i,index) in pluginList" @click="noSHow" :key="index">
                <router-link class="plugin-kind" :to="i.path" style="color:#000" active-class="checked">{{i.name}}</router-link>
            </li>
        </ul>
        <div class="plugin-kind-list">
            <transition :name="fade" :mode="mode">
                <router-view></router-view>
            </transition>
        </div>
        <div class="clear"></div>
    </div>
</template>
<script>
import { mapState } from "vuex";
import html2canvas from 'html2canvas'
let hhh = {
    name: "hhh",
    template: "<div><div @click='dddd'>{{hhh}}</div></div>",
    props: ["ggg"],
    data() {
        return {};
    },
    computed: {
        hhh() {
            return this.ggg;
        }
    },
    methods: {}
};
export default {
    name: "pluginList",
    data: () => {
        return {
            mode: "out-in",
            fade: "slide-left",
            route_height: "",
            pluginList: [{
                    name: "插件使用说明",
                    path: "/vue/pluginList/instruction",
                    active: true
                },
                {
                    name: "上传文件",
                    path: "/vue/pluginList/upload",
                    active: false
                },
                {
                    name: "缓冲动画",
                    path: "/vue/pluginList/buffering",
                    active: false
                },
                {
                    name: "轮播图",
                    path: "/vue/pluginList/carousel",
                    active: false
                },
                {
                    name: "分页",
                    path: "/vue/pluginList/paging",
                    active: false
                },
                {
                    name: "菜单树",
                    path: "/vue/pluginList/tree",
                    active: false
                },
                {
                    name: "图片放大",
                    path: "/vue/pluginList/imgShow",
                    active: false
                },
                {
                    name: "自动补全",
                    path: "/vue/pluginList/inputAuto",
                    active: false
                },
                {
                    name: "选择框",
                    path: "/vue/pluginList/select",
                    active: false
                },
                {
                    name: "日期选择",
                    path: "/vue/pluginList/dateInput",
                    active: false
                },
                {
                    name: "折叠",
                    path: "/vue/pluginList/foldCollapse",
                    active: false
                },
                {
                    name: "进度条",
                    path: "/vue/pluginList/progress",
                    active: false
                },
                {
                    name: "开关",
                    path: "/vue/pluginList/switcher",
                    active: false
                },
                {
                    name: "地址",
                    path: "/vue/pluginList/address",
                    active: false
                },
                {
                    name: "懒加载",
                    path: "/vue/pluginList/lazyLoad",
                    active: false
                },
                { active: false, path: "/vue/pluginList/progressBar", name: "progressBar" },
                { active: false, path: "/vue/pluginList/scale", name: "伸缩动画" },
                { active: false, path: "/vue/pluginList/rotate", name: "旋转盒子" },
                { active: false, path: "/vue/pluginList/windows", name: "windows开机动画" },
                { active: false, path: "/vue/pluginList/location", name: "地区选择" },
                { active: false, path: "/vue/pluginList/swipe", name: "简单手势" },
                { active: false, path: "/vue/pluginList/step", name: "step引导" },
                { active: false, path: "/vue/pluginList/tap", name: "tap事件" },
                { active: false, path: "/vue/pluginList/scrollView", name: "下拉刷新" },
                { active: false, path: "/vue/pluginList/imgToString", name: "图片转字符" },
                { active: false, path: "/vue/pluginList/dateFormat", name: "日期格式化" }
            ]
        };
    },
    computed: {
        ...mapState({ show: "show" }),
        getHight() {
            let height = "100vh";
            if (window.innerWidth > 800) {
                height = "auto";
            }
            return { height: height, position: "relative" };
        }
    },
    components: {},
    methods: {
        noSHow() {
            var me = this;
            this.$store.commit("noShow");
        }
    },
    beforeMount() {},
    mounted: function() {
        let width = this.$store.state.fontSize * 14;
        if (window.innerWidth > 800) {
            if (document.querySelector(".plugin-content")) {
                width = parseInt(
                    window.getComputedStyle(document.querySelector(".plugin-content"))
                    .width
                );
            }
        }
        this.$store.commit("setWidth", { width: width });
        html2canvas(document.querySelector(".root")).then(canvas => {
            document.body.appendChild(canvas)
        });
    },
    beforeRouteEnter(to, froms, next) {
        next(vm => {
            vm.$store.commit("noShow");
        });
    },
    beforeRouteLeave(to, froms, next) {
        next(vm => {
            vm.$store.commit("noShow");
        });
    },
    beforeRouteUpdate(to, froms, next) {
        this.fade = "slide-left";
        if (to.meta.index > froms.meta.index) {
            this.fade = "slide-right";
        }
        next();
    }
};
</script>
<style>
@media screen and (max-width: 800px) {
    .active {
        transform: translate3d(0, 0, 0) !important;
    }

    .shows {
        transition: transform 0.5s ease-in-out !important;
        transform: translate3d(-100%, 0, 0);
    }
}

.slide-left-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
}

.slide-left-leave {
    opacity: 1;
    transform: translate3d(0, 0, 0);
}

.slide-left-enter-active {
    transition: all 0.25s ease-in-out;
    opacity: 1;
}

.slide-left-leave-active {
    transition: all 0.5s;
    transform: translate3d(100%, 0, 0);
    opacity: 0;
}

.slide-right-leave {
    transform: translate3d(0, 0, 0);
    opacity: 1;
}

.slide-right-leave-active {
    transition: all 0.25s ease-in-out;
    transform: translate3d(-100%, 0, 0);
    opacity: 0;
}

.slide-right-enter {
    transform: translate3d(100%, 0, 0);
    opacity: 0;
}

.slide-right-enter-active {
    transition: all 0.5s;
    opacity: 1;
}
</style>