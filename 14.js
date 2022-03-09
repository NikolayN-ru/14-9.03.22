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
