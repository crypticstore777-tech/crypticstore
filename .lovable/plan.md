

## Add HelloSkip AI Agent to Homepage

### What
Add the HelloSkip AI agent script to the website so it loads on every page.

### How

**Edit `index.html`**: Add the script tag before the closing `</body>` tag:

```html
<script src="https://helloskip.com/agent.js" data-agent-id="XvDADTROHZa0XDQAcfYy"></script>
```

This placement ensures it loads on all pages since `index.html` is the single entry point for the app.

### Security Note
This is a third-party script from helloskip.com. It will have full access to the page DOM. Confirm you trust this provider before proceeding.

