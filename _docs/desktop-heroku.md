---
title: Deploy to Heroku
layout: doc
description: Deploy a copy of Hyperspace to Heroku for free.
product: Hyperspace Desktop
---

Hyperspace can be deployed to Heroku as an application instead of hosting it on a web server. For small projects or cases where one doesn't have access to a web server, this can come in handy.

## Create your Heroku app

In the Heroku dashboard, click 'New' and then select 'New app'.

![image](/assets/images/docs/deploy-to-heroku/heroku-1.png)

Fill in the details to create your app.

![image](/assets/images/docs/deploy-to-heroku/heroku-2.png)

When your app is created, head to your app's settings and, under the Buildpacks section, click 'Add buildpack'.

![image](/assets/images/docs/deploy-to-heroku/heroku-3.png)

![image](/assets/images/docs/deploy-to-heroku/heroku-4.png)

We recommend using this buildpack for Hyperspace. It works with create-react-app and will build and deploy the app accordingly:

```null
https://github.com/mars/create-react-app-buildpack.git
```

Paste this buildpack URL into the URL box.

![image](/assets/images/docs/deploy-to-heroku/heroku-5.png)

## Connecting your Hyperspace repo to Heroku

Now it's time to connect your Hyperspace repository to Heroku. Assuming that you host your Hyperspace repository on GitHub, click 'GitHub' in the Deploy section. Sign in with your GitHub account to connect and, if needed, grant GitHub access to the organization that hosts your repository.

At the bottom of the Deploy page, select where your repository is hosted and search for the repository. Click the appropriate repository name in the search results.

![image](/assets/images/docs/deploy-to-heroku/heroku-6.png)

## Deploying Hyperspace

Heroku will automatically build Hyperspace and host it at your app's domain when you make a new commit to the repository, but you can force a build and deployment of your app without making a commit.

Navigate to the 'Manual deploy' section of the Deploy page. Select the branch you want to deploy and then click 'Deploy' to begin building and deploying Hyperspace to your Heroku app.

![image](/assets/images/docs/deploy-to-heroku/heroku-7.png)