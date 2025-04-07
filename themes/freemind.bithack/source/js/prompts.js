// themes/your-theme/scripts/tags.js

// Tip tag
hexo.extend.tag.register('tip', function (args, content) {
    return `<div class="prompt prompt-tip">${hexo.render.renderSync({ text: content, engine: 'markdown' })}</div>`;
  }, { ends: true });
  
  // Warning tag
  hexo.extend.tag.register('warning', function (args, content) {
    return `<div class="prompt prompt-warning">${hexo.render.renderSync({ text: content, engine: 'markdown' })}</div>`;
  }, { ends: true });
  
  // Info tag
  hexo.extend.tag.register('info', function (args, content) {
    return `<div class="prompt prompt-info">${hexo.render.renderSync({ text: content, engine: 'markdown' })}</div>`;
  }, { ends: true });