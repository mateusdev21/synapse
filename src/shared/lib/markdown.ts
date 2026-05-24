import hljs from 'highlight.js';

import MarkdownIt from 'markdown-it';

const markdown = new MarkdownIt({
    html: false,

    linkify: true,

    breaks: true,

    highlight(code, language) {
        if (language && hljs.getLanguage(language)) {
            try {
                const highlighted = hljs.highlight(code, {
                    language,
                }).value;

                return `
          <div class="code-block">
            <div class="code-block-header">
              <span>${language}</span>
            </div>

            <pre>
              <code class="hljs language-${language}">
                ${highlighted}
              </code>
            </pre>
          </div>
        `;
            } catch {
                //
            }
        }

        return `
      <pre>
        <code class="hljs">
          ${markdown.utils.escapeHtml(code)}
        </code>
      </pre>
    `;
    },
});

export default markdown;