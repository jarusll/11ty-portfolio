---
title: Fragments
layout: layouts/home.html
---

{% for fragment in collections.fragments | reverse %}

{% for tag in fragment.data.tags %}
<span class="tag {{tag}}-tag">
{{ tag }}
</span>
{% endfor %}

<a href="{{fragment.url}}">{{fragment.data.title}}</a>

<hr />
{% endfor %}
