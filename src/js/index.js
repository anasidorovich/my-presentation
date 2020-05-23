import Reveal from 'reveal.js';
import 'sass/main.scss';

document.body.innerHTML = `<div class="reveal">
  <div class="slides">
     <!--inject:slides-->
  </div>
</div>`;

Reveal.initialize({
  controls: true,
  touch: true,
  dependencies: [
    { src: 'plugin/highlight/highlight.js', async: true },
    { src: 'plugin/notes/notes.js', async: true },
  ],
});

(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = './images/favicon.ico';
    document.getElementsByTagName('head')[0].appendChild(link);
})();
