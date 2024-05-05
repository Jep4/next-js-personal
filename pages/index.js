import Head from 'next/head'
import { useState } from 'react'

export default function Home() {

  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const audio = document.getElementById('audioPlayer');
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="container w-96">
      <Head>
        <title>0000...</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <audio id="audioPlayer" src="./bgm.mp3" preload="auto" />
      <div className='half-visible'>0000IN0</div>
      <main >
        <p className='pt-2 pb-2'></p>
        <hr style={{ border: "1px #444 solid", marginBottom: "3px" }} />

        <div>
          <p 
          className="text-btn" style={{ marginTop: "5px" }}> + 이곳에 기재된 닉네임으로 불러주세요 | 인 </p>
          <hr style={{ border: "1px #e4e4e4 solid" }} />
          <p 
          className="text-btn" style={{ marginTop: "5px" }}> + 텍스트</p>
          <hr style={{ border: "1px #e4e4e4 solid" }} />
          <p 
          className="text-btn" style={{ marginTop: "5px" }}> + 텍스트</p>
          <hr style={{ border: "1px #e4e4e4 solid" }} />
          <p 
          className="text-btn" style={{ marginTop: "5px" }}> + 텍스트</p>
          <hr style={{ border: "1px #e4e4e4 solid" }} />
          <p 
          className="text-btn" style={{ marginTop: "5px" }}> + 텍스트</p>
        </div>

        <hr style={{ border: "1px #e4e4e4 solid" }} />
        <div
          className="text-btn"
          onClick={togglePlay}
          style={{
            cursor: 'pointer',
            backgroundColor: isPlaying ? '#222' : '',
            transition: "0.4s",
            color: isPlaying ?  "#f4f4f4"  : ''
          }}
        >
          {isPlaying ? ' + 노래 재생 중' : ' + 노래 재생'}
        </div>

      </main>

    </div>
  )
}
