const themeColors = document.querySelectorAll('[name="theme"]');
const storeTheme = function (theme) {
    localStorage.setItem('theme', theme);
}
const applyTheme = function () {
    const activeTheme = localStorage.getItem('theme');
    themeColors.forEach((themOption) => {
        if (activeTheme === themOption.id) {
            themOption.checked = true;
        }
    })
}
themeColors.forEach((themOption) => {
    themOption.addEventListener('click', () => {
        console.log(themOption)
        storeTheme(themOption.id)
    })
})
document.onload = applyTheme();
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
function function1() {
    var input, filter, ul, li, a, i, textValue;
    input = document.getElementById('filter');
    filter = input.value.toUpperCase();
    ul = document.getElementById('items');
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        textValue = li[i].textContent || li[i].innerText;
        console.log(textValue);
        if (textValue.toUpperCase().includes(filter)) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}