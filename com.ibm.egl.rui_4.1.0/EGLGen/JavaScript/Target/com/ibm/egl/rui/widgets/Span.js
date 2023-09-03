// Generated at Sun Sep 03 10:03:11 AST 2023 by EGL 7.1.1.v20180914_0609
// No APARs installed.

egl.defineRUIWidget('com.ibm.egl.rui.widgets', 'Span', {
	'eze$$fileName': '/com.ibm.egl.rui_4.1.0/EGLSource/com/ibm/egl/rui/widgets/Span.egl',
	'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/widgets/Span',
	"constructor" : function()
	{
		this.text = "";
		this.jsrt$SysVar= new egl.egl.core.SysVar();
	}
	
	,
	"setText": function( textIn ) {
		this.setInnerHTML(textIn);
		
	}
	,
	"getText": function() {
		var $result = "";
		$result = this.getInnerHTML();
		return $result;
	}
	,
	"toString": function() {
		return "[Span]";
	}
}
, 'span'
);
