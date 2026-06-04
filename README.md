<img src="./favicons/normal/brand.svg" width="80px" />

# AMLL Editor

[![Version](https://img.shields.io/github/package-json/v/amll-dev/amll-editor?label=Version)](https://github.com/amll-dev/amll-editor/releases)
[![Vite Version](https://img.shields.io/github/package-json/dependency-version/amll-dev/amll-editor/dev/vite?label=Vite&color=9135FF&logo=vite&logoColor=white)](https://vite.dev/)
[![Vue Version](https://img.shields.io/github/package-json/dependency-version/amll-dev/amll-editor/vue?label=Vue&color=4FC08D&logo=vuedotjs&logoColor=white)](https://vuejs.org/)
[![PrimeVue Version](https://img.shields.io/github/package-json/dependency-version/amll-dev/amll-editor/primevue?label=PrimeVue&color=41B883&logo=primevue&logoColor=white)](https://primevue.org/)
[![AMLL Core Version](https://img.shields.io/github/package-json/dependency-version/amll-dev/amll-editor/%40applemusic-like-lyrics%2Fcore?label=AMLL&color=FA243C&logo=applemusic&logoColor=white)](https://amll.dev)  
[![Cloudflare Pages: STABLE](https://img.shields.io/website?url=https%3A%2F%2Feditor.amll.dev%2F&logo=cloudflare&logoColor=white&label=Pages%2fSTABLE)](https://editor.amll.dev/)
[![Cloudflare Pages: BETA](https://img.shields.io/website?url=https%3A%2F%2Fbeta-editor.amll.dev%2F&logo=cloudflare&logoColor=white&label=Pages%2fBETA)](https://beta-editor.amll.dev/)
[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/amll-dev/amll-editor)

日本語 | [简体中文](./README.cn.md) | [English](./README.en.md)

Vue ベースのオープンソースの歌詞エディタ（音節単位で編集可能）
目標は [AMLL TTML Tool](https://github.com/amll-dev/amll-ttml-tool) の後継者になること、[AMLL](https://github.com/amll-dev/applemusic-like-lyrics) エコシステムと連携が可能

**まだ開発段階です**  [GitHub Project](https://github.com/orgs/amll-dev/projects/1/) で開発の進捗をチェックすることができます。

安定板：<https://editor.amll.dev/>  
開発版：<https://beta-editor.amll.dev/>

[プロジェクトのwiki](https://github.com/amll-dev/amll-editor/wiki) にユーザーガイドを掲載しているのでご確認ください。

## 部署

本项目部署在 Cloudflare Pages 上，你可以直接从上方的链接访问。

若你希望自行部署，需要注意：频谱图功能需要**跨站隔离（Cross Origin Isolation, COI）**。因此服务端需要在响应时添加标头：

```http
Cross-Origin-Opener-Policy: same-origin
Cross-Origin-Embedder-Policy: require-corp
```

本项目在构建产物中包含适用于 Cloudflare Pages 的 `_headers` 文件，用于自动配置所需的响应头。若你需要在其他平台部署（如 Vercel 等），请自行参考相应平台文档。

**GitHub Pages 不支持自定义响应头**，因此无法原生满足跨站隔离要求。为此，本项目提供一个可选的兼容方案：当环境变量 `VITE_COI_WORKAROUND` 为真值时，将通过 Service Worker 模拟跨站隔离环境（解决方案来自 [gzuidhof/coi-serviceworker](https://github.com/gzuidhof/coi-serviceworker)）。该方案存在一定限制：启用后，页面在首次加载时会触发一次额外的自动刷新，刷新后 Service Worker 才会接管并生效。相应地，兼容性检查将延迟 3 秒触发，以等待 Service Worker 完成装载。

## ライセンス

本プロジェクトは GNU Affero General Public License v3.0 のもとでライセンスされています。 詳しくは [LICENSE](./LICENSE) を参照してください。

SPDX-License-Identifier: AGPL-3.0-only

## 法的告知

本プロジェクトは、特定の音楽サービスで使用される可能性のある一部の独自フォーマットを含め、さまざまなオーディオコンテナ形式の再生互換性を提供します。本ソフトウェアは、デジタル著作権管理（DRM）対策を解除または変更するものではなく、ならびに、著作権で保護された作品の抽出、再配布、または改変を可能にするものでもありません。

本ソフトウェアによって処理されるすべてのメディアファイルおよび歌詞ファイルは、ユーザーによって提供されたものです。本プロジェクト自体は、いかなる著作権保護された素材も含まず、配布も保存も行いません。本ソフトウェアの使用が、適用される著作権法および関連するコンテンツライセンスの条件に準拠していることを確認する責任は、ユーザーにのみあります。

詳細については、[LEGAL.md](./LEGAL.md)をご覧ください。
