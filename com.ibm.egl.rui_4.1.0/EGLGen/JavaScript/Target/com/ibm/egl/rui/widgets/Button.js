// Generated at Sun Sep 03 10:03:13 AST 2023 by EGL 7.1.1.v20180914_0609
// No APARs installed.

egl.defineRUIWidget('com.ibm.egl.rui.widgets', 'Button', {
	'eze$$fileName': '/com.ibm.egl.rui_4.1.0/EGLSource/com/ibm/egl/rui/widgets/Button.egl',
	'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/widgets/Button',
	"constructor" : function()
	{
		this.text = "";
		this.jsrt$SysVar= new egl.egl.core.SysVar();
	}
	
	,
	"setText": function( textIn ) {
		this.text = textIn;
		this.setAttribute("value", {eze$$value : textIn, eze$$signature : "S;"} );
		var isVisual = false;
		isVisual = (this.getTextLayout() == "Visual");
		var isReverseDirection = false;
		isReverseDirection = (this.getReverseTextDirection() == "Yes");
		if ( (isVisual || isReverseDirection) ) {
			this.setBiDiMarkers(isVisual, isReverseDirection );
		}
		
	}
	,
	"getText": function() {
		var $result = "";
		if ( ((this.getTextLayout() == "Visual") || (this.getReverseTextDirection() == "Yes")) ) {
			this.cleanBiDiMarkers();
		}
		$result = egl.convertAnyToString(this.getAttribute("value" ),false);
		return $result;
	}
	,
	"toString": function() {
		return "[Button]";
	}
}
, 'input type=button'
);
