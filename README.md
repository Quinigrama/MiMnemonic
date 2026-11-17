# Sinapsis Violenta 🧠⚡

Entrenamiento de mnemotecnia en español con **código fonético propio**, inspirado en la «sinapsis violenta» de Ramón Campayo: traducir al instante entre palabras y números, y asociar cada naipe de la baraja española con un personaje.

Es una única página web (`index.html`) que funciona sin conexión ni servidor: basta con abrirla en el navegador.

## El código fonético

| Cifra | Consonantes |
|:---:|---|
| 0 | r, rr |
| 1 | t, d |
| 2 | n, ñ |
| 3 | m, w |
| 4 | c, q, k |
| 5 | l, ll, v |
| 6 | s, z |
| 7 | f, j |
| 8 | g, x, ch |
| 9 | p, b |

Las vocales, la **h** y la **y** no tienen valor. **rr**, **ll** y **ch** cuentan como un solo sonido.

## Pestañas

- **Código**: la tabla del código y un traductor palabra ↔ número.
- **Sinapsis**: cinco bloques cronometrados (calentamiento, palabra → número, número → palabra, alternancia y frases encadenadas) con 6 niveles progresivos, de 1 a 9 cifras. Se juega con teclados en pantalla, sin teclado del sistema.
- **Naipes**: las 48 cartas de la baraja española con su personaje y su escena inverosímil (editables), y tres juegos: carta → personaje, personaje → carta y secuencia.

## Datos

La carpeta `datos/` contiene **BDPalabras**, el diccionario fonético de 66.191 palabras agrupadas por código, con la frecuencia de uso de cada palabra:

- `BDPalabras.txt`: formato original, en UTF-8.
- `BDPalabras.xlsx`: hoja de cálculo con resumen, palabras y códigos.
- `BDPalabras.csv`: separado por `;`, con decimales con coma.
- `BDPalabras.db`: base de datos SQLite.

La frecuencia es la escala Zipf del paquete [wordfreq](https://github.com/rspeer/wordfreq): común ≥ 3,5 · media 2,5–3,5 · rara < 2,5.

## Personajes y progreso

Los personajes que edites en la pestaña Naipes y los récords se guardan en el navegador (`localStorage`). Usa el botón «Copiar lista para la hoja de cálculo» para tener una copia de tus personajes.
