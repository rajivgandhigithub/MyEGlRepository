/*
 * Licensed Materials - Property of IBM
 *
 * Copyright IBM Corporation 2008, 2011. All Rights Reserved.
 *
 * U.S. Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA DP Schedule Contract with IBM Corp.
 */

egl.defineClass("com.ibm.egl.rui.widgets", "UtilLibNative", {
	
	"getWidgetVariableName" : function(widget) {
		if (widget != null && widget.eze$$variableName != undefined) {
			return widget.eze$$variableName;
		} 
		return "";
	},
	"destroyWidget" : function(widget) {
		egl.destroyWidget(widget);
	},
	"destroyWidgetChildren" : function(widget) {
		egl.destroyWidgetChildren(widget);
	},
	"clearHTMLString" : function(){
		this.HTMLBuffer = [];
		this.htmlStringCount = 0;
	},
	"appendHTMLString" : function(str) {
		this.HTMLBuffer[this.htmlStringCount++] = str;
	},
	
	"getHTMLString" : function(){
		return this.HTMLBuffer.join("");
	}
});

