// Generated at Sun Sep 03 10:03:08 AST 2023 by EGL 7.1.1.v20180914_0609
// No APARs installed.

egl.defineRUIHandler('ruihandlers', 'ARUI', {
	'eze$$fileName': '/ARUIProject/EGLSource/ruihandlers/ARUI.egl',
	'eze$$runtimePropertiesFile': 'ruihandlers/ARUI',
	"constructor" : function()
	{
		egl.egl.jsrt.$ServiceBinder.addBindFile("aruiproject");
		this.ui = new egl.com.ibm.egl.rui.widgets.Box();
		egl.addEmbeddedWidget(this, "ui");
		
		this.DataGrid = new egl.com.ibm.egl.rui.widgets.DataGrid();
		egl.addEmbeddedWidget(this, "DataGrid");
		
		this.aDedicatedEGLService = new egl.egl.jsrt.EGLDedicatedServiceRefWrapper("aDedicatedEGLService", "services.ADedicatedEGLService", "");
		
		this.aRESTService = egl.egl.core.$ServiceLib.bindService("aruiproject","arestservice");
		
		this.aSOAPService = egl.egl.core.$ServiceLib.bindService("aruiproject","asoapservice");
		
		this.iRESTService = egl.egl.core.$ServiceLib.bindService("aruiproject","iarestservice");
		
		this.iSOAPService = egl.egl.core.$ServiceLib.bindService("aruiproject","iasoapservice");
		
		this.value = "";
		this.variation = "";
		this.timeoutLimit = 0;
		this.aString = "";
		this.aRec = new egl.records.ARecord();
		
		this.jsrt$SysVar= new egl.egl.core.SysVar();
		new egl.egl.core.ServiceLib();
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
		try {
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
			var ezert$$2_in = this.value;
			var ezert$$3_ret = function(obj){
				//out type is not nullable
				egl.egl.core.$ServiceLib.throwExceptionIfNecessary(obj, "STRING", false);
				return obj;
			};
			this.aDedicatedEGLService.invokeService(this,
					new egl.egl.jsrt.Delegate(this, egl.ruihandlers.ARUI.prototype.aDedicatedEGLServiceCallback),
					new egl.egl.jsrt.Delegate(this, egl.ruihandlers.ARUI.prototype.aDedicatedEGLServiceExceptionHandler),
					10000,
					"returnValue",
					[ezert$$2_in],
					["S;"],
					"value _return",
					[ezert$$3_ret],
					false,
					"", -1, -1,
					"",
					{});
			;
			var ezert$$4_in = this.value;
			var ezert$$5_ret = function(obj){
				//out type is not nullable
				egl.egl.core.$ServiceLib.throwExceptionIfNecessary(obj, "STRING", false);
				return obj;
			};
			this.aRESTService.invokeService(this,
					new egl.egl.jsrt.Delegate(this, egl.ruihandlers.ARUI.prototype.aRestServiceCallback),
					new egl.egl.jsrt.Delegate(this, egl.ruihandlers.ARUI.prototype.aRestServiceExceptionHandler),
					10000,
					"returnValue",
					[ezert$$4_in],
					["S;"],
					"value _return",
					[ezert$$5_ret],
					false,
					"", -1, -1,
					"",
					{});
			;
			var ezert$$6_in = this.value;
			var ezert$$7_ret = function(obj){
				//out type is not nullable
				egl.egl.core.$ServiceLib.throwExceptionIfNecessary(obj, "STRING", false);
				return obj;
			};
			this.aSOAPService.invokeService(this,
					new egl.egl.jsrt.Delegate(this, egl.ruihandlers.ARUI.prototype.aSOAPServiceCallback),
					new egl.egl.jsrt.Delegate(this, egl.ruihandlers.ARUI.prototype.aSOAPServiceExceptionHandler),
					10000,
					"returnValue",
					[ezert$$6_in],
					["S;"],
					"value _return",
					[ezert$$7_ret],
					false,
					"", -1, -1,
					"",
					{});
			;
			var ezert$$8_in = this.value;
			var ezert$$9_ret = function(obj){
				//out type is not nullable
				egl.egl.core.$ServiceLib.throwExceptionIfNecessary(obj, "STRING", false);
				return obj;
			};
			this.iRESTService.invokeService(this,
					new egl.egl.jsrt.Delegate(this, egl.ruihandlers.ARUI.prototype.iRestServiceCallback),
					new egl.egl.jsrt.Delegate(this, egl.ruihandlers.ARUI.prototype.iRestServiceExceptionHandler),
					10000,
					"returnValue",
					[ezert$$8_in],
					["S;"],
					"value _return",
					[ezert$$9_ret],
					false,
					"", -1, -1,
					"",
					{});
			;
			var ezert$$10_in = this.value;
			var ezert$$11_ret = function(obj){
				//out type is not nullable
				egl.egl.core.$ServiceLib.throwExceptionIfNecessary(obj, "STRING", false);
				return obj;
			};
			this.iSOAPService.invokeService(this,
					new egl.egl.jsrt.Delegate(this, egl.ruihandlers.ARUI.prototype.iSOAPServiceCallback),
					new egl.egl.jsrt.Delegate(this, egl.ruihandlers.ARUI.prototype.iSOAPServiceExceptionHandler),
					10000,
					"returnValue",
					[ezert$$10_in],
					["S;"],
					"value _return",
					[ezert$$11_ret],
					false,
					"", -1, -1,
					"",
					{});
			;
		}
		catch ( ezert$$12 )
		{
			{
				if (!(ezert$$12 instanceof egl.egl.core.AnyException)) {
					ezert$$12 = egl.makeExceptionFromCaughtObject(ezert$$12);
				}
				var ex = ezert$$12;
				this.failure();
				this.exception(egl.convertAnyExToNameType(ex,'Tegl/core/ServiceInvocationException;'), function(eze$$inout$ex) {
				}, this );
			}
		}
		
	}
	,
	"aDedicatedEGLServiceCallback": function( value ) {
		this.variation = "ARUIHandler: aDedicatedEGLService access";
		if ( (this.value == value) ) {
			this.success();
		}
		else {
			this.failure();
		}
		
	}
	,
	"aDedicatedEGLServiceExceptionHandler": function( ex ) {
		this.variation = "ARUIHandler: aDedicatedEGLService access";
		this.failure();
		this.exception(egl.convertAnyExToNameType(ex,'Tegl/core/ServiceInvocationException;'), function(eze$$inout$ex) {
		}, this );
		
	}
	,
	"aRestServiceCallback": function( value ) {
		this.setRESTVariation();
		if ( (this.value == value) ) {
			this.success();
		}
		else {
			this.failure();
		}
		
	}
	,
	"aRestServiceExceptionHandler": function( ex ) {
		this.setRESTVariation();
		this.failure();
		this.exception(egl.convertAnyExToNameType(ex,'Tegl/core/ServiceInvocationException;'), function(eze$$inout$ex) {
		}, this );
		
	}
	,
	"setRESTVariation": function() {
		this.variation = ("ARUIHandler: ARESTService access at " + egl.egl.core.$ServiceLib.getRestServiceLocation(this.aRESTService));
		
	}
	,
	"iRestServiceCallback": function( value ) {
		this.setiRESTVariation();
		if ( (this.value == value) ) {
			this.success();
		}
		else {
			this.failure();
		}
		
	}
	,
	"iRestServiceExceptionHandler": function( ex ) {
		this.setiRESTVariation();
		this.failure();
		this.exception(egl.convertAnyExToNameType(ex,'Tegl/core/ServiceInvocationException;'), function(eze$$inout$ex) {
		}, this );
		
	}
	,
	"setiRESTVariation": function() {
		this.variation = ("ARUIHandler: IARESTService access at " + egl.egl.core.$ServiceLib.getRestServiceLocation(this.iRESTService));
		
	}
	,
	"aSOAPServiceCallback": function( value ) {
		this.setSOAPVariation();
		if ( (this.value == value) ) {
			this.success();
		}
		else {
			this.failure();
		}
		
	}
	,
	"aSOAPServiceExceptionHandler": function( ex ) {
		this.setSOAPVariation();
		this.failure();
		this.exception(egl.convertAnyExToNameType(ex,'Tegl/core/ServiceInvocationException;'), function(eze$$inout$ex) {
		}, this );
		
	}
	,
	"setSOAPVariation": function() {
		this.variation = ("ARUIHandler: ASOAPService access at " + egl.egl.core.$ServiceLib.getWebServiceLocation(this.aSOAPService));
		
	}
	,
	"iSOAPServiceCallback": function( value ) {
		this.setiSOAPVariation();
		if ( (this.value == value) ) {
			this.success();
		}
		else {
			this.failure();
		}
		
	}
	,
	"iSOAPServiceExceptionHandler": function( ex ) {
		this.setiSOAPVariation();
		this.failure();
		this.exception(egl.convertAnyExToNameType(ex,'Tegl/core/ServiceInvocationException;'), function(eze$$inout$ex) {
		}, this );
		
	}
	,
	"setiSOAPVariation": function() {
		this.variation = ("ARUIHandler: IASOAPService access at " + egl.egl.core.$ServiceLib.getWebServiceLocation(this.iSOAPService));
		
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
			var ezert$$13 = new egl.egl.Dictionary();
			egl.valueByKey(egl.checkNull(ezert$$13), "result",result,"S;");
			return ezert$$13;
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
		return "[ARUI]";
	}
}
);
