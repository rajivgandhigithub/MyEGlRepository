// Generated at Sun Sep 03 10:03:15 AST 2023 by EGL 8.0.0.v20180914_0609
// No APARs installed.
package com.ibm.egl.rui.loader.services;

public class RUIDeploy_005fImport extends com.ibm.javart.Container
{
	private static final long serialVersionUID = 70L;
	
	public com.ibm.javart.ref.StringArrayRef _005fimport;
	
	public RUIDeploy_005fImport() throws com.ibm.javart.JavartException
	{
		this( "RUIDeploy_005fImport", null, com.ibm.javart.util.ServiceUtilities.programInstance("RUIDeploy_005fImport", false), com.ibm.javart.Value.SQL_NOT_NULLABLE, "Tcom/ibm/egl/rui/loader/services/RUIDeploy_Import;" );
	}
	public RUIDeploy_005fImport( String ezeName, com.ibm.javart.Container ezeContainer, final com.ibm.javart.resources.Program ezeProgram, int ezeNullStatus, String ezeSignature )
	throws com.ibm.javart.JavartException
	{
		super( ezeName, ezeContainer, ezeNullStatus );
		signature( ezeSignature );
		this.ezeProgram = ezeProgram;
		
		_005fimport = new com.ibm.javart.ref.StringArrayRef( "_import", new com.ibm.javart.arrays.StringArray( "_import", ezeProgram, 0, 10, Integer.MAX_VALUE, com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING_ARRAY ), com.ibm.javart.Constants.SIGNATURE_STRING_ARRAY );
		add( _005fimport );
		
		
	}
	
	public Object clone() throws java.lang.CloneNotSupportedException
	{
		RUIDeploy_005fImport ezeClone = (RUIDeploy_005fImport)super.clone();
		ezeClone._005fimport = (com.ibm.javart.ref.StringArrayRef)_005fimport.clone();
		ezeClone.add( ezeClone._005fimport );
		return ezeClone;
	}
	
	public java.lang.String[] get_005fimport() throws com.ibm.javart.JavartException
	{
		return _005fimport.checkedValue( ezeProgram ).toPrimitiveArray();
	}
	public java.lang.String get_005fimport( int ezeIndex ) throws com.ibm.javart.JavartException
	{
		return com.ibm.javart.operations.Subscript.run( ezeProgram, _005fimport.checkedValue( ezeProgram ), ezeIndex + 1 ).getValue();
	}
	public void set_005fimport( java.lang.String[] ezeValue ) throws com.ibm.javart.JavartException
	{
		ezeProgram._setModified( RUIDeploy_005fImport.this, "_005fimport", _005fimport, ezeValue );
		if ( _005fimport.value() == null )
		{
			_005fimport.createNewValue( ezeProgram );
		}
		_005fimport.checkedValue( ezeProgram ).setFromArray( ezeProgram, ezeValue );
	}
	public void set_005fimport( int ezeIndex, java.lang.String ezeValue ) throws com.ibm.javart.JavartException
	{
		ezeProgram._setModified( RUIDeploy_005fImport.this, "_005fimport", com.ibm.javart.operations.Subscript.run( ezeProgram, _005fimport, ezeIndex + 1 ), ezeValue );
		if ( _005fimport.value() == null )
		{
			_005fimport.createNewValue( ezeProgram );
		}
		if ( ezeValue == null )
		{
			throw new java.lang.NullPointerException();
		}
		else
		{
			com.ibm.javart.operations.Assign.run( ezeProgram, com.ibm.javart.operations.Subscript.run( ezeProgram, _005fimport.checkedValue( ezeProgram ), ezeIndex + 1 ), ezeValue );
		}
	}
	public java.lang.String[] get_005fimport_AsString() throws com.ibm.javart.JavartException
	{
		java.lang.String[] ezeValues = new java.lang.String[ _005fimport.checkedValue( ezeProgram ).size() ];
		for ( int ezeTemp = 0; ezeTemp < ezeValues.length; ezeTemp++ )
		{
			ezeValues[ ezeTemp ] = _005fimport.checkedValue( ezeProgram ).getElement( ezeProgram, ezeTemp + 1 ).getNullStatus() == com.ibm.javart.Value.SQL_NULL ? null : ezeProgram.egl__core__StrLib.clip( ezeProgram, _005fimport.checkedValue( ezeProgram ).getElement( ezeProgram, ezeTemp + 1 ).getValue() );
		}
		return ezeValues;
	}
	public java.lang.String get_005fimport_AsString( int ezeIndex ) throws com.ibm.javart.JavartException
	{
		return com.ibm.javart.util.StringUtil.clip( com.ibm.javart.operations.Subscript.run( ezeProgram, _005fimport.checkedValue( ezeProgram ), ezeIndex + 1 ).getValue() );
	}
	public void set_005fimport_AsString( java.lang.String[] ezeValue ) throws com.ibm.javart.JavartException
	{
		set_005fimport( ezeValue );
	}
	public void set_005fimport_AsString( int ezeIndex, java.lang.String ezeValue ) throws com.ibm.javart.JavartException
	{
		set_005fimport( ezeIndex, ezeValue );
	}
	
	public com.ibm.javart.util.JavartRecordHelper helper()
	{
		if (ezeHelper == null)
		{
			ezeHelper = new com.ibm.egl.rui.loader.services.RUIDeploy_005fImport_Helper( ezeProgram );
		}
		return ezeHelper;
	}
}
