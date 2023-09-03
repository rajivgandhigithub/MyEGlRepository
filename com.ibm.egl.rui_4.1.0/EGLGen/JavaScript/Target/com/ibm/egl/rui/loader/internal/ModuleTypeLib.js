// Generated at Sun Sep 03 10:03:15 AST 2023 by EGL 7.1.1.v20180914_0609
// No APARs installed.
egl.defineRUILibrary( 'com.ibm.egl.rui.loader.internal', 'ModuleTypeLib',
	{
		'eze$$fileName': '/com.ibm.egl.rui_4.1.0/EGLSource/com/ibm/egl/rui/loader/internal/ModuleTypeLib.egl',
		'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/loader/internal/ModuleTypeLib',
		"constructor" : function()
		{
			if(egl.com.ibm.egl.rui.loader.internal.ModuleTypeLib['$inst']){
				return egl.com.ibm.egl.rui.loader.internal.ModuleTypeLib['$inst'];
			}
			egl.com.ibm.egl.rui.loader.internal.ModuleTypeLib['$inst']=this;
			this.jsrt$SysVar= new egl.egl.core.SysVar();
			this.css = "cssFile";
			this.property = "propertyFile";
			this.imports = "importFile";
			this.runtimeProperty = "runtimePropertyFile";
			this.include = "includeFile";
		}
		
		,
		"toString": function() {
			return "[ModuleTypeLib]";
		}
	}
);
