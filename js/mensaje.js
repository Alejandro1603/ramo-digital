const texto = `
Hola Dani, este mensaje es para ti 
(es un poco largo).

Antes que nada, quiero felicitarte por tu cumpleaños. Es una etapa nueva a la que entras, y hay muchas cosas que debes aprender en este nuevo desafío. Quiero que sepas que tienes mi apoyo y compañía cuantas veces me necesites. Eres una mujer maravillosa, talentosa, amable, linda tanto física como mentalmente. Estás llena de sueños y metas que espero puedas cumplir. Me encanta tu manera de ser, aunque algunas veces es confusa de entender, pero ¿qué más da? Esa es tu esencia. Tu forma de ser es lo más encantador que he podido conocer en alguien. La forma en la que, a pesar de todo, intentas tomar otro camino y resolver las cosas por ti misma es algo que admiro demasiado.

Sé que no soy la mejor persona del mundo, o quizás tú y yo no seamos perfectos. Cada uno tiene diferencias en pensamiento y obra, pero aun así, amo cada parte de ti, de la niña de la que me enamoré y de la mujer que eres y llegarás a ser en un futuro. No puedo, como cuando éramos niños, prometerte que estaré contigo toda la vida, o incluso poder amarte a pesar de todo. Tú y yo hemos cambiado desde el instante en que nos conocimos. Aun así, tengo recuerdos tuyos y míos, y eso me alegra a veces el día. Conocerás muchas personas, crearás nuevas amistades y vínculos más fuertes que ahora. No soy mago ni vidente para saber si en el futuro que te espera estaré yo, ya sea como amigo, incluso enemigo, pareja, socio o incluso un desconocido. La vida da muchas vueltas, y el futuro es muy incierto.

Quiero que sepas que, a pesar de todo, aún conservo los recuerdos felices contigo: los buenos, los malos. La confianza que tenemos, para mí, es algo muy especial. No lo sé para ti. No sé qué pienses de mí, o incluso si me quieres como antes. No lo sé. A veces hasta siento que quieres que me vaya de tu vida. A donde quiera que vayas, espero que recuerdes algo. De niño te lo prometí, pero ahora lo digo como una meta. Una promesa es algo que se olvida o se puede romper: "Intentaré estar para ti, hasta el momento en que alguno de los dos lo desee." No puedo darte las cosas que mereces, ¡no puedo ni con las mías! Jajaja.

De vez en cuando habría querido devolver el tiempo y no haber sido tan inmaduro antes. Siento que así no te habría perdido tan fácilmente, o al menos te hubiera tenido conmigo un poco más de tiempo. Pero eso ya es cosa del pasado. Tú misma lo dijiste: las personas cambian, olvidan y mejoran. Creo que entendí ese mensaje cuando me lo dijiste. Siento que iba para mí. Creo que dejaré de hablar tanto, porque de tanto texto te me vas a aburrir.

Encuentra la felicidad a donde quiera que estés, y si en esa felicidad no estoy yo, desde lejos veré cómo esta bella y hermosa flor deja su aroma y presencia a donde vaya. Cumple tus metas y deseos, sé un poco más organizada y clara con tus cosas, pórtate bien, intenta escoger mejor tu grupo social, crece como persona, lucha por tus sueños, haz que tu mamá se sienta orgullosa de ti, demuéstrame que puedes ser mejor de lo que ya eres.

Con cariño, El próximo dueño de tu nevera.


Love iu. 🌻🌻`;
let i = 0;

function escribir() {
  if (i < texto.length) {
    document.getElementById("cartaTexto").innerHTML += texto.charAt(i);
    i++;
    setTimeout(escribir, 60);
  }
}
window.onload = escribir;
