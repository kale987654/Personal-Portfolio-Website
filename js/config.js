// 配置文件 - 项目数据和设置
const CONFIG = {
    // 项目数据
    projects: [
    // 项目1：个人作品集网站
        {
            id: 1,
            title: "个人作品集网站",
            description: "独立设计并开发的个人作品集网站，展示技术能力和项目成果。",
            stage: "interest",
            stageText: "独立项目",
            technologies: ["HTML5", "CSS3", "JavaScript", "ES6+", "Git", "Webpack"],
            demoUrl: "index.html",
            codeUrl: "https://github.com/kale987654/Personal-Portfolio-Website",
            learnings: [
                "掌握了完整的响应式网站开发流程",
                "学会了模块化开发和代码组织",
                "理解了Git版本控制和项目部署",
                "提升了UI/UX设计和用户体验意识"
            ],
            duration: "2025.10.1",
            difficulty: "进阶",
            image: null,
            gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            icon: "fas fa-laptop-code"
        },
        
        // 项目2：天气预报应用
        {
            id: 2,
            title: "天气预报应用",
            description: "基于第三方天气API开发的实时天气预报Web应用，提供准确的天气信息和友好的用户界面",
            stage: "self-learning", 
            stageText: "技术实践",
            technologies: ["HTML5", "CSS3", "JavaScript", "Axios", "API"],
            demoUrl: "./demos/weather/index.html",
            codeUrl: "https://github.com/kale987654/Personal-Portfolio-Website/tree/main/demos/weather",
            learnings: [
                "掌握了Axios库和异步数据请求",
                "学会了API文档阅读和集成方法",
                "理解了错误处理和用户体验优化",
                "实践了数据缓存和性能优化"
            ],
            duration: "2025.9.17",
            difficulty: "中级",
            image: null,
            gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            icon: "fas fa-cloud-sun"
        },
        
        // 项目3：图书管理系统
        {
            id: 3,
            title: "图书管理系统",
            description: "基于浏览器本地存储的图书管理Web应用，实现图书信息的增删改查和分类管理功能。",
            stage: "classroom",
            stageText: "学习实践",
            technologies: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
            demoUrl: "./demos/library/index.html",
            codeUrl: "https://github.com/kale987654/Personal-Portfolio-Website/tree/main/demos/library", 
            learnings: [
                "掌握了LocalStorage数据持久化存储",
                "学会了CRUD功能的完整实现",
                "理解了数据验证和状态管理",
                "提升了用户界面设计能力"
            ],
            duration: "2025.8.29",
            difficulty: "中级",
            image: null,
            gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
            icon: "fas fa-book"
            },
        
        // 项目4：图片放大镜组件
        {
            id: 4,
            title: "图片放大镜组件",
            description: "独立开发的图片放大镜交互组件，提供流畅的图片查看体验和可配置参数。",
            stage: "interest",
            stageText: "组件开发", 
            technologies: ["HTML5", "CSS3", "JavaScript", "DOM操作"],
            demoUrl: "./demos/magnifier/index.html",
            codeUrl: "https://github.com/kale987654/Personal-Portfolio-Website/tree/main/demos/magnifier",
            learnings: [
                "深入理解了DOM事件处理和坐标计算",
                "掌握了交互组件的开发方法",
                "学会了性能优化和边界情况处理",
                "提升了细节处理和用户体验意识"
            ],
            duration: "2025.4.25",
            difficulty: "中级",
            gradient: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
            icon: "fas fa-search-plus"
        }
    ],
    // 技能数据
    skills: {
        frontend: [
            { name: "HTML5 / CSS3", level: 90 },
            { name: "JavaScript ES6+", level: 85 },
            { name: "响应式设计", level: 88 },
            { name: "性能优化", level: 75 }
        ],
        tools: [
            { name: "Git / GitHub", level: 82 },
            { name: "Webpack", level: 75 },
            { name: "Node.js", level: 70 },
            { name: "Figma", level: 80 }
        ],
        design: [
            { name: "Figma", level: 80 },
            { name: "Photoshop", level: 75 },
            { name: "UI/UX设计", level: 78 }
        ]
    },

    // 主题配置
    themes: {
        "deep-blue": {
            name: "深蓝主题",
            primary: "#2c3e50",
            secondary: "#34495e",
            accent: "#3498db"
        },
        "forest-green": {
            name: "森林绿主题",
            primary: "#1e5631",
            secondary: "#2e7d32",
            accent: "#4caf50"
        },
        "slate-gray": {
            name: "石板灰主题",
            primary: "#4a4e69",
            secondary: "#5c6378",
            accent: "#6c757d"
        }
    },

    // 个人信息
    personalInfo: {
        name: "姚润林",
        title: "前端开发工程师",
        email: "18565949594@163.com",
        phone: "18565949594",
        github: "github.com/kale987654",
        logo: "YRL" 
    }
};