// Generated at Sun Sep 03 10:03:14 AST 2023 by EGL 7.1.1.v20180914_0609
// No APARs installed.

egl.defineRUIWidget('com.ibm.egl.rui.mvc', 'Controller', {
	'eze$$fileName': '/com.ibm.egl.rui_4.1.0/EGLSource/com/ibm/egl/rui/mvc/Controller.egl',
	'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/mvc/Controller',
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
			egl.atLine(this.eze$$fileName,21,519,69, this);
			this.model = null;
			egl.atLine(this.eze$$fileName,22,590,70, this);
			this.view = new egl.egl.ui.rui.Widget();
			egl.addEmbeddedWidget(this, "view");
			
			egl.atLine(this.eze$$fileName,24,664,39, this);
			this.formatters = null;
			
			egl.atLine(this.eze$$fileName,25,705,41, this);
			this.unformatters = null;
			
			egl.atLine(this.eze$$fileName,26,748,39, this);
			this.validators = null;
			
			egl.atLine(this.eze$$fileName,28,791,55, this);
			this.internalFormatters = null;
			
			egl.atLine(this.eze$$fileName,29,848,57, this);
			this.internalUnformatters = null;
			
			egl.atLine(this.eze$$fileName,30,907,55, this);
			this.internalValidators = null;
			
			egl.atLine(this.eze$$fileName,32,966,99, this);
			this.commitHelper = null;
			
			egl.atLine(this.eze$$fileName,33,1067,120, this);
			this.retrieveModelHelper = null;
			
			egl.atLine(this.eze$$fileName,36,1214,102, this);
			this.publishHelper = null;
			
			egl.atLine(this.eze$$fileName,37,1318,117, this);
			this.retrieveViewHelper = null;
			
			egl.atLine(this.eze$$fileName,38,1438,130, this);
			this.publishMessageHelper = null;
			
			egl.atLine(this.eze$$fileName,39,1570,145, this);
			this.retrieveValidStateHelper = null;
			
			egl.atLine(this.eze$$fileName,40,1717,108, this);
			this.showErrorState = null;
			
			egl.atLine(this.eze$$fileName,42,1829,37, this);
			this.validStateSetter = null;
			
			egl.atLine(this.eze$$fileName,44,1870,36, this);
			this.errorMessage = null;
			egl.atLine(this.eze$$fileName,45,1908,33, this);
			this.initialClass = "";
			egl.atLine(this.eze$$fileName,46,1943,43, this);
			this.isStateInitialized = false;
			egl.atLine(this.eze$$fileName,47,1988,46, this);
			this.publishJob = new egl.egl.javascript.Job();
			
			this.jsrt$SysVar= new egl.egl.core.SysVar();
			new egl.com.ibm.egl.rui.mvc.InternalFormatters();
			new egl.com.ibm.egl.rui.mvc.InternalTimestampFormatter();
			new egl.com.ibm.egl.rui.mvc.InternalCharFormatter();
			new egl.com.ibm.egl.rui.mvc.InternalDateFormatter();
			new egl.com.ibm.egl.rui.mvc.InternalValidators();
			new egl.com.ibm.egl.rui.mvc.InternalNumericFormatter();
			new egl.com.ibm.egl.rui.mvc.InternalTimeFormatter();
			new egl.com.ibm.egl.rui.mvc.MVCLib();
			egl.atLine(this.eze$$fileName,24,664,10, this);
			this.formatters = [  ].setType( "Tcom/ibm/egl/rui/mvc/mvcformatterfunction;" );
			egl.atLine(this.eze$$fileName,25,705,12, this);
			this.unformatters = [  ].setType( "Tcom/ibm/egl/rui/mvc/mvcformatterfunction;" );
			egl.atLine(this.eze$$fileName,26,748,10, this);
			this.validators = [  ].setType( "Tcom/ibm/egl/rui/mvc/mvcvalidatorfunction;" );
			egl.atLine(this.eze$$fileName,28,799,18, this);
			this.internalFormatters = [  ].setType( "Tcom/ibm/egl/rui/mvc/mvcformatterfunction;" );
			egl.atLine(this.eze$$fileName,29,856,20, this);
			this.internalUnformatters = [  ].setType( "Tcom/ibm/egl/rui/mvc/mvcformatterfunction;" );
			egl.atLine(this.eze$$fileName,30,915,18, this);
			this.internalValidators = [  ].setType( "Tcom/ibm/egl/rui/mvc/mvcvalidatorfunction;" );
			egl.atLine(this.eze$$fileName,44,1878,12, this);
			this.errorMessage = null;
			egl.atLine(this.eze$$fileName,45,1916,12, this);
			this.initialClass = "";
			egl.atLine(this.eze$$fileName,46,1951,18, this);
			this.isStateInitialized = false;
			egl.atLine(this.eze$$fileName,47,2011,21, this);
			this.publishJob.setRunFunction( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.mvc.Controller.prototype.publish,"publish") );
			if (!egl.debugg) egl.leave();
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	
	,
	"setModel": function( model ) {
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
		try { egl.enter("setModel",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("model", model, "any", "model");
			egl.atLine(this.eze$$fileName,50,2080,19, this);
			this.model = model;
			egl.atLine(this.eze$$fileName,51,2102,22, this);
			this.publishJob.schedule();
			egl.atLine(this.eze$$fileName,49,2038,91, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setView": function( view ) {
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
		try { egl.enter("setView",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("view", view, "egl.ui.rui.Widget", "view");
			egl.atLine(this.eze$$fileName,55,2175,17, this);
			this.view = view;
			egl.atLine(this.eze$$fileName,57,2230,35, this);
			view.getOnFocusGained().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.mvc.Controller.prototype.focusGained,"focusGained") );
			egl.atLine(this.eze$$fileName,58,2270,31, this);
			view.getOnFocusLost().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.mvc.Controller.prototype.focusLost,"focusLost") );
			egl.atLine(this.eze$$fileName,59,2304,22, this);
			this.publishJob.schedule();
			egl.atLine(this.eze$$fileName,54,2132,199, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"commit": function() {
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
		try { egl.enter("commit",this,arguments,eze$$updater);
			egl.atLine(this.eze$$fileName,63,2354,318, this);
			try {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,64,2361,31, this);
					egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext( this );
					var s = "";
					egl.addLocalFunctionVariable("s", s, "string", "s");
					egl.atLine(this.eze$$fileName,65,2416,20, this);
					var ezert$$1 = "";
					ezert$$1 = this.retrieveViewHelper();
					egl.atLine(this.eze$$fileName,65,2407,30, this);
					var ezert$$2 = "";
					ezert$$2 = this.unformat(ezert$$1 );
					egl.atLine(this.eze$$fileName,65,2396,1, this);
					s = ezert$$2;
					egl.setLocalFunctionVariable("s", s, "string");
					egl.atLine(this.eze$$fileName,66,2442,31, this);
					egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext( this );
					egl.atLine(this.eze$$fileName,67,2516,16, this);
					this.commitHelper(s );
					egl.atLine(this.eze$$fileName,68,2536,31, this);
					egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext(null );
				}finally{egl.exitBlock();}
			}
			catch ( ezert$$3 )
			{
				if ( ezert$$3 instanceof egl.egl.core.RuntimeException ) {
					var e = ezert$$3;
					try{egl.enterBlock();
						egl.addLocalFunctionVariable("e", e, "egl.core.RuntimeException", "e");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,70,2606,31, this);
							egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext(null );
							egl.atLine(this.eze$$fileName,71,2641,25, this);
							this.errorMessage = egl.checkNull(e, "e").message;
						}finally{egl.exitBlock();}
					}finally{egl.exitBlock();}
				}
				else {
					throw ezert$$3;
				}
			}
			egl.atLine(this.eze$$fileName,62,2334,343, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"publish": function() {
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
		try { egl.enter("publish",this,arguments,eze$$updater);
			egl.atLine(this.eze$$fileName,76,2702,345, this);
			try {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,77,2709,31, this);
					egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext( this );
					var s = "";
					egl.addLocalFunctionVariable("s", s, "string", "s");
					egl.atLine(this.eze$$fileName,78,2762,21, this);
					var ezert$$4 = "";
					ezert$$4 = this.retrieveModelHelper();
					egl.atLine(this.eze$$fileName,78,2755,29, this);
					var ezert$$5 = "";
					ezert$$5 = this.format(ezert$$4 );
					egl.atLine(this.eze$$fileName,78,2744,1, this);
					s = ezert$$5;
					egl.setLocalFunctionVariable("s", s, "string");
					egl.atLine(this.eze$$fileName,79,2789,31, this);
					egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext( this );
					egl.atLine(this.eze$$fileName,80,2861,17, this);
					this.publishHelper(s );
					egl.atLine(this.eze$$fileName,81,2882,29, this);
					this.updateViewErrorDisplay(true );
					egl.atLine(this.eze$$fileName,82,2915,31, this);
					egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext(null );
				}finally{egl.exitBlock();}
			}
			catch ( ezert$$6 )
			{
				{
					if (ezert$$6 instanceof egl.egl.debug.DebugTermination){throw ezert$$6;}
					if (!(ezert$$6 instanceof egl.egl.core.AnyException)) {
						ezert$$6 = egl.makeExceptionFromCaughtObject(ezert$$6);
					}
					var exception = ezert$$6;
					try{egl.enterBlock();
						egl.addLocalFunctionVariable("exception", exception, "egl.core.AnyException", "exception");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,84,2989,31, this);
							egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext(null );
							egl.atLine(this.eze$$fileName,85,3024,17, this);
							throw exception;
						}finally{egl.exitBlock();}
					}finally{egl.exitBlock();}
				}
			}
			egl.atLine(this.eze$$fileName,75,2681,371, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"isValid": function() {
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
		try { egl.enter("isValid",this,arguments,eze$$updater);
			var $result = false;
			var valid = false;
			egl.addLocalFunctionVariable("valid", valid, "boolean", "valid");
			egl.atLine(this.eze$$fileName,90,3111,10, this);
			var ezert$$7 = false;
			ezert$$7 = this.validate();
			egl.atLine(this.eze$$fileName,90,3095,5, this);
			valid = ezert$$7;
			egl.setLocalFunctionVariable("valid", valid, "boolean");
			egl.atLine(this.eze$$fileName,91,3125,25, this);
			this.notifyStateChange(valid );
			egl.atLine(this.eze$$fileName,92,3153,15, this);
			$result = valid;
			egl.setLocalFunctionVariable("BOOLEAN", $result, "boolean");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"validate": function() {
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
		try { egl.enter("validate",this,arguments,eze$$updater);
			var $result = false;
			egl.atLine(this.eze$$fileName,96,3217,26, this);
			this.isStateInitialized = true;
			egl.atLine(this.eze$$fileName,97,3248,966, this);
			try {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,98,3255,31, this);
					egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext( this );
					egl.atLine(this.eze$$fileName,99,3290,185, this);
					if ( (this.retrieveValidStateHelper != null) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,100,3351,31, this);
							var ezert$$8 = null;
							ezert$$8 = this.retrieveValidStateHelper();
							egl.atLine(this.eze$$fileName,100,3336,47, this);
							this.errorMessage = ezert$$8;
							egl.atLine(this.eze$$fileName,101,3388,79, this);
							if ( !(((this.errorMessage == null) || (egl.nullableCompare(this.errorMessage,"", 1) == 0))) ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,102,3444,15, this);
									$result = false;
									egl.setLocalFunctionVariable("BOOLEAN", $result, "boolean");
									{ if (!egl.debugg) egl.leave(); return $result;}
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
					}
					var s = "";
					egl.addLocalFunctionVariable("s", s, "string", "s");
					egl.atLine(this.eze$$fileName,105,3499,20, this);
					var ezert$$9 = "";
					ezert$$9 = this.retrieveViewHelper();
					egl.atLine(this.eze$$fileName,105,3490,30, this);
					var ezert$$10 = "";
					ezert$$10 = this.unformat(ezert$$9 );
					egl.atLine(this.eze$$fileName,105,3479,1, this);
					s = ezert$$10;
					egl.setLocalFunctionVariable("s", s, "string");
					egl.atLine(this.eze$$fileName,106,3525,31, this);
					egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext( this );
					egl.atLine(this.eze$$fileName,107,3634,53, this);
					if ( (this.errorMessage != null) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,108,3665,15, this);
							$result = false;
							egl.setLocalFunctionVariable("BOOLEAN", $result, "boolean");
							{ if (!egl.debugg) egl.leave(); return $result;}
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,110,3691,191, this);
					{
						try{egl.enterBlock();
							var n = 0;
							egl.addLocalFunctionVariable("n", n, "int", "n");
							n = 1;
							egl.setLocalFunctionVariable("n", n, "int");
							for ( ; (n <= this.internalValidators.getSize()); n = (n + 1) )
							{
								egl.setLocalFunctionVariable("n", n, "int");
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,111,3766,24, this);
									var ezert$$11 = null;
									ezert$$11 = egl.checkNull(this.internalValidators, "internalValidators")[this.internalValidators.checkIndex((n)-1)](s );
									egl.atLine(this.eze$$fileName,111,3751,40, this);
									this.errorMessage = ezert$$11;
									egl.atLine(this.eze$$fileName,112,3796,79, this);
									if ( !(((this.errorMessage == null) || (egl.nullableCompare(this.errorMessage,"", 1) == 0))) ) {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,113,3852,15, this);
											$result = false;
											egl.setLocalFunctionVariable("BOOLEAN", $result, "boolean");
											{ if (!egl.debugg) egl.leave(); return $result;}
										}finally{egl.exitBlock();}
									}
								}finally{egl.exitBlock();}
								egl.atLine(this.eze$$fileName,110,3691,191, this);
							}
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,116,3886,175, this);
					{
						try{egl.enterBlock();
							var n = 0;
							egl.addLocalFunctionVariable("n", n, "int", "n");
							n = 1;
							egl.setLocalFunctionVariable("n", n, "int");
							for ( ; (n <= this.validators.getSize()); n = (n + 1) )
							{
								egl.setLocalFunctionVariable("n", n, "int");
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,117,3953,16, this);
									var ezert$$12 = null;
									ezert$$12 = egl.checkNull(this.validators, "validators")[this.validators.checkIndex((n)-1)](s );
									egl.atLine(this.eze$$fileName,117,3938,32, this);
									this.errorMessage = ezert$$12;
									egl.atLine(this.eze$$fileName,118,3975,79, this);
									if ( !(((this.errorMessage == null) || (egl.nullableCompare(this.errorMessage,"", 1) == 0))) ) {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,119,4031,15, this);
											$result = false;
											egl.setLocalFunctionVariable("BOOLEAN", $result, "boolean");
											{ if (!egl.debugg) egl.leave(); return $result;}
										}finally{egl.exitBlock();}
									}
								}finally{egl.exitBlock();}
								egl.atLine(this.eze$$fileName,116,3886,175, this);
							}
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,122,4065,31, this);
					egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext(null );
					egl.atLine(this.eze$$fileName,123,4100,13, this);
					$result = true;
					egl.setLocalFunctionVariable("BOOLEAN", $result, "boolean");
					{ if (!egl.debugg) egl.leave(); return $result;}
				}finally{egl.exitBlock();}
			}
			catch ( ezert$$13 )
			{
				{
					if (ezert$$13 instanceof egl.egl.debug.DebugTermination){throw ezert$$13;}
					if (!(ezert$$13 instanceof egl.egl.core.AnyException)) {
						ezert$$13 = egl.makeExceptionFromCaughtObject(ezert$$13);
					}
					var exception = ezert$$13;
					try{egl.enterBlock();
						egl.addLocalFunctionVariable("exception", exception, "egl.core.AnyException", "exception");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,125,4156,31, this);
							egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext(null );
							egl.atLine(this.eze$$fileName,126,4191,17, this);
							throw exception;
						}finally{egl.exitBlock();}
					}finally{egl.exitBlock();}
				}
			}
			egl.atLine(this.eze$$fileName,95,3178,1041, this);
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"format": function( s ) {
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
		try { egl.enter("format",this,arguments,eze$$updater);
			var $result = "";
			egl.addLocalFunctionVariable("s", s, "string", "s");
			egl.atLine(this.eze$$fileName,131,4270,382, this);
			try {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,132,4277,31, this);
					egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext( this );
					egl.atLine(this.eze$$fileName,133,4312,106, this);
					{
						try{egl.enterBlock();
							var n = 0;
							egl.addLocalFunctionVariable("n", n, "int", "n");
							var ezert$$14 = 0;
							ezert$$14 = this.internalFormatters.getSize();
							n = ezert$$14;
							egl.setLocalFunctionVariable("n", n, "int");
							for ( ; (n >= 1); n = (n - 1) )
							{
								egl.setLocalFunctionVariable("n", n, "int");
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,134,4386,24, this);
									var ezert$$15 = "";
									ezert$$15 = egl.checkNull(this.internalFormatters, "internalFormatters")[this.internalFormatters.checkIndex((n)-1)](s );
									egl.atLine(this.eze$$fileName,134,4382,29, this);
									s = ezert$$15;
									egl.setLocalFunctionVariable("s", s, "string");
								}finally{egl.exitBlock();}
								egl.atLine(this.eze$$fileName,133,4312,106, this);
							}
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,136,4422,90, this);
					{
						try{egl.enterBlock();
							var n = 0;
							egl.addLocalFunctionVariable("n", n, "int", "n");
							var ezert$$16 = 0;
							ezert$$16 = this.formatters.getSize();
							n = ezert$$16;
							egl.setLocalFunctionVariable("n", n, "int");
							for ( ; (n >= 1); n = (n - 1) )
							{
								egl.setLocalFunctionVariable("n", n, "int");
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,137,4488,16, this);
									var ezert$$17 = "";
									ezert$$17 = egl.checkNull(this.formatters, "formatters")[this.formatters.checkIndex((n)-1)](s );
									egl.atLine(this.eze$$fileName,137,4484,21, this);
									s = ezert$$17;
									egl.setLocalFunctionVariable("s", s, "string");
								}finally{egl.exitBlock();}
								egl.atLine(this.eze$$fileName,136,4422,90, this);
							}
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,139,4516,31, this);
					egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext(null );
				}finally{egl.exitBlock();}
			}
			catch ( ezert$$18 )
			{
				if ( ezert$$18 instanceof egl.egl.core.RuntimeException ) {
					var e = ezert$$18;
					try{egl.enterBlock();
						egl.addLocalFunctionVariable("e", e, "egl.core.RuntimeException", "e");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,141,4586,31, this);
							egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext(null );
							egl.atLine(this.eze$$fileName,142,4621,25, this);
							this.errorMessage = egl.checkNull(e, "e").message;
						}finally{egl.exitBlock();}
					}finally{egl.exitBlock();}
				}
				else {
					throw ezert$$18;
				}
			}
			egl.atLine(this.eze$$fileName,144,4655,10, this);
			$result = s;
			egl.setLocalFunctionVariable("STRING", $result, "string");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"unformat": function( s ) {
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
		try { egl.enter("unformat",this,arguments,eze$$updater);
			var $result = "";
			egl.addLocalFunctionVariable("s", s, "string", "s");
			egl.atLine(this.eze$$fileName,148,4723,20, this);
			this.errorMessage = null;
			egl.atLine(this.eze$$fileName,149,4746,390, this);
			try {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,150,4753,31, this);
					egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext( this );
					egl.atLine(this.eze$$fileName,151,4788,94, this);
					{
						try{egl.enterBlock();
							var n = 0;
							egl.addLocalFunctionVariable("n", n, "int", "n");
							var ezert$$19 = 0;
							ezert$$19 = this.unformatters.getSize();
							n = ezert$$19;
							egl.setLocalFunctionVariable("n", n, "int");
							for ( ; (n >= 1); n = (n - 1) )
							{
								egl.setLocalFunctionVariable("n", n, "int");
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,152,4856,18, this);
									var ezert$$20 = "";
									ezert$$20 = egl.checkNull(this.unformatters, "unformatters")[this.unformatters.checkIndex((n)-1)](s );
									egl.atLine(this.eze$$fileName,152,4852,23, this);
									s = ezert$$20;
									egl.setLocalFunctionVariable("s", s, "string");
								}finally{egl.exitBlock();}
								egl.atLine(this.eze$$fileName,151,4788,94, this);
							}
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,154,4886,110, this);
					{
						try{egl.enterBlock();
							var n = 0;
							egl.addLocalFunctionVariable("n", n, "int", "n");
							var ezert$$21 = 0;
							ezert$$21 = this.internalUnformatters.getSize();
							n = ezert$$21;
							egl.setLocalFunctionVariable("n", n, "int");
							for ( ; (n >= 1); n = (n - 1) )
							{
								egl.setLocalFunctionVariable("n", n, "int");
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,155,4962,26, this);
									var ezert$$22 = "";
									ezert$$22 = egl.checkNull(this.internalUnformatters, "internalUnformatters")[this.internalUnformatters.checkIndex((n)-1)](s );
									egl.atLine(this.eze$$fileName,155,4958,31, this);
									s = ezert$$22;
									egl.setLocalFunctionVariable("s", s, "string");
								}finally{egl.exitBlock();}
								egl.atLine(this.eze$$fileName,154,4886,110, this);
							}
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,157,5000,31, this);
					egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext(null );
				}finally{egl.exitBlock();}
			}
			catch ( ezert$$23 )
			{
				if ( ezert$$23 instanceof egl.egl.core.RuntimeException ) {
					var e = ezert$$23;
					try{egl.enterBlock();
						egl.addLocalFunctionVariable("e", e, "egl.core.RuntimeException", "e");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,159,5070,31, this);
							egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext(null );
							egl.atLine(this.eze$$fileName,160,5105,25, this);
							this.errorMessage = egl.checkNull(e, "e").message;
						}finally{egl.exitBlock();}
					}finally{egl.exitBlock();}
				}
				else {
					throw ezert$$23;
				}
			}
			egl.atLine(this.eze$$fileName,162,5139,10, this);
			$result = s;
			egl.setLocalFunctionVariable("STRING", $result, "string");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getValidators": function() {
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
		try { egl.enter("getValidators",this,arguments,eze$$updater);
			var $result = null;
			egl.atLine(this.eze$$fileName,166,5217,20, this);
			$result = this.validators;
			egl.setLocalFunctionVariable("MVCValidatorFunction[]", $result, "com.ibm.egl.rui.mvc.MVCValidatorFunction[]");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getErrorMessage": function() {
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
		try { egl.enter("getErrorMessage",this,arguments,eze$$updater);
			var $result = null;
			egl.atLine(this.eze$$fileName,170,5292,22, this);
			$result = this.errorMessage;
			egl.setLocalFunctionVariable("STRING?", $result, "string?");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setErrorMessage": function( msg, eze$$msg$func_, eze$$caller ) {
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
		try { egl.enter("setErrorMessage",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("msg", msg, "string", "msg");
			egl.atLine(this.eze$$fileName,174,5362,19, this);
			this.errorMessage = msg;
			egl.atLine(this.eze$$fileName,173,5323,63, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getView": function() {
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
		try { egl.enter("getView",this,arguments,eze$$updater);
			var $result = null;
			egl.atLine(this.eze$$fileName,178,5435,13, this);
			$result = this.view;
			egl.setLocalFunctionVariable("Widget", $result, "egl.ui.rui.Widget");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getModel": function() {
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
		try { egl.enter("getModel",this,arguments,eze$$updater);
			var $result = null;
			egl.atLine(this.eze$$fileName,182,5500,14, this);
			$result = this.model;
			egl.setLocalFunctionVariable("ANY", $result, "any");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"focusLost": function( e ) {
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
		try { egl.enter("focusLost",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("e", e, "egl.ui.rui.Event", "e");
			egl.atLine(this.eze$$fileName,186,5564,10, this);
			this.isValid();
			egl.atLine(this.eze$$fileName,185,5523,56, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"focusGained": function( e ) {
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
		try { egl.enter("focusGained",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("e", e, "egl.ui.rui.Event", "e");
			egl.atLine(this.eze$$fileName,190,5626,386, this);
			try {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,191,5633,31, this);
					egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext( this );
					egl.atLine(this.eze$$fileName,192,5668,208, this);
					if ( (!(((null == this.errorMessage) || (egl.nullableCompare("",this.errorMessage, 1) == 0))) && (null != this.publishMessageHelper)) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,193,5758,66, this);
							if ( (null != this.showErrorState) ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,194,5790,26, this);
									this.showErrorState(true );
								}finally{egl.exitBlock();}
							}
							egl.atLine(this.eze$$fileName,196,5829,40, this);
							this.publishMessageHelper((function(x){ return x !== null ? ((x).toString()) : ""; })(this.errorMessage) );
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,198,5880,31, this);
					egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext(null );
				}finally{egl.exitBlock();}
			}
			catch ( ezert$$24 )
			{
				{
					if (ezert$$24 instanceof egl.egl.debug.DebugTermination){throw ezert$$24;}
					if (!(ezert$$24 instanceof egl.egl.core.AnyException)) {
						ezert$$24 = egl.makeExceptionFromCaughtObject(ezert$$24);
					}
					var exception = ezert$$24;
					try{egl.enterBlock();
						egl.addLocalFunctionVariable("exception", exception, "egl.core.AnyException", "exception");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,200,5954,31, this);
							egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext(null );
							egl.atLine(this.eze$$fileName,201,5989,17, this);
							throw exception;
						}finally{egl.exitBlock();}
					}finally{egl.exitBlock();}
				}
			}
			egl.atLine(this.eze$$fileName,189,5583,434, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"updateViewErrorDisplay": function( valid ) {
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
		try { egl.enter("updateViewErrorDisplay",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("valid", valid, "boolean", "valid");
			egl.atLine(this.eze$$fileName,206,6073,26, this);
			this.initialClass = this.view.getClass();
			egl.atLine(this.eze$$fileName,207,6102,126, this);
			if ( valid ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,208,6116,26, this);
					this.view.setClass( this.initialClass );
					egl.atLine(this.eze$$fileName,209,6146,18, this);
					this.errorMessage = "";
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,211,6175,47, this);
					this.view.setClass( (this.initialClass + " FormErrorEditor") );
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,213,6231,64, this);
			if ( (null != this.showErrorState) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,214,6261,28, this);
					this.showErrorState(!(valid) );
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,205,6021,279, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"notifyStateChange": function( valid ) {
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
		try { egl.enter("notifyStateChange",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("valid", valid, "boolean", "valid");
			egl.atLine(this.eze$$fileName,219,6359,262, this);
			try {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,220,6366,31, this);
					egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext( this );
					egl.atLine(this.eze$$fileName,221,6401,30, this);
					this.updateViewErrorDisplay(valid );
					egl.atLine(this.eze$$fileName,222,6435,71, this);
					if ( (this.validStateSetter != null) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,223,6469,30, this);
							this.validStateSetter(this.view, valid );
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,225,6510,31, this);
					egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext(null );
				}finally{egl.exitBlock();}
			}
			catch ( ezert$$25 )
			{
				{
					if (ezert$$25 instanceof egl.egl.debug.DebugTermination){throw ezert$$25;}
					if (!(ezert$$25 instanceof egl.egl.core.AnyException)) {
						ezert$$25 = egl.makeExceptionFromCaughtObject(ezert$$25);
					}
					var exception = ezert$$25;
					try{egl.enterBlock();
						egl.addLocalFunctionVariable("exception", exception, "egl.core.AnyException", "exception");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,227,6584,31, this);
							egl.com.ibm.egl.rui.mvc.MVCLib['$inst'].setCurrentContext(null );
						}finally{egl.exitBlock();}
					}finally{egl.exitBlock();}
				}
			}
			egl.atLine(this.eze$$fileName,218,6304,322, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getCommitHelper": function() {
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
		try { egl.enter("getCommitHelper",this,arguments,eze$$updater);
			var $result = null;
			egl.atLine(this.eze$$fileName,232,6690,22, this);
			$result = this.commitHelper;
			egl.setLocalFunctionVariable("MVCCommitter", $result, "com.ibm.egl.rui.mvc.MVCCommitter");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getPublishHelper": function() {
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
		try { egl.enter("getPublishHelper",this,arguments,eze$$updater);
			var $result = null;
			egl.atLine(this.eze$$fileName,235,6779,23, this);
			$result = this.publishHelper;
			egl.setLocalFunctionVariable("MVCPublisher", $result, "com.ibm.egl.rui.mvc.MVCPublisher");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getRetrieveViewHelper": function() {
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
		try { egl.enter("getRetrieveViewHelper",this,arguments,eze$$updater);
			var $result = null;
			egl.atLine(this.eze$$fileName,238,6874,28, this);
			$result = this.retrieveViewHelper;
			egl.setLocalFunctionVariable("MVCRetriever", $result, "com.ibm.egl.rui.mvc.MVCRetriever");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getRetrieveModelHelper": function() {
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
		try { egl.enter("getRetrieveModelHelper",this,arguments,eze$$updater);
			var $result = null;
			egl.atLine(this.eze$$fileName,241,6975,29, this);
			$result = this.retrieveModelHelper;
			egl.setLocalFunctionVariable("MVCRetriever", $result, "com.ibm.egl.rui.mvc.MVCRetriever");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getPublishMessageHelper": function() {
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
		try { egl.enter("getPublishMessageHelper",this,arguments,eze$$updater);
			var $result = null;
			egl.atLine(this.eze$$fileName,244,7085,30, this);
			$result = this.publishMessageHelper;
			egl.setLocalFunctionVariable("MVCMessagePublisher", $result, "com.ibm.egl.rui.mvc.MVCMessagePublisher");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getRetrieveValidStateHelper": function() {
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
		try { egl.enter("getRetrieveValidStateHelper",this,arguments,eze$$updater);
			var $result = null;
			egl.atLine(this.eze$$fileName,247,7203,34, this);
			$result = this.retrieveValidStateHelper;
			egl.setLocalFunctionVariable("MVCValidStateRetriever", $result, "com.ibm.egl.rui.mvc.MVCValidStateRetriever");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getShowErrorState": function() {
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
		try { egl.enter("getShowErrorState",this,arguments,eze$$updater);
			var $result = null;
			egl.atLine(this.eze$$fileName,250,7310,24, this);
			$result = this.showErrorState;
			egl.setLocalFunctionVariable("MVCShowErrorState", $result, "com.ibm.egl.rui.mvc.MVCShowErrorState");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setCommitHelper": function( helper ) {
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
		try { egl.enter("setCommitHelper",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("helper", helper, "com.ibm.egl.rui.mvc.MVCCommitter", "helper");
			egl.atLine(this.eze$$fileName,254,7402,22, this);
			this.commitHelper = helper;
			egl.atLine(this.eze$$fileName,253,7343,86, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setPublishHelper": function( helper ) {
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
		try { egl.enter("setPublishHelper",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("helper", helper, "com.ibm.egl.rui.mvc.MVCPublisher", "helper");
			egl.atLine(this.eze$$fileName,257,7491,23, this);
			this.publishHelper = helper;
			egl.atLine(this.eze$$fileName,258,7517,43, this);
			(function () {
				var ezert$$26 = new egl.egl.javascript.Job();
				egl.atLine(this.eze$$fileName,258,7527,19, this);
				ezert$$26.setRunFunction( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.mvc.Controller.prototype.publish,"publish") );
				return ezert$$26;
			}).call(this).schedule();
			egl.atLine(this.eze$$fileName,256,7431,134, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setRetrieveViewHelper": function( helper ) {
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
		try { egl.enter("setRetrieveViewHelper",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("helper", helper, "com.ibm.egl.rui.mvc.MVCRetriever", "helper");
			egl.atLine(this.eze$$fileName,261,7632,28, this);
			this.retrieveViewHelper = helper;
			egl.atLine(this.eze$$fileName,260,7567,98, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setRetrieveModelHelper": function( helper ) {
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
		try { egl.enter("setRetrieveModelHelper",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("helper", helper, "com.ibm.egl.rui.mvc.MVCRetriever", "helper");
			egl.atLine(this.eze$$fileName,264,7733,29, this);
			this.retrieveModelHelper = helper;
			egl.atLine(this.eze$$fileName,265,7765,43, this);
			(function () {
				var ezert$$27 = new egl.egl.javascript.Job();
				egl.atLine(this.eze$$fileName,265,7775,19, this);
				ezert$$27.setRunFunction( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.mvc.Controller.prototype.publish,"publish") );
				return ezert$$27;
			}).call(this).schedule();
			egl.atLine(this.eze$$fileName,263,7667,146, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setPublishMessageHelper": function( helper ) {
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
		try { egl.enter("setPublishMessageHelper",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("helper", helper, "com.ibm.egl.rui.mvc.MVCMessagePublisher", "helper");
			egl.atLine(this.eze$$fileName,268,7889,30, this);
			this.publishMessageHelper = helper;
			egl.atLine(this.eze$$fileName,267,7815,109, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setRetrieveValidStateHelper": function( helper ) {
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
		try { egl.enter("setRetrieveValidStateHelper",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("helper", helper, "com.ibm.egl.rui.mvc.MVCValidStateRetriever", "helper");
			egl.atLine(this.eze$$fileName,271,8007,34, this);
			this.retrieveValidStateHelper = helper;
			egl.atLine(this.eze$$fileName,270,7926,120, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setShowErrorState": function( helper ) {
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
		try { egl.enter("setShowErrorState",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("helper", helper, "com.ibm.egl.rui.mvc.MVCShowErrorState", "helper");
			egl.atLine(this.eze$$fileName,274,8114,24, this);
			this.showErrorState = helper;
			egl.atLine(this.eze$$fileName,273,8048,95, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"isValidStateInitialized": function() {
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
		try { egl.enter("isValidStateInitialized",this,arguments,eze$$updater);
			var $result = false;
			egl.atLine(this.eze$$fileName,281,8284,28, this);
			$result = this.isStateInitialized;
			egl.setLocalFunctionVariable("BOOLEAN", $result, "boolean");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"toString": function() {
		return "[Controller]";
	}
	,
	"eze$$getName": function() {
		return "Controller";
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
		
		{name: "InternalFormatters", value : egl.com.ibm.egl.rui.mvc.InternalFormatters['$inst'], type : "com.ibm.egl.rui.mvc.InternalFormatters", jsName : "egl.com.ibm.egl.rui.mvc.InternalFormatters.$inst"},
		{name: "InternalTimestampFormatter", value : egl.com.ibm.egl.rui.mvc.InternalTimestampFormatter['$inst'], type : "com.ibm.egl.rui.mvc.InternalTimestampFormatter", jsName : "egl.com.ibm.egl.rui.mvc.InternalTimestampFormatter.$inst"},
		{name: "InternalCharFormatter", value : egl.com.ibm.egl.rui.mvc.InternalCharFormatter['$inst'], type : "com.ibm.egl.rui.mvc.InternalCharFormatter", jsName : "egl.com.ibm.egl.rui.mvc.InternalCharFormatter.$inst"},
		{name: "InternalDateFormatter", value : egl.com.ibm.egl.rui.mvc.InternalDateFormatter['$inst'], type : "com.ibm.egl.rui.mvc.InternalDateFormatter", jsName : "egl.com.ibm.egl.rui.mvc.InternalDateFormatter.$inst"},
		{name: "InternalValidators", value : egl.com.ibm.egl.rui.mvc.InternalValidators['$inst'], type : "com.ibm.egl.rui.mvc.InternalValidators", jsName : "egl.com.ibm.egl.rui.mvc.InternalValidators.$inst"},
		{name: "InternalNumericFormatter", value : egl.com.ibm.egl.rui.mvc.InternalNumericFormatter['$inst'], type : "com.ibm.egl.rui.mvc.InternalNumericFormatter", jsName : "egl.com.ibm.egl.rui.mvc.InternalNumericFormatter.$inst"},
		{name: "InternalTimeFormatter", value : egl.com.ibm.egl.rui.mvc.InternalTimeFormatter['$inst'], type : "com.ibm.egl.rui.mvc.InternalTimeFormatter", jsName : "egl.com.ibm.egl.rui.mvc.InternalTimeFormatter.$inst"},
		{name: "MVCLib", value : egl.com.ibm.egl.rui.mvc.MVCLib['$inst'], type : "com.ibm.egl.rui.mvc.MVCLib", jsName : "egl.com.ibm.egl.rui.mvc.MVCLib.$inst"},
		{name: "pixelWidth", value : function(){try{return eze$$parent.getPixelWidth();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "pixelWidth", getter : "getPixelWidth", setter : "setPixelWidth"},
		{name: "pixelHeight", value : function(){try{return eze$$parent.getPixelHeight();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "pixelHeight", getter : "getPixelHeight", setter : "setPixelHeight"},
		{name: "logicalParent", value : function(){try{return eze$$parent.getLogicalParent();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.Widget", jsName : "logicalParent", getter : "getLogicalParent", setter : "setLogicalParent"},
		{name: "parent", value : function(){try{return eze$$parent.getParent();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.Widget", jsName : "parent", getter : "getParent", setter : "setParent"},
		{name: "style", value : function(){try{return eze$$parent.getStyle();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "style", getter : "getStyle", setter : "setStyle"},
		{name: "background", value : function(){try{return eze$$parent.getBackground();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "background", getter : "getBackground", setter : "setBackground"},
		{name: "layoutData", value : function(){try{return eze$$parent.getLayoutData();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "any", jsName : "layoutData", getter : "getLayoutData", setter : "setLayoutData"},
		{name: "tabIndex", value : function(){try{return eze$$parent.getTabIndex();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "tabIndex", getter : "getTabIndex", setter : "setTabIndex"},
		{name: "ariaLive", value : function(){try{return eze$$parent.getAriaLive();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "ariaLive", getter : "getAriaLive", setter : "setAriaLive"},
		{name: "ariaRole", value : function(){try{return eze$$parent.getAriaRole();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "ariaRole", getter : "getAriaRole", setter : "setAriaRole"},
		{name: "disabled", value : function(){try{return eze$$parent.getDisabled();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "boolean", jsName : "disabled", getter : "getDisabled", setter : "setDisabled"},
		{name: "cursor", value : function(){try{return eze$$parent.getCursor();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "cursor", getter : "getCursor", setter : "setCursor"},
		{name: "visibility", value : function(){try{return eze$$parent.getVisibility();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "visibility", getter : "getVisibility", setter : "setVisibility"},
		{name: "visible", value : function(){try{return eze$$parent.getVisible();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "boolean", jsName : "visible", getter : "getVisible", setter : "setVisible"},
		{name: "opacity", value : function(){try{return eze$$parent.getOpacity();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "opacity", getter : "getOpacity", setter : "setOpacity"},
		{name: "zIndex", value : function(){try{return eze$$parent.getZIndex();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "zIndex", getter : "getZIndex", setter : "setZIndex"},
		{name: "height", value : function(){try{return eze$$parent.getHeight();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "height", getter : "getHeight", setter : "setHeight"},
		{name: "width", value : function(){try{return eze$$parent.getWidth();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "width", getter : "getWidth", setter : "setWidth"},
		{name: "y", value : function(){try{return eze$$parent.getY();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "y", getter : "getY", setter : "setY"},
		{name: "x", value : function(){try{return eze$$parent.getX();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "x", getter : "getX", setter : "setX"},
		{name: "position", value : function(){try{return eze$$parent.getPosition();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "position", getter : "getPosition", setter : "setPosition"},
		{name: "marginBottom", value : function(){try{return eze$$parent.getMarginBottom();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "marginBottom", getter : "getMarginBottom", setter : "setMarginBottom"},
		{name: "marginTop", value : function(){try{return eze$$parent.getMarginTop();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "marginTop", getter : "getMarginTop", setter : "setMarginTop"},
		{name: "marginRight", value : function(){try{return eze$$parent.getMarginRight();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "marginRight", getter : "getMarginRight", setter : "setMarginRight"},
		{name: "marginLeft", value : function(){try{return eze$$parent.getMarginLeft();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "marginLeft", getter : "getMarginLeft", setter : "setMarginLeft"},
		{name: "margin", value : function(){try{return eze$$parent.getMargin();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "margin", getter : "getMargin", setter : "setMargin"},
		{name: "paddingBottom", value : function(){try{return eze$$parent.getPaddingBottom();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "paddingBottom", getter : "getPaddingBottom", setter : "setPaddingBottom"},
		{name: "paddingTop", value : function(){try{return eze$$parent.getPaddingTop();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "paddingTop", getter : "getPaddingTop", setter : "setPaddingTop"},
		{name: "paddingRight", value : function(){try{return eze$$parent.getPaddingRight();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "paddingRight", getter : "getPaddingRight", setter : "setPaddingRight"},
		{name: "paddingLeft", value : function(){try{return eze$$parent.getPaddingLeft();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "paddingLeft", getter : "getPaddingLeft", setter : "setPaddingLeft"},
		{name: "padding", value : function(){try{return eze$$parent.getPadding();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "padding", getter : "getPadding", setter : "setPadding"},
		{name: "borderBottomStyle", value : function(){try{return eze$$parent.getBorderBottomStyle();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "borderBottomStyle", getter : "getBorderBottomStyle", setter : "setBorderBottomStyle"},
		{name: "borderTopStyle", value : function(){try{return eze$$parent.getBorderTopStyle();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "borderTopStyle", getter : "getBorderTopStyle", setter : "setBorderTopStyle"},
		{name: "borderRightStyle", value : function(){try{return eze$$parent.getBorderRightStyle();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "borderRightStyle", getter : "getBorderRightStyle", setter : "setBorderRightStyle"},
		{name: "borderLeftStyle", value : function(){try{return eze$$parent.getBorderLeftStyle();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "borderLeftStyle", getter : "getBorderLeftStyle", setter : "setBorderLeftStyle"},
		{name: "borderStyle", value : function(){try{return eze$$parent.getBorderStyle();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "borderStyle", getter : "getBorderStyle", setter : "setBorderStyle"},
		{name: "borderBottomWidth", value : function(){try{return eze$$parent.getBorderBottomWidth();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "borderBottomWidth", getter : "getBorderBottomWidth", setter : "setBorderBottomWidth"},
		{name: "borderTopWidth", value : function(){try{return eze$$parent.getBorderTopWidth();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "borderTopWidth", getter : "getBorderTopWidth", setter : "setBorderTopWidth"},
		{name: "borderRightWidth", value : function(){try{return eze$$parent.getBorderRightWidth();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "borderRightWidth", getter : "getBorderRightWidth", setter : "setBorderRightWidth"},
		{name: "borderLeftWidth", value : function(){try{return eze$$parent.getBorderLeftWidth();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "borderLeftWidth", getter : "getBorderLeftWidth", setter : "setBorderLeftWidth"},
		{name: "borderWidth", value : function(){try{return eze$$parent.getBorderWidth();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "int", jsName : "borderWidth", getter : "getBorderWidth", setter : "setBorderWidth"},
		{name: "borderColor", value : function(){try{return eze$$parent.getBorderColor();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "borderColor", getter : "getBorderColor", setter : "setBorderColor"},
		{name: "fontWeight", value : function(){try{return eze$$parent.getFontWeight();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "fontWeight", getter : "getFontWeight", setter : "setFontWeight"},
		{name: "fontSize", value : function(){try{return eze$$parent.getFontSize();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "fontSize", getter : "getFontSize", setter : "setFontSize"},
		{name: "font", value : function(){try{return eze$$parent.getFont();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "font", getter : "getFont", setter : "setFont"},
		{name: "backgroundColor", value : function(){try{return eze$$parent.getBackgroundColor();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "backgroundColor", getter : "getBackgroundColor", setter : "setBackgroundColor"},
		{name: "color", value : function(){try{return eze$$parent.getColor();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "color", getter : "getColor", setter : "setColor"},
		{name: "class", value : function(){try{return eze$$parent.getClass();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "ezekw$$class", getter : "getClass", setter : "setClass"},
		{name: "id", value : function(){try{return eze$$parent.getID();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "id", getter : "getID", setter : "setID"},
		{name: "targetWidget", value : eze$$parent.targetWidget, attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.Widget", jsName : "targetWidget"},
		{name: "tagName", value : function(){try{return eze$$parent.getTagName();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "tagName", getter : "getTagName", setter : "setTagName"},
		{name: "innerHTML", value : function(){try{return eze$$parent.getInnerHTML();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "innerHTML", getter : "getInnerHTML", setter : "setInnerHTML"},
		{name: "innerText", value : function(){try{return eze$$parent.getInnerText();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "innerText", getter : "getInnerText", setter : "setInnerText"},
		{name: "children", value : function(){try{return eze$$parent.getChildren();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.Widget[]", jsName : "!children", getter : "getChildren", setter : "setChildren"},
		{name: "document", value : eze$$parent.document, attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.Document", jsName : "document"},
		{name: "onChange", value : function(){try{return eze$$parent.getOnChange();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.EventHandler[]", jsName : "!onChange", getter : "getOnChange", setter : "setOnChange"},
		{name: "onClick", value : function(){try{return eze$$parent.getOnClick();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.EventHandler[]", jsName : "!onClick", getter : "getOnClick", setter : "setOnClick"},
		{name: "onContextMenu", value : function(){try{return eze$$parent.getOnContextMenu();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.EventHandler[]", jsName : "!onContextMenu", getter : "getOnContextMenu", setter : "setOnContextMenu"},
		{name: "onFocusGained", value : function(){try{return eze$$parent.getOnFocusGained();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.EventHandler[]", jsName : "!onFocusGained", getter : "getOnFocusGained", setter : "setOnFocusGained"},
		{name: "onFocusLost", value : function(){try{return eze$$parent.getOnFocusLost();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.EventHandler[]", jsName : "!onFocusLost", getter : "getOnFocusLost", setter : "setOnFocusLost"},
		{name: "onKeyDown", value : function(){try{return eze$$parent.getOnKeyDown();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.EventHandler[]", jsName : "!onKeyDown", getter : "getOnKeyDown", setter : "setOnKeyDown"},
		{name: "onKeyPress", value : function(){try{return eze$$parent.getOnKeyPress();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.EventHandler[]", jsName : "!onKeyPress", getter : "getOnKeyPress", setter : "setOnKeyPress"},
		{name: "onKeyUp", value : function(){try{return eze$$parent.getOnKeyUp();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.EventHandler[]", jsName : "!onKeyUp", getter : "getOnKeyUp", setter : "setOnKeyUp"},
		{name: "onMouseDown", value : function(){try{return eze$$parent.getOnMouseDown();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.EventHandler[]", jsName : "!onMouseDown", getter : "getOnMouseDown", setter : "setOnMouseDown"},
		{name: "onMouseMove", value : function(){try{return eze$$parent.getOnMouseMove();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.EventHandler[]", jsName : "!onMouseMove", getter : "getOnMouseMove", setter : "setOnMouseMove"},
		{name: "onMouseOut", value : function(){try{return eze$$parent.getOnMouseOut();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.EventHandler[]", jsName : "!onMouseOut", getter : "getOnMouseOut", setter : "setOnMouseOut"},
		{name: "onMouseOver", value : function(){try{return eze$$parent.getOnMouseOver();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.EventHandler[]", jsName : "!onMouseOver", getter : "getOnMouseOver", setter : "setOnMouseOver"},
		{name: "onMouseUp", value : function(){try{return eze$$parent.getOnMouseUp();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.EventHandler[]", jsName : "!onMouseUp", getter : "getOnMouseUp", setter : "setOnMouseUp"},
		{name: "onScroll", value : function(){try{return eze$$parent.getOnScroll();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.EventHandler[]", jsName : "!onScroll", getter : "getOnScroll", setter : "setOnScroll"},
		{name: "onSelect", value : function(){try{return eze$$parent.getOnSelect();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.EventHandler[]", jsName : "!onSelect", getter : "getOnSelect", setter : "setOnSelect"},
		{name: "onStartDrag", value : function(){try{return eze$$parent.getOnStartDrag();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.StartDragFunction", jsName : "onStartDrag", getter : "getOnStartDrag", setter : "setOnStartDrag"},
		{name: "onDrag", value : function(){try{return eze$$parent.getOnDrag();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.DragFunction", jsName : "onDrag", getter : "getOnDrag", setter : "setOnDrag"},
		{name: "onDropOnTarget", value : function(){try{return eze$$parent.getOnDropOnTarget();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "egl.ui.rui.DropOnTargetFunction", jsName : "onDropOnTarget", getter : "getOnDropOnTarget", setter : "setOnDropOnTarget"},
		{name: "numericSwap", value : function(){try{return eze$$parent.getNumericSwap();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "numericSwap", getter : "getNumericSwap", setter : "setNumericSwap"},
		{name: "symmetricSwap", value : function(){try{return eze$$parent.getSymmetricSwap();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "symmetricSwap", getter : "getSymmetricSwap", setter : "setSymmetricSwap"},
		{name: "reverseTextDirection", value : function(){try{return eze$$parent.getReverseTextDirection();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "reverseTextDirection", getter : "getReverseTextDirection", setter : "setReverseTextDirection"},
		{name: "textLayout", value : function(){try{return eze$$parent.getTextLayout();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "textLayout", getter : "getTextLayout", setter : "setTextLayout"},
		{name: "widgetOrientation", value : function(){try{return eze$$parent.getWidgetOrientation();}catch(e){return null;}}(), attrs : egl.ATTR_IMPLICIT_VAR, type : "string", jsName : "widgetOrientation", getter : "getWidgetOrientation", setter : "setWidgetOrientation"},
		{name: "model", value : function(){try{return eze$$parent.getModel();}catch(e){return null;}}(), type : "any", jsName : "model", getter : "getModel", setter : "setModel"},
		{name: "view", value : function(){try{return eze$$parent.getView();}catch(e){return null;}}(), type : "egl.ui.rui.Widget", jsName : "view", getter : "getView", setter : "setView"},
		{name: "formatters", value : eze$$parent.formatters, type : "com.ibm.egl.rui.mvc.MVCFormatterFunction[]", jsName : "!formatters"},
		{name: "unformatters", value : eze$$parent.unformatters, type : "com.ibm.egl.rui.mvc.MVCFormatterFunction[]", jsName : "!unformatters"},
		{name: "validators", value : eze$$parent.validators, type : "com.ibm.egl.rui.mvc.MVCValidatorFunction[]", jsName : "!validators"},
		{name: "internalFormatters", value : eze$$parent.internalFormatters, type : "com.ibm.egl.rui.mvc.MVCFormatterFunction[]", jsName : "!internalFormatters"},
		{name: "internalUnformatters", value : eze$$parent.internalUnformatters, type : "com.ibm.egl.rui.mvc.MVCFormatterFunction[]", jsName : "!internalUnformatters"},
		{name: "internalValidators", value : eze$$parent.internalValidators, type : "com.ibm.egl.rui.mvc.MVCValidatorFunction[]", jsName : "!internalValidators"},
		{name: "commitHelper", value : function(){try{return eze$$parent.getCommitHelper();}catch(e){return null;}}(), type : "com.ibm.egl.rui.mvc.MVCCommitter", jsName : "commitHelper", getter : "getCommitHelper", setter : "setCommitHelper"},
		{name: "retrieveModelHelper", value : function(){try{return eze$$parent.getRetrieveModelHelper();}catch(e){return null;}}(), type : "com.ibm.egl.rui.mvc.MVCRetriever", jsName : "retrieveModelHelper", getter : "getRetrieveModelHelper", setter : "setRetrieveModelHelper"},
		{name: "publishHelper", value : function(){try{return eze$$parent.getPublishHelper();}catch(e){return null;}}(), type : "com.ibm.egl.rui.mvc.MVCPublisher", jsName : "publishHelper", getter : "getPublishHelper", setter : "setPublishHelper"},
		{name: "retrieveViewHelper", value : function(){try{return eze$$parent.getRetrieveViewHelper();}catch(e){return null;}}(), type : "com.ibm.egl.rui.mvc.MVCRetriever", jsName : "retrieveViewHelper", getter : "getRetrieveViewHelper", setter : "setRetrieveViewHelper"},
		{name: "publishMessageHelper", value : function(){try{return eze$$parent.getPublishMessageHelper();}catch(e){return null;}}(), type : "com.ibm.egl.rui.mvc.MVCMessagePublisher", jsName : "publishMessageHelper", getter : "getPublishMessageHelper", setter : "setPublishMessageHelper"},
		{name: "retrieveValidStateHelper", value : function(){try{return eze$$parent.getRetrieveValidStateHelper();}catch(e){return null;}}(), type : "com.ibm.egl.rui.mvc.MVCValidStateRetriever", jsName : "retrieveValidStateHelper", getter : "getRetrieveValidStateHelper", setter : "setRetrieveValidStateHelper"},
		{name: "showErrorState", value : function(){try{return eze$$parent.getShowErrorState();}catch(e){return null;}}(), type : "com.ibm.egl.rui.mvc.MVCShowErrorState", jsName : "showErrorState", getter : "getShowErrorState", setter : "setShowErrorState"},
		{name: "validStateSetter", value : eze$$parent.validStateSetter, type : "com.ibm.egl.rui.mvc.MVCValidStateSetter", jsName : "validStateSetter"},
		{name: "errorMessage", value : eze$$parent.errorMessage, type : "string?", jsName : "errorMessage"},
		{name: "initialClass", value : eze$$parent.initialClass, type : "string", jsName : "initialClass"},
		{name: "isStateInitialized", value : eze$$parent.isStateInitialized, type : "boolean", jsName : "isStateInitialized"},
		{name: "publishJob", value : eze$$parent.publishJob, type : "egl.javascript.Job", jsName : "publishJob"}
		];
	}
}
);
