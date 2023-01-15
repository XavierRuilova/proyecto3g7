//Guadalajara lat: 20.665261 lon: -103.394207
//Colombia lat: 4.570868 lon: -74.297333
// const funciones = require('./functions');
import {clima, global, climaCifras, enviarDatos} from "./functions.js"


clima(20.665261, -103.394207, 'Guadalajara', 'myChart');
clima(4.570868, -74.297333, 'Colombia', 'myChartDos');
climaCifras(4.570868, -74.297333, 'Dos');
climaCifras(20.665261, -103.394207, '');
