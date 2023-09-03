// Generated at Sun Sep 03 10:03:15 AST 2023 by EGL 7.1.1.v20180914_0609
// No APARs installed.
egl.defineRUILibrary( 'com.ibm.egl.rui.mvc', 'MVCLib',
	{
		'eze$$fileName': '/com.ibm.egl.rui_4.1.0/EGLSource/com/ibm/egl/rui/mvc/MVCLib.egl',
		'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/mvc/MVCLib',
		"constructor" : function()
		{
			if(egl.com.ibm.egl.rui.mvc.MVCLib['$inst']){
				return egl.com.ibm.egl.rui.mvc.MVCLib['$inst'];
			}
			egl.com.ibm.egl.rui.mvc.MVCLib['$inst']=this;
			this.currentController = null;
			
			this.jsrt$SysVar= new egl.egl.core.SysVar();
			this.currentController = null;
		}
		
		,
		"getCurrentContext": function() {
			var $result = null;
			$result = this.currentController;
			return $result;
		}
		,
		"setCurrentContext": function( acontroller ) {
			this.currentController = acontroller;
			
		}
		,
		"toString": function() {
			return "[MVCLib]";
		}
	}
);
