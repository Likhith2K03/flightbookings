sap.ui.define([
    "sap/ui/core/mvc/Controller"
  ], (BaseController) => {
    "use strict";
  
    return BaseController.extend("app.flightbookings.controller.BaseController", {
        onInit() {
        },

        getRouter: function() {
          return this.getOwnerComponent().getRouter();
        },

        getModel: function() {
          return this.getOwnerComponent().getModel();
        }
    });
  });