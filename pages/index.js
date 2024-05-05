import Head from 'next/head'

export default function Home() {
  return (
    <div className="container w-96">
      <Head>
        <title>0000...</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='half-visible'>0000IN0</div>
      <main >
        <p className='pt-4 pb-2'>이곳에 기재된 닉네임으로 불러주세요 | 인</p>
        <hr style={{ border: "1px #444 solid", marginBottom: "3px" }} />
        
        <div>
          <p style={{ marginTop: "5px" }}> 텍스트 텍스트 </p>
          <hr style={{ border: "1px #e4e4e4 solid"}} />
          <p style={{ marginTop: "5px" }}>텍스트</p>
        </div>

        <hr style={{ border: "1px #e4e4e4 solid" }} />
      </main>

    </div>
  )
}
