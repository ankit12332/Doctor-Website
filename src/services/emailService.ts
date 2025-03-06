import siteConfig from '@/config/siteConfig';

interface EmailData {
  to: string;
  subject: string;
  body: string;
}

export interface DemoRequest {
  name: string;
  email: string;
  phone: string;
  practice: string;
  practiceSize: string;
  message: string;
  submittedAt: string;
}

/**
 * In a production environment, this would connect to a real email service
 * like SendGrid, Mailgun, AWS SES, etc. For now, we'll simulate the email sending.
 */
export const sendEmail = async (data: EmailData): Promise<boolean> => {
  // In a real implementation, you would use an email service API here
  console.log('Sending email:', data);
  
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Email sent successfully');
      resolve(true);
    }, 1000);
  });
};

/**
 * Send notification email when someone books a demo
 */
export const sendDemoNotification = async (demoRequest: DemoRequest): Promise<boolean> => {
  const { name, email, phone, practice, practiceSize, message, submittedAt } = demoRequest;
  
  // Format practice size for readability
  const practiceSizeMap: Record<string, string> = {
    solo: 'Solo Practice',
    small: 'Small Clinic (2-5 doctors)',
    medium: 'Medium Clinic (6-20 doctors)',
    large: 'Large Practice/Hospital (20+ doctors)'
  };
  
  // Create email body
  const emailBody = `
    New Demo Request from ${siteConfig.company.name} Website
    
    Name: ${name}
    Email: ${email}
    Phone: ${phone || 'Not provided'}
    Practice Name: ${practice || 'Not provided'}
    Practice Size: ${practiceSizeMap[practiceSize] || practiceSize}
    
    Additional Information:
    ${message || 'None provided'}
    
    Submitted at: ${submittedAt}
    
    Please contact this lead as soon as possible.
  `;
  
  // Send email to the demo notification address from config
  return sendEmail({
    to: siteConfig.contact.demoEmail,
    subject: `New Demo Request: ${name} from ${practice || 'Unknown Practice'}`,
    body: emailBody
  });
};

/**
 * Store demo request in database
 * In a real implementation, this would connect to your database
 */
export const storeDemoRequest = async (demoRequest: DemoRequest): Promise<boolean> => {
  // In a real implementation, you would store this in a database
  console.log('Storing demo request:', demoRequest);
  
  // Simulate database storage
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Demo request stored successfully');
      resolve(true);
    }, 500);
  });
};

export default {
  sendEmail,
  sendDemoNotification,
  storeDemoRequest
}; 