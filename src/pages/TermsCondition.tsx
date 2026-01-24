import { FileText } from 'lucide-react';
import React from 'react'
import logo from "@/assets/sculpt-and-strive-logo.jpg";

const TermsCondition = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <main className="relative min-h-screen pt-16 bg-gray-900 text-gray-300">
        {/* Background Image */}
        <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        w-[700px] h-[700px] opacity-[0.04] pointer-events-none" style=
        {{
          backgroundImage: `url(${logo})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          filter: "grayscale(100%)",
        }}/>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div>
        {/* Page Content */}
        <article className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Header */}
          <header className="text-center mb-16">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl font-black text-white mb-4">
              Sculpt and Strive
            </h1>
            <p className="text-lg text-gray-300">Training Agreement</p>
          </header>

          {/* Client Information */}
          <section className="bg-gray-800 bg-opacity-80 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Client Information
            </h2>
            <p>
              <strong>Name:</strong> __________________________
            </p>
            <p>
              <strong>Contact:</strong> ________________________
            </p>
          </section>

          {/* Session Details */}
          <section className="bg-gray-800 bg-opacity-80 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Session Details
            </h2>
            <p>
              <strong>Number of Sessions:</strong> _____________
            </p>
            <p>
              <strong>Duration per Session:</strong> ___________
            </p>
          </section>

          {/* Compensation */}
          <section className="bg-gray-800 bg-opacity-80 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Compensation</h2>
            <p>
              <strong>Total Amount:</strong> ___________________
            </p>
            <p>
              <strong>Payment Due Date:</strong> ______________
            </p>
          </section>

          {/* Terms & Conditions */}
          <section className="bg-gray-800 bg-opacity-80 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              Terms & Conditions
            </h2>
            <ol className="list-decimal list-inside space-y-4">
              <li>
                All payments must be made in full prior to the start of sessions
                unless otherwise agreed.
              </li>
              <li>
                All rights, content, and workout programs are the{" "}
                <strong>intellectual property</strong> of the brand and may not
                be copied or shared without permission.
              </li>
              <li>
                Compensation is allowed only for genuine emergencies (medical,
                pregnancy, bereavement). Missed sessions due to personal reasons
                are not compensated.
              </li>
              <li>
                No compensation for clients who book and do not attend; payment
                only applies if client continues sessions.
              </li>
              <li>
                Extended absences result in slot allocation to another client.
              </li>
              <li>
                Slots are booked only for the specific time period paid for.
              </li>
              <li>
                Health & Safety:
                <ul className="list-disc list-inside ml-6 space-y-1">
                  <li>
                    Clients must disclose any medical conditions or injuries
                    before sessions.
                  </li>
                  <li>Workouts may be modified for safety.</li>
                  <li>
                    Clients participate at their own risk; the trainer is not
                    liable for negligence.
                  </li>
                </ul>
              </li>
              <li>
                This agreement applies only to the sessions and compensation
                mentioned above.
              </li>
              <li>
                Session payments are valid only for the scheduled duration. Late
                arrivals do not extend session time.
              </li>
              <li>If the trainer is late, missed time will be compensated.</li>
              <li>
                Missed sessions not eligible for compensation may have access to
                recorded sessions.
              </li>
            </ol>
          </section>

          {/* Code of Conduct */}
          <section className="bg-gray-800 bg-opacity-80 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              12. Code of Conduct
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Clients must behave respectfully and follow trainer
                instructions.
              </li>
              <li>
                Disruptive or unsafe behavior may lead to session termination.
              </li>
            </ul>
          </section>

          {/* Online/Recorded Sessions */}
          <section className="bg-gray-800 bg-opacity-80 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              13. Online/Recorded Sessions
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Access to recorded sessions is provided as per policy.</li>
              <li>Recorded sessions may not be shared with others.</li>
            </ul>
          </section>

          {/* Privacy & Data Protection */}
          <section className="bg-gray-800 bg-opacity-80 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              14. Privacy & Data Protection
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Client information will only be used for service purposes.
              </li>
              <li>All personal information is kept confidential.</li>
            </ul>
          </section>

          {/* Liability & Disclaimer */}
          <section className="bg-gray-800 bg-opacity-80 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              15. Liability & Disclaimer
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                The trainer is not responsible for injuries caused by client
                negligence.
              </li>
              <li>Results may vary; no specific outcomes are guaranteed.</li>
            </ul>
          </section>

          {/* Miscellaneous */}
          <section className="bg-gray-800 bg-opacity-80 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              16. Miscellaneous
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Policies regarding promotions, discounts, or referrals will be
                communicated separately.
              </li>
              <li>
                The agreement may be updated; clients will be informed of
                changes.
              </li>
            </ul>
          </section>

          {/* Trainee Agreement */}
          <section className="bg-gray-800 bg-opacity-80 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">
              17. Trainee Agreement
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                The trainee acknowledges reading and agreeing to all rules,
                policies, and instructions.
              </li>
              <li>
                They will follow safety guidelines and notify the trainer of
                health conditions.
              </li>
              <li>Results may vary based on effort; no guarantees.</li>
              <li>
                Proprietary materials may not be shared without permission.
              </li>
              <li>
                Failure to comply may result in suspension or termination.
              </li>
              <li>
                The trainee consents to collection of personal and health
                information for training purposes.
              </li>
            </ul>
          </section>

          {/* Footer with Signatures */}
          <footer className="mt-16 text-center space-y-10">
            <p className="text-gray-400">
              By signing this agreement, the client acknowledges that they have
              read, understood, and agreed to the terms and conditions of Sculpt
              and Strive.
            </p>

            <div className="grid grid-cols-2 gap-12">
              <div>
                <p className="mb-8">_________________________</p>
                <p>Client Signature</p>
                <p>Date: __________</p>
              </div>
              <div>
                <p className="mb-8">_________________________</p>
                <p>Trainer Signature</p>
                <p>Date: __________</p>
              </div>
            </div>
          </footer>
        </article>
      </main>
    </div>
  );
}

export default TermsCondition
