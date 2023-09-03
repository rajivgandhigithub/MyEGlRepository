// Generated at Sun Sep 03 10:03:12 AST 2023 by EGL 7.1.1.v20180914_0609
// No APARs installed.

egl.defineRUIWidget('com.ibm.egl.rui.widgets', 'Grouping', {
	'eze$$fileName': '/com.ibm.egl.rui_4.1.0/EGLSource/com/ibm/egl/rui/widgets/Grouping.egl',
	'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/widgets/Grouping',
	"constructor" : function()
	{
		this.text = "";
		this.legend = new egl.egl.ui.rui.Widget();
		egl.addEmbeddedWidget(this, "legend");
		
		this.contents = new egl.com.ibm.egl.rui.widgets.Div();
		egl.addEmbeddedWidget(this, "contents");
		
		this.fieldset = new egl.egl.ui.rui.Widget();
		egl.addEmbeddedWidget(this, "fieldset");
		
		this.jsrt$SysVar= new egl.egl.core.SysVar();
		this.targetWidget = this.fieldset;
		this.legend.setTagName( "legend" );
		this.fieldset.setTagName( "fieldset" );
		this.fieldset.setChildren( [ this.legend, this.contents ] );
	}
	
	,
	"setText": function( text ) {
		this.legend.setInnerHTML( text );
		
	}
	,
	"getText": function() {
		var $result = "";
		$result = this.legend.getInnerHTML();
		return $result;
	}
	,
	"removeChildren": function() {
		egl.checkNull(this.contents).removeChildren();
		
	}
	,
	"setChildren": function( children ) {
		egl.checkNull(this.contents).setChildren(children );
		
	}
	,
	"getChildren": function() {
		var $result = null;
		$result = egl.checkNull(this.contents).getChildren();
		return $result;
	}
	,
	"appendChild": function( newChild ) {
		egl.checkNull(this.contents).appendChild(newChild );
		
	}
	,
	"setLegend": function( widget ) {
		this.legend = widget;
		this.fieldset.setChildren( [ this.legend, this.contents ] );
		
	}
	,
	"getLegend": function() {
		var $result = null;
		$result = this.legend;
		return $result;
	}
	,
	"toString": function() {
		return "[Grouping]";
	}
}
);
