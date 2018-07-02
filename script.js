/* programa que indica al usuario cual es el total a pagar de su salario*/


let sueldo = prompt('Ingrese su sueldo');
let horas_extra = prompt('Ingrese horas extra');
let categoria = prompt('Ingrese  categoria');
let TP = sueldo+horas_extra;

if(categoria == 4){
    TP = sueldo;
}else if(categoria==1){
    TP = sueldo +(horas_extra)*30;
}else if (categoria == 2){
    TP = sueldo +(horas_extra)*38;
}else if (categoria == 3){
    TP = sueldo +(horas_extra)*50;
} 
console.log(TP);
