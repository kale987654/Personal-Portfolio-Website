// 简历处理模块
class ResumeHandler {
    constructor() {
        this.downloadBtn = document.getElementById('download-resume');
        this.resumePath = 'assets/documents/resume.pdf';
        this.init();
    }

    init() {
        this.bindEvents();
        this.checkResumeExists();
    }

    // 绑定事件
    bindEvents() {
        if (this.downloadBtn) {
            this.downloadBtn.addEventListener('click', (e) => {
                this.handleDownload(e);
            });
        }
    }

    // 处理下载
    handleDownload(e) {
        // 可以在这里添加下载统计或其它逻辑
        console.log('开始下载简历');
        
        // 模拟下载成功提示
        this.showDownloadToast('简历下载开始...');
    }

    // 检查简历文件是否存在
    async checkResumeExists() {
        try {
            const response = await fetch(this.resumePath, { method: 'HEAD' });
            if (!response.ok) {
                this.showFileNotFoundWarning();
            }
        } catch (error) {
            console.warn('简历文件检查失败:', error);
            this.showFileNotFoundWarning();
        }
    }

    // 显示文件未找到警告
    showFileNotFoundWarning() {
        console.warn('简历文件未找到，请确保文件路径正确:', this.resumePath);
        
        // 可以在这里添加用户提示
        if (this.downloadBtn) {
            this.downloadBtn.style.opacity = '0.6';
            this.downloadBtn.title = '简历文件准备中...';
        }
    }

    // 显示下载提示
    showDownloadToast(message) {
        // 创建提示元素
        const toast = document.createElement('div');
        toast.textContent = message;
        toast.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: var(--primary-color);
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

    // 更新简历文件路径
    updateResumePath(newPath) {
        this.resumePath = newPath;
        this.checkResumeExists();
    }
}