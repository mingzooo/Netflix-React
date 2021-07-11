
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./browse.scss";
import List from "../../components/list/List";
import Footer from "../../components/footer/Footer";
import { useHistory } from 'react-router-dom';


const Browse = () => {

  return (
    <div className="background">
      <div className="home">
        <Navbar />
        <Featured />
        <List category="오늘 넷플릭스에서" />
        <List category="넷플릭스 인기 콘텐츠" />
        <List category="지금 뜨는 콘텐츠" />
        <List category="미국 TV프로그램" />
      </div>
      <Footer />
    </div>
  );
}

export default Browse;
