// Generated at Sun Sep 03 10:03:14 AST 2023 by EGL 7.1.1.v20180914_0609
// No APARs installed.
egl.defineRUILibrary( 'com.ibm.egl.rui.mvc', 'InternalFormatters',
	{
		'eze$$fileName': '/com.ibm.egl.rui_4.1.0/EGLSource/com/ibm/egl/rui/mvc/InternalFormatters.egl',
		'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/mvc/InternalFormatters',
		"constructor" : function()
		{
			if(egl.com.ibm.egl.rui.mvc.InternalFormatters['$inst']){
				return egl.com.ibm.egl.rui.mvc.InternalFormatters['$inst'];
			}
			egl.com.ibm.egl.rui.mvc.InternalFormatters['$inst']=this;
			this.jsrt$SysVar= new egl.egl.core.SysVar();
			new egl.egl.core.StrLib();
		}
		
		,
		"toLowercase": function( s ) {
			var $result = "";
			$result = (function(x){ return x !== null ? ((x).toString()) : ""; })(egl.egl.core.$StrLib.lowerCase( s));
			return $result;
		}
		,
		"addDollarSign": function( s ) {
			var $result = "";
			$result = ("$" + this.removeDollarSign(s ));
			return $result;
		}
		,
		"removeDollarSign": function( s ) {
			var $result = "";
			var index = 0;
			index = egl.egl.core.$StrLib.indexOf( s, ("$"));
			if ( (index > 0) ) {
				$result = (s.substring( 1-1,(index - 1)) + s.substring( (index + 1)-1,egl.egl.core.$StrLib.textLen( s)));
				return $result;
			}
			$result = s;
			return $result;
		}
		,
		"toString": function() {
			return "[InternalFormatters]";
		}
	}
);
