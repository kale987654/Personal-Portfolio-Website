// 主题管理模块
class ThemeManager {
    constructor() {
        this.currentTheme = this.getSavedTheme() || 'deep-blue';
        this.init();
    }

    init() {
        this.applyTheme(this.currentTheme);
        this.bindEvents();
    }

    // 绑定主题切换事件
    bindEvents() {
        const themeButtons = document.querySelectorAll('.theme-btn');
        
        themeButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const theme = e.currentTarget.dataset.theme;
                this.switchTheme(theme);
            });
        });
    }

    // 切换主题
    switchTheme(themeName) {
        if (this.currentTheme === themeName) return;
        
        this.currentTheme = themeName;
        this.applyTheme(themeName);
        this.saveTheme(themeName);
        this.updateActiveButton(themeName);
    }

    // 应用主题
    applyTheme(themeName) {
        document.documentElement.setAttribute('data-theme', themeName);
    }

    // 更新激活的按钮
    updateActiveButton(themeName) {
        const themeButtons = document.querySelectorAll('.theme-btn');
        
        themeButtons.forEach(btn => {
            if (btn.dataset.theme === themeName) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    // 保存主题到localStorage
    saveTheme(themeName) {
        try {
            localStorage.setItem('portfolio-theme', themeName);
        } catch (error) {
            console.warn('无法保存主题设置:', error);
        }
    }

    // 从localStorage获取保存的主题
    getSavedTheme() {
        try {
            return localStorage.getItem('portfolio-theme');
        } catch (error) {
            console.warn('无法读取主题设置:', error);
            return null;
        }
    }

    // 获取当前主题
    getCurrentTheme() {
        return this.currentTheme;
    }
}