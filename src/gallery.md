---
title: Gallery
layout: layouts/home.html
---

<div id="photos">
{% for image in images.items %}
<figure>
	<span>{{image.name}}</span>
	<img src="{{image | makeUrl}}" alt="{{image.description}}">
	<figcaption>{{image.description}}</figcaption>
</figure>
{% endfor %}
</div>
