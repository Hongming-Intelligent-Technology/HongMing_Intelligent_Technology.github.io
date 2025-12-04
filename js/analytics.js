// analytics.js - 网站基础统计脚本（适配Google Analytics）
(function() {
    // 初始化Google Analytics（与HTML中GA配置保持一致）
    window.ga = window.ga || function() { (ga.q = ga.q || []).push(arguments); };
    ga.l = +new Date();

    // 1. 页面基础统计：自动上报当前页面浏览量
    function trackPageView() {
        const pageTitle = document.title;
        const pageUrl = window.location.href;
        ga('send', {
            hitType: 'pageview',
            title: pageTitle,
            page: pageUrl
        });
        console.log(`[GA] 上报页面浏览：${pageTitle} - ${pageUrl}`);
    }

    // 2. 按钮点击追踪：追踪关键按钮（如GitHub访问、项目链接）
    function trackButtonClicks() {
        // 追踪GitHub相关按钮
        const githubButtons = document.querySelectorAll('a[href*="github.com/Hongming-Intelligent-Technology"]');
        githubButtons.forEach(btn => {
            btn.addEventListener('click', function(e) {
                const buttonText = this.textContent.trim() || this.innerText.trim();
                ga('send', {
                    hitType: 'event',
                    eventCategory: 'Button',
                    eventAction: 'Click',
                    eventLabel: `GitHub-${buttonText}`,
                    eventValue: 1
                });
                console.log(`[GA] 点击事件：GitHub按钮 - ${buttonText}`);
            });
        });

        // 追踪项目链接按钮
        const projectLinks = document.querySelectorAll('a[href*="Project-"]');
        projectLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                const projectId = this.id || this.closest('.paper').id;
                ga('send', {
                    hitType: 'event',
                    eventCategory: 'Project',
                    eventAction: 'Visit',
                    eventLabel: projectId,
                    eventValue: 1
                });
                console.log(`[GA] 点击事件：项目访问 - ${projectId}`);
            });
        });
    }

    // 3. 页面滚动深度追踪（可选）：分析用户浏览停留情况
    function trackScrollDepth() {
        let scrollReported = false;
        window.addEventListener('scroll', function() {
            if (scrollReported) return;
            
            const windowHeight = window.innerHeight;
            const documentHeight = document.body.scrollHeight;
            const scrollTop = window.scrollY;
            const scrollPercentage = (scrollTop + windowHeight) / documentHeight * 100;

            // 当用户滚动超过页面70%时上报
            if (scrollPercentage >= 70) {
                ga('send', {
                    hitType: 'event',
                    eventCategory: 'UserBehavior',
                    eventAction: 'ScrollDepth',
                    eventLabel: '70%+',
                    eventValue: 1
                });
                scrollReported = true;
                console.log(`[GA] 用户滚动深度达到70%+`);
            }
        });
    }

    // 4. 页面加载完成后初始化所有统计功能
    window.addEventListener('load', function() {
        trackPageView();
        trackButtonClicks();
        trackScrollDepth(); // 可选功能，可根据需求注释
    });
})();