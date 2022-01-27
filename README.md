# RPG Tracker Tool

A tool for tracking different aspects of the pen-and-paper roleplaying games I play, namely:
- Character sheets
- Command history

### Why do I need to build this?

Character sheets contain arbitrary data. Some is tabular, some is procedural, some is graph-based, some is just plain text. I've yet to see a solution that can support all three working in tandem.

Roll20 and Google Drive apps aren't good enough.
- Google Docs is a bad fit for interrelated tabular data.
- Google Sheets is ugly, unspecialized, and tends to break when anything is moved around. It's also a bad fit for non-tabular data.
- Roll20 is a pain to set up and the values are poorly displayed. It also loads slowly and doesn't support the same games we play.

This project is also my excuse to dive into:
- Svelte
- Nanostores
- Tailwind
