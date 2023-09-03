// Generated at Fri Jan 25 15:06:57 CST 2013 by EGL 8.0.0.qualifier
// No generator APARs installed.
package services;
//the import is required to get the service client to appear in the IDE
import javax.xml.ws.Service;

@javax.xml.ws.WebServiceClient(targetNamespace="http://services", name="ASOAPServiceService", wsdlLocation="wsdl/ASOAPService.wsdl")

public class ASOAPService_wsProxy extends javax.xml.ws.Service implements com.ibm.javart.services.JAXWSReference,java.io.Serializable
{
	private static final long serialVersionUID = 70L;
	
	// Generated at Fri Jan 25 15:06:57 CST 2013 by EGL 8.0.0.qualifier
	// No generator APARs installed.
	
	protected class returnValue extends com.ibm.javart.Container
	{
		private static final long serialVersionUID = 70L;
		
		public com.ibm.javart.StringValue value;
		
		public returnValue() throws com.ibm.javart.JavartException
		{
			this( "returnValue", null, _program(), com.ibm.javart.Value.SQL_NOT_NULLABLE, "T/returnValue;" );
		}
		public returnValue( String ezeName, com.ibm.javart.Container ezeContainer, final com.ibm.javart.resources.Program ezeProgram, int ezeNullStatus, String ezeSignature )
		throws com.ibm.javart.JavartException
		{
			super( ezeName, ezeContainer, ezeNullStatus );
			signature( ezeSignature );
			this.ezeProgram = ezeProgram;
			
			value = new com.ibm.javart.StringItem( "value", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING );
			add( value );
			
			
		}
		
		public Object clone() throws java.lang.CloneNotSupportedException
		{
			returnValue ezeClone = (returnValue)super.clone();
			ezeClone.value = (com.ibm.javart.StringValue)value.clone();
			ezeClone.add( ezeClone.value );
			return ezeClone;
		}
		
		public java.lang.String getvalue()
		{
			return value.getValue();
		}
		public void setvalue( java.lang.String ezeValue ) throws com.ibm.javart.JavartException
		{
			if ( ezeValue == null )
			{
				throw new java.lang.NullPointerException();
			}
			else
			{
				com.ibm.javart.operations.Assign.run( ezeProgram, value, ezeValue );
			}
		}
		public java.lang.String getvalue_AsString() throws com.ibm.javart.JavartException
		{
			return com.ibm.javart.util.StringUtil.clip( value.getValue() );
		}
		public void setvalue_AsString( java.lang.String ezeValue ) throws com.ibm.javart.JavartException
		{
			if ( ezeValue == null )
			{
				com.ibm.javart.operations.Assign.run( ezeProgram, value, com.ibm.javart.ref.Null.NULL );
			}
			else
			{
				com.ibm.javart.operations.Assign.run( ezeProgram, value, ezeValue );
			}
		}
		// Generated at Fri Jan 25 15:06:57 CST 2013 by EGL 8.0.0.qualifier
		// No generator APARs installed.
		
		public class returnValue_Helper extends com.ibm.javart.util.JavartRecordHelper
		{
			private static final long serialVersionUID = 70L;
			
