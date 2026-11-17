# FlowPilot AI — Buyer Installation Guide

## 1. Introduction

FlowPilot AI is an AI-powered real estate website and lead-management system.

This guide explains how to configure an independent installation for a real estate agency.

Each agency must use its own Google account, spreadsheet, Apps Script projects and Gemini API key.

## 2. Requirements

Before installation, prepare:

- A Google account
- A Google Sheet
- A Google Apps Script account
- A Google Gemini API key
- A GitHub account or another static website hosting service
- A modern web browser

## 3. Website Installation

1. Obtain the FlowPilot AI website source files.
2. Upload the public website files to a hosting provider.
3. Confirm that the homepage is named `index.html`.
4. Configure the website's branding, logo and contact details.
5. Test the website on mobile and desktop.

## 4. Google Sheets Setup

1. Sign in to the agency's Google account.
2. Create a new Google spreadsheet.
3. Name it `FlowPilot AI - Customer Leads`.
4. Create a worksheet named `Sheet1`.
5. Add these column headings:

| Column | Heading |
|---|---|
| A | Date |
| B | Full Name |
| C | Email |
| D | Phone |
| E | Property Type |
| F | Purpose |
| G | Message |
| H | Status |
| I | AI Lead Temperature |
| J | AI Summary |

6. Keep spreadsheet access restricted.

## 5. Gemini API Configuration

1. Obtain a Gemini API key through Google's official developer platform.
2. Open the public Apps Script project.
3. Open Project Settings.
4. Add a Script Property named `GEMINI_API_KEY`.
5. Enter the agency's own API key as its value.
6. Never publish the key in website JavaScript, HTML or a public repository.

## 6. Apps Script Backend

1. Create a Google Apps Script project.
2. Add the FlowPilot AI backend source code.
3. Configure the spreadsheet ID and worksheet name.
4. Configure the Gemini API connection.
5. Authorize the required external requests.
6. Deploy the public web app using the documented access settings.
7. Update the website configuration with the agency's own deployment URL.

## 7. Private Admin Dashboard

1. Create a separate Apps Script project for the private admin dashboard.
2. Add the admin backend code.
3. Add the admin HTML file.
4. Configure the agency's spreadsheet ID.
5. Deploy as a web app.
6. Select Execute as: Me.
7. Select Who has access: Only myself.

Do not publish the private admin dashboard publicly.

## 8. Website Testing

Test the following:

- Homepage and navigation
- Property search
- Property details
- Customer enquiry form
- Google Sheets storage
- Gemini AI classification
- Email notifications
- Private admin dashboard
- Lead status updates
- Mobile and desktop layouts

## 9. Security Checklist

- Use an independent Google account for each agency.
- Use a separate spreadsheet for each agency.
- Use a separate Gemini API key for each agency.
- Keep API keys in Script Properties.
- Keep admin access private.
- Do not expose customer information.
- Test access permissions before handover.

## 10. Handover

Before completing the installation:

- Confirm that all website features work.
- Confirm that enquiries reach the agency's spreadsheet.
- Confirm that AI analysis works.
- Confirm that email notifications work.
- Confirm that the agency administrator can access the private dashboard.
- Provide the agency with its own installation documentation and access details.

---

**FlowPilot AI — Capture • Analyze • Grow**
