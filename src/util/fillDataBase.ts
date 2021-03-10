import { AttractionInterface } from './../resources/attractions/attraction.types';
import { CountryInterface } from './../resources/countries/country.types';
import { Country } from '../resources/countries/country.models';
import { Attraction } from '../resources/attractions/attraction.models';

export default async function () {
  const country = await Country.create({
    nameEN: 'Czech Republic',
    nameRU: 'Чешская Республика',
    capitalEN: 'Prague',
    capitalRU: 'Прага',
    regionEN: 'Europe',
    regionRU: 'Европа',
    population: 10558524,
    latlng: [50.073658, 14.41854],
    area: 78865.0,
    capitalTimezone: 'UTC+01:00',
    bordersEN: ['Austria', 'Germany', 'Poland', 'Slovakia'],
    bordersRU: ['Австрия', 'Германия', 'Польша', 'Словакия'],
    currencies: [
      {
        code: 'CZK',
        nameEN: 'Czech koruna',
        nameRU: 'Чешская крона',
        symbol: 'Kč',
      },
    ],
    attractions: [
      (
        await Attraction.create({
          attractionNameEN: 'Prague Castle',
          attractionNameRU: 'Пражский Град',
          descriptionEN:
            "For most travelers, the focal point of a visit to the Czech Republic is Prague Castle (Praský hrad). It's on all Prague itineraries. Located in the city's Hradcany neighborhood and dating from the late 10th century, Prague Castle has been central to Eastern European history for centuries, and has been home to Holy Roman Emperors, the Habsburgs, Bohemian kings and, more recently, the Czech Republic's President. Over the course of its 1,000-year history, the castle - the largest in the world in terms of area - has undergone many dramatic changes in architectural style, evidence of which can be seen in the numerous buildings constructed within its walls through the centuries. Highlights of the castle include beautiful St. Vitus Cathedral, St. George's Basilica, the Powder Tower, and the Golden Lane with its medieval workshops. Of particular note is the Old Royal Palace with its magnificent Vladislav Hall, so big it was used to host knightly jousting tournaments, as well as the adjoining 16th-century Royal Garden with its spectacular Singing Fountain. English language guided tours and audio-guides are available. Address: 119 08 Prague 1",
          descriptionRU:
            'Для большинства путешественников целью посещения Чешской Республики является Пражский Град (Pražský hrad). Пражский Град, расположенный в районе Градчаны и построенный в конце 10 века, на протяжении веков был центральным элементом истории Восточной Европы и был домом для императоров Священной Римской империи, Габсбургов, чешских королей и, с недавних пор, президента Чешской Республики. За свою 1000-летнюю историю замок - самый большой в мире по площади - претерпел множество драматических изменений в архитектурном стиле, свидетельство которых можно увидеть в многочисленных зданиях, построенных в его стенах на протяжении веков. Основные моменты замка включают красивый собор Святого Вита, базилику Святого Георгия, Пороховую башню и Золотую улочку с ее средневековыми мастерскими. Особо следует отметить Старый Королевский дворец с его великолепным Владиславским залом, настолько большим, что он использовался для проведения рыцарских рыцарских турниров, а также прилегающий Королевский сад 16-го века с его впечатляющим Поющим фонтаном. Доступны экскурсии на английском языке и аудиогиды. Адрес: 119 08 Прага 1',
          photo:
            'https://www.planetware.com/photos-large/CZ/czech-republic-prague-castle.jpg',
          link: 'https://en.wikipedia.org/wiki/Prague_Castle',
        } as AttractionInterface)
      )._id,
      (
        await Attraction.create({
          attractionNameEN: "Prague's Charles Bridge",
          attractionNameRU: 'Карлов Мост в Праге',
          descriptionEN:
            "Charles Bridge (Karluv Most). This famous structure spanning the River Vltava was built in 1357 and has many unique points of interest along its 520-meter span, including numerous fine statues. Perhaps the most famous are those of the bridge's namesake, Holy Roman Emperor Charles IV, as well as the 1683 statue of John of Nepomuk, which honors the country's most revered saint who, ironically, was deliberately drowned in the Vltava. The bridge is extremely popular with tourists and photographers for its fine views. Some of the best views are actually captured during off-peak hours, at dawn and at dusk, making for a much less crowded visit.",
          descriptionRU:
            'Карлов мост (Карлов мост). Это знаменитое сооружение на реке Влтава было построено в 1357 году и имеет множество уникальных достопримечательностей на протяжении 520 метров, в том числе многочисленные прекрасные статуи. Пожалуй, самые известные из них - это памятники тезки моста, императора Священной Римской империи Карла IV, а также статуя 1683 года Иоанна Непомуцкого, в честь самого почитаемого святого страны, который, по иронии судьбы, был намеренно утоплен во Влтаве. Мост очень популярен среди туристов и фотографов из-за прекрасных видов. Некоторые из лучших видов на самом деле снимаются в непиковые часы, на рассвете и в сумерках, что делает посещение гораздо менее многолюдным.',
          photo:
            'https://www.planetware.com/photos-large/CZ/czech-republic-charles-bridge.jpg',
          link: 'https://en.wikipedia.org/wiki/Charles_Bridge',
        } as AttractionInterface)
      )._id,
      (
        await Attraction.create({
          attractionNameEN: 'St. Vitus Cathedral',
          attractionNameRU: 'Собор Святого Вита',
          descriptionEN:
            "Part of the Prague Castle complex, St. Vitus Cathedral is best known as the home of the Bohemian Coronation Jewels, as well as the tomb of the Czech people's most revered saint, St. Wenceslas. The cathedral has a long history. Dating back to the year 925, when Prince Wenceslas built a chapel on the site, the building grew along with Prague's importance, and it soon became a basilica after the Prague bishopric was established. There was another period of expansion between 1344 and 1419 when it began its transformation into a Gothic cathedral, and the St. Wenceslas Chapel was built. Construction and repairs resumed in the late 18th century, adding neo-Gothic elements. Highlights of a visit include seeing the bronze doors adorned with reliefs of the cathedral's history, ornate stained glass windows in the chapels, and the Royal Mausoleum. Tourists should be sure to visit St. Wenceslas Chapel to admire the murals, which are original 14th-century depictions of the stations of the cross, as well as scenes depicting the life of St. Wenceslas.",
          descriptionRU:
            'Являясь частью комплекса Пражского Града, собор Святого Вита наиболее известен как дом Богемских коронационных драгоценностей, а также гробница самого почитаемого святого чешского народа - Святого Вацлава. Собор имеет многовековую историю. Возникнув в 925 году, когда князь Вацлав построил на этом месте часовню, здание росло вместе с важностью Праги, и вскоре после основания Пражского епископства оно стало базиликой. Между 1344 и 1419 годами был еще один период расширения, когда он начал преобразовываться в готический собор и была построена часовня Святого Вацлава. Строительство и ремонт возобновились в конце 18 века с добавлением элементов неоготики. Основные моменты визита включают посещение бронзовых дверей, украшенных рельефами истории собора, витражей в часовнях и Королевского мавзолея. Туристам обязательно стоит посетить часовню Святого Вацлава, чтобы полюбоваться фресками, которые являются оригинальными изображениями крестных станций XIV века, а также сценами, изображающими жизнь Святого Вацлава.',
          photo:
            'https://www.planetware.com/photos-large/CZ/czech-republic-st-vitus-cathedral.jpg',
          link: 'https://en.wikipedia.org/wiki/St._Vitus_Cathedral',
        } as AttractionInterface)
      )._id,
      (
        await Attraction.create({
          attractionNameEN: 'Ceský Krumlov Castle',
          attractionNameRU: 'Крумловский замок',
          descriptionEN:
            "Dominating the old town after which it's named, Ceský Krumlov Castle is remarkably well preserved given its age. Dating from the 13th century, much of what stands today in this UNESCO World Heritage Site stems from the 17th century, including the Rosenberg Ballroom and the Renaissance Hall, the Royal Apartments, and the Chapel of St. George. Also worth seeing is the castle's old Baroque theater. Built in 1682, it's still used for special performances. Other highlights include historic collections of paintings and tapestries, along with fine décor and period furniture. The Ceský Krumlov Castle complex comprises 40 buildings, including fine old palaces, castle courts, and gardens. Tourists could easily spend several days wandering the grounds, although those who want to see the highlights may enjoy one of the English language guided tours that are available.",
          descriptionRU:
            'Замок Чески-Крумлов, возвышающийся над старым городом, в честь которого он назван, прекрасно сохранился с учетом своего возраста. Датируемое 13 веком, большая часть того, что стоит сегодня в этом объекте Всемирного наследия ЮНЕСКО, восходит к 17 веку, в том числе Бальный зал Розенберга и Зал эпохи Возрождения, Королевские апартаменты и часовня Св. Джордж. Также стоит посетить старый барочный театр замка. Построенный в 1682 году, он до сих пор используется для специальных представлений. Другие достопримечательности включают исторические коллекции картин и гобеленов, а также изысканный декор и старинную мебель. Замковый комплекс Чески-Крумлов состоит из 40 зданий, в том числе прекрасных старинных дворцов, замковых дворов и садов. Туристы могут легко провести несколько дней, блуждая по территории, хотя те, кто хочет увидеть основные моменты, могут насладиться одной из доступных экскурсий на английском языке.',
          photo:
            'https://www.planetware.com/photos-large/CZ/czech-republic-cesky-krumlov-castle-2.jpg',
          link: 'https://en.wikipedia.org/wiki/%C4%8Cesk%C3%BD_Krumlov_Castle',
        } as AttractionInterface)
      )._id,
      (
        await Attraction.create({
          attractionNameEN: "Brno's Cathedral of St. Peter and Paul",
          attractionNameRU: 'Брненский собор Святых Петра и Павла',
          descriptionEN:
            "High above the old city of Brno is the beautiful Cathedral of St. Peter and Paul, one of the Czech Republic's most important national monuments. The site of the cathedral first held an 11th-century Romanesque chapel that was later expanded to include a crypt and a basilica, the remains of which can still be seen. Eventually rebuilt as a Gothic cathedral during the 18th century, the interior is a Baroque masterpiece designed by architect Moric Grimm. Among its most remarkable features are the Kapistránka pulpit and the crypt, which is home to not only tombs but the remnants of Brno's original city walls. Added in the early 20th century, the building's two 84-meter-high towers are home to the church bell that rings each day at 11am, instead of noon. This tradition has been carried on to remember the city's successful attempt to trick an attacking army into abandoning their siege after the general had announced that they would give up if they had not taken the town by noon. Also in Brno is the 13th-century Spilberk Castle (hrad Spilberk), home to the Brno City Museum, as well as the fascinating Tugendhat Villa, built in 1930 and one of the most important examples of modern architecture from the early 20th century in Europe.",
          descriptionRU:
            'Высоко над старым городом Брно находится красивый собор Святых Петра и Павла, один из важнейших национальных памятников Чешской Республики. На месте собора сначала находилась романская часовня 11-го века, которая позже была расширена за счет склепа и базилики, остатки которых все еще можно увидеть. В конечном итоге перестроенный в готический собор в 18 веке, интерьер представляет собой шедевр барокко, спроектированный архитектором Мориком Гриммом. Среди его наиболее примечательных особенностей - кафедра Капистранка и склеп, в котором находятся не только гробницы, но и остатки оригинальных городских стен Брно. Две башни высотой 84 метра, пристроенные в начале 20 века, являются домом для церковного колокола, который звонит каждый день в 11 утра, а не в полдень. Эта традиция была продолжена, чтобы вспомнить успешную попытку города обманом заставить атакующую армию отказаться от осады после того, как генерал объявил, что они сдадутся, если они не захватят город к полудню. Также в Брно находится замок Шпильберк 13-го века (hrad Spilberk), где находится городской музей Брно, а также очаровательная вилла Тугендхат, построенная в 1930 году и являющаяся одним из самых важных образцов современной архитектуры начала 20-го века в Европе.',
          photo:
            'https://www.planetware.com/photos-large/CZ/czech-republic-brno-cathedral-of-st-peter-paul.jpg',
          link:
            'https://en.wikipedia.org/wiki/Cathedral_of_St._Peter_and_Paul,_Brno',
        } as AttractionInterface)
      )._id,
      (
        await Attraction.create({
          attractionNameEN:
            'Bone Collectors: Czech Crypts, Tombs, and Cemeteries',
          attractionNameRU: 'Костницы: чешские склепы, гробницы и кладбища',
          descriptionEN:
            "Spread across the Czech Republic are a number of fascinating locations dedicated to preserving the remains of those slain in war or killed by diseases such as the terrible plagues that gripped Europe in medieval times. But what makes these places even more interesting are the often bizarre ways in which these centuries-old human relics are displayed. Nowhere is this more evident than in the small town of Sedlec, home to the famous 'Bone Church,' the Gothic All Saints Chapel. Here in the Sedlec Ossuary, the curious will be rewarded with a chance to see the remains of some 70,000 people who died between the 14th and 16th centuries displayed in rather chilling artistic fashion, including coats of arms, chandeliers, chalices, and bells. A similar effect was created at the Brno Ossuary where the remains of some 50,000 people were found stacked in heaps in archways and used as decorative displays and ornamentation. A little less spooky but impressive for its sheer size is the spectacular Schwartzenberg Tomb, a huge crypt dedicated to one of the country's most powerful dynasties.",
          descriptionRU:
            'По всей Чешской Республике находится ряд увлекательных мест, посвященных сохранению останков погибших на войне или от болезней, таких как ужасные эпидемии, охватившие Европу в средневековье. Но что делает эти места еще более интересными, так это зачастую причудливые способы демонстрации этих многовековых человеческих реликвий. Это особенно заметно в маленьком городке Седлец, где находится знаменитая «Костяная церковь», готическая часовня Всех Святых. Здесь, в костнице Седлеца, любопытные будут вознаграждены возможностью увидеть останки примерно 70 000 человек, умерших в период с 14 по 16 века, выставленные в пугающей художественной манере, включая гербы, люстры, чаши и колокольчики. Подобный эффект был создан в Брненской костнице, где останки около 50 000 человек были найдены сложенными в кучах в сводчатых проходах и использовались в качестве декоративных экспонатов и украшений. Немного менее жуткий, но впечатляющий своими размерами впечатляющая гробница Шварценберга, огромный склеп, посвященный одной из самых могущественных династий страны.',
          photo:
            'https://www.planetware.com/photos-large/CZ/czech-republic-crypts-tombs-cemeteries.jpg',
          link: 'https://www.sedlec.info/en/',
        } as AttractionInterface)
      )._id,
    ],
    language: [{ nameEN: 'Czech', nameRU: 'Чешский', nativeName: 'čeština' }],
    flag: 'https://restcountries.eu/data/cze.svg',
    photo:
      'https://images.unsplash.com/photo-1541849546-216549ae216d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJhZ3VlfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80',
    video:
      'https://www.youtube.com/watch?v=MRGv2TY6S_o&ab_channel=KirillNeiezhmakovTimelapse%26Hyperlapse',
  } as CountryInterface);
}
