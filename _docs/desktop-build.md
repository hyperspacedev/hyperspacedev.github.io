---
title: Build web files from source
layout: doc
description: Build Hyperspace Desktop from the source code.
product: Hyperspace Desktop
---

Hyperspace can be deployed to any server that can host static web files in multiple ways; we currently offer pre-built static files, but you may wish to build the app from source if you want to develop Hyperspace for your needs.

## Hosting the pre-built static files (easy)

To use the pre-built files, download them from our site and then place the contents of the ZIP file to the location where Hyperspace will be accessed from. It's that simple!

## Building from source

### Requirements

- Git
- Node.js 8 or higher

First, you'll need to download the Hyperspace source code, either by downloading the source code package from our site or cloning the Git repository:

```bash
git clone https://github.com/hyperspacedev/hyperspace.git
```

Once the repository has been cloned, you'll want to install any Node dependencies and make sure Hyperspace will compile properly:

```bash
npm install
npm start # or npm test
```

When you have confirmed that Hyperspace is building properly, you can build a copy in the build folder:

```bash
npm run build
```

The built static files will be available in the `build` directory. To serve your content, we recommend using the `serve` package:

```bash
npm install -g serve
serve -s build
```