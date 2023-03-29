"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Telefono = void 0;
var Telefono = /** @class */ (function () {
    function Telefono(tipo, Numero) {
        this._tipo = tipo;
        this._Numero = Numero;
    }
    Object.defineProperty(Telefono.prototype, "Numero", {
        get: function () {
            return this._Numero;
        },
        set: function (Numero) {
            this._Numero = Numero;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Telefono.prototype, "tipo", {
        get: function () {
            return this._tipo;
        },
        set: function (tipo) {
            this._tipo = tipo;
        },
        enumerable: false,
        configurable: true
    });
    return Telefono;
}());
exports.Telefono = Telefono;
