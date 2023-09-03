// Generated at Sun Sep 03 10:03:15 AST 2023 by EGL 8.0.0.v20180914_0609
// No APARs installed.
package com.ibm.egl.rui.loader.services;

public class RUIDeploy_005fpropertyFile extends com.ibm.javart.Container
{
	private static final long serialVersionUID = 70L;
	
	public com.ibm.javart.ref.StringArrayRef propertyFile;
	
	public RUIDeploy_005fpropertyFile() throws com.ibm.javart.JavartException
	{
		this( "RUIDeploy_005fpropertyFile", null, com.ibm.javart.util.ServiceUtilities.programInstance("RUIDeploy_005fpropertyFile", false), com.ibm.javart.Value.SQL_NOT_NULLABLE, "Tcom/ibm/egl/rui/loader/services/RUIDeploy_propertyFile;" );
	}
	public RUIDeploy_005fpropertyFile( String ezeName, com.ibm.javart.Container ezeContainer, final com.ibm.javart.resources.Program ezeProgram, int ezeNullStatus, String ezeSignature )
	throws com.ibm.javart.JavartException
	{
		super( ezeName, ezeContainer, ezeNullStatus );
		signature( ezeSignature );
		this.ezeProgram = ezeProgram;
		
		propertyFile = new com.ibm.javart.ref.StringArrayRef( "propertyFile", null, com.ibm.javart.Constants.SIGNATURE_STRING_ARRAY );
		add( propertyFile );
		
		
	}
	
	public Object clone() throws java.lang.CloneNotSupportedException
	{
		RUIDeploy_005fpropertyFile ezeClone = (RUIDeploy_005fpropertyFile)super.clone();
		ezeClone.propertyFile = (com.ibm.javart.ref.StringArrayRef)propertyFile.clone();
		ezeClone.add( ezeClone.propertyFile );
		return ezeClone;
	}
	
	public java.lang.String[] getpropertyFile() throws com.ibm.javart.JavartException
	{
		return propertyFile.checkedValue( ezeProgram ).toPrimitiveArray();
	}
	public java.lang.String getpropertyFile( int ezeIndex ) throws com.ibm.javart.JavartException
	{
		return com.ibm.javart.operations.Subscript.run( ezeProgram, propertyFile.checkedValue( ezeProgram ), ezeIndex + 1 ).getValue();
	}
	public void setpropertyFile( java.lang.String[] ezeValue ) throws com.ibm.javart.JavartException
	{
		ezeProgram._setModified( RUIDeploy_005fpropertyFile.this, "propertyFile", propertyFile, ezeValue );
		if ( propertyFile.value() == null )
		{
			propertyFile.createNewValue( ezeProgram );
		}
		propertyFile.checkedValue( ezeProgram ).setFromArray( ezeProgram, ezeValue );
	}
	public void setpropertyFile( int ezeIndex, java.lang.String ezeValue ) throws com.ibm.javart.JavartException
	{
		ezeProgram._setModified( RUIDeploy_005fpropertyFile.this, "propertyFile", com.ibm.javart.operations.Subscript.run( ezeProgram, propertyFile, ezeIndex + 1 ), ezeValue );
		if ( propertyFile.value() == null )
		{
			propertyFile.createNewValue( ezeProgram );
		}
		if ( ezeValue == null )
		{
			throw new java.lang.NullPointerException();
		}
		else
		{
			com.ibm.javart.operations.Assign.run( ezeProgram, com.ibm.javart.operations.Subscript.run( ezeProgram, propertyFile.checkedValue( ezeProgram ), ezeIndex + 1 ), ezeValue );
		}
	}
	public java.lang.String[] getpropertyFile_AsString() throws com.ibm.javart.JavartException
	{
		java.lang.String[] ezeValues = new java.lang.String[ propertyFile.checkedValue( ezeProgram ).size() ];
		for ( int ezeTemp = 0; ezeTemp < ezeValues.length; ezeTemp++ )
		{
			ezeValues[ ezeTemp ] = propertyFile.checkedValue( ezeProgram ).getElement( ezeProgram, ezeTemp + 1 ).getNullStatus() == com.ibm.javart.Value.SQL_NULL ? null : ezeProgram.egl__core__StrLib.clip( ezeProgram, propertyFile.checkedValue( ezeProgram ).getElement( ezeProgram, ezeTemp + 1 ).getValue() );
		}
		return ezeValues;
	}
	public java.lang.String getpropertyFile_AsString( int ezeIndex ) throws com.ibm.javart.JavartException
	{
		return com.ibm.javart.util.StringUtil.clip( com.ibm.javart.operations.Subscript.run( ezeProgram, propertyFile.checkedValue( ezeProgram ), ezeIndex + 1 ).getValue() );
	}
	public void setpropertyFile_AsString( java.lang.String[] ezeValue ) throws com.ibm.javart.JavartException
	{
		setpropertyFile( ezeValue );
	}
	public void setpropertyFile_AsString( int ezeIndex, java.lang.String ezeValue ) throws com.ibm.javart.JavartException
	{
		setpropertyFile( ezeIndex, ezeValue );
	}
	
	public com.ibm.javart.util.JavartRecordHelper helper()
	{
		if (ezeHelper == null)
		{
			ezeHelper = new com.ibm.egl.rui.loader.services.RUIDeploy_005fpropertyFile_Helper( ezeProgram );
		}
		return ezeHelper;
	}
}
