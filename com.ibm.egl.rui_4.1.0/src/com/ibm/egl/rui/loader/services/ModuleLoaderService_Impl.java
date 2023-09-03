// Generated at Sun Sep 03 10:03:15 AST 2023 by EGL 8.0.0.v20180914_0609
// No APARs installed.
package com.ibm.egl.rui.loader.services;

public class ModuleLoaderService_Impl extends com.ibm.javart.resources.Program implements com.ibm.javart.services.ServiceCore2
{
	private static final long serialVersionUID = 70L;
	
	public final ModuleLoaderService_Impl ezeProgram;
	public com.ibm.javart.ref.DictionaryRef referencedDeployFiles;
	public com.ibm.javart.ref.DictionaryRef filterDynamicLoadingHandlers;
	public com.ibm.egl.rui.loader.internal.ModuleTypeLib_Lib com__ibm__egl__rui__loader__internal__ModuleTypeLib;
	public com.ibm.egl.rui.loader.internal.XMLLib_Lib com__ibm__egl__rui__loader__internal__XMLLib;
	
	public ModuleLoaderService_Impl( com.ibm.javart.resources.RunUnit ru ) throws java.lang.Exception
	{
		super( "ModuleLoaderService", "ModuleLoaderService", ru, false, true, 7 );
		ezeProgram = this;
		com__ibm__egl__rui__loader__internal__ModuleTypeLib = (com.ibm.egl.rui.loader.internal.ModuleTypeLib_Lib)ezeProgram._runUnit().loadLibrary( "com.ibm.egl.rui.loader.internal.ModuleTypeLib_Lib" );
		com__ibm__egl__rui__loader__internal__XMLLib = (com.ibm.egl.rui.loader.internal.XMLLib_Lib)ezeProgram._runUnit().loadLibrary( "com.ibm.egl.rui.loader.internal.XMLLib_Lib" );
		referencedDeployFiles = new com.ibm.javart.ref.DictionaryRef( "referencedDeployFiles", new com.ibm.javart.Dictionary( "referencedDeployFiles", false, com.ibm.javart.Dictionary.INSERTION_ORDER ) );
		filterDynamicLoadingHandlers = new com.ibm.javart.ref.DictionaryRef( "filterDynamicLoadingHandlers", new com.ibm.javart.Dictionary( "filterDynamicLoadingHandlers", false, com.ibm.javart.Dictionary.INSERTION_ORDER ) );
		$initModuleLoaderService_Impl( this );
	}
	
