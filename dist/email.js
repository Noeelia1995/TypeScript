"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.email = void 0;
var email = /** @class */ (function () {
    function email(tipo, direccion) {
        this._Tipo = tipo;
        this._Direccion = direccion;
    }
    Object.defineProperty(email.prototype, "direccion", {
        get: function () {
            return this._Direccion;
        },
        set: function (direccion) {
            this._Direccion = direccion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(email.prototype, "tipo", {
        get: function () {
            return this._Tipo;
        },
        set: function (tipo) {
            this._Tipo = tipo;
        },
        enumerable: false,
        configurable: true
    });
    return email;
}());
exports.email = email;
