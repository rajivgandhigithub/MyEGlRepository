// Generated at Sun Sep 03 10:03:14 AST 2023 by EGL 7.1.1.v20180914_0609
// No APARs installed.

egl.defineRUIWidget('com.ibm.egl.rui.widgets', 'BIDITextArea', {
	'eze$$fileName': '/com.ibm.egl.rui_4.1.0/EGLSource/com/ibm/egl/rui/widgets/BIDITextArea.egl',
	'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/widgets/BIDITextArea',
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
			egl.atLine(this.eze$$fileName,19,583,36, this);
			this.savedBackgroundColor = "";
			egl.atLine(this.eze$$fileName,21,623,85, this);
			this.text = "";
			egl.atLine(this.eze$$fileName,22,710,94, this);
			this.readOnly = false;
			egl.atLine(this.eze$$fileName,23,806,91, this);
			this.numRows = 0;
			egl.atLine(this.eze$$fileName,24,899,100, this);
			this.numColumns = 0;
			egl.atLine(this.eze$$fileName,26,1002,47, this);
			this.reverseTextDirectionThis = "";
			egl.atLine(this.eze$$fileName,27,1051,42, this);
			this.textLayoutThis = "";
			egl.atLine(this.eze$$fileName,28,1095,42, this);
			this.widgetOrientationThis = "";
			egl.atLine(this.eze$$fileName,29,1139,39, this);
			this.handlers = null;
			
			egl.atLine(this.eze$$fileName,31,1185,25, this);
			this.buffer = (function(){ var ezert$$1= []; ezert$$1.setType( "S;" );for (var i=0; i < 0; i++) {
					ezert$$1[ i ] = "";
				}
				// no max size set for this array
			return ezert$$1;})();
			
			egl.atLine(this.eze$$fileName,32,1212,30, this);
			this.redraw = false;
			egl.atLine(this.eze$$fileName,33,1244,37, this);
			this.savedEnableSelection = false;
			this.jsrt$SysVar= new egl.egl.core.SysVar();
			new egl.egl.ui.rui.RUILib();
			egl.atLine(this.eze$$fileName,26,1010,24, this);
			this.reverseTextDirectionThis = "No";
			egl.atLine(this.eze$$fileName,27,1059,14, this);
			this.textLayoutThis = "Logical";
			egl.atLine(this.eze$$fileName,28,1103,21, this);
			this.widgetOrientationThis = "";
			egl.atLine(this.eze$$fileName,29,1147,8, this);
			this.handlers = null;
			egl.atLine(this.eze$$fileName,32,1220,6, this);
			this.redraw = true;
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
			egl.atLine(this.eze$$fileName,36,1304,34, this);
			this.getOnFocusGained().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.BIDITextArea.prototype.enableSelection,"enableSelection") );
			egl.atLine(this.eze$$fileName,37,1341,33, this);
			this.getOnFocusLost().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.BIDITextArea.prototype.disableSelection,"disableSelection") );
			egl.atLine(this.eze$$fileName,35,1285,94, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"enableSelection": function( e ) {
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
		try { egl.enter("enableSelection",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("e", e, "egl.ui.rui.Event", "e");
			egl.atLine(this.eze$$fileName,41,1445,32, this);
			var ezert$$2 = false;
			ezert$$2 = egl.egl.ui.rui.RUILib['$inst'].getTextSelectionEnabled();
			egl.atLine(this.eze$$fileName,41,1422,56, this);
			this.savedEnableSelection = ezert$$2;
			egl.atLine(this.eze$$fileName,42,1481,37, this);
			egl.egl.ui.rui.RUILib['$inst'].setTextSelectionEnabled(true );
			egl.atLine(this.eze$$fileName,40,1383,140, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"disableSelection": function( e ) {
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
		try { egl.enter("disableSelection",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("e", e, "egl.ui.rui.Event", "e");
			egl.atLine(this.eze$$fileName,46,1567,53, this);
			egl.egl.ui.rui.RUILib['$inst'].setTextSelectionEnabled(this.savedEnableSelection );
			egl.atLine(this.eze$$fileName,45,1527,98, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"append": function( text ) {
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
		try { egl.enter("append",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("text", text, "string", "text");
			egl.atLine(this.eze$$fileName,50,1663,84, this);
			if ( this.redraw ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,51,1685,9, this);
					var ezert$$3 = "";
					ezert$$3 = this.getText();
					egl.atLine(this.eze$$fileName,51,1677,26, this);
					this.setText((ezert$$3 + text) );
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,53,1714,27, this);
					this.buffer.appendElement( text );
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,49,1629,123, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setRedraw": function( draw ) {
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
		try { egl.enter("setRedraw",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("draw", draw, "boolean", "draw");
			egl.atLine(this.eze$$fileName,58,1794,14, this);
			this.redraw = draw;
			var bufSize = 0;
			egl.addLocalFunctionVariable("bufSize", bufSize, "int", "bufSize");
			egl.atLine(this.eze$$fileName,59,1825,16, this);
			var ezert$$4 = 0;
			ezert$$4 = this.buffer.getSize();
			egl.atLine(this.eze$$fileName,59,1811,7, this);
			bufSize = ezert$$4;
			egl.setLocalFunctionVariable("bufSize", bufSize, "int");
			egl.atLine(this.eze$$fileName,60,1845,151, this);
			if ( (this.redraw && (bufSize > 0)) ) {
				try{egl.enterBlock();
					var s = "";
					egl.addLocalFunctionVariable("s", s, "string", "s");
					egl.atLine(this.eze$$fileName,62,1887,62, this);
					{
						try{egl.enterBlock();
							var i = 0;
							egl.addLocalFunctionVariable("i", i, "int", "i");
							i = 1;
							egl.setLocalFunctionVariable("i", i, "int");
							for ( ; (i <= bufSize); i = (i + 1) )
							{
								egl.setLocalFunctionVariable("i", i, "int");
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,63,1920,22, this);
									s = (s + (egl.checkNull(this.buffer, "buffer")[this.buffer.checkIndex((i)-1)] + "\n"));
									egl.setLocalFunctionVariable("s", s, "string");
								}finally{egl.exitBlock();}
								egl.atLine(this.eze$$fileName,62,1887,62, this);
							}
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,65,1953,10, this);
					this.append(s );
					egl.atLine(this.eze$$fileName,66,1967,23, this);
					this.buffer = (function(){ var ezert$$5= []; ezert$$5.setType( "S;" );for (var i=0; i < 0; i++) {
							ezert$$5[ i ] = "";
						}
						// no max size set for this array
					return ezert$$5;})();
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,57,1756,245, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getNumRows": function() {
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
		try { egl.enter("getNumRows",this,arguments,eze$$updater);
			var $result = 0;
			var ezert$$6 = null;
			ezert$$6 = this.getAttribute("rows" );
			egl.atLine(this.eze$$fileName,71,2041,38, this);
			this.numRows = egl.convertAnyToInt(ezert$$6,false);
			egl.atLine(this.eze$$fileName,72,2082,17, this);
			$result = this.numRows;
			egl.setLocalFunctionVariable("INT", $result, "int");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setNumRows": function( rows ) {
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
		try { egl.enter("setNumRows",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("rows", rows, "int", "rows");
			egl.atLine(this.eze$$fileName,76,2143,15, this);
			this.numRows = rows;
			egl.atLine(this.eze$$fileName,77,2161,27, this);
			this.setAttribute("rows", {eze$$value : rows, eze$$signature : "I;"} );
			egl.atLine(this.eze$$fileName,75,2108,85, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getNumColumns": function() {
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
		try { egl.enter("getNumColumns",this,arguments,eze$$updater);
			var $result = 0;
			var ezert$$7 = null;
			ezert$$7 = this.getAttribute("cols" );
			egl.atLine(this.eze$$fileName,81,2237,41, this);
			this.numColumns = egl.convertAnyToInt(ezert$$7,false);
			egl.atLine(this.eze$$fileName,82,2281,19, this);
			$result = this.numColumns;
			egl.setLocalFunctionVariable("INT", $result, "int");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setNumColumns": function( cols ) {
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
		try { egl.enter("setNumColumns",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("cols", cols, "int", "cols");
			egl.atLine(this.eze$$fileName,86,2347,18, this);
			this.numColumns = cols;
			egl.atLine(this.eze$$fileName,87,2368,27, this);
			this.setAttribute("cols", {eze$$value : cols, eze$$signature : "I;"} );
			egl.atLine(this.eze$$fileName,85,2309,91, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setText": function( txt ) {
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
		try { egl.enter("setText",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("txt", txt, "string", "txt");
			egl.atLine(this.eze$$fileName,91,2446,11, this);
			this.text = txt;
			egl.atLine(this.eze$$fileName,92,2460,27, this);
			this.setAttribute("value", {eze$$value : txt, eze$$signature : "S;"} );
			egl.atLine(this.eze$$fileName,93,2490,14, this);
			this.reverseText();
			egl.atLine(this.eze$$fileName,90,2404,108, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getText": function() {
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
		try { egl.enter("getText",this,arguments,eze$$updater);
			var $result = "";
			egl.atLine(this.eze$$fileName,97,2562,14, this);
			this.reverseText();
			var ezert$$8 = null;
			ezert$$8 = this.getAttribute("value" );
			egl.atLine(this.eze$$fileName,98,2581,29, this);
			this.text = egl.convertAnyToString(ezert$$8,false);
			egl.atLine(this.eze$$fileName,99,2613,14, this);
			$result = this.text;
			egl.setLocalFunctionVariable("STRING", $result, "string");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getReadOnly": function() {
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
		try { egl.enter("getReadOnly",this,arguments,eze$$updater);
			var $result = false;
			egl.atLine(this.eze$$fileName,103,2686,17, this);
			$result = this.readOnly;
			egl.setLocalFunctionVariable("BOOLEAN", $result, "boolean");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setReadOnly": function( ro ) {
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
		try { egl.enter("setReadOnly",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("ro", ro, "boolean", "ro");
			egl.atLine(this.eze$$fileName,107,2757,14, this);
			this.readOnly = ro;
			egl.atLine(this.eze$$fileName,108,2774,276, this);
			if ( ro ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,109,2784,33, this);
					this.setAttribute("readOnly", {eze$$value : "true", eze$$signature : "S;"} );
					egl.atLine(this.eze$$fileName,110,2821,39, this);
					this.savedBackgroundColor = this.getBackgroundColor();
					egl.atLine(this.eze$$fileName,111,2864,23, this);
					this.setBackgroundColor(String('',null));
					egl.atLine(this.eze$$fileName,112,2891,37, this);
					this.setClass("EglRuiBIDITextAreaReadOnly");
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,114,2939,29, this);
					this.setAttribute("readOnly", {eze$$value : "", eze$$signature : "S;"} );
					egl.atLine(this.eze$$fileName,115,2972,39, this);
					this.setBackgroundColor(this.savedBackgroundColor);
					egl.atLine(this.eze$$fileName,116,3015,29, this);
					this.setClass("EglRuiBIDITextArea");
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,106,2711,344, this);
			{ if (!egl.debugg) egl.leave(); }
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
			egl.atLine(this.eze$$fileName,121,3140,53, this);
			this.reverseTextDirectionThis = reverseTextDirection;
			egl.atLine(this.eze$$fileName,122,3196,14, this);
			this.reverseText();
			egl.atLine(this.eze$$fileName,120,3058,159, this);
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
			egl.atLine(this.eze$$fileName,126,3289,39, this);
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
			egl.atLine(this.eze$$fileName,130,3402,36, this);
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
			egl.atLine(this.eze$$fileName,134,3522,47, this);
			this.widgetOrientationThis = widgetOrientation;
			egl.atLine(this.eze$$fileName,135,3572,16, this);
			this.setBidiStyles();
			egl.atLine(this.eze$$fileName,133,3447,148, this);
			{ if (!egl.debugg) egl.leave(); }
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
			egl.atLine(this.eze$$fileName,139,3662,33, this);
			this.textLayoutThis = textLayout;
			egl.atLine(this.eze$$fileName,140,3698,16, this);
			this.setBidiStyles();
			egl.atLine(this.eze$$fileName,142,3721,62, this);
			if ( (this.handlers == null) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,143,3745,32, this);
					this.handlers = (function () {
						var ezert$$9 = new egl.com.ibm.egl.rui.widgets.VisualHandlers();
						return ezert$$9;
					}).call(this);
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,145,3786,30, this);
			this.handlers.AttachHandlers( this );
			egl.atLine(this.eze$$fileName,146,3819,14, this);
			this.reverseText();
			egl.atLine(this.eze$$fileName,138,3601,240, this);
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
			egl.atLine(this.eze$$fileName,150,3904,29, this);
			$result = this.textLayoutThis;
			egl.setLocalFunctionVariable("STRING", $result, "string");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setBidiStyles": function() {
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
		try { egl.enter("setBidiStyles",this,arguments,eze$$updater);
			var isVisual = false;
			egl.addLocalFunctionVariable("isVisual", isVisual, "boolean", "isVisual");
			egl.atLine(this.eze$$fileName,154,3969,8, this);
			isVisual = (this.textLayoutThis == "Visual");
			egl.setLocalFunctionVariable("isVisual", isVisual, "boolean");
			var isWidgetOrientationRTL = false;
			egl.addLocalFunctionVariable("isWidgetOrientationRTL", isWidgetOrientationRTL, "boolean", "isWidgetOrientationRTL");
			egl.atLine(this.eze$$fileName,155,4023,22, this);
			isWidgetOrientationRTL = (this.widgetOrientationThis == "RTL");
			egl.setLocalFunctionVariable("isWidgetOrientationRTL", isWidgetOrientationRTL, "boolean");
			egl.atLine(this.eze$$fileName,156,4097,52, this);
			this.setBiDiStyles(isVisual, isWidgetOrientationRTL );
			egl.atLine(this.eze$$fileName,153,3942,214, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"reverseText": function() {
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
		try { egl.enter("reverseText",this,arguments,eze$$updater);
			var isVisual = false;
			egl.addLocalFunctionVariable("isVisual", isVisual, "boolean", "isVisual");
			egl.atLine(this.eze$$fileName,160,4185,8, this);
			isVisual = (this.textLayoutThis == "Visual");
			egl.setLocalFunctionVariable("isVisual", isVisual, "boolean");
			var isReverseDirection = false;
			egl.addLocalFunctionVariable("isReverseDirection", isReverseDirection, "boolean", "isReverseDirection");
			egl.atLine(this.eze$$fileName,161,4239,18, this);
			isReverseDirection = (this.reverseTextDirectionThis == "Yes");
			egl.setLocalFunctionVariable("isReverseDirection", isReverseDirection, "boolean");
			egl.atLine(this.eze$$fileName,162,4315,141, this);
			if ( (isVisual && isReverseDirection) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,163,4353,64, this);
					if ( (this.handlers == null) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,164,4378,32, this);
							this.handlers = (function () {
								var ezert$$10 = new egl.com.ibm.egl.rui.widgets.VisualHandlers();
								return ezert$$10;
							}).call(this);
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,166,4423,27, this);
					this.handlers.ReverseText( this );
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,159,4160,301, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"toString": function() {
		return "[BIDITextArea]";
	}
	,
	"eze$$getName": function() {
		return "BIDITextArea";
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
		{name: "savedBackgroundColor", value : eze$$parent.savedBackgroundColor, type : "string", jsName : "savedBackgroundColor"},
		{name: "text", value : function(){try{return eze$$parent.getText();}catch(e){return null;}}(), type : "string", jsName : "text", getter : "getText", setter : "setText"},
		{name: "readOnly", value : function(){try{return eze$$parent.getReadOnly();}catch(e){return null;}}(), type : "boolean", jsName : "readOnly", getter : "getReadOnly", setter : "setReadOnly"},
		{name: "numRows", value : function(){try{return eze$$parent.getNumRows();}catch(e){return null;}}(), type : "int", jsName : "numRows", getter : "getNumRows", setter : "setNumRows"},
		{name: "numColumns", value : function(){try{return eze$$parent.getNumColumns();}catch(e){return null;}}(), type : "int", jsName : "numColumns", getter : "getNumColumns", setter : "setNumColumns"},
		{name: "reverseTextDirectionThis", value : eze$$parent.reverseTextDirectionThis, type : "string", jsName : "reverseTextDirectionThis"},
		{name: "textLayoutThis", value : eze$$parent.textLayoutThis, type : "string", jsName : "textLayoutThis"},
		{name: "widgetOrientationThis", value : eze$$parent.widgetOrientationThis, type : "string", jsName : "widgetOrientationThis"},
		{name: "handlers", value : eze$$parent.handlers, type : "com.ibm.egl.rui.widgets.VisualHandlers", jsName : "handlers"},
		{name: "buffer", value : eze$$parent.buffer, type : "string[]", jsName : "!buffer"},
		{name: "redraw", value : eze$$parent.redraw, type : "boolean", jsName : "redraw"},
		{name: "savedEnableSelection", value : eze$$parent.savedEnableSelection, type : "boolean", jsName : "savedEnableSelection"}
		];
	}
}
, 'textarea'
);
