import { cn } from '@/lib/utils'

type LogoProps = { className?: string; uniColor?: boolean }

export const Logo = ({ className }: LogoProps) => {
    return (
        <span className={cn('text-lg font-bold tracking-tight text-foreground', className)}>
            Дмитрий Ордин
        </span>
    )
}

export const LogoIcon = ({ className }: LogoProps) => {
    return (
        <span className={cn('text-lg font-bold tracking-tight', className)}>
            ДО
        </span>
    )
}

export const LogoStroke = LogoIcon
