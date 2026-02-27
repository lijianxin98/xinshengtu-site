# 昕升途·志愿智能体 官网

## 项目概述

本项目是**昕升途·志愿智能体**的官方网站，面向江苏高考市场，主打"生涯规划 + 志愿落地"的高端长期定位家庭定制服务。

## 产品定位

**一句话定义**：昕升途是一套"生涯规划 + 志愿落地"的家庭定制服务：不只帮孩子上一个学校，更帮他走一条更适合的长期发展路径。

**核心差异**：
1. 别人多是"分数不浪费"
2. 我们是"分数+孩子+家庭+未来发展"一起做决策
3. 交付的不只是一张表，而是一套可沟通、可执行、提交前可核对的志愿方案

## 网站结构

### 页面列表
- `index.html` - 首页（Hero区、核心差异、服务模块、数据亮点、适用人群、快速预约）
- `product.html` - 产品介绍（产品定义、核心方法论、六大输出物、四大价值维度、合规边界）
- `process.html` - 服务流程（五步定制服务时间线）
- `faq.html` - 案例FAQ（服务/流程/技术/费用四类问题）
- `contact.html` - 联系我们（联系方式、预约表单）

### 目录结构
```
.
├── index.html              # 首页
├── product.html            # 产品介绍
├── process.html            # 服务流程
├── faq.html                # 常见问题
├── contact.html            # 联系我们
├── css/
│   ├── style.css          # 主样式文件
│   └── pages.css          # 内页专用样式
├── js/
│   ├── main.js            # 主JavaScript文件
│   └── faq.js             # FAQ页面交互
└── README.md              # 本文档
```

## 核心功能

### 1. 响应式设计
- 适配桌面、平板、手机三种设备
- 移动端汉堡菜单切换
- 流畅的视觉体验

### 2. 在线预约表单
- 首页和联系页均提供预约表单
- 表单字段：家长姓名、电话、考生姓名、分数段、期望联系时间、服务类型、留言
- 电话号码自动格式化与验证（11位手机号）
- 表单提交后弹窗提示（目前为模拟，需接入后端API）

### 3. 产品手册下载
- 多处提供产品手册PDF下载入口
- 链接：https://www.genspark.ai/api/files/s/nNZXS8T2

### 4. FAQ交互
- 四个标签分类（服务/流程/技术/费用）
- 手风琴式问答展开/收起

## 设计风格

### 视觉规范
- **配色方案**：
  - 主蓝色：#1E5B8C
  - 主绿色：#2E8B57
  - 背景灰：#F8F9FA、#F5F5F5
  - 文本主：#333333
  - 文本次：#666666

- **字体**：
  - 正文：Noto Sans SC（无衬线，清晰易读）
  - 标题：Noto Serif SC（衬线，更正式）

- **风格定位**：官方但温暖、专业但亲切、高端但可信

### 品牌元素
- Logo：https://www.genspark.ai/api/files/s/ETmYn40A
- 公司全称：昕升途（南京）教育信息咨询有限公司
- 口号：让每一条建议都有依据，让每一处风险都有提示

## 技术栈

- **HTML5** - 语义化标签
- **CSS3** - 现代布局（Grid、Flexbox）、渐变、过渡动画
- **JavaScript (Vanilla)** - 无框架依赖，轻量化
- **Google Fonts** - Noto Sans SC & Noto Serif SC
- **Font Awesome 6.4** - 图标库

## 部署说明

### 本地预览
1. 直接在浏览器中打开 `index.html` 即可预览
2. 或使用本地服务器（如 VS Code 的 Live Server 插件）

### 生产部署
1. 将所有文件上传至Web服务器
2. 确保保持目录结构完整
3. 配置域名指向网站根目录
4. 建议启用HTTPS

### 后端集成（待实现）
目前表单提交为前端模拟，需要后续接入真实API：

```javascript
// 示例：表单提交API接口
const response = await fetch('/api/appointments', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
});
```

建议API返回格式：
```json
{
    "success": true,
    "message": "预约成功，我们将在24小时内与您联系",
    "appointment_id": "xxx"
}
```

## 待完善项

1. **联系信息替换**
   - 咨询热线：400-XXX-XXXX（需替换为真实号码）
   - 邮箱：service@xinshentu.com（需确认是否可用）
   - 地址：南京市XX区XX路XX号（需填写详细地址）
   - ICP备案号：苏ICP备XXXXXXXX号（需申请）

2. **表单后端对接**
   - 预约表单提交接口
   - 数据存储与通知机制
   - 防垃圾提交（验证码/限流）

3. **SEO优化**
   - 添加更完整的meta标签
   - 结构化数据标记（JSON-LD）
   - sitemap.xml生成
   - robots.txt配置

4. **统计与分析**
   - Google Analytics / 百度统计
   - 热力图分析
   - 转化漏斗追踪

5. **性能优化**
   - 图片压缩与CDN加速
   - CSS/JS压缩与合并
   - 浏览器缓存策略
   - 懒加载实现

## 品牌资产

- **产品手册**：https://www.genspark.ai/api/files/s/nNZXS8T2
- **Logo文件**：https://www.genspark.ai/api/files/s/ETmYn40A
- **可编辑手册项目**：https://www.genspark.ai/agents?id=9837b30c-8b05-49df-a2a9-6b955d18c765

## 法律声明

**免责声明**：结果仅作决策辅助，最终以官方发布为准。

**隐私承诺**：我们承诺保护您的隐私，信息仅用于咨询服务。

## 联系与支持

如需修改网站内容或技术支持，请联系开发团队。

---

**版本**：v1.0  
**最后更新**：2026-02-14  
**适用市场**：江苏省高考志愿填报  
**公司**：昕升途（南京）教育信息咨询有限公司