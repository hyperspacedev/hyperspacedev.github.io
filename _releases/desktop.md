---
title: Hyperspace Desktop
layout: release
description: Hyperspace Desktop is the cross-platform client for Mastodon.
---
## 1.1.1 (April 17, 2020)
This update is recommended for all users and developers of Hyperspace Desktop v1.1.1.

**What's new:**

## Bugfixes
- Resolves a critical login issue in which users are not able to login due to an incorrect `location` auto-resolution on the desktop apps or installations that use `dynamic` (fixes #195)
- Resolved a bug where the account menu wouldn't close after selecting an item (fixes #197)

## 1.1.0 (April 11, 2020)
See v1.1.0 beta release notes.

## 1.0.4 (November 24, 2019)
This update is recommended for all developers and users of Hyperspace Desktop. We thank our Patrons for help making this release possible.

**What's new:**

- Resolve an issue where the emergency login system failed to load on desktop apps (fixes #129 , HD-23)
- Resolve an issue where the emoji picker crashes the app on instances that do not have custom emojis (fixes HD-21)
- Update the menu bar to not have a hard-coded title

## 1.0.3 (November 16, 2019)
This update is recommended for all developers and users of Hyperspace Desktop. We thank our Patrons for help making this release possible.

**What's new:**

- Resolves an issue where hovering over the Expansion Panel on CW posts could cause confusion (fixes #115, [HD-2])
- Rebrands specific parts of "Hyperspace" to "Hyperspace Desktop"
- Resolves an issue where Pleroma accounts will get a blank page on the About section of the app caused by a localStorage delay (fixes [HD-17])

Special thanks to @travisk-codes for helping make this release possible.

## 1.0.2 (November 3, 2019)
This update is recommended for all developers and users of Hyperspace. We thank our Patrons for help making this release possible.

**What's new:**

- Fixes an issue where the context menu on reblogged posts had an outline in Chrome and the desktop apps (#108)
- Fixes an issue where the release channels in the About page always were listed as "Release", despite the `developer` field in `config.json`
- Updates the README to include new entitlements for macOS builds (#106)

Special thanks to @travisk-codes for helping make this release possible.

## 1.0.1 (October 26, 2019)
This update is recommended for all users and developers.

What's new:

- Fixes a bug where valid instances were marked as "invalid" (#105)


## 1.0.0 (October 11, 2019)

Hyperspace 1.0.0 is the next-generation release of Hyperspace. It contains many great improvements and features and is a recommended update for all users and developers.

What's new:

- Complete and responsive redesign using the Material design language that extends to desktops
- New settings to change the color scheme, default visibility, and more
- Support using multiple accounts within Hyperspace
- Ability to manage blocked servers easily
- Support for searching accounts, hashtags, and related posts
- Viewing and managing follow requests and recommended follows
- Brand-new composer with better attachments and poll support
- Complete customization with a config file for administrators
- Better notification support with ability to dismiss individual notifications and seeing a badge count (macOS/Linux only)
- A brand-new menubar for desktop apps with keyboard shortcuts


## 0.7 (March 26, 2019)

This release continues to build on the `0.x` release with bug fixes, improvements, and new features.

> Note: This will be the last release from the 0.x branch of Hyperspace. Future versions of Hyperspace will be released and maintained on [hyperspacedev/hyperspace](https://github.com/hyperspacedev/hyperspace), which sports a brand new design and many more features to come.

### New features

* Get your vote on! The new polls feature from Mastodon has been added to Hyperspace. Create and vote on polls from any post.
* Express yourself with custom emojis! The emoji picker now brings in custom emojis from your server and posts will render custom emojis. 🙌
* Make posts faster with new Keyboard Shortcuts! Press 'N' on the home screen to open the composer. More keyboard shortcuts are found in the compose window.

### Improvements

* The carousel has been redesigned so that it remains a certain size, but images will still look nice.
* More loaders have been placed in. This should reduce ambiguity in many places.
* The composer has been completely overhauled with better image uploads (and new description support for screen readers and tooltips), emoji picker, visibility settings as a dropdown, warning system, and more.
* The reply window now displays the full HTML contents of a post and uses the same element from the composer.
* The composer at the top has been replaced with a compose button at the bottom of the window for quick access anywhere.
* Boost cards have a slight redesign that shows the full content and displays a regular tooltip.
* Images on posts have descriptions displayed on hover as a tooltip.
* Hyperspace's top bar is now visible at all times and is slimmer than before.

### Developer changes

* The `Composable` element has been introduced as a means of making new elements that create or reply to posts. This is the basis for the Composer and the reply window.
* **This marks the last release of the 0.x series. Further developments are on the main hyperspace repository.**

### Bug fixes
* Clicking the link to an image in the composer no longer makes the desktop app unusable.
* Grammarly has been disabled on the composer textarea to prevent collisions with Grammarly and the composer's state.
* The post date element now says via 'determination (unknown)' when the application isn't known.

-----

## 0.6.1 (March 9, 2019)

This hotfix update fixes a bug that occurred after logging in and viewing the app, causing the page to go blank because it couldn't fetch account data.

This update still contains the features and improvements found in version 0.6.0.

-----

## 0.6 (March 9, 2019)

This release continues to build on the `0.x` release with bug fixes, improvements, and new features.

### New features

* Slideshows for posts are now available! For posts with more than one media item, a now carousel slideshow has been added to view each and every one of them at full-width.
* A new icon is here! Hyperspace is now represented with a fluffy mastodon with a purple robe.

### Improvements

* The login experience has been completely redesigned from the gound up. With a new slick UI, the process for logging into a Mastodon account couldn't get easier. Just enter the username and follow the prompts.
* The overall file size of applications should be lower now to due exclusion of developer dependencies.
* People can now press Ctrl/Cmd + Enter in a compose window or reply window to quickly post a status (requested by @BNolet, #19).
* The overall accuracy of thread panel-opening when clicking a post has been improved.
* A new media spinner is present when in the process of uploading images or videos for posts and changing profile images.
* The 'copy link' notification has been converted to an in-app toast notification to prevent app notification clutter.
* On devices with smaller resolutions, the profile container on the right is trimmed and re-presented at the top, providing quick access to their account page and log out/dark mode options.
* Timelines can now load older posts with a 'Load more' button at the bottom of the timeline. This also works on profile panels.
* Emojis in the emoji picker have been replaced with the Noto Color Emoji font.

### Developer changes

* Unit and build tests have been added to test components and the overall build process.
* CI tests have been enabled via Travis CI and make use of the new unit tests and build tests.
* A new `userAgent` utility is available to detect if a user is viewing Hyperspace on a mobile device.
* More files have been converted over to the TypeScript format.
* The dark mode toggle and lout out buttons are now respective elements.
* The app's content when logged in is now rendered as an `AppContent` element.
* Snap support has been added, allowing developers to build a snap package.
* jQuery files for Bootstrap have been replaced with Bootstrap.Native scripts, reducing overall Bootstrap errors.
* There are now two Linux build commands for NPM:
  * `npm run build-electron-linux` will build all possible Linux targets (deb, AppImage, snap).
  * `npm run build-electron-linux-select` will build Linux targets in the classic style where an argument is required.

### Bug fixes

* A bug that caused Hyperspace to crash due to the event's target returning a `Class` instead of an `HTMLElement` when clicking a button on a post has been fixed.
* A bug that caused the Windows icon to be significantly smaller has been (hopefully) fixed with the new Hyperspace icon.
* A bug that caused the Linux build command to fail due to an argument not being passed has been resolved.

-----

## 0.5.5 (February 28, 2019)

Release `0.5.5` adds some minor improvements and bug fixes that have been backported from the initial Mac App Store version (note: the MAS version will reflect as `0.5.0`).

* Added a New Window menu shortcut
* App will not crash or throw an error if DevTools cannot be accessed

-----

## 0.5 (February 24, 2019)

This release continues to build on the `0.x` release with bug fixes, improvements, and new features.

### New features

* Enjoy a brand new dark mode! Toggle dark mode in the toolbar to enjoy an experience that best works with your workflow, whether you take it light or stick to the dark side.
* Hyperspace expands to PWA and the Mac App Store*! Mobile users can experiment with the new progressive web app mode of Hyperspace, and macOS users can now get Hyperspace from the Mac App Store alongside their other apps.

### Improvements

* The login process has been improved. For mobile users and other users that may accidentally leave Hyperspace temporarily, Hyperspace will temporarily save some data to help you resume setting the app up later. In addition, a new 'About' section is available and a banner appears for mobile users that want to add Hyperspace as a progressive web app.
* macOS icons are now better rendered with pixel-fit icons for lower sizes that match the favicon.
* A context menu is now available in the desktop version to cut, copy, paste, and search text on DuckDuckGo (requested by @BNolet, #21).
* The Hyperspace icon on Windows should now appear larger to match the other icons on the system (@PoorPocketsMcNewHold, #32). The favicon in Safari has also been upscaled (@PoorPocketsMcNewHold, #33).
* The desktop app now has a minimum width to prevent elements from being displayed incorrectly at ridiculously tiny sizes.
* Posts can now be clicked or tapped on to open the thread besides using the 'Show thread' button (requested by @BNolet, #26).
* On posts written by the signed-in person, a new 'Delete' button is present to delete the post.
* Profile panels now display tables like the profile container below their bio.
* The signed-in person's profile panel now displays buttons to edit their bio (note) and to change avatar/header images.
* The "Couldn't get timeline" has been changed to better represent when a timeline is empty and maybe resulted from an error.
* The desktop app on macOS now uses a unique titlebar that matches more closely to other macOS apps with Electron.
* The main scrollbar has been hidden on some browsers to prevent shifting of content (Safari, Chrome, Edge?, desktop).

### Developer changes

* The codebase has been migrated over from JavaScript to TypeScript, making it easier to work with types in the Megalodon library.
* The package now comes with TypeScript dependencies, as well as `npm-run-all` to run some tasks simultaneously while testing Hyperspace.
* A new addition to the package manifest includes a command to build the macOS icon from the iconset in the `electron` folder.
* The package manifest has also been updated to point to entitlements and provisioning files for the Mac App Store version when building.

### Bug fixes

* Overlapped text on timeline tabs has been fixed by not rendering them on mobile devices and truncating the text down to 'Home', 'Local', 'Public', and 'Messages' (requested by @PoorPocketsMcNewHold, #30).

-----

## 0.4 (February 15, 2019)

This release continues to build on the `0.x` release with bug fixes, improvements, and new features.

### New features

* Profile panels are now live! Quickly view information about a profile and view their latest statuses without leaving Hyperspace.
* Threads are now visible in Hyperspace! Just click "Show thread" to see the previous and next posts for a given status.

### Improvements

* Boost cards will now dynamically resize based on the type of content they have, whether it's long text or it contains media. With the new thread feature, they'll now also open their respective thread for further context.
* Replies can now be more detailed. The reply window now resides as a panel and offers more tools such as uploading media, setting content warnings, and changing the visibility.
* Links will now open in your respective web browser rather than trying to open in a new Electron window.
* Content warning buttons will now change colors depending on the type of content in question. Currently, this works best when 'NSFW: ' or 'Spoiler: ' prepends the spoiler text.
* Clicking a desktop notification will now return you to the app rather than doing nothing.

### Bug fixes

* A bug that causes building to fail on Linux because Wine wasn't installed has been resolved by specifying the type of build rather than building for all platforms.
* If someone follows you and you get notified, Hyperspace will no longer crash or freeze because there wasn't a status attached with it.

-----

## 0.3 (February 6, 2019)

This release continues to build on the `0.x` release set with new features, improvements, and bug fixes:

### New features

* There's a new emoji picker in town! Click on it to add emoji to your post more easily. (Don't worry, you can still use your native emoji picker if you prefer that).
* Did you get the message? Conversations (beta) have landed in the timeline! View your recent direct messages and respond to them quickly.

### Improvements

* We've updated the stylesheet! We're embracing system defaults for emojis and fonts, as well as add a nice light shade of the theme accent color to better distinguish where postcards are.
* A log out button had been added to the navigation bar so that it's easier to log out of Hyperspace.
* The developer tools now will open in a new window by default so that it doesn't take up so much of your precious... hyper-_space_.
* We've moved the 'Add/change warning' button to the overflow menu so that the command bar wasn't so cluttered.
* Some icons have been updated to better represent what the action is.
* Replies should now match the same visibility settings as the post you're replying to. It only makes sense.

### Bug fixes

* Hyperspace wasn't really good with names, especially when they weren't Latin characters. We helped Hyperspace get over its fear of display names when it comes to creating initials for these cases, which should mean that it doesn't break down, cry, and crash on you.

-----

## 0.2 (February 4, 2019)

This version of Hyperspace continues to build on the release of the `0.x` series with new improvements and bug fixes:

### New features

* Notifications have been introduced! You can find your latest notifications on the right-hand side under your profile card and, in theory, get push notifications for when a new notification comes in.
* Hyperspace now has an app menu, meaning that you can do things like insert emojis, cut/copy/paste, minimize and make the window full screen, and reload if necessary.
* Hyperspace now has an auto-updater! This works with Windows and macOS and is delivered via Electron's update service (https://update.electronjs.org).

### General improvements

* Icons on the compose window toolbar and the postcards now have a neat hover color.
* All links now use the theme's accent color instead of Bootstrap's default blue color.

### Bug fixes

* Noticed how Hyperspace would seem to freeze after you log in? We talked to the profile container manager and, well, he agreed to no longer hyperkill the app because it didn't register the account details the first time. He might've also agreed on letting Asriel hyperkill him if this happens again.
* Sometimes, finding the application name would cause Hyperspace to break down in fear. We fixed that up and now display that a Mastodon user tooted `with DETERMINATION` when we can't find the application name.

-----

## 0.1 (February 3, 2019)

This is the first release. :)