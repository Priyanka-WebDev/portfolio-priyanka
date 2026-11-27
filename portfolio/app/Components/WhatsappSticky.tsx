"use client";

import { useState } from "react";

export default function WhatsappSticky() {
  const [open, setOpen] = useState(true);

  // Replace this with your WhatsApp number including country code.
  // India: 91 + your 10-digit number, without + or spaces.
  const phoneNumber = "7517359197";

  const message = "Hi, I came across your portfolio and would like to connect.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <div className="whatsapp-sticky">
      {open && (
        <div className="whatsapp-popup">
          <button
            className="whatsapp-close"
            onClick={() => setOpen(false)}
            aria-label="Close WhatsApp popup"
          >
            ×
          </button>

          <div className="whatsapp-popup-header">
            <div className="whatsapp-avatar">P</div>
            <div>
              <h3>Let's connect!</h3>
              <span className="whatsapp-status">
                Available for conversations
              </span>
            </div>
          </div>

          <p>
            Have a question, opportunity, or just want to say hello? Feel free
            to reach out to me on WhatsApp.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-chat-link"
          >
            <span>Chat with me on WhatsApp</span>
            <span>↗</span>
          </a>
        </div>
      )}

      <button
        className={`whatsapp-button ${open ? "whatsapp-button-open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close WhatsApp chat" : "Open WhatsApp chat"}
        aria-expanded={open}
      >
        {open ? (
          <span className="whatsapp-button-close-icon">×</span>
        ) : (
          <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
            <path d="M16.02 3C8.84 3 3 8.83 3 16c0 2.3.61 4.55 1.77 6.52L3 29l6.67-1.75A12.94 12.94 0 0 0 16.02 29C23.2 29 29 23.17 29 16S23.2 3 16.02 3Zm0 23.62c-2.03 0-4.03-.54-5.76-1.57l-.42-.25-3.96 1.04 1.06-3.86-.27-.43A10.6 10.6 0 0 1 5.1 16c0-6.02 4.9-10.9 10.92-10.9S26.93 9.98 26.93 16s-4.9 10.62-10.91 10.62Zm6-7.94c-.33-.17-1.93-.95-2.23-1.06-.3-.11-.52-.17-.74.17-.22.33-.85 1.06-1.04 1.28-.19.22-.38.25-.71.08-.33-.17-1.4-.52-2.67-1.65-.99-.88-1.66-1.97-1.86-2.3-.2-.33-.02-.5.15-.67.15-.17.33-.44.5-.66.16-.22.22-.38.33-.6.11-.22.06-.44-.03-.61-.08-.17-.74-1.78-1.02-2.44-.27-.65-.55-.55-.74-.56-.2-.01-.44-.01-.66-.01-.22 0-.58.08-.88.41-.3.33-1.16 1.13-1.16 2.77s1.19 3.22 1.35 3.44c.17.22 2.34 3.58 5.67 5.02.8.34 1.42.55 1.9.7.8.25 1.52.22 2.1.13.64-.1 1.93-.79 2.2-1.55.27-.77.27-1.43.19-1.56-.08-.14-.3-.22-.63-.39Z" />
          </svg>
        )}
      </button>
    </div>
  );
}
