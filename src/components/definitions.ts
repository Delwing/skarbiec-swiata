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
        descriptionText: `Niedźwiedzie brunatne są jednymi z największych drapieżników lądowych. Potrafią biegać bardzo szybko, nawet do 56 km/h – czyli prawie tak szybko jak samochód w mieście!`,
        descriptionTitle: "Niedźwiedź brunatny",
    },
    {
        image: BigBen,
        x: 701,
        y: 288,
        descriptionImage: "",
        descriptionText: `Big Ben to nazwa wielkiego dzwonu w wieży zegarowej w Londynie. Sama wieża obecnie nazywa się Wieżą Elżbiety. Zegar słynie z niezwykłej dokładności i jest jednym z symboli Wielkiej Brytanii.`,
        descriptionTitle: "Big Ben",
    },
    {
        image: Boomerang,
        x: 1353,
        y: 799,
        descriptionImage: "",
        descriptionText: `Bumerang to tradycyjny przedmiot Aborygenów z Australii. Są bumerangi, które wracają do rzucającego, ale te do polowania zwykle nie wracały. Wierzono też, że bumerangi miały magiczną moc powracania jak duch.`,
        descriptionTitle: "Bumerang",
    },
    {
        image: Buddah,
        x: 1057,
        y: 383,
        descriptionImage: "",
        descriptionText: `Budda, czyli Siddhartha Gautama, był mędrcem żyjącym w Indiach ponad 2,500 lat temu. Jego nauki stały się podstawą buddyzmu – jednej z największych religii świata.`,
        descriptionTitle: "Budda",
    },
    {
        image: Camel,
        x: 899,
        y: 498,
        descriptionImage: "",
        descriptionText: `Wielbłądzie garby to magazyny tłuszczu, nie wody! Dzięki nim mogą długo wytrzymać bez jedzenia. Kiedy już piją, potrafią wypić naraz nawet 100 litrów wody. Niektórzy myślą, że wielbłądy trzymają wodę w garbach – ale to nieprawda.`,
        descriptionTitle: "Wielbłąd",
    },
    {
        image: Car,
        x: 230,
        y: 428,
        descriptionImage: "",
        descriptionText: `Pierwszym masowo produkowanym samochodem był Ford Model T. Początkowo można go było kupić w różnych kolorach, ale od 1914 roku był produkowany tylko w czarnym. Żartobliwie mówiono, że „można go mieć w każdym kolorze, pod warunkiem że jest czarny”.`,
        descriptionTitle: "Samochód",
    },
    {
        image: Cathedral,
        x: 939,
        y: 205,
        descriptionImage: "",
        descriptionText: `Sobór Wasyla Błogosławionego w Moskwie to jedna z najbardziej kolorowych cerkwi świata. Kopuły wyglądają jak bajkowe cukierki. Legenda głosi, że car Iwan Groźny kazał oślepić architekta, żeby nie stworzył już nic piękniejszego – ale nie ma na to dowodów historycznych.`,
        descriptionTitle: "Sobór Wasyla Błogosławionego",
    },
    {
        image: Clownfish,
        x: 1026,
        y: 752,
        descriptionImage: "",
        descriptionText: `Błazenki, znane z filmu „Gdzie jest Nemo?”, mieszkają w ukwiałach trujących dla innych ryb. Dają ukwiałowi ochronę przed pasożytami, a same zyskują bezpieczny dom.`,
        descriptionTitle: "Błazenek",
    },
    {
        image: Dancer,
        x: 438,
        y: 629,
        descriptionImage: "",
        descriptionText: `Samba to żywiołowy taniec i symbol Brazylii. Powstała w Rio de Janeiro, ale wywodzi się z religijnych tańców Afrykańskich. Podczas karnawału tancerki występują w bardzo kolorowych, ozdobnych strojach, często używają sztucznych kolorowych piór.`,
        descriptionTitle: "Tancerka",
    },
    {
        image: Djembe,
        x: 797,
        y: 750,
        descriptionImage: "",
        descriptionText: `Djembe to bęben z Afryki Zachodniej. Grano na nim w czasie spotkań, tańców i świąt, wierząc, że dźwięk bębna łączy ludzi i przywołuje dobre duchy. Nazwa djembe wzięła się od powiedzenia ludzi afrykańskich Bambara – “Anke djé, anke bé” co tłumaczy się jako “gromadźmy się w pokoju”.`,
        descriptionTitle: "Djembe",
    },
    {
        image: Dragon,
        x: 1210,
        y: 210,
        descriptionImage: "",
        descriptionText: `Chińskie smoki nie są groźne, lecz utożsamiane ze szczęściem, siłą i mądrością. Wierzono, że smok włada deszczem i wodą. Najczęściej można go spotkać na paradach, np. podczas chińskiego Nowego Roku.`,
        descriptionTitle: "Smok",
    },
    {
        image: Eagle,
        x: 415,
        y: 170,
        descriptionImage: "",
        descriptionText: `Orzeł bielik białogłowy to symbol Stanów Zjednoczonych. Ma doskonały wzrok i potrafi wypatrzyć rybę z ogromnej odległości. Jego gniazda mogą ważyć nawet ponad tonę!`,
        descriptionTitle: "Orzeł bielik białogłowy",
    },
    {
        image: Elephant,
        x: 1157,
        y: 450,
        descriptionImage: "",
        descriptionText: `Słonie to największe zwierzęta lądowe na świecie. Mają świetną pamięć i trąbę, która jest jednocześnie bardzo silna i na tyle precyzyjna, że potrafi podnieść nawet malutki orzeszek. Wierzy się też, że słonie nigdy niczego nie zapominają.`,
        descriptionTitle: "Słoń",
    },
    {
        image: Frida,
        x: 324,
        y: 517,
        descriptionImage: "",
        descriptionText: `Frida Kahlo była meksykańską malarką, która malowała głównie autoportrety, pokazując swoje emocje i przeżycia. Jej „Niebieski Dom” w Meksyku jest dziś muzeum.`,
        descriptionTitle: "Frida Kahlo",
    },
    {
        image: Frog,
        x: 578,
        y: 728,
        descriptionImage: "",
        descriptionText: `Kolorowe żaby z Ameryki Południowej, zwane drzewołazami, mają w skórze silne toksyny. Jaskrawe barwy ostrzegają inne zwierzęta: „lepiej mnie nie jedz!”.`,
        descriptionTitle: "Żaba",
    },
    {
        image: Giraffe,
        x: 839,
        y: 604,
        descriptionImage: "",
        descriptionText: `Żyrafa jest najwyższym zwierzęciem na świecie. Dzięki swojej długiej szyi sięga po liście nawet z najwyższych drzew. Śpi bardzo krótko – zwykle tylko około 1-2 godzin dziennie.`,
        descriptionTitle: "Żyrafa",
    },

    {
        image: Hamburger,
        x: 526,
        y: 313,
        descriptionImage: "",
        descriptionText: `Hamburger to popularna potrawa, której nazwa pochodzi od miasta Hamburg w Niemczech. Największą sławę zdobył jednak w Stanach Zjednoczonych. Legenda mówi, że po raz pierwszy podano go w bułce na targach w 1904 roku.`,
        descriptionTitle: "Hamburger",
    },
    {
        image: Hockey,
        x: 319,
        y: 248,
        descriptionImage: "",
        descriptionText: `Hokej na lodzie to sport, w którym zawodnicy starają się trafić krążkiem do bramki przeciwnika. Jest narodowym sportem Kanady, a krążek zrobiony z twardej gumy czasem specjalnie się mrozi, by mniej się odbijał.`,
        descriptionTitle: "Hokej",
    },
    {
        image: Iceberg,
        x: 887,
        y: 890,
        descriptionImage: "",
        descriptionText: `Góry lodowe to ogromne kawały lodu oderwane od lodowca, które dryfują po morzu. Widać tylko małą część góry, a aż 90% jej masy ukryte jest pod wodą!`,
        descriptionTitle: "Góra lodowa",
    },
    {
        image: Jesus,
        x: 537,
        y: 572,
        descriptionImage: "",
        descriptionText: `Posąg Jezusa Chrystusa w Rio de Janeiro ma 30 metrów wysokości, a razem z cokołem 38 metrów. Widać go z wielu miejsc w mieście i jest jednym z symboli Brazylii. Niektórzy wierzyli, że rozpostarte ramiona posągu chronią całe miasto.`,
        descriptionTitle: "Jezus z Rio",
    },
    {
        image: Jug,
        x: 928,
        y: 398,
        descriptionImage: "",
        descriptionText: `Dzbanki były używane przez wiele kultur. W starożytnej Grecji duże dzbany zwane pitosami służyły do przechowywania wina i oliwy.`,
        descriptionTitle: "Dzbanek",
    },
    {
        image: Kangaroo,
        x: 1235,
        y: 669,
        descriptionImage: "",
        descriptionText: `Kangury to symbol Australii. Jako torbacze noszą małe w specjalnej torbie. Potrafią skakać z prędkością nawet 60 km/h. W dawnych wierzeniach Aborygenów kangur był opiekunem ziemi i podróży.`,
        descriptionTitle: "Kangur",
    },
    {
        image: Maasai,
        x: 720,
        y: 458,
        descriptionImage: "",
        descriptionText: `Maasai (Masajowie) to lud pasterski z Afryki Wschodniej. Znani są z czerwonych strojów i tańca adumu, w którym młodzi mężczyźni pokazują swoją siłę, skacząc jak najwyżej.`,
        descriptionTitle: "Maasai",
    },
    {
        image: Panda,
        x: 1097,
        y: 278,
        descriptionImage: "",
        descriptionText: `Pandy wielkie żyją w górzystych lasach Chin. Prawie cały dzień jedzą bambus – aż do 20 kilogramów dziennie i w przeciwieństwie do żyraf - bardzo długą śpią! W chińskich opowieściach panda była symbolem pokoju.`,
        descriptionTitle: "Panda",
    },
    {
        image: Penguin,
        x: 978,
        y: 876,
        descriptionImage: "",
        descriptionText: `Pingwiny to doskonałe pływaki. Choć na lądzie chodzą śmiesznie i chwieją się, w wodzie potrafią pływać bardzo szybko i nurkować głęboko w poszukiwaniu ryb. Pingwiny mają coś wspólnego z ludźmi - jako jedyne ptaki chodzą w pionie.. i odczuwają łaskotki!`,
        descriptionTitle: "Pingwin",
    },
    {
        image: PolarBear,
        x: 609,
        y: 130,
        descriptionImage: "",
        descriptionText: `Niedźwiedzie polarne żyją w Arktyce. Ich futro wydaje się białe, ale w rzeczywistości włosy są przezroczyste i odbijają światło. Wierzono, że są władcami lodu i północy.`,
        descriptionTitle: "Niedźwiedź polarny",
    },
    {
        image: Reindeer,
        x: 1079,
        y: 105,
        descriptionImage: "",
        descriptionText: `Renifery żyją w zimnych rejonach północy. Ich kopyta zmieniają się w zależności od pory roku – latem są miękkie, a zimą twardnieją i pomagają chodzić po lodzie i śniegu. W wielu legendach to właśnie one ciągną sanie Świętego Mikołaja.`,
        descriptionTitle: "Renifer",
    },
    {
        image: Spaghetti,
        x: 789,
        y: 365,
        descriptionImage: "",
        descriptionText: `Spaghetti to danie pochodzące z Włoch. Makaron znano w Europie już przed wyprawami Marco Polo, ale przez lata opowiadano legendę, że to on przywiózł go z Chin. Lubicie spaghetti?`,
        descriptionTitle: "Spaghetti",
    },
    {
        image: Statue,
        x: 427,
        y: 337,
        descriptionImage: "",
        descriptionText: `Statua Wolności w Nowym Jorku to prezent od Francji dla Stanów Zjednoczonych. Jej pełna nazwa brzmi „Wolność Opromieniająca Świat”. Do korony prowadzi 354 schody. Niektórzy wierzyli, że statua wita ludzi przypływających z marzeniami o „nowym życiu”.`,
        descriptionTitle: "Statua Wolności",
    },
    {
        image: Temple,
        x: 1331,
        y: 353,
        descriptionImage: "",
        descriptionText: `Świątynie buddyjskie w Japonii często budowane są z drewna i otoczone pięknymi ogrodami, które sprzyjają medytacji i skupieniu. Wierzono, że w ogrodach mieszkają duchy opiekuńcze.`,
        descriptionTitle: "Świątynia",
    },
    {
        image: Totem,
        x: 260,
        y: 96,
        descriptionImage: "",
        descriptionText: `Totemy to rzeźbione drewniane słupy tworzone przez rdzennych mieszkańców Ameryki Północnej. Każdy symbol miał znaczenie, a wierzono, że duchy zwierząt strzegą rodu wyrytego na totemie.`,
        descriptionTitle: "Totem",
    },
    {
        image: Toucan,
        x: 444,
        y: 836,
        descriptionImage: "",
        descriptionText: `Tukan wyróżnia się ogromnym i kolorowym dziobem. Choć wygląda ciężko, jest bardzo lekki. Dzięki niemu tukan łapie owoce i może też regulować temperaturę ciała.`,
        descriptionTitle: "Tukan",
    },
    {
        image: Turtle,
        x: 202,
        y: 700,
        descriptionImage: "",
        descriptionText: `Żółwie morskie wędrują tysiące kilometrów przez oceany, by złożyć jaja na tej samej plaży, gdzie same przyszły na świat. Wierzono, że żółwie niosą świat na swoich grzbietach.`,
        descriptionTitle: "Żółw morski",
    },
    {
        image: Ukulele,
        x: 66,
        y: 500,
        descriptionImage: "",
        descriptionText: `Ukulele to mały instrument strunowy z Hawajów. Jego nazwa znaczy „skacząca pchła”, bo palce muzyków szybko poruszają się po strunach.`,
        descriptionTitle: "Ukulele",
    },
    {
        image: Viking,
        x: 793,
        y: 177,
        descriptionImage: "",
        descriptionText: `Wikingowie byli świetnymi żeglarzami. Do nawigacji używali słońca, gwiazd i ptaków, a ich statki docierały aż do Ameryki Północnej. Według legend odkrywali też mityczne krainy, takie jak Vinland.`,
        descriptionTitle: "Wiking",
    },
    {
        image: Whale,
        x: 1454,
        y: 553,
        descriptionImage: "",
        descriptionText: `Płetwal błękitny to największe zwierzę na świecie – większe od jakiegokolwiek dinozaura. Choć żyje w wodzie, jest ssakiem i oddycha powietrzem. W dawnych wierzeniach wieloryby były uważane za strażników oceanu.`,
        descriptionTitle: "Wieloryb",
    },
]

