// Generated at Sun Sep 03 10:03:12 AST 2023 by EGL 7.1.1.v20180914_0609
// No APARs installed.

egl.defineRUIWidget('com.ibm.egl.rui.widgets', 'TextLabel', {
	'eze$$fileName': '/com.ibm.egl.rui_4.1.0/EGLSource/com/ibm/egl/rui/widgets/TextLabel.egl',
	'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/widgets/TextLabel',
	"constructor" : function()
	{
		this.text = "";
		this.widgetOrientationThis = "";
		this.jsrt$SysVar= new egl.egl.core.SysVar();
		this.widgetOrientationThis = "";
	}
	
	,
	"setText": function( textIn ) {
		this.text = textIn;
		this.setInnerText(this.text);
		
	}
	,
	"getText": function() {
		var $result = "";
		$result = this.text;
		return $result;
	}
	,
	"getWidgetOrientation": function() {
		var $result = "";
		$result = this.widgetOrientationThis;
		return $result;
	}
	,
	"setWidgetOrientation": function( widgetOrientation ) {
		this.widgetOrientationThis = widgetOrientation;
		if ( (widgetOrientation == "RTL") ) {
			this.setStyle("text-align: right;");
			if ( (this.getTextLayout() != "Visual") ) {
				this.setAttribute("dir", {eze$$value : "ltr", eze$$signature : "S;"} );
			}
		}
		else {
			this.setStyle("text-align: left;");
		}
		
	}
	,
	"toString": function() {
		return "[TextLabel]";
	}
}
, 'div'
);
