#!/bin/bash
set -e

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
GH_USER="mrMoses2000"
GH_REPO="mrmoses2000.github.io"
TARGET_URL="https://$GH_USER.github.io"

echo "========================================================"
echo "    🚀 GITHUB PAGES DEPLOYMENT ($GH_REPO)               "
echo "========================================================"

# 1. Build frontend
echo "▶ 1. Building web frontend with relative assets..."
cd "$REPO_DIR/web"
npm run build

# 2. Check if .nojekyll exists in dist
touch "$REPO_DIR/web/dist/.nojekyll"

# 3. Ensure PDFs are in dist
cp "$REPO_DIR/Moisey_Vasilenko_CV_RU.pdf" "$REPO_DIR/web/dist/Moisey_Vasilenko_CV_RU.pdf"
cp "$REPO_DIR/Moisey_Vasilenko_CV_EN.pdf" "$REPO_DIR/web/dist/Moisey_Vasilenko_CV_EN.pdf"

# 4. Check if remote repo exists on GitHub
echo "▶ 2. Checking GitHub repository git@github.com:$GH_USER/$GH_REPO.git..."
if ! git ls-remote "git@github.com:$GH_USER/$GH_REPO.git" > /dev/null 2>&1; then
    echo "⚠️ Репозиторий $GH_USER/$GH_REPO еще не создан на GitHub!"
    echo ""
    echo "👉 Создайте его в 1 клик по ссылке:"
    echo "   https://github.com/new?name=$GH_REPO&description=Moses+Vasilenko+-+Full-Stack+%26+Systems+Engineer+Portfolio+%26+CV&visibility=public"
    echo ""
    echo "После нажатия 'Create repository' просто запустите этот скрипт снова:"
    echo "   ./deploy_github_pages.sh"
    exit 1
fi

# 5. Deploy dist directory to main branch of mrmoses2000.github.io
echo "▶ 3. Pushing production build to $GH_USER/$GH_REPO (main branch)..."
cd "$REPO_DIR/web/dist"
rm -rf .git
git init -b main
git config user.name "Moses"
git config user.email "moisey.vasilenko@gmail.com"
git add -A
git commit -m "Deploy portfolio & CV to GitHub Pages ($(date '+%Y-%m-%d %H:%M:%S'))"
git remote add origin "git@github.com:$GH_USER/$GH_REPO.git"
git push -f origin main
rm -rf .git

echo ""
echo "========================================================"
echo "  ✔ УСПЕШНО ОПУБЛИКОВАНО НА GITHUB PAGES!"
echo "  👉 Сайт: $TARGET_URL"
echo "  👉 Резюме (RU): $TARGET_URL/Moisey_Vasilenko_CV_RU.pdf"
echo "  👉 Резюме (EN): $TARGET_URL/Moisey_Vasilenko_CV_EN.pdf"
echo "========================================================"
