sap.ui.define([
    "./BaseController",
    "sap/ui/model/type/Date"
], (BaseController, DateType) => {
    "use strict";

    return BaseController.extend("app.flightbookings.controller.BookingsView", {
        onInit() {
            this._getData();
        },

        onCreatePage() {
            this.getRouter().navTo("RouteCreateView");
        },

        
        formatDate: function (value) {
            if (value) {
                var oDateFormat = new DateType({ pattern: "dd/MM/yyyy" });
                return oDateFormat.formatValue(value, "string");
            }
            return value;
        },
    

        _getData: function () {
            let entitySet = `/flightbookingSet`;
            let oModel = this.getOwnerComponent().getModel();
            oModel.read(entitySet, {
                success: (oData, response) => {
                    var oModelData = new sap.ui.model.json.JSONModel(oData.results);
                    this.getView().getParent().setModel(oModelData, "FlightModel")
                }
            })
        }
    });
});