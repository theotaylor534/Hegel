# Lesefeed · Hegel

Hegel's *Phänomenologie des Geistes* (1807) as a feed you scroll: one clause at a
time, German first, the words that blocked you underneath, the English only when
you ask for it.

Order: Einleitung, sense-certainty, lord and bondsman (pulled forward), then the
rest of the book in its own order, with the Vorrede last. The first three
sections carry a literal English translation made for this reader; after them
there is German, glossed words and a word-for-word line, and no English.

Everything is static. Put these files on any HTTPS host and open the URL on your
phone. **Install on iPhone:** open the URL in Safari, Share, *Add to Home Screen*.

| file | what it is |
| --- | --- |
| `index.html` | the whole app (same reader as the Kant one, with its own storage) |
| `book.json` | the reader, pre-parsed (174289 German words, build 20261110-1708) |
| `dict.json`, `forms.json` | the tap dictionary and the map from inflected forms to headwords |
| `jszip.min.js` | lets you open any other EPUB from inside the app |
| `sw.js` | caches everything for offline use |
| `manifest.webmanifest` | makes it installable |

German text: Project Gutenberg #6698 (Gutenberg-DE). Ending the URL with `#s25`
opens at sitting 25.
