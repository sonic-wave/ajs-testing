export default class Validator {
  constructor() {
    this.validateInput = document.querySelector(".validateInput");
    this.validateBtn = document.querySelector(".validateBtn");
    this.validateForm = document.querySelector(".validateForm");
    this.card = document.querySelectorAll(".card");
    this.luhnCheck = document.querySelector(".luhnCheck");
  }

  checkLuhn(ccn) {
    const ccnS = ccn.toString();
    let sum = 0;
    const parity = ccnS.length % 2;
    for (let i = 0; i < ccnS.length; i += 1) {
      let digit = Number(ccnS[i]);
      if (i % 2 === parity) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      sum += digit;
    }
    return Number(sum % 10) === 0;
  }

  checkBankName(ccn) {
    const ccnFirstDigit = Number(ccn[0]);
    const ccnTwoDigits = Number(ccn.slice(0, 2));
    const ccnThreeDigits = Number(ccn.slice(0, 3));
    const ccnFourDigits = Number(ccn.slice(0, 4));

    if (ccnFirstDigit === 4) {
      this.card.forEach((element) => element.classList.add("cardTurnGrey"));
      this.card[0].classList.remove("cardTurnGrey");
      return;
    }

    if (
      (ccnTwoDigits >= 51 && ccnTwoDigits <= 55) ||
      (ccnFourDigits >= 2211 && ccnFourDigits <= 2720)
    ) {
      this.card.forEach((element) => element.classList.add("cardTurnGrey"));
      this.card[1].classList.remove("cardTurnGrey");
      return;
    }

    if (ccnTwoDigits === 34 || ccnTwoDigits === 37) {
      this.card.forEach((element) => element.classList.add("cardTurnGrey"));
      this.card[2].classList.remove("cardTurnGrey");
      return;
    }

    if (
      ccnTwoDigits === 65 ||
      ccnFourDigits === 6011 ||
      (ccnThreeDigits >= 644 && ccnThreeDigits <= 649)
    ) {
      this.card.forEach((element) => element.classList.add("cardTurnGrey"));
      this.card[3].classList.remove("cardTurnGrey");
      return;
    }

    if (ccnFourDigits >= 3528 && ccnFourDigits <= 3589) {
      this.card.forEach((element) => element.classList.add("cardTurnGrey"));
      this.card[4].classList.remove("cardTurnGrey");
      return;
    }

    if (ccnFourDigits >= 3528 && ccnFourDigits <= 3589) {
      this.card.forEach((element) => element.classList.add("cardTurnGrey"));
      this.card[4].classList.remove("cardTurnGrey");
      return;
    }

    if (
      ccnTwoDigits === 36 ||
      ccnTwoDigits === 38 ||
      ccnTwoDigits === 39 ||
      (ccnThreeDigits >= 300 && ccnThreeDigits <= 305)
    ) {
      this.card.forEach((element) => element.classList.add("cardTurnGrey"));
      this.card[5].classList.remove("cardTurnGrey");
      return;
    }

    if (
      ccnTwoDigits === 36 ||
      ccnTwoDigits === 38 ||
      ccnTwoDigits === 39 ||
      (ccnThreeDigits >= 300 && ccnThreeDigits <= 305)
    ) {
      this.card.forEach((element) => element.classList.add("cardTurnGrey"));
      this.card[5].classList.remove("cardTurnGrey");
      return;
    }

    if (ccnFourDigits >= 2200 && ccnFourDigits <= 2204) {
      this.card.forEach((element) => element.classList.add("cardTurnGrey"));
      this.card[5].classList.remove("cardTurnGrey");
      return;
    }
  }

  setListeners() {
    this.validateBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (this.checkLuhn(this.validateInput.value)) {
        this.luhnCheck.textContent = " passed";
        this.luhnCheck.classList.add('luhn-succes');
      } else {
        this.luhnCheck.textContent = " not passed";
      }
      this.card.forEach((element) => element.classList.remove("cardTurnGrey"));
      this.checkBankName(this.validateInput.value);
      this.luhnCheck.classList.add('luhn-error');
    });

    this.validateInput.addEventListener("input", () => {
      if (this.validateInput.value === "") {
        this.card.forEach((element) =>
          element.classList.remove("cardTurnGrey"),
        );
        this.luhnCheck.textContent = "";
        this.luhnCheck.classList.add('luhn-succes');
        this.luhnCheck.classList.remove('luhn-error');
      }
    });
  }
}

const validator = new Validator();
validator.setListeners();
