const deedpool = {
  nombre: "wade",
  apellido: "winston",
  poder: "regeneracion",
  
  getNombre() {
    return `${this.nombre} ${this.apellido} ${this.poder}`;
  }
}


console.log(deedpool.getNombre());
