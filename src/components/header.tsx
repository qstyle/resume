'use client'
import { Logo } from '@/components/logo'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GithubMark } from '@/components/icons'
import React from 'react'
import { motion } from 'motion/react'
import { useLenis } from 'lenis/react'

const GITHUB_URL = 'https://github.com/qstyle'

// index = карточка в StickyCardStack (0 = hero)
const menuItems = [
    { name: 'Checker Pro', index: 1 },
    { name: 'Опыт', index: 2 },
    { name: 'Стек', index: 3 },
    { name: 'Контакты', index: 4 },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const lenis = useLenis()

    const goTo = (index: number) => {
        setMenuState(false)
        const y = index * window.innerHeight
        if (lenis) lenis.scrollTo(y, { duration: 0.9, lock: true })
        else window.scrollTo({ top: y, behavior: 'smooth' })
    }

    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                style={{ animation: 'introDown 0.6s ease-out 0.45s both' }}
                className="fixed z-20 w-full border-b border-border bg-background/70 backdrop-blur-xl">
                <div className="mx-auto max-w-7xl px-6 lg:px-12">
                    <motion.div
                        key={1}
                        className="relative flex flex-wrap items-center justify-between gap-6 py-3 duration-200 lg:gap-0 lg:py-4">
                        <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
                            <button
                                type="button"
                                onClick={() => goTo(0)}
                                aria-label="В начало"
                                className="flex cursor-pointer items-center space-x-2">
                                <Logo />
                            </button>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>

                            <div className="hidden lg:block">
                                <ul className="flex gap-8 text-sm">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <button
                                                onClick={() => goTo(item.index)}
                                                className="text-muted-foreground hover:text-foreground block cursor-pointer duration-150">
                                                <span>{item.name}</span>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <button
                                                onClick={() => goTo(item.index)}
                                                className="text-muted-foreground hover:text-foreground block cursor-pointer duration-150">
                                                <span>{item.name}</span>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button
                                    asChild
                                    variant="outline"
                                    size="sm">
                                    <a
                                        href={GITHUB_URL}
                                        target="_blank"
                                        rel="noopener noreferrer">
                                        <GithubMark className="size-4" />
                                        <span>GitHub</span>
                                    </a>
                                </Button>
                                <Button
                                    size="sm"
                                    onClick={() => goTo(4)}>
                                    <span>Связаться</span>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </nav>
        </header>
    )
}
