import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Send } from "lucide-react";

const PHONE = "919500055350";
const DEFAULT_MESSAGE =
  "Hi! I'm interested in Advaita Pre School and would like to know more about admissions.";

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState(DEFAULT_MESSAGE);
  const [showTooltip, setShowTooltip] = useState(false);

  /* Show the tooltip nudge once after 4 seconds */
  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 4000);
    return () => clearTimeout(timer);
  }, []);

  /* Hide tooltip when widget opens */
  useEffect(() => {
    if (isOpen) setShowTooltip(false);
  }, [isOpen]);

  const handleSend = () => {
    const encoded = encodeURIComponent(message.trim() || DEFAULT_MESSAGE);
    window.open(`https://wa.me/${PHONE}?text=${encoded}`, "_blank");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* ── Chat Panel ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
            className="wa-panel"
          >
            {/* Header */}
            <div className="wa-panel-header">
              <div className="flex items-center gap-3">
                <div className="wa-avatar">
                  <img
                    src="/play logo.png"
                    alt="Advaita Pre School"
                    className="w-full h-full object-cover rounded-full"
                  />
                  <span className="wa-online-dot" />
                </div>
                <div>
                  <p className="font-heading font-bold text-white text-sm leading-tight">
                    Advaita Pre School
                  </p>
                  <p className="text-[11px] text-green-100/80 font-body">
                    Typically replies within minutes
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Close WhatsApp chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat body */}
            <div className="wa-panel-body">
              {/* Decorative chat pattern */}
              <div className="wa-chat-pattern" />

              {/* Greeting bubble */}
              <div className="relative wa-bubble">
                <p className="text-[13px] text-gray-800 font-body leading-relaxed">
                  👋 Hi there! Welcome to <strong>Advaita Pre School</strong>.
                  <br />
                  How can we help you today?
                </p>
                <span className="text-[10px] text-gray-400 mt-1 block text-right font-body">
                  now
                </span>
              </div>
            </div>

            {/* Input area */}
            <div className="wa-panel-footer">
              <div className="wa-input-row">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                  placeholder="Type a message…"
                  rows={2}
                  className="wa-input"
                />
                <button
                  onClick={handleSend}
                  className="wa-send-btn"
                  aria-label="Send WhatsApp message"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              <p className="text-[10px] text-gray-400 text-center mt-2 font-body">
                Powered by WhatsApp
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Tooltip ── */}
      <AnimatePresence>
        {showTooltip && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="wa-tooltip"
            onClick={() => {
              setShowTooltip(false);
              setIsOpen(true);
            }}
          >
            <span className="font-body text-sm text-gray-700">
              💬 Need help? Chat with us!
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Dismiss tooltip"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Floating Action Button ── */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => setIsOpen((o) => !o)}
        className="wa-fab"
        aria-label="Open WhatsApp chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-7 h-7 text-white" />
            </motion.span>
          ) : (
            <motion.span
              key="wa"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {/* WhatsApp SVG icon */}
              <svg
                viewBox="0 0 32 32"
                className="w-8 h-8"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.004 2.003c-7.732 0-14 6.268-14 14 0 2.468.655 4.87 1.9 6.987L2 30l7.204-1.87A13.933 13.933 0 0 0 16.004 30c7.732 0 14-6.268 14-14s-6.268-13.997-14-13.997zm0 25.594a11.58 11.58 0 0 1-5.902-1.615l-.424-.252-4.386 1.15 1.17-4.276-.276-.44a11.566 11.566 0 0 1-1.782-6.16c0-6.422 5.226-11.648 11.648-11.648 6.422 0 11.6 5.226 11.6 11.648.048 6.422-5.178 11.593-11.648 11.593zm6.37-8.7c-.352-.176-2.068-1.02-2.388-1.132-.32-.12-.556-.176-.788.176-.236.352-.908 1.136-1.112 1.364-.204.232-.408.264-.76.088-.352-.176-1.484-.548-2.828-1.744-1.044-.932-1.752-2.084-1.956-2.436-.204-.352-.02-.544.152-.72.16-.156.352-.408.528-.612.176-.204.232-.352.352-.584.12-.232.06-.436-.032-.612-.088-.176-.788-1.9-1.08-2.6-.284-.684-.576-.588-.788-.6-.204-.008-.436-.012-.668-.012-.232 0-.612.088-.932.436-.32.352-1.224 1.196-1.224 2.916s1.252 3.38 1.428 3.612c.176.232 2.464 3.764 5.972 5.28.836.36 1.488.576 1.996.736.84.268 1.6.232 2.204.14.672-.1 2.068-.844 2.36-1.66.292-.82.292-1.52.204-1.66-.088-.148-.32-.24-.672-.412z" />
              </svg>
            </motion.span>
          )}
        </AnimatePresence>

        {/* Pulse ring */}
        {!isOpen && (
          <span className="wa-pulse" />
        )}
      </motion.button>
    </div>
  );
};

export default WhatsAppWidget;
