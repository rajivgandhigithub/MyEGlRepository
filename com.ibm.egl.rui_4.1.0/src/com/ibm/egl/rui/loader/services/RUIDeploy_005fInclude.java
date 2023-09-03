// Generated at Sun Sep 03 10:03:15 AST 2023 by EGL 8.0.0.v20180914_0609
// No APARs installed.
package com.ibm.egl.rui.loader.services;

public class RUIDeploy_005fInclude extends com.ibm.javart.Container
{
	private static final long serialVersionUID = 70L;
	
	public com.ibm.javart.ref.StringArrayRef include;
	
	public RUIDeploy_005fInclude() throws com.ibm.javart.JavartException
	{
		this( "RUIDeploy_005fInclude", null, com.ibm.javart.util.ServiceUtilities.programInstance("RUIDeploy_005fInclude", false), com.ibm.javart.Value.SQL_NOT_NULLABLE, "Tcom/ibm/egl/rui/loader/services/RUIDeploy_Include;" );
	}
	public RUIDeploy_005fInclude( String ezeName, com.ibm.javart.Container ezeContainer, final com.ibm.javart.resources.Program ezeProgram, int ezeNullStatus, String ezeSignature )
	throws com.ibm.javart.JavartException
	{
		super( ezeName, ezeContainer, ezeNullStatus );
		signature( ezeSignature );
		this.ezeProgram = ezeProgram;
		
		include = new com.ibm.javart.ref.StringArrayRef( "include", null, com.ibm.javart.Constants.SIGNATURE_STRING_ARRAY );
		add( include );
		
		
	}
	
	public Object clone() throws java.lang.CloneNotSupportedException
	{
		RUIDeploy_005fInclude ezeClone = (RUIDeploy_005fInclude)super.clone();
		ezeClone.include = (com.ibm.javart.ref.StringArrayRef)include.clone();
		ezeClone.add( ezeClone.include );
		return ezeClone;
	}
	
	public java.lang.String[] getinclude() throws com.ibm.javart.JavartException
	{
		return include.checkedValue( ezeProgram ).toPrimitiveArray();
	}
	public java.lang.String getinclude( int ezeIndex ) throws com.ibm.javart.JavartException
	{
		return com.ibm.javart.operations.Subscript.run( ezeProgram, include.checkedValue( ezeProgram ), ezeIndex + 1 ).getValue();
	}
	public void setinclude( java.lang.String[] ezeValue ) throws com.ibm.javart.JavartException
	{
		ezeProgram._setModified( RUIDeploy_005fInclude.this, "include", include, ezeValue );
		if ( include.value() == null )
		{
			include.createNewValue( ezeProgram );
		}
		include.checkedValue( ezeProgram ).setFromArray( ezeProgram, ezeValue );
	}
	public void setinclude( int ezeIndex, java.lang.String ezeValue ) throws com.ibm.javart.JavartException
	{
		ezeProgram._setModified( RUIDeploy_005fInclude.this, "include", com.ibm.javart.operations.Subscript.run( ezeProgram, include, ezeIndex + 1 ), ezeValue );
		if ( include.value() == null )
		{
			include.createNewValue( ezeProgram );
		}
		if ( ezeValue == null )
		{
			throw new java.lang.NullPointerException();
		}
		else
		{
			com.ibm.javart.operations.Assign.run( ezeProgram, com.ibm.javart.operations.Subscript.run( ezeProgram, include.checkedValue( ezeProgram ), ezeIndex + 1 ), ezeValue );
		}
	}
	public java.lang.String[] getinclude_AsString() throws com.ibm.javart.JavartException
	{
		java.lang.String[] ezeValues = new java.lang.String[ include.checkedValue( ezeProgram ).size() ];
		for ( int ezeTemp = 0; ezeTemp < ezeValues.length; ezeTemp++ )
		{
			ezeValues[ ezeTemp ] = include.checkedValue( ezeProgram ).getElement( ezeProgram, ezeTemp + 1 ).getNullStatus() == com.ibm.javart.Value.SQL_NULL ? null : ezeProgram.egl__core__StrLib.clip( ezeProgram, include.checkedValue( ezeProgram ).getElement( ezeProgram, ezeTemp + 1 ).getValue() );
		}
		return ezeValues;
	}
	public java.lang.String getinclude_AsString( int ezeIndex ) throws com.ibm.javart.JavartException
	{
		return com.ibm.javart.util.StringUtil.clip( com.ibm.javart.operations.Subscript.run( ezeProgram, include.checkedValue( ezeProgram ), ezeIndex + 1 ).getValue() );
	}
	public void setinclude_AsString( java.lang.String[] ezeValue ) throws com.ibm.javart.JavartException
	{
		setinclude( ezeValue );
	}
	public void setinclude_AsString( int ezeIndex, java.lang.String ezeValue ) throws com.ibm.javart.JavartException
	{
		setinclude( ezeIndex, ezeValue );
	}
	
	public com.ibm.javart.util.JavartRecordHelper helper()
	{
		if (ezeHelper == null)
		{
			ezeHelper = new com.ibm.egl.rui.loader.services.RUIDeploy_005fInclude_Helper( ezeProgram );
		}
		return ezeHelper;
	}
}
