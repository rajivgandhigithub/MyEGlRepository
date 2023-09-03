// Generated at Sun Sep 03 10:03:08 AST 2023 by EGL 7.1.1.v20180914_0609
// No APARs installed.

egl.defineRUIHandler('ruihandlers', 'ASimpleRUI', {
	'eze$$fileName': '/ARUIProject/EGLSource/ruihandlers/ASimpleRUI.egl',
	'eze$$runtimePropertiesFile': 'ruihandlers/ASimpleRUI',
	"constructor" : function()
	{
		this.ui = new egl.com.ibm.egl.rui.widgets.Box();
		egl.addEmbeddedWidget(this, "ui");
		
		this.DataGrid = new egl.com.ibm.egl.rui.widgets.DataGrid();
		egl.addEmbeddedWidget(this, "DataGrid");
		
		this.value = "";
		this.variation = "";
		this.timeoutLimit = 0;
		this.aString = "";
		this.aRec = new egl.records.ARecord();
		
		this.jsrt$SysVar= new egl.egl.core.SysVar();
		new egl.libraries.ALibrary();
		this.initialUI = [ this.ui ];
		egl.checkNull(this.ui).setChildren( [ this.DataGrid ] );
		egl.checkNull(this.DataGrid).behaviors = [  ].setType( "Tcom/ibm/egl/rui/widgets/datacellbehavior;" );
		egl.checkNull(this.DataGrid).headerBehaviors = [  ].setType( "Tcom/ibm/egl/rui/widgets/datacellbehavior;" );
		egl.checkNull(this.DataGrid).setColumns([ (function () {
			var ezert$$1 = new egl.com.ibm.egl.rui.widgets.DataGridColumn();
			egl.checkNull(ezert$$1).name = "result";
			egl.checkNull(ezert$$1).displayName = "Results";
			egl.checkNull(ezert$$1).width = (800).toString();
			return ezert$$1;
		}).call(this) ].setType( "Tcom/ibm/egl/rui/widgets/datagridcolumn;" ));
		egl.checkNull(this.DataGrid).setData([  ].setType( "A;" ));
		this.value = "ARUIHandler value";
		this.timeoutLimit = (10 * 1000);
		this.start();
	}
	
	,
	"start": function() {
		this.variation = "ARUIHandler: ARUIHandler started";
		this.success();
		this.variation = "ARUIHandler: GetValueFunction stand alone function part access";
		if ( (this.getValueFunction() == this.value) ) {
			this.success();
		}
		else {
			this.failure();
		}
		this.variation = "ARUIHandler: ALibrary access";
		egl.libraries.ALibrary['$inst'].setValue(this.value, function(eze$$inout$value) {
			this.value = eze$$inout$value;
		}, this );
		if ( (egl.libraries.ALibrary['$inst'].getValue() == this.value) ) {
			this.success();
		}
		else {
			this.failure();
		}
		this.variation = "ARUIHandler: ALibrary access using shared item type";
		this.aString = this.value;
		egl.libraries.ALibrary['$inst'].setValue(this.aString, function(eze$$inout$value) {
			this.aString = eze$$inout$value;
		}, this );
		if ( (egl.libraries.ALibrary['$inst'].getValue() == this.value) ) {
			this.success();
		}
		else {
			this.failure();
		}
		this.variation = "ARUIHandler: ALibrary access using shared record type";
		this.aRec.aString = this.value;
		egl.libraries.ALibrary['$inst'].setValue(this.aRec.aString, function(eze$$inout$value) {
			this.aRec.aString = eze$$inout$value;
		}, this );
		if ( (egl.libraries.ALibrary['$inst'].getValue() == this.value) ) {
			this.success();
		}
		else {
			this.failure();
		}
		
	}
	,
	"success": function() {
		this.showResult(("Success - " + this.variation) );
		
	}
	,
	"failure": function() {
		this.showResult(("Failure - " + this.variation) );
		
	}
	,
	"exception": function( ex, eze$$ex$func_, eze$$caller ) {
		this.showResult(((((((("Exception Message: " + egl.checkNull(ex).message) + ", ") + egl.checkNull(ex).detail1) + ", ") + egl.checkNull(ex).detail2) + ", ") + egl.checkNull(ex).detail3) );
		
	}
	,
	"showResult": function( result ) {
		egl.checkNull(this.DataGrid).getData().appendElement( (function(x){ return x !== null ? ({eze$$value : x, eze$$signature : "y;"}) : null; })((function () {
			var ezert$$2 = new egl.egl.Dictionary();
			egl.valueByKey(egl.checkNull(ezert$$2), "result",result,"S;");
			return ezert$$2;
		}).call(this)) );
		egl.checkNull(this.DataGrid).render();
		
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
		return "[ASimpleRUI]";
	}
}
);
