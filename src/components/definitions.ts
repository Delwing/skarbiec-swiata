import Bear from "../assets/items/bear.svg?url"
import BigBen from "../assets/items/big-ben.svg?url"
import Boomerang from "../assets/items/boomerang.svg?url"
import Buddah from "../assets/items/buddah.svg?url"
import Camel from "../assets/items/camel.svg?url"
import Car from "../assets/items/car.svg?url"
import Cathedral from "../assets/items/cathedral.svg?url"
import Clownfish from "../assets/items/clownfish.svg?url"
import Dancer from "../assets/items/dancer.svg?url"
import Djembe from "../assets/items/djembe.svg?url"
import Dragon from "../assets/items/dragon.svg?url"
import Eagle from "../assets/items/eagle.svg?url"
import Elephant from "../assets/items/elephant.svg?url"
import Frida from "../assets/items/frida.svg?url"
import Frog from "../assets/items/frog.svg?url"
import Giraffe from "../assets/items/giraffe.svg?url"
import Hamburger from "../assets/items/hamburger.svg?url"
import Hockey from "../assets/items/hockey.svg?url"
import Iceberg from "../assets/items/iceberg.svg?url"
import Jesus from "../assets/items/jesus.svg?url"
import Jug from "../assets/items/jug.svg?url"
import Kangaroo from "../assets/items/kangaroo.svg?url"
import Maasai from "../assets/items/maasai.svg?url"
import Panda from "../assets/items/panda.svg?url"
import Penguin from "../assets/items/penguin.svg?url"
import PolarBear from "../assets/items/polar-bear.svg?url"
import Reindeer from "../assets/items/reindeer.svg?url"
import Spaghetti from "../assets/items/spaghetti.svg?url"
import Statue from "../assets/items/statue.svg?url"
import Temple from "../assets/items/temple.svg?url"
import Totem from "../assets/items/totem.svg?url"
import Toucan from "../assets/items/toucan.svg?url"
import Turtle from "../assets/items/turtle.svg?url"
import Ukulele from "../assets/items/ukulele.svg?url"
import Viking from "../assets/items/viking.svg?url"
import Whale from "../assets/items/whale.svg?url"

export interface ItemDefinition {
    image: string
    x: number
    y: number
    descriptionImage: string
    descriptionText: string
    descriptionTitle: string
}

