// Generated at Sun Sep 03 10:03:15 AST 2023 by EGL 8.0.0.v20180914_0609
// No APARs installed.
package com.ibm.egl.rui.loader.internal;

public class XMLLib_Lib extends com.ibm.javart.resources.Program
{
	private static final long serialVersionUID = 70L;
	
	public final XMLLib_Lib ezeProgram;
	
	public XMLLib_Lib( com.ibm.javart.resources.RunUnit ru ) throws java.lang.Exception
	{
		super( "XMLLib_Lib", "XMLLib", ru, false, true, 7 );
		ezeProgram = this;
		_runUnit().addLibrary( "com.ibm.egl.rui.loader.internal.XMLLib_Lib", this );
		$initXMLLib_Lib( this );
	}
	
	public boolean _v6CharNumBehavior()
	{
		return false;
	}
	public boolean _v6SqlNullableBehavior()
	{
		return false;
	}
	
	public void $func_convertFromXML( com.ibm.javart.StringValue xml, com.ibm.egl.rui.loader.services.RuiDeploy result ) throws java.lang.Exception
	{
		_funcPush( "convertFromXML" );
		
		// TRY 
		try
		{
			// doc Document;
			org.w3c.dom.Document doc = null;
			// doc = parseXML(xml);
			doc = ((org.w3c.dom.Document)$func_parseXML( com.ibm.javart.operations.Assign.run( ezeProgram, new com.ibm.javart.StringItem( "xml", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), xml ) ));
			// ruiDeploy Node;
			org.w3c.dom.Node ruiDeploy = null;
			// ruiDeploy = doc.getChildNodes().item(0);
			ruiDeploy = ((org.w3c.dom.Node)doc.getChildNodes().item( (short)0 ));
			// list NodeList;
			org.w3c.dom.NodeList list = null;
			// list = ruiDeploy.getChildNodes();
			list = ((org.w3c.dom.NodeList)ruiDeploy.getChildNodes());
			// debug("initialize result");
			$func_debug( com.ibm.javart.util.ItemFactory.createString( ezeProgram, "s", false, "initialize result" ) );
			// result.imports._import = [];
			result.imports._005fimport.update( new com.ibm.javart.ref.StringArrayRef( "eze$Temp1", new com.ibm.javart.arrays.StringArray( "eze$Temp1", ezeProgram, 0, 10, Integer.MAX_VALUE, com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING_ARRAY ), com.ibm.javart.Constants.SIGNATURE_STRING_ARRAY ).value() );
			// result.includes.include = [];
			result.includes.include.update( new com.ibm.javart.ref.StringArrayRef( "eze$Temp3", new com.ibm.javart.arrays.StringArray( "eze$Temp3", ezeProgram, 0, 10, Integer.MAX_VALUE, com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING_ARRAY ), com.ibm.javart.Constants.SIGNATURE_STRING_ARRAY ).value() );
			// result.propertyFiles.propertyFile = [];
			result.propertyFiles.propertyFile.update( new com.ibm.javart.ref.StringArrayRef( "eze$Temp5", new com.ibm.javart.arrays.StringArray( "eze$Temp5", ezeProgram, 0, 10, Integer.MAX_VALUE, com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING_ARRAY ), com.ibm.javart.Constants.SIGNATURE_STRING_ARRAY ).value() );
			// result.runtimePropertyFiles.runtimePropertyFile = [];
			result.runtimePropertyFiles.runtimePropertyFile.update( new com.ibm.javart.ref.StringArrayRef( "eze$Temp7", new com.ibm.javart.arrays.StringArray( "eze$Temp7", ezeProgram, 0, 10, Integer.MAX_VALUE, com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING_ARRAY ), com.ibm.javart.Constants.SIGNATURE_STRING_ARRAY ).value() );
			// result.referencedHandlers.referencedHandler = [];
			result.referencedHandlers.referencedHandler.update( new com.ibm.javart.ref.StringArrayRef( "eze$Temp9", new com.ibm.javart.arrays.StringArray( "eze$Temp9", ezeProgram, 0, 10, Integer.MAX_VALUE, com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING_ARRAY ), com.ibm.javart.Constants.SIGNATURE_STRING_ARRAY ).value() );
			// for ( i From 0 To list.getLength() - 1 Increment 1 )
			{
				com.ibm.javart.IntValue i = new com.ibm.javart.IntItem( "i", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_INT );
				i.setValue( (short)0 );
				for ( ; (com.ibm.javart.operations.Compare.run( ezeProgram, i, com.ibm.javart.operations.Subtract.run( ezeProgram, com.ibm.javart.operations.Java2Egl.dim0int( ezeProgram, list.getLength() ), (short)1 ), 1 ) <= 0); com.ibm.javart.operations.Increment.run( ezeProgram, i ) )
				{
					// node Node;
					org.w3c.dom.Node node = null;
					// node = list.item(i);
					node = ((org.w3c.dom.Node)list.item( i.getValue() ));
					// name STRING;
					java.lang.String name = "";
					// name = node.getNodeName();
					name = node.getNodeName();
					// debug("Inspect doc child " + i + " " + name);
					$func_debug( com.ibm.javart.operations.Assign.run( ezeProgram, new com.ibm.javart.StringItem( "s", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), ((("Inspect doc child " + com.ibm.javart.operations.ConcatValue.run( ezeProgram, i )) + " ") + name) ) );
					// nodeList NodeList;
					org.w3c.dom.NodeList nodeList = null;
					// nodeList = node.getChildNodes();
					nodeList = ((org.w3c.dom.NodeList)node.getChildNodes());
					// Case ( name )
					// IF ( name == "includes" )
					if ( (name.compareTo( "includes" ) == 0) )
					{
						// for ( j From 0 To nodeList.getLength() - 1 Increment 1 )
						{
							com.ibm.javart.IntValue j = new com.ibm.javart.IntItem( "j", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_INT );
							j.setValue( (short)0 );
							for ( ; (com.ibm.javart.operations.Compare.run( ezeProgram, j, com.ibm.javart.operations.Subtract.run( ezeProgram, com.ibm.javart.operations.Java2Egl.dim0int( ezeProgram, nodeList.getLength() ), (short)1 ), 1 ) <= 0); com.ibm.javart.operations.Increment.run( ezeProgram, j ) )
							{
								// IF ( nodeList.item(j).getNodeName() == "include" )
								if ( (nodeList.item( j.getValue() ).getNodeName().compareTo( "include" ) == 0) )
								{
									// value STRING;
									java.lang.String value = "";
									// value = nodeList.item(j).getTextContent();
									value = nodeList.item( j.getValue() ).getTextContent();
									// debug("   add include " + j + " " + value);
									$func_debug( com.ibm.javart.operations.Assign.run( ezeProgram, new com.ibm.javart.StringItem( "s", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), ((("   add include " + com.ibm.javart.operations.ConcatValue.run( ezeProgram, j )) + " ") + value) ) );
									// result.includes.include = result.includes.include :: value;
									result.includes.include.update( com.ibm.javart.operations.ArrayConcat.run( ezeProgram, new com.ibm.javart.ref.StringArrayRef( "eze$Temp11", new com.ibm.javart.arrays.StringArray( "eze$Temp11", ezeProgram, 0, 10, Integer.MAX_VALUE, com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING_ARRAY ), com.ibm.javart.Constants.SIGNATURE_STRING_ARRAY ), null, result.includes.include.value() ).value().appendElement( ezeProgram, com.ibm.javart.operations.Assign.run( ezeProgram, result.includes.include.value().makeNewElement( ezeProgram ), value ) ) );
								}
							}
						}
					}
					else
					{
						// IF ( name == "propertyFiles" )
						if ( (name.compareTo( "propertyFiles" ) == 0) )
						{
							// for ( j From 0 To nodeList.getLength() - 1 Increment 1 )
							{
								com.ibm.javart.IntValue j = new com.ibm.javart.IntItem( "j", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_INT );
								j.setValue( (short)0 );
								for ( ; (com.ibm.javart.operations.Compare.run( ezeProgram, j, com.ibm.javart.operations.Subtract.run( ezeProgram, com.ibm.javart.operations.Java2Egl.dim0int( ezeProgram, nodeList.getLength() ), (short)1 ), 1 ) <= 0); com.ibm.javart.operations.Increment.run( ezeProgram, j ) )
								{
									// IF ( nodeList.item(j).getNodeName() == "propertyFile" )
									if ( (nodeList.item( j.getValue() ).getNodeName().compareTo( "propertyFile" ) == 0) )
									{
										// value STRING;
										java.lang.String value = "";
										// value = nodeList.item(j).getTextContent();
										value = nodeList.item( j.getValue() ).getTextContent();
										// debug("   add property bundle " + j + " " + value);
										$func_debug( com.ibm.javart.operations.Assign.run( ezeProgram, new com.ibm.javart.StringItem( "s", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), ((("   add property bundle " + com.ibm.javart.operations.ConcatValue.run( ezeProgram, j )) + " ") + value) ) );
										// result.propertyFiles.propertyFile = result.propertyFiles.propertyFile :: value;
										result.propertyFiles.propertyFile.update( com.ibm.javart.operations.ArrayConcat.run( ezeProgram, new com.ibm.javart.ref.StringArrayRef( "eze$Temp12", new com.ibm.javart.arrays.StringArray( "eze$Temp12", ezeProgram, 0, 10, Integer.MAX_VALUE, com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING_ARRAY ), com.ibm.javart.Constants.SIGNATURE_STRING_ARRAY ), null, result.propertyFiles.propertyFile.value() ).value().appendElement( ezeProgram, com.ibm.javart.operations.Assign.run( ezeProgram, result.propertyFiles.propertyFile.value().makeNewElement( ezeProgram ), value ) ) );
									}
								}
							}
						}
						else
						{
							// IF ( name == "imports" )
							if ( (name.compareTo( "imports" ) == 0) )
							{
								// for ( j From 0 To nodeList.getLength() - 1 Increment 1 )
								{
									com.ibm.javart.IntValue j = new com.ibm.javart.IntItem( "j", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_INT );
									j.setValue( (short)0 );
									for ( ; (com.ibm.javart.operations.Compare.run( ezeProgram, j, com.ibm.javart.operations.Subtract.run( ezeProgram, com.ibm.javart.operations.Java2Egl.dim0int( ezeProgram, nodeList.getLength() ), (short)1 ), 1 ) <= 0); com.ibm.javart.operations.Increment.run( ezeProgram, j ) )
									{
										// IF ( nodeList.item(j).getNodeName() == "import" )
										if ( (nodeList.item( j.getValue() ).getNodeName().compareTo( "import" ) == 0) )
										{
											// value STRING;
											java.lang.String value = "";
											// value = nodeList.item(j).getTextContent();
											value = nodeList.item( j.getValue() ).getTextContent();
											// debug("   add import " + j + " " + value);
											$func_debug( com.ibm.javart.operations.Assign.run( ezeProgram, new com.ibm.javart.StringItem( "s", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), ((("   add import " + com.ibm.javart.operations.ConcatValue.run( ezeProgram, j )) + " ") + value) ) );
											// result.imports._import = result.imports._import :: value;
											result.imports._005fimport.update( com.ibm.javart.operations.ArrayConcat.run( ezeProgram, new com.ibm.javart.ref.StringArrayRef( "eze$Temp13", new com.ibm.javart.arrays.StringArray( "eze$Temp13", ezeProgram, 0, 10, Integer.MAX_VALUE, com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING_ARRAY ), com.ibm.javart.Constants.SIGNATURE_STRING_ARRAY ), null, result.imports._005fimport.value() ).value().appendElement( ezeProgram, com.ibm.javart.operations.Assign.run( ezeProgram, result.imports._005fimport.value().makeNewElement( ezeProgram ), value ) ) );
										}
									}
								}
							}
							else
							{
								// IF ( name == "runtimePropertyFiles" )
								if ( (name.compareTo( "runtimePropertyFiles" ) == 0) )
								{
									// for ( j From 0 To nodeList.getLength() - 1 Increment 1 )
									{
										com.ibm.javart.IntValue j = new com.ibm.javart.IntItem( "j", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_INT );
										j.setValue( (short)0 );
										for ( ; (com.ibm.javart.operations.Compare.run( ezeProgram, j, com.ibm.javart.operations.Subtract.run( ezeProgram, com.ibm.javart.operations.Java2Egl.dim0int( ezeProgram, nodeList.getLength() ), (short)1 ), 1 ) <= 0); com.ibm.javart.operations.Increment.run( ezeProgram, j ) )
										{
											// IF ( nodeList.item(j).getNodeName() == "runtimePropertyFile" )
											if ( (nodeList.item( j.getValue() ).getNodeName().compareTo( "runtimePropertyFile" ) == 0) )
											{
												// value STRING;
												java.lang.String value = "";
												// value = nodeList.item(j).getTextContent();
												value = nodeList.item( j.getValue() ).getTextContent();
												// debug("   add runtimePropertyFiles " + j + " " + value);
												$func_debug( com.ibm.javart.operations.Assign.run( ezeProgram, new com.ibm.javart.StringItem( "s", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), ((("   add runtimePropertyFiles " + com.ibm.javart.operations.ConcatValue.run( ezeProgram, j )) + " ") + value) ) );
												// result.runtimePropertyFiles.runtimePropertyFile = result.runtimePropertyFiles.runtimePropertyFile :: value;
												result.runtimePropertyFiles.runtimePropertyFile.update( com.ibm.javart.operations.ArrayConcat.run( ezeProgram, new com.ibm.javart.ref.StringArrayRef( "eze$Temp14", new com.ibm.javart.arrays.StringArray( "eze$Temp14", ezeProgram, 0, 10, Integer.MAX_VALUE, com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING_ARRAY ), com.ibm.javart.Constants.SIGNATURE_STRING_ARRAY ), null, result.runtimePropertyFiles.runtimePropertyFile.value() ).value().appendElement( ezeProgram, com.ibm.javart.operations.Assign.run( ezeProgram, result.runtimePropertyFiles.runtimePropertyFile.value().makeNewElement( ezeProgram ), value ) ) );
											}
										}
									}
								}
								else
								{
									// IF ( name == "referencedHandlers" )
									if ( (name.compareTo( "referencedHandlers" ) == 0) )
									{
										// for ( j From 0 To nodeList.getLength() - 1 Increment 1 )
										{
											com.ibm.javart.IntValue j = new com.ibm.javart.IntItem( "j", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_INT );
											j.setValue( (short)0 );
											for ( ; (com.ibm.javart.operations.Compare.run( ezeProgram, j, com.ibm.javart.operations.Subtract.run( ezeProgram, com.ibm.javart.operations.Java2Egl.dim0int( ezeProgram, nodeList.getLength() ), (short)1 ), 1 ) <= 0); com.ibm.javart.operations.Increment.run( ezeProgram, j ) )
											{
												// IF ( nodeList.item(j).getNodeName() == "referencedHandler" )
												if ( (nodeList.item( j.getValue() ).getNodeName().compareTo( "referencedHandler" ) == 0) )
												{
													// value STRING;
													java.lang.String value = "";
													// value = nodeList.item(j).getTextContent();
													value = nodeList.item( j.getValue() ).getTextContent();
													// debug("   add referencedHandlers " + j + " " + value);
													$func_debug( com.ibm.javart.operations.Assign.run( ezeProgram, new com.ibm.javart.StringItem( "s", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), ((("   add referencedHandlers " + com.ibm.javart.operations.ConcatValue.run( ezeProgram, j )) + " ") + value) ) );
													// result.referencedHandlers.referencedHandler = result.referencedHandlers.referencedHandler :: value;
													result.referencedHandlers.referencedHandler.update( com.ibm.javart.operations.ArrayConcat.run( ezeProgram, new com.ibm.javart.ref.StringArrayRef( "eze$Temp15", new com.ibm.javart.arrays.StringArray( "eze$Temp15", ezeProgram, 0, 10, Integer.MAX_VALUE, com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING_ARRAY ), com.ibm.javart.Constants.SIGNATURE_STRING_ARRAY ), null, result.referencedHandlers.referencedHandler.value() ).value().appendElement( ezeProgram, com.ibm.javart.operations.Assign.run( ezeProgram, result.referencedHandlers.referencedHandler.value().makeNewElement( ezeProgram ), value ) ) );
												}
											}
										}
									}
									else
									{
										// debug("UNHANDLED NODE: " + name + "=" + node.getTextContent());
										$func_debug( com.ibm.javart.operations.Assign.run( ezeProgram, new com.ibm.javart.StringItem( "s", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), ((("UNHANDLED NODE: " + name) + "=") + node.getTextContent()) ) );
									}
								}
							}
						}
					}
				}
			}
		}
		catch ( java.lang.Exception eze$Temp16 )
		{
			egl.core.AnyException_Ref e = com.ibm.javart.util.JavartUtil.anyExceptionHandler( ezeProgram, eze$Temp16, "e" );
			// SysLib.writeStdout("Could not convert XML due to " + e.message + ". XML=" + xml);
			System.out.println( ((("Could not convert XML due to " + e.checkedValue( ezeProgram ).message.getValue()) + ". XML=") + xml.getValue()) );
		}
		// RETURN
		_funcPop();
		return;
	}
	
