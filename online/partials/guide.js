
const sidebar = document.getElementById("guide-sidebar");
const sidebarContents = document.getElementById("sidebar-contents");
const headings = document.querySelectorAll("h1");
const btnPrev = document.getElementById("prev-section");
const btnNext = document.getElementById("next-section");

const sidebarMobileToggle = document.getElementById("mobile-nav-toggle");
const sidebarMobileBtn = document.getElementById("sidebar-invisible");
const btnPrevMobile = document.getElementById("prev-section-mobile");
const btnNextMobile = document.getElementById("next-section-mobile");

let scrollTimeout = null;

// Track current position in sidebar
function refreshSidebar(event) {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function() {
        const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
        let id = null;

        for (h = 1; h < headings.length; h++ ) {
            let header = headings[h];

            if (header.offsetTop <= scrollPos + 100) {
                id = header.id;
            }
        }

        const active = document.querySelector(".active") || sidebarContents.childNodes[1];
        const target = document.getElementById(`nav-${id}`) || sidebarContents.querySelector(".nav-item");

        active.classList.remove("active");
        target.classList.add("active");
        target.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        // Keep the hash in the address bar up-to-date
        if (id)
            history.replaceState(null, null, `#${id}`);

        // Disable next/prev buttons accordingly
        _updateNextPrevButtons();
    }, 100);
}

window.addEventListener("DOMContentLoaded", function() {
    try {
        // Populate sidebar with topics
        const buffer = [];
        for (h = 1; h < headings.length; h++) {
            const heading = headings[h];

            if (heading.tagName.toLowerCase() == "h1") {
                const isNewChapter = heading.innerText.search('•') == 0;
                let text = heading.innerText;

                if (isNewChapter) {
                    text = text.split('•').join("").toLowerCase().replace("mate", "MATE");
                    buffer.push("<div class='nav-separator'></div>");
                }

                buffer.push(`<a id="nav-${heading.id}" class="nav-item ${isNewChapter ? 'nav-chapter' : ''} ${h == 1 ? 'active' : ''}" href="#${heading.id}">${text}</a>`);

                if (isNewChapter === true)
                    heading.innerText = heading.innerText.split('•').join("").toLowerCase().replace("mate", "MATE");
            }
        }
        sidebarContents.innerHTML = buffer.join("");

        // If returning to the page and a hash in the URL, jump!
        if (window.location.href.search("#") != -1) {
            const href = window.location.href.split("#")[1];
            const btn = document.getElementById(`nav-${href}`);
            if (btn)
                btn.click();
        }

        // Some headings are linked within articles. Make sure those links don't have a class.
        const chapterLinks = document.querySelectorAll(".nav-chapter");
        for (c = 0; c < chapterLinks.length; c++) {
            const link = chapterLinks[c];
            if (link.parentElement.tagName.toLowerCase() == "p")
                link.classList.remove("nav-chapter");
        }

        // On mobile, clicking a topic closes the menu.
        sidebarContents.addEventListener("click", function() {
            sidebarMobileToggle.checked = false;
        });

        // Set up triggers
        window.onscroll = refreshSidebar;

        // Ready!
        btnPrev.disabled = false;
        btnNext.disabled = false;
        btnPrevMobile.classList.add("disabled");
        btnNextMobile.classList.add("disabled");
        refreshSidebar();

    } catch(e) {
        console.error(e);
        window.alert("There was an error loading the page. The interactive sidebar may not work.\n\nDetails:\n " + e);
    }
});

// Set up mobile menu
sidebarMobileBtn.addEventListener("click", function() {
    sidebarMobileToggle.checked = false;
});

// Buttons for jumping forward/backwards from sections
function prevSection() {
    const active = document.querySelector(".active");
    let target = active.previousSibling;

    if (!target)
        return null;

    if (target.className == "nav-separator")
        target = target.previousSibling;

    if (!target)
        return null;

    target.click();
}

function nextSection() {
    const active = document.querySelector(".active");
    let target = active.nextSibling;

    if (!target)
        return null;

    if (target.className == "nav-separator")
        target = target.nextSibling;

    if (!target)
        return null;

    target.click();
}

function _updateNextPrevButtons() {
    const active = document.querySelector(".active");
    btnPrev.disabled = false;
    btnNext.disabled = false;
    btnPrevMobile.classList.remove("disabled");
    btnNextMobile.classList.remove("disabled");

    if (!active.previousSibling.previousSibling) {
        btnPrev.disabled = true;
        btnPrevMobile.classList.add("disabled");
    }

    if (!active.nextSibling) {
        btnNext.disabled = true;
        btnNextMobile.classList.add("disabled");
    }
}
