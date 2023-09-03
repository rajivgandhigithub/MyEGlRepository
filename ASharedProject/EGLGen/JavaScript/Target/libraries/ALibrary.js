// Generated at Sun Sep 03 10:02:44 AST 2023 by EGL 7.1.1.v20180914_0609
// No APARs installed.
egl.defineRUILibrary( 'libraries', 'ALibrary',
	{
		'eze$$fileName': '/ASharedProject/EGLSource/libraries/ALibrary.egl',
		'eze$$runtimePropertiesFile': 'libraries/ALibrary',
		"constructor" : function()
		{
			if(egl.libraries.ALibrary['$inst']){
				return egl.libraries.ALibrary['$inst'];
			}
			egl.libraries.ALibrary['$inst']=this;
			this.value = "";
			this.aRec = new egl.records.ARecord();
			
			this.jsrt$SysVar= new egl.egl.core.SysVar();
			this.value = "ALibrary value";
		}
		
		,
		"setValue": function( value, eze$$value$func_, eze$$caller ) {
			this.value = value;
			
		}
		,
		"getValue": function() {
			var $result = "";
			$result = this.getValueFunction();
			return $result;
		}
		,
		"getValueFunction": function() {
			var $result = "";
			this.aRec.aString = this.value;
			$result = this.aRec.aString;
			return $result;
		}
		,
		"toString": function() {
			return "[ALibrary]";
		}
	}
);
