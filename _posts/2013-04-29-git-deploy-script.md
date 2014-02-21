---
layout: post
title: Git Deploy Script
---

Last year I moved away from using WordPress for my personal blog and went with [Statamic](http://statamic.com/) which meant moving away from a heavy database driven site and instead opting for a simple flat file site, which I found makes it infinitely faster.

This means I can keep my entire site in version control without the need for worrying about a database and the sometimes hassles that can bring.

However, I still found myself using ftp to upload new posts to the server, which still felt a bit old-school/pirate programming to me. I knew it was possible to deploy Ruby apps automatically by pushing to a repository but these were generally only available if you used a service like Heroku.

I really wanted this feature for my blog but one that didn't involve me having to move my site to a PaaS or having to look after a complex setup. Thankfully people smarter than myself had already thought about this and I came across Marko Markovic's awesome [Simple php deploy script](https://github.com/markomarkovic/simple-php-git-deploy) that allows you to use BitBucket and Github's Post Receive Hooks to push any new commits to the your server when your hosted repository receives one.

I cannot recommend this script highly enough as it is heavily documented and also unlike some other scripts I found includes some basic security to make sure only you can run the script. For the record I use Bitbucket for my private repos as they provide you with unlimited ones.