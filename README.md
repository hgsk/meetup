# meetup

[![Join the chat at https://gitter.im/hgsk-meetup/Lobby](https://badges.gitter.im/hgsk-meetup/Lobby.svg)](https://gitter.im/hgsk-meetup/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
Simple meet-up Schedule Management with Google Apps

# Overview

イベントの告知をしつつ、予約管理や実績管理などのバックエンドの作業を行うツールです。

# Install

```
gapps init
npm install
npm run
```

# Deploy

```
npm run build
gapps upload
```

# Test

```
npm test
```

# Development

```
npm run lint
```

# WIP Development with AltJS

```
npm run watch:js // Continuous build.
npm run build.js // Simply build.
npm run release // Release build. Build with no source map, compress, and minify to `dist`.
```

http://akabeko.me/blog/2015/08/dev-web-front-end-without-gulp/

htmlをdistにcpする必要ある

