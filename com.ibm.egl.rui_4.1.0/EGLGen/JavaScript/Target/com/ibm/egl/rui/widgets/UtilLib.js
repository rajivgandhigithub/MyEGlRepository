// Generated at Sun Sep 03 10:03:11 AST 2023 by EGL 7.1.1.v20180914_0609
// No APARs installed.
egl.defineRUILibrary( 'com.ibm.egl.rui.widgets', 'UtilLib',
	{
		'eze$$fileName': '/com.ibm.egl.rui_4.1.0/EGLSource/com/ibm/egl/rui/widgets/UtilLib.egl',
		'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/widgets/UtilLib',
		"constructor" : function()
		{
			if(egl.com.ibm.egl.rui.widgets.UtilLib['$inst']){
				return egl.com.ibm.egl.rui.widgets.UtilLib['$inst'];
			}
			egl.com.ibm.egl.rui.widgets.UtilLib['$inst']=this;
			this.utilNative = new egl.com.ibm.egl.rui.widgets.UtilLibNative();
			
			this.serialNum = 0;
			this.jsrt$SysVar= new egl.egl.core.SysVar();
			this.serialNum = 0;
		}
		
		,
		"getSerial": function() {
			var $result = 0;
			this.serialNum = (this.serialNum + 1);
			$result = this.serialNum;
			return $result;
		}
		,
		"getWidgetVariableName": function( widget ) {
			var $result = "";
			$result = this.utilNative.getWidgetVariableName(widget );
			return $result;
		}
		,
		"destroyWidget": function( widget ) {
			this.utilNative.destroyWidget(widget );
			
		}
		,
		"destroyWidgetChildren": function( widget ) {
			if ( (widget == null) ) {
				return;
			}
			if ( egl.isa(widget, "Tcom/ibm/egl/rui/widgets/box;") ) {
				var box = null;
				box = widget;
				this.utilNative.destroyWidgetChildren(egl.checkNull(box).body );
				egl.checkNull(box).removeChildren();
				return;
			}
			if ( egl.isa(widget, "Tcom/ibm/egl/rui/widgets/gridlayout;") ) {
				var gridLayout = null;
				gridLayout = widget;
				this.utilNative.destroyWidgetChildren(egl.checkNull(gridLayout).table );
				egl.checkNull(gridLayout).removeChildren();
				return;
			}
			this.utilNative.destroyWidgetChildren(widget );
			
		}
		,
		"toString": function() {
			return "[UtilLib]";
		}
	}
);
