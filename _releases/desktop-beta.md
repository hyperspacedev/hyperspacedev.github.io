---
title: Hyperspace Desktop (beta)
layout: release
description: Hyperspace Desktop is the beta version of our cross-platform client.
---
## 1.0.0 Golden Master ( October 9, 2019)

What's new:

> **Golden Master**: This release is intended to reflect the upcoming stable release for the Hyperspace 1.x series and is merely a bug fix release. Developers, administrators, and users can expect this release to be almost identical to the upcoming stable release.

- Removes 'Bliss' and 'Attract' themes
- Mitigates horizontal scroll issues by hiding the profile picture on pages with the profile avatar design on smaller screens
- Fixes verbiage of Settings descriptions
- Removes unintended on page content spacing when the app bar is shrunken
- Adds descriptions to Edit Profile page ("You")
- Fixes issue where the search bar just refreshes the page without performing a search on desktop apps (fixes #100)
- Makes minor adjustments to the desktop apps by only showing the window once the content is ready and opening the Developer tools within the window

## 1.0.0beta7 (October 4, 2019)

What's new:

- Updated desktop menu bar with new menus and keyboard shortcuts (fixes #73)
- Updates the designs for the edit profile page and Settings page, focusing on the signed-in user
- Adds interface for managing blocked servers and disallows domains from a list at login (fixes #71)
- Removes developer mode banner when not running under node or in desktop apps (fixes #80)
- Changes license from Apache 2.0 to NPLv1
- Biographies now include emojis
- Updates desktop app dependencies
- Displays a badge on app icon when new notifications arrive
- Adds new "Aqua" theme for macOS to better blend in with macOS
- Adds support for multiple accounts and user account switching (fixes #37)

## 1.0.0beta6 (September 16, 2019)

What's new:

- Adds new profile redesign (fixes #81)
- Fix theming issues on macOS Catalina (fixes #75)
- Adds Plemora support (fixes #70, fixes #69, and improves on #65)
- Runs macOS theme changes only when macOS (fixes #72)
- Adds support for notarizing the app

## 1.0.0beta5 (May 24, 2019)

What's new:

- Source code introduces a new [Patreon contributors](https://github.com/hyperspacedev/hyperspace/blob/master/patreon.md) list (#59)
- Fixes an issue with the search functionality on the desktop apps (fixes #60)
- Media cards should be shorter in description length and hide images when necessary (fixes #47)

---

## 1.0.0beta4 (May 17, 2019)

What's new:

- Introduces new instance and app cards on the about page to better organize info (fixes #46)
  - Instance card includes options to invite a new user, view terms of service, etc.
- Refines control on federation settings, including public timelines, universal login, and default visibilities (fixes #50)
- Introduces code to build the new desktop apps that support the following (#52):
  - New login system supported by `hyperspace://` protocol
  - Themes and dark mode fully supported in macOS (#55)
  - Links that try to open in a new window (using `target="_blank"`) opens in default browser
  - Includes build instructions for the desktop
- Includes Azure Pipelines code that tests building process

---

## 1.0.0beta3 (May 3, 2019)

What's new:

- Login screen changes include a new version string and a fixed Authorize button (fixes #24).
  - Changes login text from "If you are from X" to "Not from X?".
- Enforce stricter rules on when an instance is defederated in config.json (fixes #28):
  - Default visibility changes from public to unlisted and cannot be changed to public in settings.
  - Login page only allows to log in to instance from `registerBase`.
- Makes updates to CSS and themes:
  - Fix narrow margins on mobile devices (fixes #27).
  - Remove the Royal II (King) theme and replace with Classic theme.
  - Update colors for Attract theme to prevent CSS collisions (fixes #26).
  - Settings menu includes new icons for clarity and ease-of-discoverability (fix #30).
- Brand name is applied to more places in Hyperspace and changes Hyperspace app name in login process (fixes #34).
- Addresses issue where media upload snackbars didn't dismiss properly (fixes #32).
- Adds a Settings menu for editing profiles within Hyperspace and a new page at `/you` to edit a user's avatar, header, display name, and bio (fixes #14).


-----

## 1.0.0beta2u2 (April 26, 2019)

What's new:

* Changes the login function in the emergency mode from `createHyperspaceApp` to `Mastodon.registerApp` (pulled from [@gopherdonapp/app](https://github.com/gopherdonapp/app)).
* Fixes the `createHyperspaceApp` function so that when it calls the `createApp` function, it passes the base URL from the parameters (required to make an app on the server with base URL) (fixes #8, noted by @GidiKroon).
* Fixes the bug where the app crashes when clicking "Load more posts" on a profile with no posts (fixes #13).
* Makes avatars in applicable areas clickable, redirecting to the profile page of an account.
* Adds a 'View profile' button as an action in a notification (fixes #15).
* Changes the default profile icon to `AssignmentIndIcon` for consistency.
* Adds streaming to notification page so new notifications are loaded in while on the page (fixes #19)
* Adds a reply button to notifications that are of the type mention (eg. messages, replies to existing posts, new posts with a mention, etc.)
* Fixes bug where boosting/unboosting a post doesn't update its state
* updates version to `1.0.0beta2u2`

-----

## 1.0.0beta2u1 (April 24, 2019)

What's new:

* A backup method for authenticating has been implemented that works similar to the `hyperspace-classic` method.
* The view thread button now corresponds to the actual post if it's a reblog.

-----

> Note: This document covers the latest features, bug fixes, and improvements deployed to the beta versions of Hyperspace, available at [https://hyperspacepapp-net.herokuapp.com](https://hyperspaceapp-net.herokuapp.com) and other instances that are deployed on the beta channel.

## 1.0.0beta2 (April 22, 2019)

> Update: this beta has been re-released due to an infinite state error that cause the 404 page to not work properly. The 404 page in question has been disabled for this release.

What's new:

* A new `location` field in the config file should help mitigate redirect URL issues that cause client authentication errors. (#8)
* The notification badge will now be displayed on mobile devices in the menu and should no longer disappear and lose count with the setting "Notification badge counts all notifications'' turned on (fixes #7).
* The theme chooser has been slightly redesigned to include a new theme preview before applying the theme.
* A new setting is available to set the default visibility when composing new posts.
* The drawer menu on mobile devices has been reorganized in a logical manner.
* A new setting that allows the app to follow the browser's/platform's light mode/dark mode preference has been added.
* A few changes have been made to themes in general:
  * The 'Brother' and 'Scientist' themes have been removed.
  * Most existing themes have been renamed.
  * Two new themes, Bliss and Attract, have been added.
* The 'Who to follow' page link has been enabled.
* A new recommendations page is available to follow suggested accounts and manage follow requests.
* ~~A new '404' page has been added.~~

-----

## 1.0.0beta1u1 (April 21, 2019)

* The notifications toggle bug where it switches states after reloading because the user denied permission to display notifications has been fixed. (fixes #2)
* A new notification setting lets you display all notifications in the badge or just the new ones during that session (fixes #3).
* The app and website icons for Hyperspace have been reinstated (fixes #5).
* Padding for posts and content has been better optimized for smaller devices and the toolbar has been simplified so that it only shows 'Favorite', 'Boost', and 'Reply' on mobile. (fixes #4).
  * This change also puts the 'View thread' and 'Open in Web' buttons in the menu when on a mobile device.

-----

## 1.0.0beta1 (April 12?, 2018)

* First release of the `1.x` series of Hyperspace.