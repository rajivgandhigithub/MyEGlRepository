// Generated at Sun Sep 03 10:03:14 AST 2023 by EGL 7.1.1.v20180914_0609
// No APARs installed.
egl.defineRUILibrary( 'com.ibm.egl.rui.mvc', 'InternalMessageLib',
	{
		'eze$$fileName': '/com.ibm.egl.rui_4.1.0/EGLSource/com/ibm/egl/rui/mvc/InternalMessageLib.egl',
		'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/mvc/InternalMessageLib',
		"constructor" : function()
		{
			if(egl.com.ibm.egl.rui.mvc.InternalMessageLib['$inst']){
				return egl.com.ibm.egl.rui.mvc.InternalMessageLib['$inst'];
			}
			egl.com.ibm.egl.rui.mvc.InternalMessageLib['$inst']=this;
			this.jsrt$SysVar= new egl.egl.core.SysVar();
			new egl.egl.core.SysLib();
		}
		
		,
		"getRuntimeErrorMessage": function( msgKey, defaultMsgId, inserts ) {
			var $result = "";
			var messageValue = "";
			if ( (msgKey == "") ) {
				messageValue = (function(x){ return x !== null ? ((x).toString()) : ""; })(egl.getRuntimeMessage( defaultMsgId, inserts ));
			}
			else {
				messageValue = msgKey;
			}
			$result = messageValue;
			return $result;
		}
		,
		"toString": function() {
			return "[InternalMessageLib]";
		}
	}
);
