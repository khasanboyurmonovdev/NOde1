/*function KhASANBOY ( a, b) {
    return a * b;
}
const c = KhASANBOY (15, 25)
*/
// console.log( 'result:', c);
  const bread = { 
    name: 'PATIR',
    price: 30,
    weight: '50kg',
    type: 'middle size',
    introduce() { console.log( `I would like to buy ${this.name} that weighs ${this.weight} 
        for  my all money at ${this.price} because its size is ${this.type} `);},

    sotamiz() { console.log(`${this.name}ning narxi yozdan boshlab ${this.price}`);}
  }
  bread.introduce();
  bread.sotamiz();
