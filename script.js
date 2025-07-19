const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;

        li.addEventListener("click", () => {
            li.classList.toggle("completed");
        });

        li.addEventListener("dblclick", () => {
            li.remove();
        });

        taskList.appendChild(li);
        taskInput.value="";
    }
});



/*
sbse pehle hmne 3 variable bnae using const jisme
- addBtn html k button ko select krta h 
- taskInput input box ko select krta h jisme user tak likht h
- taskList - vo <ol> ya <ul> list ko select kra h jisme tasks add honge


then "addBtn.addEventListener("click", () => {" ==>> jb bhi hum add button pr click krenge to ye function chlega, jisme humne button pr ek event listener lgaya "click" name ka


then "const taskText = taskInput.value.trim();" ==>> hmne ye line likhi h jisme hmne ek variable bnaya h or jiska mtlb h ki jb "add button" click hoga to input box s text value bhr niklegi as a LIST
or isme ".trim" ka mtlb h ki agr user khali value ya bs space dbata h to vo value button click krne p remove hojaegi 


"if (taskText !== "") {" ==>> then hmne ek if condition lgai h jisme ye check hoga ki agr user n koi value dli h tbhi code age chlega or agr blank choda h to kuch nhi hoga


"const li = document.createElement("li");
        li.textContent = taskText;" ==>>  is line m hmne bola h ki hm ek <li> element create kr rahe h jo ek list item hota h or us <li> k andr jo text hoga vo hoga "taskText" mtlb user ka likha hua task


"li.addEventListener("click", () => {
            li.classList.toggle("completed");
        });" ==>> list item bnne k bd is line m hmne bola h ki jb b koi list item p ek bar click krega to uski class "completed" toggle hogi, toggle use hota h kisi b chij ko add ya remove krne k lie mtlb agr class h to hata to nhi h to lga do or yha p class nhi h to ye ".completed" class ko add kr dega
        ye use hoga task complete dikhane k lie


"li.addEventListener("dblclick", () => {
            li.remove();
        });" ==>> is line ka mtlb h ki jb b koi list item p double click krega to vo "li" element delete hojaega, mtlb task ki list m s vo vala task ht jaega 


"taskList.appendChild(li);
        taskInput.value="";" ==>> isme first line ka mtlb h ki ye "li" element ko list ("ul" ya "ol") k andr add kr deta h 
        or second line ka mtlb h ki task add hone k bd jo input box h vo clear hojaega taki user naya task likh ske




summary : 
    - user task likh k bd add button dabata h - jisse task ek list m add hojata h 
    - task p click krne p complete mark hojata h, us task k text k upr line ajati h jisse pta chl jata h ki task complete hogya h  (line-through)
    - or task p double click krne p task delete ya list m s remove hojaega
*/