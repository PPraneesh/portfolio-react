import { TypeAnimation } from 'react-type-animation';
import MatrixDisplay from 'dot-matrix-display'


export default function Home() {
  const articles = [{
    title: "bloom filter - a data structure",
    desc: "A data structure that lies.. 😲\nhow does it help? is it even useful?\n That's interesting I guess,  go ahead read the article.",
    link: "https://samwho.dev/bloom-filters/",
    imgUrl: "https://img.icons8.com/glyph-neue/100/FFFFFF/parallel-tasks.png"
  }, {
    title: "do lava lamps encrypt?",
    desc: "How random is your computer?\n Is it random enough to encrypt?\n Cloudflare says NO, that's why they used lava lamps for encryption, wondering how? go ahead read the article.",
    link: "https://www.cloudflare.com/en-gb/learning/ssl/lava-lamp-encryption/",
    imgUrl: "https://img.icons8.com/ios/100/FFFFFF/lock--v1.png"
  }, {
    title: "When you visit a website..",
    desc: "Have you ever wondered how are you able to securely visit the websites?\n Have you came across these terms DNS, TCP/IP, HTTPS, SSL/TLS?  what the hell are they? jus read the article, it might sound boring at the beginning but believe me its far interesting than it appears.",
    link: "https://dev.to/scofieldidehen/what-happens-when-you-visit-a-website-dj8",
    imgUrl: "https://img.icons8.com/ios/50/FFFFFF/internet--v1.png"
  }]
  return (
    <>
      <div className="content">
        <div className="hello">
          <h1>Hey There!!</h1>
          <TypeAnimation
            sequence={[
              'I`m Praneesh',
              3000,
              'I`m an AI Engineer',
              2500,
              'I`m a Web Developer',
              2500,
              'Trying to build SaaS',
              2500
            ]}
            className='type-animation'
            wrapper="span"
            speed={30}
            style={{ fontSize: '2rem' }}
            repeat={Infinity}
          />
          <p>
            Welcome to my digital space! I`m Praneesh, a Computer Science Student
            proficient in {" "}
            <span className="code">C</span>,{" "}
            <span className="code">C++</span>,{" "}
            <span className="code">Python</span>,{" "}
            <span className="code">Java</span>,{" "}
            <span className="code">JavaScript</span>,{" "}
            <span className="code">react.js</span>,{" "}
            <span className="code">Node.js</span>,{" "}
            <span className="code">Express.js</span>,{" "}
            <span className="code">mongodb</span>,{" "}
            <span className="code">ejs</span>,{" "}
            <span className="code">flask</span>,and{" "}
            <span className="code">jinja2</span>.{" "} I code for fun. Here I might talk too much, bear with me and read the content. I`ll try to keep the content interesting..
          </p>
         <div >
           <MatrixDisplay
             texts={[
              {
                pattern: "WINNER",
                secondary_text: "@ JPMC HACKATHON 2024"
              },
              {
                pattern: "INTERN",
                secondary_text: "@ STALCON SOLUTIONS"
              }
            ]}
            duration={3500}
           />
         </div>
          <h2>Passion for Tech:</h2>
          <p>
          Once I bought an ethernet to HDMI converter, it was a cheap one. When I connected it, it didn`t work. I thought drivers in the laptop weren`t there, so I went online and searched for one and installed (POV: Back then I was a noob).{"\n"}Turns out it was a virus :){"\n"}Ah, I`m just saying I will experiment with anything to learn.{"\n"}I read tech articles. I am learning competitive coding.{"\n"}Basically, I`m boring.. but my portfolio isn`t.
          </p>
        </div>
        <div className="articles">
          <h2>Few articles which I read in recent times...</h2>
          {articles.map((article,index) => {
            return (
              <div className='article' key={index}>
                <div>
                  <a href={article.link} target='_blank'>
                    <h3>{article.title}</h3>
                  </a>
                  <p>{article.desc}</p>
                </div>
                <div>
                  <img src={article.imgUrl} alt="private2" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
}
