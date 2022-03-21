---
title: Suraj Yadav
layout: layouts/home.html
---
<user-avatar 
    name="SURAJ YADAV" 
    image="https://picsum.photos/200" 
    title="Oddball Software Creator and a Hobbyist Artist">
</user-avatar>

{% for post in collections.posts %}
<a href="{{post.url}}">{{post.data.title}}</a>
{% endfor %}

<hr />