	public Object ezeInvoke(String operationName, String functionName, Object[] parameters) throws Exception
	{
		int ezeStackDepth = ezeProgram._funcStackDepth();
		try
		{
			if( "$func_getModules".equalsIgnoreCase(functionName) )
			{
				if( 6 != parameters.length )
				{
					com.ibm.javart.util.JavartUtil.throwEglServiceInvocationException( ezeProgram, parameters, 6 );
				}
				return $func_getModules( (com.ibm.javart.StringValue)((com.ibm.javart.calls.MethodParameter)parameters[ 0 ]).parameter(), (com.ibm.javart.StringValue)((com.ibm.javart.calls.MethodParameter)parameters[ 1 ]).parameter(), (com.ibm.javart.IntValue)((com.ibm.javart.calls.MethodParameter)parameters[ 2 ]).parameter(), (com.ibm.javart.StringValue)((com.ibm.javart.calls.MethodParameter)parameters[ 3 ]).parameter(), (com.ibm.javart.StringValue)((com.ibm.javart.calls.MethodParameter)parameters[ 4 ]).parameter() );
			}
			else if( "$func_getContents".equalsIgnoreCase(functionName) )
			{
				if( 4 != parameters.length )
				{
					com.ibm.javart.util.JavartUtil.throwEglServiceInvocationException( ezeProgram, parameters, 4 );
				}
				return $func_getContents( (com.ibm.javart.StringValue)((com.ibm.javart.calls.MethodParameter)parameters[ 0 ]).parameter(), (com.ibm.javart.StringValue)((com.ibm.javart.calls.MethodParameter)parameters[ 1 ]).parameter(), (com.ibm.javart.IntValue)((com.ibm.javart.calls.MethodParameter)parameters[ 2 ]).parameter() );
			}
			else if( "$func_checkPropertiesFileExists".equalsIgnoreCase(functionName) )
			{
				if( 4 != parameters.length )
				{
					com.ibm.javart.util.JavartUtil.throwEglServiceInvocationException( ezeProgram, parameters, 4 );
				}
				return $func_checkPropertiesFileExists( (com.ibm.javart.StringValue)((com.ibm.javart.calls.MethodParameter)parameters[ 0 ]).parameter(), (com.ibm.javart.StringValue)((com.ibm.javart.calls.MethodParameter)parameters[ 1 ]).parameter(), (com.ibm.javart.IntValue)((com.ibm.javart.calls.MethodParameter)parameters[ 2 ]).parameter() );
			}
			else if( "$func_replaceAll".equalsIgnoreCase(functionName) )
			{
				if( 4 != parameters.length )
				{
					com.ibm.javart.util.JavartUtil.throwEglServiceInvocationException( ezeProgram, parameters, 4 );
				}
				return $func_replaceAll( (com.ibm.javart.StringValue)((com.ibm.javart.calls.MethodParameter)parameters[ 0 ]).parameter(), (com.ibm.javart.StringValue)((com.ibm.javart.calls.MethodParameter)parameters[ 1 ]).parameter(), (com.ibm.javart.StringValue)((com.ibm.javart.calls.MethodParameter)parameters[ 2 ]).parameter() );
			}
			else if( "$func_getLocale".equalsIgnoreCase(functionName) )
			{
				if( 1 != parameters.length )
				{
					com.ibm.javart.util.JavartUtil.throwEglServiceInvocationException( ezeProgram, parameters, 1 );
				}
				return $func_getLocale();
			}
		}
		catch( egl.core.ServiceInvocationException_Ex sie )
		{
			if( ezeProgram._funcStackDepth() != ezeStackDepth )
			{
				_funcPop();
			}
			throw sie;
		}
		catch( com.ibm.javart.JavartException jrte )
		{
			if( ezeProgram._funcStackDepth() != ezeStackDepth )
			{
				_funcPop();
			}
			com.ibm.javart.util.JavartUtil.throwEglServiceInvocationException( ezeProgram, jrte.getMessageID(), jrte.getMessage(), "", "", "" );
		}
		catch( Exception e )
		{
			if( ezeProgram._funcStackDepth() != ezeStackDepth )
			{
				_funcPop();
			}
			com.ibm.javart.util.JavartUtil.throwEglServiceInvocationException( ezeProgram, com.ibm.javart.messages.Message.SOA_E_EGL_SERVICE_INVOCATION, new Object[] { functionName.substring(6), _name() }, "", "", egl.core.ServiceLib_Lib.getMessage( e ));
		}
		com.ibm.javart.util.JavartUtil.throwEglServiceInvocationException( ezeProgram, com.ibm.javart.messages.Message.SOA_E_METHOD_NOT_FOUND, new Object[] { functionName.substring(6), _name() } );
		return null;
	}
	public Object ezeInvokeByOperationName(String operationName, String functionName, Object[] parameters) throws Exception
	{
		int ezeStackDepth = ezeProgram._funcStackDepth();
		try
		{
			if( "getModules".equalsIgnoreCase(operationName) )
			{
				if( 6 != parameters.length )
				{
					com.ibm.javart.util.JavartUtil.throwEglServiceInvocationException( ezeProgram, parameters, 6 );
				}
				return $func_getModules( (com.ibm.javart.StringValue)((com.ibm.javart.calls.MethodParameter)parameters[ 0 ]).parameter(), (com.ibm.javart.StringValue)((com.ibm.javart.calls.MethodParameter)parameters[ 1 ]).parameter(), (com.ibm.javart.IntValue)((com.ibm.javart.calls.MethodParameter)parameters[ 2 ]).parameter(), (com.ibm.javart.StringValue)((com.ibm.javart.calls.MethodParameter)parameters[ 3 ]).parameter(), (com.ibm.javart.StringValue)((com.ibm.javart.calls.MethodParameter)parameters[ 4 ]).parameter() );
			}
			else if( "getContents".equalsIgnoreCase(operationName) )
			{
				if( 4 != parameters.length )
				{
					com.ibm.javart.util.JavartUtil.throwEglServiceInvocationException( ezeProgram, parameters, 4 );
				}
				return $func_getContents( (com.ibm.javart.StringValue)((com.ibm.javart.calls.MethodParameter)parameters[ 0 ]).parameter(), (com.ibm.javart.StringValue)((com.ibm.javart.calls.MethodParameter)parameters[ 1 ]).parameter(), (com.ibm.javart.IntValue)((com.ibm.javart.calls.MethodParameter)parameters[ 2 ]).parameter() );
			}
			else if( "checkPropertiesFileExists".equalsIgnoreCase(operationName) )
			{
				if( 4 != parameters.length )
				{
					com.ibm.javart.util.JavartUtil.throwEglServiceInvocationException( ezeProgram, parameters, 4 );
				}
				return $func_checkPropertiesFileExists( (com.ibm.javart.StringValue)((com.ibm.javart.calls.MethodParameter)parameters[ 0 ]).parameter(), (com.ibm.javart.StringValue)((com.ibm.javart.calls.MethodParameter)parameters[ 1 ]).parameter(), (com.ibm.javart.IntValue)((com.ibm.javart.calls.MethodParameter)parameters[ 2 ]).parameter() );
			}
			else if( "replaceAll".equalsIgnoreCase(operationName) )
			{
				if( 4 != parameters.length )
				{
					com.ibm.javart.util.JavartUtil.throwEglServiceInvocationException( ezeProgram, parameters, 4 );
				}
				return $func_replaceAll( (com.ibm.javart.StringValue)((com.ibm.javart.calls.MethodParameter)parameters[ 0 ]).parameter(), (com.ibm.javart.StringValue)((com.ibm.javart.calls.MethodParameter)parameters[ 1 ]).parameter(), (com.ibm.javart.StringValue)((com.ibm.javart.calls.MethodParameter)parameters[ 2 ]).parameter() );
			}
			else if( "getLocale".equalsIgnoreCase(operationName) )
			{
				if( 1 != parameters.length )
				{
					com.ibm.javart.util.JavartUtil.throwEglServiceInvocationException( ezeProgram, parameters, 1 );
				}
				return $func_getLocale();
			}
		}
		catch( egl.core.ServiceInvocationException_Ex sie )
		{
			if( ezeProgram._funcStackDepth() != ezeStackDepth )
			{
				_funcPop();
			}
			throw sie;
		}
		catch( com.ibm.javart.JavartException jrte )
		{
			if( ezeProgram._funcStackDepth() != ezeStackDepth )
			{
				_funcPop();
			}
			com.ibm.javart.util.JavartUtil.throwEglServiceInvocationException( ezeProgram, jrte.getMessageID(), jrte.getMessage(), "", "", "" );
		}
		catch( Exception e )
		{
			if( ezeProgram._funcStackDepth() != ezeStackDepth )
			{
				_funcPop();
			}
			com.ibm.javart.util.JavartUtil.throwEglServiceInvocationException( ezeProgram, com.ibm.javart.messages.Message.SOA_E_EGL_SERVICE_INVOCATION, new Object[] { functionName.substring(6), _name() }, "", "", egl.core.ServiceLib_Lib.getMessage( e ));
		}
		com.ibm.javart.util.JavartUtil.throwEglServiceInvocationException( ezeProgram, com.ibm.javart.messages.Message.SOA_E_METHOD_NOT_FOUND, new Object[] { functionName.substring(6), _name() } );
		return null;
	}
	public boolean _v6CharNumBehavior()
	{
		return false;
	}
	public boolean _v6SqlNullableBehavior()
	{
		return false;
	}
	public com.ibm.javart.calls.MethodParameter[] parameters(String functionName) throws com.ibm.javart.JavartException
	{
		if( "$func_getModules".equalsIgnoreCase(functionName) )
		{
			return new com.ibm.javart.calls.MethodParameter[] { new com.ibm.javart.calls.MethodParameter( new com.ibm.javart.StringItem( "project", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), com.ibm.javart.calls.MethodParameter.IN ), new com.ibm.javart.calls.MethodParameter( new com.ibm.javart.StringItem( "name", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), com.ibm.javart.calls.MethodParameter.IN ), new com.ibm.javart.calls.MethodParameter( new com.ibm.javart.IntItem( "port", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_INT ), com.ibm.javart.calls.MethodParameter.IN ), new com.ibm.javart.calls.MethodParameter( new com.ibm.javart.StringItem( "alocale", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), com.ibm.javart.calls.MethodParameter.IN ), new com.ibm.javart.calls.MethodParameter( new com.ibm.javart.StringItem( "dynamicLoadingList", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), com.ibm.javart.calls.MethodParameter.IN ), new com.ibm.javart.calls.MethodParameter( new com.ibm.javart.ref.ContainerArrayRef( "Module[]", null, "1Tcom/ibm/egl/rui/loader/internal/Module;" ){
					private static final long serialVersionUID = 70L;
					
					public void createNewValue( com.ibm.javart.resources.Program ezeProgram ) throws com.ibm.javart.JavartException
					{
						value = new com.ibm.javart.arrays.ContainerArray( "Module[]", ezeProgram, 0, 10, Integer.MAX_VALUE, "1Tcom/ibm/egl/rui/loader/internal/Module;" )
						{
							private static final long serialVersionUID = 70L;
							
							public com.ibm.javart.Container makeNewElement( com.ibm.javart.resources.Program ezeProgram ) throws com.ibm.javart.JavartException
							{
								return new com.ibm.egl.rui.loader.internal.Module( "Module[]", null, ezeProgram, com.ibm.javart.Value.SQL_NOT_NULLABLE, "Tcom/ibm/egl/rui/loader/internal/Module;" );
							};
						};
					}
			}, com.ibm.javart.calls.MethodParameter.RETURN ) };
		}
		else if( "$func_getContents".equalsIgnoreCase(functionName) )
		{
			return new com.ibm.javart.calls.MethodParameter[] { new com.ibm.javart.calls.MethodParameter( new com.ibm.javart.StringItem( "project", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), com.ibm.javart.calls.MethodParameter.IN ), new com.ibm.javart.calls.MethodParameter( new com.ibm.javart.StringItem( "name", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), com.ibm.javart.calls.MethodParameter.IN ), new com.ibm.javart.calls.MethodParameter( new com.ibm.javart.IntItem( "port", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_INT ), com.ibm.javart.calls.MethodParameter.IN ), new com.ibm.javart.calls.MethodParameter( new com.ibm.javart.StringItem( "STRING", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), com.ibm.javart.calls.MethodParameter.RETURN ) };
		}
		else if( "$func_checkPropertiesFileExists".equalsIgnoreCase(functionName) )
		{
			return new com.ibm.javart.calls.MethodParameter[] { new com.ibm.javart.calls.MethodParameter( new com.ibm.javart.StringItem( "project", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), com.ibm.javart.calls.MethodParameter.IN ), new com.ibm.javart.calls.MethodParameter( new com.ibm.javart.StringItem( "name", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), com.ibm.javart.calls.MethodParameter.IN ), new com.ibm.javart.calls.MethodParameter( new com.ibm.javart.IntItem( "port", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_INT ), com.ibm.javart.calls.MethodParameter.IN ), new com.ibm.javart.calls.MethodParameter( new com.ibm.javart.BooleanItem( "BOOLEAN", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_BOOLEAN ), com.ibm.javart.calls.MethodParameter.RETURN ) };
		}
		else if( "$func_replaceAll".equalsIgnoreCase(functionName) )
		{
			return new com.ibm.javart.calls.MethodParameter[] { new com.ibm.javart.calls.MethodParameter( new com.ibm.javart.StringItem( "s", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), com.ibm.javart.calls.MethodParameter.IN ), new com.ibm.javart.calls.MethodParameter( new com.ibm.javart.StringItem( "original", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), com.ibm.javart.calls.MethodParameter.IN ), new com.ibm.javart.calls.MethodParameter( new com.ibm.javart.StringItem( "replacement", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), com.ibm.javart.calls.MethodParameter.IN ), new com.ibm.javart.calls.MethodParameter( new com.ibm.javart.StringItem( "STRING", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), com.ibm.javart.calls.MethodParameter.RETURN ) };
		}
		else if( "$func_getLocale".equalsIgnoreCase(functionName) )
		{
			return new com.ibm.javart.calls.MethodParameter[] { new com.ibm.javart.calls.MethodParameter( new com.ibm.javart.StringItem( "STRING", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), com.ibm.javart.calls.MethodParameter.RETURN ) };
		}
		String ezeErrMessage = com.ibm.javart.util.JavartUtil.errorMessage( ezeProgram, com.ibm.javart.messages.Message.SOA_E_METHOD_NOT_FOUND, new Object[] { functionName.substring(6), _name() } );
		throw new com.ibm.javart.JavartException(com.ibm.javart.messages.Message.SOA_E_METHOD_NOT_FOUND, ezeErrMessage );
	}
	public com.ibm.javart.calls.MethodParameter[] parametersByOperationName(String operationName) throws com.ibm.javart.JavartException
	{
		if( "getModules".equalsIgnoreCase(operationName) )
		{
			return new com.ibm.javart.calls.MethodParameter[] { new com.ibm.javart.calls.MethodParameter( new com.ibm.javart.StringItem( "project", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), com.ibm.javart.calls.MethodParameter.IN ), new com.ibm.javart.calls.MethodParameter( new com.ibm.javart.StringItem( "name", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), com.ibm.javart.calls.MethodParameter.IN ), new com.ibm.javart.calls.MethodParameter( new com.ibm.javart.IntItem( "port", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_INT ), com.ibm.javart.calls.MethodParameter.IN ), new com.ibm.javart.calls.MethodParameter( new com.ibm.javart.StringItem( "alocale", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), com.ibm.javart.calls.MethodParameter.IN ), new com.ibm.javart.calls.MethodParameter( new com.ibm.javart.StringItem( "dynamicLoadingList", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), com.ibm.javart.calls.MethodParameter.IN ), new com.ibm.javart.calls.MethodParameter( new com.ibm.javart.ref.ContainerArrayRef( "Module[]", null, "1Tcom/ibm/egl/rui/loader/internal/Module;" ){
					private static final long serialVersionUID = 70L;
					
					public void createNewValue( com.ibm.javart.resources.Program ezeProgram ) throws com.ibm.javart.JavartException
					{
						value = new com.ibm.javart.arrays.ContainerArray( "Module[]", ezeProgram, 0, 10, Integer.MAX_VALUE, "1Tcom/ibm/egl/rui/loader/internal/Module;" )
						{
							private static final long serialVersionUID = 70L;
							
							public com.ibm.javart.Container makeNewElement( com.ibm.javart.resources.Program ezeProgram ) throws com.ibm.javart.JavartException
							{
								return new com.ibm.egl.rui.loader.internal.Module( "Module[]", null, ezeProgram, com.ibm.javart.Value.SQL_NOT_NULLABLE, "Tcom/ibm/egl/rui/loader/internal/Module;" );
							};
						};
					}
			}, com.ibm.javart.calls.MethodParameter.RETURN ) };
		}
		else if( "getContents".equalsIgnoreCase(operationName) )
		{
			return new com.ibm.javart.calls.MethodParameter[] { new com.ibm.javart.calls.MethodParameter( new com.ibm.javart.StringItem( "project", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), com.ibm.javart.calls.MethodParameter.IN ), new com.ibm.javart.calls.MethodParameter( new com.ibm.javart.StringItem( "name", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), com.ibm.javart.calls.MethodParameter.IN ), new com.ibm.javart.calls.MethodParameter( new com.ibm.javart.IntItem( "port", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_INT ), com.ibm.javart.calls.MethodParameter.IN ), new com.ibm.javart.calls.MethodParameter( new com.ibm.javart.StringItem( "STRING", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), com.ibm.javart.calls.MethodParameter.RETURN ) };
		}
		else if( "checkPropertiesFileExists".equalsIgnoreCase(operationName) )
		{
			return new com.ibm.javart.calls.MethodParameter[] { new com.ibm.javart.calls.MethodParameter( new com.ibm.javart.StringItem( "project", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), com.ibm.javart.calls.MethodParameter.IN ), new com.ibm.javart.calls.MethodParameter( new com.ibm.javart.StringItem( "name", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), com.ibm.javart.calls.MethodParameter.IN ), new com.ibm.javart.calls.MethodParameter( new com.ibm.javart.IntItem( "port", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_INT ), com.ibm.javart.calls.MethodParameter.IN ), new com.ibm.javart.calls.MethodParameter( new com.ibm.javart.BooleanItem( "BOOLEAN", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_BOOLEAN ), com.ibm.javart.calls.MethodParameter.RETURN ) };
		}
		else if( "replaceAll".equalsIgnoreCase(operationName) )
		{
			return new com.ibm.javart.calls.MethodParameter[] { new com.ibm.javart.calls.MethodParameter( new com.ibm.javart.StringItem( "s", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), com.ibm.javart.calls.MethodParameter.IN ), new com.ibm.javart.calls.MethodParameter( new com.ibm.javart.StringItem( "original", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), com.ibm.javart.calls.MethodParameter.IN ), new com.ibm.javart.calls.MethodParameter( new com.ibm.javart.StringItem( "replacement", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), com.ibm.javart.calls.MethodParameter.IN ), new com.ibm.javart.calls.MethodParameter( new com.ibm.javart.StringItem( "STRING", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), com.ibm.javart.calls.MethodParameter.RETURN ) };
		}
		else if( "getLocale".equalsIgnoreCase(operationName) )
		{
			return new com.ibm.javart.calls.MethodParameter[] { new com.ibm.javart.calls.MethodParameter( new com.ibm.javart.StringItem( "STRING", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), com.ibm.javart.calls.MethodParameter.RETURN ) };
		}
		String ezeErrMessage = com.ibm.javart.util.JavartUtil.errorMessage( ezeProgram, com.ibm.javart.messages.Message.SOA_E_METHOD_NOT_FOUND, new Object[] { operationName, _name() } );
		throw new com.ibm.javart.JavartException(com.ibm.javart.messages.Message.SOA_E_METHOD_NOT_FOUND, ezeErrMessage );
	}
	public static com.ibm.javart.resources.StartupInfo _startupInfo()
	{
		return new com.ibm.javart.resources.StartupInfo( "ModuleLoaderService", "com/ibm/egl/rui/loader/services/ModuleLoaderService_Impl.properties", false );
	}
	
