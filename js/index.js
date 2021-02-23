const heading = document.querySelector('.heading');


heading.addEventListener('click', function() {
    
    let newDiv = document.createElement('p');
    newDiv.className = "child";
    newDiv.setAttribute("contenteditable", "true");
    newDiv.innerText = localStorage.getItem('text');
    const container = document.querySelector(".wrapper");
    container.appendChild(newDiv);

     const child = document.querySelector(".child");
     child.addEventListener("mouseleave", function() {
        localStorage.setItem("text",child.innerText);
    })

});

