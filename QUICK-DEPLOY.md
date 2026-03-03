# 🚀 快速部署（3分钟完成）

## 最简单的方式：Vercel一键部署

### 1️⃣ 安装Vercel CLI

打开终端，运行：
```bash
npm install -g vercel
```

### 2️⃣ 登录Vercel

```bash
vercel login
```
- 会自动打开浏览器
- 选择您的登录方式（GitHub/GitLab/Email）
- 授权成功后回到终端

### 3️⃣ 部署网站

在项目文件夹中运行：
```bash
vercel --prod
```

**就这么简单！** 🎉

### 4️⃣ 绑定域名

部署成功后：

1. 访问 [Vercel Dashboard](https://vercel.com/dashboard)
2. 选择刚部署的项目
3. 点击 "Settings" → "Domains"
4. 输入：`www.xinshengtu.com`
5. 点击 "Add"

### 5️⃣ 配置DNS（阿里云）

登录阿里云域名管理，添加记录：

| 类型 | 主机记录 | 记录值 |
|------|---------|--------|
| CNAME | www | cname.vercel-dns.com |

**等待5分钟，完成！**

---

## 🎊 部署完成后

访问：**https://www.xinshengtu.com**

您将看到：
- ✅ 喜庆大红色背景
- ✅ 金色光晕效果
- ✅ 流光溢彩动画
- ✅ 专业白色卡片

---

## 📱 分享给团队

```
🎊 昕升途官网已上线！
🌐 网址：www.xinshengtu.com
🎨 风格：喜庆大红版
💫 特色：金榜题名氛围
```

---

## 🆘 遇到问题？

### 问题1：vercel命令不存在
```bash
npm install -g vercel
```

### 问题2：域名不生效
- 等待5-10分钟
- 检查DNS配置是否正确

### 问题3：页面显示404
- 确认已执行 `vercel --prod`
- 重新部署一次

---

**就是这么简单！3分钟搞定！** 🚀
