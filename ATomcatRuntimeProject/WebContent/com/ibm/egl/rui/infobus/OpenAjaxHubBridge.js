egl.defineClass("com.ibm.egl.rui.infobus","OpenAjaxHubBridge",{"publish":function(_1,_2){
if(egl.enableEditing){
return;
}
OpenAjax.hub.publish(_1,_2);
},"subscribe":function(_3,_4){
if(egl.enableEditing){
return {};
}
return OpenAjax.hub.subscribe(_3,function(_5,_6){
_4(_5,egl.boxAny(_6));
},null,null,null);
},"unsubscribe":function(_7){
if(egl.enableEditing){
return;
}
return OpenAjax.hub.unsubscribe(_7);
}});