export const itemDefinitions: ItemDefinition[] = [
    {
        image: Bear,
        x: 189,
        y: 237,
        descriptionImage: "",
        descriptionText: `Czy wiesz, że niedźwiedzie brunatne, jak te z Alaski, są jednymi z największych drapieżników lądowych na świecie? Pomimo swoich rozmiarów potrafią biegać bardzo szybko, nawet do 56 km/h, co jest prędkością samochodu jadącego przez miasto!`,
        descriptionTitle: "Niedźwiedź brunatny",
    },
    {
        image: BigBen,
        x: 701,
        y: 288,
        descriptionImage: "",
        descriptionText: `Big Ben to popularna nazwa dla gigantycznego dzwonu w wieży zegarowej w Londynie. Wieża została nazwana Wieżą Elżbiety na cześć królowej. Zegar na wieży jest jednym z najbardziej dokładnych na świecie.`,
        descriptionTitle: "Big Ben",
    },
    {
        image: Boomerang,
        x: 1353,
        y: 799,
        descriptionImage: "",
        descriptionText: `Bumerang to tradycyjna broń Aborygenów, rdzennych mieszkańców Australii. Jest to płaski, zakrzywiony kawałek drewna, który po rzuceniu potrafi wrócić do rzucającego. Były one używane do polowań.`,
        descriptionTitle: "Bumerang",
    },
    {
        image: Buddah,
        x: 1057,
        y: 383,
        descriptionImage: "",
        descriptionText: `Budda był mędrcem, który żył w starożytnych Indiach. Jego nauki, zwane buddyzmem, są jedną z największych religii na świecie. Posągi Buddy często przedstawiają go w spokojnej, siedzącej pozycji.`,
        descriptionTitle: "Budda",
    },
    {
        image: Camel,
        x: 899,
        y: 498,
        descriptionImage: "",
        descriptionText: `Wielbłądy mają na grzbiecie garby, ale wcale nie trzymają w nich wody! Garby to magazyny tłuszczu, które pozwalają wielbłądom przetrwać długi czas bez jedzenia. Wodę wielbłądy magazynują w żołądku i piją jej jednorazowo bardzo dużo, nawet 100 litrów.`,
        descriptionTitle: "Wielbłąd",
    },
    {
        image: Car,
        x: 230,
        y: 428,
        descriptionImage: "",
        descriptionText: `Samochody, które widzimy dziś na ulicach, to pojazdy z silnikami spalinowymi albo elektrycznymi. Pierwszy na świecie, seryjnie produkowany samochód, Ford Model T, był dostępny w jednym kolorze – czarnym. Było to po to, żeby produkować je jak najszybciej i jak najtaniej.`,
        descriptionTitle: "Samochód",
    },
    {
        image: Cathedral,
        x: 939,
        y: 205,
        descriptionImage: "",
        descriptionText: `Sobór Wasyla Błogosławionego w Moskwie jest bardzo znaną i kolorową cerkwią prawosławną w Rosji. Jej kopuły wyglądają jak lukrowe babeczki. Legenda głosi, że car Iwan Groźny kazał oślepić architekta, aby ten nigdy więcej nie stworzył niczego równie pięknego.`,
        descriptionTitle: "Sobór",
    },
    {
        image: Clownfish,
        x: 1026,
        y: 752,
        descriptionImage: "",
        descriptionText: `Błazenki, czyli rybki, które wyglądają jak Nemo, mieszkają w ukwiałach, które są trujące dla większości innych ryb. Błazenki są odporne na jad ukwiału i w zamian za schronienie czyszczą go z pasożytów.`,
        descriptionTitle: "Błazenek",
    },
    {
        image: Dancer,
        x: 438,
        y: 629,
        descriptionImage: "",
        descriptionText: `Samba to bardzo energiczny i radosny taniec, który jest symbolem Brazylii. Narodził się w Rio de Janeiro. Tancerki samby, szczególnie podczas karnawału, noszą bardzo kolorowe i ozdobne stroje z piór.`,
        descriptionTitle: "Tancerka",
    },
    {
        image: Djembe,
        x: 797,
        y: 750,
        descriptionImage: "",
        descriptionText: `Djembe to bęben pochodzący z Afryki Zachodniej. Jego nazwa oznacza „wszyscy razem w pokoju”. Jest to bardzo ważny instrument w afrykańskiej kulturze, używany do opowiadania historii, świętowania i tańca.`,
        descriptionTitle: "Djembe",
    },
    {
        image: Dragon,
        x: 1210,
        y: 210,
        descriptionImage: "",
        descriptionText: `Chiński smok to symbol szczęścia, siły i mądrości. W Chinach smok nie jest groźnym potworem, a przyjaznym stworzeniem. Jest często przedstawiany podczas świąt i parad, np. w czasie chińskiego Nowego Roku.`,
        descriptionTitle: "Smok",
    },
    {
        image: Eagle,
        x: 415,
        y: 170,
        descriptionImage: "",
        descriptionText: `Orzeł bielik to majestatyczny ptak, który jest symbolem Stanów Zjednoczonych. Ma bardzo dobry wzrok i potrafi wypatrzyć rybę z odległości kilku kilometrów. Gniazda bielików są jednymi z największych na świecie – mogą ważyć nawet 2 tony!`,
        descriptionTitle: "Orzeł bielik",
    },
    {
        image: Elephant,
        x: 1157,
        y: 450,
        descriptionImage: "",
        descriptionText: `Słonie są największymi zwierzętami lądowymi na świecie. Mają bardzo długą pamięć i potrafią rozpoznać swoich przyjaciół po latach rozłąki. Trąby słoni są bardzo silne, ale również bardzo zwinne, potrafią podnieść nawet małego orzeszka.`,
        descriptionTitle: "Słoń",
    },
    {
        image: Frida,
        x: 324,
        y: 517,
        descriptionImage: "",
        descriptionText: `Frida Kahlo była słynną meksykańską malarką. Jest znana z portretów, na których często malowała siebie, żeby wyrazić swoje uczucia. Jej dom w Meksyku, „Niebieski Dom”, jest teraz muzeum, które odwiedzają ludzie z całego świata.`,
        descriptionTitle: "Frida Kahlo",
    },
    {
        image: Frog,
        x: 578,
        y: 728,
        descriptionImage: "",
        descriptionText: `Pewne żaby w Ameryce Południowej, zwane „drzewołazami”, mają bardzo jaskrawe, kolorowe skóry. Jest to sygnał dla innych zwierząt, że są bardzo trujące. Dzięki temu ostrzeżeniu nie mają wielu wrogów i mogą żyć spokojnie.`,
        descriptionTitle: "Żaba",
    },
    {
        image: Giraffe,
        x: 839,
        y: 604,
        descriptionImage: "",
        descriptionText: `Żyrafa jest najwyższym zwierzęciem na świecie. Długa szyja pomaga jej jeść liście z najwyższych gałęzi drzew. Żyrafy śpią tylko kilka minut w ciągu doby i rzadko kładą się spać.`,
        descriptionTitle: "Żyrafa",
    },

    {
        image: Hamburger,
        x: 526,
        y: 313,
        descriptionImage: "",
        descriptionText: `Hamburger to jedno z najpopularniejszych dań na świecie, a wywodzi się z miasta Hamburg w Niemczech, ale popularność zdobył w Stanach Zjednoczonych. W 1904 roku na Światowych Targach w St. Louis został po raz pierwszy podany w bułce, co stało się początkiem jego światowej kariery.`,
        descriptionTitle: "Hamburger",
    },
    {
        image: Hockey,
        x: 319,
        y: 248,
        descriptionImage: "",
        descriptionText: `Hokej na lodzie to sport narodowy w Kanadzie, gdzie grają w niego wszyscy, od małych dzieci po dorosłych. W grze używa się kija, żeby trafić krążek do bramki przeciwnika. Krążek, zrobiony z twardej gumy, bywa zamrożony, żeby nie odbijał się tak mocno od lodu.`,
        descriptionTitle: "Hokej",
    },
    {
        image: Iceberg,
        x: 887,
        y: 890,
        descriptionImage: "",
        descriptionText: `Góry lodowe to ogromne bryły lodu, które oderwały się od lodowca i dryfują w morzu. Najczęściej widać tylko małą część góry lodowej, a aż 90% jej masy jest ukryte pod wodą!`,
        descriptionTitle: "Góra lodowa",
    },
    {
        image: Jesus,
        x: 537,
        y: 572,
        descriptionImage: "",
        descriptionText: `Ogromny posąg Jezusa Chrystusa w Rio de Janeiro w Brazylii jest jednym z najsłynniejszych zabytków na świecie. Znajduje się na szczycie góry Corcovado i widać go z każdego miejsca w mieście. Pomnik ma 30 metrów wysokości, a wraz z cokołem 38 metrów i waży 635 ton.`,
        descriptionTitle: "Jezus z Rio",
    },
    {
        image: Jug,
        x: 928,
        y: 398,
        descriptionImage: "",
        descriptionText: `Nie ma na mapie dzbanka. Może chodziło o inny przedmiot? Jeśli chodzi o pitos, tradycyjny grecki dzbanek, używano go do przechowywania wina i oliwy.`,
        descriptionTitle: "Dzbanek (brak kontekstu)",
    },
    {
        image: Kangaroo,
        x: 1235,
        y: 669,
        descriptionImage: "",
        descriptionText: `Kangury są symbolem Australii. Są torbaczami, co oznacza, że noszą swoje młode w specjalnej torbie na brzuchu. Potrafią skakać bardzo szybko, nawet 60 km/h.`,
        descriptionTitle: "Kangur",
    },
    {
        image: Maasai,
        x: 720,
        y: 458,
        descriptionImage: "",
        descriptionText: `Maasai to lud pasterski mieszkający we Wschodniej Afryce. Są znani z tradycyjnych strojów i skocznego tańca adumu, który polega na wyskokach w górę, aby pokazać swoją siłę i sprawność.`,
        descriptionTitle: "Maasai",
    },
    {
        image: Panda,
        x: 1097,
        y: 278,
        descriptionImage: "",
        descriptionText: `Pandy wielkie mieszkają w górach w środkowych Chinach. Jedzą prawie wyłącznie bambus – potrafią zjeść do 20 kilogramów dziennie! Są bardzo spokojne i spędzają większość czasu na jedzeniu i spaniu.`,
        descriptionTitle: "Panda",
    },
    {
        image: Penguin,
        x: 978,
        y: 876,
        descriptionImage: "",
        descriptionText: `Pingwiny mieszkają na Antarktydzie. Chodzą w śmieszny, chwiejny sposób, ale w wodzie są niesamowicie zwinne. Potrafią nurkować bardzo głęboko i pływać z dużą prędkością, co pomaga im polować na ryby.`,
        descriptionTitle: "Pingwin",
    },
    {
        image: PolarBear,
        x: 609,
        y: 130,
        descriptionImage: "",
        descriptionText: `Misie polarne mieszkają na dalekiej północy, w rejonach Arktyki. Ich sierść nie jest biała, a przezroczysta, więc odbija światło. To sprawia, że wyglądają na białe. Potrafią świetnie pływać i spędzać dużo czasu w lodowatej wodzie.`,
        descriptionTitle: "Niedźwiedź polarny",
    },
    {
        image: Reindeer,
        x: 1079,
        y: 105,
        descriptionImage: "",
        descriptionText: `Rysunek na mapie pokazuje renifera w Rosji. Zwierzęta te zamieszkują najzimniejsze regiony świata. Mają specjalne kopyta, które pomagają im chodzić po śniegu i lodzie. W zimie ich futro na kopytach staje się grubsze, co zapewnia im dodatkową przyczepność.`,
        descriptionTitle: "Renifer",
    },
    {
        image: Spaghetti,
        x: 789,
        y: 365,
        descriptionImage: "",
        descriptionText: `Włochy i spaghetti nie są reprezentowane na mapie, ale to popularne danie. Legenda głosi, że makaron pochodzi z Chin i został przywieziony do Włoch przez Marco Polo.`,
        descriptionTitle: "Spaghetti (brak kontekstu)",
    },
    {
        image: Statue,
        x: 427,
        y: 337,
        descriptionImage: "",
        descriptionText: `Statua Wolności w Nowym Jorku była prezentem od Francji dla Stanów Zjednoczonych. Jej pełna nazwa to „Wolność Opromieniająca Świat”. Wewnątrz statuy jest muzeum, a na górę, do korony, można wejść, pokonując aż 354 schody!`,
        descriptionTitle: "Statua Wolności",
    },
    {
        image: Temple,
        x: 1331,
        y: 353,
        descriptionImage: "",
        descriptionText: `Świątynia w Japonii na mapie to świątynia buddyjska. Japońskie świątynie są często budowane z drewna i mają piękne ogrody, które pomagają w medytacji i relaksie.`,
        descriptionTitle: "Świątynia",
    },
    {
        image: Totem,
        x: 260,
        y: 96,
        descriptionImage: "",
        descriptionText: `Totemy to rzeźbione, drewniane słupy, które tworzyli rdzenni mieszkańcy Ameryki Północnej. Każdy totem opowiada historię rodziny lub plemienia, a każdy wyrzeźbiony na nim wizerunek, np. orła czy niedźwiedzia, ma symboliczne znaczenie.`,
        descriptionTitle: "Totem",
    },
    {
        image: Toucan,
        x: 444,
        y: 836,
        descriptionImage: "",
        descriptionText: `Tukan to ptak o niezwykle dużym i kolorowym dziobie. Choć wygląda na ciężki, jego dziób jest bardzo lekki, a używa go do łapania owoców i odstraszania drapieżników. Tukan ma także zdolność regulowania temperatury ciała poprzez krążenie krwi w dziobie.`,
        descriptionTitle: "Tukan",
    },
    {
        image: Turtle,
        x: 202,
        y: 700,
        descriptionImage: "",
        descriptionText: `Żółwie morskie są niesamowitymi podróżnikami. Potrafią przepłynąć tysiące kilometrów, żeby złożyć jaja na tej samej plaży, na której same się wykluły. Oddychają powietrzem, więc muszą regularnie wypływać na powierzchnię, ale potrafią wstrzymać oddech nawet na kilka godzin.`,
        descriptionTitle: "Żółw morski",
    },
    {
        image: Ukulele,
        x: 66,
        y: 500,
        descriptionImage: "",
        descriptionText: `Ukulele to mały instrument muzyczny, podobny do gitary, który pochodzi z Hawajów. Jego nazwa oznacza po hawajsku „skaczącą pchłę”. Nazwę tę zawdzięcza to instrument temu, jak palce muzyków poruszają się szybko po jego strunach.`,
        descriptionTitle: "Ukulele",
    },
    {
        image: Viking,
        x: 793,
        y: 177,
        descriptionImage: "",
        descriptionText: `Wikingowie byli świetnymi żeglarzami. Zamiast kompasu używali do nawigacji słońca, gwiazd, a nawet… mew i kruków! Byli pierwszymi Europejczykami, którzy dotarli do Ameryki Północnej.`,
        descriptionTitle: "Wiking",
    },
    {
        image: Whale,
        x: 1454,
        y: 553,
        descriptionImage: "",
        descriptionText: `Płetwal błękitny, przedstawiony na mapie, to największe zwierzę na świecie, większe od jakiegokolwiek dinozaura! Wieloryby to ssaki, które oddychają powietrzem, ale potrafią zanurzyć się pod wodą na bardzo długo.`,
        descriptionTitle: "Wieloryb",
    },
]

