// Generated at Sun Sep 03 10:03:13 AST 2023 by EGL 7.1.1.v20180914_0609
// No APARs installed.

egl.defineRUIWidget('com.ibm.egl.rui.widgets', 'DataGrid', {
	'eze$$fileName': '/com.ibm.egl.rui_4.1.0/EGLSource/com/ibm/egl/rui/widgets/DataGrid.egl',
	'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/widgets/DataGrid',
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
			egl.atLine(this.eze$$fileName,86,3927,47, this);
			this.RUIDataGridID = "";
			egl.atLine(this.eze$$fileName,87,3976,67, this);
			this.data = (function(){ var ezert$$2= []; ezert$$2.setType( "A;" );// no max size set for this array
			return ezert$$2;})();
			
			egl.atLine(this.eze$$fileName,88,4045,26, this);
			this.internalID = "";
			egl.atLine(this.eze$$fileName,89,4080,20, this);
			this.util = new egl.com.ibm.egl.rui.widgets.DataGridUtil();
			
			egl.atLine(this.eze$$fileName,90,4105,52, this);
			this.pagingLabel = "";
			egl.atLine(this.eze$$fileName,92,4163,89, this);
			this.grid = new egl.com.ibm.egl.rui.widgets.Div();
			egl.addEmbeddedWidget(this, "grid");
			
			egl.atLine(this.eze$$fileName,94,4258,97, this);
			this.gotoStartButton = new egl.com.ibm.egl.rui.widgets.Button();
			egl.addEmbeddedWidget(this, "gotoStartButton");
			
			egl.atLine(this.eze$$fileName,95,4360,102, this);
			this.gotoPageBackButton = new egl.com.ibm.egl.rui.widgets.Button();
			egl.addEmbeddedWidget(this, "gotoPageBackButton");
			
			egl.atLine(this.eze$$fileName,96,4467,78, this);
			this.pageTextLabel = new egl.com.ibm.egl.rui.widgets.HTML();
			egl.addEmbeddedWidget(this, "pageTextLabel");
			
			egl.atLine(this.eze$$fileName,97,4550,108, this);
			this.gotoPageForwardButton = new egl.com.ibm.egl.rui.widgets.Button();
			egl.addEmbeddedWidget(this, "gotoPageForwardButton");
			
			egl.atLine(this.eze$$fileName,98,4663,93, this);
			this.gotoEndButton = new egl.com.ibm.egl.rui.widgets.Button();
			egl.addEmbeddedWidget(this, "gotoEndButton");
			
			egl.atLine(this.eze$$fileName,99,4761,173, this);
			this.buttonBar = new egl.com.ibm.egl.rui.widgets.Box();
			egl.addEmbeddedWidget(this, "buttonBar");
			
			egl.atLine(this.eze$$fileName,104,4940,28, this);
			this.ui = new egl.com.ibm.egl.rui.widgets.Box();
			egl.addEmbeddedWidget(this, "ui");
			
			egl.atLine(this.eze$$fileName,106,4974,41, this);
			this.columns = (function(){ var ezert$$3= []; ezert$$3.setType( egl.com.ibm.egl.rui.widgets.DataGridColumn );for (var i=0; i < 0; i++) {
					ezert$$3[ i ] = new egl.com.ibm.egl.rui.widgets.DataGridColumn();
				}
				// no max size set for this array
			return ezert$$3;})();
			
			egl.atLine(this.eze$$fileName,108,5021,30, this);
			this.behaviors = (function(){ var ezert$$4= []; ezert$$4.setType( egl.egl.jsrt.Delegate );for (var i=0; i < 0; i++) {
					ezert$$4[ i ] = null;
				}
				// no max size set for this array
			return ezert$$4;})();
			
			egl.atLine(this.eze$$fileName,109,5056,36, this);
			this.headerBehaviors = (function(){ var ezert$$5= []; ezert$$5.setType( egl.egl.jsrt.Delegate );for (var i=0; i < 0; i++) {
					ezert$$5[ i ] = null;
				}
				// no max size set for this array
			return ezert$$5;})();
			
			egl.atLine(this.eze$$fileName,110,5097,34, this);
			this.editorBehaviors = (function(){ var ezert$$6= []; ezert$$6.setType( egl.egl.jsrt.Delegate );for (var i=0; i < 0; i++) {
					ezert$$6[ i ] = null;
				}
				// no max size set for this array
			return ezert$$6;})();
			
			egl.atLine(this.eze$$fileName,112,5137,30, this);
			this.selection = (function(){ var ezert$$7= []; ezert$$7.setType( "A;" );// no max size set for this array
			return ezert$$7;})();
			
			egl.atLine(this.eze$$fileName,113,5172,28, this);
			this.checked = (function(){ var ezert$$8= []; ezert$$8.setType( "A;" );// no max size set for this array
			return ezert$$8;})();
			
			egl.atLine(this.eze$$fileName,115,5206,50, this);
			this.showCheckBoxes = false;
			egl.atLine(this.eze$$fileName,116,5261,50, this);
			this.showScrollbar = false;
			egl.atLine(this.eze$$fileName,117,5316,580, this);
			this.selectionMode = 0;
			egl.atLine(this.eze$$fileName,126,5901,74, this);
			this.enableSorting = false;
			egl.atLine(this.eze$$fileName,127,5980,74, this);
			this.showButtonBar = false;
			egl.atLine(this.eze$$fileName,128,6059,71, this);
			this.showHeader = false;
			egl.atLine(this.eze$$fileName,130,6140,42, this);
			this.pageChangeListeners = (function(){ var ezert$$9= []; ezert$$9.setType( egl.egl.jsrt.Delegate );for (var i=0; i < 0; i++) {
					ezert$$9[ i ] = null;
				}
				// no max size set for this array
			return ezert$$9;})();
			
			egl.atLine(this.eze$$fileName,131,6187,40, this);
			this.selectionListeners = (function(){ var ezert$$10= []; ezert$$10.setType( egl.egl.jsrt.Delegate );for (var i=0; i < 0; i++) {
					ezert$$10[ i ] = null;
				}
				// no max size set for this array
			return ezert$$10;})();
			
			egl.atLine(this.eze$$fileName,132,6232,38, this);
			this.checkboxListeners = (function(){ var ezert$$11= []; ezert$$11.setType( egl.egl.jsrt.Delegate );for (var i=0; i < 0; i++) {
					ezert$$11[ i ] = null;
				}
				// no max size set for this array
			return ezert$$11;})();
			
			egl.atLine(this.eze$$fileName,133,6275,30, this);
			this.sortListeners = (function(){ var ezert$$12= []; ezert$$12.setType( egl.egl.jsrt.Delegate );for (var i=0; i < 0; i++) {
					ezert$$12[ i ] = null;
				}
				// no max size set for this array
			return ezert$$12;})();
			
			egl.atLine(this.eze$$fileName,135,6311,65, this);
			this.cellPadding = 0;
			egl.atLine(this.eze$$fileName,136,6381,64, this);
			this.cellBorder = 0;
			egl.atLine(this.eze$$fileName,137,6450,45, this);
			this.rowHeight = 0;
			egl.atLine(this.eze$$fileName,138,6500,69, this);
			this.checkBoxWidth = 0;
			egl.atLine(this.eze$$fileName,140,6575,63, this);
			this.startRow = 0;
			egl.atLine(this.eze$$fileName,142,6691,33, this);
			this._startRow = 0;
			egl.atLine(this.eze$$fileName,143,6729,29, this);
			this.lastStartRow = 0;
			egl.atLine(this.eze$$fileName,144,6763,63, this);
			this.pageSize = 0;
			egl.atLine(this.eze$$fileName,146,6832,47, this);
			this.reverseTextDirectionThis = "";
			egl.atLine(this.eze$$fileName,147,6884,42, this);
			this.textLayoutThis = "";
			egl.atLine(this.eze$$fileName,149,6932,36, this);
			this.dataLoader = null;
			
			egl.atLine(this.eze$$fileName,151,6971,271, this);
			this.loadingDiv = new egl.com.ibm.egl.rui.widgets.Div();
			egl.addEmbeddedWidget(this, "loadingDiv");
			
			egl.atLine(this.eze$$fileName,217,8938,31, this);
			this.columnClass = (function(){ var ezert$$13= []; ezert$$13.setType( "S;" );// no max size set for this array
			return ezert$$13;})();
			
			egl.atLine(this.eze$$fileName,266,10851,60, this);
			this.showLoadingDivJob = new egl.egl.javascript.Job();
			
			egl.atLine(this.eze$$fileName,267,10913,30, this);
			this.innerLoadingDiv = new egl.com.ibm.egl.rui.widgets.Div();
			egl.addEmbeddedWidget(this, "innerLoadingDiv");
			
			egl.atLine(this.eze$$fileName,309,12394,52, this);
			this.Directions = null;
			
			egl.atLine(this.eze$$fileName,627,25636,103, this);
			this.columnDragger = new egl.com.ibm.egl.rui.widgets.Span();
			egl.addEmbeddedWidget(this, "columnDragger");
			
			egl.atLine(this.eze$$fileName,943,36132,28, this);
			this.lastSelectedRow = 0;
			egl.atLine(this.eze$$fileName,944,36165,24, this);
			this.lastEvent = null;
			
			egl.atLine(this.eze$$fileName,1084,40615,29, this);
			this.sortedColumn = 0;
			this.jsrt$SysVar= new egl.egl.core.SysVar();
			new egl.egl.core.StrLib();
			new egl.egl.core.MathLib();
			new egl.com.ibm.egl.rui.widgets.UtilLib();
			new egl.com.ibm.egl.rui.widgets.DataGridLib();
			egl.atLine(this.eze$$fileName,43,2077,17, this);
			this.targetWidget = this.ui;
			egl.atLine(this.eze$$fileName,86,3935,13, this);
			this.RUIDataGridID = "RUIDataGridID";
			egl.atLine(this.eze$$fileName,90,4113,11, this);
			this.pagingLabel = "{page} / {pageCount}";
			egl.atLine(this.eze$$fileName,92,4180,24, this);
			egl.checkNull(this.grid, "grid").setClass("EglRuiDataGrid");
			egl.atLine(this.eze$$fileName,92,4206,21, this);
			egl.checkNull(this.grid, "grid").setPosition("relative");
			egl.atLine(this.eze$$fileName,92,4229,21, this);
			egl.checkNull(this.grid, "grid").getOnClick().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.DataGrid.prototype.clickGrid,"clickGrid") );
			egl.atLine(this.eze$$fileName,94,4289,11, this);
			egl.checkNull(this.gotoStartButton, "gotoStartButton").setText("<<");
			egl.atLine(this.eze$$fileName,94,4302,10, this);
			egl.checkNull(this.gotoStartButton, "gotoStartButton").setWidth((45).toString());
			egl.atLine(this.eze$$fileName,94,4314,16, this);
			egl.checkNull(this.gotoStartButton, "gotoStartButton").setMarginRight(10);
			egl.atLine(this.eze$$fileName,94,4332,21, this);
			egl.checkNull(this.gotoStartButton, "gotoStartButton").getOnClick().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.DataGrid.prototype.gotoStart,"gotoStart") );
			egl.atLine(this.eze$$fileName,95,4394,10, this);
			egl.checkNull(this.gotoPageBackButton, "gotoPageBackButton").setText("<");
			egl.atLine(this.eze$$fileName,95,4406,10, this);
			egl.checkNull(this.gotoPageBackButton, "gotoPageBackButton").setWidth((45).toString());
			egl.atLine(this.eze$$fileName,95,4418,16, this);
			egl.checkNull(this.gotoPageBackButton, "gotoPageBackButton").setMarginRight(10);
			egl.atLine(this.eze$$fileName,95,4436,24, this);
			egl.checkNull(this.gotoPageBackButton, "gotoPageBackButton").getOnClick().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.DataGrid.prototype.gotoPageBack,"gotoPageBack") );
			egl.atLine(this.eze$$fileName,96,4494,16, this);
			egl.checkNull(this.pageTextLabel, "pageTextLabel").setMarginRight(10);
			egl.atLine(this.eze$$fileName,96,4512,16, this);
			egl.checkNull(this.pageTextLabel, "pageTextLabel").setFontSize("80%");
			egl.atLine(this.eze$$fileName,96,4530,13, this);
			egl.checkNull(this.pageTextLabel, "pageTextLabel").setMarginTop(4);
			egl.atLine(this.eze$$fileName,97,4587,10, this);
			egl.checkNull(this.gotoPageForwardButton, "gotoPageForwardButton").setText(">");
			egl.atLine(this.eze$$fileName,97,4599,10, this);
			egl.checkNull(this.gotoPageForwardButton, "gotoPageForwardButton").setWidth((45).toString());
			egl.atLine(this.eze$$fileName,97,4611,16, this);
			egl.checkNull(this.gotoPageForwardButton, "gotoPageForwardButton").setMarginRight(10);
			egl.atLine(this.eze$$fileName,97,4629,27, this);
			egl.checkNull(this.gotoPageForwardButton, "gotoPageForwardButton").getOnClick().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.DataGrid.prototype.gotoPageForward,"gotoPageForward") );
			egl.atLine(this.eze$$fileName,98,4692,11, this);
			egl.checkNull(this.gotoEndButton, "gotoEndButton").setText(">>");
			egl.atLine(this.eze$$fileName,98,4705,10, this);
			egl.checkNull(this.gotoEndButton, "gotoEndButton").setWidth((45).toString());
			egl.atLine(this.eze$$fileName,98,4717,16, this);
			egl.checkNull(this.gotoEndButton, "gotoEndButton").setMarginRight(10);
			egl.atLine(this.eze$$fileName,98,4735,19, this);
			egl.checkNull(this.gotoEndButton, "gotoEndButton").getOnClick().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.DataGrid.prototype.gotoEnd,"gotoEnd") );
			egl.atLine(this.eze$$fileName,100,4789,33, this);
			egl.checkNull(this.buttonBar, "buttonBar").setClass("EglRuiDataGridButtonBar");
			egl.atLine(this.eze$$fileName,101,4830,100, this);
			egl.checkNull(this.buttonBar, "buttonBar").setChildren( [ this.gotoStartButton, this.gotoPageBackButton, this.pageTextLabel, this.gotoPageForwardButton, this.gotoEndButton ] );
			egl.atLine(this.eze$$fileName,104,4955,11, this);
			egl.checkNull(this.ui, "ui").setColumns(1);
			egl.atLine(this.eze$$fileName,117,5316,13, this);
			this.selectionMode = 2;
			egl.atLine(this.eze$$fileName,126,5901,13, this);
			this.enableSorting = true;
			egl.atLine(this.eze$$fileName,127,5980,13, this);
			this.showButtonBar = true;
			egl.atLine(this.eze$$fileName,128,6059,10, this);
			this.showHeader = true;
			egl.atLine(this.eze$$fileName,135,6311,11, this);
			this.cellPadding = 4;
			egl.atLine(this.eze$$fileName,136,6381,10, this);
			this.cellBorder = 1;
			egl.atLine(this.eze$$fileName,138,6500,13, this);
			this.checkBoxWidth = 20;
			egl.atLine(this.eze$$fileName,140,6575,8, this);
			this.startRow = 1;
			egl.atLine(this.eze$$fileName,142,6699,9, this);
			this._startRow = this.startRow;
			egl.atLine(this.eze$$fileName,143,6737,12, this);
			this.lastStartRow = 0;
			egl.atLine(this.eze$$fileName,144,6763,8, this);
			this.pageSize = 10;
			egl.atLine(this.eze$$fileName,146,6840,24, this);
			this.reverseTextDirectionThis = "No";
			egl.atLine(this.eze$$fileName,147,6892,14, this);
			this.textLayoutThis = "Logical";
			egl.atLine(this.eze$$fileName,149,6932,10, this);
			this.dataLoader = new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.DataGrid.prototype.fullyCached,"fullyCached");
			egl.atLine(this.eze$$fileName,152,7000,30, this);
			egl.checkNull(this.loadingDiv, "loadingDiv").setClass("EglRuiGridLoadingDiv");
			egl.atLine(this.eze$$fileName,153,7045,46, this);
			egl.checkNull(this.loadingDiv, "loadingDiv").setInnerHTML("<img src='images/spinner.gif' />");
			egl.atLine(this.eze$$fileName,154,7096,23, this);
			egl.checkNull(this.loadingDiv, "loadingDiv").setPosition("absolute");
			egl.atLine(this.eze$$fileName,155,7124,13, this);
			egl.checkNull(this.loadingDiv, "loadingDiv").setOpacity((100).toString());
			egl.atLine(this.eze$$fileName,156,7142,12, this);
			egl.checkNull(this.loadingDiv, "loadingDiv").setZIndex((100).toString());
			egl.atLine(this.eze$$fileName,157,7159,11, this);
			egl.checkNull(this.loadingDiv, "loadingDiv").setWidth((100).toString());
			egl.atLine(this.eze$$fileName,158,7175,12, this);
			egl.checkNull(this.loadingDiv, "loadingDiv").setHeight((100).toString());
			egl.atLine(this.eze$$fileName,159,7192,15, this);
			egl.checkNull(this.loadingDiv, "loadingDiv").setPaddingTop(45);
			egl.atLine(this.eze$$fileName,160,7212,16, this);
			egl.checkNull(this.loadingDiv, "loadingDiv").setPaddingLeft(45);
			egl.atLine(this.eze$$fileName,266,10881,28, this);
			this.showLoadingDivJob.setRunFunction( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.DataGrid.prototype.showLoadingDiv,"showLoadingDiv") );
			egl.atLine(this.eze$$fileName,309,12402,10, this);
			this.Directions = [ "None", "Down", "Up" ].setType( "S;" );
			egl.atLine(this.eze$$fileName,627,25655,36, this);
			egl.checkNull(this.columnDragger, "columnDragger").setClass("EglRuiDataGridResizeHandle");
			egl.atLine(this.eze$$fileName,627,25693,22, this);
			egl.checkNull(this.columnDragger, "columnDragger").setBackground("#CCCCCC");
			egl.atLine(this.eze$$fileName,627,25717,20, this);
			egl.checkNull(this.columnDragger, "columnDragger").setInnerHTML("&nbsp;");
			egl.atLine(this.eze$$fileName,1084,40623,12, this);
			this.sortedColumn = 1;
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
	"setData": function( data ) {
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
		try { egl.enter("setData",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("data", data, "any[]", "!data");
			egl.atLine(this.eze$$fileName,164,7300,48, this);
			if ( (data == null) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,165,7329,7, this);
					{ if (!egl.debugg) egl.leave(); return;}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,167,7357,79, this);
			if ( (egl.checkNull(this.ui, "ui").getID() == "") ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,168,7385,39, this);
					egl.checkNull(this.ui, "ui").setID((this.internalID + "_container"));
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,170,7445,26, this);
			egl.checkNull(this.grid, "grid").setID(this.internalID);
			egl.atLine(this.eze$$fileName,171,7480,17, this);
			this.data = data;
			egl.atLine(this.eze$$fileName,172,7506,16, this);
			this.updateColumns();
			egl.atLine(this.eze$$fileName,173,7536,19, this);
			this.setAllDeselected();
			egl.atLine(this.eze$$fileName,174,7564,9, this);
			this.render();
			egl.atLine(this.eze$$fileName,163,7260,321, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"fullyCached": function( startRow, endRow, sortFieldName, sortDirection ) {
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
		try { egl.enter("fullyCached",this,arguments,eze$$updater);
			var $result = false;
			egl.addLocalFunctionVariable("startRow", startRow, "int", "startRow");
			egl.addLocalFunctionVariable("endRow", endRow, "int", "endRow");
			egl.addLocalFunctionVariable("sortFieldName", sortFieldName, "string", "sortFieldName");
			egl.addLocalFunctionVariable("sortDirection", sortDirection, "int", "sortDirection");
			egl.atLine(this.eze$$fileName,178,7720,13, this);
			$result = true;
			egl.setLocalFunctionVariable("BOOLEAN", $result, "boolean");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"render": function() {
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
		try { egl.enter("render",this,arguments,eze$$updater);
			egl.atLine(this.eze$$fileName,182,7776,17, this);
			var ezert$$14 = false;
			ezert$$14 = this.dataIsAvailable();
			egl.atLine(this.eze$$fileName,182,7773,698, this);
			if ( ezert$$14 ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,183,7799,29, this);
					this.util.destroyHeaderCell(this.grid );
					egl.atLine(this.eze$$fileName,184,7841,27, this);
					this.showLoadingDivJob.cancel();
					egl.atLine(this.eze$$fileName,185,7881,21, this);
					this.setColumnsProperty();
					egl.atLine(this.eze$$fileName,186,7915,37, this);
					egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.clearHTMLString();
					egl.atLine(this.eze$$fileName,187,7964,71, this);
					egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString("<div class=EglRuiDataGridTable>" );
					egl.atLine(this.eze$$fileName,188,8039,20, this);
					this.renderHeaderCells();
					egl.atLine(this.eze$$fileName,189,8063,13, this);
					this.renderRows();
					egl.atLine(this.eze$$fileName,190,8080,46, this);
					egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString("</div>" );
					egl.atLine(this.eze$$fileName,191,8147,34, this);
					var ezert$$15 = "";
					ezert$$15 = egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.getHTMLString();
					egl.atLine(this.eze$$fileName,191,8130,52, this);
					egl.checkNull(this.grid, "grid").setInnerHTML(ezert$$15);
					egl.atLine(this.eze$$fileName,192,8195,17, this);
					this.applyBehaviors();
					egl.atLine(this.eze$$fileName,193,8225,18, this);
					this.renderButtonBar();
					egl.atLine(this.eze$$fileName,194,8256,17, this);
					this.enableDragging();
					egl.atLine(this.eze$$fileName,195,8286,51, this);
					(function () {
						var ezert$$16 = new egl.egl.javascript.Job();
						egl.atLine(this.eze$$fileName,195,8294,30, this);
						ezert$$16.setRunFunction( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.DataGrid.prototype.updateDimensions,"updateDimensions") );
						return ezert$$16;
					}).call(this).schedule();
					egl.atLine(this.eze$$fileName,196,8350,51, this);
					(function () {
						var ezert$$17 = new egl.egl.javascript.Job();
						egl.atLine(this.eze$$fileName,196,8358,30, this);
						ezert$$17.setRunFunction( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.DataGrid.prototype.updateHighlights,"updateHighlights") );
						return ezert$$17;
					}).call(this).schedule();
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,198,8427,32, this);
					this.showLoadingDivJob.schedule(200 );
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,181,7747,732, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"dataIsAvailable": function() {
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
		try { egl.enter("dataIsAvailable",this,arguments,eze$$updater);
			var $result = false;
			var key = "";
			egl.addLocalFunctionVariable("key", key, "string", "key");
			egl.atLine(this.eze$$fileName,203,8545,3, this);
			key = "";
			egl.setLocalFunctionVariable("key", key, "string");
			var direction = 0;
			egl.addLocalFunctionVariable("direction", direction, "int", "direction");
			egl.atLine(this.eze$$fileName,204,8570,9, this);
			direction = 0;
			egl.setLocalFunctionVariable("direction", direction, "int");
			egl.atLine(this.eze$$fileName,205,8600,17, this);
			var ezert$$18 = 0;
			ezert$$18 = this.columns.getSize();
			egl.atLine(this.eze$$fileName,205,8597,144, this);
			if ( (ezert$$18 > 0) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,206,8635,33, this);
					key = egl.checkNull(egl.checkNull(this.columns, "columns")[this.columns.checkIndex((this.sortedColumn)-1)], "columns[sortedColumn]").name;
					egl.setLocalFunctionVariable("key", key, "string");
					egl.atLine(this.eze$$fileName,207,8681,48, this);
					direction = egl.checkNull(egl.checkNull(this.columns, "columns")[this.columns.checkIndex((this.sortedColumn)-1)], "columns[sortedColumn]").sortDirection;
					egl.setLocalFunctionVariable("direction", direction, "int");
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,209,8757,63, this);
			var ezert$$19 = false;
			ezert$$19 = this.dataLoader(this._startRow, ((this._startRow + this.pageSize) - 1), key, direction );
			egl.atLine(this.eze$$fileName,209,8750,72, this);
			$result = ezert$$19;
			egl.setLocalFunctionVariable("BOOLEAN", $result, "boolean");
			{ if (!egl.debugg) egl.leave(); return $result;}
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
			egl.atLine(this.eze$$fileName,213,8855,73, this);
			if ( (this.internalID == "") ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,214,8903,18, this);
					var ezert$$20 = "";
					ezert$$20 = this.util.getUniqueID();
					egl.atLine(this.eze$$fileName,214,8885,37, this);
					this.internalID = ezert$$20;
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,212,8836,100, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"updateColumns": function() {
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
		try { egl.enter("updateColumns",this,arguments,eze$$updater);
			var eze_Cond_Temp_0 = false;
			egl.atLine(this.eze$$fileName,219,9019,17, this);
			var ezert$$21 = 0;
			ezert$$21 = this.columns.getSize();
			egl.atLine(this.eze$$fileName,219,9019,44, this);
			if ( (ezert$$21 == 0) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,219,9045,14, this);
					var ezert$$22 = 0;
					ezert$$22 = this.data.getSize();
					egl.atLine(this.eze$$fileName,219,9019,44, this);
					if ( (ezert$$22 > 0) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,219,9019,44, this);
							eze_Cond_Temp_0 = true;
						}finally{egl.exitBlock();}
					}
					else {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,219,9019,44, this);
							eze_Cond_Temp_0 = false;
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,219,9019,44, this);
					eze_Cond_Temp_0 = false;
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,219,9016,415, this);
			if ( eze_Cond_Temp_0 ) {
				try{egl.enterBlock();
					var fieldNames = null;
					egl.addLocalFunctionVariable("fieldNames", fieldNames, "string[]", "!fieldNames");
					egl.atLine(this.eze$$fileName,220,9099,27, this);
					var ezert$$23 = null;
					ezert$$23 = this.util.getFieldNames(egl.unboxAny(egl.boxAny(egl.checkNull(this.data, "data")[this.data.checkIndex((1)-1)])) );
					egl.atLine(this.eze$$fileName,220,9077,10, this);
					fieldNames = ezert$$23;
					egl.setLocalFunctionVariable("fieldNames", fieldNames, "string[]");
					egl.atLine(this.eze$$fileName,221,9140,285, this);
					{
						try{egl.enterBlock();
							var n = 0;
							egl.addLocalFunctionVariable("n", n, "int", "n");
							n = 1;
							egl.setLocalFunctionVariable("n", n, "int");
							for ( ; (n <= fieldNames.getSize()); n = (n + 1) )
							{
								egl.setLocalFunctionVariable("n", n, "int");
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,222,9198,197, this);
									this.columns.appendElement( (function () {
										var ezert$$24 = new egl.com.ibm.egl.rui.widgets.DataGridColumn();
										egl.atLine(this.eze$$fileName,223,9247,20, this);
										egl.checkNull(ezert$$24, "ezert$$24").name = egl.checkNull(fieldNames, "fieldNames")[fieldNames.checkIndex((n)-1)];
										egl.atLine(this.eze$$fileName,224,9287,27, this);
										egl.checkNull(ezert$$24, "ezert$$24").displayName = egl.checkNull(fieldNames, "fieldNames")[fieldNames.checkIndex((n)-1)];
										egl.atLine(this.eze$$fileName,225,9347,32, this);
										var ezert$$25 = 0;
										ezert$$25 = this.util.getTextWidth(egl.checkNull(fieldNames, "fieldNames")[fieldNames.checkIndex((n)-1)] );
										egl.atLine(this.eze$$fileName,225,9334,45, this);
										egl.checkNull(ezert$$24, "ezert$$24").width = ((44 + ezert$$25)).toString();
										return ezert$$24;
									}).call(this) );
								}finally{egl.exitBlock();}
								egl.atLine(this.eze$$fileName,221,9140,285, this);
							}
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
			}
			var eze_Cond_Temp_1 = false;
			egl.atLine(this.eze$$fileName,229,9443,17, this);
			var ezert$$26 = 0;
			ezert$$26 = this.columns.getSize();
			egl.atLine(this.eze$$fileName,229,9443,43, this);
			if ( (ezert$$26 > 0) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,229,9468,14, this);
					var ezert$$27 = 0;
					ezert$$27 = this.data.getSize();
					egl.atLine(this.eze$$fileName,229,9443,43, this);
					if ( (ezert$$27 > 0) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,229,9443,43, this);
							eze_Cond_Temp_1 = true;
						}finally{egl.exitBlock();}
					}
					else {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,229,9443,43, this);
							eze_Cond_Temp_1 = false;
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,229,9443,43, this);
					eze_Cond_Temp_1 = false;
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,229,9440,685, this);
			if ( eze_Cond_Temp_1 ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,230,9500,613, this);
					{
						try{egl.enterBlock();
							var n = 0;
							egl.addLocalFunctionVariable("n", n, "int", "n");
							n = 1;
							egl.setLocalFunctionVariable("n", n, "int");
							for ( ; (n <= this.columns.getSize()); n = (n + 1) )
							{
								egl.setLocalFunctionVariable("n", n, "int");
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,231,9555,542, this);
									Lezert$$1: if ( (egl.checkNull(egl.checkNull(this.columns, "columns")[this.columns.checkIndex((n)-1)], "columns[n]").enableSorting && (egl.checkNull(egl.checkNull(this.columns, "columns")[this.columns.checkIndex((n)-1)], "columns[n]").sortDirection != 0)) ) {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,232,9657,394, this);
											if ( (egl.checkNull(egl.checkNull(this.columns, "columns")[this.columns.checkIndex((n)-1)], "columns[n]").columnComparator != null) ) {
												try{egl.enterBlock();
													egl.atLine(this.eze$$fileName,233,9728,131, this);
													var ezert$$28 = null;
													ezert$$28 = egl.boxElements(this.util.sort(egl.unboxElements(this.data, "1A;"), egl.checkNull(egl.checkNull(this.columns, "columns")[this.columns.checkIndex((n)-1)], "columns[n]").name, (egl.checkNull(egl.checkNull(this.columns, "columns")[this.columns.checkIndex((n)-1)], "columns[n]").sortDirection == 2), egl.checkNull(egl.checkNull(this.columns, "columns")[this.columns.checkIndex((n)-1)], "columns[n]").ignoreCase, function() {
														var ezert$$29 = null;
														
														ezert$$29 = egl.checkNull(egl.checkNull(this.columns, "columns")[this.columns.checkIndex((n)-1)], "columns[n]").columnComparator;
													; return ezert$$29;}.call(this) ));
													egl.atLine(this.eze$$fileName,233,9721,139, this);
													this.data = ezert$$28;
												}finally{egl.exitBlock();}
											}
											else {
												try{egl.enterBlock();
													egl.atLine(this.eze$$fileName,235,9917,109, this);
													var ezert$$30 = null;
													ezert$$30 = egl.boxElements(this.util.sort(egl.unboxElements(this.data, "1A;"), egl.checkNull(egl.checkNull(this.columns, "columns")[this.columns.checkIndex((n)-1)], "columns[n]").name, (egl.checkNull(egl.checkNull(this.columns, "columns")[this.columns.checkIndex((n)-1)], "columns[n]").sortDirection == 2), egl.checkNull(egl.checkNull(this.columns, "columns")[this.columns.checkIndex((n)-1)], "columns[n]").ignoreCase, null ));
													egl.atLine(this.eze$$fileName,235,9910,117, this);
													this.data = ezert$$30;
												}finally{egl.exitBlock();}
											}
											egl.atLine(this.eze$$fileName,237,10072,5, this);
											break Lezert$$1;
										}finally{egl.exitBlock();}
									}
								}finally{egl.exitBlock();}
								egl.atLine(this.eze$$fileName,230,9500,613, this);
							}
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,218,8975,1158, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setColumnsProperty": function() {
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
		try { egl.enter("setColumnsProperty",this,arguments,eze$$updater);
			var eze_Cond_Temp_2 = false;
			egl.atLine(this.eze$$fileName,244,10190,14, this);
			var ezert$$31 = 0;
			ezert$$31 = this.data.getSize();
			egl.atLine(this.eze$$fileName,244,10190,43, this);
			if ( (ezert$$31 > 0) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,244,10212,17, this);
					var ezert$$32 = 0;
					ezert$$32 = this.columns.getSize();
					egl.atLine(this.eze$$fileName,244,10190,43, this);
					if ( (ezert$$32 > 0) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,244,10190,43, this);
							eze_Cond_Temp_2 = true;
						}finally{egl.exitBlock();}
					}
					else {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,244,10190,43, this);
							eze_Cond_Temp_2 = false;
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,244,10190,43, this);
					eze_Cond_Temp_2 = false;
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,244,10187,382, this);
			if ( eze_Cond_Temp_2 ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,245,10242,318, this);
					{
						try{egl.enterBlock();
							var column = 0;
							egl.addLocalFunctionVariable("column", column, "int", "column");
							column = 1;
							egl.setLocalFunctionVariable("column", column, "int");
							for ( ; (column <= this.columns.getSize()); column = (column + 1) )
							{
								egl.setLocalFunctionVariable("column", column, "int");
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,246,10293,257, this);
									try {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,247,10305,43, this);
											if ( (egl.valueByKey(egl.checkNull(egl.boxAny(egl.checkNull(this.data, "data")[this.data.checkIndex((1)-1)]), "data[1]"), egl.checkNull(egl.checkNull(this.columns, "columns")[this.columns.checkIndex((column)-1)], "columns[column]").name) != null) ) {
												try{egl.enterBlock();
												}finally{egl.exitBlock();}
											}
										}finally{egl.exitBlock();}
									}
									catch ( ezert$$33 )
									{
										{
											if (ezert$$33 instanceof egl.egl.debug.DebugTermination){throw ezert$$33;}
											if (!(ezert$$33 instanceof egl.egl.core.AnyException)) {
												ezert$$33 = egl.makeExceptionFromCaughtObject(ezert$$33);
											}
											var ex = ezert$$33;
											try{egl.enterBlock();
												egl.addLocalFunctionVariable("ex", ex, "egl.core.AnyException", "ex");
												try{egl.enterBlock();
													egl.atLine(this.eze$$fileName,249,10390,138, this);
													if ( (egl.checkNull(ex, "ex").messageID == "CRRUI2025E") ) {
														try{egl.enterBlock();
															egl.atLine(this.eze$$fileName,250,10436,38, this);
															egl.checkNull(egl.checkNull(this.columns, "columns")[this.columns.checkIndex((column)-1)], "columns[column]").enableSorting = false;
														}finally{egl.exitBlock();}
													}
													else {
														try{egl.enterBlock();
															egl.atLine(this.eze$$fileName,252,10503,10, this);
															throw ex;
														}finally{egl.exitBlock();}
													}
												}finally{egl.exitBlock();}
											}finally{egl.exitBlock();}
										}
									}
								}finally{egl.exitBlock();}
								egl.atLine(this.eze$$fileName,245,10242,318, this);
							}
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,258,10582,17, this);
			var ezert$$34 = 0;
			ezert$$34 = this.columns.getSize();
			egl.atLine(this.eze$$fileName,258,10579,257, this);
			if ( (ezert$$34 > 0) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,259,10631,17, this);
					var ezert$$35 = 0;
					ezert$$35 = this.columns.getSize();
					egl.atLine(this.eze$$fileName,259,10612,38, this);
					this.columnClass.resize( this.columns.getSize() );
					egl.atLine(this.eze$$fileName,260,10660,167, this);
					{
						try{egl.enterBlock();
							var column = 0;
							egl.addLocalFunctionVariable("column", column, "int", "column");
							column = 1;
							egl.setLocalFunctionVariable("column", column, "int");
							for ( ; (column <= this.columns.getSize()); column = (column + 1) )
							{
								egl.setLocalFunctionVariable("column", column, "int");
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,261,10759,44, this);
									var ezert$$36 = "";
									ezert$$36 = this.getAlignmentClass(egl.checkNull(egl.checkNull(this.columns, "columns")[this.columns.checkIndex((column)-1)], "columns[column]").alignment );
									egl.atLine(this.eze$$fileName,261,10714,90, this);
									egl.checkNull(this.columnClass, "columnClass")[this.columnClass.checkIndex((column)-1)] = ("EglRuiDataGridCell" + ezert$$36);
								}finally{egl.exitBlock();}
								egl.atLine(this.eze$$fileName,260,10660,167, this);
							}
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,243,10143,702, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"showLoadingDiv": function() {
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
		try { egl.enter("showLoadingDiv",this,arguments,eze$$updater);
			egl.atLine(this.eze$$fileName,270,10991,1035, this);
			try {
				try{egl.enterBlock();
					var uiCount = 0;
					egl.addLocalFunctionVariable("uiCount", uiCount, "int", "uiCount");
					egl.atLine(this.eze$$fileName,271,11022,21, this);
					var ezert$$37 = 0;
					ezert$$37 = egl.checkNull(this.ui, "ui").getChildren().getSize();
					egl.atLine(this.eze$$fileName,271,11008,7, this);
					uiCount = ezert$$37;
					egl.setLocalFunctionVariable("uiCount", uiCount, "int");
					egl.atLine(this.eze$$fileName,272,11068,736, this);
					if ( (uiCount >= 1) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,273,11099,33, this);
							egl.checkNull(this.loadingDiv, "loadingDiv").setPosition("absolute");
							var rows = null;
							egl.addLocalFunctionVariable("rows", rows, "egl.ui.rui.Widget", "rows");
							var ezert$$38 = null;
							ezert$$38 = egl.checkNull(this.grid, "grid").getElementById((egl.checkNull(this.grid, "grid").getID() + "-rows") );
							egl.atLine(this.eze$$fileName,274,11146,4, this);
							rows = ezert$$38;
							egl.setLocalFunctionVariable("rows", rows, "egl.ui.rui.Widget");
							egl.atLine(this.eze$$fileName,275,11211,194, this);
							if ( (rows != null) ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,276,11242,42, this);
									egl.checkNull(this.innerLoadingDiv, "innerLoadingDiv").setHeight((rows.getPixelHeight()).toString());
									egl.atLine(this.eze$$fileName,277,11299,40, this);
									egl.checkNull(this.innerLoadingDiv, "innerLoadingDiv").setWidth((rows.getPixelWidth()).toString());
									egl.atLine(this.eze$$fileName,278,11354,34, this);
									rows.setChildren( [ this.innerLoadingDiv ] );
								}finally{egl.exitBlock();}
							}
							egl.atLine(this.eze$$fileName,280,11443,39, this);
							var ezert$$39 = 0;
							ezert$$39 = Math.max( egl.convertDecimalToInt(new egl.javascript.BigDecimal(egl.divide(egl.checkNull(this.ui, "ui").getPixelHeight(), 2)).subtract((new egl.javascript.BigDecimal(String(12))))) ,0 );
							egl.atLine(this.eze$$fileName,280,11419,64, this);
							egl.checkNull(this.loadingDiv, "loadingDiv").setPaddingTop(ezert$$39);
							egl.atLine(this.eze$$fileName,281,11510,49, this);
							egl.checkNull(this.loadingDiv, "loadingDiv").setWidth(((egl.checkNull(this.ui, "ui").getChildren()[egl.checkNull(this.ui, "ui").getChildren().checkIndex((1)-1)].getPixelWidth() + 2)).toString());
							egl.atLine(this.eze$$fileName,282,11599,50, this);
							var ezert$$40 = 0;
							ezert$$40 = Math.max( egl.convertDecimalToInt(new egl.javascript.BigDecimal(egl.divide(egl.checkNull(this.ui, "ui").getChildren()[egl.checkNull(this.ui, "ui").getChildren().checkIndex((1)-1)].getPixelWidth(), 2)).subtract((new egl.javascript.BigDecimal(String(20))))) ,0 );
							egl.atLine(this.eze$$fileName,282,11574,76, this);
							egl.checkNull(this.loadingDiv, "loadingDiv").setPaddingLeft(ezert$$40);
							egl.atLine(this.eze$$fileName,283,11673,44, this);
							egl.checkNull(this.loadingDiv, "loadingDiv").setHeight((new egl.javascript.BigDecimal(egl.divide(egl.checkNull(this.ui, "ui").getPixelHeight(), 2)).add((new egl.javascript.BigDecimal(String(12))))).toString());
						}finally{egl.exitBlock();}
					}
					else {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,285,11748,31, this);
							egl.checkNull(this.loadingDiv, "loadingDiv").setPosition("static");
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,287,11816,44, this);
					egl.checkNull(this.loadingDiv, "loadingDiv").setID((egl.checkNull(this.grid, "grid").getID() + "_GridLoadingDiv"));
					egl.atLine(this.eze$$fileName,288,11873,24, this);
					egl.checkNull(this.loadingDiv, "loadingDiv").setX((egl.checkNull(this.ui, "ui").getX() - 1));
					egl.atLine(this.eze$$fileName,289,11910,20, this);
					egl.checkNull(this.loadingDiv, "loadingDiv").setY(egl.checkNull(this.ui, "ui").getY());
					egl.atLine(this.eze$$fileName,290,11951,27, this);
					egl.checkNull(this.ui, "ui").appendChild(this.loadingDiv );
				}finally{egl.exitBlock();}
			}
			catch ( ezert$$41 )
			{
				{
					if (ezert$$41 instanceof egl.egl.debug.DebugTermination){throw ezert$$41;}
					if (!(ezert$$41 instanceof egl.egl.core.AnyException)) {
						ezert$$41 = egl.makeExceptionFromCaughtObject(ezert$$41);
					}
					var e = ezert$$41;
					try{egl.enterBlock();
						egl.addLocalFunctionVariable("e", e, "egl.core.AnyException", "e");
						try{egl.enterBlock();
						}finally{egl.exitBlock();}
					}finally{egl.exitBlock();}
				}
			}
			egl.atLine(this.eze$$fileName,269,10949,1085, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"cancelDataLoader": function() {
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
		try { egl.enter("cancelDataLoader",this,arguments,eze$$updater);
			var loadingDiv = null;
			egl.addLocalFunctionVariable("loadingDiv", loadingDiv, "egl.ui.rui.Widget", "loadingDiv");
			var ezert$$42 = null;
			ezert$$42 = egl.checkNull(this.ui, "ui").getElementById((egl.checkNull(this.grid, "grid").getID() + "_GridLoadingDiv") );
			egl.atLine(this.eze$$fileName,296,12077,10, this);
			loadingDiv = ezert$$42;
			egl.setLocalFunctionVariable("loadingDiv", loadingDiv, "egl.ui.rui.Widget");
			egl.atLine(this.eze$$fileName,297,12150,230, this);
			if ( (loadingDiv != null) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,298,12180,27, this);
					this.showLoadingDivJob.cancel();
					egl.atLine(this.eze$$fileName,299,12214,25, this);
					this._startRow = this.lastStartRow;
					egl.atLine(this.eze$$fileName,300,12246,103, this);
					if ( (this.showScrollbar || (this._startRow < 1)) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,301,12290,14, this);
							this._startRow = 1;
							egl.atLine(this.eze$$fileName,302,12312,12, this);
							this.setData([  ].setType( "A;" ) );
							egl.atLine(this.eze$$fileName,303,12332,7, this);
							{ if (!egl.debugg) egl.leave(); return;}
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,305,12362,9, this);
					this.render();
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,295,12044,344, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"renderHeaderCells": function() {
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
		try { egl.enter("renderHeaderCells",this,arguments,eze$$updater);
			egl.atLine(this.eze$$fileName,312,12497,47, this);
			if ( !(this.showHeader) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,313,12525,7, this);
					{ if (!egl.debugg) egl.leave(); return;}
				}finally{egl.exitBlock();}
			}
			var html = "";
			egl.addLocalFunctionVariable("html", html, "string", "html");
			egl.atLine(this.eze$$fileName,315,12553,4, this);
			html = "";
			egl.setLocalFunctionVariable("html", html, "string");
			var columnCount = 0;
			egl.addLocalFunctionVariable("columnCount", columnCount, "int", "columnCount");
			egl.atLine(this.eze$$fileName,316,12597,17, this);
			var ezert$$43 = 0;
			ezert$$43 = this.columns.getSize();
			egl.atLine(this.eze$$fileName,316,12579,11, this);
			columnCount = ezert$$43;
			egl.setLocalFunctionVariable("columnCount", columnCount, "int");
			var totalWidth = 0;
			egl.addLocalFunctionVariable("totalWidth", totalWidth, "int", "totalWidth");
			egl.atLine(this.eze$$fileName,317,12624,10, this);
			totalWidth = 0;
			egl.setLocalFunctionVariable("totalWidth", totalWidth, "int");
			egl.atLine(this.eze$$fileName,318,12652,563, this);
			if ( this.showCheckBoxes ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,319,12683,59, this);
					totalWidth = (totalWidth + ((this.checkBoxWidth + (2 * this.cellPadding)) + this.cellBorder));
					egl.setLocalFunctionVariable("totalWidth", totalWidth, "int");
					egl.atLine(this.eze$$fileName,320,12755,135, this);
					html = (html + (("<span class='EglRuiDataGridHeaderCell EglRuiDataGridCheckBox' id=" + egl.checkNull(this.grid, "grid").getID()) + "-header-checkbox style='"));
					egl.setLocalFunctionVariable("html", html, "string");
					egl.atLine(this.eze$$fileName,322,12907,25, this);
					var ezert$$44 = "";
					ezert$$44 = egl.checkNull(this.ui, "ui").getWidgetOrientation();
					egl.atLine(this.eze$$fileName,322,12903,94, this);
					if ( (ezert$$44 == "RTL") ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,323,12956,25, this);
							html = (html + "float: right; ");
							egl.setLocalFunctionVariable("html", html, "string");
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,325,13018,185, this);
					html = (html + (((((("padding:" + (this.cellPadding).toString()) + "px; width:") + (this.checkBoxWidth).toString()) + "px; border-width: 1px ") + (this.cellBorder).toString()) + "px 0 0'>&nbsp;</span>"));
					egl.setLocalFunctionVariable("html", html, "string");
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,330,13224,1609, this);
			{
				try{egl.enterBlock();
					var column = 0;
					egl.addLocalFunctionVariable("column", column, "int", "column");
					column = 1;
					egl.setLocalFunctionVariable("column", column, "int");
					for ( ; (column <= columnCount); column = (column + 1) )
					{
						egl.setLocalFunctionVariable("column", column, "int");
						try{egl.enterBlock();
							var c = null;
							egl.addLocalFunctionVariable("c", c, "com.ibm.egl.rui.widgets.DataGridColumn", "c");
							egl.atLine(this.eze$$fileName,331,13274,1, this);
							c = egl.checkNull(this.columns, "columns")[this.columns.checkIndex((column)-1)];
							egl.setLocalFunctionVariable("c", c, "com.ibm.egl.rui.widgets.DataGridColumn");
							var value = "";
							egl.addLocalFunctionVariable("value", value, "string", "value");
							egl.atLine(this.eze$$fileName,333,13348,110, this);
							if ( (egl.checkNull(c, "c").displayName == null) ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,334,13387,15, this);
									value = egl.checkNull(c, "c").name;
									egl.setLocalFunctionVariable("value", value, "string");
								}finally{egl.exitBlock();}
							}
							else {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,335,13420,22, this);
									value = (function(x){ return x !== null ? ((x).toString()) : ""; })(egl.checkNull(c, "c").displayName);
									egl.setLocalFunctionVariable("value", value, "string");
								}finally{egl.exitBlock();}
							}
							egl.atLine(this.eze$$fileName,337,13471,297, this);
							if ( ((this.textLayoutThis == "Visual") || (this.reverseTextDirectionThis == "Yes")) ) {
								try{egl.enterBlock();
									var isVisual = false;
									egl.addLocalFunctionVariable("isVisual", isVisual, "boolean", "isVisual");
									egl.atLine(this.eze$$fileName,338,13562,8, this);
									isVisual = (this.textLayoutThis == "Visual");
									egl.setLocalFunctionVariable("isVisual", isVisual, "boolean");
									var isReverseDirection = false;
									egl.addLocalFunctionVariable("isReverseDirection", isReverseDirection, "boolean", "isReverseDirection");
									egl.atLine(this.eze$$fileName,339,13618,18, this);
									isReverseDirection = (this.reverseTextDirectionThis == "Yes");
									egl.setLocalFunctionVariable("isReverseDirection", isReverseDirection, "boolean");
									egl.atLine(this.eze$$fileName,340,13701,59, this);
									var ezert$$45 = "";
									ezert$$45 = this.util.setBiDiMarkersStr(value, isVisual, isReverseDirection );
									egl.atLine(this.eze$$fileName,340,13693,68, this);
									value = ezert$$45;
									egl.setLocalFunctionVariable("value", value, "string");
								}finally{egl.exitBlock();}
							}
							egl.atLine(this.eze$$fileName,342,13781,106, this);
							if ( ((egl.checkNull(c, "c").width == "") || (egl.convertStringToFloat(egl.checkNull(c, "c").width) == 0)) ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,343,13846,24, this);
									var ezert$$46 = 0;
									ezert$$46 = this.util.getTextWidth(value );
									egl.atLine(this.eze$$fileName,343,13831,40, this);
									egl.checkNull(c, "c").width = ((44 + ezert$$46)).toString();
								}finally{egl.exitBlock();}
							}
							egl.atLine(this.eze$$fileName,345,13900,53, this);
							totalWidth = (totalWidth + ((this.cellBorder + egl.convertStringToInt(egl.checkNull(c, "c").width)) + (2 * this.cellPadding)));
							egl.setLocalFunctionVariable("totalWidth", totalWidth, "int");
							var ezekw$$class = "";
							egl.addLocalFunctionVariable("class", ezekw$$class, "string", "ezekw$$class");
							egl.atLine(this.eze$$fileName,346,13981,36, this);
							var ezert$$47 = "";
							ezert$$47 = this.getAlignmentClass(egl.checkNull(c, "c").headerAlignment );
							egl.atLine(this.eze$$fileName,346,13966,5, this);
							ezekw$$class = ezert$$47;
							egl.setLocalFunctionVariable("class", ezekw$$class, "string");
							var w = 0;
							egl.addLocalFunctionVariable("w", w, "int", "w");
							egl.atLine(this.eze$$fileName,348,14054,1, this);
							w = egl.convertStringToInt(egl.checkNull(c, "c").width);
							egl.setLocalFunctionVariable("w", w, "int");
							egl.atLine(this.eze$$fileName,349,14083,138, this);
							html = (html + (((((("<span id=" + egl.checkNull(this.grid, "grid").getID()) + "-header-") + (column).toString()) + " class=EglRuiDataGridHeaderCell column=") + (column).toString()) + " style='"));
							egl.setLocalFunctionVariable("html", html, "string");
							egl.atLine(this.eze$$fileName,351,14238,25, this);
							var ezert$$48 = "";
							ezert$$48 = egl.checkNull(this.ui, "ui").getWidgetOrientation();
							egl.atLine(this.eze$$fileName,351,14234,94, this);
							if ( (ezert$$48 == "RTL") ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,352,14287,25, this);
									html = (html + "float: right; ");
									egl.setLocalFunctionVariable("html", html, "string");
								}finally{egl.exitBlock();}
							}
							egl.atLine(this.eze$$fileName,357,14501,36, this);
							var ezert$$49 = "";
							ezert$$49 = this.getAlignmentClass(egl.checkNull(c, "c").headerAlignment );
							egl.atLine(this.eze$$fileName,355,14354,467, this);
							html = (html + ((((((((((((("width:" + ((w + (2 * this.cellPadding))).toString()) + "px; border-width: 1px ") + (this.cellBorder).toString()) + "px 0 0'><span class=") + ezert$$49) + " style='padding:") + (this.cellPadding).toString()) + "px'>") + "<span class=EglRuiDataGridHeaderLabel>") + value) + "</span></span><span class=EglRuiDataGridSort") + egl.checkNull(this.Directions, "Directions")[this.Directions.checkIndex(((egl.checkNull(c, "c").sortDirection + 1))-1)]) + ">&nbsp;&nbsp;&nbsp;&nbsp;</span></span>"));
							egl.setLocalFunctionVariable("html", html, "string");
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,330,13224,1609, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,362,14842,17, this);
			html = (html + "</div>");
			egl.setLocalFunctionVariable("html", html, "string");
			egl.atLine(this.eze$$fileName,363,14868,317, this);
			html = (((((((((("<div id=" + egl.checkNull(this.grid, "grid").getID()) + "-header class=EglRuiDataGridHeaderRow style='width:") + (totalWidth).toString()) + "px'><div id=") + egl.checkNull(this.grid, "grid").getID()) + "-header-inner class=EglRuiDataGridHeaderRowInner style='width:") + ((totalWidth + (columnCount * 8))).toString()) + "px'>") + html) + "</div>");
			egl.setLocalFunctionVariable("html", html, "string");
			egl.atLine(this.eze$$fileName,368,15188,42, this);
			egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString(html );
			egl.atLine(this.eze$$fileName,311,12452,2786, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getAlignmentClass": function( alignment ) {
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
		try { egl.enter("getAlignmentClass",this,arguments,eze$$updater);
			var $result = "";
			egl.addLocalFunctionVariable("alignment", alignment, "int", "alignment");
			egl.atLine(this.eze$$fileName,372,15321,312, this);
			switch( alignment ) {
				case 0:
					egl.atLine(this.eze$$fileName,373,15349,80, this);
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,374,15394,35, this);
						$result = " EglRuiDataGridAlignLeft";
						egl.setLocalFunctionVariable("STRING", $result, "string");
						{ if (!egl.debugg) egl.leave(); return $result;}
					}finally{egl.exitBlock();}
					break;
				case 1:
					egl.atLine(this.eze$$fileName,375,15442,84, this);
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,376,15489,37, this);
						$result = " EglRuiDataGridAlignCenter";
						egl.setLocalFunctionVariable("STRING", $result, "string");
						{ if (!egl.debugg) egl.leave(); return $result;}
					}finally{egl.exitBlock();}
					break;
				case 2:
					egl.atLine(this.eze$$fileName,377,15539,82, this);
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,378,15585,36, this);
						$result = " EglRuiDataGridAlignRight";
						egl.setLocalFunctionVariable("STRING", $result, "string");
						{ if (!egl.debugg) egl.leave(); return $result;}
					}finally{egl.exitBlock();}
					break;
				default:
				try{egl.enterBlock();
				}finally{egl.exitBlock();}
				break;
			}
			egl.atLine(this.eze$$fileName,371,15244,397, this);
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"renderRows": function() {
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
		try { egl.enter("renderRows",this,arguments,eze$$updater);
			var columnCount = 0;
			egl.addLocalFunctionVariable("columnCount", columnCount, "int", "columnCount");
			egl.atLine(this.eze$$fileName,383,15703,17, this);
			var ezert$$50 = 0;
			ezert$$50 = this.columns.getSize();
			egl.atLine(this.eze$$fileName,383,15685,11, this);
			columnCount = ezert$$50;
			egl.setLocalFunctionVariable("columnCount", columnCount, "int");
			var page = 0;
			egl.addLocalFunctionVariable("page", page, "int", "page");
			egl.atLine(this.eze$$fileName,384,15730,4, this);
			page = egl.convertDecimalToInt(new egl.javascript.BigDecimal(egl.divide((this._startRow - 1), this.pageSize)),egl.createRuntimeException);
			egl.setLocalFunctionVariable("page", page, "int");
			egl.atLine(this.eze$$fileName,385,15775,28, this);
			this._startRow = ((page * this.pageSize) + 1);
			var endRow = 0;
			egl.addLocalFunctionVariable("endRow", endRow, "int", "endRow");
			egl.atLine(this.eze$$fileName,386,15825,14, this);
			var ezert$$51 = 0;
			ezert$$51 = this.data.getSize();
			egl.atLine(this.eze$$fileName,386,15812,6, this);
			endRow = ezert$$51;
			egl.setLocalFunctionVariable("endRow", endRow, "int");
			egl.atLine(this.eze$$fileName,387,15849,334, this);
			if ( this.showScrollbar ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,388,15876,25, this);
					this.lastStartRow = this._startRow;
					egl.atLine(this.eze$$fileName,389,15911,14, this);
					this._startRow = 1;
					egl.atLine(this.eze$$fileName,390,15938,102, this);
					egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString((("<div class=EglRuiDataGridScroller id=" + egl.checkNull(this.grid, "grid").getID()) + "-scroller>") );
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,392,16066,105, this);
					if ( (this.pageSize != 0) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,393,16109,45, this);
							var ezert$$52 = 0;
							ezert$$52 = Math.min( endRow ,((this._startRow + this.pageSize) - 1) );
							egl.atLine(this.eze$$fileName,393,16100,55, this);
							endRow = ezert$$52;
							egl.setLocalFunctionVariable("endRow", endRow, "int");
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,396,16192,94, this);
			egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString((("<div class=EglRuiDataGridRows id=" + egl.checkNull(this.grid, "grid").getID()) + "-rows>") );
			var h = "";
			egl.addLocalFunctionVariable("h", h, "string", "h");
			egl.atLine(this.eze$$fileName,397,16295,1, this);
			h = " ";
			egl.setLocalFunctionVariable("h", h, "string");
			egl.atLine(this.eze$$fileName,398,16319,115, this);
			if ( (this.rowHeight > 0) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,399,16349,73, this);
					h = (("overflow-y: hidden; height:" + ((this.rowHeight + (2 * this.cellPadding))).toString()) + "px;");
					egl.setLocalFunctionVariable("h", h, "string");
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,401,16443,1558, this);
			{
				try{egl.enterBlock();
					var row = 0;
					egl.addLocalFunctionVariable("row", row, "int", "row");
					row = this._startRow;
					egl.setLocalFunctionVariable("row", row, "int");
					for ( ; (row <= endRow); row = (row + 1) )
					{
						egl.setLocalFunctionVariable("row", row, "int");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,402,16545,16, this);
							var ezert$$53 = "";
							ezert$$53 = this.getRowClass(row );
							egl.atLine(this.eze$$fileName,402,16493,165, this);
							egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString((((((((((("<div class=" + ezert$$53) + " row=") + (row).toString()) + " id=") + egl.checkNull(this.grid, "grid").getID()) + "-row-") + (row).toString()) + " style='") + h) + "'>") );
							egl.atLine(this.eze$$fileName,404,16671,1047, this);
							if ( this.showCheckBoxes ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,405,16706,103, this);
									egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString("<span class='EglRuiDataGridCell EglRuiDataGridCheckBox' style='" );
									egl.atLine(this.eze$$fileName,406,16830,25, this);
									var ezert$$54 = "";
									ezert$$54 = egl.checkNull(this.ui, "ui").getWidgetOrientation();
									egl.atLine(this.eze$$fileName,406,16826,126, this);
									if ( (ezert$$54 == "RTL") ) {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,407,16881,54, this);
											egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString("float: right; " );
										}finally{egl.exitBlock();}
									}
									egl.atLine(this.eze$$fileName,409,16969,733, this);
									egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString((((((((((((((((((((((((h + "padding:") + ((this.cellPadding - 1)).toString()) + "px ") + (this.cellPadding).toString()) + "px ") + ((this.cellPadding + 5000)).toString()) + "px ") + (this.cellPadding).toString()) + "px; margin-bottom:") + (((0 - this.cellPadding) - 5000)).toString()) + "px; width:") + (this.checkBoxWidth).toString()) + "px; border-width: 0 ") + (this.cellBorder).toString()) + "px 0 0''><input id=") + egl.checkNull(this.grid, "grid").getID()) + "-checkbox-") + (row).toString()) + " type=checkbox row=") + (row).toString()) + " onclick='egl.com.ibm.egl.rui.widgets.DataGridUtil.dataGridCheckboxClick(\"") + this.internalID) + "\", this)'></input></span>") );
								}finally{egl.exitBlock();}
							}
							egl.atLine(this.eze$$fileName,419,17731,199, this);
							{
								try{egl.enterBlock();
									var column = 0;
									egl.addLocalFunctionVariable("column", column, "int", "column");
									column = 1;
									egl.setLocalFunctionVariable("column", column, "int");
									for ( ; (column <= columnCount); column = (column + 1) )
									{
										egl.setLocalFunctionVariable("column", column, "int");
										try{egl.enterBlock();
											var c = null;
											egl.addLocalFunctionVariable("c", c, "com.ibm.egl.rui.widgets.DataGridColumn", "c");
											egl.atLine(this.eze$$fileName,420,17785,1, this);
											c = egl.checkNull(this.columns, "columns")[this.columns.checkIndex((column)-1)];
											egl.setLocalFunctionVariable("c", c, "com.ibm.egl.rui.widgets.DataGridColumn");
											egl.atLine(this.eze$$fileName,421,17861,25, this);
											var ezert$$55 = "";
											ezert$$55 = this.getCellValue(row, egl.checkNull(c, "c").name );
											egl.atLine(this.eze$$fileName,421,17837,77, this);
											this.renderCell(row, column, ezert$$55, c, function(eze$$inout$c) {
												c = eze$$inout$c;
												egl.setLocalFunctionVariable("c", c, "com.ibm.egl.rui.widgets.DataGridColumn");
											}, (column == columnCount), this );
											egl.setLocalFunctionVariable("c", c, "com.ibm.egl.rui.widgets.DataGridColumn");
										}finally{egl.exitBlock();}
										egl.atLine(this.eze$$fileName,419,17731,199, this);
									}
								}finally{egl.exitBlock();}
							}
							egl.atLine(this.eze$$fileName,423,17943,46, this);
							egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString("</div>" );
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,401,16443,1558, this);
					}
				}finally{egl.exitBlock();}
			}
			var eze_Cond_Temp_3 = false;
			egl.atLine(this.eze$$fileName,425,18014,43, this);
			if ( !(this.showScrollbar) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,425,18032,14, this);
					var ezert$$56 = 0;
					ezert$$56 = this.data.getSize();
					egl.atLine(this.eze$$fileName,425,18014,43, this);
					if ( (ezert$$56 > this.pageSize) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,425,18014,43, this);
							eze_Cond_Temp_3 = true;
						}finally{egl.exitBlock();}
					}
					else {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,425,18014,43, this);
							eze_Cond_Temp_3 = false;
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,425,18014,43, this);
					eze_Cond_Temp_3 = false;
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,425,18010,1201, this);
			if ( (eze_Cond_Temp_3 || (endRow == 0)) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,426,18088,1111, this);
					{
						try{egl.enterBlock();
							var row = 0;
							egl.addLocalFunctionVariable("row", row, "int", "row");
							row = (endRow + 1);
							egl.setLocalFunctionVariable("row", row, "int");
							for ( ; (row <= ((this._startRow + this.pageSize) - 1)); row = (row + 1) )
							{
								egl.setLocalFunctionVariable("row", row, "int");
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,427,18213,16, this);
									var ezert$$57 = "";
									ezert$$57 = this.getRowClass(row );
									egl.atLine(this.eze$$fileName,427,18161,76, this);
									egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString((("<div class=" + ezert$$57) + ">") );
									egl.atLine(this.eze$$fileName,428,18254,662, this);
									if ( this.showCheckBoxes ) {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,429,18293,103, this);
											egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString("<span class='EglRuiDataGridCell EglRuiDataGridCheckBox' style='" );
											egl.atLine(this.eze$$fileName,430,18421,25, this);
											var ezert$$58 = "";
											ezert$$58 = egl.checkNull(this.ui, "ui").getWidgetOrientation();
											egl.atLine(this.eze$$fileName,430,18417,127, this);
											if ( (ezert$$58 == "RTL") ) {
												try{egl.enterBlock();
													egl.atLine(this.eze$$fileName,431,18472,54, this);
													egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString("float: right; " );
												}finally{egl.exitBlock();}
											}
											;
											egl.atLine(this.eze$$fileName,433,18560,336, this);
											egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString((((((((((("padding:" + (this.cellPadding).toString()) + "px; padding-bottom:") + ((this.cellPadding + 5000)).toString()) + "px; margin-bottom:") + (((0 - this.cellPadding) - 5000)).toString()) + "px; width:") + (this.checkBoxWidth).toString()) + "px; border-width: 0 ") + (this.cellBorder).toString()) + "px 0 0'></span>") );
										}finally{egl.exitBlock();}
									}
									egl.atLine(this.eze$$fileName,440,18933,187, this);
									{
										try{egl.enterBlock();
											var column = 0;
											egl.addLocalFunctionVariable("column", column, "int", "column");
											column = 1;
											egl.setLocalFunctionVariable("column", column, "int");
											for ( ; (column <= columnCount); column = (column + 1) )
											{
												egl.setLocalFunctionVariable("column", column, "int");
												try{egl.enterBlock();
													var c = null;
													egl.addLocalFunctionVariable("c", c, "com.ibm.egl.rui.widgets.DataGridColumn", "c");
													egl.atLine(this.eze$$fileName,441,18991,1, this);
													c = egl.checkNull(this.columns, "columns")[this.columns.checkIndex((column)-1)];
													egl.setLocalFunctionVariable("c", c, "com.ibm.egl.rui.widgets.DataGridColumn");
													egl.atLine(this.eze$$fileName,442,19047,53, this);
													this.renderCell((-1), column, "", c, function(eze$$inout$c) {
														c = eze$$inout$c;
														egl.setLocalFunctionVariable("c", c, "com.ibm.egl.rui.widgets.DataGridColumn");
													}, (column == columnCount), this );
													egl.setLocalFunctionVariable("c", c, "com.ibm.egl.rui.widgets.DataGridColumn");
												}finally{egl.exitBlock();}
												egl.atLine(this.eze$$fileName,440,18933,187, this);
											}
										}finally{egl.exitBlock();}
									}
									egl.atLine(this.eze$$fileName,444,19137,46, this);
									egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString("</div>" );
								}finally{egl.exitBlock();}
								egl.atLine(this.eze$$fileName,426,18088,1111, this);
							}
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,447,19220,46, this);
			egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString("</div>" );
			egl.atLine(this.eze$$fileName,448,19275,88, this);
			if ( this.showScrollbar ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,449,19305,46, this);
					egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString("</div>" );
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,382,15647,3724, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getRowClass": function( row ) {
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
		try { egl.enter("getRowClass",this,arguments,eze$$updater);
			var $result = "";
			egl.addLocalFunctionVariable("row", row, "int", "row");
			egl.atLine(this.eze$$fileName,454,19434,130, this);
			if ( (egl.remainder(row, 2) == 0) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,455,19463,32, this);
					$result = "EglRuiDataGridEvenRow";
					egl.setLocalFunctionVariable("STRING", $result, "string");
					{ if (!egl.debugg) egl.leave(); return $result;}
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,457,19521,31, this);
					$result = "EglRuiDataGridOddRow";
					egl.setLocalFunctionVariable("STRING", $result, "string");
					{ if (!egl.debugg) egl.leave(); return $result;}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,453,19377,195, this);
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getCellValue": function( row, fieldName ) {
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
		try { egl.enter("getCellValue",this,arguments,eze$$updater);
			var $result = "";
			egl.addLocalFunctionVariable("row", row, "int", "row");
			egl.addLocalFunctionVariable("fieldName", fieldName, "string", "fieldName");
			var object = null;
			egl.addLocalFunctionVariable("object", object, "any", "object");
			egl.atLine(this.eze$$fileName,462,19665,6, this);
			object = egl.boxAny(egl.checkNull(this.data, "data")[this.data.checkIndex((row)-1)]);
			egl.setLocalFunctionVariable("object", object, "any");
			egl.atLine(this.eze$$fileName,463,19697,54, this);
			if ( (object == null) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,464,19728,11, this);
					$result = "";
					egl.setLocalFunctionVariable("STRING", $result, "string");
					{ if (!egl.debugg) egl.leave(); return $result;}
				}finally{egl.exitBlock();}
			}
			var cell = null;
			egl.addLocalFunctionVariable("cell", cell, "any", "cell");
			egl.atLine(this.eze$$fileName,467,19778,201, this);
			try {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,468,19791,25, this);
					cell = egl.valueByKey(egl.checkNull(object, "object"), fieldName);
					egl.setLocalFunctionVariable("cell", cell, "any");
				}finally{egl.exitBlock();}
			}
			catch ( ezert$$59 )
			{
				{
					if (ezert$$59 instanceof egl.egl.debug.DebugTermination){throw ezert$$59;}
					if (!(ezert$$59 instanceof egl.egl.core.AnyException)) {
						ezert$$59 = egl.makeExceptionFromCaughtObject(ezert$$59);
					}
					var ex = ezert$$59;
					try{egl.enterBlock();
						egl.addLocalFunctionVariable("ex", ex, "egl.core.AnyException", "ex");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,470,19863,104, this);
							if ( (egl.checkNull(ex, "ex").messageID == "CRRUI2025E") ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,471,19907,12, this);
									cell = null;
									egl.setLocalFunctionVariable("cell", cell, "any");
								}finally{egl.exitBlock();}
							}
							else {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,473,19944,10, this);
									throw ex;
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
					}finally{egl.exitBlock();}
				}
			}
			egl.atLine(this.eze$$fileName,476,19988,96, this);
			if ( (cell == null) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,477,20017,11, this);
					$result = "";
					egl.setLocalFunctionVariable("STRING", $result, "string");
					{ if (!egl.debugg) egl.leave(); return $result;}
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,479,20054,18, this);
					$result = ("" + egl.convertAnyToString(cell,false));
					egl.setLocalFunctionVariable("STRING", $result, "string");
					{ if (!egl.debugg) egl.leave(); return $result;}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,461,19578,514, this);
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"renderCell": function( row, column, value, c, eze$$c$func_, lastColumn, eze$$caller ) {
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
		try { egl.enter("renderCell",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("row", row, "int", "row");
			egl.addLocalFunctionVariable("column", column, "int", "column");
			egl.addLocalFunctionVariable("value", value, "string", "value");
			egl.addLocalFunctionVariable("c", c, "com.ibm.egl.rui.widgets.DataGridColumn", "c");
			egl.addLocalFunctionVariable("lastColumn", lastColumn, "boolean", "lastColumn");
			var ezekw$$class = "";
			egl.addLocalFunctionVariable("class", ezekw$$class, "string", "ezekw$$class");
			egl.atLine(this.eze$$fileName,484,20227,5, this);
			ezekw$$class = egl.checkNull(this.columnClass, "columnClass")[this.columnClass.checkIndex((column)-1)];
			egl.setLocalFunctionVariable("class", ezekw$$class, "string");
			egl.atLine(this.eze$$fileName,485,20271,322, this);
			if ( (row > 0) ) {
				try{egl.enterBlock();
					var formatters = null;
					egl.addLocalFunctionVariable("formatters", formatters, "com.ibm.egl.rui.widgets.CellFormatter[]", "!formatters");
					egl.atLine(this.eze$$fileName,486,20301,10, this);
					formatters = egl.checkNull(c, "c").formatters;
					egl.setLocalFunctionVariable("formatters", formatters, "com.ibm.egl.rui.widgets.CellFormatter[]");
					egl.atLine(this.eze$$fileName,487,20362,222, this);
					if ( (formatters != null) ) {
						try{egl.enterBlock();
							var formatterCount = 0;
							egl.addLocalFunctionVariable("formatterCount", formatterCount, "int", "formatterCount");
							egl.atLine(this.eze$$fileName,488,20419,20, this);
							var ezert$$60 = 0;
							ezert$$60 = formatters.getSize();
							egl.atLine(this.eze$$fileName,488,20398,14, this);
							formatterCount = ezert$$60;
							egl.setLocalFunctionVariable("formatterCount", formatterCount, "int");
							egl.atLine(this.eze$$fileName,489,20466,105, this);
							{
								try{egl.enterBlock();
									var k = 0;
									egl.addLocalFunctionVariable("k", k, "int", "k");
									k = 1;
									egl.setLocalFunctionVariable("k", k, "int");
									for ( ; (k <= formatterCount); k = (k + 1) )
									{
										egl.setLocalFunctionVariable("k", k, "int");
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,490,20515,39, this);
											egl.checkNull(formatters, "formatters")[formatters.checkIndex((k)-1)](ezekw$$class, function(eze$$inout$class) {
												ezekw$$class = eze$$inout$class;
												egl.setLocalFunctionVariable("class", ezekw$$class, "string");
											}, value, function(eze$$inout$value) {
												value = eze$$inout$value;
												egl.setLocalFunctionVariable("value", value, "string");
											}, egl.boxAny(egl.checkNull(this.data, "data")[this.data.checkIndex((row)-1)]), this );
											egl.setLocalFunctionVariable("class", ezekw$$class, "string");
											egl.setLocalFunctionVariable("value", value, "string");
										}finally{egl.exitBlock();}
										egl.atLine(this.eze$$fileName,489,20466,105, this);
									}
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
			}
			var w = 0;
			egl.addLocalFunctionVariable("w", w, "int", "w");
			egl.atLine(this.eze$$fileName,494,20602,1, this);
			w = egl.convertStringToInt(egl.checkNull(c, "c").width);
			egl.setLocalFunctionVariable("w", w, "int");
			var h = "";
			egl.addLocalFunctionVariable("h", h, "string", "h");
			egl.atLine(this.eze$$fileName,495,20627,1, this);
			h = " ";
			egl.setLocalFunctionVariable("h", h, "string");
			egl.atLine(this.eze$$fileName,496,20651,95, this);
			if ( (this.rowHeight > 0) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,497,20681,53, this);
					h = (("height:" + ((this.rowHeight + (2 * this.cellPadding))).toString()) + "px;");
					egl.setLocalFunctionVariable("h", h, "string");
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,499,20755,199, this);
			egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString((((((((((((("<div id=" + egl.checkNull(this.grid, "grid").getID()) + "-cell-") + (row).toString()) + "-") + (column).toString()) + " class='") + ezekw$$class) + "' row='") + (row).toString()) + "' column='") + (column).toString()) + "' style='") );
			egl.atLine(this.eze$$fileName,502,20967,25, this);
			var ezert$$61 = "";
			ezert$$61 = egl.checkNull(this.ui, "ui").getWidgetOrientation();
			egl.atLine(this.eze$$fileName,502,20963,119, this);
			if ( (ezert$$61 == "RTL") ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,503,21016,54, this);
					egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString("float: right; " );
				}finally{egl.exitBlock();}
			}
			var cb = 0;
			egl.addLocalFunctionVariable("cb", cb, "int", "cb");
			egl.atLine(this.eze$$fileName,505,21091,2, this);
			cb = this.cellBorder;
			egl.setLocalFunctionVariable("cb", cb, "int");
			egl.atLine(this.eze$$fileName,506,21120,32, this);
			if ( lastColumn ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,507,21139,7, this);
					cb = 0;
					egl.setLocalFunctionVariable("cb", cb, "int");
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,509,21155,50, this);
			if ( (this.showScrollbar && lastColumn) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,510,21191,8, this);
					w = (w - 17);
					egl.setLocalFunctionVariable("w", w, "int");
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,512,21208,296, this);
			if ( ((this.textLayoutThis == "Visual") || (this.reverseTextDirectionThis == "Yes")) ) {
				try{egl.enterBlock();
					var isVisual = false;
					egl.addLocalFunctionVariable("isVisual", isVisual, "boolean", "isVisual");
					egl.atLine(this.eze$$fileName,513,21299,8, this);
					isVisual = (this.textLayoutThis == "Visual");
					egl.setLocalFunctionVariable("isVisual", isVisual, "boolean");
					var isReverseDirection = false;
					egl.addLocalFunctionVariable("isReverseDirection", isReverseDirection, "boolean", "isReverseDirection");
					egl.atLine(this.eze$$fileName,514,21355,18, this);
					isReverseDirection = (this.reverseTextDirectionThis == "Yes");
					egl.setLocalFunctionVariable("isReverseDirection", isReverseDirection, "boolean");
					egl.atLine(this.eze$$fileName,515,21438,59, this);
					var ezert$$62 = "";
					ezert$$62 = this.util.setBiDiMarkersStr(value, isVisual, isReverseDirection );
					egl.atLine(this.eze$$fileName,515,21430,68, this);
					value = ezert$$62;
					egl.setLocalFunctionVariable("value", value, "string");
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,517,21513,296, this);
			egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString((((((((((((((("width:" + (w).toString()) + "px; ") + h) + "padding:") + (this.cellPadding).toString()) + "px; padding-bottom:") + ((this.cellPadding + 5000)).toString()) + "px; margin-bottom:") + (((0 - this.cellPadding) - 5000)).toString()) + "px; border-width: 0 ") + (cb).toString()) + "px 0 0'>") + value) + "</div>") );
			egl.atLine(this.eze$$fileName,483,20098,1719, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"applyBehaviors": function() {
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
		try { egl.enter("applyBehaviors",this,arguments,eze$$updater);
			var tds = null;
			egl.addLocalFunctionVariable("tds", tds, "egl.ui.rui.Widget[]", "!tds");
			var count = 0;
			egl.addLocalFunctionVariable("count", count, "int", "count");
			var row = 0;
			egl.addLocalFunctionVariable("row", row, "int", "row");
			var column = 0;
			egl.addLocalFunctionVariable("column", column, "int", "column");
			var n = 0;
			egl.addLocalFunctionVariable("n", n, "int", "n");
			egl.atLine(this.eze$$fileName,530,21970,25, this);
			var ezert$$63 = 0;
			ezert$$63 = this.headerBehaviors.getSize();
			egl.atLine(this.eze$$fileName,530,21967,626, this);
			if ( (ezert$$63 > 0) ) {
				try{egl.enterBlock();
					var ezert$$64 = null;
					ezert$$64 = egl.checkNull(this.grid, "grid").getElementsByTagName("span" );
					egl.atLine(this.eze$$fileName,531,22013,40, this);
					tds = ezert$$64;
					egl.setLocalFunctionVariable("tds", tds, "egl.ui.rui.Widget[]");
					egl.atLine(this.eze$$fileName,532,22074,13, this);
					var ezert$$65 = 0;
					ezert$$65 = tds.getSize();
					egl.atLine(this.eze$$fileName,532,22066,22, this);
					count = ezert$$65;
					egl.setLocalFunctionVariable("count", count, "int");
					egl.atLine(this.eze$$fileName,533,22101,480, this);
					n = 1;
					egl.setLocalFunctionVariable("n", n, "int");
					for ( ; (n <= count); n = (n + 1) )
					{
						egl.setLocalFunctionVariable("n", n, "int");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,534,22146,35, this);
							var ezert$$66 = 0;
							ezert$$66 = this.util.getIntAttribute(egl.checkNull(tds, "tds")[tds.checkIndex((n)-1)], "row" );
							egl.atLine(this.eze$$fileName,534,22140,42, this);
							row = ezert$$66;
							egl.setLocalFunctionVariable("row", row, "int");
							egl.atLine(this.eze$$fileName,535,22208,38, this);
							var ezert$$67 = 0;
							ezert$$67 = this.util.getIntAttribute(egl.checkNull(tds, "tds")[tds.checkIndex((n)-1)], "column" );
							egl.atLine(this.eze$$fileName,535,22199,48, this);
							column = ezert$$67;
							egl.setLocalFunctionVariable("column", column, "int");
							egl.atLine(this.eze$$fileName,536,22264,28, this);
							egl.checkNull(tds, "tds")[tds.checkIndex((n)-1)].setLogicalParent(  this );
							egl.atLine(this.eze$$fileName,537,22309,256, this);
							if ( ((row < 1) && (column >= 1)) ) {
								try{egl.enterBlock();
									var len = 0;
									egl.addLocalFunctionVariable("len", len, "int", "len");
									egl.atLine(this.eze$$fileName,538,22366,25, this);
									var ezert$$68 = 0;
									ezert$$68 = this.headerBehaviors.getSize();
									egl.atLine(this.eze$$fileName,538,22356,3, this);
									len = ezert$$68;
									egl.setLocalFunctionVariable("len", len, "int");
									egl.atLine(this.eze$$fileName,539,22413,132, this);
									{
										try{egl.enterBlock();
											var k = 0;
											egl.addLocalFunctionVariable("k", k, "int", "k");
											k = 1;
											egl.setLocalFunctionVariable("k", k, "int");
											for ( ; (k <= len); k = (k + 1) )
											{
												egl.setLocalFunctionVariable("k", k, "int");
												try{egl.enterBlock();
													egl.atLine(this.eze$$fileName,540,22462,59, this);
													egl.checkNull(this.headerBehaviors, "headerBehaviors")[this.headerBehaviors.checkIndex((k)-1)]( this, egl.checkNull(tds, "tds")[tds.checkIndex((n)-1)], null, 0, egl.checkNull(this.columns, "columns")[this.columns.checkIndex((column)-1)] );
												}finally{egl.exitBlock();}
												egl.atLine(this.eze$$fileName,539,22413,132, this);
											}
										}finally{egl.exitBlock();}
									}
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,533,22101,480, this);
					}
				}finally{egl.exitBlock();}
			}
			var eze_Cond_Temp_4 = false;
			egl.atLine(this.eze$$fileName,545,22605,19, this);
			var ezert$$69 = 0;
			ezert$$69 = this.behaviors.getSize();
			egl.atLine(this.eze$$fileName,545,22605,56, this);
			if ( (ezert$$69 > 0) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,545,22605,56, this);
					eze_Cond_Temp_4 = true;
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,545,22632,25, this);
					var ezert$$70 = 0;
					ezert$$70 = this.editorBehaviors.getSize();
					egl.atLine(this.eze$$fileName,545,22605,56, this);
					if ( (ezert$$70 > 0) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,545,22605,56, this);
							eze_Cond_Temp_4 = true;
						}finally{egl.exitBlock();}
					}
					else {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,545,22605,56, this);
							eze_Cond_Temp_4 = false;
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,545,22602,1139, this);
			if ( eze_Cond_Temp_4 ) {
				try{egl.enterBlock();
					var ezert$$71 = null;
					ezert$$71 = egl.checkNull(this.grid, "grid").getElementsByTagName("div" );
					egl.atLine(this.eze$$fileName,546,22675,39, this);
					tds = ezert$$71;
					egl.setLocalFunctionVariable("tds", tds, "egl.ui.rui.Widget[]");
					egl.atLine(this.eze$$fileName,547,22735,13, this);
					var ezert$$72 = 0;
					ezert$$72 = tds.getSize();
					egl.atLine(this.eze$$fileName,547,22727,22, this);
					count = ezert$$72;
					egl.setLocalFunctionVariable("count", count, "int");
					egl.atLine(this.eze$$fileName,548,22762,967, this);
					n = 1;
					egl.setLocalFunctionVariable("n", n, "int");
					for ( ; (n <= count); n = (n + 1) )
					{
						egl.setLocalFunctionVariable("n", n, "int");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,549,22807,35, this);
							var ezert$$73 = 0;
							ezert$$73 = this.util.getIntAttribute(egl.checkNull(tds, "tds")[tds.checkIndex((n)-1)], "row" );
							egl.atLine(this.eze$$fileName,549,22801,42, this);
							row = ezert$$73;
							egl.setLocalFunctionVariable("row", row, "int");
							egl.atLine(this.eze$$fileName,550,22869,38, this);
							var ezert$$74 = 0;
							ezert$$74 = this.util.getIntAttribute(egl.checkNull(tds, "tds")[tds.checkIndex((n)-1)], "column" );
							egl.atLine(this.eze$$fileName,550,22860,48, this);
							column = ezert$$74;
							egl.setLocalFunctionVariable("column", column, "int");
							egl.atLine(this.eze$$fileName,551,22925,28, this);
							egl.checkNull(tds, "tds")[tds.checkIndex((n)-1)].setLogicalParent(  this );
							egl.atLine(this.eze$$fileName,552,22970,743, this);
							if ( ((row > 0) && (column > 0)) ) {
								try{egl.enterBlock();
									var object = null;
									egl.addLocalFunctionVariable("object", object, "any", "object");
									egl.atLine(this.eze$$fileName,553,23016,6, this);
									object = egl.boxAny(egl.checkNull(this.data, "data")[this.data.checkIndex((row)-1)]);
									egl.setLocalFunctionVariable("object", object, "any");
									var len = 0;
									egl.addLocalFunctionVariable("len", len, "int", "len");
									egl.atLine(this.eze$$fileName,554,23070,19, this);
									var ezert$$75 = 0;
									ezert$$75 = this.behaviors.getSize();
									egl.atLine(this.eze$$fileName,554,23060,3, this);
									len = ezert$$75;
									egl.setLocalFunctionVariable("len", len, "int");
									egl.atLine(this.eze$$fileName,555,23111,130, this);
									{
										try{egl.enterBlock();
											var k = 0;
											egl.addLocalFunctionVariable("k", k, "int", "k");
											k = 1;
											egl.setLocalFunctionVariable("k", k, "int");
											for ( ; (k <= len); k = (k + 1) )
											{
												egl.setLocalFunctionVariable("k", k, "int");
												try{egl.enterBlock();
													egl.atLine(this.eze$$fileName,556,23160,57, this);
													egl.checkNull(this.behaviors, "behaviors")[this.behaviors.checkIndex((k)-1)]( this, egl.checkNull(tds, "tds")[tds.checkIndex((n)-1)], object, row, egl.checkNull(this.columns, "columns")[this.columns.checkIndex((column)-1)] );
												}finally{egl.exitBlock();}
												egl.atLine(this.eze$$fileName,555,23111,130, this);
											}
										}finally{egl.exitBlock();}
									}
									egl.atLine(this.eze$$fileName,558,23268,25, this);
									var ezert$$76 = 0;
									ezert$$76 = this.editorBehaviors.getSize();
									egl.atLine(this.eze$$fileName,558,23262,32, this);
									len = ezert$$76;
									egl.setLocalFunctionVariable("len", len, "int");
									egl.atLine(this.eze$$fileName,559,23315,378, this);
									{
										try{egl.enterBlock();
											var k = 0;
											egl.addLocalFunctionVariable("k", k, "int", "k");
											k = 1;
											egl.setLocalFunctionVariable("k", k, "int");
											for ( ; (k <= len); k = (k + 1) )
											{
												egl.setLocalFunctionVariable("k", k, "int");
												try{egl.enterBlock();
													var editor = null;
													egl.addLocalFunctionVariable("editor", editor, "egl.ui.rui.Widget", "editor");
													egl.atLine(this.eze$$fileName,560,23380,162, this);
													var ezert$$77 = null;
													ezert$$77 = egl.checkNull(this.editorBehaviors, "editorBehaviors")[this.editorBehaviors.checkIndex((k)-1)]( this, egl.checkNull(tds, "tds")[tds.checkIndex((n)-1)], egl.boxAny(egl.checkNull(this.data, "data")[this.data.checkIndex((row)-1)]), row, egl.checkNull(this.columns, "columns")[this.columns.checkIndex((column)-1)], {eze$$value : egl.checkNull(tds, "tds")[tds.checkIndex((n)-1)].getInnerText(), eze$$signature : "S;"} );
													egl.atLine(this.eze$$fileName,560,23364,6, this);
													editor = ezert$$77;
													egl.setLocalFunctionVariable("editor", editor, "egl.ui.rui.Widget");
													egl.atLine(this.eze$$fileName,563,23568,101, this);
													if ( (editor != null) ) {
														try{egl.enterBlock();
															egl.atLine(this.eze$$fileName,564,23615,26, this);
															egl.checkNull(tds, "tds")[tds.checkIndex((n)-1)].setChildren( [ editor ] );
														}finally{egl.exitBlock();}
													}
												}finally{egl.exitBlock();}
												egl.atLine(this.eze$$fileName,559,23315,378, this);
											}
										}finally{egl.exitBlock();}
									}
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,548,22762,967, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,523,21823,1926, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"updateDimensions": function() {
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
		try { egl.enter("updateDimensions",this,arguments,eze$$updater);
			var scroller = null;
			egl.addLocalFunctionVariable("scroller", scroller, "egl.ui.rui.Widget", "scroller");
			var ezert$$78 = null;
			ezert$$78 = egl.checkNull(this.grid, "grid").getElementById((egl.checkNull(this.grid, "grid").getID() + "-scroller") );
			egl.atLine(this.eze$$fileName,573,23796,8, this);
			scroller = ezert$$78;
			egl.setLocalFunctionVariable("scroller", scroller, "egl.ui.rui.Widget");
			egl.atLine(this.eze$$fileName,574,23866,1002, this);
			if ( (scroller != null) ) {
				try{egl.enterBlock();
					var lastRow = 0;
					egl.addLocalFunctionVariable("lastRow", lastRow, "int", "lastRow");
					egl.atLine(this.eze$$fileName,575,23899,7, this);
					lastRow = ((this._startRow + this.pageSize) - 1);
					egl.setLocalFunctionVariable("lastRow", lastRow, "int");
					var row = null;
					egl.addLocalFunctionVariable("row", row, "egl.ui.rui.Widget", "row");
					var ezert$$79 = null;
					ezert$$79 = egl.checkNull(this.grid, "grid").getElementById(((egl.checkNull(this.grid, "grid").getID() + "-row-") + (lastRow).toString()) );
					egl.atLine(this.eze$$fileName,576,23951,3, this);
					row = ezert$$79;
					egl.setLocalFunctionVariable("row", row, "egl.ui.rui.Widget");
					egl.atLine(this.eze$$fileName,577,24026,151, this);
					while ( ((row == null) && (lastRow > 0)) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,578,24076,13, this);
							lastRow = (lastRow - 1);
							egl.setLocalFunctionVariable("lastRow", lastRow, "int");
							var ezert$$80 = null;
							ezert$$80 = egl.checkNull(this.grid, "grid").getElementById(((egl.checkNull(this.grid, "grid").getID() + "-row-") + (lastRow).toString()) );
							egl.atLine(this.eze$$fileName,579,24106,55, this);
							row = ezert$$80;
							egl.setLocalFunctionVariable("row", row, "egl.ui.rui.Widget");
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,577,24026,151, this);
					}
					var rowsHeight = 0;
					egl.addLocalFunctionVariable("rowsHeight", rowsHeight, "int", "rowsHeight");
					egl.atLine(this.eze$$fileName,581,24202,10, this);
					rowsHeight = 0;
					egl.setLocalFunctionVariable("rowsHeight", rowsHeight, "int");
					egl.atLine(this.eze$$fileName,582,24246,98, this);
					if ( (row != null) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,583,24278,50, this);
							rowsHeight = ((row.getY() + row.getPixelHeight()) - scroller.getY());
							egl.setLocalFunctionVariable("rowsHeight", rowsHeight, "int");
						}finally{egl.exitBlock();}
					}
					var height = 0;
					egl.addLocalFunctionVariable("height", height, "int", "height");
					var header = null;
					egl.addLocalFunctionVariable("header", header, "egl.ui.rui.Widget", "header");
					var ezert$$81 = null;
					ezert$$81 = egl.checkNull(this.grid, "grid").getElementById((egl.checkNull(this.grid, "grid").getID() + "-header") );
					egl.atLine(this.eze$$fileName,586,24381,6, this);
					header = ezert$$81;
					egl.setLocalFunctionVariable("header", header, "egl.ui.rui.Widget");
					egl.atLine(this.eze$$fileName,587,24451,235, this);
					if ( (header != null) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,588,24486,47, this);
							height = (this.getPixelHeight() - header.getPixelHeight());
							egl.setLocalFunctionVariable("height", height, "int");
							egl.atLine(this.eze$$fileName,589,24550,63, this);
							if ( (height < 0) ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,590,24582,11, this);
									height = 0;
									egl.setLocalFunctionVariable("height", height, "int");
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
					}
					else {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,593,24644,26, this);
							height = this.getPixelHeight();
							egl.setLocalFunctionVariable("height", height, "int");
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,595,24699,157, this);
					if ( ((height < rowsHeight) || (rowsHeight < 0)) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,596,24755,25, this);
							scroller.setHeight( (height).toString() );
						}finally{egl.exitBlock();}
					}
					else {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,598,24811,29, this);
							scroller.setHeight( (rowsHeight).toString() );
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,572,23755,1121, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"enableDragging": function() {
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
		try { egl.enter("enableDragging",this,arguments,eze$$updater);
			var columnCount = 0;
			egl.addLocalFunctionVariable("columnCount", columnCount, "int", "columnCount");
			egl.atLine(this.eze$$fileName,610,25106,17, this);
			var ezert$$82 = 0;
			ezert$$82 = this.columns.getSize();
			egl.atLine(this.eze$$fileName,610,25088,11, this);
			columnCount = ezert$$82;
			egl.setLocalFunctionVariable("columnCount", columnCount, "int");
			var tds = null;
			egl.addLocalFunctionVariable("tds", tds, "egl.ui.rui.Widget[]", "!tds");
			var ezert$$83 = null;
			ezert$$83 = egl.checkNull(this.grid, "grid").getElementsByTagName("span" );
			egl.atLine(this.eze$$fileName,611,25133,3, this);
			tds = ezert$$83;
			egl.setLocalFunctionVariable("tds", tds, "egl.ui.rui.Widget[]");
			var count = 0;
			egl.addLocalFunctionVariable("count", count, "int", "count");
			egl.atLine(this.eze$$fileName,612,25203,13, this);
			var ezert$$84 = 0;
			ezert$$84 = tds.getSize();
			egl.atLine(this.eze$$fileName,612,25191,5, this);
			count = ezert$$84;
			egl.setLocalFunctionVariable("count", count, "int");
			egl.atLine(this.eze$$fileName,613,25226,274, this);
			{
				try{egl.enterBlock();
					var n = 0;
					egl.addLocalFunctionVariable("n", n, "int", "n");
					n = 1;
					egl.setLocalFunctionVariable("n", n, "int");
					for ( ; (n <= count); n = (n + 1) )
					{
						egl.setLocalFunctionVariable("n", n, "int");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,614,25262,224, this);
							if ( egl.like(egl.checkNull(tds, "tds")[tds.checkIndex((n)-1)].getID(), (egl.checkNull(this.grid, "grid").getID() + "-header-%"), "\\") ) {
								try{egl.enterBlock();
									var header = null;
									egl.addLocalFunctionVariable("header", header, "egl.ui.rui.Widget", "header");
									egl.atLine(this.eze$$fileName,615,25315,6, this);
									header = egl.checkNull(tds, "tds")[tds.checkIndex((n)-1)];
									egl.setLocalFunctionVariable("header", header, "egl.ui.rui.Widget");
									egl.atLine(this.eze$$fileName,616,25349,31, this);
									header.setOnStartDrag( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.DataGrid.prototype.startDrag,"startDrag") );
									egl.atLine(this.eze$$fileName,617,25397,27, this);
									header.setOnDrag( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.DataGrid.prototype.dragColumn,"dragColumn") );
									egl.atLine(this.eze$$fileName,618,25441,32, this);
									header.setOnDropOnTarget( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.DataGrid.prototype.endDrag,"endDrag") );
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,613,25226,274, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,609,25046,462, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"startDrag": function( w, startX, startY ) {
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
		try { egl.enter("startDrag",this,arguments,eze$$updater);
			var $result = false;
			egl.addLocalFunctionVariable("w", w, "egl.ui.rui.Widget", "w");
			egl.addLocalFunctionVariable("startX", startX, "int", "startX");
			egl.addLocalFunctionVariable("startY", startY, "int", "startY");
			egl.atLine(this.eze$$fileName,624,25609,13, this);
			$result = true;
			egl.setLocalFunctionVariable("BOOLEAN", $result, "boolean");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"dragColumn": function( w, dropw, dragX, dragY ) {
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
		try { egl.enter("dragColumn",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("w", w, "egl.ui.rui.Widget", "w");
			egl.addLocalFunctionVariable("dropw", dropw, "egl.ui.rui.Widget", "dropw");
			egl.addLocalFunctionVariable("dragX", dragX, "int", "dragX");
			egl.addLocalFunctionVariable("dragY", dragY, "int", "dragY");
			var column = 0;
			egl.addLocalFunctionVariable("column", column, "int", "column");
			egl.atLine(this.eze$$fileName,630,25852,24, this);
			var ezert$$85 = null;
			ezert$$85 = w.getAttribute("column" );
			egl.atLine(this.eze$$fileName,630,25839,6, this);
			column = egl.convertAnyToInt(egl.boxAny(ezert$$85),false);
			egl.setLocalFunctionVariable("column", column, "int");
			var target = 0;
			egl.addLocalFunctionVariable("target", target, "int", "target");
			egl.atLine(this.eze$$fileName,631,25899,22, this);
			var ezert$$86 = 0;
			ezert$$86 = this.getTargetColumn(dragX );
			egl.atLine(this.eze$$fileName,631,25886,6, this);
			target = ezert$$86;
			egl.setLocalFunctionVariable("target", target, "int");
			egl.atLine(this.eze$$fileName,632,25931,30, this);
			egl.checkNull(this.ui, "ui").appendChild(this.columnDragger );
			egl.atLine(this.eze$$fileName,633,25970,36, this);
			egl.checkNull(this.columnDragger, "columnDragger").setPosition("absolute");
			egl.atLine(this.eze$$fileName,634,26015,25, this);
			egl.checkNull(this.columnDragger, "columnDragger").setY(egl.checkNull(this.grid, "grid").getY());
			egl.atLine(this.eze$$fileName,635,26049,24, this);
			egl.checkNull(this.columnDragger, "columnDragger").setWidth((4).toString());
			egl.atLine(this.eze$$fileName,636,26082,40, this);
			egl.checkNull(this.columnDragger, "columnDragger").setHeight((egl.checkNull(this.grid, "grid").getPixelHeight()).toString());
			egl.atLine(this.eze$$fileName,637,26131,29, this);
			egl.checkNull(this.columnDragger, "columnDragger").setVisible(true);
			egl.atLine(this.eze$$fileName,638,26169,235, this);
			try {
				try{egl.enterBlock();
					var header = null;
					egl.addLocalFunctionVariable("header", header, "egl.ui.rui.Widget", "header");
					var ezert$$87 = null;
					ezert$$87 = egl.checkNull(this.grid, "grid").getElementById(((egl.checkNull(this.grid, "grid").getID() + "-header-") + (target).toString()) );
					egl.atLine(this.eze$$fileName,639,26185,6, this);
					header = ezert$$87;
					egl.setLocalFunctionVariable("header", header, "egl.ui.rui.Widget");
					egl.atLine(this.eze$$fileName,640,26265,31, this);
					egl.checkNull(this.columnDragger, "columnDragger").setX((header.getX() - 5));
				}finally{egl.exitBlock();}
			}
			catch ( ezert$$88 )
			{
				{
					if (ezert$$88 instanceof egl.egl.debug.DebugTermination){throw ezert$$88;}
					if (!(ezert$$88 instanceof egl.egl.core.AnyException)) {
						ezert$$88 = egl.makeExceptionFromCaughtObject(ezert$$88);
					}
					var e = ezert$$88;
					try{egl.enterBlock();
						egl.addLocalFunctionVariable("e", e, "egl.core.AnyException", "e");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,642,26345,47, this);
							egl.checkNull(this.columnDragger, "columnDragger").setX(((egl.checkNull(this.grid, "grid").getX() + egl.checkNull(this.grid, "grid").getPixelWidth()) - 5));
						}finally{egl.exitBlock();}
					}finally{egl.exitBlock();}
				}
			}
			egl.atLine(this.eze$$fileName,629,25745,667, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getTargetColumn": function( x ) {
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
		try { egl.enter("getTargetColumn",this,arguments,eze$$updater);
			var $result = 0;
			egl.addLocalFunctionVariable("x", x, "int", "x");
			var columnCount = 0;
			egl.addLocalFunctionVariable("columnCount", columnCount, "int", "columnCount");
			egl.atLine(this.eze$$fileName,647,26500,17, this);
			var ezert$$89 = 0;
			ezert$$89 = this.columns.getSize();
			egl.atLine(this.eze$$fileName,647,26482,11, this);
			columnCount = ezert$$89;
			egl.setLocalFunctionVariable("columnCount", columnCount, "int");
			var dx = 0;
			egl.addLocalFunctionVariable("dx", dx, "int", "dx");
			egl.atLine(this.eze$$fileName,648,26527,2, this);
			dx = egl.checkNull(this.ui, "ui").getX();
			egl.setLocalFunctionVariable("dx", dx, "int");
			egl.atLine(this.eze$$fileName,649,26550,226, this);
			{
				try{egl.enterBlock();
					var column = 0;
					egl.addLocalFunctionVariable("column", column, "int", "column");
					column = 1;
					egl.setLocalFunctionVariable("column", column, "int");
					for ( ; (column <= columnCount); column = (column + 1) )
					{
						egl.setLocalFunctionVariable("column", column, "int");
						try{egl.enterBlock();
							var w = 0;
							egl.addLocalFunctionVariable("w", w, "int", "w");
							egl.atLine(this.eze$$fileName,650,26600,1, this);
							w = ((2 * this.cellPadding) + egl.convertStringToInt(egl.checkNull(egl.checkNull(this.columns, "columns")[this.columns.checkIndex((column)-1)], "columns[column]").width));
							egl.setLocalFunctionVariable("w", w, "int");
							egl.atLine(this.eze$$fileName,651,26661,72, this);
							if ( ((x > dx) && (x < (dx + w))) ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,652,26702,15, this);
									$result = column;
									egl.setLocalFunctionVariable("INT", $result, "int");
									{ if (!egl.debugg) egl.leave(); return $result;}
								}finally{egl.exitBlock();}
							}
							egl.atLine(this.eze$$fileName,654,26756,8, this);
							dx = (dx + w);
							egl.setLocalFunctionVariable("dx", dx, "int");
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,649,26550,226, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,646,26418,366, this);
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"endDrag": function( w, dropw, dragX, dragY ) {
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
		try { egl.enter("endDrag",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("w", w, "egl.ui.rui.Widget", "w");
			egl.addLocalFunctionVariable("dropw", dropw, "egl.ui.rui.Widget", "dropw");
			egl.addLocalFunctionVariable("dragX", dragX, "int", "dragX");
			egl.addLocalFunctionVariable("dragY", dragY, "int", "dragY");
			var column = 0;
			egl.addLocalFunctionVariable("column", column, "int", "column");
			egl.atLine(this.eze$$fileName,659,26894,24, this);
			var ezert$$90 = null;
			ezert$$90 = w.getAttribute("column" );
			egl.atLine(this.eze$$fileName,659,26881,6, this);
			column = egl.convertAnyToInt(egl.boxAny(ezert$$90),false);
			egl.setLocalFunctionVariable("column", column, "int");
			var target = 0;
			egl.addLocalFunctionVariable("target", target, "int", "target");
			egl.atLine(this.eze$$fileName,660,26941,22, this);
			var ezert$$91 = 0;
			ezert$$91 = this.getTargetColumn(dragX );
			egl.atLine(this.eze$$fileName,660,26928,6, this);
			target = ezert$$91;
			egl.setLocalFunctionVariable("target", target, "int");
			var columnCount = 0;
			egl.addLocalFunctionVariable("columnCount", columnCount, "int", "columnCount");
			egl.atLine(this.eze$$fileName,661,26991,17, this);
			var ezert$$92 = 0;
			ezert$$92 = this.columns.getSize();
			egl.atLine(this.eze$$fileName,661,26973,11, this);
			columnCount = ezert$$92;
			egl.setLocalFunctionVariable("columnCount", columnCount, "int");
			egl.atLine(this.eze$$fileName,662,27018,791, this);
			if ( ((target != column) && egl.checkNull(this.columnDragger, "columnDragger").getVisible()) ) {
				try{egl.enterBlock();
					var draggedColumn = null;
					egl.addLocalFunctionVariable("draggedColumn", draggedColumn, "com.ibm.egl.rui.widgets.DataGridColumn", "draggedColumn");
					egl.atLine(this.eze$$fileName,663,27076,13, this);
					draggedColumn = egl.checkNull(this.columns, "columns")[this.columns.checkIndex((column)-1)];
					egl.setLocalFunctionVariable("draggedColumn", draggedColumn, "com.ibm.egl.rui.widgets.DataGridColumn");
					egl.atLine(this.eze$$fileName,664,27136,30, this);
					this.columns.removeElement( column );
					egl.atLine(this.eze$$fileName,665,27179,486, this);
					try {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,666,27199,356, this);
							if ( (target > columnCount) ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,667,27244,37, this);
									this.columns.appendElement( draggedColumn );
								}finally{egl.exitBlock();}
							}
							else {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,669,27323,212, this);
									if ( (target > column) ) {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,670,27367,49, this);
											this.columns.insertElement( draggedColumn, (target - 1) );
										}finally{egl.exitBlock();}
									}
									else {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,672,27466,45, this);
											this.columns.insertElement( draggedColumn, target );
										}finally{egl.exitBlock();}
									}
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
					}
					catch ( ezert$$93 )
					{
						{
							if (ezert$$93 instanceof egl.egl.debug.DebugTermination){throw ezert$$93;}
							if (!(ezert$$93 instanceof egl.egl.core.AnyException)) {
								ezert$$93 = egl.makeExceptionFromCaughtObject(ezert$$93);
							}
							var e = ezert$$93;
							try{egl.enterBlock();
								egl.addLocalFunctionVariable("e", e, "egl.core.AnyException", "e");
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,676,27612,37, this);
									this.columns.appendElement( draggedColumn );
								}finally{egl.exitBlock();}
							}finally{egl.exitBlock();}
						}
					}
					egl.atLine(this.eze$$fileName,678,27678,9, this);
					this.render();
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,680,27710,47, this);
					egl.checkNull(this.columnDragger, "columnDragger").setX(((egl.checkNull(this.grid, "grid").getX() + egl.checkNull(this.grid, "grid").getPixelWidth()) + 5));
					egl.atLine(this.eze$$fileName,681,27767,30, this);
					egl.checkNull(this.columnDragger, "columnDragger").setVisible(false);
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,658,26790,1027, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"renderButtonBar": function() {
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
		try { egl.enter("renderButtonBar",this,arguments,eze$$updater);
			var eze_Cond_Temp_5 = false;
			egl.atLine(this.eze$$fileName,692,28032,100, this);
			if ( ((this.showButtonBar && !(this.showScrollbar)) && (this.pageSize > 0)) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,692,28083,14, this);
					var ezert$$94 = 0;
					ezert$$94 = this.data.getSize();
					egl.atLine(this.eze$$fileName,692,28032,100, this);
					if ( (ezert$$94 > this.pageSize) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,692,28032,100, this);
							eze_Cond_Temp_5 = true;
						}finally{egl.exitBlock();}
					}
					else {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,692,28032,100, this);
							eze_Cond_Temp_5 = false;
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,692,28032,100, this);
					eze_Cond_Temp_5 = false;
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,692,28029,834, this);
			if ( eze_Cond_Temp_5 ) {
				try{egl.enterBlock();
					var pageCount = 0;
					egl.addLocalFunctionVariable("pageCount", pageCount, "int", "pageCount");
					egl.atLine(this.eze$$fileName,694,28162,14, this);
					var ezert$$95 = 0;
					ezert$$95 = this.data.getSize();
					egl.atLine(this.eze$$fileName,694,28146,9, this);
					pageCount = egl.convertDecimalToInt(new egl.javascript.BigDecimal(egl.divide(ezert$$95, this.pageSize)),egl.createRuntimeException);
					egl.setLocalFunctionVariable("pageCount", pageCount, "int");
					var page = 0;
					egl.addLocalFunctionVariable("page", page, "int", "page");
					egl.atLine(this.eze$$fileName,695,28201,4, this);
					page = egl.convertDecimalToInt((new egl.javascript.BigDecimal(String(1))).add(new egl.javascript.BigDecimal(egl.divide((this._startRow - 1), this.pageSize))),egl.createRuntimeException);
					egl.setLocalFunctionVariable("page", page, "int");
					egl.atLine(this.eze$$fileName,696,28258,14, this);
					var ezert$$96 = 0;
					ezert$$96 = this.data.getSize();
					egl.atLine(this.eze$$fileName,696,28255,81, this);
					if ( (egl.remainder(ezert$$96, this.pageSize) > 0) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,697,28305,15, this);
							pageCount = (pageCount + 1);
							egl.setLocalFunctionVariable("pageCount", pageCount, "int");
						}finally{egl.exitBlock();}
					}
					var pageText = "";
					egl.addLocalFunctionVariable("pageText", pageText, "string", "pageText");
					egl.atLine(this.eze$$fileName,699,28349,8, this);
					pageText = this.pagingLabel;
					egl.setLocalFunctionVariable("pageText", pageText, "string");
					egl.atLine(this.eze$$fileName,700,28392,40, this);
					this.replaceMarker(pageText, function(eze$$inout$s) {
						pageText = eze$$inout$s;
						egl.setLocalFunctionVariable("pageText", pageText, "string");
					}, "{page}", (page).toString(), this );
					egl.setLocalFunctionVariable("pageText", pageText, "string");
					egl.atLine(this.eze$$fileName,701,28445,50, this);
					this.replaceMarker(pageText, function(eze$$inout$s) {
						pageText = eze$$inout$s;
						egl.setLocalFunctionVariable("pageText", pageText, "string");
					}, "{pageCount}", (pageCount).toString(), this );
					egl.setLocalFunctionVariable("pageText", pageText, "string");
					egl.atLine(this.eze$$fileName,702,28508,37, this);
					egl.checkNull(this.gotoStartButton, "gotoStartButton").setDisabled((page == 1));
					egl.atLine(this.eze$$fileName,703,28558,40, this);
					egl.checkNull(this.gotoPageBackButton, "gotoPageBackButton").setDisabled((page == 1));
					egl.atLine(this.eze$$fileName,704,28611,30, this);
					egl.checkNull(this.pageTextLabel, "pageTextLabel").setText(pageText);
					egl.atLine(this.eze$$fileName,705,28654,51, this);
					egl.checkNull(this.gotoPageForwardButton, "gotoPageForwardButton").setDisabled((page == pageCount));
					egl.atLine(this.eze$$fileName,706,28718,43, this);
					egl.checkNull(this.gotoEndButton, "gotoEndButton").setDisabled((page == pageCount));
					egl.atLine(this.eze$$fileName,707,28774,31, this);
					egl.checkNull(this.ui, "ui").setChildren( [ this.grid, this.buttonBar ] );
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,709,28831,20, this);
					egl.checkNull(this.ui, "ui").setChildren( [ this.grid ] );
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,691,27986,885, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"replaceMarker": function( s, eze$$s$func_, marker, value, eze$$caller ) {
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
		try { egl.enter("replaceMarker",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("s", s, "string", "s");
			egl.addLocalFunctionVariable("marker", marker, "string", "marker");
			egl.addLocalFunctionVariable("value", value, "string", "value");
			var index = 0;
			egl.addLocalFunctionVariable("index", index, "int", "index");
			egl.atLine(this.eze$$fileName,714,28965,25, this);
			var ezert$$97 = 0;
			ezert$$97 = egl.egl.core.$StrLib.indexOf( s, marker);
			egl.setLocalFunctionVariable("s", s, "string");
			egl.atLine(this.eze$$fileName,714,28953,5, this);
			index = ezert$$97;
			egl.setLocalFunctionVariable("index", index, "int");
			var ml = 0;
			egl.addLocalFunctionVariable("ml", ml, "int", "ml");
			egl.atLine(this.eze$$fileName,715,29009,27, this);
			var ezert$$98 = 0;
			ezert$$98 = egl.egl.core.$StrLib.textLen( marker);
			egl.atLine(this.eze$$fileName,715,29000,2, this);
			ml = ezert$$98;
			egl.setLocalFunctionVariable("ml", ml, "int");
			var sl = 0;
			egl.addLocalFunctionVariable("sl", sl, "int", "sl");
			egl.atLine(this.eze$$fileName,716,29055,22, this);
			var ezert$$99 = 0;
			ezert$$99 = egl.egl.core.$StrLib.textLen( s);
			egl.atLine(this.eze$$fileName,716,29046,2, this);
			sl = ezert$$99;
			egl.setLocalFunctionVariable("sl", sl, "int");
			var prefix = "";
			egl.addLocalFunctionVariable("prefix", prefix, "string", "prefix");
			egl.atLine(this.eze$$fileName,717,29087,6, this);
			prefix = "";
			egl.setLocalFunctionVariable("prefix", prefix, "string");
			var postfix = "";
			egl.addLocalFunctionVariable("postfix", postfix, "string", "postfix");
			egl.atLine(this.eze$$fileName,718,29115,7, this);
			postfix = "";
			egl.setLocalFunctionVariable("postfix", postfix, "string");
			egl.atLine(this.eze$$fileName,719,29144,232, this);
			if ( (index > 0) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,720,29176,65, this);
					if ( (index > 1) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,721,29202,26, this);
							prefix = s.substring( 1-1,(index - 1));
							egl.setLocalFunctionVariable("prefix", prefix, "string");
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,723,29251,75, this);
					if ( ((index + ml) < sl) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,724,29283,30, this);
							postfix = s.substring( (index + ml)-1,sl);
							egl.setLocalFunctionVariable("postfix", postfix, "string");
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,726,29336,28, this);
					s = ((prefix + value) + postfix);
					egl.setLocalFunctionVariable("s", s, "string");
					eze$$s$func_.call(eze$$caller,s);
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,713,28877,507, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"gotoPage": function( pageIndex ) {
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
		try { egl.enter("gotoPage",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("pageIndex", pageIndex, "int", "pageIndex");
			egl.atLine(this.eze$$fileName,731,29425,36, this);
			if ( (pageIndex < 1) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,731,29443,14, this);
					pageIndex = 1;
					egl.setLocalFunctionVariable("pageIndex", pageIndex, "int");
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,732,29479,14, this);
			var ezert$$100 = 0;
			ezert$$100 = this.getPageCount();
			egl.atLine(this.eze$$fileName,732,29464,62, this);
			if ( (pageIndex > ezert$$100) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,732,29507,14, this);
					var ezert$$101 = 0;
					ezert$$101 = this.getPageCount();
					egl.atLine(this.eze$$fileName,732,29495,27, this);
					pageIndex = ezert$$101;
					egl.setLocalFunctionVariable("pageIndex", pageIndex, "int");
				}finally{egl.exitBlock();}
			}
			var oldPageIndex = 0;
			egl.addLocalFunctionVariable("oldPageIndex", oldPageIndex, "int", "oldPageIndex");
			egl.atLine(this.eze$$fileName,733,29535,12, this);
			oldPageIndex = egl.convertDecimalToInt(new egl.javascript.BigDecimal(egl.divide((this._startRow - 1), this.pageSize)).add((new egl.javascript.BigDecimal(String(1)))),egl.createRuntimeException);
			egl.setLocalFunctionVariable("oldPageIndex", oldPageIndex, "int");
			egl.atLine(this.eze$$fileName,734,29604,43, this);
			this._startRow = (((pageIndex - 1) * this.pageSize) + 1);
			egl.atLine(this.eze$$fileName,735,29656,9, this);
			this.render();
			egl.atLine(this.eze$$fileName,736,29674,129, this);
			{
				try{egl.enterBlock();
					var n = 0;
					egl.addLocalFunctionVariable("n", n, "int", "n");
					n = 1;
					egl.setLocalFunctionVariable("n", n, "int");
					for ( ; (n <= this.pageChangeListeners.getSize()); n = (n + 1) )
					{
						egl.setLocalFunctionVariable("n", n, "int");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,737,29737,54, this);
							egl.checkNull(this.pageChangeListeners, "pageChangeListeners")[this.pageChangeListeners.checkIndex((n)-1)]( this, oldPageIndex, pageIndex );
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,736,29674,129, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,730,29387,425, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getPageCount": function() {
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
		try { egl.enter("getPageCount",this,arguments,eze$$updater);
			var $result = 0;
			egl.atLine(this.eze$$fileName,743,29876,14, this);
			var ezert$$102 = 0;
			ezert$$102 = this.data.getSize();
			egl.atLine(this.eze$$fileName,743,29867,39, this);
			var ezert$$103 = 0;
			ezert$$103 = ezert$$102;
			$result = egl.convertDecimalToInt(new egl.javascript.BigDecimal(egl.divide((ezert$$103 - 1), this.pageSize)).add((new egl.javascript.BigDecimal(String(1)))),egl.createRuntimeException);
			egl.setLocalFunctionVariable("INT", $result, "int");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getCurrentPageIndex": function() {
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
		try { egl.enter("getCurrentPageIndex",this,arguments,eze$$updater);
			var $result = 0;
			egl.atLine(this.eze$$fileName,747,29984,38, this);
			$result = egl.convertDecimalToInt(new egl.javascript.BigDecimal(egl.divide((this._startRow - 1), this.pageSize)).add((new egl.javascript.BigDecimal(String(1)))),egl.createRuntimeException);
			egl.setLocalFunctionVariable("INT", $result, "int");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"gotoStart": function( e ) {
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
		try { egl.enter("gotoStart",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("e", e, "egl.ui.rui.Event", "e");
			var oldPageIndex = 0;
			egl.addLocalFunctionVariable("oldPageIndex", oldPageIndex, "int", "oldPageIndex");
			egl.atLine(this.eze$$fileName,751,30084,12, this);
			oldPageIndex = egl.convertDecimalToInt(new egl.javascript.BigDecimal(egl.divide((this._startRow - 1), this.pageSize)).add((new egl.javascript.BigDecimal(String(1)))),egl.createRuntimeException);
			egl.setLocalFunctionVariable("oldPageIndex", oldPageIndex, "int");
			egl.atLine(this.eze$$fileName,752,30138,25, this);
			this.lastStartRow = this._startRow;
			egl.atLine(this.eze$$fileName,753,30172,14, this);
			this._startRow = 1;
			egl.atLine(this.eze$$fileName,754,30203,9, this);
			this.render();
			egl.atLine(this.eze$$fileName,755,30221,118, this);
			{
				try{egl.enterBlock();
					var n = 0;
					egl.addLocalFunctionVariable("n", n, "int", "n");
					n = 1;
					egl.setLocalFunctionVariable("n", n, "int");
					for ( ; (n <= this.pageChangeListeners.getSize()); n = (n + 1) )
					{
						egl.setLocalFunctionVariable("n", n, "int");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,756,30281,46, this);
							egl.checkNull(this.pageChangeListeners, "pageChangeListeners")[this.pageChangeListeners.checkIndex((n)-1)]( this, oldPageIndex, 1 );
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,755,30221,118, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,750,30040,307, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"gotoPageBack": function( e ) {
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
		try { egl.enter("gotoPageBack",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("e", e, "egl.ui.rui.Event", "e");
			var oldPageIndex = 0;
			egl.addLocalFunctionVariable("oldPageIndex", oldPageIndex, "int", "oldPageIndex");
			egl.atLine(this.eze$$fileName,761,30400,12, this);
			oldPageIndex = egl.convertDecimalToInt(new egl.javascript.BigDecimal(egl.divide((this._startRow - 1), this.pageSize)).add((new egl.javascript.BigDecimal(String(1)))),egl.createRuntimeException);
			egl.setLocalFunctionVariable("oldPageIndex", oldPageIndex, "int");
			egl.atLine(this.eze$$fileName,762,30454,25, this);
			this.lastStartRow = this._startRow;
			egl.atLine(this.eze$$fileName,763,30488,33, this);
			this._startRow = (this._startRow - this.pageSize);
			egl.atLine(this.eze$$fileName,764,30538,9, this);
			this.render();
			egl.atLine(this.eze$$fileName,765,30556,133, this);
			{
				try{egl.enterBlock();
					var n = 0;
					egl.addLocalFunctionVariable("n", n, "int", "n");
					n = 1;
					egl.setLocalFunctionVariable("n", n, "int");
					for ( ; (n <= this.pageChangeListeners.getSize()); n = (n + 1) )
					{
						egl.setLocalFunctionVariable("n", n, "int");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,766,30616,61, this);
							egl.checkNull(this.pageChangeListeners, "pageChangeListeners")[this.pageChangeListeners.checkIndex((n)-1)]( this, oldPageIndex, (oldPageIndex - 1) );
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,765,30556,133, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,760,30353,344, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"gotoPageForward": function( e ) {
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
		try { egl.enter("gotoPageForward",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("e", e, "egl.ui.rui.Event", "e");
			var oldPageIndex = 0;
			egl.addLocalFunctionVariable("oldPageIndex", oldPageIndex, "int", "oldPageIndex");
			egl.atLine(this.eze$$fileName,771,30753,12, this);
			oldPageIndex = egl.convertDecimalToInt(new egl.javascript.BigDecimal(egl.divide((this._startRow - 1), this.pageSize)).add((new egl.javascript.BigDecimal(String(1)))),egl.createRuntimeException);
			egl.setLocalFunctionVariable("oldPageIndex", oldPageIndex, "int");
			egl.atLine(this.eze$$fileName,772,30807,25, this);
			this.lastStartRow = this._startRow;
			egl.atLine(this.eze$$fileName,773,30841,33, this);
			this._startRow = (this._startRow + this.pageSize);
			egl.atLine(this.eze$$fileName,774,30891,9, this);
			this.render();
			egl.atLine(this.eze$$fileName,775,30909,133, this);
			{
				try{egl.enterBlock();
					var n = 0;
					egl.addLocalFunctionVariable("n", n, "int", "n");
					n = 1;
					egl.setLocalFunctionVariable("n", n, "int");
					for ( ; (n <= this.pageChangeListeners.getSize()); n = (n + 1) )
					{
						egl.setLocalFunctionVariable("n", n, "int");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,776,30969,61, this);
							egl.checkNull(this.pageChangeListeners, "pageChangeListeners")[this.pageChangeListeners.checkIndex((n)-1)]( this, oldPageIndex, (oldPageIndex + 1) );
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,775,30909,133, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,770,30703,347, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"gotoEnd": function( e ) {
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
		try { egl.enter("gotoEnd",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("e", e, "egl.ui.rui.Event", "e");
			var oldPageIndex = 0;
			egl.addLocalFunctionVariable("oldPageIndex", oldPageIndex, "int", "oldPageIndex");
			egl.atLine(this.eze$$fileName,781,31098,12, this);
			oldPageIndex = egl.convertDecimalToInt(new egl.javascript.BigDecimal(egl.divide((this._startRow - 1), this.pageSize)).add((new egl.javascript.BigDecimal(String(1)))),egl.createRuntimeException);
			egl.setLocalFunctionVariable("oldPageIndex", oldPageIndex, "int");
			var pageCount = 0;
			egl.addLocalFunctionVariable("pageCount", pageCount, "int", "pageCount");
			egl.atLine(this.eze$$fileName,782,31169,14, this);
			var ezert$$104 = 0;
			ezert$$104 = this.data.getSize();
			egl.atLine(this.eze$$fileName,782,31152,9, this);
			pageCount = egl.convertDecimalToInt(new egl.javascript.BigDecimal(egl.divide((ezert$$104 - 1), this.pageSize)).add((new egl.javascript.BigDecimal(String(1)))),egl.createRuntimeException);
			egl.setLocalFunctionVariable("pageCount", pageCount, "int");
			var leftOver = 0;
			egl.addLocalFunctionVariable("leftOver", leftOver, "int", "leftOver");
			egl.atLine(this.eze$$fileName,783,31224,14, this);
			var ezert$$105 = 0;
			ezert$$105 = this.data.getSize();
			egl.atLine(this.eze$$fileName,783,31209,8, this);
			leftOver = egl.remainder(ezert$$105, this.pageSize);
			egl.setLocalFunctionVariable("leftOver", leftOver, "int");
			egl.atLine(this.eze$$fileName,784,31260,62, this);
			if ( (leftOver == 0) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,785,31290,20, this);
					leftOver = this.pageSize;
					egl.setLocalFunctionVariable("leftOver", leftOver, "int");
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,787,31331,25, this);
			this.lastStartRow = this._startRow;
			egl.atLine(this.eze$$fileName,788,31392,14, this);
			var ezert$$106 = 0;
			ezert$$106 = this.data.getSize();
			egl.atLine(this.eze$$fileName,788,31377,45, this);
			var ezert$$107 = 0;
			ezert$$107 = Math.max( 1 ,((ezert$$106 - leftOver) + 1) );
			egl.atLine(this.eze$$fileName,788,31365,58, this);
			this._startRow = ezert$$107;
			egl.atLine(this.eze$$fileName,789,31440,9, this);
			this.render();
			egl.atLine(this.eze$$fileName,790,31458,126, this);
			{
				try{egl.enterBlock();
					var n = 0;
					egl.addLocalFunctionVariable("n", n, "int", "n");
					n = 1;
					egl.setLocalFunctionVariable("n", n, "int");
					for ( ; (n <= this.pageChangeListeners.getSize()); n = (n + 1) )
					{
						egl.setLocalFunctionVariable("n", n, "int");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,791,31518,54, this);
							egl.checkNull(this.pageChangeListeners, "pageChangeListeners")[this.pageChangeListeners.checkIndex((n)-1)]( this, oldPageIndex, pageCount );
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,790,31458,126, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,780,31056,536, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"updateHighlights": function() {
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
		try { egl.enter("updateHighlights",this,arguments,eze$$updater);
			var divs = null;
			egl.addLocalFunctionVariable("divs", divs, "egl.ui.rui.Widget[]", "!divs");
			var ezert$$108 = null;
			ezert$$108 = egl.checkNull(this.grid, "grid").getElementsByTagName("div" );
			egl.atLine(this.eze$$fileName,802,31834,4, this);
			divs = ezert$$108;
			egl.setLocalFunctionVariable("divs", divs, "egl.ui.rui.Widget[]");
			var divCount = 0;
			egl.addLocalFunctionVariable("divCount", divCount, "int", "divCount");
			egl.atLine(this.eze$$fileName,803,31907,14, this);
			var ezert$$109 = 0;
			ezert$$109 = divs.getSize();
			egl.atLine(this.eze$$fileName,803,31892,8, this);
			divCount = ezert$$109;
			egl.setLocalFunctionVariable("divCount", divCount, "int");
			egl.atLine(this.eze$$fileName,804,31931,265, this);
			{
				try{egl.enterBlock();
					var n = 0;
					egl.addLocalFunctionVariable("n", n, "int", "n");
					n = 1;
					egl.setLocalFunctionVariable("n", n, "int");
					for ( ; (n <= divCount); n = (n + 1) )
					{
						egl.setLocalFunctionVariable("n", n, "int");
						try{egl.enterBlock();
							var row = 0;
							egl.addLocalFunctionVariable("row", row, "int", "row");
							egl.atLine(this.eze$$fileName,805,31983,27, this);
							var ezert$$110 = null;
							ezert$$110 = egl.checkNull(divs, "divs")[divs.checkIndex((n)-1)].getAttribute("row" );
							egl.atLine(this.eze$$fileName,805,31973,3, this);
							row = egl.convertAnyToInt(egl.boxAny(ezert$$110),false);
							egl.setLocalFunctionVariable("row", row, "int");
							egl.atLine(this.eze$$fileName,806,32024,160, this);
							if ( (row > 0) ) {
								try{egl.enterBlock();
									var selected = false;
									egl.addLocalFunctionVariable("selected", selected, "boolean", "selected");
									egl.atLine(this.eze$$fileName,807,32071,27, this);
									var ezert$$111 = false;
									ezert$$111 = this.util.getSelected(egl.unboxAny(egl.boxAny(egl.checkNull(this.data, "data")[this.data.checkIndex((row)-1)])) );
									egl.atLine(this.eze$$fileName,807,32052,8, this);
									selected = ezert$$111;
									egl.setLocalFunctionVariable("selected", selected, "boolean");
									egl.atLine(this.eze$$fileName,808,32116,36, this);
									this.selectRow(egl.checkNull(divs, "divs")[divs.checkIndex((n)-1)].getParent(), selected );
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,804,31931,265, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,812,32222,685, this);
			if ( this.showCheckBoxes ) {
				try{egl.enterBlock();
					var checkBoxes = null;
					egl.addLocalFunctionVariable("checkBoxes", checkBoxes, "egl.ui.rui.Widget[]", "!checkBoxes");
					var ezert$$112 = null;
					ezert$$112 = egl.checkNull(this.grid, "grid").getElementsByTagName("input" );
					egl.atLine(this.eze$$fileName,813,32262,10, this);
					checkBoxes = ezert$$112;
					egl.setLocalFunctionVariable("checkBoxes", checkBoxes, "egl.ui.rui.Widget[]");
					var checkBoxCount = 0;
					egl.addLocalFunctionVariable("checkBoxCount", checkBoxCount, "int", "checkBoxCount");
					egl.atLine(this.eze$$fileName,814,32351,20, this);
					var ezert$$113 = 0;
					ezert$$113 = checkBoxes.getSize();
					egl.atLine(this.eze$$fileName,814,32331,13, this);
					checkBoxCount = ezert$$113;
					egl.setLocalFunctionVariable("checkBoxCount", checkBoxCount, "int");
					egl.atLine(this.eze$$fileName,815,32384,512, this);
					{
						try{egl.enterBlock();
							var c = 0;
							egl.addLocalFunctionVariable("c", c, "int", "c");
							c = 1;
							egl.setLocalFunctionVariable("c", c, "int");
							for ( ; (c <= checkBoxCount); c = (c + 1) )
							{
								egl.setLocalFunctionVariable("c", c, "int");
								try{egl.enterBlock();
									var row = 0;
									egl.addLocalFunctionVariable("row", row, "int", "row");
									egl.atLine(this.eze$$fileName,816,32444,33, this);
									var ezert$$114 = null;
									ezert$$114 = egl.checkNull(checkBoxes, "checkBoxes")[checkBoxes.checkIndex((c)-1)].getAttribute("row" );
									egl.atLine(this.eze$$fileName,816,32434,3, this);
									row = egl.convertAnyToInt(egl.boxAny(ezert$$114),false);
									egl.setLocalFunctionVariable("row", row, "int");
									egl.atLine(this.eze$$fileName,817,32494,387, this);
									if ( ((row > 0) && (egl.checkNull(checkBoxes, "checkBoxes")[checkBoxes.checkIndex((c)-1)].getID() == ((egl.checkNull(this.grid, "grid").getID() + "-checkbox-") + (row).toString()))) ) {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,818,32586,26, this);
											var ezert$$115 = false;
											ezert$$115 = this.util.getChecked(egl.unboxAny(egl.boxAny(egl.checkNull(this.data, "data")[this.data.checkIndex((row)-1)])) );
											egl.atLine(this.eze$$fileName,818,32583,279, this);
											if ( ezert$$115 ) {
												try{egl.enterBlock();
													egl.atLine(this.eze$$fileName,819,32637,44, this);
													egl.checkNull(checkBoxes, "checkBoxes")[checkBoxes.checkIndex((c)-1)].setAttribute("checked", true );
												}finally{egl.exitBlock();}
											}
											else {
												try{egl.enterBlock();
													egl.atLine(this.eze$$fileName,821,32729,45, this);
													egl.checkNull(checkBoxes, "checkBoxes")[checkBoxes.checkIndex((c)-1)].setAttribute("checked", false );
													egl.atLine(this.eze$$fileName,822,32798,41, this);
													egl.checkNull(checkBoxes, "checkBoxes")[checkBoxes.checkIndex((c)-1)].removeAttribute("checked" );
												}finally{egl.exitBlock();}
											}
										}finally{egl.exitBlock();}
									}
								}finally{egl.exitBlock();}
								egl.atLine(this.eze$$fileName,815,32384,512, this);
							}
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,801,31798,1117, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"checkSelection": function( checkBox ) {
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
		try { egl.enter("checkSelection",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("checkBox", checkBox, "egl.ui.rui.Widget", "checkBox");
			var inputs = null;
			egl.addLocalFunctionVariable("inputs", inputs, "egl.ui.rui.Widget[]", "!inputs");
			var ezert$$116 = null;
			ezert$$116 = egl.checkNull(this.grid, "grid").getElementsByTagName("input" );
			egl.atLine(this.eze$$fileName,842,33296,6, this);
			inputs = ezert$$116;
			egl.setLocalFunctionVariable("inputs", inputs, "egl.ui.rui.Widget[]");
			var inputCount = 0;
			egl.addLocalFunctionVariable("inputCount", inputCount, "int", "inputCount");
			egl.atLine(this.eze$$fileName,843,33375,16, this);
			var ezert$$117 = 0;
			ezert$$117 = inputs.getSize();
			egl.atLine(this.eze$$fileName,843,33358,10, this);
			inputCount = ezert$$117;
			egl.setLocalFunctionVariable("inputCount", inputCount, "int");
			egl.atLine(this.eze$$fileName,844,33401,383, this);
			{
				try{egl.enterBlock();
					var n = 0;
					egl.addLocalFunctionVariable("n", n, "int", "n");
					n = 1;
					egl.setLocalFunctionVariable("n", n, "int");
					for ( ; (n <= inputCount); n = (n + 1) )
					{
						egl.setLocalFunctionVariable("n", n, "int");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,845,33445,327, this);
							if ( (egl.checkNull(inputs, "inputs")[inputs.checkIndex((n)-1)].getID() == checkBox.getID()) ) {
								try{egl.enterBlock();
									var isChecked = false;
									egl.addLocalFunctionVariable("isChecked", isChecked, "boolean", "isChecked");
									egl.atLine(this.eze$$fileName,846,33518,32, this);
									var ezert$$118 = null;
									ezert$$118 = checkBox.getAttribute("checked" );
									egl.atLine(this.eze$$fileName,846,33493,9, this);
									isChecked = (("" + egl.convertAnyToString(egl.boxAny(ezert$$118),false)) == "true");
									egl.setLocalFunctionVariable("isChecked", isChecked, "boolean");
									var row = 0;
									egl.addLocalFunctionVariable("row", row, "int", "row");
									egl.atLine(this.eze$$fileName,847,33588,42, this);
									var ezert$$119 = null;
									ezert$$119 = checkBox.getParent().getParent().getAttribute("row" );
									egl.atLine(this.eze$$fileName,847,33578,3, this);
									row = egl.convertAnyToInt(egl.boxAny(ezert$$119),false);
									egl.setLocalFunctionVariable("row", row, "int");
									egl.atLine(this.eze$$fileName,848,33664,38, this);
									this.util.setChecked(egl.unboxAny(egl.boxAny(egl.checkNull(this.data, "data")[this.data.checkIndex((row)-1)])), isChecked );
									egl.atLine(this.eze$$fileName,849,33719,32, this);
									this.notifyCheckboxChangeListeners();
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,844,33401,383, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,841,33235,557, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"notifyCheckboxChangeListeners": function() {
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
		try { egl.enter("notifyCheckboxChangeListeners",this,arguments,eze$$updater);
			egl.atLine(this.eze$$fileName,855,33858,97, this);
			{
				try{egl.enterBlock();
					var k = 0;
					egl.addLocalFunctionVariable("k", k, "int", "k");
					k = 1;
					egl.setLocalFunctionVariable("k", k, "int");
					for ( ; (k <= this.checkboxListeners.getSize()); k = (k + 1) )
					{
						egl.setLocalFunctionVariable("k", k, "int");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,856,33916,27, this);
							egl.checkNull(this.checkboxListeners, "checkboxListeners")[this.checkboxListeners.checkIndex((k)-1)]( this );
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,855,33858,97, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,854,33802,167, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setChecked": function( checked ) {
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
		try { egl.enter("setChecked",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("checked", checked, "any[]", "!checked");
			egl.atLine(this.eze$$fileName,861,34033,18, this);
			this.setAllUnchecked();
			var len = 0;
			egl.addLocalFunctionVariable("len", len, "int", "len");
			egl.atLine(this.eze$$fileName,862,34070,17, this);
			var ezert$$120 = 0;
			ezert$$120 = checked.getSize();
			egl.atLine(this.eze$$fileName,862,34060,3, this);
			len = ezert$$120;
			egl.setLocalFunctionVariable("len", len, "int");
			egl.atLine(this.eze$$fileName,863,34102,83, this);
			{
				try{egl.enterBlock();
					var n = 0;
					egl.addLocalFunctionVariable("n", n, "int", "n");
					n = 1;
					egl.setLocalFunctionVariable("n", n, "int");
					for ( ; (n <= len); n = (n + 1) )
					{
						egl.setLocalFunctionVariable("n", n, "int");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,864,34139,34, this);
							this.util.setChecked(egl.unboxAny(egl.boxAny(egl.checkNull(checked, "checked")[checked.checkIndex((n)-1)])), true );
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,863,34102,83, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,866,34194,19, this);
			this.updateHighlights();
			egl.atLine(this.eze$$fileName,867,34222,32, this);
			this.notifyCheckboxChangeListeners();
			egl.atLine(this.eze$$fileName,860,33979,283, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getChecked": function() {
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
		try { egl.enter("getChecked",this,arguments,eze$$updater);
			var $result = null;
			var result = (function(){ var ezert$$121= []; ezert$$121.setType( "A;" );for (var i=0; i < 0; i++) {
					ezert$$121[ i ] = null;
				}
				// no max size set for this array
			return ezert$$121;})();
			egl.addLocalFunctionVariable("result", result, "any[]", "!result");
			var count = 0;
			egl.addLocalFunctionVariable("count", count, "int", "count");
			egl.atLine(this.eze$$fileName,872,34348,14, this);
			var ezert$$122 = 0;
			ezert$$122 = this.data.getSize();
			egl.atLine(this.eze$$fileName,872,34336,5, this);
			count = ezert$$122;
			egl.setLocalFunctionVariable("count", count, "int");
			egl.atLine(this.eze$$fileName,873,34372,142, this);
			{
				try{egl.enterBlock();
					var n = 0;
					egl.addLocalFunctionVariable("n", n, "int", "n");
					n = 1;
					egl.setLocalFunctionVariable("n", n, "int");
					for ( ; (n <= count); n = (n + 1) )
					{
						egl.setLocalFunctionVariable("n", n, "int");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,874,34414,24, this);
							var ezert$$123 = false;
							ezert$$123 = this.util.getChecked(egl.unboxAny(egl.boxAny(egl.checkNull(this.data, "data")[this.data.checkIndex((n)-1)])) );
							egl.atLine(this.eze$$fileName,874,34411,91, this);
							if ( ezert$$123 ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,875,34456,30, this);
									result.appendElement( egl.boxAny(egl.checkNull(this.data, "data")[this.data.checkIndex((n)-1)]) );
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,873,34372,142, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,878,34523,15, this);
			$result = result;
			egl.setLocalFunctionVariable("ANY[]", $result, "any[]");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setAllUnchecked": function() {
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
		try { egl.enter("setAllUnchecked",this,arguments,eze$$updater);
			var count = 0;
			egl.addLocalFunctionVariable("count", count, "int", "count");
			egl.atLine(this.eze$$fileName,882,34608,14, this);
			var ezert$$124 = 0;
			ezert$$124 = this.data.getSize();
			egl.atLine(this.eze$$fileName,882,34596,5, this);
			count = ezert$$124;
			egl.setLocalFunctionVariable("count", count, "int");
			egl.atLine(this.eze$$fileName,883,34632,167, this);
			{
				try{egl.enterBlock();
					var n = 0;
					egl.addLocalFunctionVariable("n", n, "int", "n");
					n = 1;
					egl.setLocalFunctionVariable("n", n, "int");
					for ( ; (n <= count); n = (n + 1) )
					{
						egl.setLocalFunctionVariable("n", n, "int");
						try{egl.enterBlock();
							var object = null;
							egl.addLocalFunctionVariable("object", object, "any", "object");
							egl.atLine(this.eze$$fileName,884,34671,6, this);
							object = egl.boxAny(egl.checkNull(this.data, "data")[this.data.checkIndex((n)-1)]);
							egl.setLocalFunctionVariable("object", object, "any");
							egl.atLine(this.eze$$fileName,885,34705,82, this);
							if ( (object != null) ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,886,34740,31, this);
									this.util.setChecked(egl.unboxAny(object), false );
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,883,34632,167, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,881,34556,251, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"uncheckAll": function() {
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
		try { egl.enter("uncheckAll",this,arguments,eze$$updater);
			egl.atLine(this.eze$$fileName,892,34844,18, this);
			this.setAllUnchecked();
			egl.atLine(this.eze$$fileName,893,34868,19, this);
			this.updateHighlights();
			egl.atLine(this.eze$$fileName,894,34893,32, this);
			this.notifyCheckboxChangeListeners();
			egl.atLine(this.eze$$fileName,891,34817,116, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setAllChecked": function() {
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
		try { egl.enter("setAllChecked",this,arguments,eze$$updater);
			var count = 0;
			egl.addLocalFunctionVariable("count", count, "int", "count");
			egl.atLine(this.eze$$fileName,898,34987,14, this);
			var ezert$$125 = 0;
			ezert$$125 = this.data.getSize();
			egl.atLine(this.eze$$fileName,898,34975,5, this);
			count = ezert$$125;
			egl.setLocalFunctionVariable("count", count, "int");
			egl.atLine(this.eze$$fileName,899,35011,166, this);
			{
				try{egl.enterBlock();
					var n = 0;
					egl.addLocalFunctionVariable("n", n, "int", "n");
					n = 1;
					egl.setLocalFunctionVariable("n", n, "int");
					for ( ; (n <= count); n = (n + 1) )
					{
						egl.setLocalFunctionVariable("n", n, "int");
						try{egl.enterBlock();
							var object = null;
							egl.addLocalFunctionVariable("object", object, "any", "object");
							egl.atLine(this.eze$$fileName,900,35050,6, this);
							object = egl.boxAny(egl.checkNull(this.data, "data")[this.data.checkIndex((n)-1)]);
							egl.setLocalFunctionVariable("object", object, "any");
							egl.atLine(this.eze$$fileName,901,35084,81, this);
							if ( (object != null) ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,902,35119,30, this);
									this.util.setChecked(egl.unboxAny(object), true );
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,899,35011,166, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,897,34940,242, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"checkAll": function() {
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
		try { egl.enter("checkAll",this,arguments,eze$$updater);
			egl.atLine(this.eze$$fileName,908,35216,16, this);
			this.setAllChecked();
			egl.atLine(this.eze$$fileName,909,35240,19, this);
			this.updateHighlights();
			egl.atLine(this.eze$$fileName,910,35267,32, this);
			this.notifyCheckboxChangeListeners();
			egl.atLine(this.eze$$fileName,907,35189,118, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setSelectionMode": function( value ) {
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
		try { egl.enter("setSelectionMode",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("value", value, "int", "value");
			egl.atLine(this.eze$$fileName,920,35523,22, this);
			this.selectionMode = value;
			egl.atLine(this.eze$$fileName,921,35554,19, this);
			this.setAllDeselected();
			egl.atLine(this.eze$$fileName,922,35582,19, this);
			this.updateHighlights();
			egl.atLine(this.eze$$fileName,919,35475,134, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getSelectionMode": function() {
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
		try { egl.enter("getSelectionMode",this,arguments,eze$$updater);
			var $result = 0;
			egl.atLine(this.eze$$fileName,926,35664,22, this);
			$result = this.selectionMode;
			egl.setLocalFunctionVariable("INT", $result, "int");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"selectRow": function( div, selected ) {
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
		try { egl.enter("selectRow",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("div", div, "egl.ui.rui.Widget", "div");
			egl.addLocalFunctionVariable("selected", selected, "boolean", "selected");
			var row = 0;
			egl.addLocalFunctionVariable("row", row, "int", "row");
			egl.atLine(this.eze$$fileName,930,35773,23, this);
			var ezert$$126 = null;
			ezert$$126 = div.getAttribute("row" );
			egl.atLine(this.eze$$fileName,930,35763,3, this);
			row = egl.convertAnyToInt(egl.boxAny(ezert$$126),false);
			egl.setLocalFunctionVariable("row", row, "int");
			egl.atLine(this.eze$$fileName,931,35806,307, this);
			if ( (row > 0) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,932,35830,271, this);
					if ( selected ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,933,35859,34, this);
							this.util.setSelected(egl.unboxAny(egl.boxAny(egl.checkNull(this.data, "data")[this.data.checkIndex((row)-1)])), true );
							egl.atLine(this.eze$$fileName,934,35910,43, this);
							this.addClass(div, "EglRuiDataGridRowSelected" );
						}finally{egl.exitBlock();}
					}
					else {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,936,35987,35, this);
							this.util.setSelected(egl.unboxAny(egl.boxAny(egl.checkNull(this.data, "data")[this.data.checkIndex((row)-1)])), false );
							egl.atLine(this.eze$$fileName,937,36039,46, this);
							this.removeClass(div, "EglRuiDataGridRowSelected" );
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,929,35700,421, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"clickGrid": function( e ) {
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
		try { egl.enter("clickGrid",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("e", e, "egl.ui.rui.Event", "e");
			egl.atLine(this.eze$$fileName,947,36242,14, this);
			this.lastEvent = e;
			var widget = null;
			egl.addLocalFunctionVariable("widget", widget, "egl.ui.rui.Widget", "widget");
			egl.atLine(this.eze$$fileName,948,36289,16, this);
			var ezert$$127 = null;
			ezert$$127 = this.getCellWidget(e );
			egl.atLine(this.eze$$fileName,948,36273,6, this);
			widget = ezert$$127;
			egl.setLocalFunctionVariable("widget", widget, "egl.ui.rui.Widget");
			var eze_Cond_Temp_6 = false;
			egl.atLine(this.eze$$fileName,949,36315,133, this);
			eze_Cond_Temp_6 = true;
			egl.atLine(this.eze$$fileName,949,36315,133, this);
			while ( eze_Cond_Temp_6 ) {
				try{egl.enterBlock();
					var eze_Cond_Temp_7 = false;
					egl.atLine(this.eze$$fileName,949,36321,78, this);
					if ( (widget.getClass() != "EglRuiDataGrid") ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,949,36357,29, this);
							var ezert$$128 = null;
							ezert$$128 = widget.getAttribute("column" );
							egl.atLine(this.eze$$fileName,949,36321,78, this);
							if ( (egl.convertAnyToInt(egl.boxAny(ezert$$128),false) == 0) ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,949,36321,78, this);
									eze_Cond_Temp_7 = true;
								}finally{egl.exitBlock();}
							}
							else {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,949,36321,78, this);
									eze_Cond_Temp_7 = false;
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
					}
					else {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,949,36321,78, this);
							eze_Cond_Temp_7 = false;
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,949,36315,133, this);
					if ( eze_Cond_Temp_7 ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,950,36413,23, this);
							widget = widget.getParent();
							egl.setLocalFunctionVariable("widget", widget, "egl.ui.rui.Widget");
						}finally{egl.exitBlock();}
					}
					else {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,949,36315,133, this);
							eze_Cond_Temp_6 = false;
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
				egl.atLine(this.eze$$fileName,949,36315,133, this);
			}
			egl.atLine(this.eze$$fileName,952,36457,1570, this);
			if ( (widget.getClass() != "EglRuiDataGrid") ) {
				try{egl.enterBlock();
					var row = 0;
					egl.addLocalFunctionVariable("row", row, "int", "row");
					egl.atLine(this.eze$$fileName,953,36516,26, this);
					var ezert$$129 = null;
					ezert$$129 = widget.getAttribute("row" );
					egl.atLine(this.eze$$fileName,953,36506,3, this);
					row = egl.convertAnyToInt(egl.boxAny(ezert$$129),false);
					egl.setLocalFunctionVariable("row", row, "int");
					egl.atLine(this.eze$$fileName,954,36556,1459, this);
					if ( ((row > 0) && (this.selectionMode != 0)) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,955,36635,1150, this);
							if ( (this.selectionMode == 1) ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,956,36705,19, this);
									this.setAllDeselected();
									egl.atLine(this.eze$$fileName,957,36745,34, this);
									this.util.setSelected(egl.unboxAny(egl.boxAny(egl.checkNull(this.data, "data")[this.data.checkIndex((row)-1)])), true );
								}finally{egl.exitBlock();}
							}
							else {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,959,36821,901, this);
									if ( (e.ctrlKey || e.metaKey) ) {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,960,36875,27, this);
											var ezert$$130 = false;
											ezert$$130 = this.util.getSelected(egl.unboxAny(egl.boxAny(egl.checkNull(this.data, "data")[this.data.checkIndex((row)-1)])) );
											egl.atLine(this.eze$$fileName,960,36872,215, this);
											if ( ezert$$130 ) {
												try{egl.enterBlock();
													egl.atLine(this.eze$$fileName,961,36932,35, this);
													this.util.setSelected(egl.unboxAny(egl.boxAny(egl.checkNull(this.data, "data")[this.data.checkIndex((row)-1)])), false );
												}finally{egl.exitBlock();}
											}
											else {
												try{egl.enterBlock();
													egl.atLine(this.eze$$fileName,963,37025,34, this);
													this.util.setSelected(egl.unboxAny(egl.boxAny(egl.checkNull(this.data, "data")[this.data.checkIndex((row)-1)])), true );
												}finally{egl.exitBlock();}
											}
										}finally{egl.exitBlock();}
									}
									else {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,966,37137,561, this);
											if ( (e.shiftKey && (this.lastSelectedRow > 0)) ) {
												try{egl.enterBlock();
													egl.atLine(this.eze$$fileName,967,37203,19, this);
													this.setAllDeselected();
													var start = 0;
													egl.addLocalFunctionVariable("start", start, "int", "start");
													egl.atLine(this.eze$$fileName,968,37263,33, this);
													var ezert$$131 = 0;
													ezert$$131 = Math.min( row ,this.lastSelectedRow );
													egl.atLine(this.eze$$fileName,968,37251,5, this);
													start = ezert$$131;
													egl.setLocalFunctionVariable("start", start, "int");
													var finish = 0;
													egl.addLocalFunctionVariable("finish", finish, "int", "finish");
													egl.atLine(this.eze$$fileName,969,37339,33, this);
													var ezert$$132 = 0;
													ezert$$132 = Math.max( row ,this.lastSelectedRow );
													egl.atLine(this.eze$$fileName,969,37326,6, this);
													finish = ezert$$132;
													egl.setLocalFunctionVariable("finish", finish, "int");
													egl.atLine(this.eze$$fileName,970,37402,128, this);
													{
														try{egl.enterBlock();
															var n = 0;
															egl.addLocalFunctionVariable("n", n, "int", "n");
															n = start;
															egl.setLocalFunctionVariable("n", n, "int");
															for ( ; (n <= finish); n = (n + 1) )
															{
																egl.setLocalFunctionVariable("n", n, "int");
																try{egl.enterBlock();
																	egl.atLine(this.eze$$fileName,971,37466,32, this);
																	this.util.setSelected(egl.unboxAny(egl.boxAny(egl.checkNull(this.data, "data")[this.data.checkIndex((n)-1)])), true );
																}finally{egl.exitBlock();}
																egl.atLine(this.eze$$fileName,970,37402,128, this);
															}
														}finally{egl.exitBlock();}
													}
												}finally{egl.exitBlock();}
											}
											else {
												try{egl.enterBlock();
													egl.atLine(this.eze$$fileName,974,37588,19, this);
													this.setAllDeselected();
													egl.atLine(this.eze$$fileName,975,37636,34, this);
													this.util.setSelected(egl.unboxAny(egl.boxAny(egl.checkNull(this.data, "data")[this.data.checkIndex((row)-1)])), true );
												}finally{egl.exitBlock();}
											}
										}finally{egl.exitBlock();}
									}
									egl.atLine(this.eze$$fileName,978,37743,22, this);
									this.lastSelectedRow = row;
								}finally{egl.exitBlock();}
							}
							egl.atLine(this.eze$$fileName,980,37802,19, this);
							this.updateHighlights();
							egl.atLine(this.eze$$fileName,981,37838,33, this);
							this.notifySelectionChangeListeners();
						}finally{egl.exitBlock();}
					}
					else {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,983,37905,94, this);
							if ( ((row == 0) && this.enableSorting) ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,984,37960,19, this);
									this.sortColumn(widget );
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,946,36195,1840, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"notifySelectionChangeListeners": function() {
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
		try { egl.enter("notifySelectionChangeListeners",this,arguments,eze$$updater);
			egl.atLine(this.eze$$fileName,991,38098,99, this);
			{
				try{egl.enterBlock();
					var k = 0;
					egl.addLocalFunctionVariable("k", k, "int", "k");
					k = 1;
					egl.setLocalFunctionVariable("k", k, "int");
					for ( ; (k <= this.selectionListeners.getSize()); k = (k + 1) )
					{
						egl.setLocalFunctionVariable("k", k, "int");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,992,38157,28, this);
							egl.checkNull(this.selectionListeners, "selectionListeners")[this.selectionListeners.checkIndex((k)-1)]( this );
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,991,38098,99, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,990,38041,170, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setAllDeselected": function() {
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
		try { egl.enter("setAllDeselected",this,arguments,eze$$updater);
			var count = 0;
			egl.addLocalFunctionVariable("count", count, "int", "count");
			egl.atLine(this.eze$$fileName,997,38264,14, this);
			var ezert$$133 = 0;
			ezert$$133 = this.data.getSize();
			egl.atLine(this.eze$$fileName,997,38252,5, this);
			count = ezert$$133;
			egl.setLocalFunctionVariable("count", count, "int");
			egl.atLine(this.eze$$fileName,998,38288,168, this);
			{
				try{egl.enterBlock();
					var n = 0;
					egl.addLocalFunctionVariable("n", n, "int", "n");
					n = 1;
					egl.setLocalFunctionVariable("n", n, "int");
					for ( ; (n <= count); n = (n + 1) )
					{
						egl.setLocalFunctionVariable("n", n, "int");
						try{egl.enterBlock();
							var object = null;
							egl.addLocalFunctionVariable("object", object, "any", "object");
							egl.atLine(this.eze$$fileName,999,38327,6, this);
							object = egl.boxAny(egl.checkNull(this.data, "data")[this.data.checkIndex((n)-1)]);
							egl.setLocalFunctionVariable("object", object, "any");
							egl.atLine(this.eze$$fileName,1000,38361,83, this);
							if ( (object != null) ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,1001,38396,32, this);
									this.util.setSelected(egl.unboxAny(object), false );
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,998,38288,168, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,996,38214,247, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"deselectAll": function() {
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
		try { egl.enter("deselectAll",this,arguments,eze$$updater);
			egl.atLine(this.eze$$fileName,1007,38496,19, this);
			this.setAllDeselected();
			egl.atLine(this.eze$$fileName,1008,38521,19, this);
			this.updateHighlights();
			egl.atLine(this.eze$$fileName,1009,38550,33, this);
			this.notifySelectionChangeListeners();
			egl.atLine(this.eze$$fileName,1006,38468,123, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setAllSelected": function() {
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
		try { egl.enter("setAllSelected",this,arguments,eze$$updater);
			var count = 0;
			egl.addLocalFunctionVariable("count", count, "int", "count");
			egl.atLine(this.eze$$fileName,1013,38652,14, this);
			var ezert$$134 = 0;
			ezert$$134 = this.data.getSize();
			egl.atLine(this.eze$$fileName,1013,38640,5, this);
			count = ezert$$134;
			egl.setLocalFunctionVariable("count", count, "int");
			egl.atLine(this.eze$$fileName,1014,38676,167, this);
			{
				try{egl.enterBlock();
					var n = 0;
					egl.addLocalFunctionVariable("n", n, "int", "n");
					n = 1;
					egl.setLocalFunctionVariable("n", n, "int");
					for ( ; (n <= count); n = (n + 1) )
					{
						egl.setLocalFunctionVariable("n", n, "int");
						try{egl.enterBlock();
							var object = null;
							egl.addLocalFunctionVariable("object", object, "any", "object");
							egl.atLine(this.eze$$fileName,1015,38715,6, this);
							object = egl.boxAny(egl.checkNull(this.data, "data")[this.data.checkIndex((n)-1)]);
							egl.setLocalFunctionVariable("object", object, "any");
							egl.atLine(this.eze$$fileName,1016,38749,82, this);
							if ( (object != null) ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,1017,38784,31, this);
									this.util.setSelected(egl.unboxAny(object), true );
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,1014,38676,167, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,1012,38601,250, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"selectAll": function() {
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
		try { egl.enter("selectAll",this,arguments,eze$$updater);
			egl.atLine(this.eze$$fileName,1023,38886,17, this);
			this.setAllSelected();
			egl.atLine(this.eze$$fileName,1024,38912,19, this);
			this.updateHighlights();
			egl.atLine(this.eze$$fileName,1025,38940,33, this);
			this.notifySelectionChangeListeners();
			egl.atLine(this.eze$$fileName,1022,38857,124, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"addClass": function( widget, ezekw$$class ) {
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
		try { egl.enter("addClass",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("widget", widget, "egl.ui.rui.Widget", "widget");
			egl.addLocalFunctionVariable("class", ezekw$$class, "string", "ezekw$$class");
			egl.atLine(this.eze$$fileName,1029,39056,27, this);
			this.removeClass(widget, ezekw$$class );
			egl.atLine(this.eze$$fileName,1030,39092,28, this);
			widget.setClass( (widget.getClass() + (" " + ezekw$$class)) );
			egl.atLine(this.eze$$fileName,1028,38987,141, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"removeClass": function( widget, ezekw$$class ) {
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
		try { egl.enter("removeClass",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("widget", widget, "egl.ui.rui.Widget", "widget");
			egl.addLocalFunctionVariable("class", ezekw$$class, "string", "ezekw$$class");
			var s = "";
			egl.addLocalFunctionVariable("s", s, "string", "s");
			egl.atLine(this.eze$$fileName,1034,39206,1, this);
			s = widget.getClass();
			egl.setLocalFunctionVariable("s", s, "string");
			var index = 0;
			egl.addLocalFunctionVariable("index", index, "int", "index");
			egl.atLine(this.eze$$fileName,1035,39251,24, this);
			var ezert$$135 = 0;
			ezert$$135 = egl.egl.core.$StrLib.indexOf( s, ezekw$$class);
			egl.setLocalFunctionVariable("s", s, "string");
			egl.atLine(this.eze$$fileName,1035,39239,5, this);
			index = ezert$$135;
			egl.setLocalFunctionVariable("index", index, "int");
			var ml = 0;
			egl.addLocalFunctionVariable("ml", ml, "int", "ml");
			egl.atLine(this.eze$$fileName,1036,39294,26, this);
			var ezert$$136 = 0;
			ezert$$136 = egl.egl.core.$StrLib.textLen( ezekw$$class);
			egl.atLine(this.eze$$fileName,1036,39285,2, this);
			ml = ezert$$136;
			egl.setLocalFunctionVariable("ml", ml, "int");
			var sl = 0;
			egl.addLocalFunctionVariable("sl", sl, "int", "sl");
			egl.atLine(this.eze$$fileName,1037,39339,22, this);
			var ezert$$137 = 0;
			ezert$$137 = egl.egl.core.$StrLib.textLen( s);
			egl.atLine(this.eze$$fileName,1037,39330,2, this);
			sl = ezert$$137;
			egl.setLocalFunctionVariable("sl", sl, "int");
			var prefix = "";
			egl.addLocalFunctionVariable("prefix", prefix, "string", "prefix");
			egl.atLine(this.eze$$fileName,1038,39371,6, this);
			prefix = "";
			egl.setLocalFunctionVariable("prefix", prefix, "string");
			var postfix = "";
			egl.addLocalFunctionVariable("postfix", postfix, "string", "postfix");
			egl.atLine(this.eze$$fileName,1039,39399,7, this);
			postfix = "";
			egl.setLocalFunctionVariable("postfix", postfix, "string");
			egl.atLine(this.eze$$fileName,1040,39428,235, this);
			if ( (index > 0) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,1041,39460,65, this);
					if ( (index > 1) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,1042,39486,26, this);
							prefix = s.substring( 1-1,(index - 1));
							egl.setLocalFunctionVariable("prefix", prefix, "string");
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,1044,39535,75, this);
					if ( ((index + ml) < sl) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,1045,39567,30, this);
							postfix = s.substring( (index + ml)-1,sl);
							egl.setLocalFunctionVariable("postfix", postfix, "string");
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,1047,39620,31, this);
					widget.setClass( (prefix + postfix) );
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,1033,39134,537, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setSelection": function( selection ) {
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
		try { egl.enter("setSelection",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("selection", selection, "any[]", "!selection");
			egl.atLine(this.eze$$fileName,1052,39727,82, this);
			if ( (this.selectionMode == 0) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,1053,39790,7, this);
					{ if (!egl.debugg) egl.leave(); return;}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,1055,39818,19, this);
			this.setAllDeselected();
			var len = 0;
			egl.addLocalFunctionVariable("len", len, "int", "len");
			egl.atLine(this.eze$$fileName,1056,39856,19, this);
			var ezert$$138 = 0;
			ezert$$138 = selection.getSize();
			egl.atLine(this.eze$$fileName,1056,39846,3, this);
			len = ezert$$138;
			egl.setLocalFunctionVariable("len", len, "int");
			egl.atLine(this.eze$$fileName,1057,39885,82, this);
			if ( (this.selectionMode == 1) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,1058,39947,8, this);
					len = 1;
					egl.setLocalFunctionVariable("len", len, "int");
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,1060,39976,86, this);
			{
				try{egl.enterBlock();
					var n = 0;
					egl.addLocalFunctionVariable("n", n, "int", "n");
					n = 1;
					egl.setLocalFunctionVariable("n", n, "int");
					for ( ; (n <= len); n = (n + 1) )
					{
						egl.setLocalFunctionVariable("n", n, "int");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,1061,40013,37, this);
							this.util.setSelected(egl.unboxAny(egl.boxAny(egl.checkNull(selection, "selection")[selection.checkIndex((n)-1)])), true );
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,1060,39976,86, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,1063,40071,19, this);
			this.updateHighlights();
			egl.atLine(this.eze$$fileName,1064,40099,33, this);
			this.notifySelectionChangeListeners();
			egl.atLine(this.eze$$fileName,1051,39677,463, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getSelection": function() {
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
		try { egl.enter("getSelection",this,arguments,eze$$updater);
			var $result = null;
			var result = (function(){ var ezert$$139= []; ezert$$139.setType( "A;" );for (var i=0; i < 0; i++) {
					ezert$$139[ i ] = null;
				}
				// no max size set for this array
			return ezert$$139;})();
			egl.addLocalFunctionVariable("result", result, "any[]", "!result");
			var count = 0;
			egl.addLocalFunctionVariable("count", count, "int", "count");
			egl.atLine(this.eze$$fileName,1069,40228,14, this);
			var ezert$$140 = 0;
			ezert$$140 = this.data.getSize();
			egl.atLine(this.eze$$fileName,1069,40216,5, this);
			count = ezert$$140;
			egl.setLocalFunctionVariable("count", count, "int");
			egl.atLine(this.eze$$fileName,1070,40252,143, this);
			{
				try{egl.enterBlock();
					var n = 0;
					egl.addLocalFunctionVariable("n", n, "int", "n");
					n = 1;
					egl.setLocalFunctionVariable("n", n, "int");
					for ( ; (n <= count); n = (n + 1) )
					{
						egl.setLocalFunctionVariable("n", n, "int");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,1071,40294,25, this);
							var ezert$$141 = false;
							ezert$$141 = this.util.getSelected(egl.unboxAny(egl.boxAny(egl.checkNull(this.data, "data")[this.data.checkIndex((n)-1)])) );
							egl.atLine(this.eze$$fileName,1071,40291,92, this);
							if ( ezert$$141 ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,1072,40337,30, this);
									result.appendElement( egl.boxAny(egl.checkNull(this.data, "data")[this.data.checkIndex((n)-1)]) );
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,1070,40252,143, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,1075,40404,15, this);
			$result = result;
			egl.setLocalFunctionVariable("ANY[]", $result, "any[]");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setEnableSorting": function( value ) {
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
		try { egl.enter("setEnableSorting",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("value", value, "boolean", "value");
			egl.atLine(this.eze$$fileName,1087,40702,22, this);
			this.enableSorting = value;
			var columnCount = 0;
			egl.addLocalFunctionVariable("columnCount", columnCount, "int", "columnCount");
			egl.atLine(this.eze$$fileName,1088,40751,17, this);
			var ezert$$142 = 0;
			ezert$$142 = this.columns.getSize();
			egl.atLine(this.eze$$fileName,1088,40733,11, this);
			columnCount = ezert$$142;
			egl.setLocalFunctionVariable("columnCount", columnCount, "int");
			egl.atLine(this.eze$$fileName,1089,40778,167, this);
			{
				try{egl.enterBlock();
					var column = 0;
					egl.addLocalFunctionVariable("column", column, "int", "column");
					column = 1;
					egl.setLocalFunctionVariable("column", column, "int");
					for ( ; (column <= columnCount); column = (column + 1) )
					{
						egl.setLocalFunctionVariable("column", column, "int");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,1090,40828,38, this);
							egl.checkNull(egl.checkNull(this.columns, "columns")[this.columns.checkIndex((column)-1)], "columns[column]").enableSorting = value;
							egl.atLine(this.eze$$fileName,1091,40879,54, this);
							egl.checkNull(egl.checkNull(this.columns, "columns")[this.columns.checkIndex((column)-1)], "columns[column]").sortDirection = 0;
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,1089,40778,167, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,1086,40650,303, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getEnableSorting": function() {
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
		try { egl.enter("getEnableSorting",this,arguments,eze$$updater);
			var $result = false;
			egl.atLine(this.eze$$fileName,1096,41012,22, this);
			$result = this.enableSorting;
			egl.setLocalFunctionVariable("BOOLEAN", $result, "boolean");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"sortColumn": function( widget ) {
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
		try { egl.enter("sortColumn",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("widget", widget, "egl.ui.rui.Widget", "widget");
			var column = 0;
			egl.addLocalFunctionVariable("column", column, "int", "column");
			egl.atLine(this.eze$$fileName,1100,41115,29, this);
			var ezert$$143 = null;
			ezert$$143 = widget.getAttribute("column" );
			egl.atLine(this.eze$$fileName,1100,41102,6, this);
			column = egl.convertAnyToInt(egl.boxAny(ezert$$143),false);
			egl.setLocalFunctionVariable("column", column, "int");
			egl.atLine(this.eze$$fileName,1101,41154,154, this);
			while ( ((column == 0) && (widget.getClass() != "EglRuiDataGrid")) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,1102,41221,23, this);
					widget = widget.getParent();
					egl.setLocalFunctionVariable("widget", widget, "egl.ui.rui.Widget");
					egl.atLine(this.eze$$fileName,1103,41266,29, this);
					var ezert$$144 = null;
					ezert$$144 = widget.getAttribute("column" );
					egl.atLine(this.eze$$fileName,1103,41257,39, this);
					column = egl.convertAnyToInt(egl.boxAny(ezert$$144),false);
					egl.setLocalFunctionVariable("column", column, "int");
				}finally{egl.exitBlock();}
				egl.atLine(this.eze$$fileName,1101,41154,154, this);
			}
			egl.atLine(this.eze$$fileName,1105,41317,1179, this);
			if ( ((column != 0) && egl.checkNull(egl.checkNull(this.columns, "columns")[this.columns.checkIndex((column)-1)], "columns[column]").enableSorting) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,1106,41390,22, this);
					this.sortedColumn = column;
					egl.atLine(this.eze$$fileName,1107,41425,156, this);
					{
						try{egl.enterBlock();
							var n = 0;
							egl.addLocalFunctionVariable("n", n, "int", "n");
							n = 1;
							egl.setLocalFunctionVariable("n", n, "int");
							for ( ; (n <= this.columns.getSize()); n = (n + 1) )
							{
								egl.setLocalFunctionVariable("n", n, "int");
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,1108,41480,85, this);
									if ( (n != column) ) {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,1109,41516,29, this);
											egl.checkNull(egl.checkNull(this.columns, "columns")[this.columns.checkIndex((n)-1)], "columns[n]").sortDirection = 0;
										}finally{egl.exitBlock();}
									}
								}finally{egl.exitBlock();}
								egl.atLine(this.eze$$fileName,1107,41425,156, this);
							}
						}finally{egl.exitBlock();}
					}
					var c = null;
					egl.addLocalFunctionVariable("c", c, "com.ibm.egl.rui.widgets.DataGridColumn", "c");
					egl.atLine(this.eze$$fileName,1112,41594,1, this);
					c = egl.checkNull(this.columns, "columns")[this.columns.checkIndex((column)-1)];
					egl.setLocalFunctionVariable("c", c, "com.ibm.egl.rui.widgets.DataGridColumn");
					egl.atLine(this.eze$$fileName,1113,41654,187, this);
					if ( (egl.checkNull(c, "c").sortDirection == 0) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,1114,41715,38, this);
							egl.checkNull(c, "c").sortDirection = 2;
						}finally{egl.exitBlock();}
					}
					else {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,1116,41787,38, this);
							egl.checkNull(c, "c").sortDirection = (3 - egl.checkNull(c, "c").sortDirection);
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,1118,41854,627, this);
					try {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,1119,41871,303, this);
							if ( (egl.checkNull(c, "c").columnComparator != null) ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,1120,41926,97, this);
									var ezert$$145 = null;
									ezert$$145 = egl.boxElements(this.util.sort(egl.unboxElements(this.data, "1A;"), egl.checkNull(c, "c").name, (egl.checkNull(c, "c").sortDirection == 2), egl.checkNull(c, "c").ignoreCase, function() {
										var ezert$$146 = null;
										
										ezert$$146 = egl.checkNull(c, "c").columnComparator;
									; return ezert$$146;}.call(this) ));
									egl.atLine(this.eze$$fileName,1120,41919,105, this);
									this.data = ezert$$145;
								}finally{egl.exitBlock();}
							}
							else {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,1122,42070,83, this);
									var ezert$$147 = null;
									ezert$$147 = egl.boxElements(this.util.sort(egl.unboxElements(this.data, "1A;"), egl.checkNull(c, "c").name, (egl.checkNull(c, "c").sortDirection == 2), egl.checkNull(c, "c").ignoreCase, null ));
									egl.atLine(this.eze$$fileName,1122,42063,91, this);
									this.data = ezert$$147;
								}finally{egl.exitBlock();}
							}
							egl.atLine(this.eze$$fileName,1124,42191,9, this);
							this.render();
							egl.atLine(this.eze$$fileName,1125,42217,108, this);
							{
								try{egl.enterBlock();
									var k = 0;
									egl.addLocalFunctionVariable("k", k, "int", "k");
									k = 1;
									egl.setLocalFunctionVariable("k", k, "int");
									for ( ; (k <= this.sortListeners.getSize()); k = (k + 1) )
									{
										egl.setLocalFunctionVariable("k", k, "int");
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,1126,42279,26, this);
											egl.checkNull(this.sortListeners, "sortListeners")[this.sortListeners.checkIndex((k)-1)]( this, c );
										}finally{egl.exitBlock();}
										egl.atLine(this.eze$$fileName,1125,42217,108, this);
									}
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
					}
					catch ( ezert$$148 )
					{
						{
							if (ezert$$148 instanceof egl.egl.debug.DebugTermination){throw ezert$$148;}
							if (!(ezert$$148 instanceof egl.egl.core.AnyException)) {
								ezert$$148 = egl.makeExceptionFromCaughtObject(ezert$$148);
							}
							var e = ezert$$148;
							try{egl.enterBlock();
								egl.addLocalFunctionVariable("e", e, "egl.core.AnyException", "e");
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,1129,42382,83, this);
									throw (function () {
										var ezert$$149 = egl.createRuntimeException();
										egl.atLine(this.eze$$fileName,1129,42410,53, this);
										egl.checkNull(ezert$$149, "ezert$$149").message = ((("Sort fail " + egl.checkNull(e, "e").messageID) + " : ") + egl.checkNull(e, "e").message);
										return ezert$$149;
									}).call(this);
								}finally{egl.exitBlock();}
							}finally{egl.exitBlock();}
						}
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,1099,41048,1456, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"layout": function() {
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
		try { egl.enter("layout",this,arguments,eze$$updater);
			egl.atLine(this.eze$$fileName,1141,42704,19, this);
			this.setData(this.data );
			egl.atLine(this.eze$$fileName,1140,42678,53, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getData": function() {
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
		try { egl.enter("getData",this,arguments,eze$$updater);
			var $result = null;
			egl.atLine(this.eze$$fileName,1145,42779,18, this);
			$result = this.data;
			egl.setLocalFunctionVariable("ANY[]", $result, "any[]");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getCellWidget": function( e ) {
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
		try { egl.enter("getCellWidget",this,arguments,eze$$updater);
			var $result = null;
			egl.addLocalFunctionVariable("e", e, "egl.ui.rui.Event", "e");
			egl.atLine(this.eze$$fileName,1149,42877,25, this);
			var ezert$$150 = null;
			ezert$$150 = this.util.getOriginalTarget(e );
			egl.atLine(this.eze$$fileName,1149,42870,34, this);
			$result = ezert$$150;
			egl.setLocalFunctionVariable("Widget", $result, "egl.ui.rui.Widget");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getColumn": function( td ) {
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
		try { egl.enter("getColumn",this,arguments,eze$$updater);
			var $result = null;
			egl.addLocalFunctionVariable("td", td, "egl.ui.rui.Widget", "td");
			var column = 0;
			egl.addLocalFunctionVariable("column", column, "int", "column");
			egl.atLine(this.eze$$fileName,1153,42993,25, this);
			var ezert$$151 = null;
			ezert$$151 = td.getAttribute("column" );
			egl.atLine(this.eze$$fileName,1153,42980,6, this);
			column = egl.convertAnyToInt(egl.boxAny(ezert$$151),false);
			egl.setLocalFunctionVariable("column", column, "int");
			egl.atLine(this.eze$$fileName,1154,43033,25, this);
			$result = egl.checkNull(this.columns, "columns")[this.columns.checkIndex((column)-1)];
			egl.setLocalFunctionVariable("DataGridColumn", $result, "com.ibm.egl.rui.widgets.DataGridColumn");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getCell": function( row, fieldName ) {
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
		try { egl.enter("getCell",this,arguments,eze$$updater);
			var $result = null;
			egl.addLocalFunctionVariable("row", row, "int", "row");
			egl.addLocalFunctionVariable("fieldName", fieldName, "string", "fieldName");
			var tds = null;
			egl.addLocalFunctionVariable("tds", tds, "egl.ui.rui.Widget[]", "!tds");
			var ezert$$152 = null;
			ezert$$152 = egl.checkNull(this.grid, "grid").getElementsByTagName("div" );
			egl.atLine(this.eze$$fileName,1158,43153,3, this);
			tds = ezert$$152;
			egl.setLocalFunctionVariable("tds", tds, "egl.ui.rui.Widget[]");
			var count = 0;
			egl.addLocalFunctionVariable("count", count, "int", "count");
			egl.atLine(this.eze$$fileName,1159,43222,13, this);
			var ezert$$153 = 0;
			ezert$$153 = tds.getSize();
			egl.atLine(this.eze$$fileName,1159,43210,5, this);
			count = ezert$$153;
			egl.setLocalFunctionVariable("count", count, "int");
			egl.atLine(this.eze$$fileName,1160,43245,393, this);
			{
				try{egl.enterBlock();
					var n = 0;
					egl.addLocalFunctionVariable("n", n, "int", "n");
					n = 1;
					egl.setLocalFunctionVariable("n", n, "int");
					for ( ; (n <= count); n = (n + 1) )
					{
						egl.setLocalFunctionVariable("n", n, "int");
						try{egl.enterBlock();
							var rowNum = 0;
							egl.addLocalFunctionVariable("rowNum", rowNum, "int", "rowNum");
							egl.atLine(this.eze$$fileName,1161,43297,35, this);
							var ezert$$154 = 0;
							ezert$$154 = this.util.getIntAttribute(egl.checkNull(tds, "tds")[tds.checkIndex((n)-1)], "row" );
							egl.atLine(this.eze$$fileName,1161,43284,6, this);
							rowNum = ezert$$154;
							egl.setLocalFunctionVariable("rowNum", rowNum, "int");
							var columnNum = 0;
							egl.addLocalFunctionVariable("columnNum", columnNum, "int", "columnNum");
							egl.atLine(this.eze$$fileName,1162,43362,38, this);
							var ezert$$155 = 0;
							ezert$$155 = this.util.getIntAttribute(egl.checkNull(tds, "tds")[tds.checkIndex((n)-1)], "column" );
							egl.atLine(this.eze$$fileName,1162,43346,9, this);
							columnNum = ezert$$155;
							egl.setLocalFunctionVariable("columnNum", columnNum, "int");
							var eze_Cond_Temp_7 = false;
							egl.atLine(this.eze$$fileName,1163,43417,92, this);
							if ( ((rowNum == row) && (columnNum > 0)) ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,1164,43492,17, this);
									var ezert$$156 = 0;
									ezert$$156 = this.columns.getSize();
									egl.atLine(this.eze$$fileName,1163,43417,92, this);
									if ( (columnNum <= ezert$$156) ) {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,1163,43417,92, this);
											eze_Cond_Temp_7 = true;
										}finally{egl.exitBlock();}
									}
									else {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,1163,43417,92, this);
											eze_Cond_Temp_7 = false;
										}finally{egl.exitBlock();}
									}
								}finally{egl.exitBlock();}
							}
							else {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,1163,43417,92, this);
									eze_Cond_Temp_7 = false;
								}finally{egl.exitBlock();}
							}
							egl.atLine(this.eze$$fileName,1163,43414,212, this);
							if ( (eze_Cond_Temp_7 && (egl.checkNull(egl.checkNull(this.columns, "columns")[this.columns.checkIndex((columnNum)-1)], "columns[columnNum]").name == fieldName)) ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,1166,43595,15, this);
									$result = egl.checkNull(tds, "tds")[tds.checkIndex((n)-1)];
									egl.setLocalFunctionVariable("Widget", $result, "egl.ui.rui.Widget");
									{ if (!egl.debugg) egl.leave(); return $result;}
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,1160,43245,393, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,1169,43647,13, this);
			$result = null;
			egl.setLocalFunctionVariable("Widget", $result, "egl.ui.rui.Widget");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getColumns": function() {
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
		try { egl.enter("getColumns",this,arguments,eze$$updater);
			var $result = null;
			egl.atLine(this.eze$$fileName,1173,43722,17, this);
			$result = this.columns;
			egl.setLocalFunctionVariable("DataGridColumn[]", $result, "com.ibm.egl.rui.widgets.DataGridColumn[]");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setColumns": function( columns ) {
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
		try { egl.enter("setColumns",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("columns", columns, "com.ibm.egl.rui.widgets.DataGridColumn[]", "!columns");
			egl.atLine(this.eze$$fileName,1177,43801,23, this);
			this.columns = columns;
			egl.atLine(this.eze$$fileName,1178,43829,9, this);
			this.render();
			egl.atLine(this.eze$$fileName,1176,43748,95, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getShowCheckBoxes": function() {
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
		try { egl.enter("getShowCheckBoxes",this,arguments,eze$$updater);
			var $result = false;
			egl.atLine(this.eze$$fileName,1182,43900,24, this);
			$result = this.showCheckBoxes;
			egl.setLocalFunctionVariable("BOOLEAN", $result, "boolean");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setShowCheckBoxes": function( showCheckBoxes ) {
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
		try { egl.enter("setShowCheckBoxes",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("showCheckBoxes", showCheckBoxes, "boolean", "showCheckBoxes");
			egl.atLine(this.eze$$fileName,1186,44001,37, this);
			this.showCheckBoxes = showCheckBoxes;
			egl.atLine(this.eze$$fileName,1187,44044,9, this);
			this.render();
			egl.atLine(this.eze$$fileName,1185,43942,119, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getShowScrollbar": function() {
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
		try { egl.enter("getShowScrollbar",this,arguments,eze$$updater);
			var $result = false;
			egl.atLine(this.eze$$fileName,1191,44122,23, this);
			$result = this.showScrollbar;
			egl.setLocalFunctionVariable("BOOLEAN", $result, "boolean");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setShowScrollbar": function( showScrollbar ) {
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
		try { egl.enter("setShowScrollbar",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("showScrollbar", showScrollbar, "boolean", "showScrollbar");
			egl.atLine(this.eze$$fileName,1195,44220,35, this);
			this.showScrollbar = showScrollbar;
			egl.atLine(this.eze$$fileName,1196,44261,9, this);
			this.render();
			egl.atLine(this.eze$$fileName,1194,44163,115, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getShowButtonBar": function() {
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
		try { egl.enter("getShowButtonBar",this,arguments,eze$$updater);
			var $result = false;
			egl.atLine(this.eze$$fileName,1200,44339,23, this);
			$result = this.showButtonBar;
			egl.setLocalFunctionVariable("BOOLEAN", $result, "boolean");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setShowButtonBar": function( showButtonBar ) {
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
		try { egl.enter("setShowButtonBar",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("showButtonBar", showButtonBar, "boolean", "showButtonBar");
			egl.atLine(this.eze$$fileName,1204,44437,35, this);
			this.showButtonBar = showButtonBar;
			egl.atLine(this.eze$$fileName,1205,44478,9, this);
			this.render();
			egl.atLine(this.eze$$fileName,1203,44380,115, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getShowHeader": function() {
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
		try { egl.enter("getShowHeader",this,arguments,eze$$updater);
			var $result = false;
			egl.atLine(this.eze$$fileName,1209,44553,20, this);
			$result = this.showHeader;
			egl.setLocalFunctionVariable("BOOLEAN", $result, "boolean");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setShowHeader": function( showHeader ) {
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
		try { egl.enter("setShowHeader",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("showHeader", showHeader, "boolean", "showHeader");
			egl.atLine(this.eze$$fileName,1213,44642,29, this);
			this.showHeader = showHeader;
			egl.atLine(this.eze$$fileName,1214,44677,9, this);
			this.render();
			egl.atLine(this.eze$$fileName,1212,44591,103, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getCellPadding": function() {
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
		try { egl.enter("getCellPadding",this,arguments,eze$$updater);
			var $result = 0;
			egl.atLine(this.eze$$fileName,1218,44749,21, this);
			$result = this.cellPadding;
			egl.setLocalFunctionVariable("INT", $result, "int");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setCellPadding": function( cellPadding ) {
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
		try { egl.enter("setCellPadding",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("cellPadding", cellPadding, "int", "cellPadding");
			egl.atLine(this.eze$$fileName,1222,44837,31, this);
			this.cellPadding = cellPadding;
			egl.atLine(this.eze$$fileName,1223,44874,9, this);
			this.render();
			egl.atLine(this.eze$$fileName,1221,44788,103, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getCellBorder": function() {
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
		try { egl.enter("getCellBorder",this,arguments,eze$$updater);
			var $result = 0;
			egl.atLine(this.eze$$fileName,1227,44945,20, this);
			$result = this.cellBorder;
			egl.setLocalFunctionVariable("INT", $result, "int");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setCellBorder": function( cellBorder ) {
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
		try { egl.enter("setCellBorder",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("cellBorder", cellBorder, "int", "cellBorder");
			egl.atLine(this.eze$$fileName,1231,45030,29, this);
			this.cellBorder = cellBorder;
			egl.atLine(this.eze$$fileName,1232,45065,9, this);
			this.render();
			egl.atLine(this.eze$$fileName,1230,44983,99, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getRowHeight": function() {
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
		try { egl.enter("getRowHeight",this,arguments,eze$$updater);
			var $result = 0;
			egl.atLine(this.eze$$fileName,1236,45135,19, this);
			$result = this.rowHeight;
			egl.setLocalFunctionVariable("INT", $result, "int");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setrowHeight": function( rowHeight ) {
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
		try { egl.enter("setrowHeight",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("rowHeight", rowHeight, "int", "rowHeight");
			egl.atLine(this.eze$$fileName,1240,45217,27, this);
			this.rowHeight = rowHeight;
			egl.atLine(this.eze$$fileName,1241,45250,9, this);
			this.render();
			egl.atLine(this.eze$$fileName,1239,45172,95, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getCheckBoxWidth": function() {
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
		try { egl.enter("getCheckBoxWidth",this,arguments,eze$$updater);
			var $result = 0;
			egl.atLine(this.eze$$fileName,1245,45324,23, this);
			$result = this.checkBoxWidth;
			egl.setLocalFunctionVariable("INT", $result, "int");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setCheckBoxWidth": function( checkBoxWidth ) {
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
		try { egl.enter("setCheckBoxWidth",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("checkBoxWidth", checkBoxWidth, "int", "checkBoxWidth");
			egl.atLine(this.eze$$fileName,1249,45418,35, this);
			this.checkBoxWidth = checkBoxWidth;
			egl.atLine(this.eze$$fileName,1250,45459,9, this);
			this.render();
			egl.atLine(this.eze$$fileName,1248,45365,111, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getStartRow": function() {
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
		try { egl.enter("getStartRow",this,arguments,eze$$updater);
			var $result = 0;
			egl.atLine(this.eze$$fileName,1254,45528,18, this);
			$result = this.startRow;
			egl.setLocalFunctionVariable("INT", $result, "int");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setStartRow": function( startRow ) {
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
		try { egl.enter("setStartRow",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("startRow", startRow, "int", "startRow");
			egl.atLine(this.eze$$fileName,1258,45607,25, this);
			this.startRow = startRow;
			var page = 0;
			egl.addLocalFunctionVariable("page", page, "int", "page");
			egl.atLine(this.eze$$fileName,1259,45638,4, this);
			page = egl.convertDecimalToInt(new egl.javascript.BigDecimal(egl.divide((startRow - 1), this.pageSize)),egl.createRuntimeException);
			egl.setLocalFunctionVariable("page", page, "int");
			egl.atLine(this.eze$$fileName,1260,45679,28, this);
			this._startRow = ((page * this.pageSize) + 1);
			egl.atLine(this.eze$$fileName,1261,45713,9, this);
			this.render();
			egl.atLine(this.eze$$fileName,1257,45564,166, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getPageSize": function() {
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
		try { egl.enter("getPageSize",this,arguments,eze$$updater);
			var $result = 0;
			egl.atLine(this.eze$$fileName,1265,45782,18, this);
			$result = this.pageSize;
			egl.setLocalFunctionVariable("INT", $result, "int");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setPageSize": function( pageSize ) {
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
		try { egl.enter("setPageSize",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("pageSize", pageSize, "int", "pageSize");
			egl.atLine(this.eze$$fileName,1269,45861,25, this);
			this.pageSize = pageSize;
			egl.atLine(this.eze$$fileName,1270,45892,27, this);
			this.setStartRow(this.startRow );
			egl.atLine(this.eze$$fileName,1268,45818,109, this);
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
			egl.atLine(this.eze$$fileName,1274,46017,53, this);
			this.reverseTextDirectionThis = reverseTextDirection;
			egl.atLine(this.eze$$fileName,1275,46079,9, this);
			this.render();
			egl.atLine(this.eze$$fileName,1273,45933,163, this);
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
			egl.atLine(this.eze$$fileName,1279,46172,38, this);
			$result = this.reverseTextDirectionThis;
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
			egl.atLine(this.eze$$fileName,1283,46288,33, this);
			this.textLayoutThis = textLayout;
			egl.atLine(this.eze$$fileName,1284,46326,9, this);
			this.render();
			egl.atLine(this.eze$$fileName,1282,46224,119, this);
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
			egl.atLine(this.eze$$fileName,1288,46409,28, this);
			$result = this.textLayoutThis;
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
			egl.atLine(this.eze$$fileName,1292,46530,43, this);
			egl.checkNull(this.ui, "ui").setWidgetOrientation(widgetOrientation );
			egl.atLine(this.eze$$fileName,1293,46576,46, this);
			if ( (egl.checkNull(this.grid, "grid").getInnerHTML() != null) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,1294,46607,9, this);
					this.render();
				}finally{egl.exitBlock();}
			}
			;
			egl.atLine(this.eze$$fileName,1291,46455,173, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"toString": function() {
		return "[DataGrid]";
	}
	,
	"eze$$getName": function() {
		return "DataGrid";
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
		{name: "DataGridLib", value : egl.com.ibm.egl.rui.widgets.DataGridLib['$inst'], type : "com.ibm.egl.rui.widgets.DataGridLib", jsName : "egl.com.ibm.egl.rui.widgets.DataGridLib.$inst"},
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
		{name: "RUIDataGridID", value : eze$$parent.RUIDataGridID, type : "string", jsName : "RUIDataGridID"},
		{name: "data", value : function(){try{return eze$$parent.getData();}catch(e){return null;}}(), type : "any[]", jsName : "!data", getter : "getData", setter : "setData"},
		{name: "internalID", value : eze$$parent.internalID, type : "string", jsName : "internalID"},
		{name: "util", value : eze$$parent.util, type : "com.ibm.egl.rui.widgets.DataGridUtil", jsName : "util"},
		{name: "pagingLabel", value : eze$$parent.pagingLabel, type : "string", jsName : "pagingLabel"},
		{name: "grid", value : eze$$parent.grid, type : "com.ibm.egl.rui.widgets.Div", jsName : "grid"},
		{name: "gotoStartButton", value : eze$$parent.gotoStartButton, type : "com.ibm.egl.rui.widgets.Button", jsName : "gotoStartButton"},
		{name: "gotoPageBackButton", value : eze$$parent.gotoPageBackButton, type : "com.ibm.egl.rui.widgets.Button", jsName : "gotoPageBackButton"},
		{name: "pageTextLabel", value : eze$$parent.pageTextLabel, type : "com.ibm.egl.rui.widgets.HTML", jsName : "pageTextLabel"},
		{name: "gotoPageForwardButton", value : eze$$parent.gotoPageForwardButton, type : "com.ibm.egl.rui.widgets.Button", jsName : "gotoPageForwardButton"},
		{name: "gotoEndButton", value : eze$$parent.gotoEndButton, type : "com.ibm.egl.rui.widgets.Button", jsName : "gotoEndButton"},
		{name: "buttonBar", value : eze$$parent.buttonBar, type : "com.ibm.egl.rui.widgets.Box", jsName : "buttonBar"},
		{name: "ui", value : eze$$parent.ui, type : "com.ibm.egl.rui.widgets.Box", jsName : "ui"},
		{name: "columns", value : function(){try{return eze$$parent.getColumns();}catch(e){return null;}}(), type : "com.ibm.egl.rui.widgets.DataGridColumn[]", jsName : "!columns", getter : "getColumns", setter : "setColumns"},
		{name: "behaviors", value : eze$$parent.behaviors, type : "com.ibm.egl.rui.widgets.DataCellBehavior[]", jsName : "!behaviors"},
		{name: "headerBehaviors", value : eze$$parent.headerBehaviors, type : "com.ibm.egl.rui.widgets.DataCellBehavior[]", jsName : "!headerBehaviors"},
		{name: "editorBehaviors", value : eze$$parent.editorBehaviors, type : "com.ibm.egl.rui.widgets.EditorBehavior[]", jsName : "!editorBehaviors"},
		{name: "selection", value : function(){try{return eze$$parent.getSelection();}catch(e){return null;}}(), type : "any[]", jsName : "!selection", getter : "getSelection", setter : "setSelection"},
		{name: "checked", value : function(){try{return eze$$parent.getChecked();}catch(e){return null;}}(), type : "any[]", jsName : "!checked", getter : "getChecked", setter : "setChecked"},
		{name: "showCheckBoxes", value : function(){try{return eze$$parent.getShowCheckBoxes();}catch(e){return null;}}(), type : "boolean", jsName : "showCheckBoxes", getter : "getShowCheckBoxes", setter : "setShowCheckBoxes"},
		{name: "showScrollbar", value : function(){try{return eze$$parent.getShowScrollbar();}catch(e){return null;}}(), type : "boolean", jsName : "showScrollbar", getter : "getShowScrollbar", setter : "setShowScrollbar"},
		{name: "selectionMode", value : function(){try{return eze$$parent.getSelectionMode();}catch(e){return null;}}(), type : "int", jsName : "selectionMode", getter : "getSelectionMode", setter : "setSelectionMode"},
		{name: "enableSorting", value : function(){try{return eze$$parent.getEnableSorting();}catch(e){return null;}}(), type : "boolean", jsName : "enableSorting", getter : "getEnableSorting", setter : "setEnableSorting"},
		{name: "showButtonBar", value : function(){try{return eze$$parent.getShowButtonBar();}catch(e){return null;}}(), type : "boolean", jsName : "showButtonBar", getter : "getShowButtonBar", setter : "setShowButtonBar"},
		{name: "showHeader", value : function(){try{return eze$$parent.getShowHeader();}catch(e){return null;}}(), type : "boolean", jsName : "showHeader", getter : "getShowHeader", setter : "setShowHeader"},
		{name: "pageChangeListeners", value : eze$$parent.pageChangeListeners, type : "com.ibm.egl.rui.widgets.PageChangeListener[]", jsName : "!pageChangeListeners"},
		{name: "selectionListeners", value : eze$$parent.selectionListeners, type : "com.ibm.egl.rui.widgets.SelectionListener[]", jsName : "!selectionListeners"},
		{name: "checkboxListeners", value : eze$$parent.checkboxListeners, type : "com.ibm.egl.rui.widgets.CheckboxListener[]", jsName : "!checkboxListeners"},
		{name: "sortListeners", value : eze$$parent.sortListeners, type : "com.ibm.egl.rui.widgets.SortListener[]", jsName : "!sortListeners"},
		{name: "cellPadding", value : function(){try{return eze$$parent.getCellPadding();}catch(e){return null;}}(), type : "int", jsName : "cellPadding", getter : "getCellPadding", setter : "setCellPadding"},
		{name: "cellBorder", value : function(){try{return eze$$parent.getCellBorder();}catch(e){return null;}}(), type : "int", jsName : "cellBorder", getter : "getCellBorder", setter : "setCellBorder"},
		{name: "rowHeight", value : function(){try{return eze$$parent.getRowHeight();}catch(e){return null;}}(), type : "int", jsName : "rowHeight", getter : "getRowHeight", setter : "setrowHeight"},
		{name: "checkBoxWidth", value : function(){try{return eze$$parent.getCheckBoxWidth();}catch(e){return null;}}(), type : "int", jsName : "checkBoxWidth", getter : "getCheckBoxWidth", setter : "setCheckBoxWidth"},
		{name: "startRow", value : function(){try{return eze$$parent.getStartRow();}catch(e){return null;}}(), type : "int", jsName : "startRow", getter : "getStartRow", setter : "setStartRow"},
		{name: "_startRow", value : eze$$parent._startRow, type : "int", jsName : "_startRow"},
		{name: "lastStartRow", value : eze$$parent.lastStartRow, type : "int", jsName : "lastStartRow"},
		{name: "pageSize", value : function(){try{return eze$$parent.getPageSize();}catch(e){return null;}}(), type : "int", jsName : "pageSize", getter : "getPageSize", setter : "setPageSize"},
		{name: "reverseTextDirectionThis", value : eze$$parent.reverseTextDirectionThis, type : "string", jsName : "reverseTextDirectionThis"},
		{name: "textLayoutThis", value : eze$$parent.textLayoutThis, type : "string", jsName : "textLayoutThis"},
		{name: "dataLoader", value : eze$$parent.dataLoader, type : "com.ibm.egl.rui.widgets.DataLoader", jsName : "dataLoader"},
		{name: "loadingDiv", value : eze$$parent.loadingDiv, type : "com.ibm.egl.rui.widgets.Div", jsName : "loadingDiv"},
		{name: "columnClass", value : eze$$parent.columnClass, type : "string[]", jsName : "!columnClass"},
		{name: "showLoadingDivJob", value : eze$$parent.showLoadingDivJob, type : "egl.javascript.Job", jsName : "showLoadingDivJob"},
		{name: "innerLoadingDiv", value : eze$$parent.innerLoadingDiv, type : "com.ibm.egl.rui.widgets.Div", jsName : "innerLoadingDiv"},
		{name: "Directions", value : eze$$parent.Directions, type : "string[]", jsName : "!Directions"},
		{name: "columnDragger", value : eze$$parent.columnDragger, type : "com.ibm.egl.rui.widgets.Span", jsName : "columnDragger"},
		{name: "lastSelectedRow", value : eze$$parent.lastSelectedRow, type : "int", jsName : "lastSelectedRow"},
		{name: "lastEvent", value : eze$$parent.lastEvent, type : "egl.ui.rui.Event", jsName : "lastEvent"},
		{name: "sortedColumn", value : eze$$parent.sortedColumn, type : "int", jsName : "sortedColumn"}
		];
	}
}
);
