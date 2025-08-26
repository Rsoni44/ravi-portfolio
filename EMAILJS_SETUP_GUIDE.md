# 📧 EmailJS Setup Guide for Ravi Portfolio

## 🎯 **What This Does**
- Makes your contact form actually send emails to your inbox
- No backend server required
- Works entirely in the frontend
- Free tier available (100 emails/month)

## 📋 **Step-by-Step Setup**

### **Step 1: Sign Up for EmailJS**
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### **Step 2: Create Email Service**
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (or your preferred email provider)
4. Connect your Gmail account (ravi.ramsoni01@gmail.com)
5. **Save the Service ID** (you'll need this)

### **Step 3: Create Email Template**
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

```html
Subject: New Portfolio Contact: {{subject}}

Name: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio website contact form.
```

4. **Save the Template ID** (you'll need this)

### **Step 4: Get Your Public Key**
1. Go to "Account" → "API Keys"
2. **Copy your Public Key**

### **Step 5: Update Your Code**
Replace these placeholders in `portfolio_js.js`:

```javascript
// Line 2: Replace YOUR_PUBLIC_KEY
emailjs.init('YOUR_PUBLIC_KEY');

// Line 195: Replace all three placeholders
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_PUBLIC_KEY')
```

**Example with real values:**
```javascript
emailjs.init('user_abc123def456');
emailjs.send('service_xyz789', 'template_contact123', templateParams, 'user_abc123def456');
```

## 🔧 **Alternative Solutions**

### **Option 2: Netlify Forms (Free)**
If you deploy to Netlify, forms work automatically:
1. Deploy your site to Netlify
2. Add `netlify` attribute to your form: `<form netlify>`
3. Emails sent to your Netlify dashboard

### **Option 3: Formspree (Free)**
1. Go to [formspree.io](https://formspree.io/)
2. Create account and get endpoint URL
3. Update form action: `<form action="https://formspree.io/f/YOUR_ENDPOINT">`

### **Option 4: Backend Server (Advanced)**
- Node.js + Express + Nodemailer
- Python + Flask + smtplib
- PHP + mail() function
- Requires hosting and server management

## ✅ **Testing Your Setup**

1. **Fill out the contact form** on your website
2. **Click "Send Message"**
3. **Check your email** (ravi.ramsoni01@gmail.com)
4. **Check browser console** for success/error messages

## 🚨 **Common Issues**

- **"EmailJS not defined"**: Make sure EmailJS script is loaded before your JS
- **"Service not found"**: Check your Service ID is correct
- **"Template not found"**: Check your Template ID is correct
- **"Authentication failed"**: Check your Public Key is correct

## 💰 **Pricing**

- **Free Tier**: 100 emails/month
- **Paid Plans**: Start at $15/month for 1,000 emails
- **Enterprise**: Custom pricing for high volume

## 🎉 **You're Done!**

Once configured, visitors can fill out your contact form and you'll receive emails directly to ravi.ramsoni01@gmail.com!

---

**Need Help?** EmailJS has excellent documentation and support at [docs.emailjs.com](https://docs.emailjs.com/) 