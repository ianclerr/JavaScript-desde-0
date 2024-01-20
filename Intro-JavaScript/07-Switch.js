var diaDeLaSemana = "Martes";

switch (diaDeLaSemana) {
  case "Lunes":
    console.log("Es el primer día de la semana.");
    break;
  case "Martes":
    console.log("Es el segundo día de la semana.");
    break;
  case "Miércoles":
    console.log("Es el Teucer día de la semana.");
    break;
  case "Jueves":
    console.log("Es el cuarto día de la semana.");
    break;
  case "Viernes":
    console.log("¡Por fin es viernes!");
    break;
  case "Sábado":
  case "Domingo":
    console.log("Es fin de semana.");
    break;
  default:
    console.log("Día no válido.");
}
