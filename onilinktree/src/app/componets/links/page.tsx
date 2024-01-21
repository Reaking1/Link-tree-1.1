import Link from "next/link";
import '../../globals.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTiktok, faTwitch, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faMask, faPerson, faStream } from "@fortawesome/free-solid-svg-icons";


export default function Main() {
    return (
        <div className="First-box1">
           <div className="Second-box2">
           <div className="third">
                <Link href="https://www.twitch.tv/theghostking2003">
                <h2 className="animated-font">
                <FontAwesomeIcon icon={faTwitch} color="white"  className="icons"/>
                   Twicth 
                </h2>
                </Link>
            </div>
           </div>
           <div className="Second-box2">
           <div className="third">
                <Link href="https://x.com/ghostkingmd?t=cQpWnr0d1IqL22PIscBTVA&s=09">
                <h2 className="animated-font">
                <FontAwesomeIcon icon={faTwitter} color="white"  className="icons"/>
                    Twitter
                    </h2>
                </Link>
            </div>
           </div>
           <div className="Second-box2">
           <div className="third">
                <Link href="https://www.tiktok.com/@ramoswanereabetsw?is_from_webapp=1&sender_device=pc">
                <h2 className="animated-font">
                <FontAwesomeIcon icon={faTiktok} color="white"  className="icons"/>
                    TikTok
                    </h2>
                </Link>
            </div>
           </div>

           <div className="Second-box2">
           <div className="third">
                <Link href="/not-found">
                <h2 className="animated-font">
                <FontAwesomeIcon icon={faPerson} color="white"  className="icons"/>Portfolio</h2>
                </Link>
            </div>
           </div>
           <div className="Second-box2">
           <div className="third">
                <Link href="/not-found">
                <h2 className="animated-font">
                <FontAwesomeIcon icon={faMask} color="white"  className="icons"/>Oni Mask</h2>
                </Link>
            </div>
           </div>
        </div>
    )
}