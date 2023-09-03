/*
 * Licensed Materials - Property of IBM
 *
 * Copyright IBM Corporation 2008, 2013. All Rights Reserved.
 *
 * U.S. Government Users Restricted Rights - Use, duplication or
 * disclosure restricted by GSA DP Schedule Contract with IBM Corp.
 */
// NLS_ENCODING=UTF-8
// NLS_MESSAGEFORMAT_VAR
//
// Guidelines for defining Rich UI messages:  
// (1) DO NOT change the variable, "egl.eze$$rscBundles["RuiMessages"]"
// (2) The general format of a message is:
//          'MessageId'  :   'Message Text: {n}'
// (3) 'MessageId' (eg: CRRUI2007E) is composed of 4 parts:
//        - the first 5 characters is product identification, must be 'CRRUI'  
//        - the sixth character is a digit which identifies the component:
//                '0' -  Others       ( used to be 'E' )
//                '1' -  Widget       ( used to be 'I' )
//                '2' -  Runtime      ( used to be 'R' )
//                '3' -  Service      ( used to be 'S' )
//        - the 7th to 9th characters identifies message number, eg: '001'
//        - the 10th character identifies the message type:
//                'E' - error message
//                'I' - informational message
//                'W' - warning message
// (5)The message text may contain 1 or more message inserts, 
//         eg: {n},  where n is a 0 based number
// (6)Insert the message in alphabetical and numeric sort order  
//    against the MessageId to avoid conflicts which can be 
//    difficult to track at runtime            
//
egl.eze$$rscBundles["RuiMessages"] =
{
		'CRRUI0001E' : 'The InitalUI[{0}]InitialUI name is empty. The function call cannot be used to initialize the name.',		
		'CRRUI0006E' : 'The {0} RadioGroup group contains an illegal argument.',
					
		'CRRUI1001E' : 'For the {0} variable, {1} cannot be set to {2}',
		'CRRUI1010E' : 'Drag and drop functions are function references, not arrays: {0}',
		'CRRUI1020E' : 'Runtime.asDictionary: can only convert handlers or records to Dictionaries, not {0}',
		'CRRUI1030E' : 'Could not find a definition for {0}.{1}',
		'CRRUI1050E' : 'The {0} variable must include the word \"null\".',
		'CRRUI1051E' : 'The widget cannot be added to the {0} variable.',
		'CRRUI1055E' : 'The {1} child cannot be added to the {2} variable.',		
		'CRRUI1057E' : 'The {0} widget cannot be added to itself.',	
		'CRRUI1058E' : 'The {1} ancestor cannot be added to the {0} variable. {2} is the current ancestor.',
		'CRRUI1060E' : 'Attempt to set the parent for widget \"{0}\" to {1}:{2}; Parent has to be a widget',
		'CRRUI1070E' : 'An {0} exception occurred while processing the call back function.  Use the try...OnException.',
		'CRRUI1071E' : 'No exception handler found for service call. Add an exception handler for service call.',
		'CRRUI1072E' : 'An {0} exception occurred in the error call back function, code with try...OnException',		
		'CRRUI1080E' : 'The widget has no document object model (DOM) element and is not in the document.<br>The current attributes for this widget are:<P>{0}',
		'CRRUI1083E' : 'An error occurred while the {0} browser event was being handled.',
		'CRRUI1150E' : 'An attempt to remove \"null\" from a {0} variable failed.',		
		'CRRUI1151E' : 'An attempt to remove widget that has no document object model (DOM) element from a {0} variable failed.',		
		'CRRUI1155E' : 'The child of {1}type cannot be removed from a {0}: {2} variable.',
		'CRRUI1157E' : 'A widget cannot be remove from itself. The widget type is {0}.',
		'CRRUI1158E' : 'Handler {0} must be loaded by dynamic loader before it can be instantiated.',
			
		'CRRUI2002E' : '{1}<br>An error occurred inside {0}: {2}',
		'CRRUI2004E' : 'The {0} history contains an illegal argument.',
		'CRRUI2005E' : 'A null reference cannot be used.',
		'CRRUI2006E' : '{0}', // The text of this message comes from some other error message.
		'CRRUI2007E' : 'Illegal argument: {0}.',
		'CRRUI2009E' : 'Event cannot be instantiated from a RUI handler.',
		'CRRUI2010E' : 'Deprecated function: {0}.',
		
		'CRRUI2015E' : 'The file {0} for RUIPropertiesLibrary {1} is missing',
		'CRRUI2016E' : 'EGL program is using too much time',
		'CRRUI2017E' : 'The value \"{0}\" of type {1} cannot be converted to type {2}',
		'CRRUI2018E' : 'Overflow when assigning {0} to type {1}',
		'CRRUI2019E' : 'Cannot append element {0} to the array.  The maximum size of the array is {1}',
		'CRRUI2020E' : 'Invalid argument {0} to the array function, setMaxSize()',
		'CRRUI2021E' : 'Cannot retrieve the next token from the string starting at index {0}',
		'CRRUI2022E' : 'Index {0} is out of bounds for this array. Array size is {1}',
		'CRRUI2023E' : 'A null reference was used: {0}',
		'CRRUI2024E' : 'Dynamic access to key \"{0}\" is not valid on an object of type {1}',
		'CRRUI2025E' : 'Dynamic access failed: no such key, \"{0}\"',
		'CRRUI2030E' : 'Invalid argument to XMLLib.convertFromXML. String expected. Received \"{0}\"',
		'CRRUI2031E' : 'An error occurred while parsing XML: {0}',
		'CRRUI2032E' : 'The timestamp pattern {0} is invalid',
		'CRRUI2033E' : 'The value {0} specified for the array function, resize(), is greater than the maximum size of the array, {1}',
		'CRRUI2034E' : 'The type, {0}, for the array element is not valid',
		'CRRUI2035E' : 'The number of dimensions resized is greater than the number of dimensions of the array',
		'CRRUI2036E' : 'Domain error in call to {0}: the argument must be between {1} and {2}',
		'CRRUI2037E' : 'Math error: cannot divide a number by 0',
		'CRRUI2038E' : 'Domain error in call to {0}: the argument must be greater than zero',
		'CRRUI2039E' : 'Domain error in call to {0}: the argument must be greater than or equal to zero',
		'CRRUI2040E' : 'Domain error in call to {0}: the exponent for a base of zero must be greater than zero',
		'CRRUI2041E' : 'Domain error in call to {0}: the exponent for a negative base must be an integer',
		'CRRUI2050E' : 'Math error: abs() - {0} arguments given. Expected 0 or 1',
		'CRRUI2051E' : 'Math error: add() - {0} arguments given. Expected 1 or 2',
		'CRRUI2052E' : 'Math error: compareTo() - {0} arguments given. Expected 1 or 2',
		'CRRUI2053E' : 'Math error: divide() - Negative scale, {0}, is not valid',
		'CRRUI2054E' : 'Math error: divide() - {0} arguments given. Expected between 1 and 3',
		'CRRUI2055E' : 'Math error: divideInteger() - {0} arguments given. Expected 1 or 2',
		'CRRUI2056E' : 'Math error: max() - {0} arguments given. Expected 1 or 2',
		'CRRUI2057E' : 'Math error: min() - {0} arguments given. Expected 1 or 2',
		'CRRUI2058E' : 'Math error: multiply() - {0} arguments given. Expected 1 or 2',
		'CRRUI2059E' : 'Math error: negate() - {0} arguments given. Expected 0 or 1',
		'CRRUI2060E' : 'Math error: plus() - {0} arguments given. Expected 0 or 1',
		'CRRUI2061E' : 'Math error: pow() - {0} arguments given. Expected 1 or 2',
		'CRRUI2062E' : 'Math error: pow() - Negative power, {0}',
		'CRRUI2063E' : 'Math error: pow() - Too many digits, {0}',
		'CRRUI2064E' : 'Math error: remainder() - {0} arguments given. Expected 1 or 2',
		'CRRUI2065E' : 'Math error: subtract() - {0} arguments given. Expected 1 or 2',
		'CRRUI2066E' : 'Math error: format() - {0} arguments given. Expected 2 or 6',
		'CRRUI2067E' : 'Math error: format() - exponent overflow, {0}',
		'CRRUI2068E' : 'Math error: intValueExact() - Decimal part non-zero, {0}',
		'CRRUI2069E' : 'Math error: intValueExact() - Conversion overflow, {0}',
		'CRRUI2070E' : 'Math error: setScale() - {0} arguments given. Expected 1 or 2',
		'CRRUI2071E' : 'Math error: setScale() - negative scale, {0}',
		'CRRUI2072E' : 'Math error: intCheck() - conversion error, {0}',
		'CRRUI2073E' : 'Math error: dodivide() - integer overflow',
		'CRRUI2074E' : 'Math error: Could not convert string \"{1}\" to a number',
		'CRRUI2075E' : 'Math error: Argument number {0} to method {1} is not valid.  The argument provided is {2}',
		'CRRUI2076E' : 'Math error: Too many digits - {0}',
		'CRRUI2077E' : 'Math error: round() - {0} arguments given. Expected 1 or 2',
		'CRRUI2078E' : 'Math error: round() - Rounding necessary',
		'CRRUI2079E' : 'Math error: round() - Bad round value, {0}',
		'CRRUI2080E' : 'Math error: round() - Exponent, {0}, overflows',
		'CRRUI2081E' : 'Math error: finish() - Exponent, {0}, overflows',
		'CRRUI2082E' : 'Internal Error: While calling constructor for {0}',
		'CRRUI2083E' : 'Internal Error: A problem occurred while defining class {0}',
		'CRRUI2084E' : 'Internal Error: While defining widget {0}.{1} as a subclass of egl.ui.rui.RUIPropertiesLibrary',
		'CRRUI2085E' : 'Internal Error: While defining widget {0}.{1} as a subclass of {2}.{3}',
		'CRRUI2086E' : 'Internal Error: A problem occurred while defining RUI Handler {0}',
		'CRRUI2087E' : 'Internal Error: A problem occurred while defining RUI Widget {0}',
		'CRRUI2088E' : 'This browser is not supported by EGL Rich UI',
		'CRRUI2089E' : 'Could not convert from JSON format: "{0}", due to {1}',
		'CRRUI2090E' : 'Could not call service: {0}',
		'CRRUI2091E' : 'Cannot send event to the Eclipse IDE: {0}',
		'CRRUI2092E' : 'Internal Error: A problem happened while handling an IDE event {0}',
		'CRRUI2093E' : 'Internal Error: Could not instrument function {0}',
		'CRRUI2094E' : 'Here are the EGL function calls leading to this error:',
		'CRRUI2095E' : 'Could not find the EGL function calls leading to this error',
		'CRRUI2098E' : 'Error happened during Drag and Drop support: {0}',
		'CRRUI2099E' : 'In Rich UI, the EGL "set" operation is not supported on type {0}',
		'CRRUI2100E' : 'Invalid argument to RUILib.convertFromXML. String expected. Received object of type {0}',
		'CRRUI2101E' : 'Cannot locate indexOf "{1}" inside "{0}" due to {2}',
		'CRRUI2102E' : 'Could not sort Array',
		'CRRUI2103E' : 'Illegal access to "{0}" in object of type "{1}" due to {2}',
		'CRRUI2104E' : 'Could not parse JSON string "{0}"',
		'CRRUI2105E' : 'JSON parsing error occurred when trying to set {0}. Field does not exist in the expected place in the JSON string.',
		'CRRUI2106E' : 'An attempt to set {0} to null failed while parsing JSON because it was not declared as a nullable field.',
		'CRRUI2107E' : 'Service library JSON conversion functions operate on a Record or Dictionary. {0} is not a supported type.',
		'CRRUI2108E' : 'XML library XML conversion functions operate on a Record. {0} is not a supported type.',
		
		'CRRUI2111E' : 'MathContext() error: The number of arguments specified, {0}, is not valid; expected 1 to 4.',
		'CRRUI2112E' : 'MathContext() error: The number of digits specified, {0}, is too small.',
		'CRRUI2113E' : 'MathContext() error: The number of digits specified, {0}, is too large.',
		'CRRUI2114E' : 'MathContext() error: The form value specified, {0}, is not valid.',
		'CRRUI2115E' : 'MathContext() error: The rounding mode value specified, {0}, is not valid.',
		
	    'CRRUI2700E' : 'No input was received for required field - enter again.',
		'CRRUI2702E' : 'Data type error in input - enter again.',
		'CRRUI2703E' : 'Number of allowable significant digits exceeded - enter again.',
		'CRRUI2704E' : 'The input is not within the defined range of {0} to {1} - enter again.',
		'CRRUI2705E' : 'Input minimum length error - enter again.',
		'CRRUI2707E' : 'Modulus check error on input - enter again.',
		'CRRUI2708E' : 'The input is not valid for defined date or time format {0}.',
		'CRRUI2710E' : 'Input not valid for boolean field.',
		'CRRUI2712E' : 'Hexadecimal data is not valid.',
		'CRRUI2713E' : 'Value entered is invalid as it does not match the pattern that is set.',		
		'CRRUI2716E' : 'The input is not in the defined list of valid values - enter again.',
		'CRRUI2717E' : 'The specified date and time format of {0} is not valid.',	
		'CRRUI2719E' : 'Error parsing input value.',

		'CRRUI3650E' : 'Cannot find deployment descriptor file : \'{0}\'',
		'CRRUI3651E' : 'Service binding key : \'{0}\' does not exist in the deployment descriptor \'{1}\'',
		'CRRUI3652E' : 'Wrong service binding type \'{0}\', expecting binding type \'{1}\'',
		'CRRUI3653E' : 'An error occurred while trying to invoke rest service on \'{0}\'',
		'CRRUI3654E' : 'An error occurred while building request object: \'{0}\'',
		'CRRUI3655E' : 'An error occurred while processing response object: \'{0}\'',
		'CRRUI3656E' : '\'formdata\' is not supported as response format',
		'CRRUI3657E' : 'Cannot find proxy at \'{0}\' to make service calls',
		'CRRUI3658E' : 'An error occurred on proxy at \'{0}\' while trying to invoke service on \'{1}\'',
		'CRRUI3659E' : 'Json response parse resulted null, original response is: \'{0}\'',
		'CRRUI3660E' : 'Exception occurred, could not handle response for \'{0}\', reason: \'{1}\'',
		'CRRUI3661E' : 'Service binding information is missing for \'{0}\' while trying to invoke service function \'{1}\'.'
};
