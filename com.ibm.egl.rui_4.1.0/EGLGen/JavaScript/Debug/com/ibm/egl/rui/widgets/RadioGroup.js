// Generated at Sun Sep 03 10:03:12 AST 2023 by EGL 7.1.1.v20180914_0609
// No APARs installed.

egl.defineRUIWidget('com.ibm.egl.rui.widgets', 'RadioGroup', {
	'eze$$fileName': '/com.ibm.egl.rui_4.1.0/EGLSource/com/ibm/egl/rui/widgets/RadioGroup.egl',
	'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/widgets/RadioGroup',
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
			egl.atLine(this.eze$$fileName,23,686,98, this);
			this.groupName = "";
			egl.atLine(this.eze$$fileName,24,786,94, this);
			this.options = (function(){ var ezert$$1= []; ezert$$1.setType( "S;" );// no max size set for this array
			return ezert$$1;})();
			
			egl.atLine(this.eze$$fileName,25,882,95, this);
			this.selected = "";
			egl.atLine(this.eze$$fileName,27,980,30, this);
			this.optionsList = (function(){ var ezert$$2= []; ezert$$2.setType( egl.egl.ui.rui.Widget );for (var i=0; i < 0; i++) {
					ezert$$2[ i ] = new egl.egl.ui.rui.Widget();
				}
				// no max size set for this array
			return ezert$$2;})();
			
			egl.atLine(this.eze$$fileName,29,1013,45, this);
			this.reverseTextDirectionThis = "";
			egl.atLine(this.eze$$fileName,30,1060,35, this);
			this.textLayoutThis = "";
			egl.atLine(this.eze$$fileName,31,1097,42, this);
			this.widgetOrientationThis = "";
			egl.atLine(this.eze$$fileName,33,1143,38, this);
			this.optionsBox = new egl.com.ibm.egl.rui.widgets.Box();
			egl.addEmbeddedWidget(this, "optionsBox");
			
			egl.atLine(this.eze$$fileName,113,3413,30, this);
			this.selectedOption = null;
			egl.addEmbeddedWidget(this, "selectedOption");
			
			this.jsrt$SysVar= new egl.egl.core.SysVar();
			new egl.egl.ui.rui.RUILib();
			new egl.egl.core.StrLib();
			new egl.egl.core.SysLib();
			new egl.com.ibm.egl.rui.widgets.UtilLib();
			egl.atLine(this.eze$$fileName,29,1021,24, this);
			this.reverseTextDirectionThis = "";
			egl.atLine(this.eze$$fileName,30,1068,14, this);
			this.textLayoutThis = "";
			egl.atLine(this.eze$$fileName,31,1105,21, this);
			this.widgetOrientationThis = "";
			egl.atLine(this.eze$$fileName,33,1167,11, this);
			egl.checkNull(this.optionsBox, "optionsBox").setColumns(2);
			if (!egl.debugg) egl.leave();
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	
	,
	"setGroupName": function( groupName ) {
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
		try { egl.enter("setGroupName",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("groupName", groupName, "string", "groupName");
			egl.atLine(this.eze$$fileName,36,1230,27, this);
			this.groupName = groupName;
			egl.atLine(this.eze$$fileName,37,1263,30, this);
			var ezert$$3 = 0;
			ezert$$3 = egl.egl.core.$StrLib.indexOf( groupName, (" "));
			egl.setLocalFunctionVariable("groupName", groupName, "string");
			egl.atLine(this.eze$$fileName,37,1260,203, this);
			if ( (ezert$$3 >= 1) ) {
				try{egl.enterBlock();
					var messageValue = "";
					egl.addLocalFunctionVariable("messageValue", messageValue, "string", "messageValue");
					egl.atLine(this.eze$$fileName,38,1325,49, this);
					var ezert$$4 = null;
					ezert$$4 = egl.getRuntimeMessage( "CRRUI0006E", [ this.groupName ] );
					egl.atLine(this.eze$$fileName,38,1303,12, this);
					messageValue = (function(x){ return x !== null ? ((x).toString()) : ""; })(ezert$$4);
					egl.setLocalFunctionVariable("messageValue", messageValue, "string");
					egl.atLine(this.eze$$fileName,39,1379,78, this);
					throw (function () {
						var ezert$$5 = egl.createRuntimeException();
						egl.atLine(this.eze$$fileName,39,1407,22, this);
						egl.checkNull(ezert$$5, "ezert$$5").message = messageValue;
						egl.atLine(this.eze$$fileName,39,1431,24, this);
						egl.checkNull(ezert$$5, "ezert$$5").messageID = "CRRUI0006E";
						return ezert$$5;
					}).call(this);
				}finally{egl.exitBlock();}
			}
			var eze_Cond_Temp_0 = false;
			egl.atLine(this.eze$$fileName,41,1470,40, this);
			if ( (this.options != null) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,41,1489,17, this);
					var ezert$$6 = 0;
					ezert$$6 = this.options.getSize();
					egl.atLine(this.eze$$fileName,41,1470,40, this);
					if ( (ezert$$6 > 0) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,41,1470,40, this);
							eze_Cond_Temp_0 = true;
						}finally{egl.exitBlock();}
					}
					else {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,41,1470,40, this);
							eze_Cond_Temp_0 = false;
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,41,1470,40, this);
					eze_Cond_Temp_0 = false;
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,41,1466,75, this);
			if ( eze_Cond_Temp_0 ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,42,1515,20, this);
					this.setOptions(this.options );
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,35,1185,361, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getGroupName": function() {
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
		try { egl.enter("getGroupName",this,arguments,eze$$updater);
			var $result = "";
			egl.atLine(this.eze$$fileName,47,1593,19, this);
			$result = this.groupName;
			egl.setLocalFunctionVariable("STRING", $result, "string");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setOptions": function( opts ) {
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
		try { egl.enter("setOptions",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("opts", opts, "string[]", "!opts");
			egl.atLine(this.eze$$fileName,51,1661,15, this);
			this.options = opts;
			egl.atLine(this.eze$$fileName,52,1679,58, this);
			if ( ((this.groupName == null) || (this.groupName == "")) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,53,1724,7, this);
					{ if (!egl.debugg) egl.leave(); return;}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,55,1740,17, this);
			this.removeChildren();
			egl.atLine(this.eze$$fileName,56,1762,24, this);
			this.optionsList.removeAll();
			egl.atLine(this.eze$$fileName,57,1789,42, this);
			egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].destroyWidgetChildren(this.optionsBox );
			egl.atLine(this.eze$$fileName,58,1834,24, this);
			this.appendChild(this.optionsBox );
			egl.atLine(this.eze$$fileName,59,1861,554, this);
			{
				try{egl.enterBlock();
					var index = 0;
					egl.addLocalFunctionVariable("index", index, "int", "index");
					index = 1;
					egl.setLocalFunctionVariable("index", index, "int");
					for ( ; (index <= this.options.getSize()); index = (index + 1) )
					{
						egl.setLocalFunctionVariable("index", index, "int");
						try{egl.enterBlock();
							var newOption = new egl.egl.ui.rui.Widget();
							egl.addLocalFunctionVariable("newOption", newOption, "egl.ui.rui.Widget", "newOption");
							egl.atLine(this.eze$$fileName,60,1930,46, this);
							newOption.setTagName( ("input type=radio name=" + this.groupName) );
							egl.atLine(this.eze$$fileName,61,1982,48, this);
							newOption.setAttribute("value", egl.checkNull(this.options, "options")[this.options.checkIndex((index)-1)] );
							egl.atLine(this.eze$$fileName,62,2034,39, this);
							newOption.getOnClick().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.RadioGroup.prototype.setSelectedEvent,"setSelectedEvent") );
							egl.atLine(this.eze$$fileName,63,2077,38, this);
							newOption.getOnChange().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.RadioGroup.prototype.setChangeEvent,"setChangeEvent") );
							var optionName = new egl.com.ibm.egl.rui.widgets.TextLabel();
							egl.addLocalFunctionVariable("optionName", optionName, "com.ibm.egl.rui.widgets.TextLabel", "optionName");
							egl.atLine(this.eze$$fileName,64,2140,21, this);
							egl.checkNull(optionName, "optionName").setText(egl.checkNull(this.options, "options")[this.options.checkIndex((index)-1)]);
							egl.atLine(this.eze$$fileName,64,2163,36, this);
							egl.checkNull(optionName, "optionName").setClass("EglRuiRadioGroupOptionName");
							egl.atLine(this.eze$$fileName,65,2205,38, this);
							egl.checkNull(optionName, "optionName").setAttribute("dir", {eze$$value : "ltr", eze$$signature : "S;"} );
							egl.atLine(this.eze$$fileName,66,2247,43, this);
							egl.checkNull(optionName, "optionName").setStyle("display: inline-block");
							egl.atLine(this.eze$$fileName,68,2295,37, this);
							this.optionsList.appendElement( newOption );
							egl.atLine(this.eze$$fileName,69,2336,34, this);
							egl.checkNull(this.optionsBox, "optionsBox").appendChild(newOption );
							egl.atLine(this.eze$$fileName,70,2374,35, this);
							egl.checkNull(this.optionsBox, "optionsBox").appendChild(optionName );
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,59,1861,554, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,73,2421,93, this);
			if ( ((this.textLayoutThis == "Visual") || (this.reverseTextDirectionThis == "Yes")) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,74,2492,16, this);
					this.setBiDiStyles();
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,77,2522,51, this);
			if ( (this.selected != "") ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,78,2545,22, this);
					this.setSelected(this.selected );
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,50,1621,957, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getOptions": function() {
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
		try { egl.enter("getOptions",this,arguments,eze$$updater);
			var $result = null;
			egl.atLine(this.eze$$fileName,83,2625,17, this);
			$result = this.options;
			egl.setLocalFunctionVariable("STRING[]", $result, "string[]");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setSelected": function( select ) {
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
		try { egl.enter("setSelected",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("select", select, "string", "select");
			egl.atLine(this.eze$$fileName,87,2692,18, this);
			this.selected = select;
			egl.atLine(this.eze$$fileName,88,2713,282, this);
			{
				try{egl.enterBlock();
					var opt = 0;
					egl.addLocalFunctionVariable("opt", opt, "int", "opt");
					opt = 1;
					egl.setLocalFunctionVariable("opt", opt, "int");
					for ( ; (opt <= this.optionsList.getSize()); opt = (opt + 1) )
					{
						egl.setLocalFunctionVariable("opt", opt, "int");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,89,2771,38, this);
							var ezert$$7 = null;
							ezert$$7 = egl.checkNull(this.optionsList, "optionsList")[this.optionsList.checkIndex((opt)-1)].getAttribute("value" );
							egl.atLine(this.eze$$fileName,89,2767,222, this);
							if ( (egl.convertAnyToString(egl.boxAny(ezert$$7),false) == select) ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,90,2835,34, this);
									this.selectedOption = egl.checkNull(this.optionsList, "optionsList")[this.optionsList.checkIndex((opt)-1)];
									egl.atLine(this.eze$$fileName,91,2874,51, this);
									(function () {
										var ezert$$8 = new egl.egl.javascript.Job();
										egl.atLine(this.eze$$fileName,91,2884,27, this);
										ezert$$8.setRunFunction( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.RadioGroup.prototype.doSetSelected,"doSetSelected") );
										return ezert$$8;
									}).call(this).schedule();
								}finally{egl.exitBlock();}
							}
							else {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,93,2938,44, this);
									egl.checkNull(this.optionsList, "optionsList")[this.optionsList.checkIndex((opt)-1)].removeAttribute("checked" );
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,88,2713,282, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,86,2651,349, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setDisabled": function( disabled ) {
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
		try { egl.enter("setDisabled",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("disabled", disabled, "boolean", "disabled");
			egl.atLine(this.eze$$fileName,99,3061,97, this);
			{
				try{egl.enterBlock();
					var opt = 0;
					egl.addLocalFunctionVariable("opt", opt, "int", "opt");
					opt = 1;
					egl.setLocalFunctionVariable("opt", opt, "int");
					for ( ; (opt <= this.optionsList.getSize()); opt = (opt + 1) )
					{
						egl.setLocalFunctionVariable("opt", opt, "int");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,100,3115,37, this);
							egl.checkNull(this.optionsList, "optionsList")[this.optionsList.checkIndex((opt)-1)].setDisabled( disabled );
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,99,3061,97, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,102,3161,121, this);
			if ( disabled ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,103,3180,46, this);
					egl.checkNull(this.optionsBox, "optionsBox").setAttribute("disabled", {eze$$value : disabled, eze$$signature : "0;"} );
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,105,3237,39, this);
					egl.checkNull(this.optionsBox, "optionsBox").removeAttribute("disabled" );
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,98,3004,283, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getDisabled": function() {
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
		try { egl.enter("getDisabled",this,arguments,eze$$updater);
			var $result = false;
			var ezert$$9 = null;
			ezert$$9 = egl.checkNull(this.optionsBox, "optionsBox").getAttribute("disabled" );
			egl.atLine(this.eze$$fileName,110,3348,56, this);
			var ezert$$10 = null;
			ezert$$10 = ezert$$9;
			$result = egl.convertAnyToBoolean(ezert$$10,false);
			egl.setLocalFunctionVariable("BOOLEAN", $result, "boolean");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"doSetSelected": function() {
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
		try { egl.enter("doSetSelected",this,arguments,eze$$updater);
			egl.atLine(this.eze$$fileName,115,3480,47, this);
			this.selectedOption.setAttribute("checked", "true" );
			egl.atLine(this.eze$$fileName,114,3445,87, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setChangeEvent": function( e ) {
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
		try { egl.enter("setChangeEvent",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("e", e, "egl.ui.rui.Event", "e");
			egl.atLine(this.eze$$fileName,119,3582,242, this);
			if ( (this.selectedOption != e.widget) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,120,3617,26, this);
					this.selectedOption = e.widget;
					egl.atLine(this.eze$$fileName,121,3658,30, this);
					var ezert$$11 = null;
					ezert$$11 = e.widget.getAttribute("value" );
					egl.atLine(this.eze$$fileName,121,3647,52, this);
					this.selected = egl.convertAnyToString(egl.boxAny(ezert$$11),false);
					egl.atLine(this.eze$$fileName,122,3703,16, this);
					e.widget =  this;
					egl.atLine(this.eze$$fileName,123,3723,95, this);
					{
						try{egl.enterBlock();
							var index = 0;
							egl.addLocalFunctionVariable("index", index, "int", "index");
							index = 1;
							egl.setLocalFunctionVariable("index", index, "int");
							for ( ; (index <= this.getOnChange().getSize()); index = (index + 1) )
							{
								egl.setLocalFunctionVariable("index", index, "int");
								try{egl.enterBlock();
									var ezert$$12 = null;
									ezert$$12 = this.getOnChange();
									egl.atLine(this.eze$$fileName,124,3782,29, this);
									ezert$$12[ezert$$12.checkIndex((index)-1)](e );
								}finally{egl.exitBlock();}
								egl.atLine(this.eze$$fileName,123,3723,95, this);
							}
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,118,3536,293, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setSelectedEvent": function( e ) {
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
		try { egl.enter("setSelectedEvent",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("e", e, "egl.ui.rui.Event", "e");
			egl.atLine(this.eze$$fileName,130,3881,337, this);
			if ( (this.selectedOption != e.widget) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,131,3916,26, this);
					this.selectedOption = e.widget;
					egl.atLine(this.eze$$fileName,132,3957,30, this);
					var ezert$$13 = null;
					ezert$$13 = e.widget.getAttribute("value" );
					egl.atLine(this.eze$$fileName,132,3946,52, this);
					this.selected = egl.convertAnyToString(egl.boxAny(ezert$$13),false);
					var browser = "";
					egl.addLocalFunctionVariable("browser", browser, "string", "browser");
					egl.atLine(this.eze$$fileName,133,4019,21, this);
					var ezert$$14 = "";
					ezert$$14 = egl.egl.ui.rui.RUILib['$inst'].getUserAgent();
					egl.atLine(this.eze$$fileName,133,4002,7, this);
					browser = ezert$$14;
					egl.setLocalFunctionVariable("browser", browser, "string");
					var ezert$$15 = null;
					ezert$$15 = this.getOnChange();
					egl.atLine(this.eze$$fileName,134,4049,28, this);
					var ezert$$16 = 0;
					ezert$$16 = ezert$$15.getSize();
					egl.atLine(this.eze$$fileName,134,4045,167, this);
					if ( (ezert$$16 > 0) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,135,4087,16, this);
							e.widget =  this;
							egl.atLine(this.eze$$fileName,136,4108,97, this);
							{
								try{egl.enterBlock();
									var index = 0;
									egl.addLocalFunctionVariable("index", index, "int", "index");
									index = 1;
									egl.setLocalFunctionVariable("index", index, "int");
									for ( ; (index <= this.getOnChange().getSize()); index = (index + 1) )
									{
										egl.setLocalFunctionVariable("index", index, "int");
										try{egl.enterBlock();
											var ezert$$17 = null;
											ezert$$17 = this.getOnChange();
											egl.atLine(this.eze$$fileName,137,4168,29, this);
											ezert$$17[ezert$$17.checkIndex((index)-1)](e );
										}finally{egl.exitBlock();}
										egl.atLine(this.eze$$fileName,136,4108,97, this);
									}
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
			}
			var ezert$$18 = null;
			ezert$$18 = this.getOnClick();
			egl.atLine(this.eze$$fileName,141,4225,27, this);
			var ezert$$19 = 0;
			ezert$$19 = ezert$$18.getSize();
			egl.atLine(this.eze$$fileName,141,4221,159, this);
			if ( (ezert$$19 > 0) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,142,4261,16, this);
					e.widget =  this;
					egl.atLine(this.eze$$fileName,143,4281,93, this);
					{
						try{egl.enterBlock();
							var index = 0;
							egl.addLocalFunctionVariable("index", index, "int", "index");
							index = 1;
							egl.setLocalFunctionVariable("index", index, "int");
							for ( ; (index <= this.getOnClick().getSize()); index = (index + 1) )
							{
								egl.setLocalFunctionVariable("index", index, "int");
								try{egl.enterBlock();
									var ezert$$20 = null;
									ezert$$20 = this.getOnClick();
									egl.atLine(this.eze$$fileName,144,4339,28, this);
									ezert$$20[ezert$$20.checkIndex((index)-1)](e );
								}finally{egl.exitBlock();}
								egl.atLine(this.eze$$fileName,143,4281,93, this);
							}
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,129,3833,552, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getSelected": function() {
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
		try { egl.enter("getSelected",this,arguments,eze$$updater);
			var $result = "";
			egl.atLine(this.eze$$fileName,150,4431,18, this);
			$result = this.selected;
			egl.setLocalFunctionVariable("STRING", $result, "string");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setTextLayout": function( textLayout ) {
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
		try { egl.enter("setTextLayout",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("textLayout", textLayout, "string", "textLayout");
			egl.atLine(this.eze$$fileName,154,4518,33, this);
			this.textLayoutThis = textLayout;
			egl.atLine(this.eze$$fileName,155,4554,16, this);
			this.setBiDiStyles();
			egl.atLine(this.eze$$fileName,153,4457,119, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getTextLayout": function() {
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
		try { egl.enter("getTextLayout",this,arguments,eze$$updater);
			var $result = "";
			egl.atLine(this.eze$$fileName,159,4638,29, this);
			$result = this.textLayoutThis;
			egl.setLocalFunctionVariable("STRING", $result, "string");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setReverseTextDirection": function( reverseTextDirection ) {
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
		try { egl.enter("setReverseTextDirection",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("reverseTextDirection", reverseTextDirection, "string", "reverseTextDirection");
			egl.atLine(this.eze$$fileName,163,4756,53, this);
			this.reverseTextDirectionThis = reverseTextDirection;
			egl.atLine(this.eze$$fileName,164,4812,16, this);
			this.setBiDiStyles();
			egl.atLine(this.eze$$fileName,162,4675,158, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getReverseTextDirection": function() {
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
		try { egl.enter("getReverseTextDirection",this,arguments,eze$$updater);
			var $result = "";
			egl.atLine(this.eze$$fileName,168,4905,39, this);
			$result = this.reverseTextDirectionThis;
			egl.setLocalFunctionVariable("STRING", $result, "string");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getWidgetOrientation": function() {
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
		try { egl.enter("getWidgetOrientation",this,arguments,eze$$updater);
			var $result = "";
			egl.atLine(this.eze$$fileName,171,5016,36, this);
			$result = this.widgetOrientationThis;
			egl.setLocalFunctionVariable("STRING", $result, "string");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setWidgetOrientation": function( widgetOrientation ) {
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
		try { egl.enter("setWidgetOrientation",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("widgetOrientation", widgetOrientation, "string", "widgetOrientation");
			egl.atLine(this.eze$$fileName,175,5138,47, this);
			this.widgetOrientationThis = widgetOrientation;
			egl.atLine(this.eze$$fileName,176,5189,375, this);
			if ( (widgetOrientation == "RTL") ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,177,5223,38, this);
					egl.checkNull(this.optionsBox, "optionsBox").setAttribute("dir", {eze$$value : "rtl", eze$$signature : "S;"} );
					egl.atLine(this.eze$$fileName,178,5265,25, this);
					egl.checkNull(this.optionsBox, "optionsBox").setAlignment(2);
					egl.atLine(this.eze$$fileName,179,5294,36, this);
					this.setReverseTextDirection("Yes" );
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,181,5396,38, this);
					egl.checkNull(this.optionsBox, "optionsBox").setAttribute("dir", {eze$$value : "ltr", eze$$signature : "S;"} );
					egl.atLine(this.eze$$fileName,182,5438,25, this);
					egl.checkNull(this.optionsBox, "optionsBox").setAlignment(0);
					egl.atLine(this.eze$$fileName,183,5467,35, this);
					this.setReverseTextDirection("No" );
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,174,5063,506, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setBiDiStyles": function() {
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
		try { egl.enter("setBiDiStyles",this,arguments,eze$$updater);
			var children = null;
			egl.addLocalFunctionVariable("children", children, "egl.ui.rui.Widget[]", "!children");
			egl.atLine(this.eze$$fileName,188,5628,24, this);
			var ezert$$21 = null;
			ezert$$21 = egl.checkNull(this.optionsBox, "optionsBox").getChildren();
			egl.atLine(this.eze$$fileName,188,5608,8, this);
			children = ezert$$21;
			egl.setLocalFunctionVariable("children", children, "egl.ui.rui.Widget[]");
			egl.atLine(this.eze$$fileName,189,5659,18, this);
			var ezert$$22 = 0;
			ezert$$22 = children.getSize();
			egl.atLine(this.eze$$fileName,189,5656,278, this);
			if ( (ezert$$22 > 0) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,190,5686,241, this);
					{
						try{egl.enterBlock();
							var i = 0;
							egl.addLocalFunctionVariable("i", i, "int", "i");
							i = 1;
							egl.setLocalFunctionVariable("i", i, "int");
							for ( ; (i <= children.getSize()); i = (i + 1) )
							{
								egl.setLocalFunctionVariable("i", i, "int");
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,191,5735,184, this);
									if ( (egl.checkNull(children, "children")[children.checkIndex((i)-1)].getClass() == "EglRuiRadioGroupOptionName") ) {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,192,5795,45, this);
											egl.checkNull(children, "children")[children.checkIndex((i)-1)].setTextLayout( this.textLayoutThis );
											egl.atLine(this.eze$$fileName,193,5846,65, this);
											egl.checkNull(children, "children")[children.checkIndex((i)-1)].setReverseTextDirection( this.reverseTextDirectionThis );
										}finally{egl.exitBlock();}
									}
									;
								}finally{egl.exitBlock();}
								egl.atLine(this.eze$$fileName,190,5686,241, this);
							}
						}finally{egl.exitBlock();}
					}
					;
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,187,5573,367, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setValueAsText": function( value ) {
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
		try { egl.enter("setValueAsText",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("value", value, "string", "value");
			egl.atLine(this.eze$$fileName,201,5996,19, this);
			this.setSelected(value );
			egl.atLine(this.eze$$fileName,200,5945,75, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getValueAsText": function() {
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
		try { egl.enter("getValueAsText",this,arguments,eze$$updater);
			var $result = "";
			egl.atLine(this.eze$$fileName,205,6076,18, this);
			$result = this.selected;
			egl.setLocalFunctionVariable("STRING", $result, "string");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"toString": function() {
		return "[RadioGroup]";
	}
	,
	"eze$$getName": function() {
		return "RadioGroup";
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
		
		{name: "UtilLib", value : egl.com.ibm.egl.rui.widgets.UtilLib['$inst'], type : "com.ibm.egl.rui.widgets.UtilLib", jsName : "egl.com.ibm.egl.rui.widgets.UtilLib.$inst"},
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
		{name: "groupName", value : function(){try{return eze$$parent.getGroupName();}catch(e){return null;}}(), type : "string", jsName : "groupName", getter : "getGroupName", setter : "setGroupName"},
		{name: "options", value : function(){try{return eze$$parent.getOptions();}catch(e){return null;}}(), type : "string[]", jsName : "!options", getter : "getOptions", setter : "setOptions"},
		{name: "selected", value : function(){try{return eze$$parent.getSelected();}catch(e){return null;}}(), type : "string", jsName : "selected", getter : "getSelected", setter : "setSelected"},
		{name: "optionsList", value : eze$$parent.optionsList, type : "egl.ui.rui.Widget[]", jsName : "!optionsList"},
		{name: "reverseTextDirectionThis", value : eze$$parent.reverseTextDirectionThis, type : "string", jsName : "reverseTextDirectionThis"},
		{name: "textLayoutThis", value : eze$$parent.textLayoutThis, type : "string", jsName : "textLayoutThis"},
		{name: "widgetOrientationThis", value : eze$$parent.widgetOrientationThis, type : "string", jsName : "widgetOrientationThis"},
		{name: "optionsBox", value : eze$$parent.optionsBox, type : "com.ibm.egl.rui.widgets.Box", jsName : "optionsBox"},
		{name: "selectedOption", value : eze$$parent.selectedOption, type : "egl.ui.rui.Widget", jsName : "selectedOption"}
		];
	}
}
, 'div'
);
