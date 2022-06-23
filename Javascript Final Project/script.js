`use strict`;

// SOS: დასაკლიკებელი ლინკები

const amazon = document.querySelector(`#amazon`);
const walmart = document.querySelector(`#walmart`);
const american = document.querySelector(`#american`);
const apple = document.querySelector(`#apple`);

// SOS: ტექსტები

const company = document.querySelector(`#company`);
const email = document.querySelector(`#mail`);
const input = document.querySelector(`#input`);
const cargo = document.querySelector(`#score`);

// SOS: მონაცემები

const url = `https://bitbucket.org/hpstore/spacex-cargo-planner/raw/204125d74487b1423bbf0453f4dcb53a2161353b/shipments.json`;

// SOS: მონაცემები შენახულია ამ ცვლადში

const companysData = [];

// TASK: დავალება:
// TASK: #1 ჩატვირთვისას json ფაილი ჩაითვირთოს
// TASK: #2 დაკლიკებისას ამოყაროს json იდან შესაბამისი მონაცემები
// TASK: #3 დაითვალოს კარგო ერთმანეთზე მიმატებით // 10

function fetchData() {
  fetch(url).then((response) =>
    response
      .json()
      .then((data) => {
        companysData.push(...data);
      })
      .catch((err) => console.log(err))
  );
}
window.addEventListener(`load`, () => {
  fetchData();
});
console.log(companysData);

function findById(source, gocha) {
  for (var i = 0; i < source.length; i++) {
    if (source[i].id === gocha) {
      return source[i];
    }
  }
  throw "Couldn't find object with id: " + gocha;
}
console.log(findById(companysData, `d3ff0c68892`));

// TODO: კლასებში ჩასვი მიღებული

class MyCompanys {
  constructor(name, email, boxes) {
    this.name = name;
    this.email = email;
    this.boxes = boxes;
  }
}

// let companyName = [];

// fetch(
//   `https://bitbucket.org/hpstore/spacex-cargo-planner/raw/204125d74487b1423bbf0453f4dcb53a2161353b/shipments.json`
// )
//   .then((response) => response.json())
//   .then(
//     (company) =>
//       (companyName = company.map((obj) =>
//         console.log(obj.name, obj.email, obj.boxes)
//       ))
//   );

// let appleOne = companyName[0];
// console.log(appleOne);
// let appleCompany = new MyCompanys(companyName);
// console.log(appleCompany);
