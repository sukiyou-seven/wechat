import App from './App'
import uView from "uview-ui";


// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
Vue.use(uView);
console.log("ifndef");
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3 
import {
	createSSRApp
} from 'vue'
export function createApp() {
	console.log("ifdef"); 
	const app = createSSRApp(App)
	app.use(uView)
	return {
		app
	}
}
// #endif
