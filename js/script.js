let menuLines = document.getElementById("menu_lines")

let aboutBtn = document.getElementById("about-btn")
let projectBtn = document.getElementById("project-btn")
let skillBtn = document.getElementById("skill-btn")
let contactBtn = document.getElementById("contact-btn")

let projectsPart = document.getElementById("projects-part")
let skillsPart = document.getElementById("skills-part")
let contactsPart = document.getElementById("contacts-part")
let aboutPart = document.getElementById("about-part")

function showAndHideTabs(aboutTab, projectTab, contactTab, skillTab) {
  aboutPart.style.display = aboutTab
  projectsPart.style.display = projectTab
  contactsPart.style.display = contactTab
  skillsPart.style.display = skillTab
}

let sideNavAboutBtn = document.getElementById("side_nav_about-btn")
let sideNavProjectBtn = document.getElementById("side_nav_project-btn")
let sideNavSkillBtn = document.getElementById("side_nav_skill-btn")
let sideNavContactBtn = document.getElementById("side_nav_contact-btn")

function activeSideNavBtn(aboutBtn = false, projectBtn = false, skillBtn = false, contactBtn = false) {
  if (aboutBtn) {
    sideNavAboutBtn.classList.add("nav-btn-active")
  } else {
    sideNavAboutBtn.classList.remove("nav-btn-active")
  }
  if (projectBtn) {
    sideNavProjectBtn.classList.add("nav-btn-active")
  } else {
    sideNavProjectBtn.classList.remove("nav-btn-active")
  }
  if (skillBtn) {
    sideNavSkillBtn.classList.add("nav-btn-active")
  } else {
    sideNavSkillBtn.classList.remove("nav-btn-active")
  }
  if (contactBtn) {
    sideNavContactBtn.classList.add("nav-btn-active")
  } else {
    sideNavContactBtn.classList.remove("nav-btn-active")
  }
}

function activeMainNavBtn(aboutNavBtn = false, projectNavBtn = false, skillNavBtn = false, contactNavBtn = false) {
  if (aboutNavBtn) {
    aboutBtn.classList.add("nav-btn-active")
  } else {
    aboutBtn.classList.remove("nav-btn-active")
  }
  if (projectNavBtn) {
    projectBtn.classList.add("nav-btn-active")
  } else {
    projectBtn.classList.remove("nav-btn-active")
  }
  if (skillNavBtn) {
    skillBtn.classList.add("nav-btn-active")
  } else {
    skillBtn.classList.remove("nav-btn-active")
  }
  if (contactNavBtn) {
    contactBtn.classList.add("nav-btn-active")
  } else {
    contactBtn.classList.remove("nav-btn-active")
  }
}

showAndHideTabs("", "none", "none", "none", "none")

activeMainNavBtn(true, false, false, false, false)

document.addEventListener("DOMContentLoaded", function () {
  projectBtn.addEventListener("click", function () {
    activeMainNavBtn(false, true, false, false)
    activeSideNavBtn(false, true, false, false)
    showAndHideTabs("none", "", "none", "none")
  })

  skillBtn.addEventListener("click", function () {
    activeMainNavBtn(false, false, true, false)
    activeSideNavBtn(false, false, true, false)
    showAndHideTabs("none", "none", "none", "")
  })

  contactBtn.addEventListener("click", function () {
    activeMainNavBtn(false, false, false, true)
    activeMainNavBtn(false, false, false, true)
    showAndHideTabs("none", "none", "", "none")
  })

  aboutBtn.addEventListener("click", function () {
    activeMainNavBtn(true, false, false, false)
    activeSideNavBtn(true, false, false, false)
    showAndHideTabs("", "none", "none", "none")
  })

  // side nav starts ...

  let sideNavAboutBtn = document.getElementById("side_nav_about-btn")
  let sideNavProjectBtn = document.getElementById("side_nav_project-btn")
  let sideNavSkillBtn = document.getElementById("side_nav_skill-btn")
  let sideNavContactBtn = document.getElementById("side_nav_contact-btn")

  sideNavProjectBtn.addEventListener("click", function () {
    activeMainNavBtn(false, true, false, false)
    activeSideNavBtn(false, true, false, false)
    showAndHideTabs("none", "", "none", "none")
    document.getElementById("side-nav").classList.remove("show-side-nav")
    document.getElementById("side-nav").classList.add("hide-side-nav")
  })
  sideNavSkillBtn.addEventListener("click", function () {
    activeMainNavBtn(false, false, true, false)
    activeSideNavBtn(false, false, true, false)
    showAndHideTabs("none", "none", "none", "")
    document.getElementById("side-nav").classList.remove("show-side-nav")
    document.getElementById("side-nav").classList.add("hide-side-nav")
  })
  sideNavContactBtn.addEventListener("click", function () {
    activeMainNavBtn(false, false, false, true)
    activeSideNavBtn(false, false, false, true)
    showAndHideTabs("none", "none", "", "none")
    document.getElementById("side-nav").classList.remove("show-side-nav")
    document.getElementById("side-nav").classList.add("hide-side-nav")
  })
  sideNavAboutBtn.addEventListener("click", function () {
    activeMainNavBtn(true, false, false, false)
    activeSideNavBtn(true, false, false, false)
    showAndHideTabs("", "none", "none", "none")
    document.getElementById("side-nav").classList.remove("show-side-nav")
    document.getElementById("side-nav").classList.add("hide-side-nav")
  })

  // side nav ends ...
})

function openNav() {
  document.getElementById("side-nav").classList.remove("hide-side-nav")
  document.getElementById("side-nav").classList.add("show-side-nav")
}

function closeNav() {
  document.getElementById("side-nav").classList.remove("show-side-nav")
  document.getElementById("side-nav").classList.add("hide-side-nav")
}