	public com.ibm.javart.ref.ContainerArrayRef $func_getModules( com.ibm.javart.StringValue project, com.ibm.javart.StringValue name, com.ibm.javart.IntValue port, com.ibm.javart.StringValue alocale, com.ibm.javart.StringValue dynamicLoadingList ) throws java.lang.Exception
	{
		_funcPush( "getModules" );
		com.ibm.javart.ref.ContainerArrayRef $result = new com.ibm.javart.ref.ContainerArrayRef( "Module[]", null, "1Tcom/ibm/egl/rui/loader/internal/Module;" ){
			private static final long serialVersionUID = 70L;
			
			public void createNewValue( com.ibm.javart.resources.Program ezeProgram ) throws com.ibm.javart.JavartException
			{
				value = new com.ibm.javart.arrays.ContainerArray( "Module[]", ezeProgram, 0, 10, Integer.MAX_VALUE, "1Tcom/ibm/egl/rui/loader/internal/Module;" )
				{
					private static final long serialVersionUID = 70L;
					
					public com.ibm.javart.Container makeNewElement( com.ibm.javart.resources.Program ezeProgram ) throws com.ibm.javart.JavartException
					{
						return new com.ibm.egl.rui.loader.internal.Module( "Module[]", null, ezeProgram, com.ibm.javart.Value.SQL_NOT_NULLABLE, "Tcom/ibm/egl/rui/loader/internal/Module;" );
					};
				};
			}
		};
		
		// referencedDeployFiles.removeAll();
		ezeProgram.referencedDeployFiles.checkedValue( ezeProgram ).removeAll(  );
		// filterDynamicLoadingHandlers.removeAll();
		ezeProgram.filterDynamicLoadingHandlers.checkedValue( ezeProgram ).removeAll(  );
		// modules Module[0];
		com.ibm.javart.ref.ContainerArrayRef modules = new com.ibm.javart.ref.ContainerArrayRef( "modules", new com.ibm.javart.arrays.ContainerArray( "modules", ezeProgram, 0, 10, Integer.MAX_VALUE, "1Tcom/ibm/egl/rui/loader/internal/Module;" )
		{
			private static final long serialVersionUID = 70L;
			
			public com.ibm.javart.Container makeNewElement( com.ibm.javart.resources.Program ezeProgram ) throws com.ibm.javart.JavartException
			{
				return new com.ibm.egl.rui.loader.internal.Module( "modules", null, ezeProgram, com.ibm.javart.Value.SQL_NOT_NULLABLE, "Tcom/ibm/egl/rui/loader/internal/Module;" );
			};
		}, "1Tcom/ibm/egl/rui/loader/internal/Module;" ){
			private static final long serialVersionUID = 70L;
			
			public void createNewValue( com.ibm.javart.resources.Program ezeProgram ) throws com.ibm.javart.JavartException
			{
				value = new com.ibm.javart.arrays.ContainerArray( "modules", ezeProgram, 0, 10, Integer.MAX_VALUE, "1Tcom/ibm/egl/rui/loader/internal/Module;" )
				{
					private static final long serialVersionUID = 70L;
					
					public com.ibm.javart.Container makeNewElement( com.ibm.javart.resources.Program ezeProgram ) throws com.ibm.javart.JavartException
					{
						return new com.ibm.egl.rui.loader.internal.Module( "modules", null, ezeProgram, com.ibm.javart.Value.SQL_NOT_NULLABLE, "Tcom/ibm/egl/rui/loader/internal/Module;" );
					};
				};
			}
		};
		// strLen INT;
		int strLen = 0;
		// strLen = StrLib.byteLen(dynamicLoadingList);
		strLen = ezeProgram.egl__core__StrLib.byteLen( ezeProgram, dynamicLoadingList );
		// i INT;
		com.ibm.javart.IntValue i = new com.ibm.javart.IntItem( "i", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_INT );
		// i = 1;
		i.setValue( (short)1 );
		// While ( i <= strLen )
		while ( (i.getValue() <= strLen) )
		{
			// dynamicHandler STRING;
			com.ibm.javart.StringValue dynamicHandler = new com.ibm.javart.StringItem( "dynamicHandler", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING );
			// dynamicHandler = StrLib.getNextToken(dynamicLoadingList, i, ",");
			com.ibm.javart.operations.Assign.run( ezeProgram, dynamicHandler, ezeProgram.egl__core__StrLib.getNextToken( ezeProgram, com.ibm.javart.operations.Assign.run( ezeProgram, new com.ibm.javart.StringItem( "source", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), dynamicLoadingList ), i, com.ibm.javart.operations.Assign.run( ezeProgram, new com.ibm.javart.StringItem( "delimiters", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), "," ) ) );
			// dynamicHandler = resolvePackageName(dynamicHandler);
			dynamicHandler.setValue( $func_resolvePackageName( dynamicHandler ) );
			// IF ( name != dynamicHandler )
			if ( (name.getValue().compareTo( dynamicHandler.getValue() ) != 0) )
			{
				// filterDynamicLoadingHandlers[dynamicHandler] = dynamicHandler;
				com.ibm.javart.operations.Access.run( ezeProgram, ezeProgram.filterDynamicLoadingHandlers.value(), dynamicHandler.getValue() ).update( com.ibm.javart.operations.Assign.run( ezeProgram, new com.ibm.javart.StringItem( "eze$Temp9", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), dynamicHandler ) );
			}
		}
		// resolveDeploy(project, name, port, modules, alocale);
		$func_resolveDeploy__3$T26n4a3e220b( com.ibm.javart.operations.Assign.run( ezeProgram, new com.ibm.javart.StringItem( "project", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), project ), name, com.ibm.javart.operations.Assign.run( ezeProgram, new com.ibm.javart.IntItem( "port", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_INT ), port ), modules, alocale.getValue() );
		// XMLLib.debug("return " + modules.getSize() + " modules");
		ezeProgram.com__ibm__egl__rui__loader__internal__XMLLib.$func_debug( com.ibm.javart.operations.Assign.run( ezeProgram, new com.ibm.javart.StringItem( "s", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), (("return " + com.ibm.javart.operations.ConcatValue.run( ezeProgram, modules.checkedValue( ezeProgram ).getSize( ezeProgram ) )) + " modules") ) );
		// resolveDuplicated(modules);
		$func_resolveDuplicated__0$T26n4a3e220b( modules );
		// RETURN modules
		// $result = modules;
		$result.update( modules.value() );
		_funcPop();
		return $result;
	}
	
