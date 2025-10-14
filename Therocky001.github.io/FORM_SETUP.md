# FREE Contact Form Setup with EmailJS

## 🆓 **100% Free Solution** (200 emails/month)

### **Step 1: Create EmailJS Account (2 minutes)**
1. Go to [emailjs.com](https://www.emailjs.com/)
2. Sign up for **FREE account** (no credit card required)
3. Verify your email address

### **Step 2: Connect Your Gmail (2 minutes)**
1. In EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Select **"Gmail"** 
4. Click **"Connect Account"** and authorize Gmail
5. **Copy your Service ID** (looks like `service_xxxxxxx`)

### **Step 3: Create Email Template (2 minutes)**
1. Go to **"Email Templates"**
2. Click **"Create New Template"**
3. **Subject:** `New Contact Form - {{from_name}}`
4. **Email Body (HTML):** Copy and paste this template:

```html
<div style="font-family: system-ui, sans-serif, Arial; font-size: 12px">
  <div>A message by {{from_name}} has been received. Kindly respond at your earliest convenience.</div>
  <div
    style="
      margin-top: 20px;
      padding: 15px 0;
      border-width: 1px 0;
      border-style: dashed;
      border-color: lightgrey;
    "
  >
    <table role="presentation">
      <tr>
        <td style="vertical-align: top">
          <div
            style="
              padding: 6px 10px;
              margin: 0 10px;
              background-color: aliceblue;
              border-radius: 5px;
              font-size: 26px;
            "
            role="img"
          >
            👤
          </div>
        </td>
        <td style="vertical-align: top">
          <div style="color: #2c3e50; font-size: 16px">
            <strong>{{from_name}}</strong>
          </div>
          <div style="color: #666666; font-size: 13px">{{from_email}}</div>
          <div style="color: #888888; font-size: 12px; margin-top: 5px">
            <strong>Service:</strong> {{service_interested}}<br>
            <strong>Budget:</strong> {{budget_range}}
          </div>
          <p style="font-size: 16px; margin-top: 10px; color: #2c3e50">{{message}}</p>
        </td>
      </tr>
    </table>
  </div>
  <div style="margin-top: 20px; font-size: 11px; color: #999999">
    Sent via Portfolio Contact Form
  </div>
</div>
```

5. **Save Template** and **Copy your Template ID** (looks like `template_xxxxxxx`)

### **Step 4: Get Public Key (1 minute)**
1. Go to **"Account"** → **"General"**
2. **Copy your Public Key** (looks like `xxxxxxxxxxxxxxx`)

### **Step 5: Update Your Code (1 minute)**
Replace the placeholder IDs in `src/App.jsx` around line 50:

```javascript
// Replace these with your actual EmailJS IDs:
const serviceId = 'service_xxxxxxx';     // Your Service ID
const templateId = 'template_xxxxxxx';   // Your Template ID  
const publicKey = 'xxxxxxxxxxxxxxx';     // Your Public Key
```

## 🎯 **What You'll Get**

**Emails will be sent to:** `cnttoujjval@gmail.com`

**Email format:**
- 📧 **Subject:** "New Contact Form - [Visitor Name]"
- 👤 **From:** Visitor's name and email
- 💼 **Service:** What they're interested in
- 💰 **Budget:** Their budget range
- 💬 **Message:** Their project details
- ↩️ **Reply-to:** Visitor's email (click reply to respond)

## 🔧 **Current Status**
- ✅ EmailJS package installed
- ✅ Form code updated for EmailJS
- ✅ Loading states and success/error messages
- ⚠️ **Need your EmailJS credentials** (5 minutes total setup)

## 📋 **EmailJS Features**
- ✅ **200 emails/month FREE**
- ✅ **No credit card required**
- ✅ **Direct Gmail integration**
- ✅ **Reliable delivery**
- ✅ **No server needed**
- ✅ **Professional email templates**

## 🧪 **Test Your Form**
Once you add your EmailJS IDs:
1. Fill out the contact form on your site
2. Click "Send Message"
3. Check your Gmail inbox
4. Reply directly to respond to visitors

## 🆚 **Why EmailJS vs Others**
- **Formspree:** Only 50 emails/month free
- **Netlify Forms:** Requires Netlify hosting
- **EmailJS:** 200 emails/month, works anywhere, completely free

**Total setup time: ~5 minutes** ⏱️