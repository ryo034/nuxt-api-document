<template>
  <section :id="id" class="method first-of-group scroll-spy">
    <div class="method-area method-area-expanded">
      <div class="method-copy">
        <div class="method-copy-padding">
          <div class="MethodCopyTitle">
            <h1 class="MethodCopyTitle-anchor">{{ id }}</h1>
          </div>
          <div
            class="compiled-description github-markdown-body"
            v-html="compiledMarkdownText(request.description)"
          ></div>
          <!-- paramaters -->
          <!-- status code -->
        </div>
      </div>
      <div v-if="request.url" class="method-example">
        <span style="font-size: 0px;"></span>
        <div v-if="request.url.raw" class="method-example-part">
          <div class="method-example-request include-prompt">
            <div class="method-example-request-topbar">
              <div class="method-example-request-title">
                {{ request.method }}
              </div>
              <div class="MethodExampleTopbarButton">
                <div class="MethodExampleTopbarButton-spacer"></div>
                <div class="Box-root Flex-flex">
                  <div class="Box-root Flex-flex">
                    <button class="ClickToCopy">
                      <div
                        class="SVGInline SVGInline--cleaned SVG Icon Icon--clipboard SVG--color SVG--color--blue200 Box-root Flex-flex"
                      >
                        <svg
                          class="SVGInline-svg SVGInline--cleaned-svg SVG-svg Icon-svg Icon--clipboard-svg SVG--color-svg SVG--color--blue200-svg"
                          style="width: 16px;height: 16px;"
                          height="16"
                          viewBox="0 0 16 16"
                          width="16"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 5h2a3 3 0 0 0 3-3 2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2 3 3 0 0 0 3 3zM6 2a2 2 0 1 1 4 0 1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z"
                            fill-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="method-example-request-body">
              <div
                class="CodeBlock"
                style="min-height: 20px; max-height: calc(100vh - 186px);"
              >
                <div class="CodeBlock-scroll">
                  <div class="CodeBlock-lines">
                    <div>1</div>
                  </div>
                  <pre class="CodeBlock-pre language-bash">{{
                    request.url.raw
                  }}</pre>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="response[0] && response[0].body"
          class="method-example-response"
        >
          <div class="method-example-response-topbar">
            <div class="method-example-response-title">Response</div>
          </div>
          <div
            class="CodeBlock"
            style="min-height: 50px; max-height: calc(100vh - 363px);"
          >
            <div class="CodeBlock-scroll">
              <pre
                class="CodeBlock-pre language-json"
                v-html="compiledMarkdownText(response[0].body)"
              ></pre>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="MethodArea-divider"></div>
  </section>
</template>

<script>
import marked from 'marked'
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    request: {
      type: Object,
      required: true
    },
    response: {
      type: Array,
      required: true
    }
  },
  methods: {
    compiledMarkdownText(text) {
      if (!text) return
      return marked(text)
    }
  }
  // created() {
  //   if(this.request.method !== 'GET') {

  //   }
  // }
}
</script>
