#!/bin/sh
# 重建網站：合併 src/ → artifact.html，包上 HTML 外殼 → index.html（site/ 與 repo 根目錄各一份）
set -e
cd "$(dirname "$0")"

cat src/part1-markup.html src/part2-data.js src/part2b-fulltr.js src/part2c-stories.js src/part2e-more.js src/part3-app.js > artifact.html

{
  printf '%s' '<!DOCTYPE html><html lang="zh-Hant"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">'
  printf '%s' '<meta name="theme-color" content="#cbe5f8" media="(prefers-color-scheme: light)"><meta name="theme-color" content="#0f2740" media="(prefers-color-scheme: dark)">'
  printf '%s\n' '<link rel="icon" type="image/png" href="assets/favicon.png"><link rel="apple-touch-icon" href="assets/logo.png"><meta name="description" content="美安創辦人 JR Ridinger 27 篇演講知識庫：零售、招募、異議處理問答">'
  cat artifact.html
  printf '</html>\n'
} > index.html

cp index.html ../index.html
echo "built: site/artifact.html, site/index.html, index.html"
