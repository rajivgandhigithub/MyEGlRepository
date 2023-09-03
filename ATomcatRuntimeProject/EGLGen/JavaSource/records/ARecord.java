// Generated at Fri Jan 25 15:06:11 CST 2013 by EGL 8.0.0.qualifier
// No generator APARs installed.
package records;

public class ARecord extends com.ibm.javart.Container
{
	private static final long serialVersionUID = 70L;
	
	public com.ibm.javart.StringValue aString;
	
	public ARecord() throws com.ibm.javart.JavartException
	{
		this( "ARecord", null, com.ibm.javart.util.ServiceUtilities.programInstance("ARecord", false), com.ibm.javart.Value.SQL_NOT_NULLABLE, "Trecords/ARecord;" );
	}
	public ARecord( String ezeName, com.ibm.javart.Container ezeContainer, final com.ibm.javart.resources.Program ezeProgram, int ezeNullStatus, String ezeSignature )
	throws com.ibm.javart.JavartException
	{
		super( ezeName, ezeContainer, ezeNullStatus );
		signature( ezeSignature );
		this.ezeProgram = ezeProgram;
		
		aString = new com.ibm.javart.StringItem( "aString", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING );
		add( aString );
		
		
	}
	
	public Object clone() throws java.lang.CloneNotSupportedException
	{
		ARecord ezeClone = (ARecord)super.clone();
		ezeClone.aString = (com.ibm.javart.StringValue)aString.clone();
		ezeClone.add( ezeClone.aString );
		return ezeClone;
	}
	
	public java.lang.String getaString()
	{
		return aString.getValue();
	}
	public void setaString( java.lang.String ezeValue ) throws com.ibm.javart.JavartException
	{
		ezeProgram._setModified( ARecord.this, "aString", aString, ezeValue );
		if ( ezeValue == null )
		{
			throw new java.lang.NullPointerException();
		}
		else
		{
			com.ibm.javart.operations.Assign.run( ezeProgram, aString, ezeValue );
		}
	}
	public java.lang.String getaString_AsString() throws com.ibm.javart.JavartException
	{
		return com.ibm.javart.util.StringUtil.clip( aString.getValue() );
	}
	public void setaString_AsString( java.lang.String ezeValue ) throws com.ibm.javart.JavartException
	{
		ezeProgram._setModified( ARecord.this, "aString", aString, ezeValue );
		if ( ezeValue == null )
		{
			com.ibm.javart.operations.Assign.run( ezeProgram, aString, com.ibm.javart.ref.Null.NULL );
		}
		else
		{
			com.ibm.javart.operations.Assign.run( ezeProgram, aString, ezeValue );
		}
	}
	
	public com.ibm.javart.util.JavartRecordHelper helper()
	{
		if (ezeHelper == null)
		{
			ezeHelper = new records.ARecord_Helper( ezeProgram );
		}
		return ezeHelper;
	}
}
