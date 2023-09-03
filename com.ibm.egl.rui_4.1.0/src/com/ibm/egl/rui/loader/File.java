/*
 * Licensed Materials - Property of IBM
 *
 * Copyright IBM Corporation 2008, 2011. All Rights Reserved.
 *
 * U.S. Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA DP Schedule Contract with IBM Corp.
 */
package com.ibm.egl.rui.loader;

import java.io.BufferedInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.URL;

public class File {

	private String project;
	private String name;
	private int port;
	private static String IMPORTNODE = "<import>";
	
	public File(String project, String name, int port) {
		this.project = project;
		this.name = name;
		this.port = port;
	}
	
	public String getURL() {
		return "http://localhost:" + port + "/" + project + "/"+name;
	}
	
	public String getContents() {
		InputStream is = null;
		try {
			is = new BufferedInputStream(new URL(getURL()).openStream());
		    StringBuilder builder = new StringBuilder();
            int byteRead;
            while ((byteRead = is.read()) != -1)
                builder.append((char) byteRead);
            return builder.toString();
		}
		catch (Exception e) {			
			throw new IllegalArgumentException(getURL());
		}finally{
			try {
				if(null != is){
					is.close();	
				}
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}
	
	public String getContentsForImport(){
		InputStream is = null;
		try {
			is = new BufferedInputStream(new URL(getURL()).openStream());
		    StringBuilder builder = new StringBuilder();
            int byteRead;
            while ((byteRead = is.read()) != -1)
                builder.append((char) byteRead);
            String contents = builder.toString();
            if(contents.indexOf(IMPORTNODE) > 0){
            	return(contents);
            }
            return "";
		}
		catch(Exception ioe){
			throw new IllegalArgumentException(getURL());
		}finally{
			if(null != is){
				try {
					is.close();
				} catch (IOException e) {
					e.printStackTrace();
				}	
			}
		}
	}
}
