import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export default new Vuex.Store({
	state:{
		name:"jack",
		show:false,
		fontSize:0,
		width:0,
	},
	actions:{
		getName:function(){
			var me=this;
		}
	},
	mutations:{
		setWidth(state,params){
			state.width=params.width;
		},
		show(state){
			state.show=true;
		},
		noShow(state){
			state.show=false;
		},
		setFontSize(state, params){
			state.fontSize=params.size;
		}
	}
});