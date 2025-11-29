const Footer = () => {
  return (
    <footer className="min-w-screen bg-gray-300 text-black py-12 px-6">
      {/* Top Feature Icons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-xs md:text-sm uppercase tracking-widest mb-10">
        <div className="flex flex-col items-center gap-2">
          <span className="text-2xl">🚚</span>
          <p>Free Delivery Anywhere in India</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-2xl">🔁</span>
          <p>Easy Exchanges</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-2xl">🗨️</span>
          <p>Robust Customer Support</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-2xl">😊</span>
          <p>2 Lakh+ Trusted Customers</p>
        </div>
      </div>

      {/* Main Footer Section */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Left Links */}
        <div>
          <h3 className="uppercase font-semibold text-sm mb-4">Footer</h3>
          <ul className="space-y-2 text-sm">
            <li>EXCHANGE PORTAL</li>
            <li>TRENDY Reviews</li>
            <li>Exchange Policy</li>
            <li>Policies</li>
            <li>About us</li>
            <li>Terms of Service</li>
            <li>NEW ARRIVALS</li>
            <li>BAGGY PANTS</li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 text-xl">
            <span>📷</span> {/* Instagram */}
            <span>📌</span> {/* Pinterest */}
            <span>▶️</span> {/* YouTube */}
            <span>🔗</span> {/* LinkedIn */}
            <span>🟢</span> {/* WhatsApp */}
          </div>
        </div>

        {/* Right Text */}
        <div className="text-sm flex flex-col justify-between items-start md:items-end">
          <p className="uppercase tracking-widest mb-2 md:mb-0">Proudly Homegrown in India</p>
          <p>© TRENDY</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-xs mt-10">© 2025 - TRENDY</div>
    </footer>
  );
};

export default Footer;
