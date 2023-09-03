// Generated at Sun Sep 03 10:03:11 AST 2023 by EGL 7.1.1.v20180914_0609
// No APARs installed.

egl.defineRUIWidget('com.ibm.egl.rui.widgets', 'Shadow', {
	'eze$$fileName': '/com.ibm.egl.rui_4.1.0/EGLSource/com/ibm/egl/rui/widgets/Shadow.egl',
	'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/widgets/Shadow',
	"constructor" : function()
	{
		this.div = new egl.com.ibm.egl.rui.widgets.Div();
		egl.addEmbeddedWidget(this, "div");
		
		this.jsrt$SysVar= new egl.egl.core.SysVar();
		new egl.com.ibm.egl.rui.widgets.UtilLib();
		egl.checkNull(this.div).setClass("eze$$tempDiv");
	}
	
	,
	"setDiv": function( div ) {
		if ( (egl.checkNull(this.div).getClass() == "eze$$tempDiv") ) {
			egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].destroyWidget(this.div );
		}
		this.setClass("EglRuiShadowDiv1");
		this.appendChild((function () {
			var ezert$$1 = new egl.com.ibm.egl.rui.widgets.Div();
			egl.checkNull(ezert$$1).setClass("EglRuiShadowDiv2");
			egl.checkNull(ezert$$1).setChildren( [ (function () {
				var ezert$$2 = new egl.com.ibm.egl.rui.widgets.Div();
				egl.checkNull(ezert$$2).setClass("EglRuiShadowDiv3");
				egl.checkNull(ezert$$2).setChildren( [ div ] );
				return ezert$$2;
			}).call(this) ] );
			return ezert$$1;
		}).call(this) );
		egl.checkNull(div).setClass((egl.checkNull(div).getClass() + " EglRuiShadowDiv4"));
		this.div = div;
		
	}
	,
	"getDiv": function() {
		var $result = null;
		$result = this.div;
		return $result;
	}
	,
	"toString": function() {
		return "[Shadow]";
	}
}
, 'div'
);
