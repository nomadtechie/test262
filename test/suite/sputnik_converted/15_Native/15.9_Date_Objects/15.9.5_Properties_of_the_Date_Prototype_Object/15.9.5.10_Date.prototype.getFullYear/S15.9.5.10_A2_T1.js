// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.5.10_A2_T1;
 * @section: 15.9.5.10;
 * @assertion: The "length" property of the "getFullYear" is 0;
 * @description: The "length" property of the "getFullYear" is 0;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.9.5.10_A2_T1",

path: "15.9.5.10",

description: "The \"length\" property of the \"getFullYear\" is 0",

test: function testcase() {
   if(Date.prototype.getFullYear.hasOwnProperty("length") !== true){
  $ERROR('#1: The getFullYear has a "length" property');
}

if(Date.prototype.getFullYear.length !== 0){
  $ERROR('#2: The "length" property of the getFullYear is 0');
}


 }
});
