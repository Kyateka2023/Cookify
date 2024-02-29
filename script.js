const bars = document.getElementById("fa-bars");

//get the id for the linkHolder
const linkHolderId = document.getElementById("linkHolder");

let counter = 1;
bars.addEventListener("click", () => 
{
    if (counter === 1)
    {
        //it is visible
        linkHolderId.style.top = "50px";
        linkHolderId.style.opacity = "1";
        bars.style.transform = "rotate(180deg)";
        bars.style.fontSize = "1rem";
        bars.style.borderRadius = "100%";
        bars.setAttribute("class", "fa-solid fa-x");
        counter = 0;
    }
    else
    {
        //it is not visible
        bars.style.transform = "rotate(0deg)";
        linkHolderId.style.opacity = "0";
        linkHolderId.style.top = "-1500px";
        bars.style.fontSize = "1.5rem";
        bars.style.borderRadius = "2.5px";
        bars.setAttribute("class", "fa-solid fa-bars");
        counter = 1;
    }

});

{/* <i class="fa-solid fa-x"></i> */}


