import React from 'react'

const privacyPolicyData = [
  {
    title: "Privacy Policy",
    content: [
      "This Privacy Policy explains how Sculpt and Strive (“we,” “us,” or “our”) collects, uses, discloses, and protects your information when you access our website, mobile applications, and online fitness classes (collectively, the “Services”). By using the Services, you agree to the practices described in this policy.",
    ],
  },
  {
    title: "1. Information We Collect",
    sections: [
      {
        subtitle: "a. Personal Information",
        list: [
          "Name, email address, phone number",
          "Account login credentials",
          "Billing address and payment information (processed by secure third-party payment processors)",
          "Profile details such as age, fitness goals, preferences",
          "Communications with us (emails, messages, support requests)",
        ],
      },
      {
        subtitle: "b. Health & Fitness Information",
        content: [
          "If you choose to provide it, we may collect limited health-related information relevant to fitness instruction (e.g., injuries, activity level). You can choose not to provide this information; however, it may limit personalized guidance.",
        ],
      },
      {
        subtitle: "c. Automatically Collected Information",
        list: [
          "Device and browser information",
          "IP address, approximate location",
          "Usage data (pages viewed, classes attended, session duration)",
          "Cookies and similar tracking technologies",
        ],
      },
    ],
  },
  {
    title: "2. How We Use Your Information",
    list: [
      "Provide and operate our online fitness classes",
      "Create and manage your account",
      "Process payments and subscriptions",
      "Personalize workouts and recommendations",
      "Communicate updates, class schedules, and support responses",
      "Improve our Services and user experience",
      "Comply with legal obligations and enforce terms",
    ],
  },
  {
    title: "3. Cookies & Tracking Technologies",
    content: [
      "We use cookies and similar technologies to remember preferences, analyze traffic, and deliver relevant content. Disabling cookies may affect some features.",
    ],
  },
  {
    title: "4. Sharing of Information",
    list: [
      "Service providers such as payment processors and hosting providers",
      "Legal authorities when required by law",
      "Business transfers such as mergers or acquisitions",
    ],
    content: [
      "We do not sell your personal information. All third parties are required to protect your data and use it only for authorized purposes.",
    ],
  },
  {
    title: "5. Data Security",
    content: [
      "We implement reasonable administrative, technical, and physical safeguards to protect your information. However, no system is completely secure.",
    ],
  },
  {
    title: "6. Data Retention",
    content: [
      "We retain your information only for as long as necessary to provide the Services and comply with legal obligations.",
    ],
  },
  {
    title: "7. Your Rights & Choices",
    list: [
      "Access or update your personal information",
      "Request deletion of your data",
      "Restrict or object to certain processing",
      "Withdraw consent where applicable",
    ],
  },
  {
    title: "8. International Users",
    content: [
      "Your information may be processed and stored in countries outside your own. We ensure appropriate safeguards are in place.",
    ],
  },
  {
    title: "9. Changes to This Privacy Policy",
    content: [
      "We may update this Privacy Policy from time to time. Continued use of the Services after changes means you accept the updated policy.",
    ],
  },
];

export const PrivacySection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-muted/20">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      <div className="  px-28 relative z-10">

      {privacyPolicyData.map((section, index) => (
          <div key={index} className="mb-8">
          <h2 className="text-xl font-bold mb-3">{section.title}</h2>

          {section.content?.map((text, i) => (
              <p key={i} className="mb-3">
              {text}
            </p>
          ))}

          {section.list && (
              <ul className="list-disc pl-6 space-y-1 mb-3">
              {section.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
            </ul>
          )}

          {section.sections?.map((sub, i) => (
              <div key={i} className="mb-4">
              <h3 className="font-semibold mb-2">{sub.subtitle}</h3>

              {sub.content?.map((text, j) => (
                  <p key={j} className="mb-2">
                  {text}
                </p>
              ))}

              {sub.list && (
                  <ul className="list-disc pl-6 space-y-1">
                  {sub.list.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      ))}
      </div>
    </section>
  );
};