	public void $func_resolveDuplicated__0$T26n4a3e220b( com.ibm.javart.ref.ContainerArrayRef modules ) throws java.lang.Exception
	{
		_funcPush( "resolveDuplicated" );
		
		// newModules Module[0];
		com.ibm.javart.ref.ContainerArrayRef newModules = new com.ibm.javart.ref.ContainerArrayRef( "newModules", new com.ibm.javart.arrays.ContainerArray( "newModules", ezeProgram, 0, 10, Integer.MAX_VALUE, "1Tcom/ibm/egl/rui/loader/internal/Module;" )
		{
			private static final long serialVersionUID = 70L;
			
			public com.ibm.javart.Container makeNewElement( com.ibm.javart.resources.Program ezeProgram ) throws com.ibm.javart.JavartException
			{
				return new com.ibm.egl.rui.loader.internal.Module( "newModules", null, ezeProgram, com.ibm.javart.Value.SQL_NOT_NULLABLE, "Tcom/ibm/egl/rui/loader/internal/Module;" );
			};
		}, "1Tcom/ibm/egl/rui/loader/internal/Module;" ){
			private static final long serialVersionUID = 70L;
			
			public void createNewValue( com.ibm.javart.resources.Program ezeProgram ) throws com.ibm.javart.JavartException
			{
				value = new com.ibm.javart.arrays.ContainerArray( "newModules", ezeProgram, 0, 10, Integer.MAX_VALUE, "1Tcom/ibm/egl/rui/loader/internal/Module;" )
				{
					private static final long serialVersionUID = 70L;
					
					public com.ibm.javart.Container makeNewElement( com.ibm.javart.resources.Program ezeProgram ) throws com.ibm.javart.JavartException
					{
						return new com.ibm.egl.rui.loader.internal.Module( "newModules", null, ezeProgram, com.ibm.javart.Value.SQL_NOT_NULLABLE, "Tcom/ibm/egl/rui/loader/internal/Module;" );
					};
				};
			}
		};
		// filterDict dictionary;
		com.ibm.javart.ref.DictionaryRef filterDict = new com.ibm.javart.ref.DictionaryRef( "filterDict", new com.ibm.javart.Dictionary( "filterDict", false, com.ibm.javart.Dictionary.INSERTION_ORDER ) );
		// for ( n From 1 To modules.getSize() Increment 1 )
		{
			int n = 0;
			n = (short)1;
			for ( ; (n <= modules.checkedValue( ezeProgram ).getSize( ezeProgram )); n++ )
			{
				// IF ( !filterDict.containsKey(modules[n].name) )
				if ( !(filterDict.checkedValue( ezeProgram ).containsKey( ((com.ibm.egl.rui.loader.internal.Module)com.ibm.javart.operations.Subscript.run( ezeProgram, modules.checkedValue( ezeProgram ), n )).name.getValue() ).getValue()) )
				{
					// filterDict[modules[n].name] = modules[n].name;
					com.ibm.javart.operations.Access.run( ezeProgram, filterDict.value(), ((com.ibm.egl.rui.loader.internal.Module)com.ibm.javart.operations.Subscript.run( ezeProgram, modules.checkedValue( ezeProgram ), n )).name.getValue() ).update( com.ibm.javart.operations.Assign.run( ezeProgram, new com.ibm.javart.StringItem( "eze$Temp10", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), ((com.ibm.egl.rui.loader.internal.Module)com.ibm.javart.operations.Subscript.run( ezeProgram, modules.checkedValue( ezeProgram ), n )).name ) );
					// newModules = newModules :: modules[n];
					newModules.update( com.ibm.javart.operations.ArrayConcat.run( ezeProgram, new com.ibm.javart.ref.ContainerArrayRef( "eze$Temp11", new com.ibm.javart.arrays.ContainerArray( "eze$Temp11", ezeProgram, 0, 10, Integer.MAX_VALUE, "1Tcom/ibm/egl/rui/loader/internal/Module;" )
					{
						private static final long serialVersionUID = 70L;
						
						public com.ibm.javart.Container makeNewElement( com.ibm.javart.resources.Program ezeProgram ) throws com.ibm.javart.JavartException
						{
							return new com.ibm.egl.rui.loader.internal.Module( "eze$Temp11", null, ezeProgram, com.ibm.javart.Value.SQL_NOT_NULLABLE, "Tcom/ibm/egl/rui/loader/internal/Module;" );
						};
					}, "1Tcom/ibm/egl/rui/loader/internal/Module;" ){
						private static final long serialVersionUID = 70L;
						
						public void createNewValue( com.ibm.javart.resources.Program ezeProgram ) throws com.ibm.javart.JavartException
						{
							value = new com.ibm.javart.arrays.ContainerArray( "eze$Temp11", ezeProgram, 0, 10, Integer.MAX_VALUE, "1Tcom/ibm/egl/rui/loader/internal/Module;" )
							{
								private static final long serialVersionUID = 70L;
								
								public com.ibm.javart.Container makeNewElement( com.ibm.javart.resources.Program ezeProgram ) throws com.ibm.javart.JavartException
								{
									return new com.ibm.egl.rui.loader.internal.Module( "eze$Temp11", null, ezeProgram, com.ibm.javart.Value.SQL_NOT_NULLABLE, "Tcom/ibm/egl/rui/loader/internal/Module;" );
								};
							};
						}
					}, null, newModules.value() ).value().appendElement( ezeProgram, com.ibm.javart.operations.Assign.run( ezeProgram, newModules.value().makeNewElement( ezeProgram ), ((com.ibm.egl.rui.loader.internal.Module)com.ibm.javart.operations.Subscript.run( ezeProgram, modules.checkedValue( ezeProgram ), n )) ) ) );
				}
			}
		}
		// modules = newModules;
		modules.update( newModules.value() );
		// RETURN
		_funcPop();
		return;
	}
	
	public java.lang.String $func_resolvePackageName( com.ibm.javart.StringValue fullname ) throws java.lang.Exception
	{
		_funcPush( "resolvePackageName" );
		java.lang.String $result = "";
		
		// delimiters STRING;
		com.ibm.javart.StringValue delimiters = new com.ibm.javart.StringItem( "delimiters", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING );
		// delimiters = ".";
		delimiters.setValue( "." );
		// tokenCount INT;
		int tokenCount = 0;
		// tokenCount = StrLib.getTokenCount(fullname, delimiters);
		tokenCount = ezeProgram.egl__core__StrLib.getTokenCount( ezeProgram, fullname.getValue(), delimiters.getValue() );
		// IF ( tokenCount < 2 )
		if ( (tokenCount < (short)2) )
		{
			// RETURN fullname
			if ( true )
			{
				// $result = fullname;
				$result = fullname.getValue();
				_funcPop();
				return $result;
			}
		}
		// tokens STRING[0];
		com.ibm.javart.ref.StringArrayRef tokens = new com.ibm.javart.ref.StringArrayRef( "tokens", new com.ibm.javart.arrays.StringArray( "tokens", ezeProgram, 0, 10, Integer.MAX_VALUE, com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING_ARRAY ), com.ibm.javart.Constants.SIGNATURE_STRING_ARRAY );
		// i INT;
		com.ibm.javart.IntValue i = new com.ibm.javart.IntItem( "i", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_INT );
		// i = 1;
		i.setValue( (short)1 );
		// strLenth INT;
		int strLenth = 0;
		// strLenth = StrLib.byteLen(fullname);
		strLenth = ezeProgram.egl__core__StrLib.byteLen( ezeProgram, fullname );
		// token STRING;
		java.lang.String token = "";
		// token = "";
		token = "";
		// While ( i <= strLenth )
		while ( (i.getValue() <= strLenth) )
		{
			// token = StrLib.getNextToken(fullname, i, delimiters);
			token = ezeProgram.egl__core__StrLib.getNextToken( ezeProgram, com.ibm.javart.operations.Assign.run( ezeProgram, new com.ibm.javart.StringItem( "source", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), fullname ), i, com.ibm.javart.operations.Assign.run( ezeProgram, new com.ibm.javart.StringItem( "delimiters", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), delimiters ) ).getValue();
			// tokens.appendElement(token);
			tokens.checkedValue( ezeProgram ).appendElement( ezeProgram, com.ibm.javart.operations.Assign.run( ezeProgram, tokens.value().makeNewElement( ezeProgram ), token ) );
		}
		// handlerName STRING;
		java.lang.String handlerName = "";
		// handlerName = tokens[tokenCount];
		handlerName = com.ibm.javart.operations.ConvertToString.run( ezeProgram, com.ibm.javart.operations.Subscript.run( ezeProgram, tokens.checkedValue( ezeProgram ), tokenCount ) );
		// packageName STRING;
		java.lang.String packageName = "";
		// packageName = fullname[1:StrLib.characterLen(fullname) - StrLib.characterLen(handlerName) - 1];
		packageName = com.ibm.javart.operations.Substring.run( ezeProgram, fullname, (short)1, com.ibm.javart.operations.ConvertToInt.run( ezeProgram, com.ibm.javart.operations.Subtract.run( ezeProgram, com.ibm.javart.operations.Subtract.run( ezeProgram, ezeProgram.egl__core__StrLib.characterLen( ezeProgram, fullname.getValue() ), ezeProgram.egl__core__StrLib.characterLen( ezeProgram, handlerName ) ), (short)1 ) ) );
		// RETURN StrLib.lowerCase(packageName) + "." + handlerName
		// $result = StrLib.lowerCase(packageName) + "." + handlerName;
		$result = com.ibm.javart.operations.ConvertToString.run( ezeProgram, com.ibm.javart.operations.Concat.run( ezeProgram, com.ibm.javart.operations.NullableConcatValue.run( ezeProgram, com.ibm.javart.operations.Concat.run( ezeProgram, com.ibm.javart.operations.NullableConcatValue.run( ezeProgram, ezeProgram.egl__core__StrLib.lowerCase( ezeProgram, packageName ) ), "." ) ), handlerName ) );
		_funcPop();
		return $result;
	}
	
