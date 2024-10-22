import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1>Introduce your self</h1>

      <div className="home-img">
        <img src="./me.jpg" alt="me" />
      </div>

      <div className="home-intro">
        <h3>นางสาว ณัฐธิชา ลาสองชั้น </h3>
        <p>รหัส 66070195 <br />
        คณะเทคโนโลยีสารสนเทศ <br />
        สาขาวิืยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์</p>
      </div>
    </div>
  );
}

export default Home;
