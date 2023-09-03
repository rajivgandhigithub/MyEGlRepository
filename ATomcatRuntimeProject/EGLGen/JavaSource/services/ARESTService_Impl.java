// Generated at Fri Jan 25 15:06:11 CST 2013 by EGL 8.0.0.qualifier
// No generator APARs installed.
package services;

public class ARESTService_Impl extends com.ibm.javart.resources.Program implements com.ibm.javart.services.ServiceCore2
{
	private static final long serialVersionUID = 70L;
	
	public final ARESTService_Impl ezeProgram;
	public libraries.ALibrary_Lib libraries__ALibrary;
	
	public ARESTService_Impl( com.ibm.javart.resources.RunUnit ru ) throws java.lang.Exception
	{
		super( "ARESTService", "ARESTService", ru, false, true, 7 );
		ezeProgram = this;
		$initARESTService_Impl( this );
	}
	
	public Object ezeInvoke(String operationName, String functionName, Object[] parameters) throws Exception
	{
		int ezeStackDepth = ezeProgram._funcStackDepth();
		try
		{
			if( "$func_returnValue".equalsIgnoreCase(functionName) )
			{
				if( 2 != parameters.length )
				{
					com.ibm.javart.util.JavartUtil.throwEglServiceInvocationException( ezeProgram, parameters, 2 );
				}
				return $func_returnValue( (com.ibm.javart.StringValue)((com.ibm.javart.calls.MethodParameter)parameters[ 0 ]).parameter() );
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
			if( "returnValue".equalsIgnoreCase(operationName) )
			{
				if( 2 != parameters.length )
				{
					com.ibm.javart.util.JavartUtil.throwEglServiceInvocationException( ezeProgram, parameters, 2 );
				}
				return $func_returnValue( (com.ibm.javart.StringValue)((com.ibm.javart.calls.MethodParameter)parameters[ 0 ]).parameter() );
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
	public libraries.ALibrary_Lib eze$getlibraries__ALibrary() throws com.ibm.javart.JavartException
	{
		if ( libraries__ALibrary == null )
		{
			libraries__ALibrary = (libraries.ALibrary_Lib)ezeProgram._runUnit().loadLibrary( "libraries.ALibrary_Lib" );
		}
		return libraries__ALibrary;
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
	public com.ibm.javart.calls.MethodParameter[] parametersByOperationName(String operationName) throws com.ibm.javart.JavartException
	{
		if( "returnValue".equalsIgnoreCase(operationName) )
		{
			return new com.ibm.javart.calls.MethodParameter[] { new com.ibm.javart.calls.MethodParameter( new com.ibm.javart.StringItem( "value", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), com.ibm.javart.calls.MethodParameter.IN ), new com.ibm.javart.calls.MethodParameter( new com.ibm.javart.StringItem( "STRING", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), com.ibm.javart.calls.MethodParameter.RETURN ) };
		}
		String ezeErrMessage = com.ibm.javart.util.JavartUtil.errorMessage( ezeProgram, com.ibm.javart.messages.Message.SOA_E_METHOD_NOT_FOUND, new Object[] { operationName, _name() } );
		throw new com.ibm.javart.JavartException(com.ibm.javart.messages.Message.SOA_E_METHOD_NOT_FOUND, ezeErrMessage );
	}
	public static com.ibm.javart.resources.StartupInfo _startupInfo()
	{
		return new com.ibm.javart.resources.StartupInfo( "ARESTService", "services/ARESTService_Impl.properties", true );
	}
	
	public com.ibm.javart.StringValue $func_returnValue( com.ibm.javart.StringValue value ) throws java.lang.Exception
	{
		_funcPush( "returnValue" );
		com.ibm.javart.StringValue $result = new com.ibm.javart.StringItem( "STRING", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING );
		
		// aValue STRING;
		java.lang.String aValue = "";
		// aRec ARecord;
		records.ARecord aRec = new records.ARecord( "aRec", null, ezeProgram, com.ibm.javart.Value.SQL_NOT_NULLABLE, "Trecords/ARecord;" );
		// aValue = value;
		aValue = value.getValue();
		// aRec.aString = aValue;
		aRec.aString.setValue( aValue );
		// ALibrary.setValue(aRec.aString);
		ezeProgram.eze$getlibraries__ALibrary().$func_setValue( aRec.aString );
		// RETURN ALibrary.getValue()
		// $result = ALibrary.getValue();
		$result.setValue( ezeProgram.eze$getlibraries__ALibrary().$func_getValue().getValue() );
		_funcPop();
		return $result;
	}
	
	public void $initARESTService_Impl( ARESTService_Impl ezeProgram ) throws java.lang.Exception
	{
		_dbms( com.ibm.javart.sql.Sql.DBMS_DB2 );
		// RETURN
	}
	
}

// Build options from AServiceProjectJavaBuildOptions, \\AServiceProject\\EGLSource\\AServiceProject.eglbld
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
//	dbms = DB2
//	debugTrace = NO
//	decimalSymbol = 
//	defaultDateFormat = 
//	defaultMoneyFormat = 
//	defaultNumericFormat = 
//	defaultTimeFormat = 
//	defaultTimeStampFormat = 
//	deploymentDescriptor = AServiceProject
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
//	genProject = AServiceProject
//	genProperties = NO
//	genResourceBundle = YES
//	genReturnImmediate = NO
//	genRunFile = YES
//	genVGUIRecords = YES
//	imsFastPath = NO
//	imsLogID = NOLOG
//	imsPSB = 
//	includeLineNumbers = NO
//	j2ee = YES
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
//	sqlDB = 
//	sqlErrorTrace = NO
//	sqlID = 
//	sqlIOTrace = NO
//	sqlJDBCDriverClass = 
//	sqlJNDIName = 
//	sqlSchema = 
//	sqlValidationConnectionURL = 
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
