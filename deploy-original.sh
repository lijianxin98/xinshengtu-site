#!/bin/bash
# 昕升途官网 - 一键部署脚本（原配色版本）

echo "🚀 昕升途官网部署脚本"
echo "===================="
echo ""

# 检查必需文件
echo "📋 检查必需文件..."
required_files=(
    "index.html"
    "product.html"
    "process.html"
    "about.html"
    "css/original-matched.css"
    "js/main.js"
    "vercel.json"
)

missing_files=()
for file in "${required_files[@]}"; do
    if [ ! -f "$file" ]; then
        missing_files+=("$file")
    fi
done

if [ ${#missing_files[@]} -ne 0 ]; then
    echo "❌ 缺少必需文件:"
    printf '   - %s\n' "${missing_files[@]}"
    exit 1
fi

echo "✅ 所有必需文件存在"
echo ""

# 检查Vercel CLI
echo "🔍 检查Vercel CLI..."
if ! command -v vercel &> /dev/null; then
    echo "⚠️  未安装Vercel CLI"
    echo "安装命令: npm install -g vercel"
    exit 1
fi

echo "✅ Vercel CLI已安装"
echo ""

# 部署
echo "🚀 开始部署..."
echo ""
vercel --prod

echo ""
echo "✅ 部署完成！"
echo ""
echo "📋 后续步骤:"
echo "1. 在Vercel Dashboard添加自定义域名: www.xinshengtu.com"
echo "2. 在阿里云DNS添加CNAME记录:"
echo "   类型: CNAME"
echo "   主机记录: www"
echo "   记录值: cname.vercel-dns.com"
echo ""
echo "🌐 访问网站："
echo "   https://www.xinshengtu.com"
echo ""
