// Generated at Fri Jan 25 15:06:10 CST 2013 by EGL 8.0.0.qualifier
// No generator APARs installed.
package libraries;

public class ALibrary_Lib extends com.ibm.javart.resources.Program
{
	private static final long serialVersionUID = 70L;
	
	public final ALibrary_Lib ezeProgram;
	public com.ibm.javart.StringValue value;
	public records.ARecord aRec;
	
	public ALibrary_Lib( com.ibm.javart.resources.RunUnit ru ) throws java.lang.Exception
	{
		super( "ALibrary_Lib", "ALibrary", ru, false, true, 7 );
		ezeProgram = this;
		_runUnit().addLibrary( "libraries.ALibrary_Lib", this );
		value = new com.ibm.javart.StringItem( "value", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING );
		aRec = new records.ARecord( "aRec", null, ezeProgram, com.ibm.javart.Value.SQL_NOT_NULLABLE, "Trecords/ARecord;" );
		$initALibrary_Lib( this );
	}
	
	public boolean _v6CharNumBehavior()
	{
		return false;
	}
	public boolean _v6SqlNullableBehavior()
	{
		return false;
	}
	protected void _initUnsavedFields() throws java.lang.Exception
	{
		super._initUnsavedFields();
		// Set aRec initial;
		com.ibm.javart.operations.SetEmpty.run( ezeProgram, ezeProgram.aRec );
		ezeProgram.aRec.initialize( ezeProgram );
		// value = "ALibrary value";
		ezeProgram.value.setValue( "ALibrary value" );
		// RETURN
	}
	
	
	public void $func_setValue( com.ibm.javart.StringValue value ) throws java.lang.Exception
	{
		_funcPush( "setValue" );
		
		// value = value;
		ezeProgram.value.setValue( value.getValue() );
		// RETURN
		_funcPop();
		return;
	}
	
	public com.ibm.javart.StringValue $func_getValue() throws java.lang.Exception
	{
		_funcPush( "getValue" );
		com.ibm.javart.StringValue $result = new com.ibm.javart.StringItem( "STRING", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING );
		
		// RETURN getValueFunction()
		// $result = getValueFunction();
		$result.setValue( $func_getValueFunction() );
		_funcPop();
		return $result;
	}
	
	public java.lang.String $func_getValueFunction() throws java.lang.Exception
	{
		_funcPush( "getValueFunction" );
		java.lang.String $result = "";
		
		// aRec.aString = value;
		ezeProgram.aRec.aString.setValue( ezeProgram.value.getValue() );
		// RETURN aRec.aString
		// $result = aRec.aString;
		$result = ezeProgram.aRec.aString.getValue();
		_funcPop();
		return $result;
	}
	
	public void $initALibrary_Lib( ALibrary_Lib ezeProgram ) throws java.lang.Exception
	{
		_dbms( com.ibm.javart.sql.Sql.DBMS_DB2 );
		// value = "ALibrary value";
		ezeProgram.value.setValue( "ALibrary value" );
		// RETURN
	}
	
}

// Build options from ASharedProjectJavaBuildOptions, \\ASharedProject\\EGLSource\\ASharedProject.eglbld
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
//	deploymentDescriptor = ASharedProject
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
//	genProject = ASharedProject
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
//	workDBType = AUX
//	wrapperCompatibility = CURRENT
//	wrapperPackageName = 
