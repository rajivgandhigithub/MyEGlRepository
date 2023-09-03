// Generated at Sun Sep 03 10:03:15 AST 2023 by EGL 8.0.0.v20180914_0609
// No APARs installed.
package com.ibm.egl.rui.loader.internal;

public class ModuleTypeLib_Lib extends com.ibm.javart.resources.Program
{
	private static final long serialVersionUID = 70L;
	
	public final ModuleTypeLib_Lib ezeProgram;
	private static final com.ibm.javart.StringValue ezeConst_css = new com.ibm.javart.StringItem( "css", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING );
	public com.ibm.javart.StringValue css = ezeConst_css;
	private static final com.ibm.javart.StringValue ezeConst_property = new com.ibm.javart.StringItem( "property", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING );
	public com.ibm.javart.StringValue property = ezeConst_property;
	private static final com.ibm.javart.StringValue ezeConst_imports = new com.ibm.javart.StringItem( "imports", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING );
	public com.ibm.javart.StringValue imports = ezeConst_imports;
	private static final com.ibm.javart.StringValue ezeConst_runtimeProperty = new com.ibm.javart.StringItem( "runtimeProperty", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING );
	public com.ibm.javart.StringValue runtimeProperty = ezeConst_runtimeProperty;
	private static final com.ibm.javart.StringValue ezeConst_include = new com.ibm.javart.StringItem( "include", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING );
	public com.ibm.javart.StringValue include = ezeConst_include;
	
	public ModuleTypeLib_Lib( com.ibm.javart.resources.RunUnit ru ) throws java.lang.Exception
	{
		super( "ModuleTypeLib_Lib", "ModuleTypeLib", ru, false, true, 7 );
		ezeProgram = this;
		_runUnit().addLibrary( "com.ibm.egl.rui.loader.internal.ModuleTypeLib_Lib", this );
		$initModuleTypeLib_Lib( this );
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
		// RETURN
	}
	
	
	public void $initModuleTypeLib_Lib( ModuleTypeLib_Lib ezeProgram ) throws java.lang.Exception
	{
		_dbms( com.ibm.javart.sql.Sql.DBMS_DERBY );
		// RETURN
		if ( eze$InitConsts )
		{
			// css = "cssFile";
			ezeProgram.css.setValue( "cssFile" );
			// property = "propertyFile";
			ezeProgram.property.setValue( "propertyFile" );
			// imports = "importFile";
			ezeProgram.imports.setValue( "importFile" );
			// runtimeProperty = "runtimePropertyFile";
			ezeProgram.runtimeProperty.setValue( "runtimePropertyFile" );
			// include = "includeFile";
			ezeProgram.include.setValue( "includeFile" );
			eze$InitConsts = false;
		}
	}
	private static boolean eze$InitConsts = true;
	
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
//	workDBType = AUX
//	wrapperCompatibility = CURRENT
//	wrapperPackageName = 
