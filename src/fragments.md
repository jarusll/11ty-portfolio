---
title: Fragments
layout: layouts/home.html
---

{% for fragment in collections.fragments | reverse %}
<div class="fragment-item">
{% for tag in fragment.data.tags %}
<span class="tag {{tag}}-tag">
{{ tag }}
</span>
{% endfor %}

<a href="{{fragment.url}}">{{fragment.data.title}}</a>

<hr class="hr"/>
</div>
{% endfor %}

