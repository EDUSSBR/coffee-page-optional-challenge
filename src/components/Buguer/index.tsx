interface BuguerProps {
    isOpen?: boolean
    toggleBuguer: () => void
}

export function Buguer({ isOpen, toggleBuguer }: BuguerProps) {
    return (
        <> 
        <>{!isOpen && <img onClick={toggleBuguer} src="/assets/menu-buguer-open.svg" alt="menu" />}</>
        <>{isOpen && <img onClick={toggleBuguer} src="/assets/menu-buguer-close.svg" alt="menu" />}</>
        </>     
        


    )
}