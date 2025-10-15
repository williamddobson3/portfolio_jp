# Firebase Setup Guide for Japanese Portfolio

## 🔥 Firebase Project Configuration

### Current Configuration
- **Project ID**: `japanese-portfolio`
- **Auth Domain**: `japanese-portfolio.firebaseapp.com`
- **Storage Bucket**: `japanese-portfolio.firebasestorage.app`
- **Messaging Sender ID**: `507077744471`
- **App ID**: `1:507077744471:web:6d4c97a03a8b6152fa5012`
- **Measurement ID**: `G-8HCSW06LN4`

## 📋 Required Firebase Services Setup

### 1. Authentication Setup
1. Go to [Firebase Console](https://console.firebase.google.com/project/japanese-portfolio/authentication/users)
2. Enable **Email/Password** authentication
3. Configure sign-in methods:
   - ✅ Email/Password
   - ✅ Anonymous (optional)

### 2. Firestore Database Setup
1. Go to [Firestore Database](https://console.firebase.google.com/project/japanese-portfolio/firestore/databases/-default-/data)
2. Create database in **production mode** (we'll add security rules later)
3. Choose a location (recommend: `asia-northeast1` for Japan)

### 3. Realtime Database Setup (Optional)
1. Go to [Realtime Database](https://console.firebase.google.com/project/japanese-portfolio/database)
2. Create database in **asia-northeast1** region
3. Start in **test mode** (we'll add security rules later)

### 4. Storage Setup (Optional)
1. Go to [Storage](https://console.firebase.google.com/project/japanese-portfolio/storage)
2. Start in **test mode**

## 🔒 Security Rules Setup

### Firestore Security Rules
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can read/write their own user document
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Users can read/write conversations they participate in
    match /conversations/{conversationId} {
      allow read, write: if request.auth != null && 
        request.auth.uid in resource.data.participants;
    }
    
    // Users can read/write messages in conversations they participate in
    match /conversations/{conversationId}/messages/{messageId} {
      allow read, write: if request.auth != null && 
        request.auth.uid in get(/databases/$(database)/documents/conversations/$(conversationId)).data.participants;
    }
  }
}
```

### Realtime Database Security Rules
```json
{
  "rules": {
    "status": {
      "$uid": {
        ".read": "auth != null",
        ".write": "auth != null && auth.uid == $uid"
      }
    },
    "typing": {
      "$conversationId": {
        "$uid": {
          ".read": "auth != null",
          ".write": "auth != null && auth.uid == $uid"
        }
      }
    }
  }
}
```

## 🚀 Deployment Steps

### 1. Enable Required Services
- [ ] Authentication (Email/Password)
- [ ] Firestore Database
- [ ] Realtime Database (optional)
- [ ] Analytics (optional)

### 2. Configure Security Rules
- [ ] Firestore rules
- [ ] Realtime Database rules
- [ ] Storage rules (if using)

### 3. Test the Application
- [ ] User registration
- [ ] User login
- [ ] Chat functionality
- [ ] Real-time messaging
- [ ] User presence

## 🔧 Troubleshooting

### Common Issues
1. **"Realtime Database not available"** - Enable Realtime Database in Firebase Console
2. **Authentication errors** - Check if Email/Password auth is enabled
3. **Permission denied** - Update security rules
4. **CORS errors** - Check Firebase configuration

### Debug Steps
1. Check browser console for errors
2. Verify Firebase configuration
3. Check security rules
4. Test with Firebase Console

## 📱 Testing Checklist

### Authentication
- [ ] User can register with email/password
- [ ] User can login with email/password
- [ ] User can logout
- [ ] User data is stored in Firestore

### Chat Features
- [ ] General chat works
- [ ] DM conversations work
- [ ] Real-time messaging
- [ ] Typing indicators
- [ ] User presence
- [ ] Message editing/deletion
- [ ] User search

### UI/UX
- [ ] Responsive design
- [ ] Loading animations
- [ ] Error handling
- [ ] Navigation works

## 🎯 Next Steps

1. **Deploy to Vercel/Netlify**
2. **Configure custom domain**
3. **Set up monitoring**
4. **Add analytics**
5. **Performance optimization**

---

**Note**: The application is configured to gracefully handle missing Realtime Database, so it will work even if Realtime Database is not enabled. However, for full functionality, enable all services as listed above.
