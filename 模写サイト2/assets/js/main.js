let hum = document.getElementById("click-btn");
let openMenu = document.getElementById("open-menu");
let humList = document.querySelector(".hamburger-menu-list");
//ボタンを押した時のハンバーガーの動き
hum.addEventListener('click',function(){
    hum.classList.toggle("active");
})

// ボタンを押したらハンバーガーメニューにクラスを追加
hum.addEventListener('click',function(){
    openMenu.classList.toggle("is-active");
})

//ハンバーガーメニューを押した際のメニューリストの動き

// humLists.forEach(function () {
//     hum.addEventListener('click', function(humList){
//         humList.classList.add("active");
//     })
// });
hum.addEventListener('click',function(){
    humList.classList.toggle("active");
})