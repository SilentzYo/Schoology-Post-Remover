# Schoology Post Remover

Chrome extension to remove posts from certain people on Schoology.

## Setup

1. Open `chrome://extensions` and turn on **Developer mode**.
2. Click **Load unpacked** and select this folder.

## Choosing who to hide

Add names to `names.txt`, one per line, the way they appear on their posts:

```
John Jones
Jane Jones
```

Capitalization doesn't matter. If the change doesn't show up, click the reload icon on the extension in `chrome://extensions`.

## Custom Schoology domains

The extension runs on `*.schoology.com`. If your school uses its own domain, add it to `matches` in `manifest.json` and reload the extension.
