// Generated at Sun Sep 03 10:02:44 AST 2023 by EGL 7.1.1.v20180914_0609
// No APARs installed.
egl.defineClass(  "records", "ARecord", "egl.jsrt", "Record", {
	'eze$$fileName': '/ADataProject/EGLSource/records/ARecordFile.egl',
	"constructor" : function( )
	{
		this.eze$$XMLRootElementName = "ARecord";
		this.eze$$setInitial();
	}
	,
	"eze$$setEmpty": function() {
		this.aString = "";
	}
	,
	"eze$$setInitial": function() {
		this.eze$$setEmpty();
	}
	,
	"eze$$clone": function() {
		var ezert$$1 = this;
		var ezert$$2 = new egl.records.ARecord();
		ezert$$2.eze$$isNull = this.eze$$isNull;
		ezert$$2.eze$$isNullable = this.eze$$isNullable;
		ezert$$2.eze$$assign(ezert$$1);
		return ezert$$2;
	}
	,
	"eze$$assign": function(other){
		if (!this.eze$$isNullable && other.eze$$isNull)
		{
			this.eze$$setEmpty();
		}
		else
		{
			if (this.eze$$isNullable)
			{
				this.eze$$isNull = other.eze$$isNull;
			}
			this.aString = other.aString;
		}
	}
	,
	"eze$$getFieldSignatures": function() {
		return [
		{name: "aString", value : this.aString, type : "S;"}
		];
	}
	,
	"eze$$getFORMDataNames": function() {
		return [
		["aString", "aString"]
		];
	}
	,
	"eze$$getJSONNames": function() {
		return [
		["aString", "aString"]
		];
	}
	,
	"eze$$fromJson": function( object, ordered ) {
		if (object == null) {
			return;
		}
		this.eze$$setInitial();
		this.setNull(false);
		if (ordered) {
			var objArray = [];
			for (f in object) {
				if (typeof(object[f]) == "string") {
					object[f] = object[f].replace(/&quot;/g, '"');
				}
				objArray.push(object[f]);
			}
			this.aString = objArray[0];
		}
		else {
			egl.egl.core.$ServiceLib.throwExceptionIfNecessary( object["aString"], "this.aString", false );
			this.aString = object["aString"];
		}
	}
	,
	"eze$$fromXML": function( element, xmlName ) {
		var node, nodelist, value;
		this.eze$$setInitial();
		if (xmlName == null) {
			xmlName = this.eze$$XMLRootElementName;
		}
		value = egl.egl.core.$XMLLib.setSimpleElementField( element,  "aString" );
		if (value) {
			this.aString = value;
		}
	}
	,
	"eze$$toXML": function( namespaces, xmlName ) {
		var prefix;
		if (xmlName == null) {
			prefix = "";
			xmlName = prefix + this.eze$$XMLRootElementName;
		}
		var s = ["<" + xmlName];
		s.push(">");
		s.push(egl.egl.core.$XMLLib.writeElement( this.aString, "aString"));
		s.push("</" + xmlName + ">");
		return s.join('');
	}
});
