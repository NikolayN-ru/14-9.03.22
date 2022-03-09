const json = {
  ProfileId: "12w562qrx",
  PersonInfo: {
    Name: "Василий Иванов",
    BirthDate: "12-09-1990",
    Citizenship: "Russian Federation",
  },
  CardInfo: [
    {
      CardNumber: "1234890456793333",
      CardName: "VISA CLASSIC",
      ExpDate: "30-02-2019",
    },
    {
      CardNumber: "1234000145292133",
      CardName: "MASTERCARD GOLD",
      ExpDate: "21-05-2020",
    },
    {
      CardNumber: "1234000145293333",
      CardName: "MIR КЛАССИЧЕСКАЯ",
      ExpDate: "02-12-2019",
    },
  ],
};

function getCardsArrayExpDate(json, date) {
  try {
    let objDate = new Date(date.toString());
    const cards = [];
    json.CardInfo.forEach((el) => {
      let arrNewStr = el.ExpDate.split("-");
      let newArrNewStr = [];
      newArrNewStr = newArrNewStr.concat(
        arrNewStr[1],
        arrNewStr[0],
        arrNewStr[2]
      );
      let elDate = new Date(newArrNewStr);
      if (objDate > elDate) {
        cards.push(el.CardNumber.substr(-4));
      }
    });
    if (cards.length) {
      console.log(cards);
    } else {
      return null;
    }
  } catch {
    return null;
  }
}

const date = "05 20 2020";

getCardsArrayExpDate(json, date);
