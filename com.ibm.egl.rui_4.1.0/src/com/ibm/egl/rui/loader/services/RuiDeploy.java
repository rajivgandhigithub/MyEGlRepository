// Generated at Sun Sep 03 10:03:15 AST 2023 by EGL 8.0.0.v20180914_0609
// No APARs installed.
package com.ibm.egl.rui.loader.services;

public class RuiDeploy extends com.ibm.javart.Container
{
	private static final long serialVersionUID = 70L;
	
	public com.ibm.egl.rui.loader.services.RUIDeploy_005fInclude includes;
	public com.ibm.egl.rui.loader.services.RUIDeploy_005fImport imports;
	public com.ibm.egl.rui.loader.services.RUIDeploy_005fruntimePropertyFile runtimePropertyFiles;
	public com.ibm.egl.rui.loader.services.RUIDeploy_005fReferenced referencedHandlers;
	public com.ibm.egl.rui.loader.services.RUIDeploy_005fpropertyFile propertyFiles;
	
	public RuiDeploy() throws com.ibm.javart.JavartException
	{
		this( "RuiDeploy", null, com.ibm.javart.util.ServiceUtilities.programInstance("RuiDeploy", false), com.ibm.javart.Value.SQL_NOT_NULLABLE, "Tcom/ibm/egl/rui/loader/services/RuiDeploy;" );
	}
	public RuiDeploy( String ezeName, com.ibm.javart.Container ezeContainer, final com.ibm.javart.resources.Program ezeProgram, int ezeNullStatus, String ezeSignature )
	throws com.ibm.javart.JavartException
	{
		super( ezeName, ezeContainer, ezeNullStatus );
		signature( ezeSignature );
		this.ezeProgram = ezeProgram;
		
		includes = new com.ibm.egl.rui.loader.services.RUIDeploy_005fInclude( "includes", RuiDeploy.this, ezeProgram, com.ibm.javart.Value.SQL_NULL, "Tcom/ibm/egl/rui/loader/services/RUIDeploy_Include?;" );
		add( includes );
		imports = new com.ibm.egl.rui.loader.services.RUIDeploy_005fImport( "imports", RuiDeploy.this, ezeProgram, com.ibm.javart.Value.SQL_NULL, "Tcom/ibm/egl/rui/loader/services/RUIDeploy_Import?;" );
		add( imports );
		runtimePropertyFiles = new com.ibm.egl.rui.loader.services.RUIDeploy_005fruntimePropertyFile( "runtimePropertyFiles", RuiDeploy.this, ezeProgram, com.ibm.javart.Value.SQL_NULL, "Tcom/ibm/egl/rui/loader/services/RUIDeploy_runtimePropertyFile?;" );
		add( runtimePropertyFiles );
		referencedHandlers = new com.ibm.egl.rui.loader.services.RUIDeploy_005fReferenced( "referencedHandlers", RuiDeploy.this, ezeProgram, com.ibm.javart.Value.SQL_NULL, "Tcom/ibm/egl/rui/loader/services/RUIDeploy_Referenced?;" );
		add( referencedHandlers );
		propertyFiles = new com.ibm.egl.rui.loader.services.RUIDeploy_005fpropertyFile( "propertyFiles", RuiDeploy.this, ezeProgram, com.ibm.javart.Value.SQL_NULL, "Tcom/ibm/egl/rui/loader/services/RUIDeploy_propertyFile?;" );
		add( propertyFiles );
		
		
	}
	
	public Object clone() throws java.lang.CloneNotSupportedException
	{
		RuiDeploy ezeClone = (RuiDeploy)super.clone();
		ezeClone.includes = (com.ibm.egl.rui.loader.services.RUIDeploy_005fInclude)includes.clone();
		ezeClone.add( ezeClone.includes );
		ezeClone.imports = (com.ibm.egl.rui.loader.services.RUIDeploy_005fImport)imports.clone();
		ezeClone.add( ezeClone.imports );
		ezeClone.runtimePropertyFiles = (com.ibm.egl.rui.loader.services.RUIDeploy_005fruntimePropertyFile)runtimePropertyFiles.clone();
		ezeClone.add( ezeClone.runtimePropertyFiles );
		ezeClone.referencedHandlers = (com.ibm.egl.rui.loader.services.RUIDeploy_005fReferenced)referencedHandlers.clone();
		ezeClone.add( ezeClone.referencedHandlers );
		ezeClone.propertyFiles = (com.ibm.egl.rui.loader.services.RUIDeploy_005fpropertyFile)propertyFiles.clone();
		ezeClone.add( ezeClone.propertyFiles );
		return ezeClone;
	}
	
