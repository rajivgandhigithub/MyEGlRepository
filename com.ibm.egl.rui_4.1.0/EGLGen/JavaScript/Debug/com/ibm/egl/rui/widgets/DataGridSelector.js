// Generated at Sun Sep 03 10:03:14 AST 2023 by EGL 7.1.1.v20180914_0609
// No APARs installed.

egl.defineClass('com.ibm.egl.rui.widgets', 'DataGridSelector', {
	'eze$$fileName': '/com.ibm.egl.rui_4.1.0/EGLSource/com/ibm/egl/rui/widgets/DataGridSelector.egl',
	'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/widgets/DataGridSelector',
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
			egl.atLine(this.eze$$fileName,16,373,21, this);
			this.selection = null;
			
			egl.atLine(this.eze$$fileName,17,396,27, this);
			this.selectedRows = null;
			
			egl.atLine(this.eze$$fileName,18,425,28, this);
			this.color = "";
			egl.atLine(this.eze$$fileName,20,457,54, this);
			this.selectionChangedListener = null;
			
			egl.atLine(this.eze$$fileName,21,513,14, this);
			this.grid = null;
			egl.addEmbeddedWidget(this, "grid");
			
			egl.atLine(this.eze$$fileName,23,531,39, this);
			this.selectedGridRows = null;
			
			this.jsrt$SysVar= new egl.egl.core.SysVar();
			new egl.com.ibm.egl.rui.widgets.DataGridLib();
			egl.atLine(this.eze$$fileName,16,373,9, this);
			this.selection = [  ].setType( "A;" );
			egl.atLine(this.eze$$fileName,17,396,12, this);
			this.selectedRows = [  ];
			egl.atLine(this.eze$$fileName,18,425,5, this);
			this.color = "lightgreen";
			egl.atLine(this.eze$$fileName,20,457,24, this);
			this.selectionChangedListener = null;
			egl.atLine(this.eze$$fileName,23,539,16, this);
			this.selectedGridRows = [  ];
			if (!egl.debugg) egl.leave();
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	
	,
	"enableSelection": function( grid, td, row, dataIndex, column ) {
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
			egl.addLocalFunctionVariable("grid", grid, "com.ibm.egl.rui.widgets.DataGrid", "grid");
			egl.addLocalFunctionVariable("td", td, "egl.ui.rui.Widget", "td");
			egl.addLocalFunctionVariable("row", row, "any", "row");
			egl.addLocalFunctionVariable("dataIndex", dataIndex, "int", "dataIndex");
			egl.addLocalFunctionVariable("column", column, "com.ibm.egl.rui.widgets.DataGridColumn", "column");
			egl.atLine(this.eze$$fileName,26,690,49, this);
			egl.checkNull(grid, "grid").setSelectionMode(0);
			egl.atLine(this.eze$$fileName,27,742,44, this);
			if ( (this.grid == null) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,28,765,15, this);
					this.grid = grid;
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,30,789,27, this);
			td.getOnClick().appendElement( new egl.egl.jsrt.Delegate(this, egl.com.ibm.egl.rui.widgets.DataGridSelector.prototype.setSelected,"setSelected") );
			egl.atLine(this.eze$$fileName,31,819,50, this);
			td.setAttribute("originalBG", td.getBackgroundColor() );
			egl.atLine(this.eze$$fileName,32,872,24, this);
			egl.checkNull(grid, "grid").setCursor("pointer");
			egl.atLine(this.eze$$fileName,25,574,327, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setSelected": function( e ) {
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
			egl.addLocalFunctionVariable("e", e, "egl.ui.rui.Event", "e");
			var gridCell = null;
			egl.addLocalFunctionVariable("gridCell", gridCell, "egl.ui.rui.Widget", "gridCell");
			egl.atLine(this.eze$$fileName,36,942,8, this);
			gridCell = e.widget;
			egl.setLocalFunctionVariable("gridCell", gridCell, "egl.ui.rui.Widget");
			var gridRow = null;
			egl.addLocalFunctionVariable("gridRow", gridRow, "egl.ui.rui.Widget", "gridRow");
			egl.atLine(this.eze$$fileName,37,972,7, this);
			gridRow = gridCell.getParent();
			egl.setLocalFunctionVariable("gridRow", gridRow, "egl.ui.rui.Widget");
			var row = "";
			egl.addLocalFunctionVariable("row", row, "string", "row");
			egl.atLine(this.eze$$fileName,38,1027,28, this);
			var ezert$$1 = null;
			ezert$$1 = gridCell.getAttribute("row" );
			egl.atLine(this.eze$$fileName,38,1008,3, this);
			row = (" " + egl.convertAnyToString(egl.boxAny(ezert$$1),false));
			egl.setLocalFunctionVariable("row", row, "string");
			var dataRecord = null;
			egl.addLocalFunctionVariable("dataRecord", dataRecord, "any", "dataRecord");
			egl.atLine(this.eze$$fileName,39,1059,10, this);
			dataRecord = egl.boxAny(egl.checkNull(this.grid, "grid").getData()[egl.checkNull(this.grid, "grid").getData().checkIndex((egl.convertStringToInt(row))-1)]);
			egl.setLocalFunctionVariable("dataRecord", dataRecord, "any");
			egl.atLine(this.eze$$fileName,40,1101,1165, this);
			if ( (e.ctrlKey || e.metaKey) ) {
				try{egl.enterBlock();
					var index = 0;
					egl.addLocalFunctionVariable("index", index, "int", "index");
					egl.atLine(this.eze$$fileName,41,1144,23, this);
					var ezert$$2 = 0;
					ezert$$2 = this.selectionIndex(gridRow );
					egl.atLine(this.eze$$fileName,41,1132,5, this);
					index = ezert$$2;
					egl.setLocalFunctionVariable("index", index, "int");
					egl.atLine(this.eze$$fileName,42,1172,632, this);
					if ( (index == 0) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,43,1192,36, this);
							this.selection.appendElement( dataRecord );
							var box = new egl.com.ibm.egl.rui.widgets.Box();
							egl.addLocalFunctionVariable("box", box, "com.ibm.egl.rui.widgets.Box", "box");
							egl.atLine(this.eze$$fileName,45,1274,26, this);
							var ezert$$3 = 0;
							ezert$$3 = gridRow.getChildren().getSize();
							egl.atLine(this.eze$$fileName,45,1260,41, this);
							egl.checkNull(box, "box").setColumns(ezert$$3);
							egl.atLine(this.eze$$fileName,46,1308,156, this);
							{
								try{egl.enterBlock();
									var n = 0;
									egl.addLocalFunctionVariable("n", n, "int", "n");
									n = 1;
									egl.setLocalFunctionVariable("n", n, "int");
									for ( ; (n <= egl.checkNull(box, "box").getColumns()); n = (n + 1) )
									{
										egl.setLocalFunctionVariable("n", n, "int");
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,47,1348,106, this);
											egl.checkNull(box, "box").appendChild((function () {
												var ezert$$4 = new egl.com.ibm.egl.rui.widgets.Div();
												egl.atLine(this.eze$$fileName,47,1373,41, this);
												egl.checkNull(ezert$$4, "ezert$$4").setInnerHTML(gridRow.getChildren()[gridRow.getChildren().checkIndex((n)-1)].getInnerHTML());
												egl.atLine(this.eze$$fileName,47,1416,23, this);
												egl.checkNull(ezert$$4, "ezert$$4").setBackgroundColor(this.color);
												egl.atLine(this.eze$$fileName,47,1441,10, this);
												egl.checkNull(ezert$$4, "ezert$$4").setMargin(1);
												return ezert$$4;
											}).call(this) );
										}finally{egl.exitBlock();}
										egl.atLine(this.eze$$fileName,46,1308,156, this);
									}
								}finally{egl.exitBlock();}
							}
							var tr = null;
							egl.addLocalFunctionVariable("tr", tr, "egl.ui.rui.Widget", "tr");
							egl.atLine(this.eze$$fileName,49,1471,2, this);
							tr = egl.checkNull(box, "box").lastRow;
							egl.setLocalFunctionVariable("tr", tr, "egl.ui.rui.Widget");
							egl.atLine(this.eze$$fileName,50,1502,28, this);
							tr.setAttribute("row", row );
							egl.atLine(this.eze$$fileName,51,1535,31, this);
							this.selectedRows.appendElement( tr );
							egl.atLine(this.eze$$fileName,52,1572,40, this);
							this.selectedGridRows.appendElement( gridRow );
							egl.atLine(this.eze$$fileName,53,1620,22, this);
							this.highlightRow(gridRow );
						}finally{egl.exitBlock();}
					}
					else {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,55,1655,24, this);
							this.unHighlightRow(gridRow );
							egl.atLine(this.eze$$fileName,56,1684,31, this);
							this.selection.removeElement( index );
							egl.atLine(this.eze$$fileName,57,1720,34, this);
							this.selectedRows.removeElement( index );
							egl.atLine(this.eze$$fileName,58,1759,38, this);
							this.selectedGridRows.removeElement( index );
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,61,1815,34, this);
					this.unHighlightRows(this.selectedGridRows );
					egl.atLine(this.eze$$fileName,62,1853,27, this);
					this.selection = [ dataRecord ].setType( "A;" );
					var box = new egl.com.ibm.egl.rui.widgets.Box();
					egl.addLocalFunctionVariable("box", box, "com.ibm.egl.rui.widgets.Box", "box");
					egl.atLine(this.eze$$fileName,64,1924,26, this);
					var ezert$$5 = 0;
					ezert$$5 = gridRow.getChildren().getSize();
					egl.atLine(this.eze$$fileName,64,1910,41, this);
					egl.checkNull(box, "box").setColumns(ezert$$5);
					egl.atLine(this.eze$$fileName,65,1957,154, this);
					{
						try{egl.enterBlock();
							var n = 0;
							egl.addLocalFunctionVariable("n", n, "int", "n");
							n = 1;
							egl.setLocalFunctionVariable("n", n, "int");
							for ( ; (n <= egl.checkNull(box, "box").getColumns()); n = (n + 1) )
							{
								egl.setLocalFunctionVariable("n", n, "int");
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,66,1996,106, this);
									egl.checkNull(box, "box").appendChild((function () {
										var ezert$$6 = new egl.com.ibm.egl.rui.widgets.Div();
										egl.atLine(this.eze$$fileName,66,2021,41, this);
										egl.checkNull(ezert$$6, "ezert$$6").setInnerHTML(gridRow.getChildren()[gridRow.getChildren().checkIndex((n)-1)].getInnerHTML());
										egl.atLine(this.eze$$fileName,66,2064,23, this);
										egl.checkNull(ezert$$6, "ezert$$6").setBackgroundColor(this.color);
										egl.atLine(this.eze$$fileName,66,2089,10, this);
										egl.checkNull(ezert$$6, "ezert$$6").setMargin(1);
										return ezert$$6;
									}).call(this) );
								}finally{egl.exitBlock();}
								egl.atLine(this.eze$$fileName,65,1957,154, this);
							}
						}finally{egl.exitBlock();}
					}
					var tr = null;
					egl.addLocalFunctionVariable("tr", tr, "egl.ui.rui.Widget", "tr");
					egl.atLine(this.eze$$fileName,68,2117,2, this);
					tr = egl.checkNull(box, "box").lastRow;
					egl.setLocalFunctionVariable("tr", tr, "egl.ui.rui.Widget");
					egl.atLine(this.eze$$fileName,69,2147,28, this);
					tr.setAttribute("row", row );
					egl.atLine(this.eze$$fileName,70,2179,22, this);
					this.selectedRows = [ tr ];
					egl.atLine(this.eze$$fileName,71,2205,29, this);
					this.selectedGridRows = [ gridRow ];
					egl.atLine(this.eze$$fileName,72,2238,22, this);
					this.highlightRow(gridRow );
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,74,2269,74, this);
			if ( (this.selectionChangedListener != null) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,75,2310,27, this);
					this.selectionChangedListener();
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,35,905,1443, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"selectionIndex": function( tr ) {
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
		try { egl.enter("selectionIndex",this,arguments,eze$$updater);
			var $result = 0;
			egl.addLocalFunctionVariable("tr", tr, "egl.ui.rui.Widget", "tr");
			egl.atLine(this.eze$$fileName,80,2405,115, this);
			{
				try{egl.enterBlock();
					var n = 0;
					egl.addLocalFunctionVariable("n", n, "int", "n");
					n = 1;
					egl.setLocalFunctionVariable("n", n, "int");
					for ( ; (n <= this.selectedGridRows.getSize()); n = (n + 1) )
					{
						egl.setLocalFunctionVariable("n", n, "int");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,81,2462,52, this);
							if ( (egl.checkNull(this.selectedGridRows, "selectedGridRows")[this.selectedGridRows.checkIndex((n)-1)] == tr) ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,82,2497,10, this);
									$result = n;
									egl.setLocalFunctionVariable("INT", $result, "int");
									{ if (!egl.debugg) egl.leave(); return $result;}
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,80,2405,115, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,85,2523,11, this);
			$result = 0;
			egl.setLocalFunctionVariable("INT", $result, "int");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"highlightRow": function( tr ) {
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
		try { egl.enter("highlightRow",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("tr", tr, "egl.ui.rui.Widget", "tr");
			var tds = null;
			egl.addLocalFunctionVariable("tds", tds, "egl.ui.rui.Widget[]", "!tds");
			egl.atLine(this.eze$$fileName,89,2597,30, this);
			var ezert$$7 = null;
			ezert$$7 = tr.getElementsByTagName("div" );
			egl.atLine(this.eze$$fileName,89,2582,3, this);
			tds = ezert$$7;
			egl.setLocalFunctionVariable("tds", tds, "egl.ui.rui.Widget[]");
			egl.atLine(this.eze$$fileName,90,2631,137, this);
			{
				try{egl.enterBlock();
					var n = 0;
					egl.addLocalFunctionVariable("n", n, "int", "n");
					n = 1;
					egl.setLocalFunctionVariable("n", n, "int");
					for ( ; (n <= tds.getSize()); n = (n + 1) )
					{
						egl.setLocalFunctionVariable("n", n, "int");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,91,2675,87, this);
							if ( egl.like(egl.checkNull(tds, "tds")[tds.checkIndex((n)-1)].getClass(), "%EglRuiDataGridCell%", "\\") ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,92,2724,31, this);
									egl.checkNull(tds, "tds")[tds.checkIndex((n)-1)].setBackgroundColor( this.color );
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,90,2631,137, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,95,2771,19, this);
			tr.setCursor( "move" );
			egl.atLine(this.eze$$fileName,88,2544,251, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"unHighlightRow": function( tr ) {
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
		try { egl.enter("unHighlightRow",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("tr", tr, "egl.ui.rui.Widget", "tr");
			var tds = null;
			egl.addLocalFunctionVariable("tds", tds, "egl.ui.rui.Widget[]", "!tds");
			egl.atLine(this.eze$$fileName,99,2854,30, this);
			var ezert$$8 = null;
			ezert$$8 = tr.getElementsByTagName("div" );
			egl.atLine(this.eze$$fileName,99,2839,3, this);
			tds = ezert$$8;
			egl.setLocalFunctionVariable("tds", tds, "egl.ui.rui.Widget[]");
			egl.atLine(this.eze$$fileName,100,2888,166, this);
			{
				try{egl.enterBlock();
					var n = 0;
					egl.addLocalFunctionVariable("n", n, "int", "n");
					n = 1;
					egl.setLocalFunctionVariable("n", n, "int");
					for ( ; (n <= tds.getSize()); n = (n + 1) )
					{
						egl.setLocalFunctionVariable("n", n, "int");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,101,2932,116, this);
							if ( egl.like(egl.checkNull(tds, "tds")[tds.checkIndex((n)-1)].getClass(), "%EglRuiDataGridCell%", "\\") ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,102,3007,33, this);
									var ezert$$9 = null;
									ezert$$9 = egl.checkNull(tds, "tds")[tds.checkIndex((n)-1)].getAttribute("originalBG" );
									egl.atLine(this.eze$$fileName,102,2982,59, this);
									egl.checkNull(tds, "tds")[tds.checkIndex((n)-1)].setBackgroundColor( egl.convertAnyToString(egl.boxAny(ezert$$9),false) );
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,100,2888,166, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,105,3057,22, this);
			tr.setCursor( "default" );
			egl.atLine(this.eze$$fileName,98,2799,285, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"unHighlightRows": function( trs ) {
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
		try { egl.enter("unHighlightRows",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("trs", trs, "egl.ui.rui.Widget[]", "!trs");
			egl.atLine(this.eze$$fileName,109,3132,73, this);
			{
				try{egl.enterBlock();
					var r = 0;
					egl.addLocalFunctionVariable("r", r, "int", "r");
					r = 1;
					egl.setLocalFunctionVariable("r", r, "int");
					for ( ; (r <= trs.getSize()); r = (r + 1) )
					{
						egl.setLocalFunctionVariable("r", r, "int");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,110,3176,23, this);
							this.unHighlightRow(egl.checkNull(trs, "trs")[trs.checkIndex((r)-1)] );
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,109,3132,73, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,108,3088,122, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"clear": function( Grid, eze$$Grid$func_, eze$$caller ) {
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
		try { egl.enter("clear",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("Grid", Grid, "com.ibm.egl.rui.widgets.DataGrid", "Grid");
			egl.atLine(this.eze$$fileName,115,3246,30, this);
			this.unHighlightRows(this.selectedRows );
			egl.atLine(this.eze$$fileName,116,3279,16, this);
			this.selection = [  ].setType( "A;" );
			egl.atLine(this.eze$$fileName,117,3298,19, this);
			this.selectedRows = [  ];
			egl.atLine(this.eze$$fileName,114,3214,108, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"toString": function() {
		return "[DataGridSelector]";
	}
	,
	"eze$$getName": function() {
		return "DataGridSelector";
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
		
		{name: "DataGridLib", value : egl.com.ibm.egl.rui.widgets.DataGridLib['$inst'], type : "com.ibm.egl.rui.widgets.DataGridLib", jsName : "egl.com.ibm.egl.rui.widgets.DataGridLib.$inst"},
		{name: "selection", value : eze$$parent.selection, type : "any[]", jsName : "!selection"},
		{name: "selectedRows", value : eze$$parent.selectedRows, type : "egl.ui.rui.Widget[]", jsName : "!selectedRows"},
		{name: "color", value : eze$$parent.color, type : "string", jsName : "color"},
		{name: "selectionChangedListener", value : eze$$parent.selectionChangedListener, type : "com.ibm.egl.rui.widgets.GridSelectionListener", jsName : "selectionChangedListener"},
		{name: "grid", value : eze$$parent.grid, type : "com.ibm.egl.rui.widgets.DataGrid", jsName : "grid"},
		{name: "selectedGridRows", value : eze$$parent.selectedGridRows, type : "egl.ui.rui.Widget[]", jsName : "!selectedGridRows"}
		];
	}
}
);
