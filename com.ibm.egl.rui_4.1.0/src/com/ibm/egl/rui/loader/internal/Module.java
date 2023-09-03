// Generated at Sun Sep 03 10:03:15 AST 2023 by EGL 8.0.0.v20180914_0609
// No APARs installed.
package com.ibm.egl.rui.loader.internal;

public class Module extends com.ibm.javart.Container
{
	private static final long serialVersionUID = 70L;
	
	public com.ibm.javart.StringValue name;
	public com.ibm.javart.StringValue javascript;
	public com.ibm.javart.StringValue moduleType;
	
	public Module() throws com.ibm.javart.JavartException
	{
		this( "Module", null, com.ibm.javart.util.ServiceUtilities.programInstance("Module", false), com.ibm.javart.Value.SQL_NOT_NULLABLE, "Tcom/ibm/egl/rui/loader/internal/Module;" );
	}
	public Module( String ezeName, com.ibm.javart.Container ezeContainer, final com.ibm.javart.resources.Program ezeProgram, int ezeNullStatus, String ezeSignature )
	throws com.ibm.javart.JavartException
	{
		super( ezeName, ezeContainer, ezeNullStatus );
		signature( ezeSignature );
		this.ezeProgram = ezeProgram;
		
		name = new com.ibm.javart.StringItem( "name", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING );
		add( name );
		javascript = new com.ibm.javart.StringItem( "javascript", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING );
		add( javascript );
		moduleType = new com.ibm.javart.StringItem( "moduleType", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING );
		add( moduleType );
		
		
	}
	
	public Object clone() throws java.lang.CloneNotSupportedException
	{
		Module ezeClone = (Module)super.clone();
		ezeClone.name = (com.ibm.javart.StringValue)name.clone();
		ezeClone.add( ezeClone.name );
		ezeClone.javascript = (com.ibm.javart.StringValue)javascript.clone();
		ezeClone.add( ezeClone.javascript );
		ezeClone.moduleType = (com.ibm.javart.StringValue)moduleType.clone();
		ezeClone.add( ezeClone.moduleType );
		return ezeClone;
	}
	
	public java.lang.String getname()
	{
		return name.getValue();
	}
	public void setname( java.lang.String ezeValue ) throws com.ibm.javart.JavartException
	{
		ezeProgram._setModified( Module.this, "name", name, ezeValue );
		if ( ezeValue == null )
		{
			throw new java.lang.NullPointerException();
		}
		else
		{
			com.ibm.javart.operations.Assign.run( ezeProgram, name, ezeValue );
		}
	}
	public java.lang.String getname_AsString() throws com.ibm.javart.JavartException
	{
		return com.ibm.javart.util.StringUtil.clip( name.getValue() );
	}
	public void setname_AsString( java.lang.String ezeValue ) throws com.ibm.javart.JavartException
	{
		ezeProgram._setModified( Module.this, "name", name, ezeValue );
		if ( ezeValue == null )
		{
			com.ibm.javart.operations.Assign.run( ezeProgram, name, com.ibm.javart.ref.Null.NULL );
		}
		else
		{
			com.ibm.javart.operations.Assign.run( ezeProgram, name, ezeValue );
		}
	}
	public java.lang.String getjavascript()
	{
		return javascript.getValue();
	}
	public void setjavascript( java.lang.String ezeValue ) throws com.ibm.javart.JavartException
	{
		ezeProgram._setModified( Module.this, "javascript", javascript, ezeValue );
		if ( ezeValue == null )
		{
			throw new java.lang.NullPointerException();
		}
		else
		{
			com.ibm.javart.operations.Assign.run( ezeProgram, javascript, ezeValue );
		}
	}
	public java.lang.String getjavascript_AsString() throws com.ibm.javart.JavartException
	{
		return com.ibm.javart.util.StringUtil.clip( javascript.getValue() );
	}
	public void setjavascript_AsString( java.lang.String ezeValue ) throws com.ibm.javart.JavartException
	{
		ezeProgram._setModified( Module.this, "javascript", javascript, ezeValue );
		if ( ezeValue == null )
		{
			com.ibm.javart.operations.Assign.run( ezeProgram, javascript, com.ibm.javart.ref.Null.NULL );
		}
		else
		{
			com.ibm.javart.operations.Assign.run( ezeProgram, javascript, ezeValue );
		}
	}
	public java.lang.String getmoduleType()
	{
		return moduleType.getValue();
	}
	public void setmoduleType( java.lang.String ezeValue ) throws com.ibm.javart.JavartException
	{
		ezeProgram._setModified( Module.this, "moduleType", moduleType, ezeValue );
		if ( ezeValue == null )
		{
			throw new java.lang.NullPointerException();
		}
		else
		{
			com.ibm.javart.operations.Assign.run( ezeProgram, moduleType, ezeValue );
		}
	}
	public java.lang.String getmoduleType_AsString() throws com.ibm.javart.JavartException
	{
		return com.ibm.javart.util.StringUtil.clip( moduleType.getValue() );
	}
	public void setmoduleType_AsString( java.lang.String ezeValue ) throws com.ibm.javart.JavartException
	{
		ezeProgram._setModified( Module.this, "moduleType", moduleType, ezeValue );
		if ( ezeValue == null )
		{
			com.ibm.javart.operations.Assign.run( ezeProgram, moduleType, com.ibm.javart.ref.Null.NULL );
		}
		else
		{
			com.ibm.javart.operations.Assign.run( ezeProgram, moduleType, ezeValue );
		}
	}
	
	public com.ibm.javart.util.JavartRecordHelper helper()
	{
		if (ezeHelper == null)
		{
			ezeHelper = new com.ibm.egl.rui.loader.internal.Module_Helper( ezeProgram );
		}
		return ezeHelper;
	}
}
