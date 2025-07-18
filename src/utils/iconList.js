import { 
  FaHeart, FaVenusMars, FaBlind, FaKey, FaKissWinkHeart, FaLock, 
  FaFeatherAlt, FaHeartbeat, FaPlayCircle, FaCocktail, FaRing, 
  FaGift, FaStar, FaUserSecret, FaMagic, FaDove, FaBolt, FaBook,
  FaOilCan, FaFire, FaHands, FaMask, FaBoxOpen, FaLeaf, FaTint,
  FaFlask, FaGem, FaTheaterMasks, FaRibbon, FaMoon, FaSun, FaSprayCan,
  FaBatteryFull, FaWater, FaShoppingBag, FaCube, FaBell,
  FaHatCowboy, FaGlasses, FaCrown, FaFish, FaIceCream, FaPizzaSlice,
  FaWineBottle, FaBed, FaChair, FaBath, FaShower, FaWind, FaFan,
  FaThermometerHalf, FaWeight, FaRuler, FaCut, FaPalette, FaMusic,
  FaFilm, FaGamepad, FaDice, FaPuzzlePiece, FaGhost, FaRobot,
  FaCat, FaDog, FaDragon, FaHorseHead, FaSpider, FaKiwiBird
} from "react-icons/fa";
import { 
  MdFavorite, MdHotel, MdNightsStay, MdSpa, MdOutlineEmojiPeople,
  MdToys, MdOutlineSelfImprovement, MdOutlineWaterDrop, MdOutlineLocalBar,
  MdOutlineLocalLaundryService, MdOutlineCleaningServices, MdOutlineHealthAndSafety,
  MdOutlineSportsHandball, MdOutlineDirectionsRun, MdOutlinePool, MdOutlineAir
} from "react-icons/md";
import { 
  GiLovers, GiLipstick, GiHighHeel, GiLoveMystery, GiRose,
  GiFeather, GiShinyApple, GiVibratingShield, GiOilDrum,
  GiHandcuffs, GiWhip, GiLeatherArmor, GiSpikedCollar, GiCrystalBall,
  GiSpermWhale, GiSpermatoid, GiCondorEmblem, GiSpermatozoon,
  GiSpiralBottle, GiSpottedWound, GiSpoutnik, GiSpray, GiSpring, GiStabbedNote, GiStack, GiStairs, GiStalactites, GiStarKey, GiStaryu, GiSteak, GiSteelClaws,
  GiSteelwingEmblem, GiStethoscope, GiStickFrame, GiStickSplitting,
  GiStickFigure, GiStickyBoot, GiStonePath, GiStoneSphere, GiStoneStack,
  GiStopwatch, GiStorkDelivery, GiStraightPipe, GiStrawberry, GiStreetLight,
  GiStrikingArrows, GiStrong, GiStrongMan, GiStumpRegrowth
} from "react-icons/gi";
import { 
  BsHeartFill, BsFillEmojiHeartEyesFill, BsFillSuitHeartFill,
  BsDropletFill, BsMoisture, BsBoxSeam, BsBook, BsEggFried,
  BsFlower1, BsFlower2, BsFlower3, BsGenderAmbiguous, BsGenderFemale,
  BsGenderMale, BsGenderTrans, BsGem, BsGiftFill, BsGlobe,
  BsHourglassSplit, BsLightningFill, BsLightningCharge, BsMagnet,
  BsMotherboard, BsNutFill, BsPatchQuestion, BsPieChart,
  BsPin, BsPlug, BsPower, BsQuestionCircle, BsRainbow,
  BsShieldShaded, BsSignpostSplit, BsSnow, BsSoundwave, BsSpeedometer,
  BsThermometerSun, BsTree, BsTrophy, BsUmbrella, BsWater
} from "react-icons/bs";

