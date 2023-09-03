// Generated at Thu May 12 10:54:59 PDT 2011 by EGL 8.0.0.v20110511_0358
// No generator APARs installed.
package com.ibm.egl.rui.loader.services;

public class RUIDeploy_005fCssfile_Helper extends com.ibm.javart.util.JavartRecordHelper
{
	private static final long serialVersionUID = 70L;
	
	protected transient com.ibm.javart.resources.Program ezeProgram;
	public RUIDeploy_005fCssfile_Helper( com.ibm.javart.resources.Program ezeProgram )
	{
		this.ezeProgram = ezeProgram;
	}
	public com.ibm.javart.json.ValueNode toJSON(com.ibm.javart.Container container ) throws com.ibm.javart.JavartException
	{
		return null;
	}
	public void fromJSON(com.ibm.javart.json.ValueNode node, com.ibm.javart.Container container ) throws com.ibm.javart.JavartException
	{
	}
	public String getJsonFieldName( String fieldName )
	{
		if( jsonNames == null )
		{
			jsonNames = new java.util.HashMap<java.lang.String, java.lang.String>();
			jsonNames.put( "cssfile", "cssfile" );
		}
		return super.getJsonFieldName( fieldName );
	}
	public String getFormDataFieldName( String fieldName )
	{
		if( formDataNames == null )
		{
			formDataNames = new java.util.HashMap<String, String>();
			formDataNames.put( "cssfile", "cssfile" );
		}
		return super.getFormDataFieldName( fieldName );
	}
	public java.util.Properties XMLProperties()
	{
		java.util.Properties xmlProps = new java.util.Properties();
		xmlProps.put( "XMLRootElement", "" );
		xmlProps.put( "XMLRootElement.name", "RUIDeploy_Cssfile" );
		xmlProps.put( "XMLArray.cssfile", "" );
		xmlProps.put( "XMLArray.cssfile.dimension", Integer.valueOf(1) );
		xmlProps.put( "XMLArray.cssfile.basetype", "string" );
		return xmlProps;
	}
	
}
