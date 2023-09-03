// Generated at Sun Sep 03 10:03:08 AST 2023 by EGL 7.1.1.v20180914_0609
// No APARs installed.

egl.defineRUIHandler('ruihandlers', 'ARUI', {
	'eze$$fileName': '/ARUIProject/EGLSource/ruihandlers/ARUI.egl',
	'eze$$runtimePropertiesFile': 'ruihandlers/ARUI',
	"constructor" : function()
	{
		var eze$$this = this;
		var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
			if (!ezeGetter) {
				eval(ezeName);
			}
			if (ezeSetter) {
				eval(ezeSetter + "(" + ezeValue + ")");
			} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
				eval(ezeName + ".eze$$value = " + ezeValue);
			} else {
				eval(ezeName + " = " + ezeValue);
			}
			if (ezeGetter) {
				return eval(ezeGetter);
			}
			return eval(ezeName);
		}
		try { egl.enter("<init>",this,arguments,eze$$updater);
			egl.egl.jsrt.$ServiceBinder.addBindFile("aruiproject");
			egl.atLine(this.eze$$fileName,17,455,34, this);
			this.ui = new egl.com.ibm.egl.rui.widgets.Box();
			egl.addEmbeddedWidget(this, "ui");
			
			egl.atLine(this.eze$$fileName,18,492,207, this);
			this.DataGrid = new egl.com.ibm.egl.rui.widgets.DataGrid();
			egl.addEmbeddedWidget(this, "DataGrid");
			
			egl.atLine(this.eze$$fileName,29,726,65, this);
			this.aDedicatedEGLService = new egl.egl.jsrt.EGLDedicatedServiceRefWrapper("aDedicatedEGLService", "services.ADedicatedEGLService", "");
			
			egl.atLine(this.eze$$fileName,30,794,44, this);
			this.aRESTService = egl.egl.core.$ServiceLib.bindService("aruiproject","arestservice");
			
			egl.atLine(this.eze$$fileName,31,843,44, this);
			this.aSOAPService = egl.egl.core.$ServiceLib.bindService("aruiproject","asoapservice");
			
			egl.atLine(this.eze$$fileName,32,892,45, this);
			this.iRESTService = egl.egl.core.$ServiceLib.bindService("aruiproject","iarestservice");
			
			egl.atLine(this.eze$$fileName,33,942,45, this);
			this.iSOAPService = egl.egl.core.$ServiceLib.bindService("aruiproject","iasoapservice");
			
			egl.atLine(this.eze$$fileName,35,995,36, this);
			this.value = "";
			egl.atLine(this.eze$$fileName,36,1034,18, this);
			this.variation = "";
			egl.atLine(this.eze$$fileName,37,1055,28, this);
			this.timeoutLimit = 0;
			egl.atLine(this.eze$$fileName,39,1090,21, this);
			this.aString = "";
			egl.atLine(this.eze$$fileName,40,1114,14, this);
			this.aRec = new egl.records.ARecord();
			
			this.jsrt$SysVar= new egl.egl.core.SysVar();
			new egl.egl.core.ServiceLib();
			new egl.libraries.ALibrary();
			egl.atLine(this.eze$$fileName,10,296,18, this);
			this.initialUI = [ this.ui ];
			egl.atLine(this.eze$$fileName,17,463,23, this);
			egl.checkNull(this.ui, "ui").setChildren( [ this.DataGrid ] );
			egl.atLine(this.eze$$fileName,19,514,15, this);
			egl.checkNull(this.DataGrid, "DataGrid").behaviors = [  ].setType( "Tcom/ibm/egl/rui/widgets/datacellbehavior;" );
			egl.atLine(this.eze$$fileName,20,534,21, this);
			egl.checkNull(this.DataGrid, "DataGrid").headerBehaviors = [  ].setType( "Tcom/ibm/egl/rui/widgets/datacellbehavior;" );
			egl.atLine(this.eze$$fileName,21,560,119, this);
			egl.checkNull(this.DataGrid, "DataGrid").setColumns([ (function () {
				var ezert$$1 = new egl.com.ibm.egl.rui.widgets.DataGridColumn();
				egl.atLine(this.eze$$fileName,22,619,15, this);
				egl.checkNull(ezert$$1, "ezert$$1").name = "result";
				egl.atLine(this.eze$$fileName,22,636,23, this);
				egl.checkNull(ezert$$1, "ezert$$1").displayName = "Results";
				egl.atLine(this.eze$$fileName,22,661,11, this);
				egl.checkNull(ezert$$1, "ezert$$1").width = (800).toString();
				return ezert$$1;
			}).call(this) ].setType( "Tcom/ibm/egl/rui/widgets/datagridcolumn;" ));
			egl.atLine(this.eze$$fileName,24,684,10, this);
			egl.checkNull(this.DataGrid, "DataGrid").setData([  ].setType( "A;" ));
			egl.atLine(this.eze$$fileName,35,995,5, this);
			this.value = "ARUIHandler value";
			egl.atLine(this.eze$$fileName,37,1055,12, this);
			this.timeoutLimit = (10 * 1000);
			if (egl.debugg && egl.mainAppName == (this.eze$$package ? this.eze$$package + "." : "") + this.eze$$typename){
				egl.insideConstructionFunc = true;
			}
			this.start();
			egl.insideConstructionFunc = false;
			if (!egl.debugg) egl.leave();
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	
	,
	"start": function() {
		var eze$$this = this;
		var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
			if (!ezeGetter) {
				eval(ezeName);
			}
			if (ezeSetter) {
				eval(ezeSetter + "(" + ezeValue + ")");
			} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
				eval(ezeName + ".eze$$value = " + ezeValue);
			} else {
				eval(ezeName + " = " + ezeValue);
			}
			if (ezeGetter) {
				return eval(ezeGetter);
			}
			return eval(ezeName);
		}
		try { egl.enter("start",this,arguments,eze$$updater);
			egl.atLine(this.eze$$fileName,43,1156,1915, this);
			try {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,45,1173,48, this);
					this.variation = "ARUIHandler: ARUIHandler started";
					egl.atLine(this.eze$$fileName,46,1226,13, this);
					this.success();
					egl.atLine(this.eze$$fileName,48,1249,78, this);
					this.variation = "ARUIHandler: GetValueFunction stand alone function part access";
					egl.atLine(this.eze$$fileName,49,1337,20, this);
					var ezert$$2 = "";
					ezert$$2 = this.getValueFunction();
					egl.atLine(this.eze$$fileName,49,1332,91, this);
					if ( (ezert$$2 == this.value) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,50,1374,13, this);
							this.success();
						}finally{egl.exitBlock();}
					}
					else {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,52,1402,13, this);
							this.failure();
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,55,1433,44, this);
					this.variation = "ARUIHandler: ALibrary access";
					egl.atLine(this.eze$$fileName,56,1482,29, this);
					egl.libraries.ALibrary['$inst'].setValue(this.value, function(eze$$inout$value) {
						this.value = eze$$inout$value;
					}, this );
					egl.atLine(this.eze$$fileName,57,1521,21, this);
					var ezert$$3 = "";
					ezert$$3 = egl.libraries.ALibrary['$inst'].getValue();
					egl.atLine(this.eze$$fileName,57,1516,92, this);
					if ( (ezert$$3 == this.value) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,58,1559,13, this);
							this.success();
						}finally{egl.exitBlock();}
					}
					else {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,60,1587,13, this);
							this.failure();
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,63,1618,67, this);
					this.variation = "ARUIHandler: ALibrary access using shared item type";
					egl.atLine(this.eze$$fileName,64,1690,17, this);
					this.aString = this.value;
					egl.atLine(this.eze$$fileName,65,1712,31, this);
					egl.libraries.ALibrary['$inst'].setValue(this.aString, function(eze$$inout$value) {
						this.aString = eze$$inout$value;
					}, this );
					egl.atLine(this.eze$$fileName,66,1753,21, this);
					var ezert$$4 = "";
					ezert$$4 = egl.libraries.ALibrary['$inst'].getValue();
					egl.atLine(this.eze$$fileName,66,1748,92, this);
					if ( (ezert$$4 == this.value) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,67,1791,13, this);
							this.success();
						}finally{egl.exitBlock();}
					}
					else {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,69,1819,13, this);
							this.failure();
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,72,1850,69, this);
					this.variation = "ARUIHandler: ALibrary access using shared record type";
					egl.atLine(this.eze$$fileName,73,1924,22, this);
					this.aRec.aString = this.value;
					egl.atLine(this.eze$$fileName,74,1951,36, this);
					egl.libraries.ALibrary['$inst'].setValue(this.aRec.aString, function(eze$$inout$value) {
						this.aRec.aString = eze$$inout$value;
					}, this );
					egl.atLine(this.eze$$fileName,75,1997,21, this);
					var ezert$$5 = "";
					ezert$$5 = egl.libraries.ALibrary['$inst'].getValue();
					egl.atLine(this.eze$$fileName,75,1992,92, this);
					if ( (ezert$$5 == this.value) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,76,2035,13, this);
							this.success();
						}finally{egl.exitBlock();}
					}
					else {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,78,2063,13, this);
							this.failure();
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,81,2097,178, this);
					var ezert$$6_in = this.value;
					var ezert$$7_ret = function(obj){
						//out type is not nullable
						egl.egl.core.$ServiceLib.throwExceptionIfNecessary(obj, "STRING", false);
						return obj;
					};
					if(egl__enableEditing !== true){
							this.aDedicatedEGLService.invokeService(this,
									new egl.egl.jsrt.Delegate(this, egl.ruihandlers.ARUI.prototype.aDedicatedEGLServiceCallback,"aDedicatedEGLServiceCallback"),
									new egl.egl.jsrt.Delegate(this, egl.ruihandlers.ARUI.prototype.aDedicatedEGLServiceExceptionHandler,"aDedicatedEGLServiceExceptionHandler"),
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
					}
					;
					egl.atLine(this.eze$$fileName,86,2304,154, this);
					var ezert$$8_in = this.value;
					var ezert$$9_ret = function(obj){
						//out type is not nullable
						egl.egl.core.$ServiceLib.throwExceptionIfNecessary(obj, "STRING", false);
						return obj;
					};
					if(egl__enableEditing !== true){
							this.aRESTService.invokeService(this,
									new egl.egl.jsrt.Delegate(this, egl.ruihandlers.ARUI.prototype.aRestServiceCallback,"aRestServiceCallback"),
									new egl.egl.jsrt.Delegate(this, egl.ruihandlers.ARUI.prototype.aRestServiceExceptionHandler,"aRestServiceExceptionHandler"),
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
					}
					;
					egl.atLine(this.eze$$fileName,91,2475,154, this);
					var ezert$$10_in = this.value;
					var ezert$$11_ret = function(obj){
						//out type is not nullable
						egl.egl.core.$ServiceLib.throwExceptionIfNecessary(obj, "STRING", false);
						return obj;
					};
					if(egl__enableEditing !== true){
							this.aSOAPService.invokeService(this,
									new egl.egl.jsrt.Delegate(this, egl.ruihandlers.ARUI.prototype.aSOAPServiceCallback,"aSOAPServiceCallback"),
									new egl.egl.jsrt.Delegate(this, egl.ruihandlers.ARUI.prototype.aSOAPServiceExceptionHandler,"aSOAPServiceExceptionHandler"),
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
					}
					;
					egl.atLine(this.eze$$fileName,96,2647,154, this);
					var ezert$$12_in = this.value;
					var ezert$$13_ret = function(obj){
						//out type is not nullable
						egl.egl.core.$ServiceLib.throwExceptionIfNecessary(obj, "STRING", false);
						return obj;
					};
					if(egl__enableEditing !== true){
							this.iRESTService.invokeService(this,
									new egl.egl.jsrt.Delegate(this, egl.ruihandlers.ARUI.prototype.iRestServiceCallback,"iRestServiceCallback"),
									new egl.egl.jsrt.Delegate(this, egl.ruihandlers.ARUI.prototype.iRestServiceExceptionHandler,"iRestServiceExceptionHandler"),
									10000,
									"returnValue",
									[ezert$$12_in],
									["S;"],
									"value _return",
									[ezert$$13_ret],
									false,
									"", -1, -1,
									"",
									{});
					}
					;
					egl.atLine(this.eze$$fileName,101,2818,154, this);
					var ezert$$14_in = this.value;
					var ezert$$15_ret = function(obj){
						//out type is not nullable
						egl.egl.core.$ServiceLib.throwExceptionIfNecessary(obj, "STRING", false);
						return obj;
					};
					if(egl__enableEditing !== true){
							this.iSOAPService.invokeService(this,
									new egl.egl.jsrt.Delegate(this, egl.ruihandlers.ARUI.prototype.iSOAPServiceCallback,"iSOAPServiceCallback"),
									new egl.egl.jsrt.Delegate(this, egl.ruihandlers.ARUI.prototype.iSOAPServiceExceptionHandler,"iSOAPServiceExceptionHandler"),
									10000,
									"returnValue",
									[ezert$$14_in],
									["S;"],
									"value _return",
									[ezert$$15_ret],
									false,
									"", -1, -1,
									"",
									{});
					}
					;
				}finally{egl.exitBlock();}
			}
			catch ( ezert$$16 )
			{
				{
					if (ezert$$16 instanceof egl.egl.debug.DebugTermination){throw ezert$$16;}
					if (!(ezert$$16 instanceof egl.egl.core.AnyException)) {
						ezert$$16 = egl.makeExceptionFromCaughtObject(ezert$$16);
					}
					var ex = ezert$$16;
					try{egl.enterBlock();
						egl.addLocalFunctionVariable("ex", ex, "egl.core.AnyException", "ex");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,107,3028,13, this);
							this.failure();
							egl.atLine(this.eze$$fileName,108,3046,18, this);
							this.exception(egl.convertAnyExToNameType(ex,'Tegl/core/ServiceInvocationException;'), function(eze$$inout$ex) {
							}, this );
						}finally{egl.exitBlock();}
					}finally{egl.exitBlock();}
				}
			}
			egl.atLine(this.eze$$fileName,42,1135,1943, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"aDedicatedEGLServiceCallback": function( value ) {
		var eze$$this = this;
		var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
			if (!ezeGetter) {
				eval(ezeName);
			}
			if (ezeSetter) {
				eval(ezeSetter + "(" + ezeValue + ")");
			} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
				eval(ezeName + ".eze$$value = " + ezeValue);
			} else {
				eval(ezeName + " = " + ezeValue);
			}
			if (ezeGetter) {
				return eval(ezeGetter);
			}
			return eval(ezeName);
		}
		try { egl.enter("aDedicatedEGLServiceCallback",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("value", value, "string", "value");
			egl.atLine(this.eze$$fileName,113,3145,56, this);
			this.variation = "ARUIHandler: aDedicatedEGLService access";
			egl.atLine(this.eze$$fileName,114,3205,77, this);
			if ( (this.value == value) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,115,3236,13, this);
					this.success();
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,117,3262,13, this);
					this.failure();
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,112,3084,204, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"aDedicatedEGLServiceExceptionHandler": function( ex ) {
		var eze$$this = this;
		var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
			if (!ezeGetter) {
				eval(ezeName);
			}
			if (ezeSetter) {
				eval(ezeSetter + "(" + ezeValue + ")");
			} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
				eval(ezeName + ".eze$$value = " + ezeValue);
			} else {
				eval(ezeName + " = " + ezeValue);
			}
			if (ezeGetter) {
				return eval(ezeGetter);
			}
			return eval(ezeName);
		}
		try { egl.enter("aDedicatedEGLServiceExceptionHandler",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("ex", ex, "egl.core.AnyException", "ex");
			egl.atLine(this.eze$$fileName,122,3366,56, this);
			this.variation = "ARUIHandler: aDedicatedEGLService access";
			egl.atLine(this.eze$$fileName,123,3426,13, this);
			this.failure();
			egl.atLine(this.eze$$fileName,124,3443,18, this);
			this.exception(egl.convertAnyExToNameType(ex,'Tegl/core/ServiceInvocationException;'), function(eze$$inout$ex) {
			}, this );
			egl.atLine(this.eze$$fileName,121,3294,173, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"aRestServiceCallback": function( value ) {
		var eze$$this = this;
		var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
			if (!ezeGetter) {
				eval(ezeName);
			}
			if (ezeSetter) {
				eval(ezeSetter + "(" + ezeValue + ")");
			} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
				eval(ezeName + ".eze$$value = " + ezeValue);
			} else {
				eval(ezeName + " = " + ezeValue);
			}
			if (ezeGetter) {
				return eval(ezeGetter);
			}
			return eval(ezeName);
		}
		try { egl.enter("aRestServiceCallback",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("value", value, "string", "value");
			egl.atLine(this.eze$$fileName,128,3528,22, this);
			this.setRESTVariation();
			egl.atLine(this.eze$$fileName,129,3554,77, this);
			if ( (this.value == value) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,130,3585,13, this);
					this.success();
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,132,3611,13, this);
					this.failure();
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,127,3475,162, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"aRestServiceExceptionHandler": function( ex ) {
		var eze$$this = this;
		var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
			if (!ezeGetter) {
				eval(ezeName);
			}
			if (ezeSetter) {
				eval(ezeSetter + "(" + ezeValue + ")");
			} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
				eval(ezeName + ".eze$$value = " + ezeValue);
			} else {
				eval(ezeName + " = " + ezeValue);
			}
			if (ezeGetter) {
				return eval(ezeGetter);
			}
			return eval(ezeName);
		}
		try { egl.enter("aRestServiceExceptionHandler",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("ex", ex, "egl.core.AnyException", "ex");
			egl.atLine(this.eze$$fileName,137,3707,22, this);
			this.setRESTVariation();
			egl.atLine(this.eze$$fileName,138,3733,13, this);
			this.failure();
			egl.atLine(this.eze$$fileName,139,3750,18, this);
			this.exception(egl.convertAnyExToNameType(ex,'Tegl/core/ServiceInvocationException;'), function(eze$$inout$ex) {
			}, this );
			egl.atLine(this.eze$$fileName,136,3643,131, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setRESTVariation": function() {
		var eze$$this = this;
		var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
			if (!ezeGetter) {
				eval(ezeName);
			}
			if (ezeSetter) {
				eval(ezeSetter + "(" + ezeValue + ")");
			} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
				eval(ezeName + ".eze$$value = " + ezeValue);
			} else {
				eval(ezeName + " = " + ezeValue);
			}
			if (ezeGetter) {
				return eval(ezeGetter);
			}
			return eval(ezeName);
		}
		try { egl.enter("setRESTVariation",this,arguments,eze$$updater);
			egl.atLine(this.eze$$fileName,143,3867,49, this);
			var ezert$$17 = "";
			ezert$$17 = egl.egl.core.$ServiceLib.getRestServiceLocation(this.aRESTService);
			egl.atLine(this.eze$$fileName,143,3814,104, this);
			this.variation = ("ARUIHandler: ARESTService access at " + ezert$$17);
			egl.atLine(this.eze$$fileName,142,3781,143, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"iRestServiceCallback": function( value ) {
		var eze$$this = this;
		var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
			if (!ezeGetter) {
				eval(ezeName);
			}
			if (ezeSetter) {
				eval(ezeSetter + "(" + ezeValue + ")");
			} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
				eval(ezeName + ".eze$$value = " + ezeValue);
			} else {
				eval(ezeName + " = " + ezeValue);
			}
			if (ezeGetter) {
				return eval(ezeGetter);
			}
			return eval(ezeName);
		}
		try { egl.enter("iRestServiceCallback",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("value", value, "string", "value");
			egl.atLine(this.eze$$fileName,147,3983,23, this);
			this.setiRESTVariation();
			egl.atLine(this.eze$$fileName,148,4010,77, this);
			if ( (this.value == value) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,149,4041,13, this);
					this.success();
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,151,4067,13, this);
					this.failure();
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,146,3930,163, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"iRestServiceExceptionHandler": function( ex ) {
		var eze$$this = this;
		var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
			if (!ezeGetter) {
				eval(ezeName);
			}
			if (ezeSetter) {
				eval(ezeSetter + "(" + ezeValue + ")");
			} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
				eval(ezeName + ".eze$$value = " + ezeValue);
			} else {
				eval(ezeName + " = " + ezeValue);
			}
			if (ezeGetter) {
				return eval(ezeGetter);
			}
			return eval(ezeName);
		}
		try { egl.enter("iRestServiceExceptionHandler",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("ex", ex, "egl.core.AnyException", "ex");
			egl.atLine(this.eze$$fileName,156,4163,23, this);
			this.setiRESTVariation();
			egl.atLine(this.eze$$fileName,157,4190,13, this);
			this.failure();
			egl.atLine(this.eze$$fileName,158,4207,18, this);
			this.exception(egl.convertAnyExToNameType(ex,'Tegl/core/ServiceInvocationException;'), function(eze$$inout$ex) {
			}, this );
			egl.atLine(this.eze$$fileName,155,4099,132, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setiRESTVariation": function() {
		var eze$$this = this;
		var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
			if (!ezeGetter) {
				eval(ezeName);
			}
			if (ezeSetter) {
				eval(ezeSetter + "(" + ezeValue + ")");
			} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
				eval(ezeName + ".eze$$value = " + ezeValue);
			} else {
				eval(ezeName + " = " + ezeValue);
			}
			if (ezeGetter) {
				return eval(ezeGetter);
			}
			return eval(ezeName);
		}
		try { egl.enter("setiRESTVariation",this,arguments,eze$$updater);
			egl.atLine(this.eze$$fileName,162,4326,49, this);
			var ezert$$18 = "";
			ezert$$18 = egl.egl.core.$ServiceLib.getRestServiceLocation(this.iRESTService);
			egl.atLine(this.eze$$fileName,162,4272,105, this);
			this.variation = ("ARUIHandler: IARESTService access at " + ezert$$18);
			egl.atLine(this.eze$$fileName,161,4238,145, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"aSOAPServiceCallback": function( value ) {
		var eze$$this = this;
		var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
			if (!ezeGetter) {
				eval(ezeName);
			}
			if (ezeSetter) {
				eval(ezeSetter + "(" + ezeValue + ")");
			} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
				eval(ezeName + ".eze$$value = " + ezeValue);
			} else {
				eval(ezeName + " = " + ezeValue);
			}
			if (ezeGetter) {
				return eval(ezeGetter);
			}
			return eval(ezeName);
		}
		try { egl.enter("aSOAPServiceCallback",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("value", value, "string", "value");
			egl.atLine(this.eze$$fileName,166,4443,22, this);
			this.setSOAPVariation();
			egl.atLine(this.eze$$fileName,167,4469,77, this);
			if ( (this.value == value) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,168,4500,13, this);
					this.success();
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,170,4526,13, this);
					this.failure();
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,165,4390,162, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"aSOAPServiceExceptionHandler": function( ex ) {
		var eze$$this = this;
		var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
			if (!ezeGetter) {
				eval(ezeName);
			}
			if (ezeSetter) {
				eval(ezeSetter + "(" + ezeValue + ")");
			} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
				eval(ezeName + ".eze$$value = " + ezeValue);
			} else {
				eval(ezeName + " = " + ezeValue);
			}
			if (ezeGetter) {
				return eval(ezeGetter);
			}
			return eval(ezeName);
		}
		try { egl.enter("aSOAPServiceExceptionHandler",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("ex", ex, "egl.core.AnyException", "ex");
			egl.atLine(this.eze$$fileName,175,4622,22, this);
			this.setSOAPVariation();
			egl.atLine(this.eze$$fileName,176,4648,13, this);
			this.failure();
			egl.atLine(this.eze$$fileName,177,4665,18, this);
			this.exception(egl.convertAnyExToNameType(ex,'Tegl/core/ServiceInvocationException;'), function(eze$$inout$ex) {
			}, this );
			egl.atLine(this.eze$$fileName,174,4558,131, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setSOAPVariation": function() {
		var eze$$this = this;
		var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
			if (!ezeGetter) {
				eval(ezeName);
			}
			if (ezeSetter) {
				eval(ezeSetter + "(" + ezeValue + ")");
			} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
				eval(ezeName + ".eze$$value = " + ezeValue);
			} else {
				eval(ezeName + " = " + ezeValue);
			}
			if (ezeGetter) {
				return eval(ezeGetter);
			}
			return eval(ezeName);
		}
		try { egl.enter("setSOAPVariation",this,arguments,eze$$updater);
			egl.atLine(this.eze$$fileName,182,4856,48, this);
			var ezert$$19 = "";
			ezert$$19 = egl.egl.core.$ServiceLib.getWebServiceLocation(this.aSOAPService);
			egl.atLine(this.eze$$fileName,182,4803,103, this);
			this.variation = ("ARUIHandler: ASOAPService access at " + ezert$$19);
			egl.atLine(this.eze$$fileName,180,4696,216, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"iSOAPServiceCallback": function( value ) {
		var eze$$this = this;
		var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
			if (!ezeGetter) {
				eval(ezeName);
			}
			if (ezeSetter) {
				eval(ezeSetter + "(" + ezeValue + ")");
			} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
				eval(ezeName + ".eze$$value = " + ezeValue);
			} else {
				eval(ezeName + " = " + ezeValue);
			}
			if (ezeGetter) {
				return eval(ezeGetter);
			}
			return eval(ezeName);
		}
		try { egl.enter("iSOAPServiceCallback",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("value", value, "string", "value");
			egl.atLine(this.eze$$fileName,187,4975,23, this);
			this.setiSOAPVariation();
			egl.atLine(this.eze$$fileName,188,5002,77, this);
			if ( (this.value == value) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,189,5033,13, this);
					this.success();
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,191,5059,13, this);
					this.failure();
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,186,4922,163, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"iSOAPServiceExceptionHandler": function( ex ) {
		var eze$$this = this;
		var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
			if (!ezeGetter) {
				eval(ezeName);
			}
			if (ezeSetter) {
				eval(ezeSetter + "(" + ezeValue + ")");
			} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
				eval(ezeName + ".eze$$value = " + ezeValue);
			} else {
				eval(ezeName + " = " + ezeValue);
			}
			if (ezeGetter) {
				return eval(ezeGetter);
			}
			return eval(ezeName);
		}
		try { egl.enter("iSOAPServiceExceptionHandler",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("ex", ex, "egl.core.AnyException", "ex");
			egl.atLine(this.eze$$fileName,196,5155,23, this);
			this.setiSOAPVariation();
			egl.atLine(this.eze$$fileName,197,5182,13, this);
			this.failure();
			egl.atLine(this.eze$$fileName,198,5199,18, this);
			this.exception(egl.convertAnyExToNameType(ex,'Tegl/core/ServiceInvocationException;'), function(eze$$inout$ex) {
			}, this );
			egl.atLine(this.eze$$fileName,195,5091,132, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setiSOAPVariation": function() {
		var eze$$this = this;
		var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
			if (!ezeGetter) {
				eval(ezeName);
			}
			if (ezeSetter) {
				eval(ezeSetter + "(" + ezeValue + ")");
			} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
				eval(ezeName + ".eze$$value = " + ezeValue);
			} else {
				eval(ezeName + " = " + ezeValue);
			}
			if (ezeGetter) {
				return eval(ezeGetter);
			}
			return eval(ezeName);
		}
		try { egl.enter("setiSOAPVariation",this,arguments,eze$$updater);
			egl.atLine(this.eze$$fileName,203,5393,48, this);
			var ezert$$20 = "";
			ezert$$20 = egl.egl.core.$ServiceLib.getWebServiceLocation(this.iSOAPService);
			egl.atLine(this.eze$$fileName,203,5339,104, this);
			this.variation = ("ARUIHandler: IASOAPService access at " + ezert$$20);
			egl.atLine(this.eze$$fileName,201,5230,219, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"success": function() {
		var eze$$this = this;
		var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
			if (!ezeGetter) {
				eval(ezeName);
			}
			if (ezeSetter) {
				eval(ezeSetter + "(" + ezeValue + ")");
			} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
				eval(ezeName + ".eze$$value = " + ezeValue);
			} else {
				eval(ezeName + " = " + ezeValue);
			}
			if (ezeGetter) {
				return eval(ezeGetter);
			}
			return eval(ezeName);
		}
		try { egl.enter("success",this,arguments,eze$$updater);
			egl.atLine(this.eze$$fileName,207,5480,41, this);
			this.showResult(("Success - " + this.variation) );
			egl.atLine(this.eze$$fileName,206,5455,72, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"failure": function() {
		var eze$$this = this;
		var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
			if (!ezeGetter) {
				eval(ezeName);
			}
			if (ezeSetter) {
				eval(ezeSetter + "(" + ezeValue + ")");
			} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
				eval(ezeName + ".eze$$value = " + ezeValue);
			} else {
				eval(ezeName + " = " + ezeValue);
			}
			if (ezeGetter) {
				return eval(ezeGetter);
			}
			return eval(ezeName);
		}
		try { egl.enter("failure",this,arguments,eze$$updater);
			egl.atLine(this.eze$$fileName,211,5558,41, this);
			this.showResult(("Failure - " + this.variation) );
			egl.atLine(this.eze$$fileName,210,5533,72, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"exception": function( ex, eze$$ex$func_, eze$$caller ) {
		var eze$$this = this;
		var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
			if (!ezeGetter) {
				eval(ezeName);
			}
			var eze$$inout;
			try {
				eze$$inout = eval('eze$$' + ezeName + '$func_');
			} catch (e) {}
			if (eze$$inout && typeof eze$$inout === "function") {
				var eze$$tempResult = eval(ezeValue);
				var eze$$callResult = eze$$inout.call(eze$$caller, eze$$tempResult);
				if (ezeSetter) {
					eval(ezeSetter + "(eze$$tempResult)");
				} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
					eval(ezeName + ".eze$$value = " + eze$$callResult);
				} else {
					eval(ezeName + " = eze$$tempResult");
				}
			} else {
				if (ezeSetter) {
					eval(ezeSetter + "(" + ezeValue + ")");
				} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
					eval(ezeName + ".eze$$value = " + ezeValue);
				} else {
					eval(ezeName + " = " + ezeValue);
				}
			}
			if (ezeGetter) {
				return eval(ezeGetter);
			}
			return eval(ezeName);
		}
		try { egl.enter("exception",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("ex", ex, "egl.core.ServiceInvocationException", "ex");
			egl.atLine(this.eze$$fileName,215,5668,126, this);
			this.showResult(((((((("Exception Message: " + egl.checkNull(ex, "ex").message) + ", ") + egl.checkNull(ex, "ex").detail1) + ", ") + egl.checkNull(ex, "ex").detail2) + ", ") + egl.checkNull(ex, "ex").detail3) );
			egl.atLine(this.eze$$fileName,214,5611,190, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"showResult": function( result ) {
		var eze$$this = this;
		var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
			if (!ezeGetter) {
				eval(ezeName);
			}
			if (ezeSetter) {
				eval(ezeSetter + "(" + ezeValue + ")");
			} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
				eval(ezeName + ".eze$$value = " + ezeValue);
			} else {
				eval(ezeName + " = " + ezeValue);
			}
			if (ezeGetter) {
				return eval(ezeGetter);
			}
			return eval(ezeName);
		}
		try { egl.enter("showResult",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("result", result, "string", "result");
			egl.atLine(this.eze$$fileName,223,5851,67, this);
			egl.checkNull(this.DataGrid, "DataGrid").getData().appendElement( (function(x){ return x !== null ? ({eze$$value : x, eze$$signature : "y;"}) : null; })((function () {
				var ezert$$21 = new egl.egl.Dictionary();
				egl.atLine(this.eze$$fileName,223,5898,15, this);
				egl.valueByKey(egl.checkNull(ezert$$21, "ezert$$21"), "result",result,"S;");
				return ezert$$21;
			}).call(this)) );
			egl.atLine(this.eze$$fileName,224,5922,21, this);
			egl.checkNull(this.DataGrid, "DataGrid").render();
			egl.atLine(this.eze$$fileName,222,5807,142, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getValueFunction": function() {
		var eze$$fileName = "/ASharedProject/EGLSource/libraries/sharedFunctions.egl";
		var eze$$this = this;
		var eze$$updater = function(ezeName, ezeValue, ezeGetter, ezeSetter) {
			if (!ezeGetter) {
				eval(ezeName);
			}
			if (ezeSetter) {
				eval(ezeSetter + "(" + ezeValue + ")");
			} else if (typeof eval(ezeName) === "object" && "eze$$value" in eval(ezeName)) {
				eval(ezeName + ".eze$$value = " + ezeValue);
			} else {
				eval(ezeName + " = " + ezeValue);
			}
			if (ezeGetter) {
				return eval(ezeGetter);
			}
			return eval(ezeName);
		}
		try { egl.enter("getValueFunction",this,arguments,eze$$updater);
			var $result = "";
			egl.atLine(eze$$fileName,6,116,22, this);
			this.aRec.aString = this.value;
			egl.atLine(eze$$fileName,7,141,25, this);
			$result = this.aRec.aString;
			egl.setLocalFunctionVariable("STRING", $result, "string");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"toString": function() {
		return "[ARUI]";
	}
	,
	"eze$$getName": function() {
		return "ARUI";
	}
	,
	"eze$$getChildVariables": function() {
		var eze$$parent = this;
		return [
		{name : "Build Descriptor", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, value : {"eze$$getChildVariables": function() {
					return [
					{name : "Name", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, value : {"toString": function(){return "ARUIProjectJavaScriptBuildOptions";}}, type : ""},
					{name : "Path", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, value : {"toString": function(){return "\\ARUIProject\\EGLSource\\ARUIProject.eglbld";}}, type : ""},
					{name : "Options", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, value : {"eze$$getChildVariables": function() {
								return [
								{name : "bidiConversionTable", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "bind", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "blanksAsZero", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "buildPlan", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "byteArrayOperationsForStructuredRecords", value : 0, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "cachePreparedStatements", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "cancelAfterTransfer", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "checkNumericOverflow", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "checkToTransaction", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "checkType", value : "NONE", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "cicsEntries", value : "NONE", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "cicsj2cTimeout", value : -1, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "clientCodeSet", value : "IBM-850", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "commentLevel", value : 1, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "currencyLocation", value : "NONE", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "currencySymbol", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "data", value : 31, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "dbContentSeparator", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "dbms", value : "DB2", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "debugTrace", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "decimalSymbol", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "defaultDateFormat", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "defaultMoneyFormat", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "defaultNumericFormat", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "defaultTimeFormat", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "defaultTimeStampFormat", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "deploymentDescriptor", value : "ARUIProject", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "destDirectory", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "destHost", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "destLibrary", value : "QGPL", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "destPort", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "destUserID", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "eliminateSystemDependentCode", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "enableJavaWrapperGen", value : "NO", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "endCommarea", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "errorDestination", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "fillWithNulls", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "formServicePgmType", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "genDDSFile", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "genDataTables", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "genDirectory", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "genFixedLengthSqlLike", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "genFormGroup", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "genHelpFormGroup", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "genProject", value : "ARUIProject", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "genProperties", value : "NO", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "genResourceBundle", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "genReturnImmediate", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "genRunFile", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "genVGUIRecords", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "imsFastPath", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "imsLogID", value : "NOLOG", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "imsPSB", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "includeLineNumbers", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "j2ee", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "j2eeLevel", value : "1.3", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "leftAlign", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "linkEdit", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "linkage", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "math", value : "COBOL", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "maxNumericDigits", value : 31, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "mfsExtendedAttr", value : "YES", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "mfsIgnore", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "mfsUseTestLibrary", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "msgTablePrefix", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "positiveSignIndicator", value : "F", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "prep", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "prepareAllSQLStatements", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "preparedStatementCacheSize", value : -1, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "printDestination", value : "PROGRAMCONTROLLED", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "projectID", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "reservedWord", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "resourceAssociations", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "resourceBundleLocale", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "restartTransactionID", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "restoreCurrentMsgOnError", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "returnTransaction", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "separatorSymbol", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "serverCodeSet", value : "IBM-037", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "serverType", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "sessionBeanID", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "setFormItemFull", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "spaADF", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "spaSize", value : 0, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "spaStatusBytePosition", value : 0, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "spacesZero", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "sqlAccessColumnsAsBytes", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "sqlCommitControl", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "sqlDB", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "sqlErrorTrace", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "sqlID", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "sqlIOTrace", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "sqlJDBCDriverClass", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "sqlJNDIName", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "sqlSchema", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "sqlValidationConnectionURL", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "startTransactionID", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "statementTrace", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "synchOnPgmTransfer", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "synchOnTrxTransfer", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "sysCodes", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "system", value : "JAVASCRIPT", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "targetNLS", value : "ENU", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "tempDirectory", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "templateDir", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "transferErrorTransaction", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "truncateExtraDecimals", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "twaOffset", value : 0, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "useCurrentSchema", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "useXctlForTransfer", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "userMessageFile", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "v60DecimalBehavior", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "v60NumWithCharBehavior", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "v60NumWithDateBehavior", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "v60SQLNullableBehavior", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "v71AddBehavior", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "vagCompatibility", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "validateBlankDateFields", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "validateMixedItems", value : {"toString": function(){return "YES";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "validateOnlyIfModified", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "validateSQLStatements", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "vseLibrary", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "workDBType", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "wrapperCompatibility", value : "CURRENT", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "wrapperPackageName", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""}
					];}, "toString": function(){return ""}}, type : ""}
		];}, "toString": function() {return ""}}, type : ""},
		
		{name : "System Variables", attrs : egl.ATTR_SYSTEM_VAR, value : {"eze$$getChildVariables": function() {
					return [
					{name: "StrLib", attrs : egl.ATTR_SYSTEM_VAR, value : egl.egl.core.$StrLib, type : "egl.core.StrLib", jsName : "egl.egl.core.StrLib.$inst"},
					{name: "SysVar", attrs : egl.ATTR_SYSTEM_VAR, value : eze$$parent.jsrt$SysVar, type : "egl.core.SysVar", jsName : "jsrt$SysVar"},
					{name: "ServiceLib", attrs : egl.ATTR_SYSTEM_VAR, value : egl.egl.core.$ServiceLib, type : "egl.core.ServiceLib", jsName : "egl.egl.core.ServiceLib.$inst"},
		];}, "toString": function(){return ""}}, type : "", jsName : ""},
		
		{name: "ALibrary", value : egl.libraries.ALibrary['$inst'], type : "libraries.ALibrary", jsName : "egl.libraries.ALibrary.$inst"},
		{name: "document", value : eze$$parent.document, attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.Document", jsName : "document"},
		{name: "initialUI", value : eze$$parent.initialUI, attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.Widget[]", jsName : "!initialUI"},
		{name: "ui", value : eze$$parent.ui, type : "com.ibm.egl.rui.widgets.Box", jsName : "ui"},
		{name: "DataGrid", value : eze$$parent.DataGrid, type : "com.ibm.egl.rui.widgets.DataGrid", jsName : "DataGrid"},
		{name: "aDedicatedEGLService", value : eze$$parent.aDedicatedEGLService, type : "services.ADedicatedEGLService", jsName : "aDedicatedEGLService"},
		{name: "aRESTService", value : eze$$parent.aRESTService, type : "services.ARESTService", jsName : "aRESTService"},
		{name: "aSOAPService", value : eze$$parent.aSOAPService, type : "services.ASOAPService", jsName : "aSOAPService"},
		{name: "iRESTService", value : eze$$parent.iRESTService, type : "services.IARESTService", jsName : "iRESTService"},
		{name: "iSOAPService", value : eze$$parent.iSOAPService, type : "services.IASOAPService", jsName : "iSOAPService"},
		{name: "value", value : eze$$parent.value, type : "string", jsName : "value"},
		{name: "variation", value : eze$$parent.variation, type : "string", jsName : "variation"},
		{name: "timeoutLimit", value : eze$$parent.timeoutLimit, type : "int", jsName : "timeoutLimit"},
		{name: "aString", value : eze$$parent.aString, type : "string", jsName : "aString"},
		{name: "aRec", value : eze$$parent.aRec, type : "records.ARecord", jsName : "aRec"}
		];
	}
}
);
