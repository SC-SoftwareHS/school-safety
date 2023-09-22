import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.png'
import Image from 'next/image'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const Header = () => {
  return (
    <div className="flex items-center justify-between py-4">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <Image src={Logo} alt="Logo" width={300} height={100} />
        </Link>
      </div>
      <div className="flex items-center leading-5 space-x-4 sm:space-x-6">
        {headerNavLinks.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className="font-medium text-gray-900 dark:text-gray-100"
          >
            {link.title}
          </Link>
        ))}
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </div>
  )
}

export default Header
