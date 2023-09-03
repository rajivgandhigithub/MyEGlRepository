// Generated at Sun Sep 03 10:03:11 AST 2023 by EGL 7.1.1.v20180914_0609
// No APARs installed.
egl.defineRUILibrary( 'com.ibm.egl.rui.widgets', 'TreeBehaviors',
	{
		'eze$$fileName': '/com.ibm.egl.rui_4.1.0/EGLSource/com/ibm/egl/rui/widgets/TreeBehaviors.egl',
		'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/widgets/TreeBehaviors',
		"constructor" : function()
		{
			if(egl.com.ibm.egl.rui.widgets.TreeBehaviors['$inst']){
				return egl.com.ibm.egl.rui.widgets.TreeBehaviors['$inst'];
			}
			egl.com.ibm.egl.rui.widgets.TreeBehaviors['$inst']=this;
			this.jsrt$SysVar= new egl.egl.core.SysVar();
		}
		
		,
		"pointer": function( node ) {
			egl.checkNull(node).setCursor("pointer");
			
		}
		,
		"toString": function() {
			return "[TreeBehaviors]";
		}
	}
);
