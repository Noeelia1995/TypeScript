export class email {
    private _Tipo: string;
    private _Direccion: string;
  
    constructor(tipo: string, direccion: string ) {
      this._Tipo = tipo;
      this._Direccion = direccion;
    }
  
    get direccion() {
      return this._Direccion;
    }
  
    get tipo() {
      return this._Tipo;
    }
  
    set direccion(direccion: string) {
      this._Direccion = direccion;
    }
  
    set tipo(tipo: string) {
      this._Tipo = tipo;
    }
  
  }