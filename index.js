//src="https://maps.google.com/maps?q=delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
//https://api.openweathermap.org/data/2.5/weather?q={city}&appid={ API key}
function getData() {
    let city = document.getElementById("city").value;
  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8c63f5815ff9f929dc2b3942f36405e1`;
  
    fetch(url)
      .then(function (res) {
        return res.json();
      })
      .then(function (res) {
        append(res);
        console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      });
    
  }
  
  function getDataLocation(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=8c63f5815ff9f929dc2b3942f36405e1`;
  
    fetch(url)
      .then(function (res) {
        return res.json();
      })
      .then(function (res) {
       
        console.log(res);
         append(res);
      })
      .catch(function (err) {
        console.log(err);
      });

      const url2=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,current&appid=92b225991e59a711b4a6e915d05612ac`
      fetch(url2)
      .then(function(res){
        
        return res.json();
      })
      .then(function(res){
        console.log(res)
        append2(res)
      })
  }

  let day=["आज","सोमवार","मंगलवार","बुधवार","गुरूवार","शुक्रवार","शनिवार","रविवार"]

  function append2(data){
    console.log(data)
    document.querySelector("#forcast").innerHTML=null;
    document.querySelector("#container2").innerHTML=null
    
    let forcastheading=document.createElement("h1");
    forcastheading.innerText="अगले 7 दिन का मौसम पूर्वानुमान";
    document.querySelector("#forcast").append(forcastheading)

    for(let i=0; i<data.daily.length; i++){

    let box=document.createElement("div");
     let d= document.createElement("h3");
      d.innerText=day[i]
      // console.log(d)
    let span=document.createElement("span");
     span.innerHTML=`<i class="fa-solid fa-cloud"></i>`
    let t1=document.createElement("h3");
     t1.innerText=`${(data.daily[i].temp.min-273).toFixed()} \u00B0C`

    let t2=document.createElement("h4");
     t2.innerText=`${(data.daily[i].temp.max-273).toFixed()}  \u00B0C`
     box.append(d,span,t1,t2)
     document.querySelector("#container2").append(box)
    }
    
   
  }
  
  function append(data) {
    console.log(data)
    
    let container = document.getElementById("container");
    let map = document.getElementById("gmap_canvas");
    container.innerHTML = null;
    //city logo
  let s1=document.createElement("span");
  s1.innerHTML='<i class="fa-solid fa-city"></i>';
//clod logo
  let s2=document.createElement("span");
  s2.innerHTML='<i class="fa-solid fa-cloud"></i>';
  //wind logo
  let s3=document.createElement("span");
  s3.innerHTML='<i class="fa-solid fa-wind"></i>';
  //sunrise logo
  let s4=document.createElement("span");
  s4.innerHTML='<i class="fa-solid fa-sun"></i>';
    //sunset logo
  let s5=document.createElement("span");
  s5.innerHTML='<i class="fa-solid fa-sun"></i>';
   //temperature logo
  let s6=document.createElement("span");
  s6.innerHTML='<i class="fa-solid fa-temperature-empty"></i>';
    //temperature down logo
  let s7=document.createElement("span");
  s7.innerHTML='<i class="fa-solid fa-temperature-arrow-down"></i>';
  //temperature up logo
  let s8=document.createElement("span");
  s8.innerHTML='<i class="fa-solid fa-temperature-arrow-up"></i>';
//humidity logo
  let s9=document.createElement("span");
  s9.innerHTML='<i class="fa-solid fa-droplet"></i>';

  let d1=document.createElement("div")
  let d2=document.createElement("div")
  let d3=document.createElement("div")
  let d4=document.createElement("div")
  let d5=document.createElement("div")
  let d6=document.createElement("div")
  let d7=document.createElement("div")
  let d8=document.createElement("div")
  let d9=document.createElement("div")


    let city = document.createElement("div");
    city.innerText = `शहर: ${data.name}`;

   d1.append(s1,city)

    let clouds = document.createElement("div");
    clouds.innerText = `बादल: ${data.weather[0].description}`;

    d2.append(s2,clouds)

    let wind = document.createElement("div");
    wind.innerText = `वायु रफ़्तार: ${data.wind.speed}  कि.मी./घंटा `;

    d3.append(s3,wind)
    
    let second=data.sys.sunrise
    let date=new Date(second*1000)
    // new Date covert sunrise data into actual date and time
    let second1=data.sys.sunset
    let date1=new Date(second1*1000)

    // .toLocaleTimeString() to convert in time
    let sunrise = document.createElement("div");
    sunrise.innerText = `सूर्योदय का समय : ${date.toLocaleTimeString()} पू.`;

    d4.append(s4,sunrise)

    let sunset = document.createElement("div");
    sunset.innerText = `सूर्यास्त का समय : ${date1.toLocaleTimeString()}  अ.`;

    d5.append(s5,sunset)

    let min = document.createElement("div");
    min.innerText = `न्यूनतम तापमान : ${(data.main.temp_min-273).toFixed(2)}  \u00B0C`;

    d6.append(s6,min);
  
    let max = document.createElement("div");
    max.innerText = `अधिकतम तापमान : ${(data.main.temp_max-273).toFixed(2) }  \u00B0C`;

    d7.append(s7,max)
  
    let current = document.createElement("div");
    current.innerText = `वर्तमान तापमान : ${(data.main.temp-273).toFixed(2) }  \u00B0C`;
   
    d8.append(s8,current)
  
    let humidity = document.createElement("div");
    humidity.innerText = `नमी : ${data.main.humidity}  %`;

    d9.append(s9,humidity)


  
    container.append(d1,d2,d3,d4,d5,d6,d7,d8,d9);
    map.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
  }
  
  function getWeather() {

    navigator.geolocation.getCurrentPosition(success);
  
    function success(position) {
      let crd = position.coords;
  
      console.log("Your current position is:");
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
  
      getDataLocation(crd.latitude, crd.longitude);
    }
  }


  
