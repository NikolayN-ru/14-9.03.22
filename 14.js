function getCardsArrayExpDate(json, date) {
  try {
    const objDate = new Date(date.toString());
    const candidate = [];
    json.CardInfo.forEach((el) => {
      const arrNewStr = el.ExpDate.split("-");
      let arrMiddle = [];
      arrMiddle = arrMiddle.concat(
        arrNewStr[1],
        arrNewStr[0],
        arrNewStr[2]
      );
      const elDate = new Date(arrMiddle);
      if (objDate > elDate) {
        candidate.push(el.CardNumber.substr(-4));
      }
    });
    if (candidate.length) {
      console.log(candidate);
    } else {
      return null;
    }
  } catch {
    return null;
  }
}

const date = "05 20 2020";

getCardsArrayExpDate(json, date);