	public void $func_convertFromXMLForImport( com.ibm.javart.StringValue xml, com.ibm.egl.rui.loader.services.RuiDeploy result ) throws java.lang.Exception
	{
		_funcPush( "convertFromXMLForImport" );
		
		// TRY 
		try
		{
			// doc Document;
			org.w3c.dom.Document doc = null;
			// doc = parseXML(xml);
			doc = ((org.w3c.dom.Document)$func_parseXML( com.ibm.javart.operations.Assign.run( ezeProgram, new com.ibm.javart.StringItem( "xml", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), xml ) ));
			// ruiDeploy Node;
			org.w3c.dom.Node ruiDeploy = null;
			// ruiDeploy = doc.getChildNodes().item(0);
			ruiDeploy = ((org.w3c.dom.Node)doc.getChildNodes().item( (short)0 ));
			// list NodeList;
			org.w3c.dom.NodeList list = null;
			// list = ruiDeploy.getChildNodes();
			list = ((org.w3c.dom.NodeList)ruiDeploy.getChildNodes());
			// debug("initialize result");
			$func_debug( com.ibm.javart.util.ItemFactory.createString( ezeProgram, "s", false, "initialize result" ) );
			// result.imports._import = [];
			result.imports._005fimport.update( new com.ibm.javart.ref.StringArrayRef( "eze$Temp17", new com.ibm.javart.arrays.StringArray( "eze$Temp17", ezeProgram, 0, 10, Integer.MAX_VALUE, com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING_ARRAY ), com.ibm.javart.Constants.SIGNATURE_STRING_ARRAY ).value() );
			// result.includes.include = [];
			result.includes.include.update( new com.ibm.javart.ref.StringArrayRef( "eze$Temp19", new com.ibm.javart.arrays.StringArray( "eze$Temp19", ezeProgram, 0, 10, Integer.MAX_VALUE, com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING_ARRAY ), com.ibm.javart.Constants.SIGNATURE_STRING_ARRAY ).value() );
			// result.propertyFiles.propertyFile = [];
			result.propertyFiles.propertyFile.update( new com.ibm.javart.ref.StringArrayRef( "eze$Temp21", new com.ibm.javart.arrays.StringArray( "eze$Temp21", ezeProgram, 0, 10, Integer.MAX_VALUE, com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING_ARRAY ), com.ibm.javart.Constants.SIGNATURE_STRING_ARRAY ).value() );
			// result.runtimePropertyFiles.runtimePropertyFile = [];
			result.runtimePropertyFiles.runtimePropertyFile.update( new com.ibm.javart.ref.StringArrayRef( "eze$Temp23", new com.ibm.javart.arrays.StringArray( "eze$Temp23", ezeProgram, 0, 10, Integer.MAX_VALUE, com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING_ARRAY ), com.ibm.javart.Constants.SIGNATURE_STRING_ARRAY ).value() );
			// result.referencedHandlers.referencedHandler = [];
			result.referencedHandlers.referencedHandler.update( new com.ibm.javart.ref.StringArrayRef( "eze$Temp25", new com.ibm.javart.arrays.StringArray( "eze$Temp25", ezeProgram, 0, 10, Integer.MAX_VALUE, com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING_ARRAY ), com.ibm.javart.Constants.SIGNATURE_STRING_ARRAY ).value() );
			// for ( i From 0 To list.getLength() - 1 Increment 1 )
			{
				com.ibm.javart.IntValue i = new com.ibm.javart.IntItem( "i", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_INT );
				i.setValue( (short)0 );
				for ( ; (com.ibm.javart.operations.Compare.run( ezeProgram, i, com.ibm.javart.operations.Subtract.run( ezeProgram, com.ibm.javart.operations.Java2Egl.dim0int( ezeProgram, list.getLength() ), (short)1 ), 1 ) <= 0); com.ibm.javart.operations.Increment.run( ezeProgram, i ) )
				{
					// node Node;
					org.w3c.dom.Node node = null;
					// node = list.item(i);
					node = ((org.w3c.dom.Node)list.item( i.getValue() ));
					// name STRING;
					java.lang.String name = "";
					// name = node.getNodeName();
					name = node.getNodeName();
					// debug("Inspect doc child " + i + " " + name);
					$func_debug( com.ibm.javart.operations.Assign.run( ezeProgram, new com.ibm.javart.StringItem( "s", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), ((("Inspect doc child " + com.ibm.javart.operations.ConcatValue.run( ezeProgram, i )) + " ") + name) ) );
					// nodeList NodeList;
					org.w3c.dom.NodeList nodeList = null;
					// nodeList = node.getChildNodes();
					nodeList = ((org.w3c.dom.NodeList)node.getChildNodes());
					// Case ( name )
					// IF ( name == "imports" )
					if ( (name.compareTo( "imports" ) == 0) )
					{
						// for ( j From 0 To nodeList.getLength() - 1 Increment 1 )
						{
							com.ibm.javart.IntValue j = new com.ibm.javart.IntItem( "j", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_INT );
							j.setValue( (short)0 );
							for ( ; (com.ibm.javart.operations.Compare.run( ezeProgram, j, com.ibm.javart.operations.Subtract.run( ezeProgram, com.ibm.javart.operations.Java2Egl.dim0int( ezeProgram, nodeList.getLength() ), (short)1 ), 1 ) <= 0); com.ibm.javart.operations.Increment.run( ezeProgram, j ) )
							{
								// IF ( nodeList.item(j).getNodeName() == "import" )
								if ( (nodeList.item( j.getValue() ).getNodeName().compareTo( "import" ) == 0) )
								{
									// value STRING;
									java.lang.String value = "";
									// value = nodeList.item(j).getTextContent();
									value = nodeList.item( j.getValue() ).getTextContent();
									// debug("   add import " + j + " " + value);
									$func_debug( com.ibm.javart.operations.Assign.run( ezeProgram, new com.ibm.javart.StringItem( "s", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), ((("   add import " + com.ibm.javart.operations.ConcatValue.run( ezeProgram, j )) + " ") + value) ) );
									// result.imports._import = result.imports._import :: value;
									result.imports._005fimport.update( com.ibm.javart.operations.ArrayConcat.run( ezeProgram, new com.ibm.javart.ref.StringArrayRef( "eze$Temp27", new com.ibm.javart.arrays.StringArray( "eze$Temp27", ezeProgram, 0, 10, Integer.MAX_VALUE, com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING_ARRAY ), com.ibm.javart.Constants.SIGNATURE_STRING_ARRAY ), null, result.imports._005fimport.value() ).value().appendElement( ezeProgram, com.ibm.javart.operations.Assign.run( ezeProgram, result.imports._005fimport.value().makeNewElement( ezeProgram ), value ) ) );
								}
							}
						}
					}
					else
					{
						// debug("UNHANDLED NODE: " + name + "=" + node.getTextContent());
						$func_debug( com.ibm.javart.operations.Assign.run( ezeProgram, new com.ibm.javart.StringItem( "s", com.ibm.javart.Value.SQL_NOT_NULLABLE, com.ibm.javart.Constants.SIGNATURE_STRING ), ((("UNHANDLED NODE: " + name) + "=") + node.getTextContent()) ) );
					}
				}
			}
		}
		catch ( java.lang.Exception eze$Temp28 )
		{
			egl.core.AnyException_Ref e = com.ibm.javart.util.JavartUtil.anyExceptionHandler( ezeProgram, eze$Temp28, "e" );
			// SysLib.writeStdout("Could not convert XML due to " + e.message + ". XML=" + xml);
			System.out.println( ((("Could not convert XML due to " + e.checkedValue( ezeProgram ).message.getValue()) + ". XML=") + xml.getValue()) );
		}
		// RETURN
		_funcPop();
		return;
	}
	
