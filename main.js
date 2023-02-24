import App from './App'
import uView from "uview-ui";


// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
Vue.use(uView);
App.mpType = 'app'
const app = new Vue({
	...App
})
require('@/config/request.js')(app);
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
