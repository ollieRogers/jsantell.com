if (!window.ENV_DISQUS);
  ENV_DISQUS = '';

var disqus_shortname = ENV_DISQUS;
(function () {
    var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
    dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
})();
