import axios from 'axios'
axios.defaults.baseURL="https://nodom.store";
axios.interceptors.request.use((config)=>{
	// config.data=JSON.stringify(config.data);
	config.headers={
		'Content-Type':'application/x-www-form-urlencoded'
	}
	return config;
},(err)=>{
	return Promise.reject(err);
});
export default axios;