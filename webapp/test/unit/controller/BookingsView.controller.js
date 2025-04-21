/*global QUnit*/

sap.ui.define([
	"app/flightbookings/controller/BookingsView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("BookingsView Controller");

	QUnit.test("I should test the BookingsView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
