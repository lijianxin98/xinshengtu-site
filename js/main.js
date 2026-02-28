// 移动菜单切换
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// 表单提交处理
const appointmentForm = document.getElementById('appointmentForm');
if (appointmentForm) {
    appointmentForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(appointmentForm);
        const data = Object.fromEntries(formData);
        
        // 添加提交时间和初始状态
        const submitData = {
            ...data,
            submit_time: new Date().toISOString(),
            status: '待处理'
        };
        
        try {
            // 保存到数据库
            const response = await fetch('tables/appointments', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(submitData)
            });
            
            if (response.ok) {
                const result = await response.json();
                console.log('预约成功，记录ID:', result.id);
                alert('提交成功！我们将在24小时内与您联系。\n您的预约编号：' + result.id.substring(0, 8));
                appointmentForm.reset();
            } else {
                throw new Error('提交失败');
            }
        } catch (error) {
            console.error('提交失败:', error);
            alert('提交失败，请稍后重试或直接拨打咨询热线：13390900614');
        }
    });
}

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 导航栏滚动效果
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
    }
    
    lastScroll = currentScroll;
});

// 表单验证增强
const phoneInput = document.querySelector('input[name="phone"]');
if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
        // 只允许输入数字
        e.target.value = e.target.value.replace(/[^\d]/g, '');
        
        // 限制长度为11位
        if (e.target.value.length > 11) {
            e.target.value = e.target.value.slice(0, 11);
        }
    });
    
    phoneInput.addEventListener('blur', (e) => {
        // 验证手机号格式
        if (e.target.value && !/^1[3-9]\d{9}$/.test(e.target.value)) {
            e.target.setCustomValidity('请输入正确的11位手机号');
            e.target.reportValidity();
        } else {
            e.target.setCustomValidity('');
        }
    });
}