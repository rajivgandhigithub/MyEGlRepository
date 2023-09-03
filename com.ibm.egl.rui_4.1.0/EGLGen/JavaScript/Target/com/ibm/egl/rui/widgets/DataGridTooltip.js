// Generated at Sun Sep 03 10:03:13 AST 2023 by EGL 7.1.1.v20180914_0609
// No APARs installed.

egl.defineClass('com.ibm.egl.rui.widgets', 'DataGridTooltip', {
	'eze$$fileName': '/com.ibm.egl.rui_4.1.0/EGLSource/com/ibm/egl/rui/widgets/DataGridTooltip.egl',
	'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/widgets/DataGridTooltip',
	"constructor" : function()
	{
		this.provider = null;
		
		this.grid = null;
		egl.addEmbeddedWidget(this, "grid");
		
		this.tooltip = new egl.com.ibm.egl.rui.widgets.Tooltip();
		egl.addEmbeddedWidget(this, "tooltip");
		
		this.jsrt$SysVar= new egl.egl.core.SysVar();
		egl.checkNull(this.tooltip).provider = new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.DataGridTooltip.prototype.getTooltipContents);
	}
	
	,
	"setTooltips": function( grid, td, row, dataIndex, column ) {
		egl.checkNull(this.tooltip).enable(td );
		this.grid = grid;
		
	}
	,
	"getTooltipContents": function( widget ) {
		var $result = null;
		var td = null;
		td = egl.convertAnyToRefType(widget,"Tegl/ui/rui/widget;",egl.egl.ui.rui.Widget);
		var row = null;
		row = egl.boxAny(egl.checkNull(this.grid).getData()[egl.checkNull(this.grid).getData().checkIndex((egl.convertAnyToInt(egl.boxAny(td.getAttribute("row" )),false))-1)]);
		var column = null;
		column = egl.checkNull(this.grid).getColumn(td );
		var tip = null;
		tip = this.provider(row, egl.checkNull(column).name, td );
		$result = tip;
		return $result;
	}
	,
	"toString": function() {
		return "[DataGridTooltip]";
	}
}
);
