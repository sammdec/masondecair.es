---
layout: post
title: OpenSSL certificate error using Ruby on OSX
---

Ok this tripped me up quite a bit when building [psdfonts.com](http://psdfonts.com), whenever I was trying to access the dropbox api it would crash the site and throw the following error:

`OpenSSL::SSL::SSLError - SSL_connect returned=1 errno=0 state=SSLv3 read server certificate B: certificate verify failed`

Although this looks scary it's actually just because of outdated ssl security certificates that are shipped with OSX.

My setup is using rbenv with homebrew running ruby 2.0 on OSX, I found a couple of solutions to the problem but the only one that worked for longer than a day was the following:

`$ brew tap raggi/ale`<br>
`$ brew install openssl-osx-ca`

This method uses a cron job to update the security certificates with ones provided by Mozilla (a trustworthy source).

If you wish to uninstall the cronjob at a later just remove the `openssl-osx-ca` line from your systems crontab using this:

 `(crontab -l | grep -v openssl-osx-ca) | crontab -` <br>
(this is provided by the brew instructions after successfully being installed but I will write them here as I will definitely forget.)

Hope some people find it useful.
