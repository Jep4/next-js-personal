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
          className="text-btn" style={{ marginTop: "5px" }}> + 계정에 기재된 닉네임으로 불러주세요. 다리연공 받지 않고 연결하지 않음. </p>
          <hr style={{ border: "1px #e4e4e4 solid" }} />
          <p 
          className="text-btn" style={{ marginTop: "5px" }}> + 1차 캐릭터 커미션 / TRPG / 게임에 관심 없음 ... 아예 안 하는 건 아니긴 한데 제안해 주시면 보통 거절합니다 </p>
          <hr style={{ border: "1px #e4e4e4 solid" }} />
          <p 
          className="text-btn" style={{ marginTop: "5px" }}> + 소재 불호 없음. 진짜 없음... </p>
          <hr style={{ border: "1px #e4e4e4 solid" }} />
          <p 
          className="text-btn" style={{ marginTop: "5px" }}> + 그 외 싫은 건 다 싫다고 하니까 그런 말 없으면 재밌어하는구나 생각해 주세요 ~  ^  ^ ... </p>
          <hr style={{ border: "1px #e4e4e4 solid" }} />
          <p 
          className="text-btn" style={{ marginTop: "5px" }}> + 감사합니다 사랑합니다 💖</p>
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
