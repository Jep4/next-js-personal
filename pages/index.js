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

        <div
          className="text-btn"
          onClick={togglePlay}
          style={{
            cursor: 'pointer',
            backgroundColor: isPlaying ? '#222' : '',
            transition: "0.4s",
            color: isPlaying ? "#f4f4f4" : '',
            padding: "30px"
          }}
        >
          {isPlaying ? ' + K o m m , s ü ß e r T o d ' : ' + 노래 재생하기 '}
        </div>
        <hr style={{ border: "1px #e4e4e4 solid" }} />
        <div>
          <p
            className="text-btn" > +  텍스트텍스트텍스트텍스트텍스트텍스트. <br></br> + 텍스트텍스트텍스트텍스트. </p>
          <hr style={{ border: "1px #e4e4e4 solid" }} />
          <p
            className="text-btn" > + 텍스트텍스트텍스트텍스트텍스트 <br></br> + 텍스트텍스트텍스트텍스트텍스트텍스트 </p>
          <hr style={{ border: "1px #e4e4e4 solid" }} />
          <p
            className="text-btn" > + 텍스트텍스트텍스트<br></br>+ 텍스트텍스트텍스트</p>
          <hr style={{ border: "1px #e4e4e4 solid" }} />
          <p
            className="text-btn" > + 텍스트텍스트텍스트텍스트 </p>
        </div>

        <hr style={{ border: "1px #e4e4e4 solid" }} />
        <div
        style={{display:"grid",gridTemplateColumns: "1fr 1fr 1fr 1fr"}}
        >
          <a href='https://open.kakao.com/o/sAEPZT0e'>
            <div className='btns' >
              오픈채팅
            </div>
            </a>
          <a href='https://twitter.com/cute_pigs_tweet' >
            <div className='btns' >
              좋아하는거
            </div>
          </a>
          <a href='https://www.youtube.com/watch?v=wDgQdr8ZkTw'>
            <div className='btns' >
              좋은 날
            </div>
          </a>

          <a href='https://www.youtube.com/watch?v=ifs4zmWD3ms'>
            <div className='btns' >
              GET DOWN
            </div>
          </a>


        </div>

      </main>

    </div>
  )
}
