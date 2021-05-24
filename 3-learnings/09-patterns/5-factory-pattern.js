class PushNotification {
  constructor(sendTo, message) {
    this.sendTo = sendTo;
    this.message = message;
  }
 }
  
 class EmailNotification {
  constructor(sendTo, cc, emailContent) {
    this.sendTo = sendTo;
    this.cc = cc;
    this.emailContent = emailContent;
  }
 }
  
 // Notification Factory
  
 class NotificationFactory {
  createNotification(type, props) {
    switch (type) {
      case 'email':
        return new EmailNotification(props.sendTo, props.cc, props.emailContent);
      case 'push':
        return new PushNotification(props.sendTo, props.message);
    }
  }
 }
  
 // usage
 const factory = new NotificationFactory();
  
 // create email notification
 const emailNotification = factory.createNotification('email', {
  sendTo: 'receiver@domain.com',
  cc: 'test@domain.com',
  emailContent: 'This is the email content to be delivered.!',
 });
  
 // create push notification
 const pushNotification = factory.createNotification('push', {
  sendTo: 'receiver-device-id',
  message: 'The push notification message',
 });