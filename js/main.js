// 主应用程序
class PortfolioApp {
    constructor() {
        this.themeManager = null;
        this.navigationManager = null;
        this.resumeHandler = null;
        this.init();
    }

    async init() {
        try {
            // 初始化各模块
            this.themeManager = new ThemeManager();
            this.navigationManager = new NavigationManager();
            this.resumeHandler = new ResumeHandler();

            // 更新个人信息
            this.updatePersonalInfo();
            
            // 加载项目数据
            this.loadProjects();
            
            // 初始化技能进度条
            this.initSkillProgress();
            
            // 绑定全局事件
            this.bindGlobalEvents();

            console.log('作品集网站初始化完成');
        } catch (error) {
            console.error('初始化失败:', error);
        }
    }

    // 加载项目数据
    // 加载项目数据
    loadProjects() {
        const projectsGrid = document.getElementById('projects-grid');
        
        if (!projectsGrid) return;

        projectsGrid.innerHTML = CONFIG.projects.map(project => `
            <article class="project-card" data-project-id="${project.id}" data-stage="${project.stage}">
                <div class="project-image" style="background: ${project.gradient}">
                    <div class="project-overlay">
                        <div class="project-links">
                            <a href="${project.demoUrl}" class="project-link" title="查看演示" target="_blank">
                                <i class="fas fa-external-link-alt"></i>
                            </a>
                            <a href="${project.codeUrl}" class="project-link" title="查看源代码" target="_blank">
                                <i class="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                    <div class="project-icon">
                        <i class="${project.icon}"></i>
                    </div>
                    <div class="project-stage ${project.stage}">
                        ${project.stageText}
                    </div>
                </div>
                <div class="project-content">
                    <div class="project-meta">
                        <span class="project-duration">${project.duration}</span>
                        <span class="project-difficulty ${project.difficulty}">${project.difficulty}</span>
                    </div>
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    
                    <div class="project-learnings">
                        <strong>主要收获：</strong>
                        <ul>
                            ${project.learnings.map(learning => 
                                `<li>${learning}</li>`
                            ).join('')}
                        </ul>
                    </div>
                    
                    <div class="project-tech">
                        ${project.technologies.map(tech => 
                            `<span class="tech-tag">${tech}</span>`
                        ).join('')}
                    </div>
                </div>
            </article>
        `).join('');
    }

    // 更新个人信息
    updatePersonalInfo() {
        const personalInfo = CONFIG.personalInfo;
        
        // 更新页面标题
        document.title = `${personalInfo.name} - ${personalInfo.title}`;
        
        // 更新导航栏姓名
        const brandText = document.querySelector('.brand-text');
        if (brandText) {
            brandText.textContent = personalInfo.name;
        }
        
        // 更新导航栏Logo缩写（取姓名的前两个字符）
        const logo = document.querySelector('.logo');
        if (logo) {
            // 使用配置中的logo缩写，如果没有就使用姓名前两个字符
            const logoText = personalInfo.logo || personalInfo.name.substring(0, 2);
            logo.textContent = logoText;
        }
        
        // 更新首页姓名
        const heroName = document.querySelector('.hero-title .name');
        if (heroName) {
            heroName.textContent = personalInfo.name;
        }
        
        // 更新首页职位
        const heroTitle = document.querySelector('.hero-title .title');
        if (heroTitle) {
            heroTitle.textContent = personalInfo.title;
        }
        
        // 更新联系信息
        this.updateContactInfo(personalInfo);
    }

    // 更新联系信息
    updateContactInfo(personalInfo) {
        // 更新邮箱
        const emailElement = document.querySelector('.contact-item:nth-child(1) p');
        if (emailElement) {
            emailElement.textContent = personalInfo.email;
        }
        
        // 更新GitHub
        const githubElement = document.querySelector('.contact-item:nth-child(2) p');
        if (githubElement) {
            githubElement.textContent = personalInfo.github;
        }
        
        // 更新电话
        const phoneElement = document.querySelector('.contact-item:nth-child(3) p');
        if (phoneElement) {
            phoneElement.textContent = personalInfo.phone;
        }
        
        // 更新关于我区域的联系按钮
        const aboutContactBtn = document.querySelector('.about .btn');
        if (aboutContactBtn && aboutContactBtn.getAttribute('href') === '#contact') {
            aboutContactBtn.textContent = `联系${personalInfo.name}`;
        }
    }

    // 初始化技能进度条
    initSkillProgress() {
        // 等待DOM完全加载后执行
        setTimeout(() => {
            const progressBars = document.querySelectorAll('.skill-progress');
            
            progressBars.forEach(bar => {
                const level = bar.dataset.level;
                if (level) {
                    // 使用setTimeout触发动画
                    setTimeout(() => {
                        bar.style.width = `${level}%`;
                    }, 100);
                }
            });
        }, 500);
    }

    // 绑定全局事件
    bindGlobalEvents() {
        // 联系表单提交
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                this.handleContactSubmit(e);
            });
        }

        // 页面加载完成后的动画
        window.addEventListener('load', () => {
            this.handlePageLoad();
        });

        // 错误处理
        window.addEventListener('error', (e) => {
            console.error('全局错误:', e.error);
        });
    }

    // 处理联系表单提交
    handleContactSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        
        // 这里可以添加表单验证
        if (this.validateContactForm(formProps)) {
            // 模拟表单提交
            this.showFormSuccess();
            e.target.reset();
        }
    }

    // 验证联系表单
    validateContactForm(data) {
        const { name, email, message } = data;
        
        if (!name.trim()) {
            this.showFormError('请输入您的姓名');
            return false;
        }
        
        if (!email.trim() || !this.isValidEmail(email)) {
            this.showFormError('请输入有效的邮箱地址');
            return false;
        }
        
        if (!message.trim()) {
            this.showFormError('请输入消息内容');
            return false;
        }
        
        return true;
    }

    // 验证邮箱格式
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // 显示表单成功提示
    showFormSuccess() {
        this.showToast('消息发送成功！我会尽快回复您。', 'success');
    }

    // 显示表单错误提示
    showFormError(message) {
        this.showToast(message, 'error');
    }

    // 显示提示信息
    showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.textContent = message;
        toast.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'error' ? '#e74c3c' : type === 'success' ? '#27ae60' : '#3498db'};
            color: white;
            padding: 12px 20px;
            border-radius: var(--border-radius);
            box-shadow: var(--shadow-lg);
            z-index: 10000;
            transition: all 0.3s ease;
        `;

        document.body.appendChild(toast);

        // 3秒后自动移除
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.parentNode.removeChild(toast);
                }
            }, 300);
        }, 3000);
    }

    // 页面加载完成处理
    handlePageLoad() {
        document.body.classList.add('loaded');
        
        // 触发技能进度条动画
        this.initSkillProgress();
    }
}

// 初始化应用程序
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioApp();
});