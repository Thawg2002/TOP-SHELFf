// drigging scroll x
const scroll_dragging = document.querySelector(".scroll_dragging");
let checkMouseDow = false;
let startMouse = 0;

scroll_dragging.addEventListener("mousedown", (e) => {
    checkMouseDow = true;
    startMouse = e.clientX;
    scroll_dragging.style.cursor = "pointer";
});

scroll_dragging.addEventListener("mouse", () => {});

scroll_dragging.addEventListener("mouseleave", () => {
    checkMouseDow = false;
});
scroll_dragging.addEventListener("mousemove", (e) => {
    if (!checkMouseDow) return;
    scroll_dragging.scrollLeft += startMouse - e.clientX;
});

// filter
const sale1 = document.querySelector("#sale1");
console.log(sale1.disabled);

const sale2 = document.querySelector(".sale2");
sale2.addEventListener("click", () => {
    console.log(sale1.disabled);
});

//
const btn_show_description = document.querySelector(".btn_show_description");
const btn_show_review = document.querySelector(".btn_show_review");
const btn_show_refer = document.querySelector(".btn_show_refer");
const show_description = document.querySelector(".show_description");
const show_review = document.querySelector(".show_review");
const show_refer = document.querySelector(".show_refer");
// show img product
const handle_show_img_product = document.querySelector(
    ".handle_show_img_product",
);
const show_img_product = document.querySelector(".show_img_product");
const bg_show_img_product = document.querySelector(".bg_show_img_product");
// show cart
const show_cart = document.querySelector(".show_cart");
const close_cart = document.querySelector(".close_cart");
const handle_show_cart = document.querySelector(".handle_show_cart");
// show item cart
const items_cart = document.querySelector(".items_cart");
const show_items_cart = document.querySelector(".show_items_cart");
const toggle_show_img_and_bg_show_img = (status) => {
    show_img_product.style.display = status;
    bg_show_img_product.style.display = status;
};
handle_show_img_product.addEventListener("click", () => {
    toggle_show_img_and_bg_show_img("block");
});
bg_show_img_product.addEventListener("click", () => {
    toggle_show_img_and_bg_show_img("none");
    show_cart.style.transform = "translateX(110%)";
});

// toggle cart
close_cart.addEventListener("click", () => {
    show_cart.style.transform = "translateX(110%)";
    bg_show_img_product.style.display = "none";
});
// toggle cart
handle_show_cart.addEventListener("click", () => {
    show_cart.style.transform = "translateX(0)";
    bg_show_img_product.style.display = "block";
});

// show item cart
show_items_cart.addEventListener("click", () => {
    items_cart.style.display = "block";
    show_items_cart.style.display = "none";
});

// ******
const arrBtn = [
    [btn_show_description, show_description],
    [btn_show_review, show_review],
    [btn_show_refer, show_refer],
];
for (let i = 0; i < arrBtn.length; i++) {
    arrBtn[i][0].addEventListener("click", () => {
        arrBtn[i][1].style.display = "block";
        arrBtn[i][0].style.background = "#F2F6F4";
        arrBtn[i][0].style.color = "#05422C";
        arrBtn[i][0].style.borderColor = "#05422C";
        for (let j = 0; j < arrBtn.length; j++) {
            if (j !== i) {
                arrBtn[j][1].style.display = "none";
                arrBtn[j][0].style.background = "none";
                arrBtn[j][0].style.color = "black";
                arrBtn[j][0].style.borderColor = "#F1F1F1";
            }
        }
    });
}
