
document.addEventListener("DOMContentLoaded", function () {

    // 1. Footer Year
    const yearElement = document.getElementById("year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // 2. Mobile Navigation
    document.querySelectorAll("#navLinks .nav-link").forEach(function (link) {
        link.addEventListener("click", function () {
            const nav = document.getElementById("navLinks");

            if (nav && nav.classList.contains("show") && window.bootstrap) {
                bootstrap.Collapse.getOrCreateInstance(nav).hide();
            }
        });
    });

    // 3. Typing Animation
    const typingText = document.getElementById("typing-text");

    if (typingText) {
        const roles = [
            "Java Developer",
            "Backend Developer",
            "SpringBootDeveloper",
            "Full Stack Developer"
        ];

        let roleIndex = 0;
        let charIndex = roles[0].length;
        let deleting = true;

        function typeAnimation() {
            const currentRole = roles[roleIndex];

            if (deleting) {
                charIndex--;
            } else {
                charIndex++;
            }

            typingText.textContent = currentRole.substring(0, charIndex);

            let speed = deleting ? 180 : 150;

            if (!deleting && charIndex === currentRole.length) {
                deleting = true;
                speed = 2200;
            }

            if (deleting && charIndex === 0) {
                deleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                speed = 700;
            }

            setTimeout(typeAnimation, speed);
        }

        setTimeout(typeAnimation, 1000);
    }

    // 4. Project Filters
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectItems = document.querySelectorAll(".project-item");

    filterButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const selectedFilter = button.dataset.filter;

            filterButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            projectItems.forEach(function (project) {
                const category = project.dataset.category;

                project.style.display =
                    selectedFilter === "all" || category === selectedFilter
                        ? ""
                        : "none";
            });
        });
    });

    // Contact is handled through the public LinkedIn and GitHub profile links.



    // 6. FAQ Accordion
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(function (item) {
        const question = item.querySelector(".faq-question");

        if (!question) return;

        question.addEventListener("click", function () {

            const isAlreadyOpen = item.classList.contains("active");

            faqItems.forEach(function (otherItem) {
                otherItem.classList.remove("active");
            });

            if (!isAlreadyOpen) {
                item.classList.add("active");
            }

        });
    });

    console.log("Portfolio JavaScript loaded successfully.");
});