	public void $func_resolveDeploy__3$T26n4a3e220b( com.ibm.javart.StringValue project, com.ibm.javart.StringValue name, com.ibm.javart.IntValue port, com.ibm.javart.ref.ContainerArrayRef modules, java.lang.String alocale ) throws java.lang.Exception
	{
		_funcPush( "resolveDeploy" );
		
		// IF ( referencedDeployFiles.containsKey(name) || filterDynamicLoadingHandlers.containsKey(name) )
		if ( ( ezeProgram.referencedDeployFiles.checkedValue( ezeProgram ).containsKey( name.getValue() ).getValue() || ezeProgram.filterDynamicLoadingHandlers.checkedValue( ezeProgram ).containsKey( name.getValue() ).getValue() ) )
		{
			// RETURN
			if ( true )
			{
				_funcPop();
				return;
			}
		}
		// referencedDeployFiles[name] = name;
		com.ibm.javart.operations.Access.run( ezeProgram, ezeProgram.referencedDeployFiles.value(), name.getValue() ).update( com.ibm.javart.operations.Assign.run( ezeProgram, new com.ibm.javart.StringItem( "eze$Temp12", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), name ) );
		// deploy RuiDeploy;
		com.ibm.egl.rui.loader.services.RuiDeploy deploy = new com.ibm.egl.rui.loader.services.RuiDeploy( "deploy", null, ezeProgram, com.ibm.javart.Value.SQL_NOT_NULLABLE, "Tcom/ibm/egl/rui/loader/services/RuiDeploy;" );
		// name = replaceAll(name, ".", "/");
		name.setValue( $func_replaceAll( com.ibm.javart.operations.Assign.run( ezeProgram, new com.ibm.javart.StringItem( "s", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), name ), com.ibm.javart.util.ItemFactory.createString( ezeProgram, "original", false, "." ), com.ibm.javart.util.ItemFactory.createString( ezeProgram, "replacement", false, "/" ) ).getValue() );
		// xml STRING;
		com.ibm.javart.StringValue xml = new com.ibm.javart.StringItem( "xml", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING );
		// xml = getContents(project, name + ".deploy", port);
		xml.setValue( $func_getContents( com.ibm.javart.operations.Assign.run( ezeProgram, new com.ibm.javart.StringItem( "project", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), project ), com.ibm.javart.operations.Assign.run( ezeProgram, new com.ibm.javart.StringItem( "name", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), (name.getValue() + ".deploy") ), com.ibm.javart.operations.Assign.run( ezeProgram, new com.ibm.javart.IntItem( "port", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_INT ), port ) ).getValue() );
		// IF ( xml != "" )
		if ( (xml.getValue().compareTo( "" ) != 0) )
		{
			// XMLLib.convertFromXML(xml, deploy);
			ezeProgram.com__ibm__egl__rui__loader__internal__XMLLib.$func_convertFromXML( com.ibm.javart.operations.Assign.run( ezeProgram, new com.ibm.javart.StringItem( "xml", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), xml ), deploy );
			// XMLLib.debug("Loaded XML");
			ezeProgram.com__ibm__egl__rui__loader__internal__XMLLib.$func_debug( com.ibm.javart.util.ItemFactory.createString( ezeProgram, "s", false, "Loaded XML" ) );
			// IF ( deploy.includes.include != null )
			if ( !com.ibm.javart.operations.IsNull.run( ezeProgram, deploy.includes.include ) )
			{
				// for ( n From 1 To deploy.includes.include.getSize() Increment 1 )
				{
					int n = 0;
					n = (short)1;
					for ( ; (n <= deploy.includes.include.checkedValue( ezeProgram ).getSize( ezeProgram )); n++ )
					{
						// include STRING;
						com.ibm.javart.StringValue include = new com.ibm.javart.StringItem( "include", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING );
						// include = deploy.includes.include[n];
						include.setValue( com.ibm.javart.operations.Subscript.run( ezeProgram, deploy.includes.include.checkedValue( ezeProgram ), n ).getValue() );
						// len INT;
						int len = 0;
						// len = StrLib.characterLen(include);
						len = ezeProgram.egl__core__StrLib.characterLen( ezeProgram, include.getValue() );
						// IF ( len > 3 && include[len - 2:len] == ".js" )
						if ( ( (len > (short)3) && (com.ibm.javart.operations.Substring.run( ezeProgram, include, com.ibm.javart.operations.ConvertToInt.run( ezeProgram, com.ibm.javart.operations.Subtract.run( ezeProgram, len, (short)2 ) ), len ).compareTo( ".js" ) == 0) ) )
						{
							// modules = modules :: new Module(){eze$Temp1.name = include, eze$Temp1.javascript = "", eze$Temp1.moduleType = ModuleTypeLib.include};
							modules.update( com.ibm.javart.operations.ArrayConcat.run( ezeProgram, new com.ibm.javart.ref.ContainerArrayRef( "eze$Temp13", new com.ibm.javart.arrays.ContainerArray( "eze$Temp13", ezeProgram, 0, 10, Integer.MAX_VALUE, "1Tcom/ibm/egl/rui/loader/internal/Module;" )
							{
								private static final long serialVersionUID = 70L;
								
								public com.ibm.javart.Container makeNewElement( com.ibm.javart.resources.Program ezeProgram ) throws com.ibm.javart.JavartException
								{
									return new com.ibm.egl.rui.loader.internal.Module( "eze$Temp13", null, ezeProgram, com.ibm.javart.Value.SQL_NOT_NULLABLE, "Tcom/ibm/egl/rui/loader/internal/Module;" );
								};
							}, "1Tcom/ibm/egl/rui/loader/internal/Module;" ){
								private static final long serialVersionUID = 70L;
								
								public void createNewValue( com.ibm.javart.resources.Program ezeProgram ) throws com.ibm.javart.JavartException
								{
									value = new com.ibm.javart.arrays.ContainerArray( "eze$Temp13", ezeProgram, 0, 10, Integer.MAX_VALUE, "1Tcom/ibm/egl/rui/loader/internal/Module;" )
									{
										private static final long serialVersionUID = 70L;
										
										public com.ibm.javart.Container makeNewElement( com.ibm.javart.resources.Program ezeProgram ) throws com.ibm.javart.JavartException
										{
											return new com.ibm.egl.rui.loader.internal.Module( "eze$Temp13", null, ezeProgram, com.ibm.javart.Value.SQL_NOT_NULLABLE, "Tcom/ibm/egl/rui/loader/internal/Module;" );
										};
									};
								}
							}, null, modules.value() ).value().appendElement( ezeProgram, com.ibm.javart.operations.Assign.run( ezeProgram, modules.value().makeNewElement( ezeProgram ), $eze$Temp2( new com.ibm.egl.rui.loader.internal.Module( "eze$Temp14", null, ezeProgram, com.ibm.javart.Value.SQL_NOT_NULLABLE, "Tcom/ibm/egl/rui/loader/internal/Module;" ), include ) ) ) );
							// includeJsFile STRING;
							com.ibm.javart.StringValue includeJsFile = new com.ibm.javart.StringItem( "includeJsFile", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING );
							// includeJsFile = replaceAll(include, "/", ".");
							includeJsFile.setValue( $func_replaceAll( com.ibm.javart.operations.Assign.run( ezeProgram, new com.ibm.javart.StringItem( "s", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), include ), com.ibm.javart.util.ItemFactory.createString( ezeProgram, "original", false, "/" ), com.ibm.javart.util.ItemFactory.createString( ezeProgram, "replacement", false, "." ) ).getValue() );
							// includeFieLen INT;
							int includeFieLen = 0;
							// includeFieLen = StrLib.characterLen(include);
							includeFieLen = ezeProgram.egl__core__StrLib.characterLen( ezeProgram, include.getValue() );
							// includeJsFile = include[1:includeFieLen - 3];
							includeJsFile.setValue( com.ibm.javart.operations.Substring.run( ezeProgram, include, (short)1, com.ibm.javart.operations.ConvertToInt.run( ezeProgram, com.ibm.javart.operations.Subtract.run( ezeProgram, includeFieLen, (short)3 ) ) ) );
							// resolveImportDeploy(project, includeJsFile, port, modules, alocale);
							$func_resolveImportDeploy__3$T26n4a3e220b( project.getValue(), includeJsFile, port.getValue(), modules, alocale );
						}
					}
				}
			}
			// IF ( deploy.propertyFiles.propertyFile != null )
			if ( !com.ibm.javart.operations.IsNull.run( ezeProgram, deploy.propertyFiles.propertyFile ) )
			{
				// XMLLib.debug("add propertyfiles");
				ezeProgram.com__ibm__egl__rui__loader__internal__XMLLib.$func_debug( com.ibm.javart.util.ItemFactory.createString( ezeProgram, "s", false, "add propertyfiles" ) );
				// for ( n From 1 To deploy.propertyFiles.propertyFile.getSize() Increment 1 )
				{
					int n = 0;
					n = (short)1;
					for ( ; (n <= deploy.propertyFiles.propertyFile.checkedValue( ezeProgram ).getSize( ezeProgram )); n++ )
					{
						// IF ( "" != deploy.propertyFiles.propertyFile[n] )
						if ( ("".compareTo( com.ibm.javart.operations.ConvertToString.run( ezeProgram, com.ibm.javart.operations.Subscript.run( ezeProgram, deploy.propertyFiles.propertyFile.checkedValue( ezeProgram ), n ) ) ) != 0) )
						{
							// propertiesFileExists BOOLEAN;
							boolean propertiesFileExists = false;
							// propertiesFileExists = false;
							propertiesFileExists = false;
							// propertyFileName STRING;
							com.ibm.javart.StringValue propertyFileName = new com.ibm.javart.StringItem( "propertyFileName", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING );
							// IF ( "" != alocale )
							if ( ("".compareTo( alocale ) != 0) )
							{
								// propertyFileName = "properties/" + deploy.propertyFiles.propertyFile[n] + "-" + alocale + ".js";
								propertyFileName.setValue( (((("properties/" + com.ibm.javart.operations.ConcatValue.run( ezeProgram, com.ibm.javart.operations.Subscript.run( ezeProgram, deploy.propertyFiles.propertyFile.checkedValue( ezeProgram ), n ) )) + "-") + alocale) + ".js") );
								// propertiesFileExists = checkPropertiesFileExists(project, propertyFileName, port);
								propertiesFileExists = $func_checkPropertiesFileExists( com.ibm.javart.operations.Assign.run( ezeProgram, new com.ibm.javart.StringItem( "project", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), project ), com.ibm.javart.operations.Assign.run( ezeProgram, new com.ibm.javart.StringItem( "name", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), propertyFileName ), com.ibm.javart.operations.Assign.run( ezeProgram, new com.ibm.javart.IntItem( "port", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_INT ), port ) ).getValue();
							}
							// IF ( !propertiesFileExists )
							if ( !(propertiesFileExists) )
							{
								// propertyFileName = "properties/" + deploy.propertyFiles.propertyFile[n] + ".js";
								propertyFileName.setValue( (("properties/" + com.ibm.javart.operations.ConcatValue.run( ezeProgram, com.ibm.javart.operations.Subscript.run( ezeProgram, deploy.propertyFiles.propertyFile.checkedValue( ezeProgram ), n ) )) + ".js") );
							}
							// modules = modules :: new Module(){eze$Temp3.name = propertyFileName, eze$Temp3.javascript = "", eze$Temp3.moduleType = ModuleTypeLib.property};
							modules.update( com.ibm.javart.operations.ArrayConcat.run( ezeProgram, new com.ibm.javart.ref.ContainerArrayRef( "eze$Temp15", new com.ibm.javart.arrays.ContainerArray( "eze$Temp15", ezeProgram, 0, 10, Integer.MAX_VALUE, "1Tcom/ibm/egl/rui/loader/internal/Module;" )
							{
								private static final long serialVersionUID = 70L;
								
								public com.ibm.javart.Container makeNewElement( com.ibm.javart.resources.Program ezeProgram ) throws com.ibm.javart.JavartException
								{
									return new com.ibm.egl.rui.loader.internal.Module( "eze$Temp15", null, ezeProgram, com.ibm.javart.Value.SQL_NOT_NULLABLE, "Tcom/ibm/egl/rui/loader/internal/Module;" );
								};
							}, "1Tcom/ibm/egl/rui/loader/internal/Module;" ){
								private static final long serialVersionUID = 70L;
								
								public void createNewValue( com.ibm.javart.resources.Program ezeProgram ) throws com.ibm.javart.JavartException
								{
									value = new com.ibm.javart.arrays.ContainerArray( "eze$Temp15", ezeProgram, 0, 10, Integer.MAX_VALUE, "1Tcom/ibm/egl/rui/loader/internal/Module;" )
									{
										private static final long serialVersionUID = 70L;
										
										public com.ibm.javart.Container makeNewElement( com.ibm.javart.resources.Program ezeProgram ) throws com.ibm.javart.JavartException
										{
											return new com.ibm.egl.rui.loader.internal.Module( "eze$Temp15", null, ezeProgram, com.ibm.javart.Value.SQL_NOT_NULLABLE, "Tcom/ibm/egl/rui/loader/internal/Module;" );
										};
									};
								}
							}, null, modules.value() ).value().appendElement( ezeProgram, com.ibm.javart.operations.Assign.run( ezeProgram, modules.value().makeNewElement( ezeProgram ), $eze$Temp4( new com.ibm.egl.rui.loader.internal.Module( "eze$Temp16", null, ezeProgram, com.ibm.javart.Value.SQL_NOT_NULLABLE, "Tcom/ibm/egl/rui/loader/internal/Module;" ), propertyFileName ) ) ) );
						}
					}
				}
			}
			// XMLLib.debug("add imports");
			ezeProgram.com__ibm__egl__rui__loader__internal__XMLLib.$func_debug( com.ibm.javart.util.ItemFactory.createString( ezeProgram, "s", false, "add imports" ) );
			// IF ( deploy.imports._import != null )
			if ( !com.ibm.javart.operations.IsNull.run( ezeProgram, deploy.imports._005fimport ) )
			{
				// for ( n From 1 To deploy.imports._import.getSize() Increment 1 )
				{
					int n = 0;
					n = (short)1;
					for ( ; (n <= deploy.imports._005fimport.checkedValue( ezeProgram ).getSize( ezeProgram )); n++ )
					{
						// _import STRING;
						java.lang.String _005fimport = "";
						// _import = deploy.imports._import[n];
						_005fimport = com.ibm.javart.operations.ConvertToString.run( ezeProgram, com.ibm.javart.operations.Subscript.run( ezeProgram, deploy.imports._005fimport.checkedValue( ezeProgram ), n ) );
						// modules = modules :: new Module(){eze$Temp5.name = _import, eze$Temp5.javascript = "", eze$Temp5.moduleType = ModuleTypeLib.imports};
						modules.update( com.ibm.javart.operations.ArrayConcat.run( ezeProgram, new com.ibm.javart.ref.ContainerArrayRef( "eze$Temp17", new com.ibm.javart.arrays.ContainerArray( "eze$Temp17", ezeProgram, 0, 10, Integer.MAX_VALUE, "1Tcom/ibm/egl/rui/loader/internal/Module;" )
						{
							private static final long serialVersionUID = 70L;
							
							public com.ibm.javart.Container makeNewElement( com.ibm.javart.resources.Program ezeProgram ) throws com.ibm.javart.JavartException
							{
								return new com.ibm.egl.rui.loader.internal.Module( "eze$Temp17", null, ezeProgram, com.ibm.javart.Value.SQL_NOT_NULLABLE, "Tcom/ibm/egl/rui/loader/internal/Module;" );
							};
						}, "1Tcom/ibm/egl/rui/loader/internal/Module;" ){
							private static final long serialVersionUID = 70L;
							
							public void createNewValue( com.ibm.javart.resources.Program ezeProgram ) throws com.ibm.javart.JavartException
							{
								value = new com.ibm.javart.arrays.ContainerArray( "eze$Temp17", ezeProgram, 0, 10, Integer.MAX_VALUE, "1Tcom/ibm/egl/rui/loader/internal/Module;" )
								{
									private static final long serialVersionUID = 70L;
									
									public com.ibm.javart.Container makeNewElement( com.ibm.javart.resources.Program ezeProgram ) throws com.ibm.javart.JavartException
									{
										return new com.ibm.egl.rui.loader.internal.Module( "eze$Temp17", null, ezeProgram, com.ibm.javart.Value.SQL_NOT_NULLABLE, "Tcom/ibm/egl/rui/loader/internal/Module;" );
									};
								};
							}
						}, null, modules.value() ).value().appendElement( ezeProgram, com.ibm.javart.operations.Assign.run( ezeProgram, modules.value().makeNewElement( ezeProgram ), $eze$Temp6( new com.ibm.egl.rui.loader.internal.Module( "eze$Temp18", null, ezeProgram, com.ibm.javart.Value.SQL_NOT_NULLABLE, "Tcom/ibm/egl/rui/loader/internal/Module;" ), _005fimport ) ) ) );
					}
				}
			}
			// XMLLib.debug("add referenced");
			ezeProgram.com__ibm__egl__rui__loader__internal__XMLLib.$func_debug( com.ibm.javart.util.ItemFactory.createString( ezeProgram, "s", false, "add referenced" ) );
			// IF ( deploy.referencedHandlers.referencedHandler != null )
			if ( !com.ibm.javart.operations.IsNull.run( ezeProgram, deploy.referencedHandlers.referencedHandler ) )
			{
				// j INT;
				int j = 0;
				// j = 0;
				j = (short)0;
				// for ( j From 1 To deploy.referencedHandlers.referencedHandler.getSize() Increment 1 )
				j = (short)1;
				for ( ; (j <= deploy.referencedHandlers.referencedHandler.checkedValue( ezeProgram ).getSize( ezeProgram )); j++ )
				{
					// IF ( "" != deploy.referencedHandlers.referencedHandler[j] )
					if ( ("".compareTo( com.ibm.javart.operations.ConvertToString.run( ezeProgram, com.ibm.javart.operations.Subscript.run( ezeProgram, deploy.referencedHandlers.referencedHandler.checkedValue( ezeProgram ), j ) ) ) != 0) )
					{
						// dynamicHandlerJs STRING;
						com.ibm.javart.StringValue dynamicHandlerJs = new com.ibm.javart.StringItem( "dynamicHandlerJs", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING );
						// dynamicHandlerJs = deploy.referencedHandlers.referencedHandler[j];
						dynamicHandlerJs.setValue( com.ibm.javart.operations.Subscript.run( ezeProgram, deploy.referencedHandlers.referencedHandler.checkedValue( ezeProgram ), j ).getValue() );
						// referencedHandler STRING;
						com.ibm.javart.StringValue referencedHandler = new com.ibm.javart.StringItem( "referencedHandler", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING );
						// referencedHandler = replaceAll(dynamicHandlerJs, "/", ".");
						referencedHandler.setValue( $func_replaceAll( com.ibm.javart.operations.Assign.run( ezeProgram, new com.ibm.javart.StringItem( "s", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), dynamicHandlerJs ), com.ibm.javart.util.ItemFactory.createString( ezeProgram, "original", false, "/" ), com.ibm.javart.util.ItemFactory.createString( ezeProgram, "replacement", false, "." ) ).getValue() );
						// len INT;
						int len = 0;
						// len = StrLib.characterLen(referencedHandler);
						len = ezeProgram.egl__core__StrLib.characterLen( ezeProgram, referencedHandler.getValue() );
						// referencedHandler = referencedHandler[1:len - 3];
						referencedHandler.setValue( com.ibm.javart.operations.Substring.run( ezeProgram, referencedHandler, (short)1, com.ibm.javart.operations.ConvertToInt.run( ezeProgram, com.ibm.javart.operations.Subtract.run( ezeProgram, len, (short)3 ) ) ) );
						// resolveDeploy(project, referencedHandler, port, modules, alocale);
						$func_resolveDeploy__3$T26n4a3e220b( com.ibm.javart.operations.Assign.run( ezeProgram, new com.ibm.javart.StringItem( "project", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), project ), referencedHandler, com.ibm.javart.operations.Assign.run( ezeProgram, new com.ibm.javart.IntItem( "port", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_INT ), port ), modules, alocale );
					}
				}
			}
		}
		// RETURN
		_funcPop();
		return;
	}
	
