import { DataStore } from './types';

export const DATA: DataStore = {
  saludos: {
      title: "Saludos y Expresiones Básicas",
      desc: "'Hello' y 'Goodbye' son esenciales. 'Please' y 'Thank You' son cortesías fundamentales.",
      items: [
          { it: "Hello", pron: "jelóu", es: "Hola", context: "Saludo común", fraseIt: "Hello, nice to meet you.", fraseEs: "Hola, encantado de conocerte.", frasePron: "jelóu, náis tu mít yu" },
          { it: "Goodbye", pron: "gudbái", es: "Adiós", context: "Despedida", fraseIt: "Goodbye, see you tomorrow.", fraseEs: "Adiós, te veo mañana.", frasePron: "gudbái, sí yu tumórrou" },
          { it: "Good morning", pron: "gud mórnin", es: "Buenos días", context: "Formal (Mañana)", fraseIt: "Good morning, I need a taxi.", fraseEs: "Buenos días, necesito un taxi.", frasePron: "gud mórnin, ai nid e táxi" },
          { it: "Good evening", pron: "gud ívnin", es: "Buenas tardes", context: "Formal (Tarde/Noche)", fraseIt: "Good evening, is this table free?", fraseEs: "Buenas tardes, ¿está libre esta mesa?", frasePron: "gud ívnin, is dis téibol frí?" },
          { it: "Thank you", pron: "zénk yu", es: "Gracias", context: "Cortesía esencial", fraseIt: "Thank you for your help.", fraseEs: "Gracias por tu ayuda.", frasePron: "zénk yu for yor jelp" },
          { it: "Please", pron: "plíis", es: "Por favor", context: "Para pedir algo", fraseIt: "Can I have the menu, please?", fraseEs: "¿Me puede dar el menú, por favor?", frasePron: "kan ai jav de meniú, plíis?" },
          { it: "Excuse me", pron: "eks-kiús mi", es: "Disculpa / Disculpe", context: "Para llamar la atención", fraseIt: "Excuse me, where is the station?", fraseEs: "Disculpe, ¿dónde está la estación?", frasePron: "eks-kiús mi, uér is de stéishen?" },
          { it: "How are you?", pron: "jáu ar iu", es: "¿Cómo estás?", context: "Pregunta común", fraseIt: "I'm fine, how are you?", fraseEs: "Estoy bien, ¿y tú?", frasePron: "aim fáin, jáu ar iu?" }
      ]
  },
  presentacion: {
      title: "Presentaciones Personales",
      desc: "Frases clave para hablar de ti mismo y conocer a otros.",
      items: [
          { it: "My name is...", pron: "mái néim is", es: "Mi nombre es...", context: "Tu nombre", fraseIt: "My name is John, and I am a student.", fraseEs: "Mi nombre es John, y soy un estudiante.", frasePron: "mái néim is yon, an ai am e stiúdent" },
          { it: "I am from...", pron: "ai am from", es: "Soy de...", context: "Tu origen", fraseIt: "I am from Mexico, but I live here.", fraseEs: "Soy de México, pero vivo aquí.", frasePron: "ai am from méxico, bat ai liv jir" },
          { it: "I live in...", pron: "ai liv in", es: "Vivo en...", context: "Tu residencia", fraseIt: "I live in a small apartment.", fraseEs: "Vivo en un apartamento pequeño.", frasePron: "ai liv in e smól apartament" },
          { it: "How old are you?", pron: "jáu ould ar iu", es: "¿Cuántos años tienes?", context: "Pregunta de edad", fraseIt: "I am twenty-five years old.", fraseEs: "Tengo veinticinco años.", frasePron: "ai am tuénti fáiv yírs ould" },
          { it: "What is your job?", pron: "uát is yor yob", es: "¿Cuál es tu trabajo?", context: "Pregunta de profesión", fraseIt: "I am a teacher at the local school.", fraseEs: "Soy profesor en la escuela local.", frasePron: "ai am e tícher at de lóukal skul" }
      ]
  },
  numeros: {
      title: "Números (1-10)",
      desc: "Esenciales para precios, horas y cantidades.",
      items: [
          { it: "One", pron: "uán", es: "Uno", context: "Para contar", fraseIt: "I need one kilogram of apples.", fraseEs: "Necesito un kilogramo de manzanas.", frasePron: "ai nid uán kílougram of áapls" },
          { it: "Two", pron: "tu", es: "Dos", context: "Para contar", fraseIt: "They have two cars.", fraseEs: "Ellos tienen dos coches.", frasePron: "dei jav tu kars" },
          { it: "Three", pron: "zrí", es: "Tres", context: "Para contar", fraseIt: "The train arrives in three minutes.", fraseEs: "El tren llega en tres minutos.", frasePron: "de tréin arráivs in zrí mínuts" },
          { it: "Four", pron: "for", es: "Cuatro", context: "Para contar", fraseIt: "The bus leaves at four.", fraseEs: "El autobús sale a las cuatro.", frasePron: "de bas líivs at for" },
          { it: "Five", pron: "fáiv", es: "Cinco", context: "Para contar", fraseIt: "It costs five dollars.", fraseEs: "Cuesta cinco dólares.", frasePron: "it costs fáiv dólars" },
          { it: "Six", pron: "síks", es: "Seis", context: "Para contar", fraseIt: "There are six people waiting.", fraseEs: "Hay seis personas esperando.", frasePron: "der ar síks píipl ueitin" },
          { it: "Seven", pron: "séven", es: "Siete", context: "Para contar", fraseIt: "Today is the seventh day.", fraseEs: "Hoy es el séptimo día.", frasePron: "tudéi is de sévenz déi" },
          { it: "Eight", pron: "éit", es: "Ocho", context: "Para contar", fraseIt: "I have eight books.", fraseEs: "Tengo ocho libros.", frasePron: "ai jav éit buks" },
          { it: "Nine", pron: "náin", es: "Nueve", context: "Para contar", fraseIt: "The store closes at nine.", fraseEs: "La tienda cierra a las nueve.", frasePron: "de stor clóuses at náin" },
          { it: "Ten", pron: "ten", es: "Diez", context: "Para contar", fraseIt: "We need ten cups.", fraseEs: "Necesitamos diez tazas.", frasePron: "ui nid ten caps" }
      ]
  },
  colores: {
      title: "Colores Esenciales",
      desc: "Para describir objetos y entornos.",
      items: [
          { it: "Red", pron: "red", es: "Rojo", context: "My shirt is red.", color: "#EF4444", text: "white", fraseIt: "The red car is fast.", fraseEs: "El coche rojo es rápido.", frasePron: "de red car is fast" },
          { it: "Green", pron: "gríin", es: "Verde", context: "The grass is green.", color: "#22C55E", text: "white", fraseIt: "Green is my favorite color.", fraseEs: "El verde es mi color favorito.", frasePron: "gríin is mái feivorit cólor" },
          { it: "Yellow", pron: "iélou", es: "Amarillo", context: "The sun light is yellow.", color: "#FACC15", text: "black", fraseIt: "The banana is yellow.", fraseEs: "El plátano es amarillo.", frasePron: "de banana is iélou" },
          { it: "Black", pron: "blak", es: "Negro", context: "The sky is black at night.", color: "#000000", text: "white", fraseIt: "I bought new black shoes.", fraseEs: "Compré zapatos negros nuevos.", frasePron: "ai bóot niú blak shús" },
          { it: "White", pron: "uáit", es: "Blanco", context: "The snow is white.", color: "#FFFFFF", text: "black", border: true, fraseIt: "She is wearing a a white dress.", fraseEs: "Ella lleva un vestido blanco.", frasePron: "shi is uérin e uáit dres" },
          { it: "Blue", pron: "blu", es: "Azul", context: "The sky is blue.", color: "#3B82F6", text: "white", fraseIt: "The sea is deep blue.", fraseEs: "El mar es azul oscuro.", frasePron: "de sí is díip blu" }
      ]
  },
  animales: {
      title: "Animales y Objetos del Hogar",
      desc: "Vocabulario para describir tu entorno cotidiano.",
      items: [
          { it: "Dog", pron: "dog", es: "Perro", context: "Animal", icon: "🐕", fraseIt: "I have a small dog.", fraseEs: "Tengo un perro pequeño.", frasePron: "ai jav e smól dog" },
          { it: "Cat", pron: "kat", es: "Gato", context: "Animal", icon: "🐈", fraseIt: "The cat is sleeping on the chair.", fraseEs: "El gato está durmiendo en la silla.", frasePron: "de kat is slípin on de cher" },
          { it: "Bird", pron: "berd", es: "Pájaro", context: "Animal", icon: "🐦", fraseIt: "The bird is singing loudly.", fraseEs: "El pájaro está cantando fuerte.", frasePron: "de berd is síngin láudli" },
          { it: "Fish", pron: "fish", es: "Pez", context: "Animal", icon: "🐟", fraseIt: "I like to eat fish.", fraseEs: "Me gusta comer pescado.", frasePron: "ai láik tu íit fish" },
          { it: "Table", pron: "téibol", es: "Mesa", context: "Hogar", icon: "🪑", fraseIt: "Put the book on the table.", fraseEs: "Pon el libro en la mesa.", frasePron: "put de buk on de téibol" },
          { it: "Bed", pron: "bed", es: "Cama", context: "Hogar", icon: "🛏️", fraseIt: "It's time to go to bed.", fraseEs: "Es hora de ir a la cama.", frasePron: "its táim tu gou tu bed" },
          { it: "Window", pron: "uindou", es: "Ventana", context: "Hogar", icon: "🪟", fraseIt: "Please close the window.", fraseEs: "Por favor, cierra la ventana.", frasePron: "plíis clóus de uindou" },
          { it: "Door", pron: "dor", es: "Puerta", context: "Hogar", icon: "🚪", fraseIt: "The door is open.", fraseEs: "La puerta está abierta.", frasePron: "de dor is óupen" }
      ]
  },
  viajes: {
      title: "Viajes y Salud",
      desc: "Frases críticas para el aeropuerto y emergencias médicas.",
      items: [
          { it: "Passport", pron: "páasport", es: "Pasaporte", context: "Aeropuerto", fraseIt: "I need to renew my passport.", fraseEs: "Necesito renovar mi pasaporte.", frasePron: "ai nid tu riníu mái páasport" },
          { it: "Ticket", pron: "tíket", es: "Boleto / Tiquete", context: "Viaje", fraseIt: "Where can I buy a ticket?", fraseEs: "¿Dónde puedo comprar un boleto?", frasePron: "uer kan ai bái e tíket?" },
          { it: "Baggage", pron: "báguedz", es: "Equipaje", context: "Aeropuerto", fraseIt: "My baggage is too heavy.", fraseEs: "Mi equipaje está muy pesado.", frasePron: "mái báguedz is tu jévi" },
          { it: "I feel sick", pron: "ai fíil sík", es: "Me siento enfermo", context: "Salud", fraseIt: "I feel sick, I should go home.", fraseEs: "Me siento enfermo, debería ir a casa.", frasePron: "ai fíil sík, ai shud gou jom" },
          { it: "I need a doctor", pron: "ai nid e dóktor", es: "Necesito un doctor", context: "Emergencia", fraseIt: "It is an emergency, I need a doctor.", fraseEs: "Es una emergencia, necesito un doctor.", frasePron: "it is an imérdchensi, ai nid e dóktor" },
          { it: "Help", pron: "jelp", es: "Ayuda", context: "Emergencia", fraseIt: "Help! Call an ambulance!", fraseEs: "¡Ayuda! ¡Llama a una ambulancia!", frasePron: "jelp! col an ámbiulans!" }
      ]
  },
  clima: {
      title: "Clima y el Tiempo",
      desc: "Expresiones meteorológicas y momentos del día.",
      items: [
          { it: "It is cold", pron: "it is cóuld", es: "Hace frío", context: "Clima", icon: "❄️", fraseIt: "It is cold outside today.", fraseEs: "Hace frío afuera hoy.", frasePron: "it is cóuld áutsáid tudéi" },
          { it: "It is hot", pron: "it is jot", es: "Hace calor", context: "Clima", icon: "☀️", fraseIt: "It is too hot to walk.", fraseEs: "Hace demasiado calor para caminar.", frasePron: "it is tu jot tu uók" },
          { it: "It is raining", pron: "it is réinin", es: "Está lloviendo", context: "Clima", icon: "🌧️", fraseIt: "Take an umbrella, it is raining.", fraseEs: "Lleva un paraguas, está lloviendo.", frasePron: "téik an ambréla, it is réinin" },
          { it: "In the morning", pron: "in de mórnin", es: "Por la mañana", context: "Tiempo", fraseIt: "I have coffee in the morning.", fraseEs: "Tomo café por la mañana.", frasePron: "ai jav cófi in de mórnin" },
          { it: "In the evening", pron: "in de ívnin", es: "Por la noche", context: "Tiempo", fraseIt: "We will watch a movie in the evening.", fraseEs: "Veremos una película por la noche.", frasePron: "ui uíl uótch e múvi in de ívnin" }
      ]
  }
};
