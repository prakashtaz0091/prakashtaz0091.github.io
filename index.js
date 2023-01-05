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



const addAppointmentBtn = document.getElementById("bottom-nav")
addAppointmentBtn.addEventListener("click", () => {

})

