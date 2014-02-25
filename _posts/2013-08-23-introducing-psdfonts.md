---
layout: post
title: Introducing psdfonts.com
---

Ok so it's been quite a while since I have written a post on here. Work has been really busy in the best possible way and to be honest I have had a case of writers block (read: nothing worth writing about), I have however wanted to take the time learning a new programming language for a while and get properly stuck in with a small project.

After reading the [Execute](http://executebook.com) book recently, I decided I had spent enough time reading and procrastinating and should in fact just jump in and start building. The results certainly aren't perfect and the design isnt going to get me on Designer News but I'm OK with that as it gives me a good base to work with and expand my knowledge of ruby and design.

So without anymore rambling I would like to announce [psdonts.com](http://psdfonts.com), it's a very simple web app that solves a problem I have had for a while. Working with lots of different designers means receiving psd files in varying degrees of organisation and even greater degrees of web knowledge from said designers. Some are not aware that not all fonts are available for the web or that using eight different fonts per page can have a serious knock on effect for page load speed.

When start a new project I like to setup the type first as I find it can have the largest influence over the implementation of a static design, therefore I needed a quick way to get all the fonts and weights used in a psd file and find out there availability, [psdfonts.com](http://psdfonts.com) was the scratch to that itch.

n.b. if you have no interest in the technical side look away now, but please go check out [psdfonts.com](http://psdfonts.com) and if you find any bugs let me know on [twitter](http://twitter.com/samjbmason).

The site is built with ruby and the small (but perfectly formed) framework [Sinatra](http://www.sinatrarb.com/), I could of used something like rails but I felt I needed to find out how the language works on its most basic level before abstracting it away. For those fancying to use sinatra I have added a repo to Github that contains a nice little vanilla setup that might help you get started, [I wrote about it here](http://maison.io/blog/sinatra-starter).

Since building psdfonts I have really started to understand why so many people rave about ruby, it really does read like a human language.

One of the biggest helps to the project was the awesome [psd.rb](http://cosmos.layervault.com/psdrb.html) gem from the uber talented people at Layervault, it is a library that parses psd files and allows you to then traverse the different layer data.

All in all it's been a fun little project that I hope to grow over time, I would love to hear what people thing about it and if there are any glaring omissions that I have overlooked. Either way let me know by dropping me a messag on [twitter](http://twitter.com/samjbmason).