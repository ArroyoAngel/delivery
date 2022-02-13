export class Product {
    demo: Array<any> = [
        { name: "Saice", type: "food", price: 15.0, availabel: false, detail: "Detalle Saice", image: "" },
        { name: "Pepsi", type: "food", price: 10.0, availabel: true, detail: "Detalle Saice", image: "" },
        { name: "Huminta", type: "food", price: 8.0, availabel: true, detail: "Detalle Saice", image: "" },
        { name: "Locro", type: "food", price: 10.0, availabel: true, detail: "Detalle Saice", image: "" },
        { name: "Majadito", type: "food", price: 15.0, availabel: true, detail: "Detalle Saice", image: "" },
        { name: "Sopa de maní", type: "food", price: 10.0, availabel: false, detail: "Detalle Saice", image: "" },
        { name: "Picante de pollo", type: "food", price: 20.0, availabel: true, detail: "Detalle Saice", image: "" },
        { name: "Coca-Cola", type: "food", price: 10.0, availabel: true, detail: "Detalle Saice", image: "" },
        { name: "Pelón", type: "food", price: 5.0, availabel: false, detail: "Detalle Saice", image: "" },
        { name: "Gelatina", type: "food", price: 5.0, availabel: true, detail: "Detalle Saice", image: "" },
    ]
    getInitialValues(){
        console.log(this)
        return this.demo
    }
}

export default new Product()