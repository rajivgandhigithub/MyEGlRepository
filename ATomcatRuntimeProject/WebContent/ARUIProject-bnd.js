egl.eze$$BindFile_aruiproject = function() {
	var bindFile = new egl.egl.jsrt.BindFile("aruiproject");
	var binding;
	binding = new egl.egl.jsrt.WebBinding(
		/*name        */ "ASOAPService",
		/*interface   */ "services.ASOAPService",
		/*wsdlLocation*/ "wsdl/ASOAPService.wsdl",
		/*wsdlService */ "ASOAPServiceService",
		/*wsdlPort    */ "ASOAPService",
		/*uri         */ "http://localhost:8080/ATomcatRuntimeProject/services/ASOAPService"
	);
	bindFile.bindings.push(binding);
	binding = new egl.egl.jsrt.WebBinding(
		/*name        */ "IASOAPService",
		/*interface   */ "services.IASOAPService",
		/*wsdlLocation*/ "wsdl/ASOAPService.wsdl",
		/*wsdlService */ "ASOAPServiceService",
		/*wsdlPort    */ "ASOAPService",
		/*uri         */ "http://localhost:8080/ATomcatRuntimeProject/services/ASOAPService"
	);
	bindFile.bindings.push(binding);
	binding = new egl.egl.jsrt.RestBinding(
		/*name                   */ "iarestservice",
		/*baseURI                */ "http://localhost:8080/ATomcatRuntimeProject/restservices/ARESTService",
		/*sessionCookieId        */ null
	);
	bindFile.bindings.push(binding);
	binding = new egl.egl.jsrt.RestBinding(
		/*name                   */ "arestservice",
		/*baseURI                */ "http://localhost:8080/ATomcatRuntimeProject/restservices/ARESTService",
		/*sessionCookieId        */ null
	);
	bindFile.bindings.push(binding);
	return bindFile;
}
