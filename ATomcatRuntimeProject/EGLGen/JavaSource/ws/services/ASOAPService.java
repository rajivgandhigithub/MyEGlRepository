// Generated at Fri Jan 25 15:06:57 CST 2013 by EGL 8.0.0.qualifier
// No generator APARs installed.

package ws.services;
@javax.xml.ws.WebServiceProvider(targetNamespace="http://services", serviceName="ASOAPServiceService", portName="ASOAPService", wsdlLocation="WEB-INF/services/eglservices/META-INF/ASOAPService.wsdl")
@javax.xml.ws.ServiceMode(value=javax.xml.ws.Service.Mode.MESSAGE)
@javax.jws.soap.SOAPBinding(parameterStyle = javax.jws.soap.SOAPBinding.ParameterStyle.WRAPPED, style=javax.jws.soap.SOAPBinding.Style.DOCUMENT, use=javax.jws.soap.SOAPBinding.Use.LITERAL)
@javax.xml.ws.BindingType(javax.xml.ws.soap.SOAPBinding.SOAP11HTTP_BINDING)
public class  ASOAPService extends com.ibm.javart.services.JAXWSService implements javax.xml.ws.Provider<javax.xml.soap.SOAPMessage>
{
	private transient javax.xml.ws.WebServiceContext serviceContext = null;
	public ASOAPService()
	{
		partName = "services.ASOAPService";
	}
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
	
	
	public javax.xml.soap.SOAPMessage invoke(javax.xml.soap.SOAPMessage msg)
	{
		return super.invoke(msg);
	}
	protected com.ibm.javart.services.ServiceReference _service() throws Exception
	{
		if( service == null )
		{
			service = com.ibm.javart.services.ServiceBinder.instantiateServiceCoreImpl( "services.ASOAPService", _program()._runUnit() );
		}
		return service;
	}
	protected com.ibm.javart.resources.Program _program() throws com.ibm.javart.JavartException
	{
		if( program == null )
		{
			program = new com.ibm.javart.resources.Program( "ASOAPService_Impl", "", new com.ibm.javart.resources.RunUnit( new com.ibm.javart.resources.StartupInfo( "ASOAPService_Impl", "", true ) ), false, true );
		}
		return program;
	}
	protected String getSOAPProtocol()
	{
		return javax.xml.soap.SOAPConstants.SOAP_1_1_PROTOCOL;
	}
	@javax.annotation.Resource
	protected void setServiceContext(javax.xml.ws.WebServiceContext serviceContext)
	{
		super.setServiceContext(serviceContext);
	}
	@javax.jws.WebMethod(exclude=true)
	protected void preDestroy()
	{
		super.preDestroy();
	}
	protected void marshallParameters(com.ibm.javart.Container bean, com.ibm.javart.calls.MethodParameter[] parameters ) throws com.ibm.javart.JavartException
	{
		if (bean instanceof returnValueResponse)
		{
			((returnValueResponse)bean).marshallParameters( _program(), parameters[1] );
		}
		else
		{
			super.marshallParameters(bean, parameters);
		}
	}
	
	protected Object unmarshallParameters(com.ibm.javart.Container bean, com.ibm.javart.calls.MethodParameter[] parameters ) throws com.ibm.javart.JavartException
	{
		if (bean instanceof returnValue)
		{
			return ((returnValue)bean).unmarshallParameters( _program(), parameters[0] );
		}
		return super.unmarshallParameters(bean, parameters);
	}
	
	protected com.ibm.javart.Container getRequestBean( String operationName ) throws com.ibm.javart.JavartException
	{
		if(operationName != null && "returnValue".equalsIgnoreCase(operationName))
		{
			return new returnValue();
		}
		return super.getRequestBean(operationName);
	}
	
	protected com.ibm.javart.Container getResponseBean( String operationName ) throws com.ibm.javart.JavartException
	{
		if(operationName != null && "returnValue".equalsIgnoreCase(operationName))
		{
			return new returnValueResponse();
		}
		return null;
	}
	
}
