"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-[#1a1a1a] border border-[#333333] rounded text-white placeholder-gray-600 px-4 py-3 text-sm focus:outline-none focus:border-[#dc2626] transition-colors duration-200";

  return (
    <section id="contact" className="bg-[#111111] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#dc2626]" />
              <span className="text-[#dc2626] text-xs font-bold tracking-[0.3em] uppercase">
                Contact
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              まず、
              <br />
              <span className="text-[#dc2626]">無料体験</span>から。
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-10">
              体験レッスンは完全無料です。
              お気軽にお問い合わせください。
              経験・年齢は問いません。
            </p>

            <div className="flex flex-col gap-5">
              {[
                {
                  label: "所在地",
                  value: "東京都渋谷区〇〇1-2-3 ANVILベースボールパーク",
                },
                {
                  label: "電話番号",
                  value: "03-XXXX-XXXX（平日 10:00〜19:00）",
                },
                {
                  label: "メール",
                  value: "info@anvil-baseball.jp",
                },
              ].map((item) => (
                <div key={item.label}>
                  <div className="text-[#dc2626] text-xs font-bold tracking-wide mb-0.5">
                    {item.label}
                  </div>
                  <div className="text-gray-300 text-sm">{item.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {submitted ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-[#dc2626]/10 border border-[#dc2626]/30 flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-8 h-8 text-[#dc2626]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-white text-2xl font-black mb-3">
                    送信完了しました
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    お問い合わせありがとうございます。
                    <br />
                    2営業日以内にご連絡いたします。
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-8 flex flex-col gap-5"
              >
                <div>
                  <label className="block text-gray-400 text-xs font-bold mb-2 tracking-wide uppercase">
                    お名前 <span className="text-[#dc2626]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="山田 太郎"
                    className={inputClass}
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-400 text-xs font-bold mb-2 tracking-wide uppercase">
                      メールアドレス <span className="text-[#dc2626]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="example@email.com"
                      className={inputClass}
                      value={form.email}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, email: e.target.value }))
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs font-bold mb-2 tracking-wide uppercase">
                      電話番号
                    </label>
                    <input
                      type="tel"
                      placeholder="090-XXXX-XXXX"
                      className={inputClass}
                      value={form.phone}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, phone: e.target.value }))
                      }
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 text-xs font-bold mb-2 tracking-wide uppercase">
                    興味のあるプログラム
                  </label>
                  <select
                    className={inputClass}
                    value={form.program}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, program: e.target.value }))
                    }
                  >
                    <option value="">選択してください</option>
                    <option value="hitting">バッティング強化</option>
                    <option value="pitching">ピッチング強化</option>
                    <option value="fielding">守備・走塁</option>
                    <option value="all">すべて知りたい</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-400 text-xs font-bold mb-2 tracking-wide uppercase">
                    メッセージ
                  </label>
                  <textarea
                    rows={4}
                    placeholder="経験・年齢・ご質問などお気軽にどうぞ"
                    className={inputClass + " resize-none"}
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#dc2626] hover:bg-[#b91c1c] text-white font-black py-4 rounded tracking-widest text-sm uppercase transition-colors duration-200 mt-2"
                >
                  無料体験を申し込む
                </button>

                <p className="text-gray-600 text-xs text-center">
                  送信後、2営業日以内にご連絡いたします
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
