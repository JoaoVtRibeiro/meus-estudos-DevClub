/* 
    1. Faça um novo array utilizando "map", os valores de true e false de cada item "vip" do objeto
    devem definir se o cliente irá para sector: "black" (true) e sector: "green" (false).
*/

const list = [
    {name:"Rodolfo", vip: true},
    {name:"Maria", vip: false},
    {name:"João", vip: true},
    {name:"Bruno", vip: true},
    {name:"Carla", vip: false},
    {name:"Ana", vip: true},
    {name:"Julia", vip: false}
]

const sectorList = list.map(client => {
    return {
        name: client.name, 
        vip: client.vip, 
        sector: client.vip ? "Black" : "Green"}
})

console.log(sectorList)