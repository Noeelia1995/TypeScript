export class Direccion {
    private _Calle: string;
    private _Numero: number;
    private _Piso: number | boolean;
    private _Letra: string | boolean;
    private _CodigoPostal: number;
    private _Poblacion: string;
    private _Provincia: string
  
    constructor(Calle: string, Numero: number, Piso: number | boolean, Letra: string | boolean, CodigoPostal: number, Poblacion: string, Provincia: string) {
      this._Calle = Calle;
      this._Numero = Numero;
      this._Piso = Piso;
      this._Letra = Letra;
      this._CodigoPostal = CodigoPostal;
      this._Poblacion = Poblacion;
      this._Provincia = Provincia;
    }
  
    get Calle() {
      return this._Calle;
    }
  
    get Numero() {
      return this._Numero;
    }
  
    get Piso() {
      return this._Piso;
    }
  
    get Letra() {
      return this._Letra;
    }
  
    get CodigoPostal() {
      return this._CodigoPostal;
    }
  
    get Poblacion() {
      return this._Poblacion;
    }
  
    get Provincia() {
      return this._Provincia;
    }
  
    set Calle(Calle: string) {
      this._Calle = Calle;
    }
  
    set Numero(Numero: number) {
      this._Numero = Numero;
    }
  
    set Piso(Piso: number | boolean) {
      this._Piso = Piso;
    }
  
    set Letra(Letra: string | boolean) {
      this._Letra = Letra;
    }
  
    set CodigoPostal(CodigoPostal: number) {
      this._CodigoPostal = CodigoPostal;
    }
  
    set Poblacion(Poblacion: string) {
      this._Poblacion = Poblacion;
    }
  
    set Provincia(Provincia: string) {
      this._Provincia = Provincia;
    }
  }