			protected com.ibm.javart.resources.Program ezeProgram;
			private java.util.Properties xmlProps = null;
			public returnValue_Helper( com.ibm.javart.resources.Program ezeProgram )
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
					jsonNames.put( "value", "value" );
				}
				return super.getJsonFieldName( fieldName );
			}
			public String getFormDataFieldName( String fieldName )
			{
				if( formDataNames == null )
				{
					formDataNames = new java.util.HashMap<String, String>();
					formDataNames.put( "value", "value" );
				}
				return super.getFormDataFieldName( fieldName );
			}
			public java.util.Properties XMLProperties()
			{
				if(xmlProps == null)
				{
					xmlProps = new java.util.Properties();
					xmlFields = new java.util.HashMap<String, String>();
					xmlProps.put( "XMLRootElement", "" );
					xmlProps.put( "XMLRootElement.namespace", "http://services" );
					xmlProps.put( "XMLRootElement.name", "returnValue" );
					xmlProps.put( "XMLElement.value", "" );
					xmlProps.put( "XMLElement.value.name", "value" );
					xmlFields.put( "value", "value" );
					xmlProps.put( "XMLElement.value.nillable", "true" );
				}
				return xmlProps;
			}
			
		}
		public com.ibm.javart.util.JavartRecordHelper helper()
		{
			if (ezeHelper == null)
			{
				ezeHelper = new returnValue_Helper( ezeProgram );
			}
			return ezeHelper;
		}
		public void marshallParameters( com.ibm.javart.resources.Program ezeProgram, com.ibm.javart.calls.MethodParameter value ) throws com.ibm.javart.JavartException
		{
			com.ibm.javart.operations.Assign.run( ezeProgram, this.value, value.parameter() );
		}
		
		public Object unmarshallParameters( com.ibm.javart.resources.Program ezeProgram, com.ibm.javart.calls.MethodParameter value ) throws com.ibm.javart.JavartException
		{
			com.ibm.javart.operations.Assign.run( ezeProgram, value.parameter(), this.value );
			return null;
		}
		
	}
	
	// Generated at Fri Jan 25 15:06:57 CST 2013 by EGL 8.0.0.qualifier
	// No generator APARs installed.
	
	protected class returnValueResponse extends com.ibm.javart.Container
	{
		private static final long serialVersionUID = 70L;
		
		public com.ibm.javart.StringValue return_;
		
		public returnValueResponse() throws com.ibm.javart.JavartException
		{
			this( "returnValueResponse", null, _program(), com.ibm.javart.Value.SQL_NOT_NULLABLE, "T/returnValueResponse;" );
		}
		public returnValueResponse( String ezeName, com.ibm.javart.Container ezeContainer, final com.ibm.javart.resources.Program ezeProgram, int ezeNullStatus, String ezeSignature )
		throws com.ibm.javart.JavartException
		{
			super( ezeName, ezeContainer, ezeNullStatus );
			signature( ezeSignature );
			this.ezeProgram = ezeProgram;
			
			return_ = new com.ibm.javart.StringItem( "return", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING );
			add( return_ );
			
			
		}
		
		public Object clone() throws java.lang.CloneNotSupportedException
		{
			returnValueResponse ezeClone = (returnValueResponse)super.clone();
			ezeClone.return_ = (com.ibm.javart.StringValue)return_.clone();
			ezeClone.add( ezeClone.return_ );
			return ezeClone;
		}
		
		public java.lang.String getreturn_()
		{
			return return_.getValue();
		}
		public void setreturn_( java.lang.String ezeValue ) throws com.ibm.javart.JavartException
		{
			if ( ezeValue == null )
			{
				throw new java.lang.NullPointerException();
			}
			else
			{
				com.ibm.javart.operations.Assign.run( ezeProgram, return_, ezeValue );
			}
		}
		public java.lang.String getreturn__AsString() throws com.ibm.javart.JavartException
		{
			return com.ibm.javart.util.StringUtil.clip( return_.getValue() );
		}
		public void setreturn__AsString( java.lang.String ezeValue ) throws com.ibm.javart.JavartException
		{
			if ( ezeValue == null )
			{
				com.ibm.javart.operations.Assign.run( ezeProgram, return_, com.ibm.javart.ref.Null.NULL );
			}
			else
			{
				com.ibm.javart.operations.Assign.run( ezeProgram, return_, ezeValue );
			}
		}
		// Generated at Fri Jan 25 15:06:57 CST 2013 by EGL 8.0.0.qualifier
		// No generator APARs installed.
		
		public class returnValueResponse_Helper extends com.ibm.javart.util.JavartRecordHelper
		{
			private static final long serialVersionUID = 70L;
			
			protected com.ibm.javart.resources.Program ezeProgram;
			private java.util.Properties xmlProps = null;
			public returnValueResponse_Helper( com.ibm.javart.resources.Program ezeProgram )
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
					jsonNames.put( "return", "return" );
				}
				return super.getJsonFieldName( fieldName );
			}
			public String getFormDataFieldName( String fieldName )
			{
				if( formDataNames == null )
				{
					formDataNames = new java.util.HashMap<String, String>();
					formDataNames.put( "return", "return" );
				}
				return super.getFormDataFieldName( fieldName );
			}
			public java.util.Properties XMLProperties()
			{
				if(xmlProps == null)
				{
					xmlProps = new java.util.Properties();
					xmlFields = new java.util.HashMap<String, String>();
					xmlProps.put( "XMLRootElement", "" );
					xmlProps.put( "XMLRootElement.namespace", "http://services" );
					xmlProps.put( "XMLRootElement.name", "returnValueResponse" );
					xmlProps.put( "XMLElement.return", "" );
					xmlProps.put( "XMLElement.return.name", "return" );
					xmlFields.put( "return", "return_" );
					xmlProps.put( "XMLElement.return.nillable", "true" );
				}
				return xmlProps;
			}
			
		}
		public com.ibm.javart.util.JavartRecordHelper helper()
		{
			if (ezeHelper == null)
			{
				ezeHelper = new returnValueResponse_Helper( ezeProgram );
			}
			return ezeHelper;
		}
		public void marshallParameters( com.ibm.javart.resources.Program ezeProgram, com.ibm.javart.calls.MethodParameter return_ ) throws com.ibm.javart.JavartException
		{
			com.ibm.javart.operations.Assign.run( ezeProgram, this.return_, return_.parameter() );
		}
		
		public Object unmarshallParameters( com.ibm.javart.resources.Program ezeProgram, com.ibm.javart.calls.MethodParameter return_ ) throws com.ibm.javart.JavartException
		{
			com.ibm.javart.operations.Assign.run( ezeProgram, return_.parameter(), this.return_ );
			return this.return_;
		}
		
	}
	
	
	private final static java.util.logging.Logger logger = java.util.logging.Logger.getLogger( services.ASOAPService_wsProxy.class.getName() );
	private String endPoint;
	private com.ibm.javart.services.JAXWSProxy serviceProxy;
	private final com.ibm.javart.resources.Program ezeProgram;
	private final static java.net.URL SERVICE_WSDL_LOCATION;
	
	static {
		java.net.URL url = null;
		try {
			url =  services.ASOAPService_wsProxy.class.getResource("/wsdl/ASOAPService.wsdl");
			if (url == null) throw new java.net.MalformedURLException("wsdl/ASOAPService.wsdl does not exist in the module.");
		} catch (java.net.MalformedURLException e) {
			logger.warning(e.getMessage());
		}
		SERVICE_WSDL_LOCATION = url;
	}
	
	public ASOAPService_wsProxy() throws Exception
	{
		this(com.ibm.javart.util.ServiceUtilities.runUnit(true));
	}
	
	public ASOAPService_wsProxy( com.ibm.javart.resources.RunUnit ru ) throws Exception
	{
		super(SERVICE_WSDL_LOCATION,new javax.xml.namespace.QName("http://services", "ASOAPServiceService"));
		ezeProgram = new com.ibm.javart.resources.Program("ASOAPService", "ASOAPService", ru, false, true );
		serviceProxy = new com.ibm.javart.services.JAXWSProxy(ezeProgram);
		setEndpoint("http://localhost:9080/AServiceProject/services/ASOAPService");
		serviceProxy.setPartName( "services.ASOAPService");
	}
	
	public Object ezeInvoke(String operationName, String functionName, Object[] parameters) throws Exception
	{
		return serviceProxy.invoke(this,operationName, functionName, (com.ibm.javart.calls.MethodParameter[])parameters);
	}
	
	public javax.xml.namespace.QName getPortName() throws com.ibm.javart.JavartException
	{
		return new javax.xml.namespace.QName("http://services", "ASOAPService");
	}
	
	public javax.xml.namespace.QName getOperationQName( String operationName ) throws com.ibm.javart.JavartException
	{
		if(operationName != null && "returnValue".equalsIgnoreCase(operationName))
		{
			return new javax.xml.namespace.QName("http://services", "returnValue");
		}
		return null;
	}
	
	public String getWsdlFile() throws com.ibm.javart.JavartException
	{
		return "wsdl/ASOAPService.wsdl";
	}
	
	public java.lang.String _name()
	{
		return ezeProgram._name();
	}
	public com.ibm.javart.calls.MethodParameter[] parameters(String functionName) throws com.ibm.javart.JavartException
	{
		if( "$func_returnValue".equalsIgnoreCase(functionName) )
		{
			return new com.ibm.javart.calls.MethodParameter[] { new com.ibm.javart.calls.MethodParameter( new com.ibm.javart.StringItem( "value", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), com.ibm.javart.calls.MethodParameter.IN ), new com.ibm.javart.calls.MethodParameter( new com.ibm.javart.StringItem( "STRING", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), com.ibm.javart.calls.MethodParameter.RETURN ) };
		}
		String ezeErrMessage = com.ibm.javart.util.JavartUtil.errorMessage( ezeProgram, com.ibm.javart.messages.Message.SOA_E_METHOD_NOT_FOUND, new Object[] { functionName.substring(6), _name() } );
		throw new com.ibm.javart.JavartException(com.ibm.javart.messages.Message.SOA_E_METHOD_NOT_FOUND, ezeErrMessage );
	}
	public String getSoapActionUri( String operationName )
	{
		return null;
	}
	
	public String getEndpoint()
	{
		return endPoint;
	}
	
	public void setEndpoint(String endPoint)
	{
		this.endPoint = endPoint;
	}
	
	public void setUserID(String userID) throws com.ibm.javart.JavartException
	{
		serviceProxy.setUserID(userID);
	}
	
	public void setPassword(String password) throws com.ibm.javart.JavartException
	{
		serviceProxy.setPassword(password);
	}
	
	private com.ibm.javart.resources.Program _program()
	{
		return ezeProgram;
	}
	
	public void setSOAPLevel(String soapLevel)
	{
		serviceProxy.setSOAPLevel(soapLevel);
	}
	
	public void setTimeout(int timeout)
	{
		serviceProxy.setTimeout(timeout);
	}
	
	public void setSOAPRequestHeaders(Object header) throws com.ibm.javart.JavartException
	{
		serviceProxy.setSOAPRequestHeaders(header);
	}
	
	public void getSOAPResponseHeaders(Object header) throws com.ibm.javart.JavartException
	{
		serviceProxy.getSOAPResponseHeaders(header);
	}
	
	public String getSOAPResponseHeaders() throws com.ibm.javart.JavartException
	{
		return serviceProxy.getSOAPResponseHeaders();
	}
	
	public void marshallParameters(com.ibm.javart.Container bean, com.ibm.javart.calls.MethodParameter[] parameters ) throws com.ibm.javart.JavartException
	{
		if (bean instanceof returnValue)
		{
			((returnValue)bean).marshallParameters( _program(), parameters[0] );
		}
		else
		{
			serviceProxy.marshallParameters(bean, parameters);
		}
	}
	
	public Object unmarshallParameters(com.ibm.javart.Container bean, com.ibm.javart.calls.MethodParameter[] parameters ) throws com.ibm.javart.JavartException
	{
		if (bean instanceof returnValueResponse)
		{
			return ((returnValueResponse)bean).unmarshallParameters( _program(), parameters[1] );
		}
		return serviceProxy.unmarshallParameters(bean, parameters);
	}
	
	public com.ibm.javart.Container getRequestBean( String operationName ) throws com.ibm.javart.JavartException
	{
		if(operationName != null && "returnValue".equalsIgnoreCase(operationName))
		{
			return new returnValue();
		}
		return serviceProxy.getRequestBean(operationName);
	}
	
	public com.ibm.javart.Container getResponseBean( String operationName ) throws com.ibm.javart.JavartException
	{
		if(operationName != null && "returnValue".equalsIgnoreCase(operationName))
		{
			return new returnValueResponse();
		}
		return null;
	}
	
	
	
}
