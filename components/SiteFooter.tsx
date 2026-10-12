import { Mark } from './Wordmark'

export default function SiteFooter() {
  return (
    <footer><div className="wrap"><div className="footer-grid"><div><Mark /><p>Independent news for Kenya, from Nairobi to every county.</p></div><div><h5>News</h5><a href="/section/politics">Politics</a><a href="/section/business">Business</a><a href="/#counties">Counties</a><a href="/section/sports">Sports</a><a href="/section/tech">Tech</a><a href="/section/lifestyle">Lifestyle</a></div><div><h5>Company</h5><a href="/about">About us</a><a href="/careers">Careers</a><a href="/advertise">Advertise</a><a href="/sponsored/">Sponsored content</a><a href="/contact">Contact</a><a href="/contact">Send a tip</a></div><div><h5>Trust</h5><a href="/editorial-standards">Editorial standards</a><a href="/corrections">Corrections</a><a href="/privacy-policy">Privacy policy</a><a href="/terms-of-use">Terms of use</a><a href="/cookie-settings">Cookie settings</a></div></div><div className="footer-bottom"><span>© 2026 Dispatch KE. All rights reserved.</span><span>Nairobi, Kenya</span></div></div></footer>
  )
}
