// Generated at Sun Sep 03 10:03:14 AST 2023 by EGL 7.1.1.v20180914_0609
// No APARs installed.
if (egl.eze$$userLibs) egl.eze$$userLibs.push('com.ibm.egl.rui.mvc.InternalValidators');
else egl.eze$$userLibs = ['com.ibm.egl.rui.mvc.InternalValidators'];
egl.defineRUILibrary( 'com.ibm.egl.rui.mvc', 'InternalValidators',
	{
		'eze$$fileName': '/com.ibm.egl.rui_4.1.0/EGLSource/com/ibm/egl/rui/mvc/InternalValidators.egl',
		'eze$$runtimePropertiesFile': 'com/ibm/egl/rui/mvc/InternalValidators',
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
				if(egl.com.ibm.egl.rui.mvc.InternalValidators['$inst']){
					if (!egl.debugg) egl.leave();
					return egl.com.ibm.egl.rui.mvc.InternalValidators['$inst'];
				}
				egl.com.ibm.egl.rui.mvc.InternalValidators['$inst']=this;
				egl.atLine(this.eze$$fileName,12,306,30, this);
				this.util = new egl.com.ibm.egl.rui.mvc.InternalFormattingUtil();
				
				egl.atLine(this.eze$$fileName,13,341,49, this);
				this.validHexDigits = "";
				this.jsrt$SysVar= new egl.egl.core.SysVar();
				new egl.egl.core.StrLib();
				new egl.egl.core.SysLib();
				new egl.egl.core.MathLib();
				egl.atLine(this.eze$$fileName,13,341,14, this);
				this.validHexDigits = "0123456789abcdefABCDEF";
				if (!egl.debugg) egl.leave();
			} finally {
				if (!egl.debugg){
				} else { egl.leave(); }
			}
		}
		
		,
		"isNotEmpty": function( s, message ) {
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
			try { egl.enter("isNotEmpty",this,arguments,eze$$updater);
				var $result = null;
				egl.addLocalFunctionVariable("s", s, "string", "s");
				egl.addLocalFunctionVariable("message", message, "string", "message");
				egl.atLine(this.eze$$fileName,16,473,129, this);
				if ( (s != "") ) {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,17,497,13, this);
						$result = null;
						egl.setLocalFunctionVariable("STRING?", $result, "string?");
						{ if (!egl.debugg) egl.leave(); return $result;}
					}finally{egl.exitBlock();}
				}
				else {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,19,543,45, this);
						var ezert$$1 = "";
						ezert$$1 = this.getReturnMessage(message, "CRRUI2700E", null );
						egl.atLine(this.eze$$fileName,19,536,54, this);
						$result = ezert$$1;
						egl.setLocalFunctionVariable("STRING?", $result, "string?");
						{ if (!egl.debugg) egl.leave(); return $result;}
					}finally{egl.exitBlock();}
				}
				egl.atLine(this.eze$$fileName,15,396,214, this);
				{ if (!egl.debugg) egl.leave(); return $result;}
			} finally {
				if (!egl.debugg){
				} else { egl.leave(); }
			}
		}
		,
		"isDecimalDigits": function( text, message ) {
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
			try { egl.enter("isDecimalDigits",this,arguments,eze$$updater);
				var $result = null;
				egl.addLocalFunctionVariable("text", text, "string", "text");
				egl.addLocalFunctionVariable("message", message, "string", "message");
				var len = 0;
				egl.addLocalFunctionVariable("len", len, "int", "len");
				egl.atLine(this.eze$$fileName,24,708,25, this);
				var ezert$$2 = 0;
				ezert$$2 = egl.egl.core.$StrLib.textLen( text);
				egl.atLine(this.eze$$fileName,24,698,3, this);
				len = ezert$$2;
				egl.setLocalFunctionVariable("len", len, "int");
				var decimalSeparator = "";
				egl.addLocalFunctionVariable("decimalSeparator", decimalSeparator, "string", "decimalSeparator");
				egl.atLine(this.eze$$fileName,25,766,26, this);
				var ezert$$3 = "";
				ezert$$3 = this.util.getDecimalSeparator();
				egl.atLine(this.eze$$fileName,25,740,16, this);
				decimalSeparator = ezert$$3;
				egl.setLocalFunctionVariable("decimalSeparator", decimalSeparator, "string");
				var groupingSeparator = "";
				egl.addLocalFunctionVariable("groupingSeparator", groupingSeparator, "string", "groupingSeparator");
				egl.atLine(this.eze$$fileName,26,826,27, this);
				var ezert$$4 = "";
				ezert$$4 = this.util.getGroupingSeparator();
				egl.atLine(this.eze$$fileName,26,799,17, this);
				groupingSeparator = ezert$$4;
				egl.setLocalFunctionVariable("groupingSeparator", groupingSeparator, "string");
				egl.atLine(this.eze$$fileName,28,866,231, this);
				{
					try{egl.enterBlock();
						var i = 0;
						egl.addLocalFunctionVariable("i", i, "int", "i");
						i = 1;
						egl.setLocalFunctionVariable("i", i, "int");
						for ( ; (i <= len); i = (i + 1) )
						{
							egl.setLocalFunctionVariable("i", i, "int");
							try{egl.enterBlock();
								var s = "";
								egl.addLocalFunctionVariable("s", s, "string", "s");
								egl.atLine(this.eze$$fileName,29,898,1, this);
								s = text.substring( i-1,i);
								egl.setLocalFunctionVariable("s", s, "string");
								egl.atLine(this.eze$$fileName,30,926,162, this);
								if ( (((((s < "0") || (s > "9")) && (s != "-")) && (s != decimalSeparator)) && (s != groupingSeparator)) ) {
									try{egl.enterBlock();
										egl.atLine(this.eze$$fileName,31,1031,45, this);
										var ezert$$5 = "";
										ezert$$5 = this.getReturnMessage(message, "CRRUI2702E", null );
										egl.atLine(this.eze$$fileName,31,1024,54, this);
										$result = ezert$$5;
										egl.setLocalFunctionVariable("STRING?", $result, "string?");
										{ if (!egl.debugg) egl.leave(); return $result;}
									}finally{egl.exitBlock();}
								}
							}finally{egl.exitBlock();}
							egl.atLine(this.eze$$fileName,28,866,231, this);
						}
					}finally{egl.exitBlock();}
				}
				egl.atLine(this.eze$$fileName,35,1109,13, this);
				$result = null;
				egl.setLocalFunctionVariable("STRING?", $result, "string?");
				{ if (!egl.debugg) egl.leave(); return $result;}
			} finally {
				if (!egl.debugg){
				} else { egl.leave(); }
			}
		}
		,
		"isHexDigits": function( s, message ) {
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
			try { egl.enter("isHexDigits",this,arguments,eze$$updater);
				var $result = null;
				egl.addLocalFunctionVariable("s", s, "string", "s");
				egl.addLocalFunctionVariable("message", message, "string", "message");
				var strLen = 0;
				egl.addLocalFunctionVariable("strLen", strLen, "int", "strLen");
				egl.atLine(this.eze$$fileName,39,1227,22, this);
				var ezert$$6 = 0;
				ezert$$6 = egl.egl.core.$StrLib.textLen( s);
				egl.atLine(this.eze$$fileName,39,1214,6, this);
				strLen = ezert$$6;
				egl.setLocalFunctionVariable("strLen", strLen, "int");
				egl.atLine(this.eze$$fileName,40,1259,188, this);
				{
					try{egl.enterBlock();
						var i = 0;
						egl.addLocalFunctionVariable("i", i, "int", "i");
						i = 1;
						egl.setLocalFunctionVariable("i", i, "int");
						for ( ; (i <= strLen); i = (i + 1) )
						{
							egl.setLocalFunctionVariable("i", i, "int");
							try{egl.enterBlock();
								egl.atLine(this.eze$$fileName,41,1302,40, this);
								var ezert$$7 = 0;
								ezert$$7 = egl.egl.core.$StrLib.indexOf( this.validHexDigits, (s.substring( i-1,i)));
								egl.atLine(this.eze$$fileName,41,1299,136, this);
								if ( (ezert$$7 == 0) ) {
									try{egl.enterBlock();
										egl.atLine(this.eze$$fileName,42,1372,45, this);
										var ezert$$8 = "";
										ezert$$8 = this.getReturnMessage(message, "CRRUI2712E", null );
										egl.atLine(this.eze$$fileName,42,1365,54, this);
										$result = ezert$$8;
										egl.setLocalFunctionVariable("STRING?", $result, "string?");
										{ if (!egl.debugg) egl.leave(); return $result;}
									}finally{egl.exitBlock();}
								}
							}finally{egl.exitBlock();}
							egl.atLine(this.eze$$fileName,40,1259,188, this);
						}
					}finally{egl.exitBlock();}
				}
				egl.atLine(this.eze$$fileName,45,1456,13, this);
				$result = null;
				egl.setLocalFunctionVariable("STRING?", $result, "string?");
				{ if (!egl.debugg) egl.leave(); return $result;}
			} finally {
				if (!egl.debugg){
				} else { egl.leave(); }
			}
		}
		,
		"checkMinimumInput": function( s, minLength, message ) {
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
			try { egl.enter("checkMinimumInput",this,arguments,eze$$updater);
				var $result = null;
				egl.addLocalFunctionVariable("s", s, "string", "s");
				egl.addLocalFunctionVariable("minLength", minLength, "int", "minLength");
				egl.addLocalFunctionVariable("message", message, "string", "message");
				egl.atLine(this.eze$$fileName,49,1588,22, this);
				var ezert$$9 = 0;
				ezert$$9 = egl.egl.core.$StrLib.textLen( s);
				egl.atLine(this.eze$$fileName,49,1585,157, this);
				if ( (ezert$$9 >= minLength) ) {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,50,1637,13, this);
						$result = null;
						egl.setLocalFunctionVariable("STRING?", $result, "string?");
						{ if (!egl.debugg) egl.leave(); return $result;}
					}finally{egl.exitBlock();}
				}
				else {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,52,1683,45, this);
						var ezert$$10 = "";
						ezert$$10 = this.getReturnMessage(message, "CRRUI2705E", null );
						egl.atLine(this.eze$$fileName,52,1676,54, this);
						$result = ezert$$10;
						egl.setLocalFunctionVariable("STRING?", $result, "string?");
						{ if (!egl.debugg) egl.leave(); return $result;}
					}finally{egl.exitBlock();}
				}
				egl.atLine(this.eze$$fileName,48,1483,267, this);
				{ if (!egl.debugg) egl.leave(); return $result;}
			} finally {
				if (!egl.debugg){
				} else { egl.leave(); }
			}
		}
		,
		"checkValidValues": function( s, validValues, message ) {
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
			try { egl.enter("checkValidValues",this,arguments,eze$$updater);
				var $result = null;
				egl.addLocalFunctionVariable("s", s, "string", "s");
				egl.addLocalFunctionVariable("validValues", validValues, "any[][]", "!validValues");
				egl.addLocalFunctionVariable("message", message, "string", "message");
				var input = "";
				egl.addLocalFunctionVariable("input", input, "string", "input");
				egl.atLine(this.eze$$fileName,57,1878,17, this);
				var ezert$$11 = null;
				ezert$$11 = egl.egl.core.$StrLib.clip( s, 0);
				egl.atLine(this.eze$$fileName,57,1863,5, this);
				input = (function(x){ return x !== null ? ((x).toString()) : ""; })(ezert$$11);
				egl.setLocalFunctionVariable("input", input, "string");
				var length = 0;
				egl.addLocalFunctionVariable("length", length, "int", "length");
				egl.atLine(this.eze$$fileName,58,1918,21, this);
				var ezert$$12 = 0;
				ezert$$12 = validValues.getSize();
				egl.atLine(this.eze$$fileName,58,1905,6, this);
				length = ezert$$12;
				egl.setLocalFunctionVariable("length", length, "int");
				egl.atLine(this.eze$$fileName,59,1949,1629, this);
				if ( (egl.isa(egl.boxAny(egl.checkNull(validValues, "validValues")[validValues.checkIndex((1)-1)][egl.checkNull(validValues, "validValues")[validValues.checkIndex((1)-1)].checkIndex((1)-1)]), "?S;") || egl.isa(egl.boxAny(egl.checkNull(validValues, "validValues")[validValues.checkIndex((1)-1)][egl.checkNull(validValues, "validValues")[validValues.checkIndex((1)-1)].checkIndex((1)-1)]), "S;")) ) {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,60,2027,823, this);
						{
							try{egl.enterBlock();
								var i = 0;
								egl.addLocalFunctionVariable("i", i, "int", "i");
								i = 1;
								egl.setLocalFunctionVariable("i", i, "int");
								for ( ; (i <= length); i = (i + 1) )
								{
									egl.setLocalFunctionVariable("i", i, "int");
									try{egl.enterBlock();
										egl.atLine(this.eze$$fileName,61,2074,24, this);
										var ezert$$13 = 0;
										ezert$$13 = egl.checkNull(validValues, "validValues")[validValues.checkIndex((i)-1)].getSize();
										egl.atLine(this.eze$$fileName,61,2071,763, this);
										if ( (ezert$$13 == 1) ) {
											try{egl.enterBlock();
												egl.atLine(this.eze$$fileName,62,2137,33, this);
												var ezert$$14 = null;
												ezert$$14 = egl.egl.core.$StrLib.clip( (egl.convertAnyToString(egl.boxAny(egl.checkNull(validValues, "validValues")[validValues.checkIndex((i)-1)][egl.checkNull(validValues, "validValues")[validValues.checkIndex((i)-1)].checkIndex((1)-1)]),true)), 0);
												egl.atLine(this.eze$$fileName,62,2125,108, this);
												if ( (egl.nullableCompare(input,ezert$$14, 1) == 0) ) {
													try{egl.enterBlock();
														egl.atLine(this.eze$$fileName,63,2196,13, this);
														$result = null;
														egl.setLocalFunctionVariable("STRING?", $result, "string?");
														{ if (!egl.debugg) egl.leave(); return $result;}
													}finally{egl.exitBlock();}
												}
											}finally{egl.exitBlock();}
										}
										else {
											try{egl.enterBlock();
												egl.atLine(this.eze$$fileName,66,2287,33, this);
												var ezert$$15 = null;
												ezert$$15 = egl.egl.core.$StrLib.clip( (egl.convertAnyToString(egl.boxAny(egl.checkNull(validValues, "validValues")[validValues.checkIndex((i)-1)][egl.checkNull(validValues, "validValues")[validValues.checkIndex((i)-1)].checkIndex((1)-1)]),true)), 0);
												egl.atLine(this.eze$$fileName,66,2275,539, this);
												if ( (egl.nullableCompare(input,ezert$$15, -1) >= 0) ) {
													try{egl.enterBlock();
														var upper = "";
														egl.addLocalFunctionVariable("upper", upper, "string", "upper");
														egl.atLine(this.eze$$fileName,67,2361,33, this);
														var ezert$$16 = null;
														ezert$$16 = egl.egl.core.$StrLib.clip( (egl.convertAnyToString(egl.boxAny(egl.checkNull(validValues, "validValues")[validValues.checkIndex((i)-1)][egl.checkNull(validValues, "validValues")[validValues.checkIndex((i)-1)].checkIndex((2)-1)]),true)), 0);
														egl.atLine(this.eze$$fileName,67,2346,5, this);
														upper = (function(x){ return x !== null ? ((x).toString()) : ""; })(ezert$$16);
														egl.setLocalFunctionVariable("upper", upper, "string");
														egl.atLine(this.eze$$fileName,68,2420,84, this);
														if ( (s <= upper) ) {
															try{egl.enterBlock();
																egl.atLine(this.eze$$fileName,69,2463,13, this);
																$result = null;
																egl.setLocalFunctionVariable("STRING?", $result, "string?");
																{ if (!egl.debugg) egl.leave(); return $result;}
															}finally{egl.exitBlock();}
														}
														var len = 0;
														egl.addLocalFunctionVariable("len", len, "int", "len");
														egl.atLine(this.eze$$fileName,72,2540,26, this);
														var ezert$$17 = 0;
														ezert$$17 = egl.egl.core.$StrLib.textLen( upper);
														egl.atLine(this.eze$$fileName,72,2530,3, this);
														len = ezert$$17;
														egl.setLocalFunctionVariable("len", len, "int");
														egl.atLine(this.eze$$fileName,73,2595,26, this);
														var ezert$$18 = 0;
														ezert$$18 = egl.egl.core.$StrLib.textLen( input);
														egl.atLine(this.eze$$fileName,73,2592,198, this);
														if ( (ezert$$18 > len) ) {
															try{egl.enterBlock();
																egl.atLine(this.eze$$fileName,74,2657,105, this);
																if ( (input.substring( 1-1,len) <= upper) ) {
																	try{egl.enterBlock();
																		egl.atLine(this.eze$$fileName,75,2717,13, this);
																		$result = null;
																		egl.setLocalFunctionVariable("STRING?", $result, "string?");
																		{ if (!egl.debugg) egl.leave(); return $result;}
																	}finally{egl.exitBlock();}
																}
															}finally{egl.exitBlock();}
														}
													}finally{egl.exitBlock();}
												}
											}finally{egl.exitBlock();}
										}
									}finally{egl.exitBlock();}
									egl.atLine(this.eze$$fileName,60,2027,823, this);
								}
							}finally{egl.exitBlock();}
						}
					}finally{egl.exitBlock();}
				}
				else {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,82,2876,690, this);
						{
							try{egl.enterBlock();
								var i = 0;
								egl.addLocalFunctionVariable("i", i, "int", "i");
								i = 1;
								egl.setLocalFunctionVariable("i", i, "int");
								for ( ; (i <= length); i = (i + 1) )
								{
									egl.setLocalFunctionVariable("i", i, "int");
									try{egl.enterBlock();
										egl.atLine(this.eze$$fileName,83,2923,24, this);
										var ezert$$19 = 0;
										ezert$$19 = egl.checkNull(validValues, "validValues")[validValues.checkIndex((i)-1)].getSize();
										egl.atLine(this.eze$$fileName,83,2920,630, this);
										if ( (ezert$$19 == 1) ) {
											try{egl.enterBlock();
												egl.atLine(this.eze$$fileName,84,2977,30, this);
												var ezert$$20 = null;
												ezert$$20 = egl.egl.core.$MathLib.stringAsDecimal( input );
												egl.atLine(this.eze$$fileName,85,3039,52, this);
												var ezert$$21 = null;
												ezert$$21 = egl.egl.core.$MathLib.stringAsDecimal( egl.convertAnyToString(egl.boxAny(egl.checkNull(validValues, "validValues")[validValues.checkIndex((i)-1)][egl.checkNull(validValues, "validValues")[validValues.checkIndex((i)-1)].checkIndex((1)-1)]),false) );
												egl.atLine(this.eze$$fileName,84,2974,180, this);
												if ( (egl.nullableCompare(ezert$$20,ezert$$21, 1) == 0) ) {
													try{egl.enterBlock();
														egl.atLine(this.eze$$fileName,86,3117,13, this);
														$result = null;
														egl.setLocalFunctionVariable("STRING?", $result, "string?");
														{ if (!egl.debugg) egl.leave(); return $result;}
													}finally{egl.exitBlock();}
												}
											}finally{egl.exitBlock();}
										}
										else {
											try{egl.enterBlock();
												var eze_Cond_Temp_0 = false;
												egl.atLine(this.eze$$fileName,89,3199,30, this);
												var ezert$$22 = null;
												ezert$$22 = egl.egl.core.$MathLib.stringAsDecimal( input );
												egl.atLine(this.eze$$fileName,90,3261,52, this);
												var ezert$$23 = null;
												ezert$$23 = egl.egl.core.$MathLib.stringAsDecimal( egl.convertAnyToString(egl.boxAny(egl.checkNull(validValues, "validValues")[validValues.checkIndex((i)-1)][egl.checkNull(validValues, "validValues")[validValues.checkIndex((i)-1)].checkIndex((1)-1)]),false) );
												egl.atLine(this.eze$$fileName,89,3199,268, this);
												if ( (egl.nullableCompare(ezert$$22,ezert$$23, -1) >= 0) ) {
													try{egl.enterBlock();
														egl.atLine(this.eze$$fileName,91,3345,30, this);
														var ezert$$24 = null;
														ezert$$24 = egl.egl.core.$MathLib.stringAsDecimal( input );
														egl.atLine(this.eze$$fileName,92,3415,52, this);
														var ezert$$25 = null;
														ezert$$25 = egl.egl.core.$MathLib.stringAsDecimal( egl.convertAnyToString(egl.boxAny(egl.checkNull(validValues, "validValues")[validValues.checkIndex((i)-1)][egl.checkNull(validValues, "validValues")[validValues.checkIndex((i)-1)].checkIndex((2)-1)]),false) );
														egl.atLine(this.eze$$fileName,89,3199,268, this);
														if ( (egl.nullableCompare(ezert$$24,ezert$$25, 1) <= 0) ) {
															try{egl.enterBlock();
																egl.atLine(this.eze$$fileName,89,3199,268, this);
																eze_Cond_Temp_0 = true;
															}finally{egl.exitBlock();}
														}
														else {
															try{egl.enterBlock();
																egl.atLine(this.eze$$fileName,89,3199,268, this);
																eze_Cond_Temp_0 = false;
															}finally{egl.exitBlock();}
														}
													}finally{egl.exitBlock();}
												}
												else {
													try{egl.enterBlock();
														egl.atLine(this.eze$$fileName,89,3199,268, this);
														eze_Cond_Temp_0 = false;
													}finally{egl.exitBlock();}
												}
												egl.atLine(this.eze$$fileName,89,3196,334, this);
												if ( eze_Cond_Temp_0 ) {
													try{egl.enterBlock();
														egl.atLine(this.eze$$fileName,93,3493,13, this);
														$result = null;
														egl.setLocalFunctionVariable("STRING?", $result, "string?");
														{ if (!egl.debugg) egl.leave(); return $result;}
													}finally{egl.exitBlock();}
												}
											}finally{egl.exitBlock();}
										}
									}finally{egl.exitBlock();}
									egl.atLine(this.eze$$fileName,82,2876,690, this);
								}
							}finally{egl.exitBlock();}
						}
					}finally{egl.exitBlock();}
				}
				egl.atLine(this.eze$$fileName,99,3595,45, this);
				var ezert$$26 = "";
				ezert$$26 = this.getReturnMessage(message, "CRRUI2716E", null );
				egl.atLine(this.eze$$fileName,99,3588,54, this);
				$result = ezert$$26;
				egl.setLocalFunctionVariable("STRING?", $result, "string?");
				{ if (!egl.debugg) egl.leave(); return $result;}
			} finally {
				if (!egl.debugg){
				} else { egl.leave(); }
			}
		}
		,
		"getReturnMessage": function( message, defaultKey, inserts ) {
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
			try { egl.enter("getReturnMessage",this,arguments,eze$$updater);
				var $result = "";
				egl.addLocalFunctionVariable("message", message, "string?", "message");
				egl.addLocalFunctionVariable("defaultKey", defaultKey, "string", "defaultKey");
				egl.addLocalFunctionVariable("inserts", inserts, "string[]", "!inserts");
				egl.atLine(this.eze$$fileName,103,3777,153, this);
				if ( !(((message == null) || (egl.nullableCompare(message,"", 1) == 0))) ) {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,104,3829,16, this);
						$result = (function(x){ return x !== null ? ((x).toString()) : ""; })(message);
						egl.setLocalFunctionVariable("STRING", $result, "string");
						{ if (!egl.debugg) egl.leave(); return $result;}
					}finally{egl.exitBlock();}
				}
				else {
					try{egl.enterBlock();
						egl.atLine(this.eze$$fileName,106,3878,38, this);
						var ezert$$27 = null;
						ezert$$27 = egl.getRuntimeMessage( defaultKey, inserts );
						egl.atLine(this.eze$$fileName,106,3871,47, this);
						$result = (function(x){ return x !== null ? ((x).toString()) : ""; })(ezert$$27);
						egl.setLocalFunctionVariable("STRING", $result, "string");
						{ if (!egl.debugg) egl.leave(); return $result;}
					}finally{egl.exitBlock();}
				}
				egl.atLine(this.eze$$fileName,102,3656,282, this);
				{ if (!egl.debugg) egl.leave(); return $result;}
			} finally {
				if (!egl.debugg){
				} else { egl.leave(); }
			}
		}
		,
		"toString": function() {
			return "[InternalValidators]";
		}
		,
		"eze$$getName": function() {
			return "InternalValidators";
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
									{name : "workDBType", value : "AUX", attrs : egl.ATTR_BUILD_DESCRIPTOR_VAR, type : ""},
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
			
			{name: "util", value : eze$$parent.util, type : "com.ibm.egl.rui.mvc.InternalFormattingUtil", jsName : "util"},
			{name: "validHexDigits", value : eze$$parent.validHexDigits, type : "string", jsName : "validHexDigits"}
			];
		}
	}
);
