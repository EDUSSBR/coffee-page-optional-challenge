import { useState } from "react";
import { Buguer } from "../Buguer";
import { Button } from "../Button";
import styles from './styles.module.scss';
import { useRemoveContent } from "../../hooks/useRemoveContent";
import { useRouter } from "next/router";
import { ActiveLink } from "../ActiveLink";


export function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [isSmall, setIsSmall] = useState<boolean>()
    const { toggleContent } = useRemoveContent()

    const { asPath } = useRouter()
    function toggleBuguer() {
        const toggler = !isOpen
        toggleContent()
        setIsOpen(toggler)
    }

    return (
        <div className={styles.Container}>
            <div className={styles.barContent}>

                <img className={styles.logo} src="/assets/logo-mobile.svg" alt="logo" />
                {(typeof window !== undefined) && <Buguer isOpen={isOpen} toggleBuguer={toggleBuguer} />}
            </div>

            <div className={styles.bottomContent}>
                {(typeof window !== undefined) && !isOpen &&
                    <div className={styles.mobileHeaderText}>
                        <p>O café que fará seu </p>
                        <p> código decolar para</p>
                        <p>  o próximo nível</p>
                        <Button>PEGAR MEU CAFÉ &nbsp;&nbsp;<img src="/assets/arrow.svg" alt="SETA" /></Button>
                    </div>
                }
                {(typeof window !== undefined) && isOpen &&
                    <>
                        <nav>
                            <ActiveLink href='/'><a>Home</a></ActiveLink>
                            <ActiveLink href='/'><a>Menu</a></ActiveLink>
                            <ActiveLink href='/'><a>Recompensas</a></ActiveLink>
                            <ActiveLink href='/'><a>Gift Cards</a></ActiveLink>
                            <ActiveLink href='/'><a>Lojas</a></ActiveLink>
                        </nav>
                    </>}
            </div>



        </div>
    )
}
        //     {/* {useDesktopMediaQuery() &&  <>
        // <img src="/assets/logo-desktop.svg" alt="logo" />
        // <nav>
        //     <a>Home</a>
        //     <a>Menu</a>
        //     <a>Recompensas</a>
        //     <a>Gift Cards</a>
        //     <a>Lojas</a>
        // </nav>
        // </>} */
        //     }