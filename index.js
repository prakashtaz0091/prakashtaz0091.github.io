let sidebarCloseBtn = document.getElementById("sidebar-close-btn")
let sidebar = document.getElementById("sidebar")

sidebarCloseBtn.addEventListener("click", () => {
    sidebar.classList.remove("sidebar-show")
    sidebar.classList.add("sidebar-collapse")
})


let sidebarShowBtn = document.getElementById("sidebar-show-btn")

sidebarShowBtn.addEventListener("click", () => {
    sidebar.classList.remove("sidebar-collapse")
    sidebar.classList.add("sidebar-show")
})




let noOfProjectsHTML = document.getElementById("noOfProjects")

const noOfProjects = document.getElementsByClassName("project-card").length

noOfProjectsHTML.innerText = noOfProjects


let noOfGainsHTML = document.getElementById("noOfGains")

const noOfGains = document.getElementsByClassName("gains-cards").children.length

noOfGainsHTML.innerText = noOfGains


