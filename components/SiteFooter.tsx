import { Mark } from './Wordmark'

export default function SiteFooter() {
  return (
    <footer><div className="wrap"><div className="footer-grid"><div><Mark /><p>Independent news for Kenya, from Nairobi to every county.</p></div><div><h5>News</h5><a href="/section/politics">Politics</a><a href="/section/business">Business</a><a href="/#counties">Counties</a><a href="/section/sports">Sports</a><a href="/section/tech">Tech</a><a href="/section/lifestyle">Lifestyle</a></div><div><h5>Company</h5><a href="#">About us</a><a href="#">Careers</a><a href="#">Advertise</a><a href="#">Contact</a><a href="#">Send a tip</a></div><div><h5>Trust</h5><a href="#">Editorial standards</a><a href="#">Corrections</a><a href="#">Privacy policy</a><a href="#">Terms of use</a><a href="#">Cookie settings</a></div></div><div className="footer-bottom"><span>© 2026 Dispatch KE. All rights reserved.</span><span>Nairobi, Kenya</span></div></div></footer>
  )
}
