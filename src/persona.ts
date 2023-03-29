import { Direccion } from './Direccion';
import { email } from './email';
import { Telefono } from './Telefono';


export class persona {
  private _Nombre: string;
  private _Apellidos: string;
  private _Edad: number;
  private _DNI: string;
  private _Cumpleaños: Date;
  private _ColorFavorito: string;
  private _Sexo: string;
  private _Direccion: Array<Direccion>;
  private _Email: Array<email>;
  private _Telefono: Array<Telefono>;
  private _Notas: string

  constructor (Nombre: string, Apellidos: string, Edad: number, DNI: string, Cumpleaños: Date, ColorFavorito: string, Sexo: string, Direccion: Array<Direccion>, Email: Array<email>, Telefono: Array<Telefono>, Notas:string) {
    this._Nombre = Nombre;
    this._Apellidos = Apellidos;
    this._Edad = Edad;
    this._DNI = DNI;
    this._Cumpleaños = Cumpleaños;
    this._ColorFavorito = ColorFavorito;
    this._Sexo = Sexo;
    this._Direccion = Direccion;
    this._Email = Email;
    this._Telefono = Telefono;
    this._Notas = Notas;
  }

  get Nombre() {
    return this._Nombre;
  }

  get Apellidos() {
    return this._Apellidos;
  }

  get Edad() {
    return this._Edad;
  }

  get DNI() {
    return this._DNI;
  }

  get Cumpleaños() {
    return this._Cumpleaños;
  }

  get ColorFavorito() {
    return this._ColorFavorito;
  }

  get Sexo() {
    return this._Sexo;
  }

  get Direccion() {
    return this._Direccion;
  }

  get Email() {
    return this._Email;
  }

  get Telefono() {
    return this._Telefono;
  }

  get Notas() {
    return this._Notas;
  }

  set Nombre(Nombre: string) {
    this._Nombre = Nombre;
  }

  set Apellido(Apellido: string) {
    this.Apellido = Apellido;
  }

  set Edad(Edad: number) {
    this._Edad = Edad;
  }

  set DNI(DNI: string) {
    this._DNI = DNI;
  }

  set Cumpleaños(Cumpleaños: Date) {
    this._Cumpleaños = Cumpleaños;
  }

  set ColorFavorito(ColorFavorito: string) {
    this._ColorFavorito = ColorFavorito;
  }

  set Sexo(Sexo: string) {
    this._Sexo = Sexo;
  }

  set Direccion(Direccion: Array<Direccion>) {
    this._Direccion = Direccion;
  }

  set Email(Email: Array<email>) {
    this._Email = Email;
  }

  set Telefono(Telefono: Array<Telefono>) {
    this._Telefono = Telefono;
  }

  set notas(notas: string) {
    this._Notas = notas;
  }

  agregarNuevaDireccion(direccion:Direccion) {
    this._Direccion.push(direccion)
  }

  agregarNuevoTelefono(telefono:Telefono) {
    this._Telefono.push(telefono)
  }

  agregarNuevoMail(mail:email) {
    this._Email.push(mail)
  }
}