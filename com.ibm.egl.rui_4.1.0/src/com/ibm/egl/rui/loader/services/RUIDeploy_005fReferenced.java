// Generated at Sun Sep 03 10:03:15 AST 2023 by EGL 8.0.0.v20180914_0609
// No APARs installed.
package com.ibm.egl.rui.loader.services;

public class RUIDeploy_005fReferenced extends com.ibm.javart.Container
{
	private static final long serialVersionUID = 70L;
	
	public com.ibm.javart.ref.StringArrayRef referencedHandler;
	
	public RUIDeploy_005fReferenced() throws com.ibm.javart.JavartException
	{
		this( "RUIDeploy_005fReferenced", null, com.ibm.javart.util.ServiceUtilities.programInstance("RUIDeploy_005fReferenced", false), com.ibm.javart.Value.SQL_NOT_NULLABLE, "Tcom/ibm/egl/rui/loader/services/RUIDeploy_Referenced;" );
	}
	public RUIDeploy_005fReferenced( String ezeName, com.ibm.javart.Container ezeContainer, final com.ibm.javart.resources.Program ezeProgram, int ezeNullStatus, String ezeSignature )
	throws com.ibm.javart.JavartException
	{
		super( ezeName, ezeContainer, ezeNullStatus );
		signature( ezeSignature );
		this.ezeProgram = ezeProgram;
		
		referencedHandler = new com.ibm.javart.ref.StringArrayRef( "referencedHandler", null, com.ibm.javart.Constants.SIGNATURE_STRING_ARRAY );
		add( referencedHandler );
		
		
	}
	
	public Object clone() throws java.lang.CloneNotSupportedException
	{
		RUIDeploy_005fReferenced ezeClone = (RUIDeploy_005fReferenced)super.clone();
		ezeClone.referencedHandler = (com.ibm.javart.ref.StringArrayRef)referencedHandler.clone();
		ezeClone.add( ezeClone.referencedHandler );
		return ezeClone;
	}
	
	public java.lang.String[] getreferencedHandler() throws com.ibm.javart.JavartException
	{
		return referencedHandler.checkedValue( ezeProgram ).toPrimitiveArray();
	}
	public java.lang.String getreferencedHandler( int ezeIndex ) throws com.ibm.javart.JavartException
	{
		return com.ibm.javart.operations.Subscript.run( ezeProgram, referencedHandler.checkedValue( ezeProgram ), ezeIndex + 1 ).getValue();
	}
	public void setreferencedHandler( java.lang.String[] ezeValue ) throws com.ibm.javart.JavartException
	{
		ezeProgram._setModified( RUIDeploy_005fReferenced.this, "referencedHandler", referencedHandler, ezeValue );
		if ( referencedHandler.value() == null )
		{
			referencedHandler.createNewValue( ezeProgram );
		}
		referencedHandler.checkedValue( ezeProgram ).setFromArray( ezeProgram, ezeValue );
	}
	public void setreferencedHandler( int ezeIndex, java.lang.String ezeValue ) throws com.ibm.javart.JavartException
	{
		ezeProgram._setModified( RUIDeploy_005fReferenced.this, "referencedHandler", com.ibm.javart.operations.Subscript.run( ezeProgram, referencedHandler, ezeIndex + 1 ), ezeValue );
		if ( referencedHandler.value() == null )
		{
			referencedHandler.createNewValue( ezeProgram );
		}
		if ( ezeValue == null )
		{
			throw new java.lang.NullPointerException();
		}
		else
		{
			com.ibm.javart.operations.Assign.run( ezeProgram, com.ibm.javart.operations.Subscript.run( ezeProgram, referencedHandler.checkedValue( ezeProgram ), ezeIndex + 1 ), ezeValue );
		}
	}
	public java.lang.String[] getreferencedHandler_AsString() throws com.ibm.javart.JavartException
	{
		java.lang.String[] ezeValues = new java.lang.String[ referencedHandler.checkedValue( ezeProgram ).size() ];
		for ( int ezeTemp = 0; ezeTemp < ezeValues.length; ezeTemp++ )
		{
			ezeValues[ ezeTemp ] = referencedHandler.checkedValue( ezeProgram ).getElement( ezeProgram, ezeTemp + 1 ).getNullStatus() == com.ibm.javart.Value.SQL_NULL ? null : ezeProgram.egl__core__StrLib.clip( ezeProgram, referencedHandler.checkedValue( ezeProgram ).getElement( ezeProgram, ezeTemp + 1 ).getValue() );
		}
		return ezeValues;
	}
	public java.lang.String getreferencedHandler_AsString( int ezeIndex ) throws com.ibm.javart.JavartException
	{
		return com.ibm.javart.util.StringUtil.clip( com.ibm.javart.operations.Subscript.run( ezeProgram, referencedHandler.checkedValue( ezeProgram ), ezeIndex + 1 ).getValue() );
	}
	public void setreferencedHandler_AsString( java.lang.String[] ezeValue ) throws com.ibm.javart.JavartException
	{
		setreferencedHandler( ezeValue );
	}
	public void setreferencedHandler_AsString( int ezeIndex, java.lang.String ezeValue ) throws com.ibm.javart.JavartException
	{
		setreferencedHandler( ezeIndex, ezeValue );
	}
	
	public com.ibm.javart.util.JavartRecordHelper helper()
	{
		if (ezeHelper == null)
		{
			ezeHelper = new com.ibm.egl.rui.loader.services.RUIDeploy_005fReferenced_Helper( ezeProgram );
		}
		return ezeHelper;
	}
}
