import { persona } from'./persona'
import { Direccion } from'./Direccion'
import { email } from'./email'
import { Telefono } from './Telefono'

const DomicilioLaura = new Direccion(
  "Calle Sant Joan",
  10,
  8,
  "F",
  78100,
  "Mollet del valles",
  "Barcelona"
)


const EmailLaura = new email(
  "Privado",
  "Laura@gmail.com"
)

const TelefonoMovilLaura = new Telefono(
  "Movil",
  656322598
)

const DatosLaura = new persona
( 
  'Laura',
   'Ortega Roura',
  32,
  '48549134S',
  new Date (1995,9,30),
  'Morado',
  'Mujer',
  [DomicilioLaura],
  [EmailLaura],
  [TelefonoMovilLaura],
  "Vive con los padres"
);

const DomicilioSara = new Direccion(
  "Calle Sant Joan",
  29,
  10,
  "S",
  78100,
  "Mollet del Valles",
  "Barcelona"
)

const emailSara = new email(
  "Privado",
  "Sara@hotmail.com")

const TelefonoSara = new Telefono(
  "Movil",
  9548978945
)


const DatosSara = new persona (
  'Sara',
  'Alvarez Roldan',
  20,
  '65523478D',
  new Date(2000, 10, 30),
  'Azul',
  'Mujer',
  [DomicilioSara,],
  [emailSara,],
  [TelefonoSara,],
  "Esta Independizada"
);

const DomicilioFran = new Direccion(
  "Barrio Sol",
  6,
  14,
  "D",
  78100,
  "Mollet del valles",
  "Barcelona"
)


const EmailFran = new email(
  "personal",
  "Fran@gmail.com"
)


const TelefonoFran = new Telefono(
  "movil",
  651522598
)

const datosFran  = new persona(
  'Fran',
  'Fernandez Ortega',
  28,
  '488763219D',
  new Date(1994, 8, 6),
  'Amarillo',
  'Hombre',
  [DomicilioFran],
  [EmailFran],
  [TelefonoFran],
  "Esta desempleado"
);

console.log("Contactos sin cambio:");
console.log(DatosLaura);
console.log(DatosSara);
console.log(datosFran);

const Agenda: Array<persona> = new Array(DatosLaura, DatosSara, datosFran);

const BuscarDNI: string = "48549134S";

const CambioDNI=Agenda.find(Persona => Persona.DNI === BuscarDNI)

const CambioDomicilio = new Direccion(
  'Calle Gaudi',
   5,
    15,
  '65523478D',
   78100,
  'Mollet del valles',
  'Barcelona'
)

const CambioEmail = new email(
  "Privado",
  "Sara1@gmail.com"
)

const CambioTelefono = new Telefono(
  "Movil",
 614499872
)

"const Cambiopersona.agregarCambioDireccion (CambioDomicilio)"
"const Cambiopersona.agregarCambioemail (CambioEmail)"
"const Cambiopersona.agregarCambioTelefono(CambioTelefono)"

console.log("Contactos despues del cambio:");
console.log(DatosSara);
console.log(DatosLaura);
console.log(datosFran);