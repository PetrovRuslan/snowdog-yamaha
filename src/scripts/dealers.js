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
    city: "Киров-на-Дону",
    name: "Авторемстрой",
    address: "г. Киров, Проспект Имени конструктора Калашникова М.Т., д.4",
    phone: "+7 (3412) 245-245",
  },
  {
    city: "Кострома",
    name: "Правый берег",
    address: "г. Кострома, Проспект Имени конструктора Калашникова М.Т., д.4",
    phone: "+7 (3412) 245-245",
  },
];
let dealersList = document.querySelector(".dealers__list");
// function createDealersList(){
    
// }

for (var i=0; i < dealers.length; i++) {
  // createTab();
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
  // tabSection.innerHTML = `<p class="test">${dealers[i].name}</p>`;
  // tabSection.innerHTML = `<p>${dealers[i].address}</p>`;
  // tabSection.append(let a = document.createElement("p"));
  divTab.append(tabSection);
//   for (let obj in dealers[i]) {
    
//     console.log(dealers[i][obj] );
//   }
}
// function createTab(){
//    let divTab = document.createElement("div");
//   divTab.className = "tab";
//   dealersList.append(divTab);
// }
// alert(dealers.length);