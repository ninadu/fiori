/*global QUnit*/

sap.ui.define([
	"test1/controller/zFiori.controller"
], function (Controller) {
	"use strict";

	QUnit.module("zFiori Controller");

	QUnit.test("I should test the zFiori controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