const iconList = [
  // Amor y Romance (8)
  { id: "heart", icon: <FaHeart />, name: "Corazón" },
  { id: "heartbeat", icon: <FaHeartbeat />, name: "Romance" },
  { id: "kiss", icon: <FaKissWinkHeart />, name: "Beso" },
  { id: "lovers", icon: <GiLovers />, name: "Pareja" },
  { id: "bsheart", icon: <BsHeartFill />, name: "Corazón lleno" },
  { id: "bsemojiheart", icon: <BsFillEmojiHeartEyesFill />, name: "Emoji Corazón" },
  { id: "bssuitheart", icon: <BsFillSuitHeartFill />, name: "Corazón Traje" },
  { id: "ribbon", icon: <FaRibbon />, name: "Cinta" },

  // Género y Orientación (10)
  { id: "venusmars", icon: <FaVenusMars />, name: "Género" },
  { id: "lipstick", icon: <GiLipstick />, name: "Labial" },
  { id: "heels", icon: <GiHighHeel />, name: "Tacones" },
  { id: "gender-female", icon: <BsGenderFemale />, name: "Femenino" },
  { id: "gender-male", icon: <BsGenderMale />, name: "Masculino" },
  { id: "gender-trans", icon: <BsGenderTrans />, name: "Trans" },
  { id: "gender-ambiguous", icon: <BsGenderAmbiguous />, name: "No binario" },
  { id: "crown", icon: <FaCrown />, name: "Reina" },
  { id: "theater-masks", icon: <FaTheaterMasks />, name: "Roles" },
  { id: "glasses", icon: <FaGlasses />, name: "Estilo" },

  // Juguetes Eróticos (15)
  { id: "vibrating-shield", icon: <GiVibratingShield />, name: "Juguete" },
  { id: "toys", icon: <MdToys />, name: "Juguetes" },
  { id: "battery", icon: <FaBatteryFull />, name: "Pilas" },
  { id: "power", icon: <BsPower />, name: "Energía" },
  { id: "plug", icon: <BsPlug />, name: "Enchufe" },
  { id: "robot", icon: <FaRobot />, name: "Tecnología" },
  { id: "gem", icon: <FaGem />, name: "Piedra preciosa" },
  { id: "staryu", icon: <GiStaryu />, name: "Forma divertida" },
  { id: "steel-claws", icon: <GiSteelClaws />, name: "Garras" },
  { id: "sticky-boot", icon: <GiStickyBoot />, name: "Botas" },
  { id: "spiral-bottle", icon: <GiSpiralBottle />, name: "Forma abstracta" },
  { id: "soundwave", icon: <BsSoundwave />, name: "Ondas" },

  // Lubricantes y Aceites (10)
  { id: "oil-can", icon: <FaOilCan />, name: "Aceite" },
  { id: "oil-drum", icon: <GiOilDrum />, name: "Barril aceite" },
  { id: "droplet", icon: <BsDropletFill />, name: "Gotas" },
  { id: "moisture", icon: <BsMoisture />, name: "Humedad" },
  { id: "tint", icon: <FaTint />, name: "Mancha" },
  { id: "flask", icon: <FaFlask />, name: "Frasco" },
  { id: "water", icon: <FaWater />, name: "Agua" },
  { id: "spray", icon: <GiSpray />, name: "Spray" },
  { id: "spray-can", icon: <FaSprayCan />, name: "Aerosol" },
  { id: "spring", icon: <GiSpring />, name: "Resorte" },

  // Lencería y Ropa Íntima (8)
  { id: "lingerie", icon: <FaRibbon />, name: "Encaje" },
  { id: "cowboy-hat", icon: <FaHatCowboy />, name: "Sombrero" },
  { id: "leather-armor", icon: <GiLeatherArmor />, name: "Cuero" },
  { id: "spiked-collar", icon: <GiSpikedCollar />, name: "Collar" },
  { id: "laundry", icon: <MdOutlineLocalLaundryService />, name: "Lavado" },
  { id: "fishnet", icon: <FaFish />, name: "Red" },
  { id: "crystal-ball", icon: <GiCrystalBall />, name: "Transparencia" },
  { id: "dress", icon: <GiHighHeel />, name: "Vestido" },

  // BDSM (12)
  { id: "handcuffs", icon: <GiHandcuffs />, name: "Esposas" },
  { id: "whip", icon: <GiWhip />, name: "Látigo" },
  { id: "mask", icon: <FaMask />, name: "Máscara" },
  { id: "lock", icon: <FaLock />, name: "Candado" },
  { id: "key", icon: <FaKey />, name: "Llave" },
  { id: "blindfold", icon: <FaBlind />, name: "Venda" },
  { id: "chain", icon: <GiSpikedCollar />, name: "Cadena" },
  { id: "ruler", icon: <FaRuler />, name: "Regla" },
  { id: "cut", icon: <FaCut />, name: "Tijeras" },
  { id: "steelwing", icon: <GiSteelwingEmblem />, name: "Alas metálicas" },
  { id: "stump-regrowth", icon: <GiStumpRegrowth />, name: "Restricción" },

  // Juegos para Parejas (10)
  { id: "dice", icon: <FaDice />, name: "Dados" },
  { id: "puzzle", icon: <FaPuzzlePiece />, name: "Rompecabezas" },
  { id: "gamepad", icon: <FaGamepad />, name: "Mando" },
  { id: "cards", icon: <GiLoveMystery />, name: "Cartas" },
  { id: "box-open", icon: <FaBoxOpen />, name: "Caja abierta" },
  { id: "patch-question", icon: <BsPatchQuestion />, name: "Pregunta" },
  { id: "question-circle", icon: <BsQuestionCircle />, name: "Interrogante" },
  { id: "signpost", icon: <BsSignpostSplit />, name: "Señal" },
  { id: "ghost", icon: <FaGhost />, name: "Fantasía" },
  { id: "stork", icon: <GiStorkDelivery />, name: "Entrega" },

  // Cosméticos Sensuales (8)
  { id: "lipstick", icon: <GiLipstick />, name: "Labial" },
  { id: "palette", icon: <FaPalette />, name: "Paleta" },
  { id: "spa", icon: <MdSpa />, name: "Spa" },
  { id: "flower1", icon: <BsFlower1 />, name: "Flor 1" },
  { id: "flower2", icon: <BsFlower2 />, name: "Flor 2" },
  { id: "flower3", icon: <BsFlower3 />, name: "Flor 3" },
  { id: "rose", icon: <GiRose />, name: "Rosa" },
  { id: "shiny-apple", icon: <GiShinyApple />, name: "Manzana" },

  // Disfraces y Ropa Sexy (8)
  { id: "theater-masks", icon: <FaTheaterMasks />, name: "Máscaras" },
  { id: "cowboy-hat", icon: <FaHatCowboy />, name: "Sombrero cowboy" },
  { id: "crown", icon: <FaCrown />, name: "Corona" },
  { id: "dragon", icon: <FaDragon />, name: "Dragón" },
  { id: "cat", icon: <FaCat />, name: "Gato" },
  { id: "dog", icon: <FaDog />, name: "Perro" },
  { id: "spider", icon: <FaSpider />, name: "Araña" },
  { id: "kiwi-bird", icon: <FaKiwiBird />, name: "Ave" },

  // Velas y Ambientadores (6)
  { id: "candle", icon: <FaPlayCircle />, name: "Vela" },
  { id: "fire", icon: <FaFire />, name: "Fuego" },
  { id: "wine-bottle", icon: <FaWineBottle />, name: "Vino" },
  { id: "cocktail", icon: <FaCocktail />, name: "Cóctel" },
  { id: "local-bar", icon: <MdOutlineLocalBar />, name: "Bar" },
  { id: "ice-cream", icon: <FaIceCream />, name: "Helado" },

  // Productos para la Estimulación (8)
  { id: "hands", icon: <FaHands />, name: "Manos" },
  { id: "lightning", icon: <BsLightningFill />, name: "Descarga" },
  { id: "magnet", icon: <BsMagnet />, name: "Imán" },
  { id: "thermometer", icon: <FaThermometerHalf />, name: "Temperatura" },
  { id: "fan", icon: <FaFan />, name: "Viento" },
  { id: "wind", icon: <FaWind />, name: "Aire" },

  // Anillos y Accesorios Íntimos (6)
  { id: "ring", icon: <FaRing />, name: "Anillo" },
  { id: "gem", icon: <BsGem />, name: "Gema" },
  { id: "nut", icon: <BsNutFill />, name: "Nuez" },
  { id: "egg", icon: <BsEggFried />, name: "Huevo" },
  { id: "pie", icon: <BsPieChart />, name: "Pastel" },

  // Regalos y Kits (6)
  { id: "gift", icon: <FaGift />, name: "Regalo" },
  { id: "box-seam", icon: <BsBoxSeam />, name: "Caja" },
  { id: "shopping-bag", icon: <FaShoppingBag />, name: "Bolsa" },
  { id: "cube", icon: <FaCube />, name: "Cubo" },
  { id: "bell", icon: <FaBell />, name: "Campana" },
  { id: "trophy", icon: <BsTrophy />, name: "Trofeo" },

  // Productos para el Placer Anal (6)
  { id: "spoutnik", icon: <GiSpoutnik />, name: "Spoutnik" },
  { id: "stalactites", icon: <GiStalactites />, name: "Estalactitas" },
  { id: "stone-sphere", icon: <GiStoneSphere />, name: "Esfera" },
  { id: "stone-stack", icon: <GiStoneStack />, name: "Pila" },

  // Preservativos y Protección (6)
  { id: "shield", icon: <BsShieldShaded />, name: "Escudo" },
  { id: "health", icon: <MdOutlineHealthAndSafety />, name: "Salud" },
  { id: "umbrella", icon: <BsUmbrella />, name: "Paraguas" },
  { id: "cleaning", icon: <MdOutlineCleaningServices />, name: "Limpieza" },
  { id: "water-drop", icon: <MdOutlineWaterDrop />, name: "Gota agua" },
  { id: "safety", icon: <MdOutlineHealthAndSafety />, name: "Seguridad" },

  // Erotismo y Bienestar Sexual (6)
  { id: "self-improvement", icon: <MdOutlineSelfImprovement />, name: "Bienestar" },
  { id: "spa", icon: <MdSpa />, name: "Relajación" },
  { id: "sports", icon: <MdOutlineSportsHandball />, name: "Deporte" },
  { id: "run", icon: <MdOutlineDirectionsRun />, name: "Correr" },
  { id: "pool", icon: <MdOutlinePool />, name: "Piscina" },
  { id: "air", icon: <MdOutlineAir />, name: "Aire fresco" },

  // Productos Naturales y Orgánicos (6)
  { id: "leaf", icon: <FaLeaf />, name: "Hoja" },
  { id: "tree", icon: <BsTree />, name: "Árbol" },
  { id: "rainbow", icon: <BsRainbow />, name: "Arcoíris" },
  { id: "sun", icon: <FaSun />, name: "Sol" },
  { id: "moon", icon: <FaMoon />, name: "Luna" },
  { id: "water", icon: <BsWater />, name: "Agua natural" },

  // Misterio/Sorpresas (6)
  { id: "mystery", icon: <GiLoveMystery />, name: "Misterio" },
  { id: "usersecret", icon: <FaUserSecret />, name: "Secreto" },
  { id: "magic", icon: <FaMagic />, name: "Magia" },
  { id: "crystal-ball", icon: <GiCrystalBall />, name: "Bola cristal" },
  { id: "ghost", icon: <FaGhost />, name: "Fantasma" },
  { id: "patch-question", icon: <BsPatchQuestion />, name: "Pregunta" },

  // Libros y Educación (6)
  { id: "book", icon: <FaBook />, name: "Libro" },
  { id: "bs-book", icon: <BsBook />, name: "Libro abierto" },
  { id: "motherboard", icon: <BsMotherboard />, name: "Conocimiento" },
  { id: "pin", icon: <BsPin />, name: "Marcador" },
  { id: "globe", icon: <BsGlobe />, name: "Globo" },
  { id: "hourglass", icon: <BsHourglassSplit />, name: "Tiempo" },

  // Varios (8)
  { id: "favorite", icon: <MdFavorite />, name: "Favorito" },
  { id: "people", icon: <MdOutlineEmojiPeople />, name: "Personas" },
  { id: "star", icon: <FaStar />, name: "Estrella" },
  { id: "bolt", icon: <FaBolt />, name: "Rayo" },
  { id: "lightning-charge", icon: <BsLightningCharge />, name: "Carga" },
  { id: "speedometer", icon: <BsSpeedometer />, name: "Velocidad" },
  { id: "thermometer-sun", icon: <BsThermometerSun />, name: "Calor" },
  { id: "weight", icon: <FaWeight />, name: "Peso" }
];

export default iconList;