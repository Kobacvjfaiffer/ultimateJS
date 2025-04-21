/**
 * Nombre: ancho x alto
 * 8k 7680x4320
 * 4k 3840x2160
 * wqhd 2560x1440
 * fhd 1920x1080
 * hd 1280x720
 */
function nombreResolucion(ancho, alto) {
    
    if (ancho >= 7680 && alto >= 4320) {
        return "8k";
        }
    else if (ancho >= 3840 && alto >= 2160) {
        return "4k";
        }
    else if (ancho >= 2560 && alto >= 1440) {
        return "wqhd";
        }
    else if (ancho >= 1920 && alto >= 1080) {
        return "fhd";
        }
    else if (ancho >= 1280 && alto >= 720) {
        return "hd";
        }
        else{return false;}
    
    }
let nombre = nombreResolucion(3840,2160);
console.log(nombre); // Cambia el valor de la variable para probar diferentes casos