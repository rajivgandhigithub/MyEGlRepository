// Generated at Sun Sep 03 10:03:13 AST 2023 by EGL 7.1.1.v20180914_0609
// No APARs installed.
egl.defineRUILibrary( 'com.ibm.egl.rui.widgets', 'DataGridLib',
	{
		'eze$$fileName': '/com.ibm.egl.rui_4.1.0/EGLSource/com/ibm/egl/rui/widgets/DataGridLib.egl',
		'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/widgets/DataGridLib',
		"constructor" : function()
		{
			if(egl.com.ibm.egl.rui.widgets.DataGridLib['$inst']){
				return egl.com.ibm.egl.rui.widgets.DataGridLib['$inst'];
			}
			egl.com.ibm.egl.rui.widgets.DataGridLib['$inst']=this;
			this.util = new egl.com.ibm.egl.rui.widgets.DataGridUtil();
			
			this.jsrt$SysVar= new egl.egl.core.SysVar();
			this.ALIGN_RIGHT = 2;
			this.ALIGN_LEFT = 0;
			this.ALIGN_CENTER = 1;
			this.DISABLE_SELECTION = 0;
			this.SINGLE_SELECTION = 1;
			this.MULTIPLE_SELECTION = 2;
			this.SORT_NONE = 0;
			this.SORT_DOWN = 1;
			this.SORT_UP = 2;
		}
		
		,
		"toString": function() {
			return "[DataGridLib]";
		}
	}
);
