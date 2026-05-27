import { motion } from "framer-motion";

const PlayIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
    <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z"/>
  </svg>
);

export default function App() {
  const images = [
    "https://via.placeholder.com/600x800",
    "https://via.placeholder.com/600x800",
    "https://via.placeholder.com/600x800"
  ];

  return (
    <div style={{ background: "#000", color: "#fff", minHeight: "100vh" }}>

      <header style={{ display:"flex", justifyContent:"space-between", padding:"20px" }}>
        <h1>SanPatrick</h1>
        <a href="https://instagram.com/_sanpatrick_" style={{ color:"#fff" }}>
          Instagram
        </a>
      </header>

      <section style={{ height:"90vh", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column" }}>
        <motion.h1 initial={{opacity:0}} animate={{opacity:1}} style={{ fontSize:"60px" }}>
          SanPatrick
        </motion.h1>
        <p>Deep House • Tech House</p>
        <button style={{ marginTop:"20px", padding:"10px 20px", background:"red", border:"none", color:"#fff" }}>
          PLAY SET <PlayIcon />
        </button>
      </section>

      <section style={{ padding:"40px" }}>
        <h2>Galeria</h2>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"10px" }}>
          {images.map((img,i)=>(
            <img key={i} src={img} style={{ width:"100%" }} />
          ))}
        </div>
      </section>

      <footer style={{ padding:"20px", textAlign:"center", opacity:0.6 }}>
        © SanPatrick
      </footer>

    </div>
  );
}
