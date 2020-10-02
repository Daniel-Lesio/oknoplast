import Nav from '../components/nav'
import Link from "next/link"
export default function IndexPage() {
  return (
    <div>
      <Nav />
      <div className="container mx-auto my-12 p-5 text-center bg-white shadow-sm">
        <h1 className='text-2xl font-black text-gray-900'>Witam na prezentacji emaila firmowego </h1>
        <img src="logo.png" className='logo mx-auto my-12' alt=""/>
        <Link href='/dashboard'>
          <a className="btn bg-blue-500 px-12 rounded  hover:bg-blue-900 py-2 mx-auto self-center">
            dalej
          </a>
        </Link>
      </div>
    </div>
  )
}
