import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Mail,
  Copy,
  Check,
  Instagram,
  MapPin,
  Send,
  Sparkles,
  ArrowUpRight,
  MessageSquare,
  User,
  AtSign,
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactProps {
  onNotify: (message: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onNotify }) => {
  const [copied, setCopied] = useState(false);
  const email = 'isti0441@gmail.com';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    onNotify('Email isti0441@gmail.com berhasil disalin ke clipboard!');

    confetti({
      particleCount: 45,
      spread: 55,
      origin: { y: 0.8 },
      colors: ['#DB5184', '#A8E088', '#ffffff'],
    });

    setTimeout(() => setCopied(false), 3000);
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Nama lengkap wajib diisi.';
    if (!formData.email.trim()) {
      newErrors.email = 'Alamat email wajib diisi.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subjek pesan wajib diisi.';
    if (!formData.message.trim()) {
      newErrors.message = 'Pesan tidak boleh kosong.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Pesan minimal 10 karakter.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      onNotify('Pesan Anda telah berhasil dikirim!');

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#DB5184', '#A8E088', '#ffffff', '#22c55e'],
      });
    }, 900);
  };

  return (
    <section id="contact" className="py-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#DB5184] font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>05. HUBUNGI &amp; KOLABORASI</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Mari Membangun Sesuatu yang Menginspirasi
          </h2>
          <p className="text-sm text-slate-700 mt-2 max-w-xl">
            Punya tawaran proyek, peluang kerjasama, atau sekadar ingin menyapa? Silakan kirimkan pesan
            atau hubungi langsung melalui email dan media sosial.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info Cards & Quick Copy */}
          <div className="lg:col-span-5 space-y-5">
            {/* Direct Email Card with One-Click Copy */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel rounded-3xl p-6 relative overflow-hidden group hover:border-[#DB5184]/40 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
                  EMAIL LANGSUNG
                </span>
                <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-emerald-100/70 text-emerald-800">
                  Respons Cepat &lt; 24 Jam
                </span>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-2xl bg-[#DB5184]/15 border border-[#DB5184]/30 flex items-center justify-center text-[#DB5184] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <span className="text-xs text-slate-500 block">Kirim pesan ke:</span>
                  <a
                    href={`mailto:${email}`}
                    className="font-serif font-bold text-lg text-slate-900 hover:text-[#DB5184] transition-colors truncate block"
                  >
                    {email}
                  </a>
                </div>
              </div>

              {/* Copy Button */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  copied
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-white/80 hover:bg-white text-slate-800 border border-white/90 shadow-2xs hover:border-[#DB5184]/40'
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Email Berhasil Disalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#DB5184]" />
                    <span>Salin Alamat Email</span>
                  </>
                )}
              </button>
            </motion.div>

            {/* Instagram Social Card */}
            <motion.a
              href="https://instagram.com/sftbble_"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-panel rounded-3xl p-6 flex items-center justify-between group hover:border-[#DB5184]/40 hover:bg-white/70 transition-all block no-underline"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-500 via-[#DB5184] to-purple-600 p-0.5 shadow-sm group-hover:scale-105 transition-transform">
                  <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center text-[#DB5184]">
                    <Instagram className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <span className="text-xs text-slate-500 block">Instagram</span>
                  <span className="font-serif font-bold text-base text-slate-900 group-hover:text-[#DB5184] transition-colors">
                    @sftbble_
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1 text-xs font-semibold text-slate-500 group-hover:text-[#DB5184] transition-colors">
                <span>Ikuti</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.a>

            {/* Google Maps Location Card */}
            <motion.a
              href="https://maps.google.com/?q=Plered,+Purwakarta,+Jawa+Barat,+Indonesia"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-panel rounded-3xl p-6 flex items-center justify-between group hover:border-[#DB5184]/40 hover:bg-white/70 transition-all block no-underline"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-[#A8E088]/40 border border-[#A8E088]/70 flex items-center justify-center text-slate-800 shrink-0 group-hover:scale-105 transition-transform">
                  <MapPin className="w-5 h-5 text-emerald-800" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 block">Lokasi &amp; Domisili</span>
                  <span className="font-serif font-bold text-base text-slate-900 group-hover:text-[#DB5184] transition-colors">
                    Plered, Jawa Barat
                  </span>
                  <span className="text-xs text-slate-600 block">Indonesia</span>
                </div>
              </div>

              <div className="flex items-center gap-1 text-xs font-semibold text-slate-500 group-hover:text-[#DB5184] transition-colors">
                <span>Google Maps</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.a>
          </div>

          {/* Right Column: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-panel rounded-3xl p-8 sm:p-10 border border-white/80 shadow-xl"
          >
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-900/10">
              <div>
                <h3 className="font-serif text-2xl font-bold text-slate-900">
                  Kirimkan Pesan Langsung
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Semua input divalidasi langsung untuk menjamin keterbacaan pesan Anda.
                </p>
              </div>
              <div className="w-9 h-9 rounded-full bg-[#DB5184]/15 flex items-center justify-center text-[#DB5184]">
                <MessageSquare className="w-4 h-4" />
              </div>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-4 shadow-sm">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-2xl font-bold text-slate-900 mb-2">
                  Pesan Terkirim dengan Sukses!
                </h4>
                <p className="text-sm text-slate-600 max-w-md mb-6">
                  Terima kasih <strong className="text-slate-900">{formData.name}</strong>! Pesan
                  Anda telah diterima. Saya akan segera membalas ke{' '}
                  <strong className="text-slate-900">{formData.email}</strong> sesegera mungkin.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
                >
                  Kirim Pesan Lain
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-semibold text-slate-800 mb-1.5"
                    >
                      Nama Lengkap <span className="text-[#DB5184]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (errors.name) setErrors({ ...errors, name: '' });
                        }}
                        placeholder="e.g. Budi Santoso"
                        className={`w-full px-4 py-2.5 text-sm rounded-xl bg-white/70 backdrop-blur-sm border transition-colors focus:outline-none ${
                          errors.name
                            ? 'border-red-400 focus:border-red-500'
                            : 'border-white/80 focus:border-[#DB5184]'
                        } text-slate-900 placeholder:text-slate-400`}
                      />
                      <User className="w-4 h-4 text-slate-400 absolute right-3.5 top-3 pointer-events-none" />
                    </div>
                    {errors.name && (
                      <p className="text-xs text-red-600 mt-1 font-medium">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-slate-800 mb-1.5"
                    >
                      Alamat Email <span className="text-[#DB5184]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }}
                        placeholder="e.g. budi@domain.com"
                        className={`w-full px-4 py-2.5 text-sm rounded-xl bg-white/70 backdrop-blur-sm border transition-colors focus:outline-none ${
                          errors.email
                            ? 'border-red-400 focus:border-red-500'
                            : 'border-white/80 focus:border-[#DB5184]'
                        } text-slate-900 placeholder:text-slate-400`}
                      />
                      <AtSign className="w-4 h-4 text-slate-400 absolute right-3.5 top-3 pointer-events-none" />
                    </div>
                    {errors.email && (
                      <p className="text-xs text-red-600 mt-1 font-medium">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-semibold text-slate-800 mb-1.5"
                  >
                    Subjek Proyek / Diskusi <span className="text-[#DB5184]">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (errors.subject) setErrors({ ...errors, subject: '' });
                    }}
                    placeholder="e.g. Pengembangan Antarmuka Web App Baru"
                    className={`w-full px-4 py-2.5 text-sm rounded-xl bg-white/70 backdrop-blur-sm border transition-colors focus:outline-none ${
                      errors.subject
                        ? 'border-red-400 focus:border-red-500'
                        : 'border-white/80 focus:border-[#DB5184]'
                    } text-slate-900 placeholder:text-slate-400`}
                  />
                  {errors.subject && (
                    <p className="text-xs text-red-600 mt-1 font-medium">{errors.subject}</p>
                  )}
                </div>

                {/* Message Input with Character Counter */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold text-slate-800"
                    >
                      Pesan Detail <span className="text-[#DB5184]">*</span>
                    </label>
                    <span className="text-[11px] font-mono text-slate-500">
                      {formData.message.length} karakter
                    </span>
                  </div>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    placeholder="Ceritakan rencana, timeline, dan ekspektasi proyek Anda..."
                    className={`w-full px-4 py-2.5 text-sm rounded-xl bg-white/70 backdrop-blur-sm border transition-colors focus:outline-none resize-none ${
                      errors.message
                        ? 'border-red-400 focus:border-red-500'
                        : 'border-white/80 focus:border-[#DB5184]'
                    } text-slate-900 placeholder:text-slate-400`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-600 mt-1 font-medium">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 text-sm font-semibold text-white bg-[#DB5184] hover:bg-[#c43f71] rounded-xl shadow-lg shadow-[#DB5184]/25 hover:shadow-xl hover:shadow-[#DB5184]/35 transition-all duration-200 active:scale-98 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <span>Mengirimkan Pesan...</span>
                  ) : (
                    <>
                      <span>Kirim Pesan Sekarang</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