	private com.ibm.egl.rui.loader.internal.Module $eze$Temp2( com.ibm.egl.rui.loader.internal.Module eze$Temp1, com.ibm.javart.StringValue include ) throws java.lang.Exception
	{
		// eze$Temp1.name = include;
		eze$Temp1.name.setValue( include.getValue() );
		// eze$Temp1.javascript = "";
		eze$Temp1.javascript.setValue( "" );
		// eze$Temp1.moduleType = ModuleTypeLib.include;
		eze$Temp1.moduleType.setValue( ezeProgram.com__ibm__egl__rui__loader__internal__ModuleTypeLib.include.getValue() );
		return eze$Temp1;
	}
	
	private com.ibm.egl.rui.loader.internal.Module $eze$Temp4( com.ibm.egl.rui.loader.internal.Module eze$Temp3, com.ibm.javart.StringValue propertyFileName ) throws java.lang.Exception
	{
		// eze$Temp3.name = propertyFileName;
		eze$Temp3.name.setValue( propertyFileName.getValue() );
		// eze$Temp3.javascript = "";
		eze$Temp3.javascript.setValue( "" );
		// eze$Temp3.moduleType = ModuleTypeLib.property;
		eze$Temp3.moduleType.setValue( ezeProgram.com__ibm__egl__rui__loader__internal__ModuleTypeLib.property.getValue() );
		return eze$Temp3;
	}
	
