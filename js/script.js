        (function () {
            // Preloader
            const preloader = document.getElementById('preloader');
            window.addEventListener('load', () => {
                setTimeout(() => {
                    preloader.classList.add('hidden');
                    setTimeout(() => preloader.style.display = 'none', 500);
                }, 400);
            });

            // Dark mode
            const themeToggle = document.getElementById('themeToggle');
            const iconToggle = themeToggle.querySelector('i');
            const body = document.body;
            function setTheme(theme) {
                if (theme === 'light') {
                    body.classList.add('light-mode');
                    iconToggle.classList.remove('fa-moon');
                    iconToggle.classList.add('fa-sun');
                    localStorage.setItem('themePreference', 'light');
                } else {
                    body.classList.remove('light-mode');
                    iconToggle.classList.remove('fa-sun');
                    iconToggle.classList.add('fa-moon');
                    localStorage.setItem('themePreference', 'dark');
                }
            }
            const saved = localStorage.getItem('themePreference');
            saved === 'light' ? setTheme('light') : setTheme('dark');
            themeToggle.addEventListener('click', () => {
                body.classList.contains('light-mode') ? setTheme('dark') : setTheme('light');
            });

            // Hamburger
            const hamburger = document.getElementById('hamburgerBtn');
            const menuContainer = document.getElementById('menuContainer');
            hamburger.addEventListener('click', (e) => {
                e.stopPropagation();
                menuContainer.classList.toggle('show');
                const icon = hamburger.querySelector('i');
                if (menuContainer.classList.contains('show')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
            document.querySelectorAll('.menu ul li a').forEach(link => {
                link.addEventListener('click', () => {
                    if (window.innerWidth <= 880) {
                        menuContainer.classList.remove('show');
                        hamburger.querySelector('i').classList.remove('fa-times');
                        hamburger.querySelector('i').classList.add('fa-bars');
                    }
                });
            });
            window.addEventListener('resize', () => {
                if (window.innerWidth > 880 && menuContainer.classList.contains('show')) {
                    menuContainer.classList.remove('show');
                    hamburger.querySelector('i').classList.remove('fa-times');
                    hamburger.querySelector('i').classList.add('fa-bars');
                }
            });

            // Back to top
            const backBtn = document.getElementById('backToTop');
            window.addEventListener('scroll', () => {
                window.scrollY > 350 ? backBtn.classList.add('active') : backBtn.classList.remove('active');
            });
            backBtn.addEventListener('click', (e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });

            // Paid courses enroll button (demo)
            const enrollBtns = document.querySelectorAll('.enroll-btn');
            enrollBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const courseName = btn.getAttribute('data-course') || 'this course';
                    alert(`✅ Enrollment demo: You selected "${courseName}".\nPrice: ${btn.previousElementSibling.innerText}\n\n(Full payment integration coming soon. This is a demo of paid courses.)`);
                });
            });

            // Toggle between login and signup forms
            const toggleLinks = document.querySelectorAll('.toggle-form');
            const socialLoginLinks = document.querySelectorAll('.social-login');
            toggleLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetId = link.getAttribute('data-target');
                    const targetForm = document.getElementById(targetId);
                    const forms = document.querySelectorAll('.form-stack .form');

                    forms.forEach(form => {
                        form.style.display = 'none';
                    });

                    if (targetForm) {
                        targetForm.style.display = 'block';
                    }
                });
            });

            socialLoginLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const provider = link.getAttribute('data-provider');
                    alert(`🔐 You clicked ${provider} login. This is a demo sign-in action.`);
                });
            });

            // Search courses in the page
            const searchInput = document.getElementById('searchInput');
            const searchBtn = document.getElementById('searchButton');
            const courseCards = Array.from(document.querySelectorAll('#courses .course-card'));
            const coursesSection = document.getElementById('courses');
            let searchMessage = document.getElementById('searchMessage');

            if (!searchMessage) {
                searchMessage = document.createElement('p');
                searchMessage.id = 'searchMessage';
                searchMessage.style.marginTop = '12px';
                searchMessage.style.color = '#00c6ff';
                searchMessage.style.fontWeight = '600';
                coursesSection.insertBefore(searchMessage, coursesSection.firstChild.nextSibling);
            }

            function filterCourses(query = '') {
                const value = query.trim().toLowerCase();
                let visibleCount = 0;

                courseCards.forEach(card => {
                    const text = card.textContent.toLowerCase();
                    const matches = text.includes(value);
                    card.style.display = matches ? '' : 'none';
                    if (matches) visibleCount++;
                });

                if (value && visibleCount === 0) {
                    searchMessage.textContent = `No courses found for "${query.trim()}".`;
                    searchMessage.style.display = 'block';
                } else {
                    searchMessage.textContent = '';
                    searchMessage.style.display = 'none';
                }

                if (value) {
                    coursesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }

            searchBtn.addEventListener('click', (e) => {
                e.preventDefault();
                filterCourses(searchInput.value);
            });

            searchInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    filterCourses(searchInput.value);
                }
            });

            searchInput.addEventListener('input', () => {
                if (!searchInput.value.trim()) {
                    filterCourses('');
                }
            });

            // Smooth scroll for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    const hash = this.getAttribute('href');
                    if (hash === "#" || hash === "") return;
                    const target = document.querySelector(hash);
                    if (target) {
                        e.preventDefault();
                        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                });
            });
        })();