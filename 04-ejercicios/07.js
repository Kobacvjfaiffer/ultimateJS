/**
 * crear un algotimo que devuelva la cantidad del producto mas impuestos
 */

function calcularPrecioConImpuestos(precioBase, porcentajeImpuestos) {
    // Validar que los valores sean números positivos
    if (typeof precioBase !== 'number' || typeof porcentajeImpuestos !== 'number' || precioBase < 0 || porcentajeImpuestos < 0) {
        return "Datos inválidos. Ingrese números positivos.";
    }

    // Calcular el monto de impuestos
    const impuestos = precioBase * (porcentajeImpuestos / 100);

    // Calcular el precio final (precio base + impuestos)
    const precioFinal = precioBase + impuestos;

    // Redondear a 2 decimales (opcional, para manejar centavos)
    return parseFloat(precioFinal.toFixed(2));
}

// Ejemplo de uso:
const precioBase = 19.90;    // Precio sin impuestos
const impuestos = 15;      // 15% de impuestos
const totalAPagar = calcularPrecioConImpuestos(precioBase, impuestos);

console.log(`Precio final: $${totalAPagar}`); // Salida: "Precio final: $116.00"