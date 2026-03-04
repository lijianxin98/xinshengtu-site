#!/bin/bash

# 昕升途官网 - 喜庆大红版快速部署脚本
# 版本：v2.2

echo "🎊 昕升途官网 - 喜庆大红版部署工具"
echo "=================================="
echo ""

# 检查是否安装了Vercel CLI
if ! command -v vercel &> /dev/null
then
    echo "❌ 未检测到Vercel CLI"
    echo "正在安装..."
    npm install -g vercel
    echo "✅ Vercel CLI安装完成"
else
    echo "✅ Vercel CLI已安装"
fi

echo ""
echo "请选择部署方式："
echo "1) 测试部署（预览）"
echo "2) 生产环境部署"
echo "3) 退出"
echo ""

read -p "请输入选项 (1-3): " choice

case $choice in
    1)
        echo ""
        echo "🚀 开始测试部署..."
        vercel
        echo ""
        echo "✅ 测试部署完成！"
        echo "💡 请访问Vercel提供的预览链接查看效果"
        ;;
    2)
        echo ""
        echo "🎯 开始生产环境部署..."
        vercel --prod
        echo ""
        echo "✅ 生产环境部署完成！"
        echo "🌐 您的网站已上线：https://www.xinshengtu.com"
        echo ""
        echo "📋 后续步骤："
        echo "1. 在Vercel Dashboard添加自定义域名：www.xinshengtu.com"
        echo "2. 在阿里云添加CNAME记录：cname.vercel-dns.com"
        echo "3. 等待5-10分钟DNS生效"
        ;;
    3)
        echo "👋 退出部署工具"
        exit 0
        ;;
    *)
        echo "❌ 无效选项"
        exit 1
        ;;
esac

echo ""
echo "=================================="
echo "🎉 部署流程完成！"
echo ""
echo "📚 详细文档：DEPLOYMENT-GUIDE.md"
echo "🆘 如有问题，请查看部署指南"