	public com.ibm.egl.rui.loader.services.RUIDeploy_005fInclude getincludes()
	{
		if ( includes.nullStatus() == com.ibm.javart.Value.SQL_NULL )
		{
			return null;
		}
		else
		{
			com.ibm.egl.rui.loader.services.RUIDeploy_005fInclude ezeTemp = (com.ibm.egl.rui.loader.services.RUIDeploy_005fInclude)includes;
			return ezeTemp;
		}
	}
	public void setincludes( com.ibm.egl.rui.loader.services.RUIDeploy_005fInclude ezeValue ) throws com.ibm.javart.JavartException
	{
		ezeProgram._setModified( RuiDeploy.this, "includes", includes, ezeValue );
		if ( ezeValue == null )
		{
			com.ibm.javart.operations.Assign.run( ezeProgram, includes, com.ibm.javart.ref.Null.NULL );
		}
		else
		{
			com.ibm.javart.operations.Assign.run( ezeProgram, includes, ezeValue );
		}
	}
	public com.ibm.egl.rui.loader.services.RUIDeploy_005fImport getimports()
	{
		if ( imports.nullStatus() == com.ibm.javart.Value.SQL_NULL )
		{
			return null;
		}
		else
		{
			com.ibm.egl.rui.loader.services.RUIDeploy_005fImport ezeTemp = (com.ibm.egl.rui.loader.services.RUIDeploy_005fImport)imports;
			return ezeTemp;
		}
	}
	public void setimports( com.ibm.egl.rui.loader.services.RUIDeploy_005fImport ezeValue ) throws com.ibm.javart.JavartException
	{
		ezeProgram._setModified( RuiDeploy.this, "imports", imports, ezeValue );
		if ( ezeValue == null )
		{
			com.ibm.javart.operations.Assign.run( ezeProgram, imports, com.ibm.javart.ref.Null.NULL );
		}
		else
		{
			com.ibm.javart.operations.Assign.run( ezeProgram, imports, ezeValue );
		}
	}
	public com.ibm.egl.rui.loader.services.RUIDeploy_005fruntimePropertyFile getruntimePropertyFiles()
	{
		if ( runtimePropertyFiles.nullStatus() == com.ibm.javart.Value.SQL_NULL )
		{
			return null;
		}
		else
		{
			com.ibm.egl.rui.loader.services.RUIDeploy_005fruntimePropertyFile ezeTemp = (com.ibm.egl.rui.loader.services.RUIDeploy_005fruntimePropertyFile)runtimePropertyFiles;
			return ezeTemp;
		}
	}
	public void setruntimePropertyFiles( com.ibm.egl.rui.loader.services.RUIDeploy_005fruntimePropertyFile ezeValue ) throws com.ibm.javart.JavartException
	{
		ezeProgram._setModified( RuiDeploy.this, "runtimePropertyFiles", runtimePropertyFiles, ezeValue );
		if ( ezeValue == null )
		{
			com.ibm.javart.operations.Assign.run( ezeProgram, runtimePropertyFiles, com.ibm.javart.ref.Null.NULL );
		}
		else
		{
			com.ibm.javart.operations.Assign.run( ezeProgram, runtimePropertyFiles, ezeValue );
		}
	}
	public com.ibm.egl.rui.loader.services.RUIDeploy_005fReferenced getreferencedHandlers()
	{
		if ( referencedHandlers.nullStatus() == com.ibm.javart.Value.SQL_NULL )
		{
			return null;
		}
		else
		{
			com.ibm.egl.rui.loader.services.RUIDeploy_005fReferenced ezeTemp = (com.ibm.egl.rui.loader.services.RUIDeploy_005fReferenced)referencedHandlers;
			return ezeTemp;
		}
	}
	public void setreferencedHandlers( com.ibm.egl.rui.loader.services.RUIDeploy_005fReferenced ezeValue ) throws com.ibm.javart.JavartException
	{
		ezeProgram._setModified( RuiDeploy.this, "referencedHandlers", referencedHandlers, ezeValue );
		if ( ezeValue == null )
		{
			com.ibm.javart.operations.Assign.run( ezeProgram, referencedHandlers, com.ibm.javart.ref.Null.NULL );
		}
		else
		{
			com.ibm.javart.operations.Assign.run( ezeProgram, referencedHandlers, ezeValue );
		}
	}
	public com.ibm.egl.rui.loader.services.RUIDeploy_005fpropertyFile getpropertyFiles()
	{
		if ( propertyFiles.nullStatus() == com.ibm.javart.Value.SQL_NULL )
		{
			return null;
		}
		else
		{
			com.ibm.egl.rui.loader.services.RUIDeploy_005fpropertyFile ezeTemp = (com.ibm.egl.rui.loader.services.RUIDeploy_005fpropertyFile)propertyFiles;
			return ezeTemp;
		}
	}
	public void setpropertyFiles( com.ibm.egl.rui.loader.services.RUIDeploy_005fpropertyFile ezeValue ) throws com.ibm.javart.JavartException
	{
		ezeProgram._setModified( RuiDeploy.this, "propertyFiles", propertyFiles, ezeValue );
		if ( ezeValue == null )
		{
			com.ibm.javart.operations.Assign.run( ezeProgram, propertyFiles, com.ibm.javart.ref.Null.NULL );
		}
		else
		{
			com.ibm.javart.operations.Assign.run( ezeProgram, propertyFiles, ezeValue );
		}
	}
	
	public com.ibm.javart.util.JavartRecordHelper helper()
	{
		if (ezeHelper == null)
		{
			ezeHelper = new com.ibm.egl.rui.loader.services.RuiDeploy_Helper( ezeProgram );
		}
		return ezeHelper;
	}
}
