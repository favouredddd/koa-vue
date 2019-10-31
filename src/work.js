importScripts('/assets/highlight.js');
const map={};
onmessage = (event) => {
  if(map[event.data]){
    postMessage(map[event.data]);
    return;
  }
  const result = self.hljs.highlightAuto(event.data);
  map[event.data]=result.value;
  postMessage(result.value);
};