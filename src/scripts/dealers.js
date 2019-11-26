let arrru = ['Я','я','Ю','ю','Ч','ч','Ш','ш','Щ','щ','Ж','ж','А','а','Б','б','В','в','Г','г','Д','д','Е','е','Ё','ё','З','з','И','и','Й','й','К','к','Л','л','М','м','Н','н', 'О','о','П','п','Р','р','С','с','Т','т','У','у','Ф','ф','Х','х','Ц','ц','Ы','ы','Ь','ь','Ъ','ъ','Э','э'];
let arren = ['Ya','ya','Yu','yu','Ch','ch','Sh','sh','Sh','sh','Zh','zh','A','a','B','b','V','v','G','g','D','d','E','e','E','e','Z','z','I','i','J','j','K','k','L','l','M','m','N','n', 'O','o','P','p','R','r','S','s','T','t','U','u','F','f','H','h','C','c','Y','y','`','`','\'','\'','E', 'e'];
function toLatin(text){
	for(var i=0; i<arrru.length; i++){
		var reg = new RegExp(arrru[i], "g");
		text = text.replace(reg, arren[i]);
    }
	return text;
}
let dealers = [
  {
    city: "Ижевск",
    name: "Ямаха Центр Ижевск",
    address: "г. Ижевск, Проспект Имени конструктора Калашникова М.Т., д.4",
    phone: "+7 (3412) 245-245",
  },
  {
    city: "Киров",
    name: "Авторемстрой",
    address: "г. Киров, ул. Московская, 166-Б",
    phone: "+7 (8332) 621-000",
  },
  {
    city: "Кострома",
    name: "Правый берег",
    address: "г. Кострома, ул. Нижне-Набережная, д. 66",
    phone: "+7 (4942) 53-26-61",
  },
  {
    city: "Москва",
    name: "Ямаха Мотор Центр Каширский",
    address: "г. Москва, 27 км внешней стороны МКАД, ТЦ «Формула Х»",
    phone: "+7 (495) 66-434-77",
  },
  {
    city: "Мурманск",
    name: "Ямаха Центр Мурманск",
    address: "г. Мурманск, ул. Прибрежная, д. 145",
    phone: "+7 (8152) 70-04-11",
  },
  {
    city: "Пермь",
    name: "Актив Драйв",
    address: "г. Пермь, ул. Лифанова, д. 3",
    phone: "+7 (342) 254-42-42",
  },
  {
    city: "Петрозаводск",
    name: "Ямаха Центр Петрозаводск",
    address: "Республика Карелия, г. Петрозаводск, Шуйское ш., д. 11, стр. 1",
    phone: "+7 (8142) 797-081",
  },
  {
    city: "Санкт-Петербург",
    name: "ВВС-Моторс",
    address: "г. Санкт-Петербург, ул. Ново-Рыбинская, д. 19/21",
    phone: "+7 (812) 337-10-41",
  },
  {
    city: "Сыктывкар",
    name: "Коми моторс",
    address: "Республика Коми, г. Сыктывкар, ул. Коммунистическая, д. 85",
    phone: "+7 (8212) 31-09-45",
  },
  {
    city: "Тольятти",
    name: "Джей-Ти",
    address: "Самарская обл., г. Тольятти, ул. Спортивная, д. 34",
    phone: "+7 (8482) 75-13-73",
  },
  {
    city: "Уфа",
    name: "Ямаха Центр Уфа",
    address: "г. Уфа, ул. Менделеева, 134",
    phone: "+7 (347) 277-47-37",
  },
  {
    city: "Ханты-Мансийск",
    name: "Экстрим",
    address: "ХМАО-Югра, г. Ханты-Мансийск, ул. Заводская, д. 24, ТЦ «Меридиан»",
    phone: "+7 (3467) 33-67-83",
  },
  {
    city: "Череповец",
    name: "ИП Мачульский",
    address: "Вологодская обл., г. Череповец, ул. Гоголя, д. 45",
    phone: "+7 (8202) 28-45-65",
  },
  {
    city: "Южно-Сахалинск",
    name: "Вектор",
    address: "Сахалинская обл., г. Южно-Сахалинск, ул. Ленина, д. 561",
    phone: "+7 (4242) 700-300",
  },
];
let dealersList = document.querySelector(".dealers__list");

for (var i=0; i < dealers.length; i++) {
  let divTab = document.createElement("div");
  divTab.className = "tab";
  dealersList.append(divTab);
  let inputCity = document.createElement("input");
  inputCity.setAttribute('type', 'checkbox');
  inputCity.id = toLatin(dealers[i].city);
  inputCity.setAttribute('name', 'tab-group')
  divTab.append(inputCity);
  let labelCity = document.createElement("label");
  labelCity.setAttribute('for', toLatin(dealers[i].city))
  labelCity.className = "tab-title";
  labelCity.innerText = dealers[i].city;
  divTab.append(labelCity);
  let tabSection = document.createElement("section");
  tabSection.className = "tab-content";
  tabSection.insertAdjacentHTML("beforeend", `<p><strong>${dealers[i].name}</strong></p>`);
  tabSection.insertAdjacentHTML("beforeend", `<p>${dealers[i].address}</p>`);
  tabSection.insertAdjacentHTML("beforeend", `<p>${dealers[i].phone}</p>`);
  divTab.append(tabSection);
}
