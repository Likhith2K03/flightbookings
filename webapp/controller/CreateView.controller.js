sap.ui.define([
    "./BaseController",
    "sap/ui/model/type/Date"
], (BaseController, DateType) => {
    "use strict";

    return BaseController.extend("app.flightbookings.controller.BookingsView", {
        onInit() {
            // this._getData();
        },

        onBookingsPage() {
            this.getRouter().navTo("RouteBookingsView");
        },

        onCreate: function() {
            // Prerequisites: Build Payload Object
            // Get Input Objects
            let oCarrid    = this.getView.byId("idCarrid");
            let oConnid    = this.getView.byId("idConnid");
            let oBookid    = this.getView.byId("idBookid");
            let oFldate    = this.getView.byId("idFldate");
            let oCustomid  = this.getView.byId("idCustomid");
            let oClass     = this.getView.byId("idClass");
            let oLoccuram  = this.getView.byId("idLoccuram");
            let oOrderDate = this.getView.byId("idOrderDate");
            let oCancelled = this.getView.byId("idCancelled");

            // Get Values
            let sCarrid    = oCarrid.getValue();
            let sConnid    = oConnid.getValue();
            let sBookid    = oBookid.getValue();
            let sFldate    = oFldate.getValue();
            let sCustomid  = oCustomid.getValue();
            let sClass     = oClass.getValue();
            let sLoccuram  = oLoccuram.getValue();
            let sOrderDate = oOrderDate.getValue();
            let sCancelled = oCancelled.getValue();

            //Create Payload Object
            let payload = {
                Carrid    : sCarrid,
                Connid    : sConnid,
                Bookid    : sBookid,
                Fldate    : sFldate,
                Customid  : sCustomid,
                Class     : sClass,
                Loccuram  : sLoccuram,
                OrderDate : sOrderDate,
                Cancelled : sCancelled
            }

            // Step1: Get the Model
            let oModel = this.getModel();

            // Step2: Get the Entity
            let entitySet = `/flightbookingSet`

            // Step3: Call the method (EntitySet, payload, callback func.(success, error))
            oModel.create(entitySet, payload, {
                success: (response) => {
                    MessageBox.success("Record Inserted", {
                        onClose: () => this.getRouter().navTo("RouteBookingsView")
                    });
                },
                error: (error) => {
                    MessageBox.error("Failed to insert the record.");
                }
            })
        }
        
    });
});