const daily = document.querySelector(".daily");
const weekly = document.querySelector(".weekly");
const monthly = document.querySelector(".monthly");

const days = [daily,weekly,monthly];

daily.addEventListener("click",()=> {
    clearSelected();
    daily.classList.add("selected");
    fetch("data.json")
    .then(response => response.json())
    .then(data => {
        document.getElementById("horas-work").textContent = data[0].timeframes.daily.current + " hrs";
        document.getElementById("horas-work2").textContent = "Last day - " +  data[0].timeframes.daily.previous + "hrs";

        document.getElementById("horas-ex").textContent = data[3].timeframes.daily.current + " hrs";
        document.getElementById("horas-ex2").textContent = "Last day - " +  data[3].timeframes.daily.previous + "hrs";

        document.getElementById("horas-play").textContent = data[1].timeframes.daily.current + " hrs";
        document.getElementById("horas-play2").textContent = "Last day - " +  data[1].timeframes.daily.previous + "hrs";

        document.getElementById("horas-social").textContent = data[4].timeframes.daily.current + " hrs";
        document.getElementById("horas-social2").textContent = "Last day - " +  data[4].timeframes.daily.previous + "hrs";

        document.getElementById("horas-study").textContent = data[2].timeframes.daily.current + " hrs";
        document.getElementById("horas-study2").textContent = "Last day - " +  data[2].timeframes.daily.previous + "hrs";

        document.getElementById("horas-self").textContent = data[5].timeframes.daily.current + " hrs";
        document.getElementById("horas-self2").textContent = "Last day - " +  data[5].timeframes.daily.previous + "hrs";
    });
})

weekly.addEventListener("click",()=> {
    clearSelected();
    weekly.classList.add("selected");
    fetch("data.json")
    .then(response => response.json())
    .then(data => {
        document.getElementById("horas-work").textContent = data[0].timeframes.weekly.current + " hrs";
        document.getElementById("horas-work2").textContent = "Last week - " +  data[0].timeframes.weekly.previous + "hrs";

        document.getElementById("horas-ex").textContent = data[3].timeframes.weekly.current + " hrs";
        document.getElementById("horas-ex2").textContent = "Last week - " +  data[3].timeframes.weekly.previous + "hrs";

        document.getElementById("horas-play").textContent = data[1].timeframes.weekly.current + " hrs";
        document.getElementById("horas-play2").textContent = "Last week - " +  data[1].timeframes.weekly.previous + "hrs";

        document.getElementById("horas-social").textContent = data[4].timeframes.weekly.current + " hrs";
        document.getElementById("horas-social2").textContent = "Last week - " +  data[4].timeframes.weekly.previous + "hrs";

        document.getElementById("horas-study").textContent = data[2].timeframes.weekly.current + " hrs";
        document.getElementById("horas-study2").textContent = "Last week - " +  data[2].timeframes.weekly.previous + "hrs";

        document.getElementById("horas-self").textContent = data[5].timeframes.weekly.current + " hrs";
        document.getElementById("horas-self2").textContent = "Last week - " +  data[5].timeframes.weekly.previous + "hrs";
    });
})

monthly.addEventListener("click",()=> {
    clearSelected();
    monthly.classList.add("selected");
    fetch("data.json")
    .then(response => response.json())
    .then(data => {
        document.getElementById("horas-work").textContent = data[0].timeframes.monthly.current + " hrs";
        document.getElementById("horas-work2").textContent = "Last month - " +  data[0].timeframes.monthly.previous + "hrs";

        document.getElementById("horas-ex").textContent = data[3].timeframes.monthly.current + " hrs";
        document.getElementById("horas-ex2").textContent = "Last month - " +  data[3].timeframes.monthly.previous + "hrs";

        document.getElementById("horas-play").textContent = data[1].timeframes.monthly.current + " hrs";
        document.getElementById("horas-play2").textContent = "Last month - " +  data[1].timeframes.monthly.previous + "hrs";

        document.getElementById("horas-social").textContent = data[4].timeframes.monthly.current + " hrs";
        document.getElementById("horas-social2").textContent = "Last month - " +  data[4].timeframes.monthly.previous + "hrs";

        document.getElementById("horas-study").textContent = data[2].timeframes.monthly.current + " hrs";
        document.getElementById("horas-study2").textContent = "Last month - " +  data[2].timeframes.monthly.previous + "hrs";

        document.getElementById("horas-self").textContent = data[5].timeframes.monthly.current + " hrs";
        document.getElementById("horas-self2").textContent = "Last month - " +  data[5].timeframes.monthly.previous + "hrs";
    });
})

const clearSelected = ()=> {
    for (let i = 0; i < days.length; i++) {
        days[i].classList.remove("selected")
    }
}

