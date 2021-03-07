const countries = [
  {
    id: "1",
    nameEN: "Czech Republic",
    nameRU: "Чешская Республика",
    capitalEN: "Prague",
    capitalRU: "Прага",
    regionEN: "Europe",
    regionRU: "Европа",
    population: "10558524",
    latlng: ["50.073658", "14.418540"],
    area: "78865.0",
    capitalTimezone: "UTC+01:00",
    bordersEN: ["Austria", "Germany", "Poland", "Slovakia"],
    bordersRU: ["Австрия", "Германия", "Польша", "Словакия"],
    currencies: [
      {
        code: "CZK",
        nameEN: "Czech koruna",
        nameRU: "Чешская крона",
        symbol: "Kč",
      },
    ],
    languages: [{ nameEN: "Czech", nameRU: "Чешский", nativeName: "čeština" }],
    flag: "https://restcountries.eu/data/cze.svg",
    photo:
      "https://images.unsplash.com/photo-1541849546-216549ae216d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJhZ3VlfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80",
    video:
      "https://www.youtube.com/watch?v=MRGv2TY6S_o&ab_channel=KirillNeiezhmakovTimelapse%26Hyperlapse",
    attractions: [
      {
        "attraction-nameEN": "Prague Castle",
        "attraction-nameRU": "Пражский Град",
        description:
          "For most travelers, the focal point of a visit to the Czech Republic is Prague Castle (Praský hrad). It's on all Prague itineraries. Located in the city's Hradcany neighborhood and dating from the late 10th century, Prague Castle has been central to Eastern European history for centuries, and has been home to Holy Roman Emperors, the Habsburgs, Bohemian kings and, more recently, the Czech Republic's President. Over the course of its 1,000-year history, the castle - the largest in the world in terms of area - has undergone many dramatic changes in architectural style, evidence of which can be seen in the numerous buildings constructed within its walls through the centuries. Highlights of the castle include beautiful St. Vitus Cathedral, St. George's Basilica, the Powder Tower, and the Golden Lane with its medieval workshops. Of particular note is the Old Royal Palace with its magnificent Vladislav Hall, so big it was used to host knightly jousting tournaments, as well as the adjoining 16th-century Royal Garden with its spectacular Singing Fountain. English language guided tours and audio-guides are available. Address: 119 08 Prague 1",
        descriptionRU:
          "Для большинства путешественников целью посещения Чешской Республики является Пражский Град (Pražský hrad). Пражский Град, расположенный в районе Градчаны и построенный в конце 10 века, на протяжении веков был центральным элементом истории Восточной Европы и был домом для императоров Священной Римской империи, Габсбургов, чешских королей и, с недавних пор, президента Чешской Республики. За свою 1000-летнюю историю замок - самый большой в мире по площади - претерпел множество драматических изменений в архитектурном стиле, свидетельство которых можно увидеть в многочисленных зданиях, построенных в его стенах на протяжении веков. Основные моменты замка включают красивый собор Святого Вита, базилику Святого Георгия, Пороховую башню и Золотую улочку с ее средневековыми мастерскими. Особо следует отметить Старый Королевский дворец с его великолепным Владиславским залом, настолько большим, что он использовался для проведения рыцарских рыцарских турниров, а также прилегающий Королевский сад 16-го века с его впечатляющим Поющим фонтаном. Доступны экскурсии на английском языке и аудиогиды. Адрес: 119 08 Прага 1",
        photo:
          "https://www.planetware.com/photos-large/CZ/czech-republic-prague-castle.jpg",
        link: "https://en.wikipedia.org/wiki/Prague_Castle",
      },
      {
        "attraction-nameEN": "Prague's Charles Bridge",
        "attraction-nameRU": "Карлов Мост в Праге",
        descriptionEN:
          "Charles Bridge (Karluv Most). This famous structure spanning the River Vltava was built in 1357 and has many unique points of interest along its 520-meter span, including numerous fine statues. Perhaps the most famous are those of the bridge's namesake, Holy Roman Emperor Charles IV, as well as the 1683 statue of John of Nepomuk, which honors the country's most revered saint who, ironically, was deliberately drowned in the Vltava. The bridge is extremely popular with tourists and photographers for its fine views. Some of the best views are actually captured during off-peak hours, at dawn and at dusk, making for a much less crowded visit.",
        descriptionRU:
          "Карлов мост (Карлов мост). Это знаменитое сооружение на реке Влтава было построено в 1357 году и имеет множество уникальных достопримечательностей на протяжении 520 метров, в том числе многочисленные прекрасные статуи. Пожалуй, самые известные из них - это памятники тезки моста, императора Священной Римской империи Карла IV, а также статуя 1683 года Иоанна Непомуцкого, в честь самого почитаемого святого страны, который, по иронии судьбы, был намеренно утоплен во Влтаве. Мост очень популярен среди туристов и фотографов из-за прекрасных видов. Некоторые из лучших видов на самом деле снимаются в непиковые часы, на рассвете и в сумерках, что делает посещение гораздо менее многолюдным.",
        photo:
          "https://www.planetware.com/photos-large/CZ/czech-republic-charles-bridge.jpg",
        link: "https://en.wikipedia.org/wiki/Charles_Bridge",
      },
      {
        "attraction-nameEN": "St. Vitus Cathedral",
        "attraction-nameRU": "Собор Святого Вита",
        descriptionEN:
          "Part of the Prague Castle complex, St. Vitus Cathedral is best known as the home of the Bohemian Coronation Jewels, as well as the tomb of the Czech people's most revered saint, St. Wenceslas. The cathedral has a long history. Dating back to the year 925, when Prince Wenceslas built a chapel on the site, the building grew along with Prague's importance, and it soon became a basilica after the Prague bishopric was established. There was another period of expansion between 1344 and 1419 when it began its transformation into a Gothic cathedral, and the St. Wenceslas Chapel was built. Construction and repairs resumed in the late 18th century, adding neo-Gothic elements. Highlights of a visit include seeing the bronze doors adorned with reliefs of the cathedral's history, ornate stained glass windows in the chapels, and the Royal Mausoleum. Tourists should be sure to visit St. Wenceslas Chapel to admire the murals, which are original 14th-century depictions of the stations of the cross, as well as scenes depicting the life of St. Wenceslas.",
        descriptionRU:
          "Являясь частью комплекса Пражского Града, собор Святого Вита наиболее известен как дом Богемских коронационных драгоценностей, а также гробница самого почитаемого святого чешского народа - Святого Вацлава. Собор имеет многовековую историю. Возникнув в 925 году, когда князь Вацлав построил на этом месте часовню, здание росло вместе с важностью Праги, и вскоре после основания Пражского епископства оно стало базиликой. Между 1344 и 1419 годами был еще один период расширения, когда он начал преобразовываться в готический собор и была построена часовня Святого Вацлава. Строительство и ремонт возобновились в конце 18 века с добавлением элементов неоготики. Основные моменты визита включают посещение бронзовых дверей, украшенных рельефами истории собора, витражей в часовнях и Королевского мавзолея. Туристам обязательно стоит посетить часовню Святого Вацлава, чтобы полюбоваться фресками, которые являются оригинальными изображениями крестных станций XIV века, а также сценами, изображающими жизнь Святого Вацлава.",
        photo:
          "https://www.planetware.com/photos-large/CZ/czech-republic-st-vitus-cathedral.jpg",
        link: "https://en.wikipedia.org/wiki/St._Vitus_Cathedral",
      },
      {
        "attraction-nameEN": "Ceský Krumlov Castle",
        "attraction-nameRU": "Крумловский замок",
        descriptionEN:
          "Dominating the old town after which it's named, Ceský Krumlov Castle is remarkably well preserved given its age. Dating from the 13th century, much of what stands today in this UNESCO World Heritage Site stems from the 17th century, including the Rosenberg Ballroom and the Renaissance Hall, the Royal Apartments, and the Chapel of St. George. Also worth seeing is the castle's old Baroque theater. Built in 1682, it's still used for special performances. Other highlights include historic collections of paintings and tapestries, along with fine décor and period furniture. The Ceský Krumlov Castle complex comprises 40 buildings, including fine old palaces, castle courts, and gardens. Tourists could easily spend several days wandering the grounds, although those who want to see the highlights may enjoy one of the English language guided tours that are available.",
        descriptionRU:
          "Замок Чески-Крумлов, возвышающийся над старым городом, в честь которого он назван, прекрасно сохранился с учетом своего возраста. Датируемое 13 веком, большая часть того, что стоит сегодня в этом объекте Всемирного наследия ЮНЕСКО, восходит к 17 веку, в том числе Бальный зал Розенберга и Зал эпохи Возрождения, Королевские апартаменты и часовня Св. Джордж. Также стоит посетить старый барочный театр замка. Построенный в 1682 году, он до сих пор используется для специальных представлений. Другие достопримечательности включают исторические коллекции картин и гобеленов, а также изысканный декор и старинную мебель. Замковый комплекс Чески-Крумлов состоит из 40 зданий, в том числе прекрасных старинных дворцов, замковых дворов и садов. Туристы могут легко провести несколько дней, блуждая по территории, хотя те, кто хочет увидеть основные моменты, могут насладиться одной из доступных экскурсий на английском языке.",
        photo:
          "https://www.planetware.com/photos-large/CZ/czech-republic-cesky-krumlov-castle-2.jpg",
        link: "https://en.wikipedia.org/wiki/%C4%8Cesk%C3%BD_Krumlov_Castle",
      },
      {
        "attraction-nameEN": "Brno's Cathedral of St. Peter and Paul",
        "attraction-nameRU": "Брненский собор Святых Петра и Павла",
        descriptionEN:
          "High above the old city of Brno is the beautiful Cathedral of St. Peter and Paul, one of the Czech Republic's most important national monuments. The site of the cathedral first held an 11th-century Romanesque chapel that was later expanded to include a crypt and a basilica, the remains of which can still be seen. Eventually rebuilt as a Gothic cathedral during the 18th century, the interior is a Baroque masterpiece designed by architect Moric Grimm. Among its most remarkable features are the Kapistránka pulpit and the crypt, which is home to not only tombs but the remnants of Brno's original city walls. Added in the early 20th century, the building's two 84-meter-high towers are home to the church bell that rings each day at 11am, instead of noon. This tradition has been carried on to remember the city's successful attempt to trick an attacking army into abandoning their siege after the general had announced that they would give up if they had not taken the town by noon. Also in Brno is the 13th-century Spilberk Castle (hrad Spilberk), home to the Brno City Museum, as well as the fascinating Tugendhat Villa, built in 1930 and one of the most important examples of modern architecture from the early 20th century in Europe.",
        descriptionRU:
          "Высоко над старым городом Брно находится красивый собор Святых Петра и Павла, один из важнейших национальных памятников Чешской Республики. На месте собора сначала находилась романская часовня 11-го века, которая позже была расширена за счет склепа и базилики, остатки которых все еще можно увидеть. В конечном итоге перестроенный в готический собор в 18 веке, интерьер представляет собой шедевр барокко, спроектированный архитектором Мориком Гриммом. Среди его наиболее примечательных особенностей - кафедра Капистранка и склеп, в котором находятся не только гробницы, но и остатки оригинальных городских стен Брно. Две башни высотой 84 метра, пристроенные в начале 20 века, являются домом для церковного колокола, который звонит каждый день в 11 утра, а не в полдень. Эта традиция была продолжена, чтобы вспомнить успешную попытку города обманом заставить атакующую армию отказаться от осады после того, как генерал объявил, что они сдадутся, если они не захватят город к полудню. Также в Брно находится замок Шпильберк 13-го века (hrad Spilberk), где находится городской музей Брно, а также очаровательная вилла Тугендхат, построенная в 1930 году и являющаяся одним из самых важных образцов современной архитектуры начала 20-го века в Европе.",
        photo:
          "https://www.planetware.com/photos-large/CZ/czech-republic-brno-cathedral-of-st-peter-paul.jpg",
        link:
          "https://en.wikipedia.org/wiki/Cathedral_of_St._Peter_and_Paul,_Brno",
      },
      {
        "attraction-nameEN":
          "Bone Collectors: Czech Crypts, Tombs, and Cemeteries",
        "attraction-nameRU": "Костницы: чешские склепы, гробницы и кладбища",
        descriptionEN:
          "Spread across the Czech Republic are a number of fascinating locations dedicated to preserving the remains of those slain in war or killed by diseases such as the terrible plagues that gripped Europe in medieval times. But what makes these places even more interesting are the often bizarre ways in which these centuries-old human relics are displayed. Nowhere is this more evident than in the small town of Sedlec, home to the famous 'Bone Church,' the Gothic All Saints Chapel. Here in the Sedlec Ossuary, the curious will be rewarded with a chance to see the remains of some 70,000 people who died between the 14th and 16th centuries displayed in rather chilling artistic fashion, including coats of arms, chandeliers, chalices, and bells. A similar effect was created at the Brno Ossuary where the remains of some 50,000 people were found stacked in heaps in archways and used as decorative displays and ornamentation. A little less spooky but impressive for its sheer size is the spectacular Schwartzenberg Tomb, a huge crypt dedicated to one of the country's most powerful dynasties.",
        descriptionRU:
          "По всей Чешской Республике находится ряд увлекательных мест, посвященных сохранению останков погибших на войне или от болезней, таких как ужасные эпидемии, охватившие Европу в средневековье. Но что делает эти места еще более интересными, так это зачастую причудливые способы демонстрации этих многовековых человеческих реликвий. Это особенно заметно в маленьком городке Седлец, где находится знаменитая «Костяная церковь», готическая часовня Всех Святых. Здесь, в костнице Седлеца, любопытные будут вознаграждены возможностью увидеть останки примерно 70 000 человек, умерших в период с 14 по 16 века, выставленные в пугающей художественной манере, включая гербы, люстры, чаши и колокольчики. Подобный эффект был создан в Брненской костнице, где останки около 50 000 человек были найдены сложенными в кучах в сводчатых проходах и использовались в качестве декоративных экспонатов и украшений. Немного менее жуткий, но впечатляющий своими размерами впечатляющая гробница Шварценберга, огромный склеп, посвященный одной из самых могущественных династий страны.",
        photo:
          "https://www.planetware.com/photos-large/CZ/czech-republic-crypts-tombs-cemeteries.jpg",
        link: "https://www.sedlec.info/en/",
      },
    ],
  },
  {
    id: "2",
    nameEN: "Norway",
    nameRU: "Норвегия",
    capitalEN: "Oslo",
    capitalRU: "Осло",
    regionEN: "Europe",
    regionRU: "Европа",
    population: "5223256",
    latlng: ["59.911491", "10.757933"],
    area: "323802.0",
    capitalTimezone: "UTC+01:00",
    bordersEN: ["Finland", "Sweden", "Russia"],
    bordersRU: ["Финляндия", "Швеция", "Россия"],
    currencies: [
      {
        code: "NOK",
        nameEN: "Norwegian krone",
        nameRU: "Норвежская крона",
        symbol: "kr",
      },
    ],
    languages: [
      {
        nameEN: "Norwegian Nynorsk",
        nameRU: "Норвежский",
        nativeName: "Norsk nynorsk",
      },
    ],
    flag: "https://restcountries.eu/data/nor.svg",
    photo:
      "https://www.theagilityeffect.com/app/uploads/2019/06/00_VINCI-ICONOGRAPHIE_GettyImages-673112427-1280x680.jpg",
    video:
      "https://www.youtube.com/watch?v=Acsnll2Xd2A&ab_channel=T.HaalandPhotography",
    attractions: [
      {
        "attraction-nameEN": "Sognefjord",
        "attraction-nameRU": "Согнефьорд",
        descriptionEN:
          "The largest of Norway's fjords, Sognefjord reaches 204 kilometers inland from the coastal village of Skjolden and branches off into countless smaller inlets and fjords along the way. At its widest, the King of the Fjords (as it's known by Norwegians) is almost five kilometers across, and the cliff walls reach as high as 1,307 meters, making a breathtaking sight.The most popular way to visit the fjord is by boat, and fjord cruises and sightseeing tours are plentiful. Many of the best tour options depart conveniently from the attractive town of Bergen (be sure to allow a full day for your adventure).",
        descriptionRU:
          "Самый большой из фьордов Норвегии, Согне-фьорд простирается на 204 километра вглубь страны от прибрежной деревни Скьолден и по пути разветвляется на бесчисленные меньшие бухты и фьорды. В самом широком месте Король фьордов (как его называют норвежцы) имеет ширину почти пять километров, а высота скал достигает 1307 метров, что делает захватывающее зрелище. Самый популярный способ посетить фьорд - на лодке. круизы по фьорду и экскурсии по городу многочисленны. Многие из лучших вариантов тура удобно отправляются из привлекательного города Берген (обязательно выделите целый день для вашего приключения).",
        photo:
          "https://www.planetware.com/photos-large/N/norway-attractions-sognefjord.jpg",
        link: "https://en.wikipedia.org/wiki/Sognefjord",
      },
      {
        "attraction-name": "Pulpit Rock (Preikestolen)",
        "attraction-nameRU": "Кафедра проповедника (Прекестулен)",
        descriptionEN:
          "A tourist attraction best suited for the active traveler thanks to the arduous journey required to get there, Pulpit Rock (Preikestolen) is nevertheless one of the most popular sights in Norway. Located near Stavanger, the destination requires ferry and bus rides and then a two-hour uphill hike to reach the almost perfectly flat-topped cliff, which looks over Lysefjord, more than 600 meters above the water.",
        descriptionRU:
          "Туристическая достопримечательность, наиболее подходящая для активных путешественников, благодаря трудному пути, необходимому для того, чтобы добраться туда, Кафедра Рок (Прекестулен), тем не менее, является одной из самых популярных достопримечательностей в Норвегии. Расположенный недалеко от Ставангера, пункт назначения требует поездки на пароме и автобусе, а затем двухчасового похода в гору, чтобы достичь почти идеально плоской скалы, которая смотрит на Люсе-фьорд, более чем на 600 метров над водой.",
        photo:
          "https://www.planetware.com/photos-large/N/norway-attractions-pulpit-rock.jpg",
        link: "https://en.wikipedia.org/wiki/Preikestolen",
      },
      {
        "attraction-nameEN": "Tromsø",
        "attraction-nameRU": "Тромсё",
        descriptionEN:
          "Situated 349 kilometers north of the Arctic Circle, Tromsø is best known for its important role as the base for many major Arctic expeditions since the mid 1800s. The Tromsø area was first settled in the 13th century as a fishing village, and the industry has been an integral part of life here ever since, contributing to the area's maritime charm",
        descriptionRU:
          "Расположенный в 349 км к северу от Полярного круга, Тромсё известен своей важной ролью базы для многих крупных арктических экспедиций с середины 1800-х годов. Район Тромсё был впервые основан в 13 веке как рыбацкая деревня, и с тех пор промышленность является неотъемлемой частью жизни здесь, внося свой вклад в морское очарование района",
        photo:
          "https://www.planetware.com/photos-large/N/norway-attractions-tromso.jpg",
        link: "https://en.wikipedia.org/wiki/Troms%C3%B8",
      },
      {
        "attraction-nameEN": "Lofoten Islands",
        "attraction-nameRU": "Лофотенские острова",
        descriptionEN:
          "The Lofoten Islands form an archipelago off the coast of northwestern Norway and are a popular tourist destination for Norwegians and foreigners alike. Thanks to the Gulf Stream, the weather here is mild despite its location within the Arctic Circle. Tourists come here to enjoy the beaches, explore traditional fishing villages, kayak, hike, and see the wildlife. These islands are also one of the best places to visit for a glimpse of the northern lights. There are plenty of attractions and things to do on the islands, especially in Svolvaer, which is the largest town, located on the southern coast of Austvågøy island. Here, you will find the Lofoten War Memorial Museum (Lofoten Krigsminnemuseum), with its World War II collections, and the unique Magic Ice Lofoten, which displays ice sculptures depicting local life. The Lofoten Museum, which explores the history of the island's fishing industry, is also located on Austvågøy, as is the Lofoten Aquarium (Lofotakvariet), which features Arctic sea life. Tourists can learn even more about the importance of fishing at the Norwegian Fishing Village Museum and the Lofoten Stockfish Museum, which are both located in the town of Å.",
        descriptionRU:
          "Лофотенские острова образуют архипелаг у побережья северо-западной Норвегии и являются популярным туристическим направлением как для норвежцев, так и для иностранцев. Благодаря Гольфстриму погода здесь мягкая, несмотря на то, что он находится за Полярным кругом. Туристы приезжают сюда, чтобы насладиться пляжами, исследовать традиционные рыбацкие деревни, покататься на байдарках, отправиться в поход и увидеть дикую природу. Эти острова также являются одним из лучших мест для посещения, чтобы увидеть северное сияние. На островах есть множество достопримечательностей и развлечений, особенно в Сволваере, самом большом городе, расположенном на южном побережье острова Ауствогёй. Здесь вы найдете Лофотенский военный мемориальный музей (Lofoten Krigsminnemuseum) с его коллекциями времен Второй мировой войны и уникальный Magic Ice Lofoten, где выставлены ледяные скульптуры, изображающие местную жизнь. Музей Лофотенских островов, который исследует историю рыбной промышленности острова, также расположен на острове Эствогёй, как и Лофотенский аквариум (Lofotakvariet), в котором представлена ​​арктическая морская жизнь. Еще больше туристы могут узнать о важности рыбалки в Норвежском музее рыбацкой деревни и Лофотенском музее вяленой рыбы, которые расположены в городе Å.",
        photo:
          "https://www.planetware.com/photos-large/N/norway-attractions-lofoten-islands.jpg",
        link: "https://en.wikipedia.org/wiki/Lofoten",
      },
      {
        "attraction-nameEN": "Viking Ship Museum",
        "attraction-nameRU": "Музей кораблей викингов",
        descriptionEN:
          "The largest of Norway's museums dedicated to their seafaring ancestors, the Viking Ship Museum (Vikingskipshuset på Bygdøy) in Oslo features three 9th-century Viking vessels, each of which had been laid to rest as burial chambers for prominent Vikings. The largest of these, the 70-foot Oseberg Ship, was built around AD 800. It contained a chieftan's wife and two other women along with many items that give insight into Viking life. The museum is also home to the Gokstad Ship, which is an impressive 23 meters long, and the Tune Ship. Visitors can also view several exhibits and films that focus on the importance of maritime life for that culture. The Viking Ships Museum is operated by the Museum of Cultural History, as is Oslo's Historical Museum, which contains artifacts from around the world and throughout history, from Egyptian mummies to the history of gold coins. One of Oslo's top attractions, it is also home to an expanding Viking Age exhibit, which contains a rare well-preserved Viking helmet. Address: Frederiks gate 2, 0164 Oslo",
        descriptionRU:
          "Самый большой из норвежских музеев, посвященных их предкам-мореплавателям, Музей кораблей викингов (Vikingskipshuset på Bygdøy) в Осло представляет три корабля викингов IX века, каждое из которых было захоронено в качестве погребальных камер для выдающихся викингов. Самый большой из них, 70-футовый корабль Осеберг, был построен примерно в 800 г. н.э. В нем находились жена вождя и две другие женщины, а также множество предметов, которые дают представление о жизни викингов. В музее также находится корабль Gokstad, длина которого впечатляет 23 метра, и корабль Tune. Посетители также могут посмотреть несколько выставок и фильмов, посвященных важности морской жизни для этой культуры. Музей кораблей викингов управляется Музеем истории культуры, как и Исторический музей Осло, в котором хранятся артефакты со всего мира и всей истории, от египетских мумий до истории золотых монет. Одна из главных достопримечательностей Осло, она также является домом для расширяющейся выставки эпохи викингов, в которой находится редкий хорошо сохранившийся шлем викингов. Адрес: Frederiks gate 2, 0164 Осло.",
        photo:
          "https://www.planetware.com/photos-large/N/norway-attractions-viking-ship-museum.jpg",
        link: "https://www.khm.uio.no/english/visit-us/viking-ship-museum/",
      },
      {
        "attraction-nameEN": "Akershus Fortress",
        "attraction-nameRU": "Крепость Акерхус",
        descriptionEN:
          "The Akershus Fortress (Akershus Festning) is a medieval castle commissioned by king Håkon V in 1299, later turned into a Renaissance royal residence by king Christian IV in the early 17th century. It sits on a promontory overlooking the Oslofjord, and the grounds have spectacular views over the harbor. Guided tours are available during the summer, and you can also find the Museum of the Norwegian Resistance (Norges Hjemmefrontmuseum) ) on the castle grounds. History buffs may also want to check out the Norwegian Armed Forces Museum (Forsvarsmuseet), which displays weapons and exhibits illustrating Norway's military history. The fortress grounds also provide a lovely backdrop for events including public ceremonies, concerts, and shows. Address: 0150 Oslo",
        descriptionRU:
          "Крепость Акерсхус (Akershus Festning) - средневековый замок, построенный по заказу короля Хокона V в 1299 году, позже преобразованный в королевскую резиденцию эпохи Возрождения королем Кристианом IV в начале 17 века. Он расположен на мысе с видом на Осло-фьорд, а с территории открываются захватывающие виды на гавань. Летом проводятся экскурсии с гидом, а на территории замка вы также можете найти Музей норвежского сопротивления (Norges Hjemmefrontmuseum). Любители истории могут также захотеть посетить Музей норвежских вооруженных сил (Forsvarsmuseet), в котором выставлено оружие и экспонаты, иллюстрирующие военную историю Норвегии. Территория крепости также является прекрасным фоном для проведения мероприятий, включая публичные церемонии, концерты и шоу. Адрес: 0150 Осло.",
        photo:
          "https://www.planetware.com/photos-large/N/norway-attractions-akershus-fortress.jpg",
        link: "https://en.wikipedia.org/wiki/Akershus_Fortress",
      },
    ],
  },
  {
    id: "3",
    nameEN: "Japan",
    nameRU: "Япония",
    capitalEN: "Tokyo",
    capitalRU: "Токио",
    regionEN: "Asia",
    regionRU: "Азия",
    population: "126960000",
    latlng: ["36.0", "138.0"],
    area: "377930.0",
    capitalTimezone: "UTC+09:00",
    bordersEN: [],
    bordersRU: [],
    currencies: [
      {
        code: "JPY",
        nameEN: "Japanese yen",
        nameRU: "Японская иена",
        symbol: "¥",
      },
    ],
    languages: [
      {
        nameEN: "Japanese",
        nameRU: "Японский",
        nativeName: "日本語 (にほんご)",
      },
    ],
    flag: "https://restcountries.eu/data/jpn.svg",
    photo:
      "https://www.tourprom.ru/site_media/images/upload/2016/8/31/countryimage/yaponiya.jpg",
    video: "https://www.youtube.com/watch?v=VCUxKiNLFsg",
    attractions: [
      {
        "attraction-nameEN": "Tokyo Imperial Palace",
        "attraction-nameRU": "Императорский дворец в Токио",
        description:
          "The chief attraction of Tokyo's Marunouchi district is the Imperial Palace (Kōkyo) with its beautiful 17th-century parks surrounded by walls and moats. Still in use by the Imperial family, the Imperial Palace stands on the site where, in 1457, the Feudal Lord Ota Dokan built the first fortress, the focal point from which the city of Tokyo (or Edo, as it was then) gradually spread. As famous as the palace is the Nijubashi Bridge leading to its interior, a structure that takes its name ('double bridge') from its reflection in the water. Other notable features include the two-meter-thick wall surrounding the palace and its gates, one of which leads to the East Higashi-Gyoen Garden. Tours of the Imperial Palace are available (pre-registration required) and include the Kikyo-mon Gate, Someikan (Visitors' House), Fujimi-yagura ('Mt. Fuji View' Keep), the East Gardens and Inner Gate, the Seimon-tetsubashi bridge, and the Imperial Household Agency Building (be sure to plan ahead). Another fortress that can be visited is Edo Castle (Chiyoda Castle). Built in 1457, it's located in Tokyo's Chiyoda district. Address: 1-1 Chiyoda, Chiyoda City, Tokyo 100-8111.",
        descriptionRU:
          "Главная достопримечательность токийского района Маруноути - Императорский дворец (Кокё) с его красивыми парками 17-го века, окруженными стенами и рвами. Императорский дворец, который до сих пор используется императорской семьей, стоит на том месте, где в 1457 году феодал Ота Докан построил первую крепость, центр, из которого постепенно распространился город Токио (или Эдо, как это было тогда). Не менее известен, чем дворец, мост Нидзюбаши, ведущий в его интерьер, структура, получившая свое название («двойной мост») из-за отражения в воде. Другие примечательные особенности включают двухметровую стену, окружающую дворец и его ворота, одни из которых ведут в Восточный сад Хигаси-Гёэн. Доступны экскурсии по Императорскому дворцу (требуется предварительная регистрация), включая Ворота Кикё-мон, Сомейкан (Дом посетителей), Фудзими-ягура (Крепость «Вид на Фудзи»), Восточные сады и Внутренние ворота, Сеймон. -тецубаши и Здание Управления Императорского Дома (обязательно планируйте заранее). Еще одна крепость, которую можно посетить, - это Замок Эдо (Замок Тиёда). Построенный в 1457 году, он расположен в токийском районе Тиёда. Адрес: 1-1 Тиёда, город Тиёда, Токио 100-8111.",
        photo:
          "https://www.planetware.com/photos-large/JPN/japan-tokyo-imperial-palace.jpg",
        link: "https://en.wikipedia.org/wiki/Tokyo_Imperial_Palace",
      },
      {
        "attraction-nameEN": "Sensō-ji Temple",
        "attraction-nameRU": "Храм Сэнсодзи",
        descriptionEN:
          "In the Asakusa district of Tokyo, the exquisite Sensō-ji Temple (Kinryū-zan Sensō-ji)) - the city's most famous shrine - stands at the end of a long street market hosting vendors selling masks, carvings, combs made of ebony and wood, toys, kimonos, fabrics, and precious paper goods. Dedicated to Kannon, the Buddhist goddess of compassion, the temple was established in AD 645 and retains its original appearance despite having been rebuilt numerous times. Highlights of a visit include seeing the Kaminari-mon Gate with its 3.3-meter-high red paper lantern bearing the inscription 'Thunder Gate', as well as the famous and much-loved Incense Vat, reputed to drive away ailments (you'll see people cupping their hands around the smoke and applying it to the part of their body needing healing). Also of note are the fascinating temple doves, said to be Kannon's sacred messengers. Be sure to drop a coin in the Omikuji boxes near the entrance, from which you can retrieve a piece of paper that will tell your fortune. Afterwards, be sure to explore the rest of the 50-acre temple precinct with its warren of lanes. If you can, revisit the temple again at night for a completely different (and far less crowded) illuminated experience. Address: 2 Chome-3-1 Asakusa, Taito, Tokyo 111-0032.",
        descriptionRU:
          "В районе Асакуса в Токио изысканный храм Сэнсо-дзи (Кинрю-дзан Сэнсо-дзи) - самая известная святыня города - стоит в конце длинного уличного рынка, на котором торговцы продают маски, резные фигурки, гребни из черного дерева и дерево, игрушки, кимоно, ткани и изделия из ценных бумаг. Посвященный Каннон, буддийской богине сострадания, храм был основан в 645 году нашей эры и сохраняет свой первоначальный вид, несмотря на то, что он неоднократно перестраивался. Основные моменты визита включают посещение ворот Каминари-мон с их красным бумажным фонарем высотой 3,3 метра с надписью «Ворота грома», а также знаменитый и очень любимый Чан с благовониями, который, как известно, изгоняет недуги (вы увидеть, как люди обнимают дым ладонями и прикладывают его к той части тела, которая нуждается в исцелении). Также следует отметить очаровательных храмовых голубей, которые, как говорят, были священными посланниками Каннона. Обязательно бросьте монету в ящики с Омикудзи возле входа, из которых вы можете достать листок бумаги, который предсказывает вашу судьбу. После этого обязательно исследуйте остальную часть территории храма площадью 50 акров с его множеством переулков. Если вы можете, снова посетите храм ночью, чтобы получить совершенно другой (и гораздо менее многолюдный) световой опыт. Адрес: 2 Chome-3-1 Asakusa, Taito, Tokyo 111-0032.",
        photo:
          "https://www.planetware.com/photos-large/JPN/japan-tokyo-asakusa-senso-ji-temple.jpg",
        link: "https://en.wikipedia.org/wiki/Sensō-ji",
      },
      {
        "attraction-nameEN": "Ueno Park",
        "attraction-nameRU": "Парк Уэно",
        descriptionEN:
          "A paradise-like oasis of green in the heart of busy Tokyo, Ueno Park (Ueno Kōen) is the city's largest green space and one of its most popular tourist attractions. In addition to its lovely grounds, the park also boasts numerous temples and museums to explore. Criss-crossed by pleasant gravel paths, this 212-acre park includes highlights such as a trip on a small boat on the reed-fringed Shinobazu pond, around a little island with its Bentendo Temple. Be sure to also visit the 17th-century Toshogu Shrine (Nikkō Tōshō-gū), with its 256 bronze and stone lanterns. Another highlight here is Ueno Zoo (Onshi Ueno Dōbutsuen). Opened in 1882, it is Japan's oldest zoo, and is famous for the pandas presented by the People's Republic of China. While it's a large attraction and houses more than 3,00 animals representing some 400 species, having a fun monorail connecting its various components can help speed up a visit (and make it even more enjoyable). The Aqua-Zoo, one of the largest aquariums in Asia, is also worth a visit, especially if you're traveling with kids. Address: 9-83 Uenokoen, Taito City, Tokyo.",
        descriptionRU:
          "Райский зеленый оазис в самом центре оживленного Токио, парк Уэно (Ueno Kōen) - крупнейшая зеленая зона города и одна из самых популярных туристических достопримечательностей. Помимо прекрасной территории, парк также может похвастаться многочисленными храмами и музеями, которые стоит посетить. Этот парк площадью 212 акров, пересекаемый приятными гравийными дорожками, включает в себя такие достопримечательности, как поездка на небольшой лодке по окаймленному тростником пруду Синобадзу вокруг небольшого острова с его храмом Бентендо. Не забудьте также посетить храм Тосёгу 17-го века (Никко Тосё-гу) с 256 бронзовыми и каменными фонарями. Еще одна достопримечательность - зоопарк Уэно (Onshi Ueno Dōbutsuen). Открытый в 1882 году, это старейший зоопарк Японии, который славится пандами, подаренными Китайской Народной Республикой. Хотя это большая достопримечательность и вмещает более 3,00 животных, представляющих около 400 видов, забавная монорельсовая дорога, соединяющая ее различные компоненты, может помочь ускорить посещение (и сделать его еще более приятным). Аква-зоопарк, один из крупнейших аквариумов Азии, также стоит посетить, особенно если вы путешествуете с детьми. Адрес: 9-83 Uenokoen, Taito City, Токио.",
        photo:
          "https://www.planetware.com/photos-large/JPN/japan-tokyo-ueno-park-zoo.jpg",
        link: "https://en.wikipedia.org/wiki/Ueno_Park",
      },
      {
        "attraction-nameEN": "Meiji Shrine",
        "attraction-nameRU": "Храм Мэйдзи",
        descriptionEN:
          "Dedicated to Emperor Meiji and his wife, Empress Shōken, construction of the splendid Meiji Shrine (Meiji Jingū) began in 1915 and was completed in 1926. Although the original structure was destroyed during WWII, it was rebuilt in 1958 and remains one of Tokyo's most important religious sites. Surrounded by a 175-acre evergreen forest that is home to some 120,000 trees representing species found across Japan - as well as the interesting 'wishing tree', on which visitors can write and hang their deepest wishes - the shrine's highlights include its Inner Precinct (Naien) with its museum containing royal treasures, and the Outer Precinct (Gaien). It's in the Outer Precinct that you'll find the Meiji Memorial Picture Gallery with its superb collection of murals relating to the lives of the emperor and empress. Be sure to also visit the adjacent Meiji Shrine Inner Garden (Yoyogi Gyoen), an attractive public garden complete with a teahouse, iris garden, and a pleasant arbor. Address: 1-1 Yoyogikamizonocho, Shibuya City, Tokyo.",
        descriptionRU:
          "Посвященный императору Мэйдзи и его жене, императрице Сёкэн, строительство великолепного святилища Мэйдзи (Мэйдзи Дзингу) началось в 1915 году и было завершено в 1926 году. Хотя первоначальное строение было разрушено во время Второй мировой войны, оно было восстановлено в 1958 году и остается одним из самых известных храмов Токио. важные религиозные объекты. Окруженный вечнозеленым лесом площадью 175 акров, где растет около 120 000 деревьев, представляющих виды, встречающиеся по всей Японии, а также интересное `` дерево желаний '', на котором посетители могут написать и повесить свои самые сокровенные пожелания, изюминкой храма является его Внутренний участок ( Найен) с его музеем, содержащим королевские сокровища, и Внешним районом (Гайен). Именно во Внешнем квартале вы найдете Мемориальную картинную галерею Мэйдзи с великолепной коллекцией фресок, посвященных жизни императора и императрицы. Не забудьте также посетить прилегающий внутренний сад святилища Мэйдзи (Yoyogi Gyoen), привлекательный общественный сад с чайной, ирисовым садом и красивой беседкой. Адрес: 1-1 Yoyogikamizonocho, Shibuya City, Tokyo.",
        photo:
          "https://www.planetware.com/wpimages/2020/09/japan-tokyo-top-attractions-meji-shrine.jpg",
        link: "https://en.wikipedia.org/wiki/Meiji_Shrine",
      },
      {
        "attraction-nameEN": "Tokyo Skytree",
        "attraction-nameRU": "Телевизионная башня Токио",
        descriptionEN:
          "It's hard to miss the Tokyo Skytree (Tōkyō Sukaitsurī). This 634-meter-tall communications and observation tower rises out of the city's Sumida district of Minato like a huge rocket ship. The country's tallest structure (and the world's tallest freestanding tower), the Tokyo Skytree opened in 2012 and has quickly become one of the city's most visited tourist attractions thanks to the incredible panoramic views from its restaurant and observation decks. With a base designed in the form of a massive tripod, the tower includes a number of cylindrical observation levels, including one at the 350-meter mark, and another at the 450-meter point - the latter includes a unique glass spiral walkway to an even higher viewpoint with glass floors for those with strong stomachs. Be sure to also check out the smaller and much older Tokyo Tower, built in 1958 and once the city's tallest structure. Address: 1 Chome-1-2 Oshiage, Sumida City, Tokyo.",
        descriptionRU:
          "Трудно пропустить Tokyo Skytree (Tōkyō Sukaitsurī). Эта башня связи и наблюдения высотой 634 метра возвышается над районом Сумида в Минато, как огромный ракетный корабль. Самое высокое сооружение в стране (и самая высокая отдельно стоящая башня в мире), Tokyo Skytree открылось в 2012 году и быстро стало одной из самых посещаемых туристических достопримечательностей города благодаря невероятным панорамным видам из ресторана и смотровых площадок. С основанием, выполненным в виде массивной треноги, башня включает в себя ряд цилиндрических смотровых площадок, в том числе один на отметке 350 метров, а другой на отметке 450 метров - последняя включает уникальный стеклянный спиральный переход к еще более высокая смотровая площадка со стеклянным полом для людей с сильным желудком. Обязательно посетите меньшую и гораздо более старую Токийскую башню, построенную в 1958 году и когда-то являвшуюся самым высоким зданием города. Адрес: 1 Chome-1-2 Oshiage, Сумида, Токио.",
        photo:
          "https://www.planetware.com/photos-large/JPN/japan-tokyo-skytree.jpg",
        link: "https://en.wikipedia.org/wiki/Tokyo_Skytree",
      },
      {
        "attraction-nameEN": "Kabuki-za",
        "attraction-nameRU": "Кабукидза",
        descriptionEN:
          "Tokyo is home to a number of excellent theaters, none as well known as the historic Kabuki-za Theatre in the city's busy Ginza district, home to famous traditional Kabuki performances. Based upon a medieval, highly skilled, and often burlesque theatrical form including song and dance, the theater's performances are as popular among tourists as they are with Japanese-speaking people. The drama and comedy are relatively easy to follow thanks to rich visuals and theatricality. The theater's interior, usually full to capacity with some 2,000 guests, is always intimate and seems more akin to an enormous family get-together than a stage show due to the fact that spectators bring their own food or purchase treats from the various restaurants spread around the auditorium (go for one of the tasty bento box meals). Performances can last for hours, and spectators stay as long as they wish (or as long as they can bear). And no one seems to take offence at people's comings and goings, nor their loud cheering or jeering. Address: 4 Chome-12-15 Ginza, Chuo City, Tokyo 104-0061.",
        descriptionRU:
          "В Токио находится множество прекрасных театров, ни один из которых не так известен, как исторический театр Кабуки-дза в оживленном районе Гиндза, где проходят знаменитые традиционные представления Кабуки. Основанный на средневековой, высококвалифицированной и часто бурлескной театральной форме, включающей песни и танцы, спектакли театра столь же популярны среди туристов, как и среди людей, говорящих по-японски. Драму и комедию относительно легко проследить благодаря богатому визуальному оформлению и театральности. Интерьер театра, обычно заполненный до 2000 гостей, всегда интимный и больше похож на огромную семейную тусовку, чем на сценическое шоу из-за того, что зрители приносят свою еду или покупают угощения в различных ресторанах, расположенных поблизости. зрительный зал (попробуйте одно из вкусных блюд из бенто в коробке). Представления могут длиться часами, и зрители остаются там столько, сколько они хотят (или столько, сколько они могут вынести). И никто, кажется, не обижается на приходы и уходы людей, на их громкие аплодисменты или насмешки. Адрес: 4 Chome-12-15 Ginza, Chuo City, Tokyo 104-0061.",
        photo:
          "https://www.planetware.com/photos-large/JPN/japan-tokyo-kabuki-za-theatre.jpg",
        link: "https://en.wikipedia.org/wiki/Kabuki-za",
      },
    ],
  },
  {
    id: "4",
    nameEN: "Turkey",
    nameRU: "Турция",
    capitalEN: "Ankara",
    capitalRU: "Анкара",
    regionEN: "Asia",
    regionRU: "Азия",
    population: "78741053",
    latlng: ["39.0", "35.0"],
    area: "783562.0",
    capitalTimezone: "UTC+03:00",
    bordersEN: [
      "Armenia",
      "Azerbaijan",
      "Bulgaria",
      "Georgia",
      "Greece",
      "Iran",
      "Iraq",
      "Syria",
    ],
    bordersRU: [
      "Армения",
      "Азербайджан",
      "Болгария",
      "Грузия",
      "Греция",
      "Иран",
      "Ирак",
      "Сирия",
    ],
    currencies: [
      {
        code: "NOK",
        nameEN: "Norwegian krone",
        nameRU: "Норвежская крона",
        symbol: "kr",
      },
    ],
    languages: [
      { nameEN: "Turkish", nameRU: "Турецкий", nativeName: "Türkçe" },
    ],
    flag: "https://restcountries.eu/data/tur.svg",
    photo:
      "https://www.jpmorgan.com/content/dam/jpm/merchant-services/country-reports/turkey/JP_Morgan_Turkey-Headers-1.jpg",
    video: "https://www.youtube.com/watch?v=ykA0ffgU6nk",
    attractions: [
      {
        "attraction-nameEN": "Ephesus",
        "attraction-nameRU": "Эфес",
        descriptionEN:
          "Not to be missed, the mighty ruin of Ephesus is a city of colossal monuments and marble-columned roads. One of the most complete, still-standing Roman cities in the Mediterranean region, this is the place to experience what life must have been like during the golden age of the Roman Empire. A sightseeing trip here will take at least half a day to cover the major highlights and longer, if you really want to explore, so make sure you plan your visit so you don't feel rushed.",
        descriptionRU:
          "Нельзя пропустить могучие руины Эфеса - город колоссальных памятников и дорог с мраморными колоннами. Один из наиболее сохранившихся и сохранившихся римских городов в Средиземноморском регионе, это место, где можно испытать, какой должна была быть жизнь в золотой век Римской империи. Обзорная поездка сюда займет как минимум полдня, чтобы охватить основные достопримечательности, и дольше, если вы действительно хотите исследовать, поэтому обязательно спланируйте свое посещение, чтобы не чувствовать себя торопливым.",
        photo:
          "https://www.planetware.com/photos-large/TR/turkey-library-facade-ephesus.jpg",
        link: "https://en.wikipedia.org/wiki/Ephesus",
      },
      {
        "attraction-name": "ChoiceCappadocia",
        "attraction-nameRU": "Каппадокия",
        descriptionEN:
          "The surreal, swooping rock valleys of Cappadocia are every photographer's dream. Cliff ridges and hill crests are home to rippling panoramas of wave-like rock or wacky-shaped pinnacles that have been formed by millennia of wind and water action. And if you don't feel like hiking for the views, this is one of the world's top destinations to take a hot air balloon ride. If the lunar-scape isn't enough to tempt you, nestled in these valleys are the frescoed rock-cut churches of the Byzantine Era, when this area was an important early Christian site.",
        descriptionRU:
          "Сюрреалистичные скалистые долины Каппадокии - мечта каждого фотографа. Горные хребты и гребни холмов являются домом для волнующих панорам волнообразных скал или причудливых вершин, образованных тысячелетиями ветра и воды. А если вам не хочется ходить в походы, чтобы полюбоваться видами, это одно из лучших мест в мире для полета на воздушном шаре. Если лунного пейзажа недостаточно, чтобы вас соблазнить, в этих долинах укрываются фресками высеченные в скале церкви византийской эпохи, когда этот район был важным раннехристианским памятником.",
        photo:
          "https://www.planetware.com/photos-large/TR/turkey-hot-air-ballooning-over-uchisar-village-cappadocia.jpg",
        link: "https://en.wikipedia.org/wiki/Cappadocia",
      },
      {
        "attraction-nameEN": "Pamukkale",
        "attraction-nameRU": "Памуккале",
        descriptionEN:
          "One of Turkey's most famous natural wonders, the pure white travertine terraces of Pamukkale ('Cotton Castle' in English) cascade down the slope looking like an out-of-place snowfield amid the green landscape. Although the travertines are themselves a highlight of a Turkey trip, the vast and rambling ruins of Roman Hierapolis, an ancient spa town, lie on the top of this calcite hill, providing another reason to visit. For the best photographs, come at dusk when the travertines glow as the sun sinks below the horizon.",
        descriptionRU:
          "Одно из самых известных природных чудес Турции - белоснежные травертиновые террасы Памуккале («Хлопковый замок» на английском языке), спускающиеся каскадом вниз по склону, выглядящие как неуместное снежное поле среди зеленого пейзажа. Хотя травертины сами по себе являются изюминкой поездки в Турцию, огромные и хаотичные руины римского Иераполиса, древнего курортного города, лежат на вершине этого кальцитового холма, что является еще одной причиной для посещения. Лучшие фотографии получаются в сумерках, когда травертины светятся, когда солнце садится за горизонт.",
        photo:
          "https://www.planetware.com/photos-large/TR/turkey-travertine-pools-pamukkale.jpg",
        link: "https://en.wikipedia.org/wiki/Pamukkale",
      },
      {
        "attraction-nameEN": "Mount Nemrut",
        "attraction-nameRU": "Немрут-Даг",
        descriptionEN:
          "The top sightseeing drawcard for Eastern Turkey, Mount Nemrut's summit funerary mound is scattered with the broken remnants of once mammoth statues, which guarded it. This weird and lonely place has to be one of Turkey's most peculiar archaeological sites. The giant stone heads of long-forgotten gods stare out from the summit, casting an eerie atmosphere over the barren mountaintop. The time to come is at sunrise, so you can watch the statues as they loom out of the dark.",
        descriptionRU:
          "Главная достопримечательность Восточной Турции, погребальный курган на вершине горы Немрут, усеян разбитыми остатками некогда охранявших его статуй мамонтов. Это странное и уединенное место должно быть одним из самых необычных археологических памятников Турции. Гигантские каменные головы давно забытых богов смотрят с вершины, создавая жуткую атмосферу над бесплодной вершиной горы. Придет время восхода солнца, так что вы можете наблюдать за статуями, вырисовывающимися из темноты.",
        photo:
          "https://www.planetware.com/photos-large/TR/turkey-nemrut-statue-heads-mount-nemrut.jpg",
        link: "https://en.wikipedia.org/wiki/Mount_Nemrut",
      },
      {
        "attraction-nameEN": "Aspendos",
        "attraction-nameRU": "Аспендос",
        descriptionEN:
          "Just south of Antalya, the jaw-dropping mammoth bulk of the Roman Theater of Aspendos celebrates the pomp and ceremony of Marcus Aurelius' rule. Considered the finest surviving example of a classical age theater still standing in the world, it is one of antiquity's star attractions. Although the theater is the main reason for a visit here-and for most visitors on a half-day trip from nearby Antalya or Side, the theater is all they see-there are more ruins to explore over a vast hilly area if you have time.",
        descriptionRU:
          "К югу от Анталии, потрясающая гигантская громада римского театра Аспендоса празднует пышность и церемонию правления Марка Аврелия. Считается лучшим сохранившимся образцом театра классической эпохи, который все еще существует в мире, он является одной из главных достопримечательностей античности. Хотя театр - это основная причина для посещения здесь - а для большинства посетителей, совершающих поездку на полдня из соседней Анталии или Сиде, театр - это все, что они видят, - есть еще руины, которые можно исследовать на обширной холмистой местности, если у вас есть время.",
        photo:
          "https://www.planetware.com/photos-large/TR/turkey-theatre-aspendos.jpg",
        link: "https://en.wikipedia.org/wiki/Aspendos",
      },
      {
        "attraction-nameEN": "Pergamon",
        "attraction-nameRU": "Пергам",
        descriptionEN:
          "Turkey has an abundance of Greco-Roman ruins, but none can be so romantically placed as ancient Pergamum in modern-day Bergama. Once home to one of the ancient world's most important libraries, Pergamum's remaining temple remnants now preside dramatically on a hilltop. It's an incredibly atmospheric place to explore, with an Acropolis area and a theater cut into the hillside with sweeping panoramic views from its top seating tiers. This is a great place to visit if you want to get a real feel for life in the Roman era.",
        descriptionRU:
          "В Турции много греко-римских руин, но ни одна из них не может быть расположена так романтично, как древний Пергам в современной Бергаме. Когда-то здесь находилась одна из самых важных библиотек древнего мира, а остатки храма Пергама теперь величественно возвышаются на вершине холма. Это невероятно атмосферное место для изучения, с акрополем и театром, вырезанным на склоне холма, с потрясающими панорамными видами с верхних ярусов для сидения. Это отличное место для посещения, если вы хотите по-настоящему ощутить жизнь в римскую эпоху.",
        photo:
          "https://www.planetware.com/photos-large/TR/turkey-temple-of-trajan-pergamum.jpg",
        link: "https://en.wikipedia.org/wiki/Pergamon",
      },
    ],
  },
  {
    id: "5",
    nameEN: "United Kingdom of Great Britain and Northern Ireland",
    nameRU: "Великобритания",
    capitalEN: "London",
    capitalRU: "Лондон",
    regionEN: "Europe",
    regionRU: "Европа",
    population: "65110000",
    latlng: ["51.509865", "-0.118092"],
    area: "242900.0",
    capitalTimezone: "UTC",
    bordersEN: ["Ireland"],
    bordersRU: ["Ирландия"],
    currencies: [
      {
        code: "GBP",
        nameEN: "British pound",
        nameRU: "Фунт стерлингов",
        symbol: "£",
      },
    ],
    languages: [
      {
        nameEN: "English",
        nameRU: "Английский",
        nativeName: "English",
      },
    ],
    flag: "https://restcountries.eu/data/gbr.svg",
    photo:
      "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    video: "https://youtu.be/gs-skMbz9vo",
    attractions: [
      {
        "attraction-nameEN": "Buckingham Palace",
        "attraction-nameRU": "",
        descriptionEN:
          "Buckingham Palace was built in 1837 and has been the London residence of the Royal Family since Queen Victoria's accession. If you're wondering whether the Queen is in, look at the flagpole atop the building: if the royal standard is flying day and night, she's at home. On special state occasions, she and members of the Royal Family may even emerge on the central balcony.",
        descriptionRU:
          "Букинге́мский дворе́ц (англ. Buckingham Palace [ˈbʌkɪŋəm ˈpælɪs]) — официальная лондонская резиденция королевы Великобритании Елизаветы II. Расположен напротив улицы Мэлл и Грин-парка с беломраморным и позолоченным памятником королеве Виктории. Когда монарх находится во дворце, над крышей дворца развевается королевский штандарт. Первоначально Букингемский дворец был известен как Букингем-хаус и строился для Джона Шеффилда, 1-го герцога Бекингемского и Норменби (с 1703 года). Он был приобретён королём Георгом III в 1762 в качестве будущей частной резиденции монарха. В течение последующих 75 лет построили ещё три подобных здания. Все вместе образуют в плане квадрат, в центре которого — большой внутренний двор. Дворец был официально объявлен главной резиденцией британских монархов при вступлении на престол королевы Виктории в 1837 году",
        photo:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Buckingham_Palace%2C_London_-_April_2009.jpg/1920px-Buckingham_Palace%2C_London_-_April_2009.jpg",
        link: "https://en.wikipedia.org/wiki/Buckingham_Palace",
      },
      {
        "attraction-nameEN": "The Tower of London",
        "attraction-nameRU": "Тауэр",
        descriptionEN:
          "From prison to palace, treasure vault to private zoo, the magnificent Tower of London has fulfilled many different roles down the centuries. One of Britain's most iconic structures, this spectacular World Heritage Site offers hours of fascination for visitors curious about the country's rich history - after all, so much of it happened here. Inside the massive White Tower, built in 1078 by William the Conqueror, is the 17th-century Line of Kings with its remarkable displays of royal armaments and armor.",
        descriptionRU:
          "Лондонский Тауэр (англ. Her Majesty's Royal Palace and Fortress, Tower of London) — крепость, стоящая на северном берегу Темзы, исторический центр Лондона, одно из старейших сооружений Англии и один из главных символов Великобритании, занимающий особое место в истории английской нации. Как писал герцог Эдинбургский в своей книге, посвященной 900-летию Тауэра, «за свою историю Лондонский Тауэр был крепостью, дворцом, хранилищем королевских драгоценностей, арсеналом, монетным двором, тюрьмой, обсерваторией, зоопарком, местом, привлекающим туристов».",
        photo:
          "https://www.planetware.com/photos-large/ENG/london-top-attractions-tower-of-london.jpg",
        link: "https://en.wikipedia.org/wiki/Tower_of_London",
      },
      {
        "attraction-nameEN": "The British Museum",
        "attraction-nameRU": "Британский музей",
        descriptionEN:
          "Displaying one of the world's finest collections of antiquities, the British Museum contains more than 13 million artifacts from the ancient world. With priceless objects from Assyria, Babylonia, China, Europe, and elsewhere, it's hard to know where to begin. But most tourists head first for the museum's most famous exhibits: the controversial Elgin Marbles from the Parthenon, the Rosetta Stone, the colossal bust of Ramesses II, the Egyptian mummies, and the spectacular hoard of 4th-century Roman silver known as the Mildenhall Treasure. In addition to a well-stocked, on-site bookshop boasting an exhaustive array of titles on ancient history, archaeology and art history, there's a shop selling kids' games and souvenirs, along with one that sells replica sculptures and jewelry. For those able to linger longer, the museum offers a variety of lectures and workshops, plus a restaurant and café.",
        descriptionRU:
          "Британский музей (англ. the British Museum) — главный историко-археологический музей Британской империи (ныне — Великобритании) и один из крупнейших музеев в мире, второй по посещаемости, среди художественных музеев. Британский музей был создан в 1753 году на основе трёх коллекций — коллекции известного британского врача и натуралиста Хэнса Слоуна[4], коллекции графа Роберта Харли, а также библиотеки антиквара Роберта Коттона, которая стала основой Британской библиотеки. Создание музея было утверждено актом Британского парламента. Изначально одним из главных сокровищ музея была его библиотека, крупнейшая в Великобритании. ",
        photo:
          "https://www.inexhibit.com/wp-content/uploads/2014/04/British-Museum-London-exterior.jpg",
        link: "https://www.britishmuseum.org/",
      },
      {
        "attraction-nameEN": "Big Ben and the Palace of Westminster",
        "attraction-nameRU": "Биг-Бен и Вестминстерский дворец ",
        descriptionEN:
          "Big Ben is probably the world's most famous clock. That iconic silhouette is instantly recognisable and is one of the most Instagrammed landmarks on the planet. Six monarchs and 41 prime ministers have come and gone since the bells first struck their now familiar music across Westminster. Below it, stretching along the Thames, are the Houses of Parliament, seat of Britain's government for many centuries and once the site of the royal Westminster Palace occupied by William the Conqueror. Tours of the parliament buildings offer a unique chance to see real-time debates and lively political discussions. From Parliament Square, Whitehall is lined by so many government buildings that its name has become synonymous with the British government.",
        descriptionRU:
          "Биг-Бен (англ. Big Ben) — популярное туристическое название часовой башни Вестминстерского дворца. Официальное название башни с 2012 года — Башня Елизаветы (англ. Elizabeth Tower). Изначально «Биг-Бен» являлось названием самого большого из шести колоколов, однако часто это название расширительно относят и к часам, и к самой часовой башне в целом. На момент отливки Биг-Бен был самым большим и тяжёлым колоколом Соединённого Королевства. Его вес при этом составлял 13,7 тонны. В 1881 году уступил первенство колоколу Большой Пол (17 тонн). Башня Елизаветы — один из самых узнаваемых символов Великобритании, часто используемый в сувенирах, рекламе, кинофильмах. Вестминстерский дворец (англ. Palace of Westminster, Westminster Palace) — здание на берегу Темзы в лондонском районе Вестминстер, где проходят заседания Британского парламента. Архитектурный стиль — неоготика.",
        photo:
          "https://imageproxy.themaven.net//https%3A%2F%2Fwww.history.com%2F.image%2FMTU3ODc3NjU2NzQ4NTAwMjk3%2Fthis-day-in-history-05311859---big-ben-in-london.jpg",
        link: "https://www.parliament.uk/bigben/",
      },
      {
        "attraction-nameEN": "Westminster Abbey",
        "attraction-nameRU": "Вестминстерское аббатство",
        descriptionEN:
          "nother location with a long association with British royalty, Westminster Abbey stands on a site that's been associated with Christianity since the early 7th century. Officially known as the Collegiate Church of St. Peter in Westminster, Westminster Abbey was founded by Edward the Confessor in 1065 as his place of interment. From his burial in 1066 until that of George II almost 700 years later, most sovereigns were not only crowned here but were buried here, too. More recently, it's become famous as the preferred location for Royal Weddings. This masterpiece of Gothic architecture not only has the highest Gothic nave in England (102 feet).",
        descriptionRU:
          "Коллегиа́льная це́рковь Свято́го Петра́ в Ве́стминстере (англ. Collegiate Church of St Peter at Westminster), почти всегда называемая Вестми́нстерское абба́тство — готическая церковь в Вестминстере (Лондон). Строилась с перерывами с 1245 по 1745 годы, хотя первые упоминания о церкви на этом месте относятся к VII—X векам. Традиционное место коронации и захоронения монархов Великобритании. Вместе с расположенными рядом Вестминстерским дворцом и церковью Святой Маргариты аббатство в 1987 году было причислено ко Всемирному наследию. Основное здание церкви имеет форму креста, точнее, представляет собой церковь с трансептом. Наибольшая длина, от большой западной двери до конца часовни Богоматери, составляет 161,5 метра, наибольшая высота Западных башен — 68 метров[5]. Общая площадь помещения составляет около 3000 м², оно может вместить до 2000 человек.",
        photo:
          "https://www.planetware.com/photos-large/ENG/london-westminster-abbey-2.jpg",
        link: "https://www.westminster-abbey.org/",
      },
      {
        "attraction-nameEN": "National Gallery",
        "attraction-nameRU": "Лондонская национальная галерея",
        descriptionEN:
          "Ranking among the top art museums in the world, London's National Gallery represents an almost complete survey of European painting from 1260 until 1920. The museum's greatest strengths are in its collections of Dutch Masters and Italian Schools of the 15th and 16th centuries. Among its highlights are a cartoon (preliminary sketch) of the Madonna and Child by Leonardo da Vinci, Michelangelo's The Entombment, Botticelli's Venus and Mars, van Gogh's Sunflowers, and The Water-Lily Pond by Monet.",
        descriptionRU:
          "Лондонская национальная галерея — музей в Лондоне на Трафальгарской площади, содержащий более 2000 образцов западноевропейской живописи XIII — начала XX века. Входит в первую пятёрку самых посещаемых художественных музеев мира. Картины в галерее экспонируются в хронологическом порядке. Галерея открыта 9 апреля 1839 года. В 2013 году годовой поток посетителей галереи впервые превысил 6 миллионов человек. ",
        photo:
          "https://employeebenefits.co.uk/content/uploads/2019/08/National-Gallery.jpg",
        link: "https://www.nationalgallery.org.uk/",
      },
    ],
  },
  {
    id: "6",
    nameEN: "Germany",
    nameRU: "Германия",
    capitalEN: "Berlin",
    capitalRU: "Берлин",
    regionEN: "Europe",
    regionRU: "Европа",
    population: "81770900",
    latlng: ["52.520008", "13.404954"],
    area: "357114.0",
    capitalTimezone: "UTC+01:00",
    bordersEN: [
      "Austria",
      "Belgium",
      "Czech Republic",
      "Denmark",
      "France",
      "Luxembourg",
      "The Netherlands",
      "Poland",
      "Switzerland",
    ],
    bordersRU: [
      "Австрия",
      "Бельгия",
      "Чехия",
      "Дания",
      "Франция",
      "Люксембург",
      "Нидерланды",
      "Польша",
      "Швейцария",
    ],
    currencies: [
      {
        code: "EUR",
        nameEN: "Euro",
        nameRU: "Евро",
        symbol: "€",
      },
    ],
    languages: [
      {
        nameEN: "German",
        nameRU: "Немецкий",
        nativeName: "Deutsch",
      },
    ],
    flag: "https://restcountries.eu/data/deu.svg",
    photo:
      "https://www.tripsavvy.com/thmb/J2P2GH5Rf3RczztSYN3--82ziEQ=/3865x2576/filters:no_upscale():max_bytes(150000):strip_icc()/berlin-skyline-at-dusk-with-tv-tower-626130734-5aca350f18ba0100368e15ae.jpg",
    video: "https://youtu.be/ZHHbpy91O2E",
    attractions: [
      {
        "attraction-nameEN": "Berlin's Brandenburg Gate",
        "attraction-nameRU": "Бранденбургские ворота",
        descriptionEN:
          "Modeled on the Acropolis in Athens and built for King Frederick William II in 1791, the monumental sandstone Brandenburg Gate in Berlin's Mitte district was the city's first Neoclassical structure. Measuring an impressive 26 meters in height - including the Quadriga, the spectacular four-horse chariot carrying the goddess of victory perched atop - its six huge columns on each side of the structure form five impressive passages: four were used by regular traffic, while the center was reserved for the royal carriages. Huge Doric columns also decorate the two buildings at each side of the Gate, once used by toll-collectors and guards.",
        descriptionRU:
          "Бранденбу́ргские воро́та (нем. Brandenburger Tor) — единственные сохранившиеся городские ворота Берлина, главный символ города. Эти ворота Берлинской таможенной стены были возведены в 1788—1791 годах в ознаменование установления мира в Нидерландах. Ворота мира (Friedenstor[2]) были построены Карлом Готтгардом Ланггансом по велению Фридриха Вильгельма II. Считаются первым значимым памятником берлинского классицизма. Образцом для Бранденбургских ворот послужили Пропилеи Акрополя в Афинах. Фасад ворот был первоначально выкрашен в белый цвет. Украшение фасада принадлежит Иоганну Готфриду Шадову; он также спроектировал и шестиметровую квадригу, которой управляет богиня победы Виктория (квадрига развёрнута в восточную сторону). В 1871 году через ворота маршировали солдаты-победители во Франко-прусской войне, в 1918 и 1920 годах — контрреволюционно настроенные солдаты, в 1933 году ворота стали кулисами национал-социалистического праздника.",
        photo:
          "https://www.planetware.com/photos-large/D/germany-brandenburg-gate.jpg",
        link: "https://en.wikipedia.org/wiki/Brandenburg_Gate",
      },
      {
        "attraction-nameEN": "Cologne Cathedral",
        "attraction-nameRU": "Кёльнский собор",
        descriptionEN:
          "The towering Cologne Cathedral (Kölner Dom) - the Cathedral of St. Peter and St. Mary - is located on the banks of the Rhine and is undoubtedly Cologne's most impressive landmark. This masterpiece of High Gothic architecture, one of the largest cathedrals in Europe, was begun in 1248 and was the most ambitious building project of the Middle Ages. As imposing as its façade, its magnificent interior covers an area of 6,166 square meters and boasts 56 huge pillars. Above the high altar is the Reliquary of the Three Kings, a 12th-century work of art in gold that was designed by Nicholas of Verdun to house the relics of the Three Kings brought here from Milan.",
        descriptionRU:
          "Кёльнский собор (нем. Kölner Dom) — римско-католический готический собор в городе Кёльне. Занимает третье место в списке самых высоких церквей мира и внесён в список объектов Всемирного культурного наследия. Строительство главного храма Кёльнской архиепископии велось в два приёма — в 1248—1437 гг. и в 1842—1880 годах. По окончании строительства 157-метровый собор на четыре года стал самым высоким зданием мира. Места, на которых сегодня находится собор, являлись, по всей видимости, ещё в римский период истории Кёльна религиозным центром проживавших здесь христиан. В северной части города в течение столетий было возведено несколько поколений церквей, каждая из которых превосходила по размерам все предыдущие. Эти церкви находились внутри кольца монастырей и монастырских церквей «священного Кёльна». Остатки этих церквей можно увидеть в нижней части сегодняшнего собора в месте проведения раскопок, которыми охвачена территория более чем в 4000 квадратных метров",
        photo:
          "https://germanculture.com.ua/wp-content/uploads/2018/05/Cologne_cathedral_aerial_25326253726.jpg",
        link: "https://en.wikipedia.org/wiki/Cologne_Cathedral",
      },
      {
        "attraction-nameEN": "The Black Forest",
        "attraction-nameRU": "Шварцвальд",
        descriptionEN:
          "The Black Forest (German: Schwarzwald) is a large forested mountain range in the state of Baden-Württemberg in southwest Germany. It is bounded by the Rhine valley to the west and south. Its highest peak is the Feldberg with an elevation of 1,493 metres (4,898 ft) above sea level. The region is roughly oblong in shape, with a length of 160 kilometres (100 miles) and breadth of up to 50 km (30 mi), occupying an area of about 6,009 km2 (2,320 sq mi). Historically, the area was known for forestry and ore deposits which led to heavy mining in the local economy. In recent years, tourism has become the primary industry, accounting for around 300,000 jobs.[4] The area features several ruined military fortifications dating back to the 17th century",
        descriptionRU:
          "Шварцвальд (в переводе с немецкого – 'черный лес') – вдоль долины реки Рейн, с севера на юг, на территории федеральной земли Баден-Вюртемберг расположен знаменитый горнолесной массив. Здесь, в краю вечнозеленых лесов и живописных деревень, происходит действие многих сказок братьев Гримм. Регион славится своими минеральными источниками и часами с кукушкой, производство которых началось в XVIII в. В крупнейшем городе Шварцвальда, Фрайбурге, окруженном виноградниками, можно увидеть множество зданий в готическом стиле. Его площадь достигает 11 000 кв.км., при этом две трети Черного леса — это невысокие горы, покрытые густыми хвойными лесами. Длина массива составляет 158 км: самая узкая его часть (30 км) находится на севере, а самая широкая (60 км) на юге. Наивысшей горной вершиной Шварцвальда является гора Feldberg, высота которой достигает 1493 м.",
        photo:
          "https://avatars.mds.yandex.net/get-zen_doc/1570751/pub_5edcb15749a53d5aa22df834_5edcc39349a53d5aa22df9c4/scale_1200",
        link: "https://en.wikipedia.org/wiki/Black_Forest",
      },
      {
        "attraction-nameEN": "Neuschwanstein",
        "attraction-nameRU": "Нойшванштайн",
        descriptionEN:
          "The quaint old town of Füssen, situated between the Ammergau and Allgäu Alps and a popular alpine resort and winter sports center, is a good base from which to explore nearby Neuschwanstein Castle, one of Europe's most famous (and picturesque) royal castles. King Ludwig II of Bavaria built this many-towered and battlement-covered fantasy fortress - the inspiration for Walt Disney's famous theme park castles - from 1869-86. The castle was intended as a home for the King, until he died in 1886. It was open to the public shortly after his death. Neuschwanstein embodies both the contemporaneous architectural fashion known as castle romanticism (German: Burgenromantik), and King Ludwig II's enthusiasm for the operas of Richard Wagner.",
        descriptionRU:
          "Schloss Neuschwanstein [nɔy'ʃvanʃtain], буквально: «Новый лебединый камень (утёс)») — романтический замок баварского короля Людвига II около городка Фюссен и замка Хоэншвангау в юго-западной Баварии, недалеко от австрийской границы. Замок Нойшванштайн стоит на месте двух крепостей, переднего и заднего Швангау, на момент начала работ лежавших в руинах. Король Людвиг II приказал на этом месте путём взрыва скалы опустить плато приблизительно на 8 м и создать тем самым место для постройки «сказочного дворца». После строительства дороги и прокладки трубопровода 5 сентября 1869 года был заложен первый камень для строительства огромного замка",
        photo:
          "https://static.onecms.io/wp-content/uploads/sites/28/2017/04/01-neuschwanstein-castle-bavaria-NEUSCHWANSTEIN0417.jpg",
        link: "https://en.wikipedia.org/wiki/Neuschwanstein_Castle",
      },
      {
        "attraction-nameEN": "Miniatur Wunderland",
        "attraction-nameRU": "Музей миниатюры",
        descriptionEN:
          "In the heart of the historic Port of Hamburg, the magnificent Miniatur Wunderland, the world's largest model railway, is an attraction that appeals equally to young and old alike. Boasting more than 12,000 meters of track, this massive scale model includes sections dedicated to the USA, England, and Scandinavia (as well as Hamburg) and incorporates 890 trains, more than 300,000 lights, and in excess of 200,000 human figures.",
        descriptionRU:
          "Миниатю́рная страна́ чуде́с (нем. Miniatur Wunderland) — музей в Гамбурге с самым большим в мире действующим железнодорожным макетом (1499 м²). Конструирование первой части макета началось в декабре 2000 года, первые три части были завершены в августе 2001 года. Проект был создан братьями Фредериком и Герритом Браунами.",
        photo:
          "https://www.miniatur-wunderland.de/imager/contentimages/layout/italien/1646/italien-rom-petersdom-nacht_bc687f62802525bd2b7f491f2188ec3e.jpg",
        link: "https://www.miniatur-wunderland.de/",
      },
      {
        "attraction-nameEN": "Berlin's Museum Island",
        "attraction-nameRU": "Остров Музеумс",
        descriptionEN:
          "Berlin's world-famous Museumsinsel, or Museum Island, lies between the River Spree and the Kupfergraben - a 400-meter-long canal off the river - and includes many of the city's oldest and most important museums. The heart of this pedestrian-friendly district is the Old Museum, constructed in 1830 as a place to exhibit the royal treasures. Soon after, the land behind the museum was set aside for art and the 'knowledge of antiquity'.",
        descriptionRU:
          "«Музейный остров» (нем. Museumsinsel) — название, которое получила северная оконечность острова Шпреинзель на реке Шпрее в Берлине, где расположено целое созвездие знаменитых берлинских музеев. Музейный остров является центром притяжения для туристов и ценителей искусства со всего мира. С 1999 года уникальный архитектурный и культурный ансамбль включён во Всемирное наследие ЮНЕСКО.",
        photo:
          "https://afar-production.imgix.net/uploads/images/post_images/images/8HZiTRSJJR/original_55b126dd99c1e4b2831b751870becce2.jpg?1448372526?ixlib=rails-0.3.0&auto=format%2Ccompress&crop=entropy&fit=crop&h=719&q=80&w=954",
        link: "https://de.wikipedia.org/wiki/Museumsinsel_(Berlin)",
      },
    ],
  },
];

export default countries;
