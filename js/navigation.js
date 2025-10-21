// 导航管理模块
class NavigationManager {
    constructor() {
        this.header = document.getElementById('header');
        this.navMenu = document.getElementById('nav-menu');
        this.hamburger = document.getElementById('hamburger');
        this.navLinks = document.querySelectorAll('.nav-link');
        this.init();
    }

    init() {
        this.bindEvents();
        this.setActiveNavLink();
    }

    // 绑定事件
    bindEvents() {
        // 汉堡菜单点击事件
        if (this.hamburger) {
            this.hamburger.addEventListener('click', () => {
                this.toggleMobileMenu();
            });
        }

        // 导航链接点击事件
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                this.handleNavClick(e);
            });
        });

        // 滚动事件
        window.addEventListener('scroll', () => {
            this.handleScroll();
        });

        // 点击页面其他区域关闭移动菜单
        document.addEventListener('click', (e) => {
            this.handleDocumentClick(e);
        });
    }

    // 切换移动菜单
    toggleMobileMenu() {
        this.navMenu.classList.toggle('active');
        this.hamburger.classList.toggle('active');
    }

    // 处理导航点击
    handleNavClick(e) {
        e.preventDefault();
        
        const targetId = e.currentTarget.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            // 平滑滚动到目标区域
            this.scrollToSection(targetSection);
            
            // 关闭移动菜单
            if (this.navMenu.classList.contains('active')) {
                this.toggleMobileMenu();
            }
        }
    }

    // 平滑滚动到指定区域
    scrollToSection(section) {
        const headerHeight = this.header.offsetHeight;
        const sectionTop = section.offsetTop - headerHeight;
        
        window.scrollTo({
            top: sectionTop,
            behavior: 'smooth'
        });
    }

    // 处理滚动事件
    handleScroll() {
        this.toggleHeaderShadow();
        this.setActiveNavLink();
    }

    // 切换头部阴影
    toggleHeaderShadow() {
        if (window.scrollY > 100) {
            this.header.style.boxShadow = 'var(--shadow-lg)';
        } else {
            this.header.style.boxShadow = 'var(--shadow)';
        }
    }

    // 设置当前活动的导航链接
    setActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                this.navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // 处理文档点击（关闭移动菜单）
    handleDocumentClick(e) {
        if (!this.navMenu.contains(e.target) && 
            !this.hamburger.contains(e.target) && 
            this.navMenu.classList.contains('active')) {
            this.toggleMobileMenu();
        }
    }
}