// const counters = document.querySelectorAll(".count");
// const speed = 100;

// counters.forEach((counter) => {
//     const updateCount = () => {
//         const target = parseInt(+counter.getAttribute("data-target"));
//         const count = parseInt(+counter.innerText);
//         const increment = Math.trunc(target / speed);
//         console.log(increment);

//         if (count < target) {
//         counter.innerText = count + increment;
//         setTimeout(updateCount, 1);
//         } else {
//         count.innerText = target;
//         }
//     };
//     updateCount();
// });
const form = document.querySelector('form'),
statusTxt = form.querySelector('.button-area span');

form.onsubmit = (e)=>{
    e.preventDefault();
    statusTxt.style.color = "#618a9b";
    statusTxt.style.display = 'block';
    statusTxt.innerText = "Sending your message...."
    form.classList.add("disabled")

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "message.php", true);
    xhr.onload = ()=>{
        if(xhr.readyState == 4 && xhr.status == 200){
            let response = xhr.response;
            if(response.indexOf("Email and password field is required!") != -1 || response.indexOf("Enter a valid email address!") || 
response.indexOf("Email and password field is required!") ){
                statusTxt.style.color = "red";
            }else{
                form.reset();
                setTimeout(()=>{
                    statusTxt.style.display = "none";
                }, 3000);
            }
            statusTxt.innerText = response;
            form.classList.remove("disabled")
        }
    }
    let formData = new FormData(form);
    xhr.send(formData);
}



let section_counter = document.querySelector('#section_counter')
let counters = document.querySelectorAll('.counter-item .counter')



let CounterObserver = new IntersectionObserver((entries, observer) => {
    let[entry] = entries
    if(!entry.isIntersecting)return;
    let speed= 40;
counters.forEach((counter ,index) =>{
    function UpdateCounter(){
        const targetNumber = +counter.dataset.target;
        const initialNumber = +counter.innerText;
        const incPerCount = targetNumber / speed;
        if(initialNumber < targetNumber){
            counter.innerText = Math.ceil(initialNumber + incPerCount);
            setTimeout(UpdateCounter,40);
        }
    }
    UpdateCounter()

if(counter.parentElement.style.animation){
    counter.parentElement.style.animation ="";
} 
else{
    counter.parentElement.style.animation = `slide-up 0.3s ease forwards ${index / counters.length + 0.5
    }s`;
    }
});
observer.unobserve(section_counter);
},
{
    root:null,
    threshold:0.4,
})
CounterObserver.observe(section_counter)