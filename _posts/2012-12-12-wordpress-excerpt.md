---
layout: post
title: 'Custom Excerpt Length in WordPress'
categories:
  - wordpress
---

Most sites that have a news/blog aspect also have an archive page which shows a small excerpt of the posts content. Wordpress provides a couple of ways to show these excerpts, unfortunately I have found they can be quite clunky and often not very intuitive when the user needs to do it.

My solution is creating a custom function.

{{ gist id="4050714" file="custom_excerpt_wp.php" }}

This will, by default, take the current post's ID, however if you are in a get_posts you can simply pass the ID as you would normally. The Excerpt length is in letters as I find using actual characters easier than words which vary in length.

Here is how It can be used inside a template:
{{ gist id="4050714" file="custom_excerpt_wp_usage.php"}}

Hope it helps those people who need it.
