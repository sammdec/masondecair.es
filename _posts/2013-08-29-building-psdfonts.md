---
layout: post
title: Building psdfonts.com
---
I built psdfonts in about two weeks to get better acquainted with the ruby language and Sinatra, I thought I would write a short post about how the app is made for any noobs looking to learn. Now, by no means am I touting myself as any sort of expert or even halfway to that but I hope at least one person takes something useful away from this.

The first thing I needed to do was to get a Sinatra app up and running with a nice structure, that allowed for modularity and separation of interests. I took a lot of inspiration from Sam Soffes' [GitHub repos](https://github.com/soffes) where he has used Sinatra for numerous projects. It gave me confidence that the framework could  be organised rather than just cramming everything into a couple of folders.

When it came to installing gems I didn't want to pollute my system with global gems, so I decided to use the convenient `bundle install --path vendor/bundle`. This installs the gems to a folder within the app directory, therefore if you want to delete the app you don't have to go routing around for which gems you used.
Here is a list of gems I used in the app:

- [Shotgun](https://github.com/rtomayko/shotgun) - useful gem that reloads the app when developing
- [Puma](http://puma.io/) - replaces Webrick as the default server for the app, nice and fast and can be used in production as well as dev
- [Sass](http://sass-lang.com/) - sass is where its at ladies and gentlemen, if you haven't  looked into this yet, go check it out.
- [Sinatra-Assetpack](https://github.com/rstacruz/sinatra-assetpack) - One of the better asset pipeline gems for sinatra, however could do with js directive like in sprockets.
- [PSD.rb](http://cosmos.layervault.com/psdrb.html) - Couldn't of got the app to work without it, it does all the heavy lifting, made by the awesome people at LayerVault.

If your interested in getting started with Sinatra, I have set up a repo on [Github](https://github.com/samjbmason/sinatra-starter) that includes my starter directory/ setup.

One thing that came as a bit of an after-thought was using Dropbox's new Chooser Drop-in allowing users to grab get a psd from their dropbox. Using this method gets around the slowness of a domestic broadband upload and instead utilises the very fast and distributed Dropbox network to speed the file download up.

Then it was just a case of storing the result into a array and loop through it in the view.

Hopefully that has given people a small insight into how I built psdfonts.com, if there is something you would like to know, you can find me on twitter [@samjbmason](https://twitter.com/samjbmason)
