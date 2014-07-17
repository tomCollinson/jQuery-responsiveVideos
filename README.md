jquery-responsiveVideos
=======================

Convert all videos on a page to be responsive


Easy Peasy. The code snippet below shows the options available.

In sources you can define the services you use when embedding a video. This name should be lowercase and used in the src of any embedded code provided to you.

ParentEl is the parent container to target. By default this will be 'body' but it's possible you don't want to be resizing videos in sidebars or headers. This gives you the option to limit the scope.

wrapperClass - the class given to a container the plugin wraps around the video

```
$(document).ready(function () {
                $.responsiveVideos({
                    sources : [
                        'youtube',
                        'vine',
                        'brightcove'
                    ],
                    parentEl : 'article',
                    wrapperClass : 'responsive-vid'
                });
            });
```