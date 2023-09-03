// Generated at Sun Sep 03 10:03:15 AST 2023 by EGL 7.1.1.v20180914_0609
// No APARs installed.

egl.defineRUIWidget('com.ibm.egl.rui.widgets', 'GridLayout', {
	'eze$$fileName': '/com.ibm.egl.rui_4.1.0/EGLSource/com/ibm/egl/rui/widgets/GridLayout.egl',
	'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/widgets/GridLayout',
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
			egl.atLine(this.eze$$fileName,59,2888,89, this);
			this.columns = 0;
			egl.atLine(this.eze$$fileName,60,2979,80, this);
			this.rows = 0;
			egl.atLine(this.eze$$fileName,61,3061,101, this);
			this.cellPadding = 0;
			egl.atLine(this.eze$$fileName,63,3166,31, this);
			this.table = new egl.egl.ui.rui.Widget();
			egl.addEmbeddedWidget(this, "table");
			
			egl.atLine(this.eze$$fileName,64,3199,26, this);
			this.innerTable = null;
			egl.addEmbeddedWidget(this, "innerTable");
			
			egl.atLine(this.eze$$fileName,65,3227,42, this);
			this.widgetOrientationThis = "";
			egl.atLine(this.eze$$fileName,66,3272,28, this);
			this.cells = null;
			
			egl.atLine(this.eze$$fileName,67,3302,30, this);
			this.defaultTDStyle = "";
			egl.atLine(this.eze$$fileName,68,3334,31, this);
			this.loaded = false;
			egl.atLine(this.eze$$fileName,69,3367,64, this);
			this.internalID = "";
			this.jsrt$SysVar= new egl.egl.core.SysVar();
			new egl.com.ibm.egl.rui.widgets.UtilLib();
			new egl.egl.core.StrLib();
			new egl.com.ibm.egl.rui.widgets.GridLayoutLib();
			egl.atLine(this.eze$$fileName,13,343,20, this);
			this.targetWidget = this.table;
			egl.atLine(this.eze$$fileName,63,3179,16, this);
			this.table.setTagName( "span" );
			egl.atLine(this.eze$$fileName,65,3235,21, this);
			this.widgetOrientationThis = "";
			egl.atLine(this.eze$$fileName,66,3280,5, this);
			this.cells = [  ];
			egl.atLine(this.eze$$fileName,68,3342,6, this);
			this.loaded = false;
			egl.atLine(this.eze$$fileName,69,3411,19, this);
			var ezert$$1 = 0;
			ezert$$1 = egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].getSerial();
			egl.atLine(this.eze$$fileName,69,3375,10, this);
			this.internalID = ("GridLayout-" + (ezert$$1).toString());
			if (!egl.debugg) egl.leave();
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	
	,
	"setWidth": function( width ) {
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
		try { egl.enter("setWidth",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("width", width, "int", "width");
			egl.atLine(this.eze$$fileName,72,3469,20, this);
			this.table.setWidth( (width).toString() );
			egl.atLine(this.eze$$fileName,73,3492,66, this);
			if ( (this.table.getChildren() != null) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,74,3520,32, this);
					this.table.getChildren()[this.table.getChildren().checkIndex((1)-1)].setWidth( (width).toString() );
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,71,3435,128, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setHeight": function( height ) {
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
		try { egl.enter("setHeight",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("height", height, "int", "height");
			egl.atLine(this.eze$$fileName,79,3603,22, this);
			this.table.setHeight( (height).toString() );
			egl.atLine(this.eze$$fileName,80,3628,68, this);
			if ( (this.table.getChildren() != null) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,81,3656,34, this);
					this.table.getChildren()[this.table.getChildren().checkIndex((1)-1)].setHeight( (height).toString() );
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,78,3567,134, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"initTable": function() {
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
		try { egl.enter("initTable",this,arguments,eze$$updater);
			egl.atLine(this.eze$$fileName,86,3729,49, this);
			if ( ((this.columns == 0) || (this.rows == 0)) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,87,3765,7, this);
					{ if (!egl.debugg) egl.leave(); return;}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,90,3860,24, this);
			var ezert$$2 = 0;
			ezert$$2 = this.table.getChildren().getSize();
			egl.atLine(this.eze$$fileName,90,3857,482, this);
			if ( (ezert$$2 > 0) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,91,3891,31, this);
					this.innerTable = this.table.getChildren()[this.table.getChildren().checkIndex((1)-1)];
					egl.atLine(this.eze$$fileName,92,3926,23, this);
					this.table.removeChildren();
					egl.atLine(this.eze$$fileName,93,3956,15, this);
					var ezert$$3 = 0;
					ezert$$3 = this.cells.getSize();
					egl.atLine(this.eze$$fileName,93,3953,336, this);
					if ( (ezert$$3 > 0) ) {
						try{egl.enterBlock();
							var tds = null;
							egl.addLocalFunctionVariable("tds", tds, "egl.ui.rui.Widget[]", "!tds");
							egl.atLine(this.eze$$fileName,94,3994,37, this);
							var ezert$$4 = null;
							ezert$$4 = this.innerTable.getElementsByTagName("td" );
							egl.atLine(this.eze$$fileName,94,3979,3, this);
							tds = ezert$$4;
							egl.setLocalFunctionVariable("tds", tds, "egl.ui.rui.Widget[]");
							var count = 0;
							egl.addLocalFunctionVariable("count", count, "int", "count");
							egl.atLine(this.eze$$fileName,95,4055,13, this);
							var ezert$$5 = 0;
							ezert$$5 = tds.getSize();
							egl.atLine(this.eze$$fileName,95,4043,5, this);
							count = ezert$$5;
							egl.setLocalFunctionVariable("count", count, "int");
							egl.atLine(this.eze$$fileName,96,4080,199, this);
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
											var eze_Cond_Temp_0 = false;
											egl.atLine(this.eze$$fileName,97,4121,25, this);
											var ezert$$6 = 0;
											ezert$$6 = egl.checkNull(tds, "tds")[tds.checkIndex((n)-1)].getChildren().getSize();
											egl.atLine(this.eze$$fileName,97,4121,73, this);
											if ( (ezert$$6 > 0) ) {
												try{egl.enterBlock();
													egl.atLine(this.eze$$fileName,97,4152,37, this);
													var ezert$$7 = 0;
													ezert$$7 = egl.egl.core.$StrLib.indexOf( (egl.checkNull(tds, "tds")[tds.checkIndex((n)-1)].getID()), this.internalID);
													egl.atLine(this.eze$$fileName,97,4121,73, this);
													if ( (ezert$$7 == 1) ) {
														try{egl.enterBlock();
															egl.atLine(this.eze$$fileName,97,4121,73, this);
															eze_Cond_Temp_0 = true;
														}finally{egl.exitBlock();}
													}
													else {
														try{egl.enterBlock();
															egl.atLine(this.eze$$fileName,97,4121,73, this);
															eze_Cond_Temp_0 = false;
														}finally{egl.exitBlock();}
													}
												}finally{egl.exitBlock();}
											}
											else {
												try{egl.enterBlock();
													egl.atLine(this.eze$$fileName,97,4121,73, this);
													eze_Cond_Temp_0 = false;
												}finally{egl.exitBlock();}
											}
											egl.atLine(this.eze$$fileName,97,4118,135, this);
											if ( eze_Cond_Temp_0 ) {
												try{egl.enterBlock();
													egl.atLine(this.eze$$fileName,98,4211,24, this);
													egl.checkNull(tds, "tds")[tds.checkIndex((n)-1)].removeChildren();
												}finally{egl.exitBlock();}
											}
										}finally{egl.exitBlock();}
										egl.atLine(this.eze$$fileName,96,4080,199, this);
									}
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,102,4299,34, this);
					egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].destroyWidget(this.innerTable );
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,105,4345,20, this);
			this.defaultTDStyle = "";
			var tdStyle = "";
			egl.addLocalFunctionVariable("tdStyle", tdStyle, "string", "tdStyle");
			egl.atLine(this.eze$$fileName,106,4431,7, this);
			tdStyle = (((this.defaultTDStyle + "padding:") + (this.cellPadding).toString()) + "px");
			egl.setLocalFunctionVariable("tdStyle", tdStyle, "string");
			egl.atLine(this.eze$$fileName,108,4503,37, this);
			egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.clearHTMLString();
			var tableStyle = "";
			egl.addLocalFunctionVariable("tableStyle", tableStyle, "string", "tableStyle");
			egl.atLine(this.eze$$fileName,109,4543,10, this);
			tableStyle = "";
			egl.setLocalFunctionVariable("tableStyle", tableStyle, "string");
			egl.atLine(this.eze$$fileName,110,4569,73, this);
			if ( (this.table.getWidth() != "") ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,111,4594,42, this);
					tableStyle = (("width:" + this.table.getWidth()) + ";");
					egl.setLocalFunctionVariable("tableStyle", tableStyle, "string");
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,113,4645,91, this);
			if ( (this.table.getHeight() != "") ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,114,4671,59, this);
					tableStyle = (((tableStyle + "height:") + this.table.getHeight()) + ";\"");
					egl.setLocalFunctionVariable("tableStyle", tableStyle, "string");
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,116,4739,178, this);
			if ( (tableStyle != "") ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,117,4763,83, this);
					egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString((("<table style=\"" + tableStyle) + "\"><tbody>") );
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,119,4857,54, this);
					egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString("<table><tbody>" );
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,121,4920,505, this);
			{
				try{egl.enterBlock();
					var row = 0;
					egl.addLocalFunctionVariable("row", row, "int", "row");
					row = 1;
					egl.setLocalFunctionVariable("row", row, "int");
					for ( ; (row <= this.rows); row = (row + 1) )
					{
						egl.setLocalFunctionVariable("row", row, "int");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,122,4954,83, this);
							egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString((((("<tr id='" + this.internalID) + "-TR-") + (row).toString()) + "'>") );
							egl.atLine(this.eze$$fileName,124,5042,328, this);
							{
								try{egl.enterBlock();
									var column = 0;
									egl.addLocalFunctionVariable("column", column, "int", "column");
									column = 1;
									egl.setLocalFunctionVariable("column", column, "int");
									for ( ; (column <= this.columns); column = (column + 1) )
									{
										egl.setLocalFunctionVariable("column", column, "int");
										try{egl.enterBlock();
											var tdID = "";
											egl.addLocalFunctionVariable("tdID", tdID, "string", "tdID");
											egl.atLine(this.eze$$fileName,125,5087,4, this);
											tdID = ((((this.internalID + "-TD-") + (row).toString()) + "-") + (column).toString());
											egl.setLocalFunctionVariable("tdID", tdID, "string");
											egl.atLine(this.eze$$fileName,126,5147,98, this);
											egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString((("<td id='" + tdID) + "' class='EglRuiVAlignTop EglRuiBoxTd' ") );
											egl.atLine(this.eze$$fileName,127,5250,113, this);
											egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString((((((("style='" + tdStyle) + "' row='") + (row).toString()) + "' column='") + (column).toString()) + "'>&nbsp;</td>") );
										}finally{egl.exitBlock();}
										egl.atLine(this.eze$$fileName,124,5042,328, this);
									}
								}finally{egl.exitBlock();}
							}
							egl.atLine(this.eze$$fileName,129,5374,45, this);
							egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString("</tr>" );
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,121,4920,505, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,131,5428,56, this);
			egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.appendHTMLString("</tbody></table>" );
			egl.atLine(this.eze$$fileName,132,5505,34, this);
			var ezert$$8 = "";
			ezert$$8 = egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].utilNative.getHTMLString();
			egl.atLine(this.eze$$fileName,132,5487,53, this);
			this.table.setInnerHTML( ezert$$8 );
			egl.atLine(this.eze$$fileName,85,3706,1839, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setChildren": function( children1 ) {
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
		try { egl.enter("setChildren",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("children1", children1, "egl.ui.rui.Widget[]", "!children1");
			egl.atLine(this.eze$$fileName,136,5607,97, this);
			if ( (children1 == null) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,137,5633,65, this);
					throw (function () {
						var ezert$$9 = egl.createRuntimeException();
						egl.atLine(this.eze$$fileName,137,5662,33, this);
						egl.checkNull(ezert$$9, "ezert$$9").message = "Children cannot be null";
						return ezert$$9;
					}).call(this);
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,139,5707,228, this);
			if ( (this.widgetOrientationThis != "") ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,140,5742,48, this);
					this.table.setWidgetOrientation( this.widgetOrientationThis );
					egl.atLine(this.eze$$fileName,141,5794,135, this);
					if ( (this.widgetOrientationThis == "RTL") ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,142,5834,37, this);
							this.table.setAttribute("align", "right" );
						}finally{egl.exitBlock();}
					}
					else {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,144,5884,36, this);
							this.table.setAttribute("align", "left" );
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,147,5938,12, this);
			this.initTable();
			egl.atLine(this.eze$$fileName,148,5953,11, this);
			this.cells = [  ];
			egl.atLine(this.eze$$fileName,149,5967,158, this);
			if ( ((this.columns == 0) || (this.rows == 0)) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,150,6003,105, this);
					{
						try{egl.enterBlock();
							var index = 0;
							egl.addLocalFunctionVariable("index", index, "int", "index");
							index = 1;
							egl.setLocalFunctionVariable("index", index, "int");
							for ( ; (index <= children1.getSize()); index = (index + 1) )
							{
								egl.setLocalFunctionVariable("index", index, "int");
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,151,6058,43, this);
									this.cells.appendElement( egl.checkNull(children1, "children1")[children1.checkIndex((index)-1)] );
								}finally{egl.exitBlock();}
								egl.atLine(this.eze$$fileName,150,6003,105, this);
							}
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,153,6112,7, this);
					{ if (!egl.debugg) egl.leave(); return;}
				}finally{egl.exitBlock();}
			}
			var oDisplayStyle = "";
			egl.addLocalFunctionVariable("oDisplayStyle", oDisplayStyle, "string", "oDisplayStyle");
			egl.atLine(this.eze$$fileName,155,6128,13, this);
			oDisplayStyle = this.table.getDisplayStyle();
			egl.setLocalFunctionVariable("oDisplayStyle", oDisplayStyle, "string");
			egl.atLine(this.eze$$fileName,156,6173,28, this);
			this.table.setDisplayStyle( "none" );
			egl.atLine(this.eze$$fileName,157,6204,31, this);
			this.innerTable = this.table.getChildren()[this.table.getChildren().checkIndex((1)-1)];
			egl.atLine(this.eze$$fileName,158,6238,59, this);
			if ( !(this.loaded) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,159,6253,38, this);
					this.document.body.appendChild(this.innerTable );
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,161,6300,90, this);
			{
				try{egl.enterBlock();
					var index = 0;
					egl.addLocalFunctionVariable("index", index, "int", "index");
					index = 1;
					egl.setLocalFunctionVariable("index", index, "int");
					for ( ; (index <= children1.getSize()); index = (index + 1) )
					{
						egl.setLocalFunctionVariable("index", index, "int");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,162,6354,30, this);
							this.appendChild(egl.checkNull(children1, "children1")[children1.checkIndex((index)-1)] );
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,161,6300,90, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,164,6393,51, this);
			if ( !(this.loaded) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,165,6408,30, this);
					this.table.appendChild(this.innerTable );
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,167,6447,35, this);
			this.table.setDisplayStyle( oDisplayStyle );
			egl.atLine(this.eze$$fileName,135,5549,938, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getChildren": function() {
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
		try { egl.enter("getChildren",this,arguments,eze$$updater);
			var $result = null;
			egl.atLine(this.eze$$fileName,171,6546,15, this);
			$result = this.cells;
			egl.setLocalFunctionVariable("Widget[]", $result, "egl.ui.rui.Widget[]");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"appendChild": function( newChild ) {
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
		try { egl.enter("appendChild",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("newChild", newChild, "egl.ui.rui.Widget", "newChild");
			egl.atLine(this.eze$$fileName,175,6626,100, this);
			if ( (newChild == null) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,176,6651,69, this);
					throw (function () {
						var ezert$$10 = egl.createRuntimeException();
						egl.atLine(this.eze$$fileName,176,6680,37, this);
						egl.checkNull(ezert$$10, "ezert$$10").message = "Child to add cannot be null";
						return ezert$$10;
					}).call(this);
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,178,6729,140, this);
			if ( (this.widgetOrientationThis != "") ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,179,6764,99, this);
					if ( (newChild.getWidgetOrientation() == "") ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,180,6805,51, this);
							newChild.setWidgetOrientation( this.widgetOrientationThis );
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,183,6872,30, this);
			this.cells.appendElement( newChild );
			egl.atLine(this.eze$$fileName,184,6905,30, this);
			newChild.setLogicalParent(  this );
			var gridData = new egl.com.ibm.egl.rui.widgets.GridLayoutData();
			egl.addLocalFunctionVariable("gridData", gridData, "com.ibm.egl.rui.widgets.GridLayoutData", "gridData");
			egl.atLine(this.eze$$fileName,186,6965,111, this);
			if ( (newChild.getLayoutData() != null) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,187,7003,49, this);
					gridData = egl.convertAnyToNameType(egl.boxAny(newChild.getLayoutData()),"Tcom/ibm/egl/rui/widgets/gridlayoutdata;",egl.com.ibm.egl.rui.widgets.GridLayoutData);
					egl.setLocalFunctionVariable("gridData", gridData, "com.ibm.egl.rui.widgets.GridLayoutData");
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,189,7063,7, this);
					{ if (!egl.debugg) egl.leave(); return;}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,191,7079,58, this);
			if ( !(this.isValidGridLayoutData(function() {
				var ezert$$11 = new egl.com.ibm.egl.rui.widgets.GridLayoutData();
				
				ezert$$11.eze$$assign(gridData);
			; return ezert$$11;}.call(this) )) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,192,7124,7, this);
					{ if (!egl.debugg) egl.leave(); return;}
				}finally{egl.exitBlock();}
			}
			var tdID = "";
			egl.addLocalFunctionVariable("tdID", tdID, "string", "tdID");
			egl.atLine(this.eze$$fileName,195,7141,4, this);
			tdID = ((((this.internalID + "-TD-") + (gridData.row).toString()) + "-") + (gridData.column).toString());
			egl.setLocalFunctionVariable("tdID", tdID, "string");
			var td = null;
			egl.addLocalFunctionVariable("td", td, "egl.ui.rui.Widget", "td");
			egl.atLine(this.eze$$fileName,196,7229,26, this);
			var ezert$$12 = null;
			ezert$$12 = this.table.getElementById(tdID );
			egl.atLine(this.eze$$fileName,196,7217,2, this);
			td = ezert$$12;
			egl.setLocalFunctionVariable("td", td, "egl.ui.rui.Widget");
			var eze_Cond_Temp_0 = false;
			egl.atLine(this.eze$$fileName,197,7266,65, this);
			if ( (td != null) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,197,7281,29, this);
					var ezert$$13 = null;
					ezert$$13 = td.getAttribute("occupied" );
					egl.atLine(this.eze$$fileName,197,7266,65, this);
					if ( (egl.convertAnyToString(egl.boxAny(ezert$$13),false) != "true") ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,197,7266,65, this);
							eze_Cond_Temp_0 = true;
						}finally{egl.exitBlock();}
					}
					else {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,197,7266,65, this);
							eze_Cond_Temp_0 = false;
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,197,7266,65, this);
					eze_Cond_Temp_0 = false;
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,197,7261,2173, this);
			if ( eze_Cond_Temp_0 ) {
				try{egl.enterBlock();
					var childCells = (function(){ var ezert$$14= []; ezert$$14.setType( egl.egl.ui.rui.Widget );for (var i=0; i < 0; i++) {
							ezert$$14[ i ] = new egl.egl.ui.rui.Widget();
						}
						// no max size set for this array
					return ezert$$14;})();
					egl.addLocalFunctionVariable("childCells", childCells, "egl.ui.rui.Widget[]", "!childCells");
					egl.atLine(this.eze$$fileName,199,7362,339, this);
					{
						try{egl.enterBlock();
							var j = 0;
							egl.addLocalFunctionVariable("j", j, "int", "j");
							j = 1;
							egl.setLocalFunctionVariable("j", j, "int");
							for ( ; (j <= (gridData.horizontalSpan - 1)); j = (j + 1) )
							{
								egl.setLocalFunctionVariable("j", j, "int");
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,200,7418,72, this);
									tdID = ((((this.internalID + "-TD-") + (gridData.row).toString()) + "-") + ((gridData.column + j)).toString());
									egl.setLocalFunctionVariable("tdID", tdID, "string");
									var tempTd = null;
									egl.addLocalFunctionVariable("tempTd", tempTd, "egl.ui.rui.Widget", "tempTd");
									egl.atLine(this.eze$$fileName,201,7511,26, this);
									var ezert$$15 = null;
									ezert$$15 = this.table.getElementById(tdID );
									egl.atLine(this.eze$$fileName,201,7495,6, this);
									tempTd = ezert$$15;
									egl.setLocalFunctionVariable("tempTd", tempTd, "egl.ui.rui.Widget");
									egl.atLine(this.eze$$fileName,202,7543,151, this);
									if ( ((tempTd != null) && (tempTd.getInnerHTML() == "&nbsp;")) ) {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,203,7602,33, this);
											childCells.appendElement( tempTd );
										}finally{egl.exitBlock();}
									}
									else {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,205,7650,23, this);
											childCells.removeAll();
											egl.atLine(this.eze$$fileName,206,7679,7, this);
											{ if (!egl.debugg) egl.leave(); return;}
										}finally{egl.exitBlock();}
									}
								}finally{egl.exitBlock();}
								egl.atLine(this.eze$$fileName,199,7362,339, this);
							}
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,209,7705,415, this);
					{
						try{egl.enterBlock();
							var i = 0;
							egl.addLocalFunctionVariable("i", i, "int", "i");
							i = 1;
							egl.setLocalFunctionVariable("i", i, "int");
							for ( ; (i <= (gridData.verticalSpan - 1)); i = (i + 1) )
							{
								egl.setLocalFunctionVariable("i", i, "int");
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,210,7759,354, this);
									{
										try{egl.enterBlock();
											var j = 0;
											egl.addLocalFunctionVariable("j", j, "int", "j");
											j = 0;
											egl.setLocalFunctionVariable("j", j, "int");
											for ( ; (j <= (gridData.horizontalSpan - 1)); j = (j + 1) )
											{
												egl.setLocalFunctionVariable("j", j, "int");
												try{egl.enterBlock();
													egl.atLine(this.eze$$fileName,211,7816,78, this);
													tdID = ((((this.internalID + "-TD-") + ((gridData.row + i)).toString()) + "-") + ((gridData.column + j)).toString());
													egl.setLocalFunctionVariable("tdID", tdID, "string");
													var tempTd = null;
													egl.addLocalFunctionVariable("tempTd", tempTd, "egl.ui.rui.Widget", "tempTd");
													egl.atLine(this.eze$$fileName,212,7916,26, this);
													var ezert$$16 = null;
													ezert$$16 = this.table.getElementById(tdID );
													egl.atLine(this.eze$$fileName,212,7900,6, this);
													tempTd = ezert$$16;
													egl.setLocalFunctionVariable("tempTd", tempTd, "egl.ui.rui.Widget");
													egl.atLine(this.eze$$fileName,213,7949,156, this);
													if ( ((tempTd != null) && (tempTd.getInnerHTML() == "&nbsp;")) ) {
														try{egl.enterBlock();
															egl.atLine(this.eze$$fileName,214,8009,33, this);
															childCells.appendElement( tempTd );
														}finally{egl.exitBlock();}
													}
													else {
														try{egl.enterBlock();
															egl.atLine(this.eze$$fileName,216,8059,23, this);
															childCells.removeAll();
															egl.atLine(this.eze$$fileName,217,8089,7, this);
															{ if (!egl.debugg) egl.leave(); return;}
														}finally{egl.exitBlock();}
													}
												}finally{egl.exitBlock();}
												egl.atLine(this.eze$$fileName,210,7759,354, this);
											}
										}finally{egl.exitBlock();}
									}
								}finally{egl.exitBlock();}
								egl.atLine(this.eze$$fileName,209,7705,415, this);
							}
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,222,8128,144, this);
					{
						try{egl.enterBlock();
							var i = 0;
							egl.addLocalFunctionVariable("i", i, "int", "i");
							i = 1;
							egl.setLocalFunctionVariable("i", i, "int");
							for ( ; (i <= childCells.getSize()); i = (i + 1) )
							{
								egl.setLocalFunctionVariable("i", i, "int");
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,223,8175,48, this);
									egl.checkNull(childCells, "childCells")[childCells.checkIndex((i)-1)].getParent().removeChild(egl.checkNull(childCells, "childCells")[childCells.checkIndex((i)-1)] );
									egl.atLine(this.eze$$fileName,224,8228,37, this);
									egl.com.ibm.egl.rui.widgets.UtilLib['$inst'].destroyWidget(egl.checkNull(childCells, "childCells")[childCells.checkIndex((i)-1)] );
								}finally{egl.exitBlock();}
								egl.atLine(this.eze$$fileName,222,8128,144, this);
							}
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,226,8276,23, this);
					childCells.removeAll();
					egl.atLine(this.eze$$fileName,228,8307,286, this);
					if ( (gridData.horizontalAlignment > 0) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,229,8351,235, this);
							switch( gridData.horizontalAlignment ) {
								case 0:
									egl.atLine(this.eze$$fileName,230,8392,56, this);
									try{egl.enterBlock();
										egl.atLine(this.eze$$fileName,231,8415,33, this);
										td.setAttribute("align", "left" );
									}finally{egl.exitBlock();}
									break;
								case 1:
									egl.atLine(this.eze$$fileName,232,8454,60, this);
									try{egl.enterBlock();
										egl.atLine(this.eze$$fileName,233,8479,35, this);
										td.setAttribute("align", "center" );
									}finally{egl.exitBlock();}
									break;
								case 2:
									egl.atLine(this.eze$$fileName,234,8520,58, this);
									try{egl.enterBlock();
										egl.atLine(this.eze$$fileName,235,8544,34, this);
										td.setAttribute("align", "right" );
									}finally{egl.exitBlock();}
									break;
								default:
								try{egl.enterBlock();
								}finally{egl.exitBlock();}
								break;
							}
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,238,8597,312, this);
					if ( (gridData.verticalAlignment > 0) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,239,8639,263, this);
							switch( gridData.verticalAlignment ) {
								case 3:
									egl.atLine(this.eze$$fileName,240,8678,64, this);
									try{egl.enterBlock();
										egl.atLine(this.eze$$fileName,241,8701,41, this);
										td.setClass( "EglRuiVAlignTop EglRuiBoxTd" );
									}finally{egl.exitBlock();}
									break;
								case 4:
									egl.atLine(this.eze$$fileName,242,8748,70, this);
									try{egl.enterBlock();
										egl.atLine(this.eze$$fileName,243,8774,44, this);
										td.setClass( "EglRuiVAlignMiddle EglRuiBoxTd" );
									}finally{egl.exitBlock();}
									break;
								case 5:
									egl.atLine(this.eze$$fileName,244,8824,70, this);
									try{egl.enterBlock();
										egl.atLine(this.eze$$fileName,245,8850,44, this);
										td.setClass( "EglRuiVAlignBottom EglRuiBoxTd" );
									}finally{egl.exitBlock();}
									break;
								default:
								try{egl.enterBlock();
								}finally{egl.exitBlock();}
								break;
							}
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,248,8916,20, this);
					td.removeChildren();
					egl.atLine(this.eze$$fileName,249,8945,52, this);
					td.setAttribute("rowSpan", gridData.verticalSpan );
					egl.atLine(this.eze$$fileName,250,9001,54, this);
					td.setAttribute("colSpan", gridData.horizontalSpan );
					egl.atLine(this.eze$$fileName,251,9059,87, this);
					if ( (gridData.widthHint != null) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,252,9094,45, this);
							td.setAttribute("width", gridData.widthHint );
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,254,9150,90, this);
					if ( (gridData.heightHint != null) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,255,9186,47, this);
							td.setAttribute("height", gridData.heightHint );
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,257,9244,25, this);
					td.appendChild(newChild );
					egl.atLine(this.eze$$fileName,258,9273,38, this);
					td.setAttribute("occupied", "true" );
					egl.atLine(this.eze$$fileName,259,9316,112, this);
					if ( (gridData.cellPadding > 0) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,260,9352,69, this);
							td.setStyle( (((this.defaultTDStyle + "padding:") + (gridData.cellPadding).toString()) + "px") );
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,174,6570,2871, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"removeChild": function( child ) {
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
		try { egl.enter("removeChild",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("child", child, "egl.ui.rui.Widget", "child");
			egl.atLine(this.eze$$fileName,266,9497,157, this);
			{
				try{egl.enterBlock();
					var index = 0;
					egl.addLocalFunctionVariable("index", index, "int", "index");
					index = 1;
					egl.setLocalFunctionVariable("index", index, "int");
					for ( ; (index <= this.cells.getSize()); index = (index + 1) )
					{
						egl.setLocalFunctionVariable("index", index, "int");
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,267,9547,101, this);
							if ( (egl.checkNull(this.cells, "cells")[this.cells.checkIndex((index)-1)] == child) ) {
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,268,9578,27, this);
									this.cells.removeElement( index );
									egl.atLine(this.eze$$fileName,269,9610,19, this);
									this.setChildren(this.cells );
									egl.atLine(this.eze$$fileName,270,9634,7, this);
									{ if (!egl.debugg) egl.leave(); return;}
								}finally{egl.exitBlock();}
							}
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,266,9497,157, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,265,9445,214, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"removeChildren": function() {
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
		try { egl.enter("removeChildren",this,arguments,eze$$updater);
			egl.atLine(this.eze$$fileName,276,9704,11, this);
			this.cells = [  ];
			egl.atLine(this.eze$$fileName,277,9718,9, this);
			this.layout();
			egl.atLine(this.eze$$fileName,275,9663,69, this);
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
			egl.atLine(this.eze$$fileName,281,9756,19, this);
			this.setChildren(this.cells );
			egl.atLine(this.eze$$fileName,280,9736,44, this);
			{ if (!egl.debugg) egl.leave(); }
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
			var $result = 0;
			egl.atLine(this.eze$$fileName,285,9821,22, this);
			$result = this.columns;
			egl.setLocalFunctionVariable("INT", $result, "int");
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
			egl.addLocalFunctionVariable("columns", columns, "int", "columns");
			egl.atLine(this.eze$$fileName,289,9890,23, this);
			this.columns = columns;
			egl.atLine(this.eze$$fileName,290,9916,9, this);
			this.layout();
			egl.atLine(this.eze$$fileName,288,9852,78, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"getRows": function() {
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
		try { egl.enter("getRows",this,arguments,eze$$updater);
			var $result = 0;
			egl.atLine(this.eze$$fileName,294,9968,19, this);
			$result = this.rows;
			egl.setLocalFunctionVariable("INT", $result, "int");
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"setRows": function( rows ) {
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
		try { egl.enter("setRows",this,arguments,eze$$updater);
			egl.addLocalFunctionVariable("rows", rows, "int", "rows");
			egl.atLine(this.eze$$fileName,298,10027,17, this);
			this.rows = rows;
			egl.atLine(this.eze$$fileName,299,10047,9, this);
			this.layout();
			egl.atLine(this.eze$$fileName,297,9995,66, this);
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
			egl.atLine(this.eze$$fileName,303,10105,26, this);
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
			egl.atLine(this.eze$$fileName,307,10185,31, this);
			this.cellPadding = cellPadding;
			egl.atLine(this.eze$$fileName,308,10224,24, this);
			var ezert$$17 = 0;
			ezert$$17 = this.table.getChildren().getSize();
			egl.atLine(this.eze$$fileName,308,10219,53, this);
			if ( (ezert$$17 <= 0) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,309,10259,7, this);
					{ if (!egl.debugg) egl.leave(); return;}
				}finally{egl.exitBlock();}
			}
			var oDisplayStyle = "";
			egl.addLocalFunctionVariable("oDisplayStyle", oDisplayStyle, "string", "oDisplayStyle");
			egl.atLine(this.eze$$fileName,311,10275,13, this);
			oDisplayStyle = this.table.getDisplayStyle();
			egl.setLocalFunctionVariable("oDisplayStyle", oDisplayStyle, "string");
			egl.atLine(this.eze$$fileName,312,10320,28, this);
			this.table.setDisplayStyle( "none" );
			var tds = null;
			egl.addLocalFunctionVariable("tds", tds, "egl.ui.rui.Widget[]", "!tds");
			egl.atLine(this.eze$$fileName,313,10366,32, this);
			var ezert$$18 = null;
			ezert$$18 = this.table.getElementsByTagName("td" );
			egl.atLine(this.eze$$fileName,313,10351,3, this);
			tds = ezert$$18;
			egl.setLocalFunctionVariable("tds", tds, "egl.ui.rui.Widget[]");
			var count = 0;
			egl.addLocalFunctionVariable("count", count, "int", "count");
			egl.atLine(this.eze$$fileName,314,10420,13, this);
			var ezert$$19 = 0;
			ezert$$19 = tds.getSize();
			egl.atLine(this.eze$$fileName,314,10408,5, this);
			count = ezert$$19;
			egl.setLocalFunctionVariable("count", count, "int");
			egl.atLine(this.eze$$fileName,315,10443,114, this);
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
							egl.atLine(this.eze$$fileName,316,10479,65, this);
							egl.checkNull(tds, "tds")[tds.checkIndex((n)-1)].setStyle( (((this.defaultTDStyle + "padding:") + (cellPadding).toString()) + "px") );
						}finally{egl.exitBlock();}
						egl.atLine(this.eze$$fileName,315,10443,114, this);
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,318,10560,35, this);
			this.table.setDisplayStyle( oDisplayStyle );
			egl.atLine(this.eze$$fileName,306,10139,461, this);
			{ if (!egl.debugg) egl.leave(); }
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
			egl.atLine(this.eze$$fileName,322,10669,36, this);
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
			egl.atLine(this.eze$$fileName,326,10789,47, this);
			this.widgetOrientationThis = widgetOrientation;
			var eze_Cond_Temp_1 = false;
			egl.atLine(this.eze$$fileName,327,10844,50, this);
			if ( (this.widgetOrientationThis != "") ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,327,10875,15, this);
					var ezert$$20 = 0;
					ezert$$20 = this.cells.getSize();
					egl.atLine(this.eze$$fileName,327,10844,50, this);
					if ( (ezert$$20 > 0) ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,327,10844,50, this);
							eze_Cond_Temp_1 = true;
						}finally{egl.exitBlock();}
					}
					else {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,327,10844,50, this);
							eze_Cond_Temp_1 = false;
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,327,10844,50, this);
					eze_Cond_Temp_1 = false;
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,327,10841,427, this);
			if ( eze_Cond_Temp_1 ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,328,10899,48, this);
					this.table.setWidgetOrientation( this.widgetOrientationThis );
					egl.atLine(this.eze$$fileName,329,10951,137, this);
					if ( (this.widgetOrientationThis == "RTL") ) {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,330,10991,37, this);
							this.table.setAttribute("align", "right" );
						}finally{egl.exitBlock();}
					}
					else {
						try{egl.enterBlock();
							egl.atLine(this.eze$$fileName,332,11041,36, this);
							this.table.setAttribute("align", "left" );
						}finally{egl.exitBlock();}
					}
					egl.atLine(this.eze$$fileName,334,11092,167, this);
					{
						try{egl.enterBlock();
							var index = 0;
							egl.addLocalFunctionVariable("index", index, "int", "index");
							index = 1;
							egl.setLocalFunctionVariable("index", index, "int");
							for ( ; (index <= this.cells.getSize()); index = (index + 1) )
							{
								egl.setLocalFunctionVariable("index", index, "int");
								try{egl.enterBlock();
									egl.atLine(this.eze$$fileName,335,11143,109, this);
									if ( (egl.checkNull(this.cells, "cells")[this.cells.checkIndex((index)-1)].getWidgetOrientation() == "") ) {
										try{egl.enterBlock();
											egl.atLine(this.eze$$fileName,336,11189,55, this);
											egl.checkNull(this.cells, "cells")[this.cells.checkIndex((index)-1)].setWidgetOrientation( this.widgetOrientationThis );
										}finally{egl.exitBlock();}
									}
								}finally{egl.exitBlock();}
								egl.atLine(this.eze$$fileName,334,11092,167, this);
							}
						}finally{egl.exitBlock();}
					}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,325,10714,561, this);
			{ if (!egl.debugg) egl.leave(); }
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"isValidGridLayoutData": function( gridData ) {
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
		try { egl.enter("isValidGridLayoutData",this,arguments,eze$$updater);
			var $result = false;
			egl.addLocalFunctionVariable("gridData", gridData, "com.ibm.egl.rui.widgets.GridLayoutData", "gridData");
			egl.atLine(this.eze$$fileName,343,11358,344, this);
			if ( ((((((((gridData.row <= 0) || (gridData.row > this.rows)) || (gridData.column <= 0)) || (gridData.column > this.columns)) || (gridData.verticalSpan <= 0)) || ((gridData.verticalSpan + gridData.row) > (this.rows + 1))) || (gridData.horizontalSpan <= 0)) || ((gridData.horizontalSpan + gridData.column) > (this.columns + 1))) ) {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,346,11656,15, this);
					$result = false;
					egl.setLocalFunctionVariable("BOOLEAN", $result, "boolean");
					{ if (!egl.debugg) egl.leave(); return $result;}
				}finally{egl.exitBlock();}
			}
			else {
				try{egl.enterBlock();
					egl.atLine(this.eze$$fileName,348,11682,14, this);
					$result = true;
					egl.setLocalFunctionVariable("BOOLEAN", $result, "boolean");
					{ if (!egl.debugg) egl.leave(); return $result;}
				}finally{egl.exitBlock();}
			}
			egl.atLine(this.eze$$fileName,342,11279,428, this);
			{ if (!egl.debugg) egl.leave(); return $result;}
		} finally {
			if (!egl.debugg){
			} else { egl.leave(); }
		}
	}
	,
	"toString": function() {
		return "[GridLayout]";
	}
	,
	"eze$$getName": function() {
		return "GridLayout";
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
		{name: "GridLayoutLib", value : egl.com.ibm.egl.rui.widgets.GridLayoutLib['$inst'], type : "com.ibm.egl.rui.widgets.GridLayoutLib", jsName : "egl.com.ibm.egl.rui.widgets.GridLayoutLib.$inst"},
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
		{name: "columns", value : function(){try{return eze$$parent.getColumns();}catch(e){return null;}}(), type : "int", jsName : "columns", getter : "getColumns", setter : "setColumns"},
		{name: "rows", value : function(){try{return eze$$parent.getRows();}catch(e){return null;}}(), type : "int", jsName : "rows", getter : "getRows", setter : "setRows"},
		{name: "cellPadding", value : function(){try{return eze$$parent.getCellPadding();}catch(e){return null;}}(), type : "int", jsName : "cellPadding", getter : "getCellPadding", setter : "setCellPadding"},
		{name: "table", value : eze$$parent.table, type : "egl.ui.rui.Widget", jsName : "table"},
		{name: "innerTable", value : eze$$parent.innerTable, type : "egl.ui.rui.Widget", jsName : "innerTable"},
		{name: "widgetOrientationThis", value : eze$$parent.widgetOrientationThis, type : "string", jsName : "widgetOrientationThis"},
		{name: "cells", value : eze$$parent.cells, type : "egl.ui.rui.Widget[]", jsName : "!cells"},
		{name: "defaultTDStyle", value : eze$$parent.defaultTDStyle, type : "string", jsName : "defaultTDStyle"},
		{name: "loaded", value : eze$$parent.loaded, type : "boolean", jsName : "loaded"},
		{name: "internalID", value : eze$$parent.internalID, type : "string", jsName : "internalID"}
		];
	}
}
);
