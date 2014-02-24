# Here lies maison.io

Welcome all to the repo for my website, [maison.io](http://maison.io). This is the second major iteration of this website, in that time I have learnt alot and have moved away from php powered blogging tools and instead I'm now using Jekyll.

I'm hoping with this new site I can use it much as a platform rather than locking myself down to blogs. For the time being it's main purpose is as a place for me to put up my blog posts and writings. In the future Im looking to expand it.

## What's in here anyway

A few things I hope you will find interesting
- Uncompressed SCSS files
- Gulpfile that helps get all the parts binded together

## Workflow

So what happens when I want to add/ change/delete or push content to the live site. Well I have tried to make it as easy as possible for myself.

1. I have this repo cloned onto my system, I also have Gulp installed using node. Using the package.json all I need to do is run `npm install` to install gulp and all its plugins.

2. Gulp does quite a few essential things for this site.
  - Runs the jekyll build command and watches for files to change
  - Converts sass to css and compresses it
  - Optimises all my images

3. This site also use rak-jekyll this juts makes it easier when pointing pow to my local copy, it also allways me to push this site to anything that uses Heroku buildpacks (more on this in a sec).

4. The site is currently served using Digital Ocean's excellent VPS'. To make life easier when I push my site live or push any changes to the server I use [Dokku](https://github.com/progrium/dokku). This is a tiny PaaS implementation and uses Heroku's buildpacks to easily deploy repos to servers and then build and launch the apps easily. Its as simple as `git push dokku master`.
