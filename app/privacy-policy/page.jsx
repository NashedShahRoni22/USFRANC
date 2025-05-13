import React from "react";
import Container from "../components/shared/Container";

const sections = [
  {
    title: "Introduction",
    content:
      "At USFRANC (USF), we are committed to safeguarding your privacy. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our website, platforms, and services related to USFRANC. USFRANC is a decentralized cryptocurrency (coin) built on a hybrid Proof-of-Work (PoW) and Proof-of-Stake (PoS) blockchain model. We aim to provide our users with a transparent, secure, and private experience. By using USFRANC and its related services, you agree to the collection and processing of your information in accordance with this Privacy Policy.",
  },
  {
    title: "1. Information We Collect",
    list: [
      "Account Information: When you create an account to interact with USFRANC, we collect basic information, including your name, email address, and other necessary contact details.",
      "Transaction Data: We collect details of your transactions on the USFRANC network, including sending, receiving, and storing USF.",
      "Device and Usage Data: We collect technical data, such as your device’s IP address, browser type, operating system, and information related to your activity on the platform.",
      "Wallet Information: USFRANC is a non-custodial wallet system. Therefore, we do not store your private keys but may collect public wallet addresses for transaction purposes.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    list: [
      "To provide our services: We use the information to process transactions, offer USFRANC services, and improve the platform’s functionality.",
      "Security and compliance: Protecting your privacy is our top priority. We use the information to monitor suspicious activity, ensure security, and comply with applicable regulations.",
      "Improvement of the platform: We analyze usage data to improve USFRANC features, performance, and services.",
      "Communication: We may use your contact information to send you service updates, security alerts, and promotional materials related to USFRANC (if you have opted in).",
    ],
  },
  {
    title: "3. Data Retention",
    content:
      "We retain your personal data for as long as necessary to fulfill the purposes outlined in this Privacy Policy, including to comply with legal obligations, resolve disputes, and enforce our agreements. Due to the decentralized nature of USFRANC, your wallet information is only stored on your device, and we do not keep any sensitive transaction data longer than needed.",
  },
  {
    title: "4. Data Protection and Security",
    content:
      "USFRANC uses state-of-the-art security protocols to protect your personal and financial information. However, as a decentralized cryptocurrency, we cannot guarantee the absolute security of your data. We encourage you to take precautions, such as safeguarding your private keys and using secure internet connections.",
    list: [
      "Encryption: All data transmission is encrypted using SSL/TLS protocols.",
      "Two-Factor Authentication (2FA): We recommend enabling 2FA to secure your account and transactions.",
      "Non-Custodial Wallet: We do not store your private keys, ensuring you maintain full control over your funds.",
    ],
  },
  {
    title: "5. Sharing Your Information",
    list: [
      "Service Providers: We may share information with third-party service providers that help us operate USFRANC’s services (e.g., hosting providers, analytics services). These providers are required to protect your information.",
      "Legal Compliance: We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).",
      "Business Transfers: In the event of a merger, acquisition, or asset sale, your information may be transferred to the new owner.",
    ],
  },
  {
    title: "6. Your Rights",
    list: [
      "Right to Access: You have the right to request a copy of the personal information we hold about you.",
      "Right to Rectification: You can request the correction of any inaccurate or incomplete data.",
      "Right to Erasure: You may request the deletion of your personal information, subject to applicable legal obligations.",
      "Right to Object: You have the right to object to certain data processing practices, including marketing and profiling.",
    ],
    content:
      "To exercise these rights, please contact us via the contact information provided below.",
  },
  {
    title: "7. Cookies",
    content:
      "USFRANC may use cookies to enhance your user experience. Cookies are small data files stored on your device to remember your preferences and improve functionality. You can manage cookies through your browser settings, but disabling cookies may affect your ability to use USFRANC’s services.",
  },
  {
    title: "8. Third-Party Websites",
    content:
      "Our platform may contain links to external websites. This Privacy Policy does not apply to third-party websites. We are not responsible for the privacy practices or content of these external websites. Please review their privacy policies before providing any personal information.",
  },
  {
    title: "9. Children’s Privacy",
    content:
      "USFRANC does not knowingly collect or solicit personal information from children under the age of 18. If we discover that we have inadvertently collected information from a child, we will delete that information as soon as possible.",
  },
  {
    title: "10. Changes to This Privacy Policy",
    content:
      'We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated “Effective Date.” We encourage you to review this policy periodically for any changes.',
  },
  {
    title: "11. Contact Us",
    content:
      "If you have any questions or concerns about this Privacy Policy or the way your personal information is handled, please contact us at:\n\nEmail: usfranc@bobosohomail.com",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <Container>
      <div className="py-12 px-4">
        <h1 className="text-3xl font-bold text-center text-logo mb-4">
          Privacy Policy for USFRANC (USF)
        </h1>
        <p className="text-center text-sm text-gray-500 mb-8">
          Effective Date: [Insert Date] &nbsp; | &nbsp; Last Revised: [Insert Date]
        </p>
        {sections.map((section, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {section.title}
            </h2>
            {section.content && (
              <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                {section.content}
              </p>
            )}
            {section.list && (
              <ul className="list-disc pl-6 space-y-2 text-gray-700 mt-2">
                {section.list.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </Container>
  );
}
