// Generated at Thu May 12 10:54:59 PDT 2011 by EGL 8.0.0.v20110511_0358
// No generator APARs installed.
package com.ibm.egl.rui.loader.services;

public class RUIDeploy_005fCssfile extends com.ibm.javart.Container
{
	private static final long serialVersionUID = 70L;
	
	public com.ibm.javart.ref.StringArrayRef cssfile;
	
	public RUIDeploy_005fCssfile() throws com.ibm.javart.JavartException
	{
		this( "RUIDeploy_005fCssfile", null, com.ibm.javart.util.ServiceUtilities.programInstance("RUIDeploy_005fCssfile", false), com.ibm.javart.Value.SQL_NOT_NULLABLE, "Tcom/ibm/egl/rui/loader/services/RUIDeploy_Cssfile;" );
	}
	public RUIDeploy_005fCssfile( String ezeName, com.ibm.javart.Container ezeContainer, final com.ibm.javart.resources.Program ezeProgram, int ezeNullStatus, String ezeSignature )
	throws com.ibm.javart.JavartException
	{
		super( ezeName, ezeContainer, ezeNullStatus );
		signature( ezeSignature );
		this.ezeProgram = ezeProgram;
		
		cssfile = new com.ibm.javart.ref.StringArrayRef( "cssfile", new com.ibm.javart.arrays.StringArray( "cssfile", ezeProgram, 0, 10, Integer.MAX_VALUE, com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING_ARRAY ), com.ibm.javart.Constants.SIGNATURE_STRING_ARRAY );
		add( cssfile );
		
		
	}
	
	public Object clone() throws java.lang.CloneNotSupportedException
	{
		RUIDeploy_005fCssfile ezeClone = (RUIDeploy_005fCssfile)super.clone();
		ezeClone.cssfile = (com.ibm.javart.ref.StringArrayRef)cssfile.clone();
		ezeClone.add( ezeClone.cssfile );
		return ezeClone;
	}
	
	public java.lang.String[] getcssfile() throws com.ibm.javart.JavartException
	{
		return cssfile.checkedValue( ezeProgram ).toPrimitiveArray();
	}
	public java.lang.String getcssfile( int ezeIndex ) throws com.ibm.javart.JavartException
	{
		return com.ibm.javart.operations.Subscript.run( ezeProgram, cssfile.checkedValue( ezeProgram ), ezeIndex + 1 ).getValue();
	}
	public void setcssfile( java.lang.String[] ezeValue ) throws com.ibm.javart.JavartException
	{
		ezeProgram._setModified( RUIDeploy_005fCssfile.this, "cssfile", cssfile, ezeValue );
		if ( cssfile.value() == null )
		{
			cssfile.createNewValue( ezeProgram );
		}
		cssfile.checkedValue( ezeProgram ).setFromArray( ezeProgram, ezeValue );
	}
	public void setcssfile( int ezeIndex, java.lang.String ezeValue ) throws com.ibm.javart.JavartException
	{
		ezeProgram._setModified( RUIDeploy_005fCssfile.this, "cssfile", com.ibm.javart.operations.Subscript.run( ezeProgram, cssfile, ezeIndex + 1 ), ezeValue );
		if ( cssfile.value() == null )
		{
			cssfile.createNewValue( ezeProgram );
		}
		if ( ezeValue == null )
		{
			throw new java.lang.NullPointerException();
		}
		else
		{
			com.ibm.javart.operations.Assign.run( ezeProgram, com.ibm.javart.operations.Subscript.run( ezeProgram, cssfile.checkedValue( ezeProgram ), ezeIndex + 1 ), ezeValue );
		}
	}
	public java.lang.String[] getcssfile_AsString() throws com.ibm.javart.JavartException
	{
		java.lang.String[] ezeValues = new java.lang.String[ cssfile.checkedValue( ezeProgram ).size() ];
		for ( int ezeTemp = 0; ezeTemp < ezeValues.length; ezeTemp++ )
		{
			ezeValues[ ezeTemp ] = cssfile.checkedValue( ezeProgram ).getElement( ezeProgram, ezeTemp + 1 ).getNullStatus() == com.ibm.javart.Value.SQL_NULL ? null : ezeProgram.egl__core__StrLib.clip( ezeProgram, cssfile.checkedValue( ezeProgram ).getElement( ezeProgram, ezeTemp + 1 ).getValue() );
		}
		return ezeValues;
	}
	public java.lang.String getcssfile_AsString( int ezeIndex ) throws com.ibm.javart.JavartException
	{
		return com.ibm.javart.util.StringUtil.clip( com.ibm.javart.operations.Subscript.run( ezeProgram, cssfile.checkedValue( ezeProgram ), ezeIndex + 1 ).getValue() );
	}
	public void setcssfile_AsString( java.lang.String[] ezeValue ) throws com.ibm.javart.JavartException
	{
		setcssfile( ezeValue );
	}
	public void setcssfile_AsString( int ezeIndex, java.lang.String ezeValue ) throws com.ibm.javart.JavartException
	{
		setcssfile( ezeIndex, ezeValue );
	}
	
	public com.ibm.javart.util.JavartRecordHelper helper()
	{
		if (ezeHelper == null)
		{
			ezeHelper = new com.ibm.egl.rui.loader.services.RUIDeploy_005fCssfile_Helper( ezeProgram );
		}
		return ezeHelper;
	}
}
