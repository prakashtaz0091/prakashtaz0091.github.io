let goToTopBtn = document.getElementById("to-top-btn")
window.addEventListener("scroll",()=>{
    if(window.scrollY>1400){
        goToTopBtn.classList.remove("display-none")
        goToTopBtn.classList.add("display-block")
    }else{
        goToTopBtn.classList.remove("display-block")
        goToTopBtn.classList.add("display-none")

    }
})


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


let contactLink = document.getElementById("contact-link")
contactLink.addEventListener("click",()=>{
    sidebarCloseBtn.click()
})

let noOfProjectsHTML = document.getElementById("noOfProjects")

const noOfProjects = document.getElementsByClassName("project-card").length

noOfProjectsHTML.innerText = noOfProjects


let noOfGainsHTML = document.getElementById("noOfGains")

const noOfGains = document.getElementById("gains-cards").children.length

noOfGainsHTML.innerText = noOfGains


let noOfSkillsHTML = document.getElementById("noOfSkills")

const noOfSkills = document.getElementById("skills-cards").children.length

noOfSkillsHTML.innerText = noOfSkills

let noOfArtsHTML = document.getElementById("noOfArts")

const noOfArts = document.getElementById("art-cards").children.length

noOfArtsHTML.innerText = noOfArts



