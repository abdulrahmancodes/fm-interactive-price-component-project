let root = document.querySelector(":root")
let pageviews = document.querySelector(".pageviews");
let rate = document.querySelector(".amount");
let slider = document.querySelector("#slider");
let discount = document.querySelector(".discount")
let priceList = [["10K", "$8.00"], ["50K", "$12.00"], ["100K", "$16.00"], ["500K", "$24.00"], ["1M", "$36.00"]];
let progressWidth = (100 * slider.value)/4 + "%";


function discountTextchanger() {
    if (document.documentElement.clientWidth < 450) {
        discount.innerHTML = "-25%"
    } else {
        discount.innerHTML = "25% discount"
    }
}

function updatePrice() {

    progressWidth = (100 * slider.value)/4 + "%";

    pageviews.innerHTML = `${priceList[this.value][0]} PAGEVIEWS`;
    rate.innerHTML = priceList[this.value][1];
    priceChange();
    root.style.setProperty("--progressWidth", progressWidth);
}

function priceChange() {
    if (toggle.checked) {
        let price = Number(priceList[slider.value][1].replace(/[^0-9.-]+/g,""));
        rate.innerHTML = `$${price - price/4}` + ".00";
    } else {
        rate.innerHTML = priceList[slider.value][1];
    }
}

discountTextchanger()
slider.addEventListener("input", updatePrice);
toggle.addEventListener("click", priceChange);
root.style.setProperty("--progressWidth", progressWidth);
window.addEventListener("resize", discountTextchanger);
