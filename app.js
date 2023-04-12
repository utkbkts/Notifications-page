const notifications = document.getElementById("notifications")
const mark = document.getElementById("mark")
const card = document.querySelectorAll(".card");

notifications.innerText = card.length;

card.forEach((message)=>{
    message.addEventListener("click",()=>{
        message.classList.remove("card")
const card = document.querySelectorAll(".card")
notifications.innerText = card.length;


    })
})

mark.addEventListener("click",()=>{
    card.forEach((message)=>{
        message.classList.remove("card")
        const card = document.querySelectorAll(".card")
        notifications.innerText = card.length;
    })
})

















































































