	private com.ibm.egl.rui.loader.internal.Module $eze$Temp6( com.ibm.egl.rui.loader.internal.Module eze$Temp5, java.lang.String _005fimport ) throws java.lang.Exception
	{
		// eze$Temp5.name = _import;
		eze$Temp5.name.setValue( _005fimport );
		// eze$Temp5.javascript = "";
		eze$Temp5.javascript.setValue( "" );
		// eze$Temp5.moduleType = ModuleTypeLib.imports;
		eze$Temp5.moduleType.setValue( ezeProgram.com__ibm__egl__rui__loader__internal__ModuleTypeLib.imports.getValue() );
		return eze$Temp5;
	}
	
	public void $func_resolveImportDeploy__3$T26n4a3e220b( java.lang.String project, com.ibm.javart.StringValue name, int port, com.ibm.javart.ref.ContainerArrayRef modules, java.lang.String alocale ) throws java.lang.Exception
	{
		_funcPush( "resolveImportDeploy" );
		
		// IF ( referencedDeployFiles.containsKey(name) || filterDynamicLoadingHandlers.containsKey(name) )
		if ( ( ezeProgram.referencedDeployFiles.checkedValue( ezeProgram ).containsKey( name.getValue() ).getValue() || ezeProgram.filterDynamicLoadingHandlers.checkedValue( ezeProgram ).containsKey( name.getValue() ).getValue() ) )
		{
			// RETURN
			if ( true )
			{
				_funcPop();
				return;
			}
		}
		// referencedDeployFiles[name] = name;
		com.ibm.javart.operations.Access.run( ezeProgram, ezeProgram.referencedDeployFiles.value(), name.getValue() ).update( com.ibm.javart.operations.Assign.run( ezeProgram, new com.ibm.javart.StringItem( "eze$Temp19", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), name ) );
		// deploy RuiDeploy;
		com.ibm.egl.rui.loader.services.RuiDeploy deploy = new com.ibm.egl.rui.loader.services.RuiDeploy( "deploy", null, ezeProgram, com.ibm.javart.Value.SQL_NOT_NULLABLE, "Tcom/ibm/egl/rui/loader/services/RuiDeploy;" );
		// name = replaceAll(name, ".", "/");
		name.setValue( $func_replaceAll( com.ibm.javart.operations.Assign.run( ezeProgram, new com.ibm.javart.StringItem( "s", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), name ), com.ibm.javart.util.ItemFactory.createString( ezeProgram, "original", false, "." ), com.ibm.javart.util.ItemFactory.createString( ezeProgram, "replacement", false, "/" ) ).getValue() );
		// xml STRING;
		com.ibm.javart.StringValue xml = new com.ibm.javart.StringItem( "xml", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING );
		// xml = getContentsForImport(project, name + ".deploy", port);
		xml.setValue( $func_getContentsForImport( project, (name.getValue() + ".deploy"), port ) );
		// IF ( xml != "" )
		if ( (xml.getValue().compareTo( "" ) != 0) )
		{
			// XMLLib.convertFromXMLForImport(xml, deploy);
			ezeProgram.com__ibm__egl__rui__loader__internal__XMLLib.$func_convertFromXMLForImport( com.ibm.javart.operations.Assign.run( ezeProgram, new com.ibm.javart.StringItem( "xml", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), xml ), deploy );
			// XMLLib.debug("add imports");
			ezeProgram.com__ibm__egl__rui__loader__internal__XMLLib.$func_debug( com.ibm.javart.util.ItemFactory.createString( ezeProgram, "s", false, "add imports" ) );
			// IF ( deploy.imports._import != null )
			if ( !com.ibm.javart.operations.IsNull.run( ezeProgram, deploy.imports._005fimport ) )
			{
				// for ( n From 1 To deploy.imports._import.getSize() Increment 1 )
				{
					int n = 0;
					n = (short)1;
					for ( ; (n <= deploy.imports._005fimport.checkedValue( ezeProgram ).getSize( ezeProgram )); n++ )
					{
						// _import STRING;
						java.lang.String _005fimport = "";
						// _import = deploy.imports._import[n];
						_005fimport = com.ibm.javart.operations.ConvertToString.run( ezeProgram, com.ibm.javart.operations.Subscript.run( ezeProgram, deploy.imports._005fimport.checkedValue( ezeProgram ), n ) );
						// modules = modules :: new Module(){eze$Temp7.name = _import, eze$Temp7.javascript = "", eze$Temp7.moduleType = ModuleTypeLib.imports};
						modules.update( com.ibm.javart.operations.ArrayConcat.run( ezeProgram, new com.ibm.javart.ref.ContainerArrayRef( "eze$Temp20", new com.ibm.javart.arrays.ContainerArray( "eze$Temp20", ezeProgram, 0, 10, Integer.MAX_VALUE, "1Tcom/ibm/egl/rui/loader/internal/Module;" )
						{
							private static final long serialVersionUID = 70L;
							
							public com.ibm.javart.Container makeNewElement( com.ibm.javart.resources.Program ezeProgram ) throws com.ibm.javart.JavartException
							{
								return new com.ibm.egl.rui.loader.internal.Module( "eze$Temp20", null, ezeProgram, com.ibm.javart.Value.SQL_NOT_NULLABLE, "Tcom/ibm/egl/rui/loader/internal/Module;" );
							};
						}, "1Tcom/ibm/egl/rui/loader/internal/Module;" ){
							private static final long serialVersionUID = 70L;
							
							public void createNewValue( com.ibm.javart.resources.Program ezeProgram ) throws com.ibm.javart.JavartException
							{
								value = new com.ibm.javart.arrays.ContainerArray( "eze$Temp20", ezeProgram, 0, 10, Integer.MAX_VALUE, "1Tcom/ibm/egl/rui/loader/internal/Module;" )
								{
									private static final long serialVersionUID = 70L;
									
									public com.ibm.javart.Container makeNewElement( com.ibm.javart.resources.Program ezeProgram ) throws com.ibm.javart.JavartException
									{
										return new com.ibm.egl.rui.loader.internal.Module( "eze$Temp20", null, ezeProgram, com.ibm.javart.Value.SQL_NOT_NULLABLE, "Tcom/ibm/egl/rui/loader/internal/Module;" );
									};
								};
							}
						}, null, modules.value() ).value().appendElement( ezeProgram, com.ibm.javart.operations.Assign.run( ezeProgram, modules.value().makeNewElement( ezeProgram ), $eze$Temp8( new com.ibm.egl.rui.loader.internal.Module( "eze$Temp21", null, ezeProgram, com.ibm.javart.Value.SQL_NOT_NULLABLE, "Tcom/ibm/egl/rui/loader/internal/Module;" ), _005fimport ) ) ) );
					}
				}
			}
		}
		// RETURN
		_funcPop();
		return;
	}
	
	private com.ibm.egl.rui.loader.internal.Module $eze$Temp8( com.ibm.egl.rui.loader.internal.Module eze$Temp7, java.lang.String _005fimport ) throws java.lang.Exception
	{
		// eze$Temp7.name = _import;
		eze$Temp7.name.setValue( _005fimport );
		// eze$Temp7.javascript = "";
		eze$Temp7.javascript.setValue( "" );
		// eze$Temp7.moduleType = ModuleTypeLib.imports;
		eze$Temp7.moduleType.setValue( ezeProgram.com__ibm__egl__rui__loader__internal__ModuleTypeLib.imports.getValue() );
		return eze$Temp7;
	}
	
	public com.ibm.javart.StringValue $func_getContents( com.ibm.javart.StringValue project, com.ibm.javart.StringValue name, com.ibm.javart.IntValue port ) throws java.lang.Exception
	{
		_funcPush( "getContents" );
		com.ibm.javart.StringValue $result = new com.ibm.javart.StringItem( "STRING", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING );
		
		// file File;
		com.ibm.egl.rui.loader.File file = null;
		// file = new File(project, name, port);
		file = ((com.ibm.egl.rui.loader.File)new com.ibm.egl.rui.loader.File( project.getValue(), name.getValue(), port.getValue()));
		// TRY 
		try
		{
			// RETURN file.getContents()
			if ( true )
			{
				// $result = file.getContents();
				$result.setValue( com.ibm.javart.operations.Java2Egl.dim0string( ezeProgram, file.getContents() ).getValue() );
				_funcPop();
				return $result;
			}
		}
		catch ( java.lang.Exception eze$Temp22 )
		{
			egl.core.AnyException_Ref e = com.ibm.javart.util.JavartUtil.anyExceptionHandler( ezeProgram, eze$Temp22, "e" );
			// SysLib.writeStderr("Error: " + file.getURL() + " " + e.message);
			System.err.println( ((("Error: " + file.getURL()) + " ") + e.checkedValue( ezeProgram ).message.getValue()) );
		}
		// RETURN ""
		// $result = "";
		$result.setValue( "" );
		_funcPop();
		return $result;
	}
	
