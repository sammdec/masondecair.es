---
layout: post
title: 'Lamp on Linode'
categories:
  - server
---

How I get started with my linode stacks.

1. Follow standard getting started on Linode docs
2. Next secure server in standard way using linode docs.
3. Install apache
4. Instal php5-cgi
5. Installed ruby-scripting
7. restart apache
8. Instal mysql-server
9. add mysql password
10. run mysql_secure_installation
11. install php5-mysql support
12. run sudo a2dissite default ( as talked about here http://library.linode.com/web-servers/apache/installation/ubuntu-10.04-lucid under the header 'Configure Name-based Virtual Hosts')
12. Follow all instructions for base domain
13. Optimise apache for Linode 512 found here (http://library.linode.com/hosting-website#sph_optimizing-apache-for-a-linode-512)
14. Jump to http://library.linode.com/web-servers/apache/php-cgi/ubuntu-10.04-lucid under heading "Configure Apache for PHP CGI" to make sure php-cgi will run under ubuntu.
15. Install Git-core
16. Now install rvm using normal method from rvm site
17. Install all ruby dependencies then use rvm to install ruby
15. Jump to installing passenger and rails (http://library.linode.com/frameworks/ruby-on-rails-apache/ubuntu-10.04-lucid ) **** Im here haven't installed passenger or anything yet.
19. Install passenger using gem then run passenger-install-apache2-module
20. Go through install instructions open up sudo nano  /etc/apache2/apache2.conf and add in the lines that passenger install says