	public org.w3c.dom.Document $func_parseXML( com.ibm.javart.StringValue xml ) throws java.lang.Exception
	{
		_funcPush( "parseXML" );
		org.w3c.dom.Document $result = null;
		
		// domFactory DocumentBuilderFactory;
		javax.xml.parsers.DocumentBuilderFactory domFactory = null;
		// domFactory = DocumentBuilderFactory.newInstance();
		domFactory = ((javax.xml.parsers.DocumentBuilderFactory)javax.xml.parsers.DocumentBuilderFactory.newInstance());
		// domFactory.setNamespaceAware(true);
		domFactory.setNamespaceAware( true );
		// builder DocumentBuilder;
		javax.xml.parsers.DocumentBuilder builder = null;
		// builder = domFactory.newDocumentBuilder();
		builder = ((javax.xml.parsers.DocumentBuilder)domFactory.newDocumentBuilder());
		// file File;
		java.io.File file = null;
		// file = file.createTempFile("egl", ".xml");
		file = ((java.io.File)java.io.File.createTempFile( "egl", ".xml" ));
		// writer FileWriter;
		java.io.FileWriter writer = null;
		// writer = new FileWriter(file);
		writer = ((java.io.FileWriter)new java.io.FileWriter( ((java.io.File)file)));
		// writer.write(xml, 0, StrLib.characterLen(xml));
		writer.write( xml.getValue(), (short)0, ezeProgram.egl__core__StrLib.characterLen( ezeProgram, xml.getValue() ) );
		// writer._close();
		writer.close();
		// doc Document;
		org.w3c.dom.Document doc = null;
		// doc = builder.parse(file.toString());
		doc = ((org.w3c.dom.Document)builder.parse( file.toString() ));
		// file._delete();
		file.delete();
		// RETURN doc
		// $result = doc;
		$result = ((org.w3c.dom.Document)doc);
		_funcPop();
		return $result;
	}
	
	public void $func_debug( com.ibm.javart.StringValue s ) throws java.lang.Exception
	{
		_funcPush( "debug" );
		
		// RETURN
		_funcPop();
		return;
	}
	
	public void $initXMLLib_Lib( XMLLib_Lib ezeProgram ) throws java.lang.Exception
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
//	workDBType = AUX
//	wrapperCompatibility = CURRENT
//	wrapperPackageName = 
