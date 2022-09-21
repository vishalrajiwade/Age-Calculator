const container = document.querySelector(".container");
const err = document.querySelector(".error");
const dob = document.querySelector("#dob");



container.sty
dob.addEventListener("change", () => {
    getAge();
})  

function getAge(){
    let date = new Date(dob.value).getDate();
    let month = new Date(dob.value).getMonth() +1;
    let year = new Date(dob.value).getFullYear();
    calcAge(date, month, year);
}


function calcAge(date, month, year){ 
    // Current Date, Month and Year
    let currentDate = new Date().getDate();
    let currentMonth = new Date().getMonth() +1;
    let currentYear = new Date().getFullYear();

    // Age year, month and days
    let ageYear = currentYear - year;

    let ageMonth = currentMonth - month;

    let ageDays = currentDate - date;


    if(date > currentDate && month > currentMonth && year > currentYear){
        err.style.display = "block";
        document.querySelector(".age").style.display = "none";
        document.querySelector(".desc").style.display = "none";
    }else if(date > currentDate && month < currentMonth && year > currentYear){
        err.style.display = "block";
        document.querySelector(".age").style.display = "none";
        document.querySelector(".desc").style.display = "none";
    }else if(date < currentDate && month > currentMonth && year > currentYear){
        err.style.display = "block";
        document.querySelector(".age").style.display = "none";
        document.querySelector(".desc").style.display = "none";
    }else if(date < currentDate && month > currentMonth && year > currentYear){
        err.style.display = "block";
        document.querySelector(".age").style.display = "none";
        document.querySelector(".desc").style.display = "none";
    }else if(date > currentDate && month > currentMonth && year == currentYear){
        err.style.display = "block";
        document.querySelector(".age").style.display = "none";
        document.querySelector(".desc").style.display = "none";
    }else if(date < currentDate && month > currentMonth && year == currentYear){
        err.style.display = "block";
        document.querySelector(".age").style.display = "none";
        document.querySelector(".desc").style.display = "none";
    }else if(date > currentDate && month == currentMonth && year == currentYear){
        err.style.display = "block";
        document.querySelector(".age").style.display = "none";
        document.querySelector(".desc").style.display = "none";
    } else {
        document.querySelector(".age").style.display = "block";
        document.querySelector(".desc").style.display = "block";
        err.style.display = "none";
        // If date of dob is greater than date of current date
        if(ageDays < 0){
            ageMonth--;
            if((currentMonth - 1) % 2 == 0 && currentMonth >7){
                ageDays = 31 + ageDays;
            } else if((currentMonth - 1) % 2 == 0 && currentMonth <= 7) {
                if((currentMonth - 1) == 2 && currentYear % 4 == 0){
                    ageDays = 29 + ageDays;
                }else if((currentMonth - 1) == 2 && currentYear % 4 != 0){
                    ageDays = 28 + ageDays;
                }else{
                    ageDays = 30 + ageDays;
                }
                
            }
            else if((currentMonth - 1) % 2 != 0 && currentMonth >7){
                ageDays = 30 + ageDays;
            } else if((currentMonth - 1) % 2 != 0 && currentMonth <= 7) {
                ageDays = 31 + ageDays;
            }
        }

        //If Month of dob is greater than month of current date
        if(ageMonth < 0){
            ageYear--;
            ageMonth += 12;
        }

        displayAge(ageYear, ageMonth, ageDays);
    }

    
}

function displayAge(ageYear, ageMonth, ageDays){
    document.querySelector("#years").innerHTML = ageYear;
    document.querySelector("#months").innerHTML = ageMonth;
    document.querySelector("#days").innerHTML = ageDays;
    
}

