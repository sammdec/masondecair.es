---
layout: post
title: Removing MySQL from Mountain Lion
---

I am currently in the process of giving my Macbook Air a good ol'fashioned spring clean & in the process I have decided to move over to [homebrew](http://mxcl.github.com/homebrew/) for package management. I would highly recommend it for dependency and package management for your mac.

Anyway, I had installed MySQL using the native .dmg from Oracle and decided I would use the homebrew keg instead. I searched the docs and couldn't find any so after searching the web, I found these and have amended them as needed.

<ol>
<li>Backup any databases you have using mysqldump</li>
<li>Stop MySQL using the pref panel </li>
<li>Open Terminal and type in the following commands</li>
<li><pre>sudo rm /usr/local/mysql</pre></li>
<li><pre>sudo rm -rf /usr/local/mysql*</pre></li>
<li><pre>sudo rm -rf /Library/StartupItems/MySQLCOM</pre></li>
<li><pre>sudo rm -rf /Library/PreferencePanes/My*</pre></li>
<li>edit <pre>/etc/hostconfig</pre> and remove the line <pre>MYSQLCOM=-YES-</pre></li>
<li><pre>rm -rf ~/Library/PreferencePanes/My*</pre></li>
<li><pre>sudo rm -rf /Library/Receipts/mysql*</pre></li>
<li><pre>sudo rm -rf /Library/Receipts/MySQL*</pre></li>
<li><pre>sudo rm -rf /private/var/db/receipts/*mysql*</pre></ol>
</ol>

At this point it should be all uninstalled and at that point you can install it through homebrew.

I hope that this helps some people out there.