---
title: Build apps from source
layout: doc
description: Build the Hyperspace Desktop apps from source.
product: Hyperspace Desktop
---

The Hyperspace Desktop source code also includes the necessary tools to start building the desktop app versions of Hyperspace using technologies like Electron. This document will cover how to get started building the desktop versions.

## Requirements
- Git
- Node.js 8 or higher

## Gather the source materials

To get started, either download the Hyperspace source code for the intended release (v1.x.x) or clone straight from GitHub:

```
git clone https://github.com/hyperspacedev/hyperspace.git
```

Then, proceed to install the project's dependencies:

```
cd hyperspace
npm install
```

The project should now contain all of the necessary Node modules to build the desktop apps.

> Note: If the dependency list includes `electron-builder@21.2.0`, you'll need to modify a file to get notarization and code signing working if you plan to build for macOS. [Learn more &rsaquo;](https://github.com/electron-userland/electron-builder/issues/4151#issuecomment-520663362)


## Gather macOS development materials

If you are building for macOS and are on a Mac, you'll need to download the respective certificates, provisioning profiles, and entitlements lists. You can generate these certificates and profiles on the Apple Developer website. You'll need the following in the `desktop` directory:

- Provisioning profiles for the desktop (`nonmas.provisionprofile`) and Mac App Store version (`embedded.provisionprofile`).
- An `info.plist` that includes the team identifier and group identifier.

Additionally, you'll need to set up your keychain to store your App Store Connect password. You can learn more on [Electron's documentation](https://github.com/electron/electron-notarize#safety-when-using-appleidpassword).

### Entitlements

You'll also need to create entitlements files in the `desktop` directory that list the following entitlements for your app:

- `com.apple.security.files.downloads.read-write`
- `com.apple.security.files.user-selected.read-write`
- `com.apple.security.allow-unsigned-executable-memory`

For the Mac App Store, you'll need extra entitlements due to the sandboxed environment:

- `com.apple.security.app-sandbox`
- `com.apple.security.files.downloads.read-write`
- `com.apple.security.files.user-selected.read-write`
- `com.apple.security.allow-unsigned-executable-memory`
- `com.apple.security.network.client`

For the child entitlements on the Mac App Store (inherited `entitlements.mas.inherit.plist`):

- `com.apple.security.app-sandbox`
- `com.apple.security.inherit`
- `com.apple.security.files.downloads.read-write`
- `com.apple.security.files.user-selected.read-write`
- `com.apple.security.allow-unsigned-executable-memory`
- `com.apple.security.network.client`

> ⚠️ Note that the inherited permissions are the same as that of the parent. This is due to an issue where the hardened runtime fails to pass down the inherited properties (see [electron/electron#20560](https://github.com/electron/electron/issues/20560#issuecomment-546110018)). This might change in future versions of macOS.

## Building the desktop apps

Before starting to build the desktop apps, you need to modify `config.json` to tell it to use the desktop URL. In `public/config.json`, change the `location` field to the following:

```json
    "location": "desktop",
```

To build all of the desktop apps at once, you can run the following:

```
npm run build-desktop
```

This will proceed to build and sign the Windows, macOS, and Linux builds for you.

### Building specific apps

To build for a specific platform, you'll need to first build the project:

```
npm run build
```

And then run any of the following commands below:

- `npm run build-desktop-win`: Builds the desktop app for Windows.
- `npm run build-desktop-darwin`: Builds the desktop apps for macOS (eg. disk image, Mac App Store).
- `npm run build-desktop-linux`: Builds the desktop apps for Linux (eg. Debian package, AppImage, and Snap).
- `npm run build-desktop-linux-select`: Builds the desktop app for Linux. _Target is required as a parameter._

The built products for any command will appear in `dist`.

## macOS Notarization

Starting with macOS 10.15 Catalina, apps are required to be signed and notarized. The Hyperspace source code includes the proper tools to enable notarization and should be handled whenever you run `build-desktop` or `build-desktop-darwin`. You'll want to modify `desktop/notarize.js` and change the username, account, and app identifier fields to match your app's information. As an example:

```js
return await notarize({
    appBundleId: 'com.example.hyperspace-clone',
    appPath: `${appOutDir}/${appName}.app`,
    appleId: "johnappleseed@example.com",
    appleIdPassword: password,
    ascProvider: "XXXXXXXXXXX"
  });
```