	public java.lang.String $func_getContentsForImport( java.lang.String project, java.lang.String name, int port ) throws java.lang.Exception
	{
		_funcPush( "getContentsForImport" );
		java.lang.String $result = "";
		
		// file File;
		com.ibm.egl.rui.loader.File file = null;
		// file = new File(project, name, port);
		file = ((com.ibm.egl.rui.loader.File)new com.ibm.egl.rui.loader.File( project, name, port));
		// TRY 
		try
		{
			// RETURN file.getContentsForImport()
			if ( true )
			{
				// $result = file.getContentsForImport();
				$result = file.getContentsForImport();
				_funcPop();
				return $result;
			}
		}
		catch ( java.lang.Exception eze$Temp23 )
		{
			com.ibm.javart.util.JavartUtil.anyExceptionHandler( ezeProgram, eze$Temp23, "e" );
		}
		// RETURN ""
		// $result = "";
		$result = "";
		_funcPop();
		return $result;
	}
	
	public com.ibm.javart.BooleanValue $func_checkPropertiesFileExists( com.ibm.javart.StringValue project, com.ibm.javart.StringValue name, com.ibm.javart.IntValue port ) throws java.lang.Exception
	{
		_funcPush( "checkPropertiesFileExists" );
		com.ibm.javart.BooleanValue $result = new com.ibm.javart.BooleanItem( "BOOLEAN", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_BOOLEAN );
		
		// file File;
		com.ibm.egl.rui.loader.File file = null;
		// file = new File(project, name, port);
		file = ((com.ibm.egl.rui.loader.File)new com.ibm.egl.rui.loader.File( project.getValue(), name.getValue(), port.getValue()));
		// veNotFoundText STRING;
		// veNotFoundText = "document.write("Could not open";
		// length INT;
		int length = 0;
		// length = 30;
		length = (short)30;
		// TRY 
		try
		{
			// content STRING;
			java.lang.String content = "";
			// content = file.getContents();
			content = file.getContents();
			// IF ( StrLib.characterLen(content) > length )
			if ( (ezeProgram.egl__core__StrLib.characterLen( ezeProgram, content ) > length) )
			{
				// IF ( content[1:length] == "document.write("Could not open" )
				if ( (com.ibm.javart.operations.Substring.run( ezeProgram, content, (short)1, length ).compareTo( "document.write(\"Could not open" ) == 0) )
				{
					// RETURN false
					if ( true )
					{
						// $result = false;
						$result.setValue( false );
						_funcPop();
						return $result;
					}
				}
			}
		}
		catch ( java.lang.Exception eze$Temp24 )
		{
			com.ibm.javart.util.JavartUtil.anyExceptionHandler( ezeProgram, eze$Temp24, "e" );
			// RETURN false
			if ( true )
			{
				// $result = false;
				$result.setValue( false );
				_funcPop();
				return $result;
			}
		}
		// RETURN true
		// $result = true;
		$result.setValue( true );
		_funcPop();
		return $result;
	}
	
	public com.ibm.javart.StringValue $func_replaceAll( com.ibm.javart.StringValue s, com.ibm.javart.StringValue original, com.ibm.javart.StringValue replacement ) throws java.lang.Exception
	{
		_funcPush( "replaceAll" );
		com.ibm.javart.StringValue $result = new com.ibm.javart.StringItem( "STRING", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING );
		
		// index INT;
		int index = 0;
		// index = StrLib.indexOf(s, original);
		index = ezeProgram.egl__core__StrLib.indexOf( ezeProgram, s.getValue(), original.getValue() );
		// len INT;
		int len = 0;
		// len = StrLib.characterLen(s);
		len = ezeProgram.egl__core__StrLib.characterLen( ezeProgram, s.getValue() );
		// TRY 
		try
		{
			// While ( index > 0 )
			while ( (index > (short)0) )
			{
				// s = s[1:index - 1] + replacement + s[index + 1:len];
				s.setValue( ((com.ibm.javart.operations.Substring.run( ezeProgram, s, (short)1, com.ibm.javart.operations.ConvertToInt.run( ezeProgram, com.ibm.javart.operations.Subtract.run( ezeProgram, index, (short)1 ) ) ) + replacement.getValue()) + com.ibm.javart.operations.Substring.run( ezeProgram, s, com.ibm.javart.operations.ConvertToInt.run( ezeProgram, com.ibm.javart.operations.Add.run( ezeProgram, index, (short)1 ) ), len )) );
				// index = StrLib.indexOf(s, original);
				index = ezeProgram.egl__core__StrLib.indexOf( ezeProgram, s.getValue(), original.getValue() );
			}
		}
		catch ( java.lang.Exception eze$Temp25 )
		{
			com.ibm.javart.util.JavartUtil.anyExceptionHandler( ezeProgram, eze$Temp25, "e" );
		}
		// RETURN s
		// $result = s;
		$result.setValue( s.getValue() );
		_funcPop();
		return $result;
	}
	
	public com.ibm.javart.StringValue $func_getLocale() throws java.lang.Exception
	{
		_funcPush( "getLocale" );
		com.ibm.javart.StringValue $result = new com.ibm.javart.StringItem( "STRING", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING );
		
		// RETURN "en_US"
		// $result = "en_US";
		$result.setValue( "en_US" );
		_funcPop();
		return $result;
	}
	
	public void $initModuleLoaderService_Impl( ModuleLoaderService_Impl ezeProgram ) throws java.lang.Exception
	{
		_dbms( com.ibm.javart.sql.Sql.DBMS_DERBY );
		// RETURN
	}
	
}

// Build options from com_ibm_egl_rui_4_1_0JavaBuildOptions, \\com.ibm.egl.rui_4.1.0\\EGLSource\\com_ibm_egl_rui_4_1_0.eglbld
//
//	bidiConversionTable = 
//	bind = 
//	blanksAsZero = NO
//	buildPlan = YES
//	byteArrayOperationsForStructuredRecords = 0
//	cachePreparedStatements = NO
//	cancelAfterTransfer = NO
//	checkNumericOverflow = YES
//	checkToTransaction = YES
//	checkType = NONE
//	cicsEntries = NONE
//	cicsj2cTimeout = -1
//	clientCodeSet = IBM-850
//	commentLevel = 1
//	currencyLocation = NONE
//	currencySymbol = 
//	data = 31
//	dbContentSeparator = 
//	dbms = DERBY
//	debugTrace = NO
//	decimalSymbol = 
//	defaultDateFormat = 
//	defaultMoneyFormat = 
//	defaultNumericFormat = 
//	defaultTimeFormat = 
//	defaultTimeStampFormat = 
//	deploymentDescriptor = com_ibm_egl_rui_4_1_0
//	destDirectory = 
//	destHost = 
//	destLibrary = QGPL
//	destPort = 
//	destUserID = 
//	eliminateSystemDependentCode = YES
//	enableJavaWrapperGen = NO
//	endCommarea = NO
//	errorDestination = 
//	fillWithNulls = YES
//	formServicePgmType = 
//	genDDSFile = NO
//	genDataTables = YES
//	genDirectory = 
//	genFixedLengthSqlLike = NO
//	genFormGroup = YES
//	genHelpFormGroup = YES
//	genProject = com.ibm.egl.rui_4.1.0
//	genProperties = GLOBAL
//	genResourceBundle = YES
//	genReturnImmediate = NO
//	genRunFile = YES
//	genVGUIRecords = YES
//	imsFastPath = NO
//	imsLogID = NOLOG
//	imsPSB = 
//	includeLineNumbers = NO
//	j2ee = NO
//	j2eeLevel = 1.3
//	leftAlign = YES
//	linkEdit = 
//	linkage = 
//	math = COBOL
//	maxNumericDigits = 31
//	mfsExtendedAttr = YES
//	mfsIgnore = NO
//	mfsUseTestLibrary = NO
//	msgTablePrefix = 
//	positiveSignIndicator = F
//	prep = YES
//	prepareAllSQLStatements = NO
//	preparedStatementCacheSize = -1
//	printDestination = PROGRAMCONTROLLED
//	projectID = 
//	reservedWord = 
//	resourceAssociations = 
//	resourceBundleLocale = 
//	restartTransactionID = 
//	restoreCurrentMsgOnError = YES
//	returnTransaction = 
//	separatorSymbol = 
//	serverCodeSet = IBM-037
//	serverType = 
//	sessionBeanID = 
//	setFormItemFull = YES
//	spaADF = NO
//	spaSize = 0
//	spaStatusBytePosition = 0
//	spacesZero = NO
//	sqlAccessColumnsAsBytes = NO
//	sqlCommitControl = 
//	sqlDB = jdbc:derby:E:\\rbdws\\v8.0\\DynamicLoading\\.metadata\\.plugins\\org.eclipse.birt.report.data.oda.jdbc.dbprofile.sampledb/db/BirtSample
//	sqlErrorTrace = NO
//	sqlID = 
//	sqlIOTrace = NO
//	sqlJDBCDriverClass = org.apache.derby.jdbc.EmbeddedDriver
//	sqlJNDIName = 
//	sqlSchema = 
//	sqlValidationConnectionURL = jdbc:derby:E:\\rbdws\\v8.0\\DynamicLoading\\.metadata\\.plugins\\org.eclipse.birt.report.data.oda.jdbc.dbprofile.sampledb/db/BirtSample
//	startTransactionID = 
//	statementTrace = NO
//	synchOnPgmTransfer = YES
//	synchOnTrxTransfer = NO
//	sysCodes = NO
//	system = WIN
//	targetNLS = ENU
//	tempDirectory = 
//	templateDir = 
//	transferErrorTransaction = 
//	truncateExtraDecimals = YES
//	twaOffset = 0
//	useCurrentSchema = NO
//	useXctlForTransfer = NO
//	userMessageFile = 
//	v60NumWithDateBehavior = NO
//	v60DecimalBehavior = NO
//	v60NumWithCharBehavior = NO
//	v60SQLNullableBehavior = NO
//	vagCompatibility = NO
//	v71AddBehavior = NO
//	validateBlankDateFields = YES
//	validateMixedItems = YES
//	validateOnlyIfModified = NO
//	validateSQLStatements = NO
//	vseLibrary = 
//	workDBType = 
//	wrapperCompatibility = CURRENT
//	wrapperPackageName = 
