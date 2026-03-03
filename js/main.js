// 昕升途官网 - 交互脚本

// DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    
    // ==================== 导航栏功能 ====================
    
    // 移动端菜单切换
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            const icon = this.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }
    
    // 滚动时导航栏样式变化
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // ==================== 平滑滚动 ====================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // 关闭移动端菜单
                if (navMenu) {
                    navMenu.classList.remove('active');
                }
            }
        });
    });
    
    // ==================== 滚动动画 ====================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // 观察所有需要动画的元素
    const animateElements = document.querySelectorAll(
        '.info-card, .value-card, .deliverable-card, .dimension-card, .ai-card, .stat-card'
    );
    
    animateElements.forEach(el => {
        observer.observe(el);
    });
    
    // ==================== 数字递增动画 ====================
    
    function animateNumber(element, target) {
        const duration = 2000; // 2秒
        const start = 0;
        const increment = target / (duration / 16); // 60fps
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                element.textContent = target + (element.dataset.suffix || '');
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current) + (element.dataset.suffix || '');
            }
        }, 16);
    }
    
    // 当统计数字进入视口时触发动画
    const statNumbers = document.querySelectorAll('.stat-number');
    const statObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.textContent.replace(/[^0-9]/g, ''));
                const suffix = entry.target.textContent.match(/[^0-9]/g);
                if (suffix) {
                    entry.target.dataset.suffix = suffix.join('');
                }
                animateNumber(entry.target, target);
                statObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    statNumbers.forEach(num => {
        statObserver.observe(num);
    });
    
    // ==================== 卡片悬停效果增强 ====================
    
    const cards = document.querySelectorAll('.info-card, .value-card, .ai-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });
        
        card.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
    
    // ==================== 表单验证（预留） ====================
    
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 获取表单数据
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            console.log('表单数据:', data);
            
            // 这里可以添加表单提交逻辑
            // 例如：发送到后端API
            
            // 显示成功消息
            showNotification('提交成功！我们会尽快与您联系。', 'success');
            
            // 重置表单
            this.reset();
        });
    });
    
    // ==================== 通知系统 ====================
    
    function showNotification(message, type = 'info') {
        // 创建通知元素
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        // 添加样式
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? '#10B981' : type === 'error' ? '#EF4444' : '#3B82F6'};
            color: white;
            padding: 16px 24px;
            border-radius: 12px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
            z-index: 9999;
            animation: slideIn 0.3s ease-out;
            font-weight: 600;
        `;
        
        document.body.appendChild(notification);
        
        // 3秒后自动移除
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease-out';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
    
    // 添加动画样式
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
        
        /* 移动端菜单样式 */
        @media (max-width: 768px) {
            .nav-menu {
                position: fixed;
                top: 80px;
                left: 0;
                right: 0;
                background: white;
                flex-direction: column;
                padding: 20px;
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
                transform: translateY(-100%);
                opacity: 0;
                transition: all 0.3s ease;
                pointer-events: none;
            }
            
            .nav-menu.active {
                transform: translateY(0);
                opacity: 1;
                pointer-events: all;
            }
            
            .nav-menu li {
                margin: 10px 0;
            }
            
            .nav-menu a {
                display: block;
                padding: 12px 16px;
            }
        }
        
        /* 导航栏滚动样式 */
        .navbar.scrolled {
            box-shadow: 0 4px 16px rgba(196, 30, 58, 0.15);
        }
    `;
    document.head.appendChild(style);
    
    // ==================== 性能优化：图片懒加载 ====================
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    imageObserver.unobserve(img);
                }
            });
        });
        
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
    }
    
    // ==================== 返回顶部按钮 ====================
    
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.className = 'back-to-top';
    backToTop.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #C41E3A 0%, #9B1728 100%);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        box-shadow: 0 4px 16px rgba(196, 30, 58, 0.3);
        z-index: 999;
    `;
    
    document.body.appendChild(backToTop);
    
    // 滚动时显示/隐藏返回顶部按钮
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    });
    
    // 点击返回顶部
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // 悬停效果
    backToTop.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.1)';
        this.style.boxShadow = '0 8px 24px rgba(196, 30, 58, 0.4)';
    });
    
    backToTop.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 4px 16px rgba(196, 30, 58, 0.3)';
    });
    
    // ==================== 页面加载完成 ====================
    
    console.log('昕升途官网已加载完成');
    
});

// ==================== 工具函数 ====================

// 节流函数
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 防抖函数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
