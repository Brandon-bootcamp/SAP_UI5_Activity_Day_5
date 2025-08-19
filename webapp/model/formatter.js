sap.ui.define([
    "sap/m/library",
    "sap/ui/model/type/Currency"
], function (mobileLibrary, Currency) {
    "use strict";

    return {
        /**
         * Generates a mailto link using user ID and i18n strings.
         * Opens default email client with subject and body.
         * @param {string} sEid - Email prefix or user ID
         * @param {string} sDomain - Email domain (e.g. @company.com)
         * @param {string} sSubject - Email subject
         * @param {string} sBody - Email body
         * @returns {string} - mailto link
         */
        formatMail: function (sEid, sDomain, sSubject, sBody) {
            return mobileLibrary.URLHelper.normalizeEmail(
                sEid + sDomain,
                sSubject + " " + sEid,
                sBody
            );
        },

        /**
         * Calculates and formats stock value as currency.
         * @param {number} fUnitPrice - Price per unit
         * @param {number} iStockLevel - Units in stock
         * @param {string} sCurrCode - Currency code (e.g. USD, GBP)
         * @returns {string} - Formatted currency string
         */
        formatStockValue: function (fUnitPrice, iStockLevel, sCurrCode) {
            const oCurrency = new Currency();
            const fTotal = fUnitPrice * iStockLevel;
            return oCurrency.formatValue([fTotal, sCurrCode], "string");
        }
    };
});