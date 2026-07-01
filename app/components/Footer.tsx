export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1a1a1a] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#dc2626] text-xl font-black">⬟</span>
              <div className="leading-tight">
                <span className="block text-white font-black text-sm tracking-[0.2em] uppercase">
                  Anvil
                </span>
                <span className="block text-[#dc2626] font-bold text-[10px] tracking-[0.15em] uppercase">
                  Baseball Academy
                </span>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              10年後、あの教室に入れてよかった。
              <br />
              野球を通じて、子どもの一生を豊かにする
              本格的なベースボールアカデミー。
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-4">
              メニュー
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                { href: "#programs", label: "プログラム" },
                { href: "#features", label: "選ばれる理由" },
                { href: "#coaches", label: "コーチ陣" },
                { href: "#contact", label: "お問い合わせ" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-widest uppercase mb-4">
              プログラム
            </h4>
            <ul className="flex flex-col gap-2">
              {[
                "バッティング強化",
                "ピッチング強化",
                "守備・走塁",
                "無料体験レッスン",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#programs"
                    className="text-gray-500 hover:text-white text-sm transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#1a1a1a] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © 2025 ANVIL BASEBALL ACADEMY. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">
              プライバシーポリシー
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">
              利用規約
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
