---
title: Suraj Yadav
layout: layouts/home.html
---
<user-avatar 
    name="SURAJ YADAV" 
    image="/images/profile_bw.webp" 
    title="Oddball Software Creator and a Hobbyist Artist">
</user-avatar>

<hr />

{% for post in collections.posts %}
<a href="{{post.url}}">{{post.data.title}}</a>
{% endfor %}
