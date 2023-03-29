export class Telefono {
    private _tipo: string;
    private _Numero: number;
  
    constructor(tipo: string, Numero: number ) {
      this._tipo = tipo;
      this._Numero = Numero;
    }
  
    get Numero() {
      return this._Numero;
    }
  
    get tipo() {
      return this._tipo;
    }
  
    set Numero(Numero: number) {
      this._Numero = Numero;
    }
  
    set tipo(tipo: string) {
      this._tipo = tipo;
    }
  }