// Generated at Sun Sep 03 10:03:15 AST 2023 by EGL 7.1.1.v20180914_0609
// No APARs installed.

egl.defineClass('com.ibm.egl.rui.loader.internal', 'ModuleLoader', {
	'eze$$fileName': '/com.ibm.egl.rui_4.1.0/EGLSource/com/ibm/egl/rui/loader/internal/ModuleLoader.egl',
	'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/loader/internal/ModuleLoader',
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
			egl.atLine(this.eze$$fileName,54,1983,37, this);
			this.FAILLISTENER = "";
			egl.atLine(this.eze$$fileName,55,2022,39, this);
			this.INFORLISTENER = "";
			egl.atLine(this.eze$$fileName,56,2063,37, this);
			this.DONELISTENER = "";
			egl.atLine(this.eze$$fileName,59,2123,37, this);
			this.context = "";
			egl.atLine(this.eze$$fileName,60,2162,16, this);
			this.helper = new egl.com.ibm.egl.rui.loader.Helper();
			
			egl.atLine(this.eze$$fileName,61,2180,20, this);
			this.components = null;
			
			egl.atLine(this.eze$$fileName,62,2202,19, this);
			this.handlerName = "";
			egl.atLine(this.eze$$fileName,63,2223,37, this);
			this.baseURL = "";
			egl.atLine(this.eze$$fileName,65,2264,17, this);
			this.modules = null;
			
			egl.atLine(this.eze$$fileName,66,2283,21, this);
			this.currentModuleNum = 0;
			egl.atLine(this.eze$$fileName,67,2306,21, this);
			this.allJavaScript = "";
			egl.atLine(this.eze$$fileName,68,2329,18, this);
			this.alreadyLoaded = 0;
			egl.atLine(this.eze$$fileName,69,2350,21, this);
			this.moduleNames = null;
			
			egl.atLine(this.eze$$fileName,70,2373,27, this);
			this.instantiate = false;
			this.jsrt$SysVar= new egl.egl.core.SysVar();
			new egl.com.ibm.egl.rui.loader.DynamicLoader();
			new egl.egl.core.StrLib();
			egl.atLine(this.eze$$fileName,54,1983,12, this);
			this.FAILLISTENER = "FAILLISTENER";
			egl.atLine(this.eze$$fileName,55,2022,13, this);
			this.INFORLISTENER = "INFORLISTENER";
			egl.atLine(this.eze$$fileName,56,2063,12, this);
			this.DONELISTENER = "DONELISTENER";
			egl.atLine(this.eze$$fileName,59,2140,19, this);
			var ezert$$1 = "";
			ezert$$1 = this.helper.getContext();
			egl.atLine(this.eze$$fileName,59,2123,7, this);
			this.context = ezert$$1;
			egl.atLine(this.eze$$fileName,63,2240,19, this);
			var ezert$$2 = "";
			ezert$$2 = this.helper.getBaseURL();
			egl.atLine(this.eze$$fileName,63,2223,7, this);
			this.baseURL = ezert$$2;
			egl.atLine(this.eze$$fileName,70,2373,11, this);
			this.instantiate = true;
			if (!egl.debugg) egl.leave();
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	
	,
	"loadHandler": function( handlerName, aInstantiate, eze$$aInstantiate$func_, eze$$caller ) {
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
		try { egl.enter("loadHandler",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("handlerName", handlerName, "string", "handlerName");
			egl.addLocalFunctionVariable("aInstantiate", aInstantiate, "boolean", "aInstantiate");
			egl.atLine(this.eze$$fileName,74,2492,31, this);
			var ezert$$3 = "";
			ezert$$3 = this.resolvePackageName(handlerName, function(eze$$inout$fullname) {
				handlerName = eze$$inout$fullname;
				egl.setLocalFunctionVariable("handlerName", handlerName, "string");
			}, this );
			egl.setLocalFunctionVariable("handlerName", handlerName, "string");
			egl.atLine(this.eze$$fileName,74,2473,51, this);
			this.handlerName = ezert$$3;
			egl.atLine(this.eze$$fileName,75,2527,32, this);
			this.instantiate = aInstantiate;
			egl.atLine(this.eze$$fileName,77,2563,345, this);
			if ( !(this.helper.handlerLoaded(handlerName )) ) {
				try{egl.enterBlock();
					var svc = new egl.egl.jsrt.EGLDedicatedServiceRefWrapper("svc", "com.ibm.egl.rui.loader.services.ModuleLoaderService", "");
					egl.addLocalFunctionVariable("svc", svc, "com.ibm.egl.rui.loader.services.ModuleLoaderService", "svc");
					egl.atLine(this.eze$$fileName,79,2658,36, this);
					this.helper.configureServiceWrapper(svc );
					egl.atLine(this.eze$$fileName,80,2698,177, this);
					var ezert$$4_in = this.context;
					var ezert$$5_in = this.handlerName;
					var ezert$$6_in = this.helper.getPortNumber();
					var ezert$$7_in = this.helper.getLocale();
					var ezert$$8_in = this.helper.getDynamicLoadingList();
					var ezert$$9_ret = [function(obj){
						//out type is not nullable
						egl.egl.core.$ServiceLib.throwExceptionIfNecessary(obj, "Module", false);
						var retRec = new egl.com.ibm.egl.rui.loader.internal.Module();
						return retRec;
					}];
					if(egl__enableEditing !== true){
							svc.invokeService(this,
									new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.loader.internal.ModuleLoader.prototype.handleModules,"handleModules"),
									new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.loader.internal.ModuleLoader.prototype.noHandlerFound,"noHandlerFound"),
									-1,
									"getModules",
									[ezert$$4_in, ezert$$5_in, ezert$$6_in, ezert$$7_in, ezert$$8_in],
									["S;", "S;", "I;", "S;", "S;"],
									"project name port alocale dynamicLoadingList _return",
									[ezert$$9_ret],
									false,
									"", -1, -1,
									"",
									{});
					}
					;
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,82,2886,16, this);
					this.createHandler();
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,73,2405,508, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"handleModules": function( modules ) {
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
		try { egl.enter("handleModules",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("modules", modules, "com.ibm.egl.rui.loader.internal.Module[]", "!modules");
			egl.atLine(this.eze$$fileName,87,2962,23, this);
			this.modules = modules;
			egl.atLine(this.eze$$fileName,88,2988,19, this);
			this.allJavaScript = "";
			egl.atLine(this.eze$$fileName,89,3010,18, this);
			this.alreadyLoaded = 0;
			egl.atLine(this.eze$$fileName,90,3031,21, this);
			this.currentModuleNum = 0;
			egl.atLine(this.eze$$fileName,91,3055,30, this);
			egl.valueByKey(egl.checkNull(egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].deployCache, "DynamicLoader.deployCache"), this.handlerName,[  ],"1A;");
			egl.atLine(this.eze$$fileName,92,3088,17, this);
			this.moduleNames = [  ].setType( "S;" );
			egl.atLine(this.eze$$fileName,93,3163,17, this);
			var ezert$$10 = 0;
			ezert$$10 = modules.getSize();
			egl.atLine(this.eze$$fileName,93,3108,103, this);
			this.invokeListeners(this.INFORLISTENER, String('',null), (("Received  " + (ezert$$10).toString()) + " modules"), egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].INFO_DEBUG, new egl.com.ibm.egl.rui.loader.HandlerLoadedEvent() );
			egl.atLine(this.eze$$fileName,94,3214,171, this);
			try {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,95,3224,18, this);
					this.doHandleModules();
				}finally{egl.exitBlock();}
			}
			catch ( ezert$$11 )
			{
				{
					if (ezert$$11 instanceof egl.egl.debug.DebugTermination){throw ezert$$11;}
					if (!(ezert$$11 instanceof egl.egl.core.AnyException)) {
						ezert$$11 = egl.makeExceptionFromCaughtObject(ezert$$11);
					}
					var e = ezert$$11;
					try{egl.enterBlock();
						egl.addLocalFunctionVariable("e", e, "egl.core.AnyException", "e");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,97,3277,102, this);
							this.invokeListeners(this.FAILLISTENER, String('',null), (("<font color=red><b>" + egl.checkNull(e, "e").message) + "</b></font>"), String('',null), new egl.com.ibm.egl.rui.loader.HandlerLoadedEvent() );
						}finally{egl.exitBlock();}
					}finally{egl.exitBlock();}
				}
			}
			egl.atLine(this.eze$$fileName,86,2916,474, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"resolvePackageName": function( fullname, eze$$fullname$func_, eze$$caller ) {
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
		try { egl.enter("resolvePackageName",this,arguments,eze$$updater);
			var $result = "";
			egl.addLocalFunctionVariable("fullname", fullname, "string", "fullname");
			var delimiters = "";
			egl.addLocalFunctionVariable("delimiters", delimiters, "string", "delimiters");
			egl.atLine(this.eze$$fileName,102,3465,10, this);
			delimiters = ".";
			egl.setLocalFunctionVariable("delimiters", delimiters, "string");
			var arrFullName = null;
			egl.addLocalFunctionVariable("arrFullName", arrFullName, "string[]", "!arrFullName");
			egl.atLine(this.eze$$fileName,103,3515,34, this);
			var ezert$$12 = null;
			ezert$$12 = this.helper.split(fullname, delimiters );
			egl.atLine(this.eze$$fileName,103,3492,11, this);
			arrFullName = ezert$$12;
			egl.setLocalFunctionVariable("arrFullName", arrFullName, "string[]");
			var tokenCount = 0;
			egl.addLocalFunctionVariable("tokenCount", tokenCount, "int", "tokenCount");
			egl.atLine(this.eze$$fileName,104,3570,21, this);
			var ezert$$13 = 0;
			ezert$$13 = arrFullName.getSize();
			egl.atLine(this.eze$$fileName,104,3553,10, this);
			tokenCount = ezert$$13;
			egl.setLocalFunctionVariable("tokenCount", tokenCount, "int");
			egl.atLine(this.eze$$fileName,105,3595,45, this);
			if ( (tokenCount < 2) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,106,3617,17, this);
					$result = fullname;
					egl.setLocalFunctionVariable("STRING", $result, "string");
					{ if (!egl.debugg) egl.leave(); return $result;}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,108,3643,38, this);
			this.handlerName = egl.checkNull(arrFullName, "arrFullName")[arrFullName.checkIndex((tokenCount)-1)];
			var packageName = "";
			egl.addLocalFunctionVariable("packageName", packageName, "string", "packageName");
			egl.atLine(this.eze$$fileName,109,3718,29, this);
			var ezert$$14 = 0;
			ezert$$14 = egl.egl.core.$StrLib.textLen( fullname);
			egl.atLine(this.eze$$fileName,109,3750,32, this);
			var ezert$$15 = 0;
			ezert$$15 = egl.egl.core.$StrLib.textLen( this.handlerName);
			egl.atLine(this.eze$$fileName,109,3684,11, this);
			packageName = fullname.substring( 1-1,((ezert$$14 - ezert$$15) - 1));
			egl.setLocalFunctionVariable("packageName", packageName, "string");
			egl.atLine(this.eze$$fileName,110,3798,29, this);
			var ezert$$16 = null;
			ezert$$16 = egl.egl.core.$StrLib.lowerCase( packageName);
			egl.atLine(this.eze$$fileName,110,3790,59, this);
			var ezert$$17 = null;
			ezert$$17 = ezert$$16;
			$result = (function(x){ return x !== null ? ((x).toString()) : ""; })(((function(x){ return x !== null ? ((x).toString()) : ""; })(((function(x){ return x !== null ? ((x).toString()) : ""; })(ezert$$17) + ".")) + this.handlerName));
			egl.setLocalFunctionVariable("STRING", $result, "string");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"doHandleModules": function() {
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
		try { egl.enter("doHandleModules",this,arguments,eze$$updater);
			egl.atLine(this.eze$$fileName,114,3887,22, this);
			this.currentModuleNum = (this.currentModuleNum + 1);
			egl.atLine(this.eze$$fileName,115,3935,22, this);
			var ezert$$18 = 0;
			ezert$$18 = this.modules.getSize();
			egl.atLine(this.eze$$fileName,115,3912,1208, this);
			if ( (this.currentModuleNum <= ezert$$18) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,116,3962,99, this);
					this.invokeListeners(this.INFORLISTENER, String('',null), ("Processing module " + (this.currentModuleNum).toString()), egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].INFO_DEBUG, new egl.com.ibm.egl.rui.loader.HandlerLoadedEvent() );
					var module = new egl.com.ibm.egl.rui.loader.internal.Module();
					egl.addLocalFunctionVariable("module", module, "com.ibm.egl.rui.loader.internal.Module", "module");
					egl.atLine(this.eze$$fileName,117,4065,6, this);
					module.eze$$assign(egl.checkNull(this.modules, "modules")[this.modules.checkIndex((this.currentModuleNum)-1)]);
					egl.setLocalFunctionVariable("module", module, "com.ibm.egl.rui.loader.internal.Module");
					egl.atLine(this.eze$$fileName,118,4116,32, this);
					var ezert$$19 = false;
					ezert$$19 = this.helper.notYetLoaded(module.name );
					egl.atLine(this.eze$$fileName,118,4112,502, this);
					if ( ezert$$19 ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,119,4154,108, this);
							this.invokeListeners(this.INFORLISTENER, String('',null), (("Module " + module.name) + " is not yet loaded"), egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].INFO_DEBUG, new egl.com.ibm.egl.rui.loader.HandlerLoadedEvent() );
							egl.atLine(this.eze$$fileName,120,4267,28, this);
							this.moduleNames.appendElement( module.name );
							egl.atLine(this.eze$$fileName,121,4379,60, this);
							this.helper.loadFile((this.baseURL + module.name), function() {
								var ezert$$20 = null;
								
								ezert$$20 = new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.loader.internal.ModuleLoader.prototype.handleModuleContent,"handleModuleContent");
							; return ezert$$20;}.call(this) );
						}finally{egl.exitBlock();}
					}
					else {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,123,4452,108, this);
							this.invokeListeners(this.INFORLISTENER, String('',null), (("Module " + module.name) + " is already loaded"), egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].INFO_DEBUG, new egl.com.ibm.egl.rui.loader.HandlerLoadedEvent() );
							egl.atLine(this.eze$$fileName,124,4565,19, this);
							this.alreadyLoaded = (this.alreadyLoaded + 1);
							egl.atLine(this.eze$$fileName,125,4589,18, this);
							this.doHandleModules();
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,128,4625,39, this);
					egl.valueByKey(egl.checkNull(egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].deployCache, "DynamicLoader.deployCache"), this.handlerName,this.moduleNames,"1S;");
					egl.atLine(this.eze$$fileName,129,4680,45, this);
					this.helper.deleteDefaultConstructor(this.handlerName );
					egl.atLine(this.eze$$fileName,130,4729,27, this);
					this.helper.eval(this.allJavaScript );
					egl.atLine(this.eze$$fileName,131,4760,177, this);
					this.invokeListeners(this.INFORLISTENER, String('',null), (((("Processed " + ((this.currentModuleNum - 1)).toString()) + " modules (of which ") + (this.alreadyLoaded).toString()) + " components were already loaded)."), egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].INFO_DEBUG, new egl.com.ibm.egl.rui.loader.HandlerLoadedEvent() );
					egl.atLine(this.eze$$fileName,132,4941,172, this);
					try {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,133,4950,16, this);
							this.createHandler();
						}finally{egl.exitBlock();}
					}
					catch ( ezert$$21 )
					{
						{
							if (ezert$$21 instanceof egl.egl.debug.DebugTermination){throw ezert$$21;}
							if (!(ezert$$21 instanceof egl.egl.core.AnyException)) {
								ezert$$21 = egl.makeExceptionFromCaughtObject(ezert$$21);
							}
							var e = ezert$$21;
							try{egl.enterBlock();
								egl.addLocalFunctionVariable("e", e, "egl.core.AnyException", "e");
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,135,5003,103, this);
									this.invokeListeners(this.FAILLISTENER, String('',null), (("<font color=red><b>" + egl.checkNull(e, "e").message) + "</b></font>"), String('',null), new egl.com.ibm.egl.rui.loader.HandlerLoadedEvent() );
								}finally{egl.exitBlock();}
							}finally{egl.exitBlock();}
						}
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,113,3858,1267, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"handleModuleContent": function( content ) {
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
		try { egl.enter("handleModuleContent",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("content", content, "string", "content");
			var currentModule = new egl.com.ibm.egl.rui.loader.internal.Module();
			egl.addLocalFunctionVariable("currentModule", currentModule, "com.ibm.egl.rui.loader.internal.Module", "currentModule");
			egl.atLine(this.eze$$fileName,141,5179,13, this);
			currentModule.eze$$assign(egl.checkNull(this.modules, "modules")[this.modules.checkIndex((this.currentModuleNum)-1)]);
			egl.setLocalFunctionVariable("currentModule", currentModule, "com.ibm.egl.rui.loader.internal.Module");
			egl.atLine(this.eze$$fileName,142,5236,86, this);
			this.allJavaScript = (this.allJavaScript + (((("// component " + currentModule.name) + "\r\n") + content) + "\r\n\r\n"));
			egl.atLine(this.eze$$fileName,143,5325,79, this);
			this.invokeListeners(this.INFORLISTENER, currentModule.name, String('',null), egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].INFO_LOAD, new egl.com.ibm.egl.rui.loader.HandlerLoadedEvent() );
			egl.atLine(this.eze$$fileName,144,5407,18, this);
			this.doHandleModules();
			egl.atLine(this.eze$$fileName,140,5129,301, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"unloadHandler": function( handlerName ) {
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
		try { egl.enter("unloadHandler",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("handlerName", handlerName, "string", "handlerName");
			egl.atLine(this.eze$$fileName,148,5483,816, this);
			try {
				try{egl.enterBlock();
					var components = null;
					egl.addLocalFunctionVariable("components", components, "string[]", "!components");
					egl.atLine(this.eze$$fileName,149,5490,10, this);
					components = egl.convertAnyToArrayType(egl.valueByKey(egl.checkNull(egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].deployCache, "DynamicLoader.deployCache"), handlerName),"1S;");
					egl.setLocalFunctionVariable("components", components, "string[]");
					egl.atLine(this.eze$$fileName,150,5541,540, this);
					if ( (components != null) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,151,5569,31, this);
							this.handlerName = handlerName;
							egl.atLine(this.eze$$fileName,152,5605,469, this);
							{
								try{egl.enterBlock();
									var n = 0;
									egl.addLocalFunctionVariable("n", n, "int", "n");
									n = 1;
									egl.setLocalFunctionVariable("n", n, "int");
									for ( ; (n <= components.getSize()); n = (n + 1) )
									{
										egl.setLocalFunctionVariable("n", n, "int");
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,153,5653,413, this);
											if ( !(this.matchUnloadFilter(egl.checkNull(components, "components")[components.checkIndex((n)-1)] )) ) {
												try{egl.enterBlock();
													var unloaded = false;
													egl.addLocalFunctionVariable("unloaded", unloaded, "boolean", "unloaded");
													egl.atLine(this.eze$$fileName,154,5716,28, this);
													var ezert$$22 = false;
													ezert$$22 = this.helper.unload(egl.checkNull(components, "components")[components.checkIndex((n)-1)] );
													egl.atLine(this.eze$$fileName,154,5697,8, this);
													unloaded = ezert$$22;
													egl.setLocalFunctionVariable("unloaded", unloaded, "boolean");
													egl.atLine(this.eze$$fileName,155,5753,206, this);
													if ( unloaded ) {
														try{egl.enterBlock();
															egl.atLine(this.eze$$fileName,156,5773,76, this);
															this.invokeListeners(this.INFORLISTENER, egl.checkNull(components, "components")[components.checkIndex((n)-1)], String('',null), egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].INFO_UNLOAD, new egl.com.ibm.egl.rui.loader.HandlerLoadedEvent() );
														}finally{egl.exitBlock();}
													}
													else {
														try{egl.enterBlock();
															egl.atLine(this.eze$$fileName,158,5868,81, this);
															this.invokeListeners(this.INFORLISTENER, egl.checkNull(components, "components")[components.checkIndex((n)-1)], String('',null), egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].INFO_UNLOAD_SKIP, new egl.com.ibm.egl.rui.loader.HandlerLoadedEvent() );
														}finally{egl.exitBlock();}
													}
												}finally{egl.exitBlock();}
											}
											else {
												try{egl.enterBlock();
													egl.atLine(this.eze$$fileName,161,5976,81, this);
													this.invokeListeners(this.INFORLISTENER, egl.checkNull(components, "components")[components.checkIndex((n)-1)], String('',null), egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].INFO_UNLOAD_SKIP, new egl.com.ibm.egl.rui.loader.HandlerLoadedEvent() );
												}finally{egl.exitBlock();}
											}
										}finally{egl.exitBlock();}
										egl.atLine(this.eze$$fileName,152,5605,469, this);
									}
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,165,6085,30, this);
					egl.valueByKey(egl.checkNull(egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].deployCache, "DynamicLoader.deployCache"), handlerName,[  ],"1A;");
					egl.atLine(this.eze$$fileName,166,6119,42, this);
					this.helper.setDefaultConstructor(handlerName );
				}finally{egl.exitBlock();}
			}
			catch ( ezert$$23 )
			{
				{
					if (ezert$$23 instanceof egl.egl.debug.DebugTermination){throw ezert$$23;}
					if (!(ezert$$23 instanceof egl.egl.core.AnyException)) {
						ezert$$23 = egl.makeExceptionFromCaughtObject(ezert$$23);
					}
					var e = ezert$$23;
					try{egl.enterBlock();
						egl.addLocalFunctionVariable("e", e, "egl.core.AnyException", "e");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,168,6196,97, this);
							this.invokeListeners(this.FAILLISTENER, String('',null), ((("UNLOAD " + handlerName) + ": ") + egl.checkNull(e, "e").message), String('',null), new egl.com.ibm.egl.rui.loader.HandlerLoadedEvent() );
						}finally{egl.exitBlock();}
					}finally{egl.exitBlock();}
				}
			}
			egl.atLine(this.eze$$fileName,147,5435,870, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"matchUnloadFilter": function( moduleName ) {
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
		try { egl.enter("matchUnloadFilter",this,arguments,eze$$updater);
			var $result = false;
			egl.addLocalFunctionVariable("moduleName", moduleName, "string", "moduleName");
			var filterCounts = 0;
			egl.addLocalFunctionVariable("filterCounts", filterCounts, "int", "filterCounts");
			egl.atLine(this.eze$$fileName,173,6397,22, this);
			var ezert$$24 = 0;
			ezert$$24 = egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].unloadFilter.getSize();
			egl.atLine(this.eze$$fileName,173,6378,12, this);
			filterCounts = ezert$$24;
			egl.setLocalFunctionVariable("filterCounts", filterCounts, "int");
			var filterLen = 0;
			egl.addLocalFunctionVariable("filterLen", filterLen, "int", "filterLen");
			var filter = "";
			egl.addLocalFunctionVariable("filter", filter, "string", "filter");
			var moduleNameLen = 0;
			egl.addLocalFunctionVariable("moduleNameLen", moduleNameLen, "int", "moduleNameLen");
			egl.atLine(this.eze$$fileName,176,6477,31, this);
			var ezert$$25 = 0;
			ezert$$25 = egl.egl.core.$StrLib.textLen( moduleName);
			egl.atLine(this.eze$$fileName,176,6457,13, this);
			moduleNameLen = ezert$$25;
			egl.setLocalFunctionVariable("moduleNameLen", moduleNameLen, "int");
			egl.atLine(this.eze$$fileName,177,6512,225, this);
			{
				try{egl.enterBlock();
					var i = 0;
					egl.addLocalFunctionVariable("i", i, "int", "i");
					i = 1;
					egl.setLocalFunctionVariable("i", i, "int");
					for ( ; (i <= filterCounts); i = (i + 1) )
					{
						egl.setLocalFunctionVariable("i", i, "int");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,178,6549,25, this);
							filter = egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].unloadFilter[egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].unloadFilter.checkIndex((i)-1)];
							egl.setLocalFunctionVariable("filter", filter, "string");
							egl.atLine(this.eze$$fileName,179,6590,27, this);
							var ezert$$26 = 0;
							ezert$$26 = egl.egl.core.$StrLib.textLen( filter);
							egl.atLine(this.eze$$fileName,179,6578,40, this);
							filterLen = ezert$$26;
							egl.setLocalFunctionVariable("filterLen", filterLen, "int");
							egl.atLine(this.eze$$fileName,180,6622,108, this);
							if ( (moduleNameLen >= filterLen) ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,181,6657,66, this);
									if ( (moduleName.substring( 1-1,filterLen) == filter) ) {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,182,6701,14, this);
											$result = true;
											egl.setLocalFunctionVariable("BOOLEAN", $result, "boolean");
											{ if (!egl.debugg) egl.leave(); return $result;}
										}finally{egl.exitBlock();}
									}
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,177,6512,225, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,186,6740,15, this);
			$result = false;
			egl.setLocalFunctionVariable("BOOLEAN", $result, "boolean");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"noHandlerFound": function( e ) {
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
		try { egl.enter("noHandlerFound",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("e", e, "egl.core.AnyException", "e");
			var details = "";
			egl.addLocalFunctionVariable("details", details, "string", "details");
			egl.atLine(this.eze$$fileName,190,6808,7, this);
			details = ((((((egl.checkNull(e, "e").message + " ") + egl.checkNull(egl.convertAnyExToNameType(e,'Tegl/core/ServiceInvocationException;'), "e as ServiceInvocationException").detail1) + " ") + egl.checkNull(egl.convertAnyExToNameType(e,'Tegl/core/ServiceInvocationException;'), "e as ServiceInvocationException").detail2) + " ") + egl.checkNull(egl.convertAnyExToNameType(e,'Tegl/core/ServiceInvocationException;'), "e as ServiceInvocationException").detail3);
			egl.setLocalFunctionVariable("details", details, "string");
			egl.atLine(this.eze$$fileName,194,7000,129, this);
			this.invokeListeners(this.FAILLISTENER, String('',null), ((("<font color=red><b>Cannot load " + this.handlerName) + "</b></font>: ") + details), String('',null), new egl.com.ibm.egl.rui.loader.HandlerLoadedEvent() );
			egl.atLine(this.eze$$fileName,189,6763,371, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"createHandler": function() {
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
		try { egl.enter("createHandler",this,arguments,eze$$updater);
			egl.atLine(this.eze$$fileName,198,7166,734, this);
			if ( this.instantiate ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,199,7190,104, this);
					this.invokeListeners(this.INFORLISTENER, String('',null), ("Now creating an instance of " + this.handlerName), egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].INFO_DEBUG, new egl.com.ibm.egl.rui.loader.HandlerLoadedEvent() );
					var page = null;
					egl.addLocalFunctionVariable("page", page, "any", "page");
					egl.atLine(this.eze$$fileName,200,7309,33, this);
					var ezert$$27 = null;
					ezert$$27 = this.helper.createHandler(this.handlerName );
					egl.atLine(this.eze$$fileName,200,7298,4, this);
					page = egl.boxAny(ezert$$27);
					egl.setLocalFunctionVariable("page", page, "any");
					var widgets = (function(){ var ezert$$28= []; ezert$$28.setType( egl.egl.ui.rui.Widget );for (var i=0; i < 0; i++) {
							ezert$$28[ i ] = new egl.egl.ui.rui.Widget();
						}
						// no max size set for this array
					return ezert$$28;})();
					egl.addLocalFunctionVariable("widgets", widgets, "egl.ui.rui.Widget[]", "!widgets");
					egl.atLine(this.eze$$fileName,202,7369,127, this);
					try {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,203,7395,34, this);
							var ezert$$29 = null;
							ezert$$29 = egl.boxElements(this.helper.getField(egl.unboxAny(page), "initialUI" ));
							egl.atLine(this.eze$$fileName,203,7377,54, this);
							widgets.appendAll( ezert$$29 );
						}finally{egl.exitBlock();}
					}
					catch ( ezert$$30 )
					{
						{
							if (ezert$$30 instanceof egl.egl.debug.DebugTermination){throw ezert$$30;}
							if (!(ezert$$30 instanceof egl.egl.core.AnyException)) {
								ezert$$30 = egl.makeExceptionFromCaughtObject(ezert$$30);
							}
							var ignoreMissingInitialUIField = ezert$$30;
							try{egl.enterBlock();
								egl.addLocalFunctionVariable("ignoreMissingInitialUIField", ignoreMissingInitialUIField, "egl.core.AnyException", "ignoreMissingInitialUIField");
								try{egl.enterBlock();
								}finally{egl.exitBlock();}
							}finally{egl.exitBlock();}
						}
					}
					var handlerLoadedEvent = new egl.com.ibm.egl.rui.loader.HandlerLoadedEvent();
					egl.addLocalFunctionVariable("handlerLoadedEvent", handlerLoadedEvent, "com.ibm.egl.rui.loader.HandlerLoadedEvent", "handlerLoadedEvent");
					egl.atLine(this.eze$$fileName,207,7544,18, this);
					handlerLoadedEvent.name = this.handlerName;
					egl.atLine(this.eze$$fileName,208,7569,19, this);
					handlerLoadedEvent.initialUI = widgets;
					egl.atLine(this.eze$$fileName,209,7594,17, this);
					handlerLoadedEvent.theHandler = page;
					egl.atLine(this.eze$$fileName,211,7621,73, this);
					this.invokeListeners(this.DONELISTENER, String('',null), String('',null), String('',null), function() {
						var ezert$$31 = new egl.com.ibm.egl.rui.loader.HandlerLoadedEvent();
						
						ezert$$31.eze$$assign(handlerLoadedEvent);
					; return ezert$$31;}.call(this) );
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					var handlerLoadedEvent = new egl.com.ibm.egl.rui.loader.HandlerLoadedEvent();
					egl.addLocalFunctionVariable("handlerLoadedEvent", handlerLoadedEvent, "com.ibm.egl.rui.loader.HandlerLoadedEvent", "handlerLoadedEvent");
					egl.atLine(this.eze$$fileName,214,7749,18, this);
					handlerLoadedEvent.name = this.handlerName;
					egl.atLine(this.eze$$fileName,215,7774,14, this);
					handlerLoadedEvent.initialUI = [  ];
					egl.atLine(this.eze$$fileName,216,7794,17, this);
					handlerLoadedEvent.theHandler = null;
					egl.atLine(this.eze$$fileName,218,7821,73, this);
					this.invokeListeners(this.DONELISTENER, String('',null), String('',null), String('',null), function() {
						var ezert$$32 = new egl.com.ibm.egl.rui.loader.HandlerLoadedEvent();
						
						ezert$$32.eze$$assign(handlerLoadedEvent);
					; return ezert$$32;}.call(this) );
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,197,7139,766, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"invokeListeners": function( ListenerType, resourceName, message, code, loadedEvent ) {
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
		try { egl.enter("invokeListeners",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("ListenerType", ListenerType, "string", "ListenerType");
			egl.addLocalFunctionVariable("resourceName", resourceName, "string", "resourceName");
			egl.addLocalFunctionVariable("message", message, "string", "message");
			egl.addLocalFunctionVariable("code", code, "string", "code");
			egl.addLocalFunctionVariable("loadedEvent", loadedEvent, "com.ibm.egl.rui.loader.HandlerLoadedEvent", "loadedEvent");
			egl.atLine(this.eze$$fileName,223,8063,435, this);
			switch( ListenerType ) {
				case this.INFORLISTENER:
					egl.atLine(this.eze$$fileName,224,8086,149, this);
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,225,8110,125, this);
						{
							try{egl.enterBlock();
								var i = 0;
								egl.addLocalFunctionVariable("i", i, "int", "i");
								i = 1;
								egl.setLocalFunctionVariable("i", i, "int");
								for ( ; (i <= egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].loadInfoListeners.getSize()); i = (i + 1) )
								{
									egl.setLocalFunctionVariable("i", i, "int");
									try{egl.enterBlock();
										egl.atLine(this.eze$$fileName,226,8164,63, this);
										egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].loadInfoListeners[egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].loadInfoListeners.checkIndex((i)-1)](this.handlerName, resourceName, code, message );
									}finally{egl.exitBlock();}
									egl.atLine(this.eze$$fileName,225,8110,125, this);
								}
							}finally{egl.exitBlock();}
						}
					}finally{egl.exitBlock();}
					break;
				case this.FAILLISTENER:
					egl.atLine(this.eze$$fileName,228,8240,128, this);
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,229,8263,105, this);
						{
							try{egl.enterBlock();
								var i = 0;
								egl.addLocalFunctionVariable("i", i, "int", "i");
								i = 1;
								egl.setLocalFunctionVariable("i", i, "int");
								for ( ; (i <= egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].loadFailListeners.getSize()); i = (i + 1) )
								{
									egl.setLocalFunctionVariable("i", i, "int");
									try{egl.enterBlock();
										egl.atLine(this.eze$$fileName,230,8317,43, this);
										egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].loadFailListeners[egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].loadFailListeners.checkIndex((i)-1)](this.handlerName, message );
									}finally{egl.exitBlock();}
									egl.atLine(this.eze$$fileName,229,8263,105, this);
								}
							}finally{egl.exitBlock();}
						}
					}finally{egl.exitBlock();}
					break;
				case this.DONELISTENER:
					egl.atLine(this.eze$$fileName,232,8372,119, this);
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,233,8395,96, this);
						{
							try{egl.enterBlock();
								var i = 0;
								egl.addLocalFunctionVariable("i", i, "int", "i");
								i = 1;
								egl.setLocalFunctionVariable("i", i, "int");
								for ( ; (i <= egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].loadDoneListeners.getSize()); i = (i + 1) )
								{
									egl.setLocalFunctionVariable("i", i, "int");
									try{egl.enterBlock();
										egl.atLine(this.eze$$fileName,234,8449,34, this);
										egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].loadDoneListeners[egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'].loadDoneListeners.checkIndex((i)-1)](function() {
											var ezert$$33 = new egl.com.ibm.egl.rui.loader.HandlerLoadedEvent();
											
											ezert$$33.eze$$assign(loadedEvent);
										; return ezert$$33;}.call(this) );
									}finally{egl.exitBlock();}
									egl.atLine(this.eze$$fileName,233,8395,96, this);
								}
							}finally{egl.exitBlock();}
						}
					}finally{egl.exitBlock();}
					break;
				default:
				try{egl.enterBlock();
				}finally{egl.exitBlock();}
				break;
			}
			egl.atLine(this.eze$$fileName,222,7910,593, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"toString": function() {
		return "[ModuleLoader]";
	}
	,
	"eze$$getName": function() {
		return "ModuleLoader";
	}
	,
	"eze$$getChildVariables": function() {
		var eze$$parent = this;
		return [
		{name : "Build Descriptor", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, value : {"eze$$getChildVariables": function() {
					return [
					{name : "Name", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, value : {"toString": function(){return "com_ibm_egl_rui_4_1_0JavaScriptBuildOptions";}}, type : ""},
					{name : "Path", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, value : {"toString": function(){return "\\com.ibm.egl.rui_4.1.0\\EGLSource\\com_ibm_egl_rui_4_1_0.eglbld";}}, type : ""},
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
								{name : "dbms", value : "DERBY", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "debugTrace", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "decimalSymbol", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "defaultDateFormat", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "defaultMoneyFormat", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "defaultNumericFormat", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "defaultTimeFormat", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "defaultTimeStampFormat", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "deploymentDescriptor", value : "com_ibm_egl_rui_4_1_0", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
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
								{name : "genProject", value : "com.ibm.egl.rui_4.1.0", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "genProperties", value : "GLOBAL", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
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
								{name : "sqlDB", value : "jdbc:derby:E:\\rbdws\\v8.0\\DynamicLoading\\.metadata\\.plugins\\org.eclipse.birt.report.data.oda.jdbc.dbprofile.sampledb/db/BirtSample", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "sqlErrorTrace", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "sqlID", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "sqlIOTrace", value : {"toString": function(){return "NO";}}, attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "sqlJDBCDriverClass", value : "org.apache.derby.jdbc.EmbeddedDriver", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "sqlJNDIName", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "sqlSchema", value : "", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
								{name : "sqlValidationConnectionURL", value : "jdbc:derby:E:\\rbdws\\v8.0\\DynamicLoading\\.metadata\\.plugins\\org.eclipse.birt.report.data.oda.jdbc.dbprofile.sampledb/db/BirtSample", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
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
		
		{name: "DynamicLoader", value : egl.com.ibm.egl.rui.loader.DynamicLoader['$inst'], type : "com.ibm.egl.rui.loader.DynamicLoader", jsName : "egl.com.ibm.egl.rui.loader.DynamicLoader.$inst"},
		{name: "FAILLISTENER", value : eze$$parent.FAILLISTENER, type : "string", jsName : "FAILLISTENER"},
		{name: "INFORLISTENER", value : eze$$parent.INFORLISTENER, type : "string", jsName : "INFORLISTENER"},
		{name: "DONELISTENER", value : eze$$parent.DONELISTENER, type : "string", jsName : "DONELISTENER"},
		{name: "context", value : eze$$parent.context, type : "string", jsName : "context"},
		{name: "helper", value : eze$$parent.helper, type : "com.ibm.egl.rui.loader.internal.Helper", jsName : "helper"},
		{name: "components", value : eze$$parent.components, type : "string[]", jsName : "!components"},
		{name: "handlerName", value : eze$$parent.handlerName, type : "string", jsName : "handlerName"},
		{name: "baseURL", value : eze$$parent.baseURL, type : "string", jsName : "baseURL"},
		{name: "modules", value : eze$$parent.modules, type : "com.ibm.egl.rui.loader.internal.Module[]", jsName : "!modules"},
		{name: "currentModuleNum", value : eze$$parent.currentModuleNum, type : "int", jsName : "currentModuleNum"},
		{name: "allJavaScript", value : eze$$parent.allJavaScript, type : "string", jsName : "allJavaScript"},
		{name: "alreadyLoaded", value : eze$$parent.alreadyLoaded, type : "int", jsName : "alreadyLoaded"},
		{name: "moduleNames", value : eze$$parent.moduleNames, type : "string[]", jsName : "!moduleNames"},
		{name: "instantiate", value : eze$$parent.instantiate, type : "boolean", jsName : "instantiate"}
		];
	}
}
);
