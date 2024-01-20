"use client"
import Image from "next/image";
import Banner from "../assets/BANNER_0.2.png";
import '../globals.css';
import useScroll from "./useScrollEffect";

const styles = {
    width: '40%',
    height: '30%',
    borderRadius: '45%',
};

export default function Navbar() {
    const isVisible = useScroll()
    return (
        <nav>
            <Image src={Banner} alt="image of the gang" style={styles} />
            {isVisible && <h1 className="whiteText rubberBand">Welcome to my oni tree</h1>}
        </nav>
    );
}
