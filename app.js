window.addEventListener('load', ()=> {

    let long;
    let lat;
    let tempDescription=document.querySelector('.description');
    let timeZone=document.querySelector('.location-timezone');
    let degree=document.querySelector('.degree');
    let icon=document.querySelector('.icon');
    let section=document.querySelector('.degree-section');

    let unit=document.querySelector(".unit");

    if (navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {

            // console.log(position);
            long=position.coords.longitude;
            lat=position.coords.latitude;
            const proxy='https://cors-anywhere.herokuapp.com/';
            const api=`${proxy}api.openweathermap.org/data/2.5/weather?q=Tehran&appid=a484ae9b7689985fdfd0ec578519c6fc`;
           const api1=`${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=a484ae9b7689985fdfd0ec578519c6fc`;
            fetch(api1)

                .then(response =>{

                    return response.json()
                    }
                )

                .then(data=>{
                    console.log(data);
                     const temp=data.main.temp;
                     const desc=data.weather[0].description;
                     degree.textContent=temp;
                     tempDescription.textContent=desc;
                     timeZone.textContent=data.name;
                     icon.src=`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

                     section.addEventListener("click",function () {

                         if (unit.textContent==="F") {

                             unit.textContent="C";
                             let t=(parseFloat(degree.textContent)-273);
                             t=t.toFixed(2);
                             degree.textContent=t;
                         }

                         else if (unit.textContent==="C"){
                             unit.textContent="F";
                             let t=(parseFloat(degree.textContent)+273);
                             t=t.toFixed(2);
                             degree.textContent=t;
                         }

                     });

                })




        });
    }

    else {
        console.log("sorry");
    }





});