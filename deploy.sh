#!/bin/bash
set -e

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REMOTE_HOST="moses@100.92.124.15"
REMOTE_APP_DIR="/home/moses/apps/portfolio-cv"
CHROME_BIN="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

echo "========================================================"
echo "      🚀 MOSES PORTFOLIO & CV - PRODUCTION DEPLOY       "
echo "========================================================"
echo "Target host: $REMOTE_HOST"
echo "Workspace:   $REPO_DIR"
echo ""

# 1. Check SSH reachability
echo "▶ Checking SSH connection to $REMOTE_HOST..."
if ! ssh -o ConnectTimeout=5 -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null "$REMOTE_HOST" "true" 2>/dev/null; then
    echo "❌ Error: Cannot connect to $REMOTE_HOST over SSH."
    echo "Please ensure you are connected to the network/Tailscale and the host is reachable."
    exit 1
fi
echo "✔ SSH connection verified."

# 2. Build local frontend
echo ""
echo "▶ Building web application..."
cd "$REPO_DIR/web"
npm run build

# 3. Generate fresh 2-page executive PDF resumes via headless Chrome
echo ""
echo "▶ Generating fresh 2-page PDF resumes..."
if [ -f "$CHROME_BIN" ]; then
    npx vite preview --port 4173 > /dev/null 2>&1 &
    PREVIEW_PID=$!
    sleep 2

    "$CHROME_BIN" --headless --disable-gpu --no-pdf-header-footer \
        --print-to-pdf="$REPO_DIR/web/public/Moisey_Vasilenko_CV_RU.pdf" \
        "http://localhost:4173/?view=resume&lang=ru" > /dev/null 2>&1 || true

    "$CHROME_BIN" --headless --disable-gpu --no-pdf-header-footer \
        --print-to-pdf="$REPO_DIR/web/public/Moisey_Vasilenko_CV_EN.pdf" \
        "http://localhost:4173/?view=resume&lang=en" > /dev/null 2>&1 || true

    kill $PREVIEW_PID > /dev/null 2>&1 || true
    wait $PREVIEW_PID 2>/dev/null || true

    # Copy to repo root
    cp "$REPO_DIR/web/public/Moisey_Vasilenko_CV_RU.pdf" "$REPO_DIR/Moisey_Vasilenko_CV_RU.pdf"
    cp "$REPO_DIR/web/public/Moisey_Vasilenko_CV_EN.pdf" "$REPO_DIR/Moisey_Vasilenko_CV_EN.pdf"
    echo "✔ PDF resumes regenerated successfully."
else
    echo "⚠️ Chrome not found at default path, skipping local PDF regeneration."
fi

# 4. Final production bundle with updated PDFs
echo ""
echo "▶ Packaging production distribution..."
npm run build

# 5. Rsync to remote server
echo ""
echo "▶ Syncing files to remote server ($REMOTE_HOST:$REMOTE_APP_DIR/public/)..."
rsync -avz --delete -e "ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null" \
    "$REPO_DIR/web/dist/" "$REMOTE_HOST:$REMOTE_APP_DIR/public/"

# 6. Ensure remote systemd services are active
echo ""
echo "▶ Verifying remote services..."
ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null "$REMOTE_HOST" "
systemctl --user restart portfolio-web.service
systemctl --user is-active portfolio-web.service > /dev/null || systemctl --user start portfolio-web.service
systemctl --user is-active portfolio-tunnel.service > /dev/null || systemctl --user start portfolio-tunnel.service
"

# 7. Print active public URL
echo ""
echo "========================================================"
echo "               🎉 DEPLOYMENT SUCCESSFUL!                "
echo "========================================================"
ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null "$REMOTE_HOST" "/home/moses/apps/portfolio-cv/status.sh"
