function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content" style={{ display: 'flex', justifyContent:'center', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
          <div className="footer-section" style={{flex:1, textAlign:'center'}} >
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="#privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="#terms">Terms of Service</a>
              </li>
              <li>
                <a href="#support">Customer Support</a>
              </li>
              <li>
                <a href="#returns">Returns & Exchanges</a>
              </li>
            </ul>
          </div>
          <div className="footer-section" style={{flex:1, textAlign:'center'}} >
            <h4>Contact Info</h4>
            <p>📧 support@mystore.com</p>
            <p>📞 1-800-MYSTORE</p>
            <p>📍 123 Commerce St, City, State 12345</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
            <p style={{textAlign:"center"}}>&copy; 2025 My Online Store. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
