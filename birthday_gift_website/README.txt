# Birthday Gift Website — Quick Start

## What's included
- `index.html` — the page content and the messages you can personalize
- `style.css` — burgundy / deep pink look, gift box, paper, envelope, and responsive layout
- `script.js` — click interactions and screen navigation
- `assets/photos/` — put your 3 photos here
- `assets/media/` — put your video and voice recording here

## Step 1 — Extract the ZIP
Extract the entire `birthday_gift_website.zip` folder somewhere easy to find, for example your Desktop. Do not open files while they are still inside the ZIP.

## Step 2 — Add your media
Keep the filenames exactly as below:
- `assets/photos/photo1.jpg`
- `assets/photos/photo2.jpg`
- `assets/photos/photo3.jpg`
- Optional video thumbnail: `assets/photos/video-poster.jpg`
- `assets/media/our-video.mp4`
- `assets/media/voice-note.mp3`

You can use `.jpg` photos. If your photo is `.png` or `.webp`, either convert it to JPG or change the matching `src` in `index.html`.
For best compatibility, export video as MP4 (H.264) and audio as MP3. Keep files reasonably small for easy hosting.

## Step 3 — Personalize the words
Open `index.html` in Visual Studio Code or another plain-text code editor.
Search for these exact sample sentences and replace them with your own:
- First note: inside `<p id="firstMessage"> ... </p>`
- Long letter: inside `<p id="loveLetter"> ... </p>`
- Secret note: inside `<p id="secretMessage"> ... </p>`
- Closing message: find `Thank you for being part of my life...`
Keep the surrounding HTML tags (`<p>`, `</p>`, etc.). Do not paste a whole letter that contains raw `<` or `>` characters into HTML. Use ordinary text and `<br><br>` where you want a paragraph break.

## Step 4 — Preview the website
Easy method: double-click `index.html` and open it in Chrome or Edge.
If the browser blocks local video/audio, use a local server:
1. Install Visual Studio Code.
2. In VS Code, open the extracted folder using **File → Open Folder**.
3. Install the **Live Server** extension by Ritwick Dey (only if available in your VS Code extension marketplace).
4. Right-click `index.html` → **Open with Live Server**.
Alternative if Python is already installed: open a terminal in the folder and run:
`python -m http.server 8000`
Then open `http://localhost:8000` in your browser.

## Step 5 — Test the full sequence
1. Click the gift box or Open my gift.
2. Click Keep going → three photos → Read something → letter → One more thing → video.
3. Continue to secret envelope. Click the envelope to reveal the note.
4. Continue to the voice note.
5. Continue to the final heart and test Experience it again.
6. Test on a narrow browser window or your phone.

## Step 6 — Share it online
When everything works locally, upload the *contents of the extracted folder* to a static website host such as GitHub Pages or Netlify. You can use their official guides:
- GitHub Pages: https://docs.github.com/en/pages
- Netlify manual deploy: https://docs.netlify.com/site-deploys/create-deploys/#deploy-with-drag-and-drop
Do not upload private photos or recordings to a public repository unless you are comfortable with anyone who can access it seeing them. A private repository does not automatically mean the deployed website is private.

## Important
- This is a static website: no account, database, or paid server is required for local testing.
- Internet is needed for the Google Fonts import; the page still has fallback fonts offline.
- The supplied project uses placeholder filenames. It does not include your personal photos, video, or voice recording.
