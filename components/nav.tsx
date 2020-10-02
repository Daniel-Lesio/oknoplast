import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/dashboard', label: 'Dashboard' },
]

export default function Nav() {
  return (
      <header className='bg-white shadow-sm'>
          <ul style={{lineHeight:'70px'}}>
            { links && links.map((link, index)=>(
              <Link href={link.href}>
                <a style={{ minWidth : '100px' }} className='text-center mx-2  h-full  inline-block'>{link.label}</a>
              </Link>
            )) }
          </ul>

      </header>
    )
}
