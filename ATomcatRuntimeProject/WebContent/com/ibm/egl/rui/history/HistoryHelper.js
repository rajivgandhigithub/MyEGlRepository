egl.defineClass("com.ibm.egl.rui.history","HistoryHelper",{"setLocationHash":function(_1){
document.location.hash=encodeURIComponent(_1);
},"getLocationHash":function(){
return decodeURIComponent(document.location.hash.replace(/.*#/,""));
},"setLocationHref":function(_2){
document.location.href=_2;
},"getLocationHref":function(){
return document.location.href;
},"setOnbeforeUnload":function(_3){
window.onbeforeunload=_3;
},"getFrameSrc":function(_4){
return String(_4.eze$$DOMElement.contentWindow.document.location);
},"goBack":function(){
history.back();
},"goForward":function(){
history.forward();
},"setFrameSrc":function(_5,_6){
_5.eze$$DOMElement.src=_6;
},"isIE":function(){
return egl.IE;
},"inVisualEditorDesignMode":function(){
return egl.enableEditing;
}});
