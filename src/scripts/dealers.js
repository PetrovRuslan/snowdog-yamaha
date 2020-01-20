let arrru = ['Я','я','Ю','ю','Ч','ч','Ш','ш','Щ','щ','Ж','ж','А','а','Б','б','В','в','Г','г','Д','д','Е','е','Ё','ё','З','з','И','и','Й','й','К','к','Л','л','М','м','Н','н', 'О','о','П','п','Р','р','С','с','Т','т','У','у','Ф','ф','Х','х','Ц','ц','Ы','ы','Ь','ь','Ъ','ъ','Э','э'];
let arren = ['Ya','ya','Yu','yu','Ch','ch','Sh','sh','Sh','sh','Zh','zh','A','a','B','b','V','v','G','g','D','d','E','e','E','e','Z','z','I','i','J','j','K','k','L','l','M','m','N','n', 'O','o','P','p','R','r','S','s','T','t','U','u','F','f','H','h','C','c','Y','y','`','`','\'','\'','E', 'e'];
function toLatin(text){
	for(var i=0; i<arrru.length; i++){
		var reg = new RegExp(arrru[i], "g");
		text = text.replace(reg, arren[i]);
    }
	return text;
}
let dealers = {
	"Ижевск": {
		"Ямаха Центр Ижевск": {
			address: "г. Ижевск, Проспект Имени конструктора Калашникова М.Т., д.4",
			phone: "+7 (3412) 245-245"
		},
	},
	"Калининград": {
		"Ямаха Центр Калининград": {
			address: "г. Калининград, ул. Ялтинская, д. 125",
			phone: "+7 (4012) 33-44-11"
		},
	},
	"Каменск-Уральский": {
		"Мотоцентр Драйв": {
			address: "Свердловская обл., г. Каменск-Уральский, ул. Озерная, д. 6",
			phone: "+7 (912) 21-11-300"
		},
	},
	"Киров": {
		"Авторемстрой": {
			address: "г. Киров, ул. Московская, 166-Б",
			phone: "+7 (8332) 621-000"
		},
	},
	"Москва": {
		"Ямаха Мотор Центр Каширский": {
			address: "г. Москва, 27 км внешней стороны МКАД, ТЦ «Формула Х»",
			phone: "+7 (495) 66-434-77"
		},
		"Ямаха Мотор Центр Измайлово": {
			address: "Московская обл., г. Балашиха, ул. Гидрогородок, дом 9",
			phone: "+7 (495) 66-434-66"
		},
	},
	"Мурманск": {
		"Ямаха Центр Мурманск": {
			address: "г. Мурманск, ул. Прибрежная, д. 145",
			phone: "+7 (8152) 70-04-11"
		},
	},
	"Пермь": {
		"Актив Драйв": {
			address: "г. Пермь, ул. Лифанова, д. 3",
			phone: "+7 (342) 254-42-42"
		},
	},
	"Петрозаводск": {
		"Ямаха Центр Петрозаводск": {
			address: "Республика Карелия, г. Петрозаводск, Шуйское ш., д. 11, стр. 1",
			phone: "+7 (8142) 797-081"
		},
	},
	"Санкт-Петербург": {
		"ВВС-Моторс": {
			address: "г. Санкт-Петербург, ул. Ново-Рыбинская, д. 19/21",
			phone: "+7 (812) 337-10-41"
		},
	},
	"Сыктывкар": {
		"Коми моторс": {
			address: "Республика Коми, г. Сыктывкар, ул. Коммунистическая, д. 85",
			phone: "+7 (8212) 31-09-45"
		},
	},
	"Тольятти": {
		"Джей-Ти": {
			address: "Республика Коми, г. Сыктывкар, ул. Коммунистическая, д. 85",
			phone: "+7 (8212) 31-09-45"
		},
	},
	"Уфа": {
		"Ямаха Центр Уфа": {
			address: "г. Уфа, ул. Менделеева, 134",
			phone: "+7 (347) 277-47-37"
		},
	},
	"Ханты-Мансийск": {
		"Экстрим": {
			address: "ХМАО-Югра, г. Ханты-Мансийск, ул. Заводская, д. 24, ТЦ «Меридиан»",
			phone: "+7 (3467) 33-67-83"
		},
	},
	"Череповец": {
		"ИП Мачульский": {
			address: "Вологодская обл., г. Череповец, ул. Гоголя, д. 45",
			phone: "+7 (8202) 28-45-65"
		},
	},
	"Южно-Сахалинск": {
		"Вектор": {
			address: "Сахалинская обл., г. Южно-Сахалинск, ул. Ленина, д. 561",
			phone: "+7 (4242) 700-300"
		},
	},
}
let dealersList = document.querySelector(".dealers__list");

for (region in dealers) {
	let divTab = document.createElement("div");
	divTab.className = "tab";
	dealersList.append(divTab);
	let inputCity = document.createElement("input");
	inputCity.setAttribute('type', 'checkbox');
	inputCity.id = toLatin(region);
	inputCity.setAttribute('name', 'tab-group')
	divTab.append(inputCity);
	let labelCity = document.createElement("label");
	labelCity.setAttribute('for', toLatin(region))
	labelCity.className = "tab-title";
	labelCity.innerText = region;
	divTab.append(labelCity);
	let tabSection = document.createElement("section");
    for (prop in dealers[region]) {
    	tabSection.className = "tab-content";
  		tabSection.insertAdjacentHTML("beforeend", `<p><strong>${prop}</strong></p>`);
  		tabSection.insertAdjacentHTML("beforeend", `<p>${dealers[region][prop].address}</p>`);
  		tabSection.insertAdjacentHTML("beforeend", `<p>${dealers[region][prop].phone}</p>`);
  		divTab.append(tabSection);
        console.log(prop);
        console.log(dealers[region][prop].address);
        console.log(dealers[region][prop].phone);
    }
}

