// FAQ页面交互
const faqTabs = document.querySelectorAll('.faq-tab');
const faqLists = document.querySelectorAll('.faq-list');
const faqItems = document.querySelectorAll('.faq-item');

// 标签切换
faqTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // 移除所有active类
        faqTabs.forEach(t => t.classList.remove('active'));
        faqLists.forEach(list => list.style.display = 'none');
        
        // 添加当前active类
        tab.classList.add('active');
        
        // 显示对应内容
        const tabName = tab.getAttribute('data-tab');
        const targetList = document.getElementById('faq' + tabName.charAt(0).toUpperCase() + tabName.slice(1));
        if (targetList) {
            targetList.style.display = 'block';
        }
    });
});

// FAQ项目展开/收起
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        // 切换当前项
        item.classList.toggle('active');
        
        // 可选：关闭其他项（手风琴效果）
        // faqItems.forEach(otherItem => {
        //     if (otherItem !== item) {
        //         otherItem.classList.remove('active');
        //     }
        // });
    });
});