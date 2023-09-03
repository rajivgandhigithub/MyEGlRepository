// Generated at Sun Sep 03 10:03:11 AST 2023 by EGL 7.1.1.v20180914_0609
// No APARs installed.

egl.defineRUIWidget('com.ibm.egl.rui.widgets', 'Image', {
	'eze$$fileName': '/com.ibm.egl.rui_4.1.0/EGLSource/com/ibm/egl/rui/widgets/Image.egl',
	'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/widgets/Image',
	"constructor" : function()
	{
		this.text = "";
		this.src = "";
		this.jsrt$SysVar= new egl.egl.core.SysVar();
	}
	
	,
	"getText": function() {
		var $result = "";
		$result = this.text;
		return $result;
	}
	,
	"setText": function( textIn ) {
		this.text = textIn;
		this.setAttribute("alt", {eze$$value : this.text, eze$$signature : "S;"} );
		
	}
	,
	"getSrc": function() {
		var $result = "";
		$result = this.src;
		return $result;
	}
	,
	"setSrc": function( srcIn ) {
		this.src = srcIn;
		this.setAttribute("src", {eze$$value : this.src, eze$$signature : "S;"} );
		
	}
	,
	"setWidth": function( w ) {
		this.setAttribute("width", {eze$$value : w, eze$$signature : "I;"} );
		
	}
	,
	"setHeight": function( h ) {
		this.setAttribute("height", {eze$$value : h, eze$$signature : "I;"} );
		
	}
	,
	"toString": function() {
		return "[Image]";
	}
}
, 'img'
);
