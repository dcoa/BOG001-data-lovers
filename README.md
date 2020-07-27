# DUB DUB DATA


##  Definición del producto

DUB DUB DATA es un una aplicación web acerca a la serie de Rick and Morty a través de la cuál es posible explorar todos personajes y entender su trama llena de viajes entre universos.


## Investigación de usuario

La aplicación va dirigida a personas entre los 15 y los 30 años que les interesan las series que les permiten aprender temas como viajes en el tiempo y el espacio, teoría de los multiversos, entre otros temas de ciencia y filosofía; y que al mismo tiempo tenga situaciones entretenidas llenas de humor negro, sarcasmo y referencias de la serie u otras que jueguen con la atención del usuario. Nuestros usuarios son personas a las que les recomiendan la serie y quieren tener presentes los personajes a medida que ven los capítulos y así no perder el hilo de la historia.

Los datos más relevantes para nuestro usuario son la imagen, el nombre, los episodios en los que aparece, la especie, el tipo, el origen y la ubicación del personaje dentro de los diferentes mundos. El usuario a parte de saber la descripción general (en una especie de tarjeta con la información relevante en ese orden) de cada personaje le interesa que se resalte de alguna forma los personajes principales.

Los usuarios visitaran la aplicación web en el momento en el que se le recomienda y a medida que ve la serie para recordar aquellos personajes olvidados o aclarar algún dato de cualquier personaje.


## Historias de usuario

H.1  Yo como nuevo fan quiero ver toda la lista de los personajes de la serie para saber datos sobre ellos.

H.2 Yo como nuevo fan quiero ver que cuales son los personajes principales y ver una de reseña de la serie para familiarizarme con ella.

H.3 Yo como nuevo fan quiero filtrar por episodio los personajes para saber quienes salen en cada capitulo.

H.4 Yo como nuevo fan quiero poder ordenarlos de forma alfabética en orden ascendente y descendente y saber cuantos personajes hay en cada planeta para tener claridad de su estado actual.

H.5 Yo como usuario quiero ver toda la lista de personas, pero por bloques no todos a la vez.


## Prototipo de baja fidelidad

<img src="https://github.com/dcoa/BOG001-data-lovers/blob/master/src/img/sketch.jpg/" alt="Prototipo de baja fidelidad"/>

### Feedback del prototipo

A partir de la interacción con futuros usuarios y amantes de la serie se decidió implementar las recomendaciones de realizar una ventana modal donde se pudiese acceder a la tarjeta de cada personaje, además de hacer estas verticales en pantallas para móvil y dejarlas horizontales para tamaños más grandes. Se tuvo en cuenta además que el nombre del personaje estuviese sobre la imagen a la hora de mostrarse en la página principal.

En la parte de filtrado por episodios se sugirió realizar una referencia a la temporada a la cual hacia parte y no solo el número del episodio.


## Prototipo de alta fidelidad

[Desktop](https://www.figma.com/proto/jSV7y2usCNuLacIDpo6C75/Rick-y-Morty?node-id=111%3A0&scaling=min-zoom)

<img src="https://github.com/dcoa/BOG001-data-lovers/blob/master/src/img/prototipodeskcop1.jpg/" width="50%" alt="Prototipo de alta fidelidad desktop"/>
<img src="https://github.com/dcoa/BOG001-data-lovers/blob/master/src/img/prototipodeskcop2.jpg/" width="50%" alt="Prototipo de alta fidelidad desktop"/>

[Móvil](https://www.figma.com/proto/jSV7y2usCNuLacIDpo6C75/Rick-y-Morty?node-id=0%3A1&scaling=scale-down)

<img src="https://github.com/dcoa/BOG001-data-lovers/blob/master/src/img/prototipomovil1.jpg/" width="50%" alt="Prototipo de alta fidelidad móvil"/>
<img src="https://github.com/dcoa/BOG001-data-lovers/blob/master/src/img/prototipomovil2.jpg/" width="50%" alt="Prototipo de alta fidelidad móvil"/>

### Herramientas de apoyo
* [Figma](https://www.figma.com/) - Prototipado
* [The Rick and Morty API](https://rickandmortyapi.com/) - API
* [Sensacine](http://www.sensacine.com/series/serie-11561/) - Descripción de la serie
* [Pinterest](https://co.pinterest.com/) - Imágenes
* [Freepik](https://www.freepik.es/) - Imágenes
* [Iconify](https://iconify.design/) - Iconos


## Autores
* Daniela Ramírez Aristizabal [DaniRami](https://github.com/DaniRami)
* Diana Catalina Olarte [dcoa](https://github.com/dcoa)
## Objetivos de aprendizaje

El objetivo principal de este proyecto es que aprendas a diseñar y construir una
interfaz web donde se pueda visualizar y manipular data, entendiendo lo que el
usuario necesita.

### UX

* [ ] Diseñar la aplicación pensando y entendiendo al usuario.
* [x] Crear prototipos para obtener feedback e iterar.
* [x] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)
* [ ] Planear y ejecutar tests de usabilidad.

### HTML y CSS

* [x] [Uso de HTML semántico.](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
* [x] Uso de selectores de CSS.
* [x] Construir tu aplicación respetando el diseño realizado (maquetación).
* [x] [Uso de flexbox en CSS.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### DOM y Web APIs

* [x] Uso de selectores del DOM.
* [x] Manejo de eventos del DOM.
* [x] [Manipulación dinámica del DOM.](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n)
(appendChild |createElement | createTextNode| innerHTML | textContent | etc.)

### JavaScript

* [x] Uso de condicionales (if-else | switch | operador ternario)
* [x] Uso de bucles (for | for..in | for..of | while)
* [x] Uso de funciones (parámetros | argumentos | valor de retorno)
* [x] Manipular arrays (filter | map | sort | reduce)
* [x] Manipular objects (key | value)
* [x] Uso ES modules ([`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
| [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))
* [x] Diferenciar entre expression y statements.
* [x] Diferenciar entre tipos de datos atómicos y estructurados.

### Testing

* [ ] [Testeo unitario.](https://jestjs.io/docs/es-ES/getting-started)

### Estructura del código y guía de estilo

* [x] Organizar y dividir el código en módulos (Modularización)
* [x] Uso de identificadores descriptivos (Nomenclatura | Semántica)
* [x] Uso de linter (ESLINT)

### Git y GitHub

* [x] Uso de comandos de git (add | commit | pull | status | push)
* [x] Manejo de repositorios de GitHub (clone | fork | gh-pages)
* [ ] Colaboración en Github (branches | pull requests | |tags)
