// 原HTML中未展示具体实现，保留文件结构，可根据需求补充功能
// 示例功能：可用于文本字符混淆、动态文字效果等
function scrambleText(elementId, duration = 1000) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    const originalText = element.textContent;
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let timer = null;
    let startTime = Date.now();

    timer = setInterval(() => {
        const elapsed = Date.now() - startTime;
        if (elapsed >= duration) {
            clearInterval(timer);
            element.textContent = originalText;
            return;
        }

        // 生成混淆文本
        let scrambled = '';
        for (let i = 0; i < originalText.length; i++) {
            scrambled += chars[Math.floor(Math.random() * chars.length)];
        }
        element.textContent = scrambled;
    }, 50);
}

// 可在页面加载后调用，例如：scrambleText('pageheading');