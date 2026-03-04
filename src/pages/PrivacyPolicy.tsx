import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";

const PrivacyPolicy = () => {
  return (
    <Layout>
      <SEO
        title="Privacy Policy"
        description="Privacy Policy for CT Truck & Trailer Shop. Learn how we collect, use, and protect your personal information."
        keywords="privacy policy, data protection, CT Truck Shop"
        canonical="https://cttruckshop.com/privacy"
      />

      <section className="pt-32 pb-20 bg-background">
        <div className="container-custom max-w-3xl">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-sm mb-10">
            Effective Date: February 24, 2026
          </p>

          <div className="prose prose-neutral max-w-none space-y-8 text-foreground/80 text-[15px] leading-relaxed">
            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
                1. Introduction
              </h2>
              <p>
                CT Shop ("we," "our," or "us") is committed to protecting the privacy of individuals who visit our website at cttruckshop.com (the "Site") and use our truck repair services. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you interact with our Site or our business. By accessing or using our Site, you acknowledge that you have read, understood, and agree to be bound by the terms of this Privacy Policy. If you do not agree with the practices described herein, please do not use our Site.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
                2. Information We Collect
              </h2>
              <p>
                We collect personal information that you voluntarily provide to us when you submit a quote request form, contact form, or otherwise communicate with us through our Site. This information may include your full name, email address, phone number, and details about the service you are requesting. We do not collect sensitive personal information such as Social Security numbers, financial account details, or health-related data through our Site.
              </p>
              <p className="mt-3">
                In addition to the information you provide directly, we may automatically collect certain technical data when you visit our Site. This includes your IP address, browser type and version, operating system, referring URLs, pages viewed, time spent on pages, and other standard web analytics data. This information is collected through cookies and similar tracking technologies as described further below.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
                3. How We Use Your Information
              </h2>
              <p>
                We use the personal information we collect to respond to your inquiries and service requests, to provide you with accurate quotes for truck repair services, and to communicate with you about your service needs. We may also use your information to improve our Site and services, to monitor and analyze usage trends, and to ensure the security and integrity of our Site. We do not sell, rent, or trade your personal information to third parties for their marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
                4. Third-Party Services
              </h2>
              <p>
                We use Google Analytics to help us understand how visitors interact with our Site. Google Analytics collects information such as how often users visit our Site, which pages they view, and what other sites they visited prior to coming to our Site. Google Analytics uses cookies to collect this information, and the data collected is processed in accordance with Google's privacy policy. We use the information provided by Google Analytics solely to improve our Site and better serve our customers. We do not combine the information collected through Google Analytics with any personally identifiable information you provide to us.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
                5. Cookies and Tracking Technologies
              </h2>
              <p>
                Our Site may use cookies and similar tracking technologies to enhance your browsing experience and collect analytical data. Cookies are small text files stored on your device by your web browser. You may configure your browser to refuse cookies or to alert you when cookies are being sent. However, if you disable cookies, some features of our Site may not function properly. By continuing to use our Site without adjusting your browser settings, you consent to our use of cookies as described in this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
                6. Data Security
              </h2>
              <p>
                We implement reasonable administrative, technical, and physical safeguards to protect the personal information we collect from unauthorized access, use, alteration, or disclosure. However, no method of transmission over the Internet or method of electronic storage is completely secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security. You acknowledge that you provide your personal information at your own risk.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
                7. Data Retention
              </h2>
              <p>
                We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy any legal, accounting, or reporting requirements. When your personal information is no longer required, we will securely delete or anonymize it in accordance with applicable law.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
                8. Your Rights
              </h2>
              <p>
                Depending on your jurisdiction, you may have certain rights regarding your personal information, including the right to access, correct, or delete the personal data we hold about you. You may also have the right to restrict or object to the processing of your personal information. To exercise any of these rights, please contact us using the information provided below. We will respond to your request within a reasonable timeframe and in accordance with applicable law.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
                9. Children's Privacy
              </h2>
              <p>
                Our Site and services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected personal information from a child under 18, we will take steps to delete such information promptly. If you believe that we may have collected information from a child, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
                10. Changes to This Privacy Policy
              </h2>
              <p>
                We reserve the right to update or modify this Privacy Policy at any time without prior notice. Any changes will be effective immediately upon posting the revised Privacy Policy on our Site. The "Effective Date" at the top of this policy indicates when it was last updated. Your continued use of our Site following the posting of any changes constitutes your acceptance of those changes. We encourage you to review this Privacy Policy periodically.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
                11. Contact Us
              </h2>
              <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at service@clevertranscoshop.com or by mail at 3883 N 36th Ave, Phoenix, AZ 85019, United States.
              </p>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
