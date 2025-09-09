import { useMemo } from "react";
import type { Datos } from "../types/types";

const LETRAS_NUMEROS = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 1,
  k: 2,
  l: 3,
  m: 4,
  n: 5,
  ñ: 5,
  o: 6,
  p: 7,
  q: 8,
  r: 9,
  s: 1,
  t: 2,
  u: 3,
  v: 4,
  w: 5,
  x: 6,
  y: 7,
  z: 8,
};

const reducirASoloDigito = (numero: number): number => {
  let suma = numero;
  while (suma > 9) {
    suma = String(suma)
      .split("")
      .reduce((acc, digito) => acc + Number(digito), 0);
  }
  return suma;
};

const obtenerReduccion = (suma: number): number | string => {
  const reduccion = reducirASoloDigito(suma);
  return reduccion === 1 && String(suma).length > 1 ? "1/10" : reduccion;
};

const calcularDatosFecha = (
  fechaStr: string
): {
  suma: number;
  reduccionFecha: number | string;
  reduccionDia: number | string;
  fechaNumeros: number[];
  dia: number | string;
} => {
  const [year, month, day] = fechaStr.split("-");
  const fechaDDMMYYYY = `${day}${month}${year}`;
  const dia = Number(day);
  const fechaNumeros = fechaDDMMYYYY.split("").map(Number);
  const suma = fechaNumeros.reduce((acc, num) => acc + num, 0);

  return {
    suma,
    reduccionFecha: obtenerReduccion(suma),
    reduccionDia: obtenerReduccion(dia),
    fechaNumeros,
    dia,
  };
};

export const useCalculosNumerologicos = (
  nombreCompleto: string,
  fecha: string,
  fechaCompanero?: string
): Datos | null => {
  const datosCalculados = useMemo<Datos | null>(() => {
    if (!nombreCompleto || !fecha) {
      return null;
    }

    // Lógica para la Tabla Equivalencias
    const nombreNormalizado = nombreCompleto.toLowerCase();
    const vocales = "aeiouáéíóú";
    const vocalesEncontradas: (number | null)[] = [];
    const consonantesEncontradas: (number | null)[] = [];
    const numerosNombre: number[] = [];

    for (const char of nombreNormalizado) {
      // Normaliza el carácter para manejar acentos
      const charSinAcento = char
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      // Si la clave existe en el objeto `letrasNumeros`
      if (charSinAcento in LETRAS_NUMEROS) {
        const valor =
          LETRAS_NUMEROS[charSinAcento as keyof typeof LETRAS_NUMEROS];
        numerosNombre.push(valor);
        if (vocales.includes(char)) {
          vocalesEncontradas.push(valor);
          consonantesEncontradas.push(null);
        } else {
          vocalesEncontradas.push(null);
          consonantesEncontradas.push(valor);
        }
      } else {
        // Para espacios, números o caracteres que no estén en `letrasNumeros`
        vocalesEncontradas.push(null);
        consonantesEncontradas.push(null);
      }
    }

    // Filtrar los valores nulos para el cálculo
    const soloVocales = vocalesEncontradas.filter(
      (valor) => valor !== null
    ) as number[];
    const soloConsonantes = consonantesEncontradas.filter(
      (valor) => valor !== null
    ) as number[];

    // Sumar los valores
    const sumaVocales = soloVocales.reduce((acc, valor) => acc + valor, 0);
    const sumaConsonantes = soloConsonantes.reduce(
      (acc, valor) => acc + valor,
      0
    );

    // Lógica para las fechas (Tabla Reducción Fecha y Compatibilidad)
    const datosFechaPrincipal = calcularDatosFecha(fecha);
    let reduccionFechaCompanero: number | string | null = null;
    let diaCompanero: number | string | null = null;
    if (fechaCompanero) {
      const datosFechaAuxiliar = calcularDatosFecha(fechaCompanero);
      reduccionFechaCompanero = datosFechaAuxiliar.reduccionFecha;
      diaCompanero = datosFechaAuxiliar.dia;
    }

    // Lógica para la Tabla Tira Principal
    const iniciales = nombreCompleto
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toLowerCase();
    const sumaIniciales = iniciales.split("").reduce((acc, char) => {
      const valor = LETRAS_NUMEROS[char as keyof typeof LETRAS_NUMEROS];
      return acc + (valor || 0);
    }, 0);

    const sumaMision = datosFechaPrincipal.suma + sumaIniciales;
    const sumaTemperamento = sumaVocales + sumaConsonantes;
    const sumaMetaFinal =
      sumaVocales + sumaConsonantes + datosFechaPrincipal.suma;

    // Lógica para la Tabla Abundancia y escasez
    const numerosFrecuencia = Array(9).fill(0); // [0, 0, 0, 0, 0, 0, 0, 0, 0]
    numerosNombre.forEach((num) => {
      if (num >= 1 && num <= 9) {
        numerosFrecuencia[num - 1]++;
      }
    });

    const numerosMasAltos: number[] = [];
    const numerosMasBajos: number[] = [];
    if (numerosFrecuencia.length > 0) {
      const maxFrecuencia = Math.max(...numerosFrecuencia);
      const minFrecuencia = Math.min(...numerosFrecuencia);

      numerosFrecuencia.forEach((conteo, index) => {
        if (conteo === maxFrecuencia) {
          numerosMasAltos.push(index);
        }
        if (conteo === minFrecuencia) {
          numerosMasBajos.push(index);
        }
      });
    }

    return {
      nombreCompleto: nombreCompleto.toUpperCase(),
      vocales: vocalesEncontradas,
      consonantes: consonantesEncontradas,
      sumaVocales,
      sumaConsonantes,
      reduccionVocales: obtenerReduccion(sumaVocales),
      reduccionConsonantes: obtenerReduccion(sumaConsonantes),
      fechaNumeros: datosFechaPrincipal.fechaNumeros,
      sumaFecha: datosFechaPrincipal.suma,
      reduccionFecha: datosFechaPrincipal.reduccionFecha,
      diaFecha: datosFechaPrincipal.dia,
      reduccionDia: datosFechaPrincipal.reduccionDia,
      sumaTemperamento,
      reduccionTemperamento: obtenerReduccion(sumaTemperamento),
      sumaIniciales,
      sumaMision,
      reduccionMision: obtenerReduccion(sumaMision),
      sumaMetaFinal,
      reduccionMetaFinal: obtenerReduccion(sumaMetaFinal),
      numerosFrecuencia,
      numerosMasAltos,
      numerosMasBajos,
      reduccionFechaCompanero,
      diaCompanero,
    };
  }, [nombreCompleto, fecha, fechaCompanero]);

  return datosCalculados;
};
