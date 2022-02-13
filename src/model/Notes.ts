export class Notes{
    demo: Array<any> = [
        { nota: "Humintas 2x1", detail: "Descripción de la nota", type: "Mensaje", start: "12-12-2021 08:00", end: "13-12-2021 08:00"},
        { nota: "Rellena tu Pepsi", detail: "Descripción de la nota", type: "Alerta", start: "12-12-2021 08:00", end: "13-12-2021 08:00"},
        { nota: "Plato especial", detail: "Descripción de la nota", type: "Oferta", start: "12-12-2021 08:00", end: "13-12-2021 08:00"},
        { nota: "Viernes Gelado", detail: "Descripción de la nota", type: "Oferta", start: "11-12-2021 08:00", end: "13-12-2021 08:00"},
        { nota: "Gran saice", detail: "Descripción de la nota", type: "Oferta", start: "10-12-2021 08:00", end: "13-12-2021 08:00"},
        { nota: "Lunes del completo", detail: "Descripción de la nota", type: "Oferta", start: "17-11-2021 08:00", end: "19-11-2021 08:00"},
        { nota: "Maní maní", detail: "Descripción de la nota", type: "Oferta", start: "17-11-2021 08:00", end: "19-11-2021 08:00"},
        { nota: "Sin servicio", detail: "Descripción de la nota", type: "Alerta", start: "16-11-2021 08:00", end: "21-11-2021 08:00"},
        { nota: "Receso", detail: "Descripción de la nota", type: "Alerta", start: "15-11-2021 08:00", end: "16-11-2021 08:00"},
        { nota: "Cerrado", detail: "Descripción de la nota", type: "Alerta", start: "10-11-2021 08:00", end: "12-11-2021 08:00"},
    ]
    getInitialValues(){
        return this.demo
    }
}

export default new Notes