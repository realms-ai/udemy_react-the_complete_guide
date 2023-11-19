import Image from 'next/image'
import Header from './_header'
import Main from './_main'
import Links from './_links'


export default function Index() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">

      <Header/>
      <Main/>
      <Links/>

    </main>
  )
}
