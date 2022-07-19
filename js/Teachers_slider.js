var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
    },
});



let teacher_slider = document.getElementById("teacher_slider");
let Teachers = [];

if(JSON.parse(localStorage.getItem("teacherRecord")) == null) {
    Teachers=[];
}
else {
    Teachers = JSON.parse(localStorage.getItem("teacherRecord"));
    Display1();
}

Display1();

function Display1() {
    let val = ``;

    for(let i = 0; i < Teachers.length; i++) {
        val +=`<div class="swiper-slide" onclick="Teacher_pass(${i})">
        <div class="card" style="width: 270px; height: 400px; margin-left: 40px;">
            <img class="card-img-top" src="${Teachers[i].Photo}" alt=" This is image teacher.">
            <div class="card-body">
                <h5 class="card-title" style="font-weight: bold;">${Teachers[i].Name}</h5>
                <p class="card-text">${Teachers[i].Position}</p>
            </div>
        </div>
    </div>`;
    }
    teacher_slider.innerHTML = val;
}
function Teacher_pass(id)
{
    localStorage.setItem('Teacherid',id);
    window.location.href = 'TEACHER.html';
}