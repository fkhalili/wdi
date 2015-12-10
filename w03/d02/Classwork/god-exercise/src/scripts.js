/* 1) Create a God constructor function.
 *    The function should take two arguments:
 *      1) name (string, e.g. 'Artemis')
 *      2) symbols (Array<string>)
 * 2) Give each god a name property, symbols property, and a greet method.
        The symbols argument should be optional.
        The symbols property should default to an empty array.
 * 3) Create artemis and diana using the God constructor.
 */

'use strict';

/*
 * @constructor
 * @param {string} name
 * @param {Array<string>=} symbols
 */
var God = function God (name, symbols) {
	this.name = name;
	this.greet = function greet() {};
	this.symbols= symbols || [];
};

var artemis = new God ("artemis", ["symbols"]);

var diana = new God ("diana", ["symbols"]);