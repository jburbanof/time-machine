import { Button } from "@/components/ui/button";
import styles from "./page.module.scss";
import Link from "next/link";
import Image from "next/image";
import calendarIcon from "public/calendar-icon.svg";
import wave from "public/wave.svg";
export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <div className="mr-20">
                    <h1>Time Machine</h1>
                    <h2>Schedule your tasks smartly and save time</h2>
                    <Button className="text-[#fca311]  bg-[#14213d] px-20 mt-10  h-20 cursor-pointer ">
                        <Link href="/calendar">Start Free Trial</Link>
                    </Button>
                </div>

                <Image
                    src={calendarIcon}
                    alt="Calendar Icon"
                    width={400}
                ></Image>
            </main>
            <Image src={wave} alt="wave" className={styles.wave}></Image>
        </div>
    );
}
