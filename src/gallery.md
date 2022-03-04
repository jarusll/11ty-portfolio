---
title: Gallery
layout: layouts/home.html
---

<style>
    #photos {
        line-height: 0;
        column-count: 4;
        column-gap: 0.5rem;  
    }

    #photos img {
        width: calc(100% - 0.5rem);
        margin: 0.25rem;
        height: auto !important;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        border-radius: 0.2rem;
    }
    @media (max-width: 1200px) {
        #photos {
        column-count:         4;
        }
    }
    @media (max-width: 1000px) {
        #photos {
        column-count:         3;
        }
    }
    @media (max-width: 800px) {
        #photos {
        column-count:         2;
        }
    }
    @media (max-width: 400px) {
        #photos {
        column-count:         1;
        }
    }
</style>


<div id="photos">
{% for image in images.items %}
<img src="https://picsum.photos/{{image}}">
{% endfor %}
</div>