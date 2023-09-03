// Generated at Sun Sep 03 10:03:15 AST 2023 by EGL 8.0.0.v20180914_0609
// No APARs installed.
package com.ibm.egl.rui.loader.services;

public class RUIDeploy_005fruntimePropertyFile extends com.ibm.javart.Container
{
	private static final long serialVersionUID = 70L;
	
	public com.ibm.javart.ref.StringArrayRef runtimePropertyFile;
	
	public RUIDeploy_005fruntimePropertyFile() throws com.ibm.javart.JavartException
	{
		this( "RUIDeploy_005fruntimePropertyFile", null, com.ibm.javart.util.ServiceUtilities.programInstance("RUIDeploy_005fruntimePropertyFile", false), com.ibm.javart.Value.SQL_NOT_NULLABLE, "Tcom/ibm/egl/rui/loader/services/RUIDeploy_runtimePropertyFile;" );
	}
	public RUIDeploy_005fruntimePropertyFile( String ezeName, com.ibm.javart.Container ezeContainer, final com.ibm.javart.resources.Program ezeProgram, int ezeNullStatus, String ezeSignature )
	throws com.ibm.javart.JavartException
	{
		super( ezeName, ezeContainer, ezeNullStatus );
		signature( ezeSignature );
		this.ezeProgram = ezeProgram;
		
		runtimePropertyFile = new com.ibm.javart.ref.StringArrayRef( "runtimePropertyFile", null, com.ibm.javart.Constants.SIGNATURE_STRING_ARRAY );
		add( runtimePropertyFile );
		
		
	}
	
	public Object clone() throws java.lang.CloneNotSupportedException
	{
		RUIDeploy_005fruntimePropertyFile ezeClone = (RUIDeploy_005fruntimePropertyFile)super.clone();
		ezeClone.runtimePropertyFile = (com.ibm.javart.ref.StringArrayRef)runtimePropertyFile.clone();
		ezeClone.add( ezeClone.runtimePropertyFile );
		return ezeClone;
	}
	
	public java.lang.String[] getruntimePropertyFile() throws com.ibm.javart.JavartException
	{
		return runtimePropertyFile.checkedValue( ezeProgram ).toPrimitiveArray();
	}
	public java.lang.String getruntimePropertyFile( int ezeIndex ) throws com.ibm.javart.JavartException
	{
		return com.ibm.javart.operations.Subscript.run( ezeProgram, runtimePropertyFile.checkedValue( ezeProgram ), ezeIndex + 1 ).getValue();
	}
	public void setruntimePropertyFile( java.lang.String[] ezeValue ) throws com.ibm.javart.JavartException
	{
		ezeProgram._setModified( RUIDeploy_005fruntimePropertyFile.this, "runtimePropertyFile", runtimePropertyFile, ezeValue );
		if ( runtimePropertyFile.value() == null )
		{
			runtimePropertyFile.createNewValue( ezeProgram );
		}
		runtimePropertyFile.checkedValue( ezeProgram ).setFromArray( ezeProgram, ezeValue );
	}
	public void setruntimePropertyFile( int ezeIndex, java.lang.String ezeValue ) throws com.ibm.javart.JavartException
	{
		ezeProgram._setModified( RUIDeploy_005fruntimePropertyFile.this, "runtimePropertyFile", com.ibm.javart.operations.Subscript.run( ezeProgram, runtimePropertyFile, ezeIndex + 1 ), ezeValue );
		if ( runtimePropertyFile.value() == null )
		{
			runtimePropertyFile.createNewValue( ezeProgram );
		}
		if ( ezeValue == null )
		{
			throw new java.lang.NullPointerException();
		}
		else
		{
			com.ibm.javart.operations.Assign.run( ezeProgram, com.ibm.javart.operations.Subscript.run( ezeProgram, runtimePropertyFile.checkedValue( ezeProgram ), ezeIndex + 1 ), ezeValue );
		}
	}
	public java.lang.String[] getruntimePropertyFile_AsString() throws com.ibm.javart.JavartException
	{
		java.lang.String[] ezeValues = new java.lang.String[ runtimePropertyFile.checkedValue( ezeProgram ).size() ];
		for ( int ezeTemp = 0; ezeTemp < ezeValues.length; ezeTemp++ )
		{
			ezeValues[ ezeTemp ] = runtimePropertyFile.checkedValue( ezeProgram ).getElement( ezeProgram, ezeTemp + 1 ).getNullStatus() == com.ibm.javart.Value.SQL_NULL ? null : ezeProgram.egl__core__StrLib.clip( ezeProgram, runtimePropertyFile.checkedValue( ezeProgram ).getElement( ezeProgram, ezeTemp + 1 ).getValue() );
		}
		return ezeValues;
	}
	public java.lang.String getruntimePropertyFile_AsString( int ezeIndex ) throws com.ibm.javart.JavartException
	{
		return com.ibm.javart.util.StringUtil.clip( com.ibm.javart.operations.Subscript.run( ezeProgram, runtimePropertyFile.checkedValue( ezeProgram ), ezeIndex + 1 ).getValue() );
	}
	public void setruntimePropertyFile_AsString( java.lang.String[] ezeValue ) throws com.ibm.javart.JavartException
	{
		setruntimePropertyFile( ezeValue );
	}
	public void setruntimePropertyFile_AsString( int ezeIndex, java.lang.String ezeValue ) throws com.ibm.javart.JavartException
	{
		setruntimePropertyFile( ezeIndex, ezeValue );
	}
	
	public com.ibm.javart.util.JavartRecordHelper helper()
	{
		if (ezeHelper == null)
		{
			ezeHelper = new com.ibm.egl.rui.loader.services.RUIDeploy_005fruntimePropertyFile_Helper( ezeProgram );
		}
		return ezeHelper;
	}
}
