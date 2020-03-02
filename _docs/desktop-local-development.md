---
title: Developing Hyperspace locally
layout: doc
product: Hyperspace Desktop
description: Run Hyperspace locally to build and test changes live.
---

Hyperspace is a React-based product built with Create React App and allows for hot-reloading. Developing new features on Hyperspace is relatively easy to perform.

## Requirements
- Git
- Node.js 8 or higher

## Setting up the environment

First, you'll need to download the Hyperspace source code, either by downloading the source code package from our site or cloning the Git repository:

```bash
git clone https://github.com/hyperspacedev/hyperspace.git
```

Once the repository has been cloned, you'll want to install any Node dependencies and make sure Hyperspace will compile properly:

```bash
npm install
npm start # or npm test
```

## Starting a local server

Before running the local server, you'll need to change the `location` property in the Hyperspace configuration file to point to your local server. In `config.json`, change the location field as seen below:

```json
    "location": "https://localhost:3000",
```

> Note: As of Hyperspace v1.1.0-beta4, this step is no longer necessary as Hyperspace will automatically change the location field for you when running through `npm start`.

Once this setting is changed, you can proceed to running the local server as follows:

```
npm start
```

This will start the server and let you make changes and see them live.