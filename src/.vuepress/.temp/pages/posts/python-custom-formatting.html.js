export const data = JSON.parse("{\"key\":\"v-0e271f74\",\"path\":\"/posts/python-custom-formatting.html\",\"title\":\"Python Custom Formatting\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Python Custom Formatting\",\"author\":\"MinhTD\",\"description\":\"This blog post explains how to use Python's formatting mini-language to format strings and datetimes, as well as how to create custom formatting options for any object. It also provides an implementation for formatting geographic coordinates in various formats with different symbol options.\",\"tag\":[\"Python\"],\"category\":[\"Guide\"],\"date\":\"2023-04-21T00:00:00.000Z\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://minhtd18.github.io/posts/python-custom-formatting.html\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Python Custom Formatting\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"This blog post explains how to use Python's formatting mini-language to format strings and datetimes, as well as how to create custom formatting options for any object. It also provides an implementation for formatting geographic coordinates in various formats with different symbol options.\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"MinhTD\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Python\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2023-04-21T00:00:00.000Z\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Python Custom Formatting\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2023-04-21T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"MinhTD\\\"}]}\"]]},\"headers\":[],\"readingTime\":{\"minutes\":1.68,\"words\":503},\"filePathRelative\":\"posts/python-custom-formatting.md\",\"localizedDate\":\"April 21, 2023\",\"excerpt\":\"<h1> Python Custom Formatting</h1>\\n<p>Python f-strings use a formatting mini-language, the same as the older .format() function. After the colon comes short specifications for how to format the value:</p>\\n<div class=\\\"language-python line-numbers-mode\\\" data-ext=\\\"py\\\"><pre class=\\\"language-python\\\"><code><span class=\\\"token operator\\\">&gt;&gt;</span><span class=\\\"token operator\\\">&gt;</span> word <span class=\\\"token operator\\\">=</span> <span class=\\\"token string\\\">\\\"Hello\\\"</span>\\n<span class=\\\"token operator\\\">&gt;&gt;</span><span class=\\\"token operator\\\">&gt;</span> <span class=\\\"token string-interpolation\\\"><span class=\\\"token string\\\">f\\\"</span><span class=\\\"token interpolation\\\"><span class=\\\"token punctuation\\\">{</span>word<span class=\\\"token punctuation\\\">:</span><span class=\\\"token format-spec\\\">/^20</span><span class=\\\"token punctuation\\\">}</span></span><span class=\\\"token string\\\">\\\"</span></span>\\n<span class=\\\"token string\\\">'///////Hello////////'</span>\\n<span class=\\\"token operator\\\">&gt;&gt;</span><span class=\\\"token operator\\\">&gt;</span> amt <span class=\\\"token operator\\\">=</span> <span class=\\\"token number\\\">12345678</span>\\n<span class=\\\"token operator\\\">&gt;&gt;</span> <span class=\\\"token string-interpolation\\\"><span class=\\\"token string\\\">f\\\"</span><span class=\\\"token interpolation\\\"><span class=\\\"token punctuation\\\">{</span>amt<span class=\\\"token punctuation\\\">:</span><span class=\\\"token format-spec\\\">20,</span><span class=\\\"token punctuation\\\">}</span></span><span class=\\\"token string\\\">\\\"</span></span>\\n<span class=\\\"token string\\\">'          12,345,678'</span>\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
