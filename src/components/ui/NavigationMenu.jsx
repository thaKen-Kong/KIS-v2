import { useState } from "react"
import { navigationItems } from "../../data/navigation"
import { Link } from "react-router-dom"

export function NavigationMenu() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <section className="navigation-panel">
                <div className="nav-mobile">
                    <button
                        className="nav-mobile__hamburger"
                        aria-label="Open navigation"
                        aria-expanded={isOpen}
                        onClick={() => setIsOpen(true)}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>

                <aside
                    className={`nav-mobile__panel${isOpen ? " is-open" : ""}`}
                    role="dialog"
                    aria-label="Mobile navigation"
                >
                    <div className="nav-mobile__header">
                        <h2>Menu</h2>
                        <button
                            className="nav-mobile__close"
                            aria-label="Close navigation"
                            onClick={() => setIsOpen(false)}
                        >
                            X
                        </button>
                    </div>
                    <nav className="nav-mobile__list" aria-label="Primary">
                        {navigationItems.map((item, index) => {
                            const hasChildren = Array.isArray(item.childrens) && item.childrens.length > 0

                            if (hasChildren) {
                                return (
                                    <details
                                        key={item.label}
                                        className="nav-mobile__group nav-mobile__item"
                                        style={{ animationDelay: `${index * 0.05}s` }}
                                    >
                                        <summary className="nav-mobile__link">
                                            <span>{item.label}</span>
                                            <span className="nav-mobile__chevron">+</span>
                                        </summary>
                                        <div className="nav-mobile__submenu">
                                            {item.childrens.map((child, childIndex) => (
                                                <Link
                                                    key={`${item.label}-${child.label}-${childIndex}`}
                                                    className="nav-mobile__sublink"
                                                    to={child.path}
                                                    style={{ animationDelay: `${childIndex * 0.05}s` }}
                                                >
                                                    {child.label || item.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </details>
                                )
                            }

                            return (
                                <a
                                    key={item.label}
                                    className="nav-mobile__link nav-mobile__item"
                                    style={{ animationDelay: `${index * 0.05}s` }}
                                >
                                    {item.label}
                                </a>
                            )
                        })}
                    </nav>
                </aside>
            </section>
        </>
    )
}
