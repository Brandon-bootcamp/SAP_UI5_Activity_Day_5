sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sapips/training/jsonbinding/model/formatter",
    "sap/m/library"
], function (Controller, JSONModel, formatter) {
    "use strict";

    return Controller.extend("sapips.training.jsonbinding.controller.JSONBinding", {
        formatter: formatter,

        onInit: function () {
            var EmployeeDetails = new JSONModel({
                Eid: "",
                Enabled: true,
                Address: {
                    Street: "Rizal Avenue",
                    City: "Quezon City",
                    Zip: "1100",
                    Country: "Philippines"
                },
                SalesAmount: 250000,
                CurrencyCode: "PHP"

            });
            this.getView().setModel(EmployeeDetails, "EmployeeModel");

            var oProductModel = new JSONModel("/model/ProductsModel.json");
            this.getView().setModel(oProductModel, "ProductsModel")
        },
        ProductsModel: function (oEvent) {
            var oList = oEvent.getSource();
            var oSelectedProduct = oList.getSelectedItem();
            var oBindingContext = oSelectedProduct.getBindingContext("ProductsModel");
            var sPath = oBindingContext.getPath();
            var oPanel = this.byId("form3");
            oPanel.bindElement({
                path: sPath,
                model: "ProductsModel"
            })
        }
    });
});