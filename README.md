# High Square Aluminium - Premium Website

A premium, ultra-modern static showcase website for **High Square Aluminium by Monalisa Aluminium** — crafting premium aluminium solutions since 1998.

## Tech Stack

- **Frontend**: React 19 + Tailwind CSS + Framer Motion
- **Form Service**: Google Apps Script (email + optional Google Sheets)
- **Hosting**: GitHub Pages (static)

---

## Quick Setup

### 1. Install Dependencies

```bash
cd frontend
yarn install
```

### 2. Configure Google Apps Script (Contact Form → Email)

The contact form sends enquiries directly to your email via Google Apps Script.

#### Step A: Create the Apps Script

1. Open [Google Sheets](https://sheets.google.com) → create a new blank sheet
2. Go to **Extensions → Apps Script**
3. Delete any existing code and paste the following:

```javascript
function doPost(e) {
  var data = JSON.parse(e.postData.contents);

  // Send email notification
  MailApp.sendEmail({
    to: "YOUR_EMAIL@gmail.com",  // <-- Replace with your email
    subject: "New Enquiry - High Square Aluminium",
    body:
      "Name: " + (data.name || "") + "\n" +
      "Email: " + (data.email || "") + "\n" +
      "Phone: " + (data.phone || "") + "\n" +
      "Service: " + (data.service || "") + "\n" +
      "Location: " + (data.location || "") + "\n" +
      "Message: " + (data.message || "")
  });

  // Optional: Save to Google Sheet
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
  if (sheet) {
    sheet.appendRow([
      new Date(),
      data.name || "",
      data.email || "",
      data.phone || "",
      data.service || "",
      data.location || "",
      data.message || ""
    ]);
  }

  return ContentService
    .createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

4. Replace `YOUR_EMAIL@gmail.com` with your actual email address
5. Click **Save** (Ctrl+S)

#### Step B: Deploy the Apps Script

1. Click **Deploy → New Deployment**
2. Click the gear icon → select **Web app**
3. Set:
   - **Description**: Contact Form Handler
   - **Execute as**: Me
   - **Who has access**: Anyone
4. Click **Deploy**
5. Authorize when prompted (Review Permissions → Allow)
6. Copy the **Web app URL** (looks like `https://script.google.com/macros/s/ABC123.../exec`)

#### Step C: Paste the URL in the frontend

Open `frontend/src/components/ContactSection.jsx` and replace the placeholder on **line 16**:

```js
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec"; // <-- Replace this
```

With your actual URL:
```js
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/ABC123.../exec";
```

#### Optional: Google Sheet headers

If you want to track submissions in the Sheet, add these headers in Row 1:

| Timestamp | Name | Email | Phone | Service | Location | Message |

### 3. Configure GitHub Pages URL

Open `frontend/package.json` and update the `homepage` field:

```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME"
```

### 4. Run Locally

```bash
cd frontend
yarn start
```

### 5. Deploy to GitHub Pages

```bash
cd frontend
yarn deploy
```

This builds the project and pushes to the `gh-pages` branch automatically.

Then in your GitHub repo:
1. Go to **Settings → Pages**
2. Set Source to **Deploy from a branch**
3. Select branch: `gh-pages` / `/ (root)`
4. Save — your site will be live at the homepage URL

---

## Alternative Deployment

### Vercel
1. Push repo to GitHub → Import on [vercel.com](https://vercel.com)
2. Root Directory: `frontend` → Deploy

### Netlify
1. Push repo to GitHub → Import on [netlify.com](https://netlify.com)
2. Base directory: `frontend`, Build: `yarn build`, Publish: `frontend/build`

---

## Credentials Checklist

| What | Where | How to Get |
|------|-------|-----------|
| Google Apps Script URL | `src/components/ContactSection.jsx` line 16 | Deploy Apps Script as Web App |
| Email in Apps Script | Inside the script `doPost()` function | Your Gmail address |
| GitHub Pages URL | `package.json` → `homepage` | Your GitHub repo URL |

## Contact

- **Phone**: +91 98273 33552
- **WhatsApp**: [Chat Now](https://wa.me/919827333552)
- **Head Office**: Indore, MP
- **Branch**: Dewas, MP
