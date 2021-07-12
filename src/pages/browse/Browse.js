
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./browse.scss";
import Rank from "../../components/rank/Rank";
import List from "../../components/list/List";
import Footer from "../../components/footer/Footer";


const Browse = () => {

  return (
    <div className="background">
      <div className="home">
        <Navbar />
        <Featured />
        <Rank category="오늘 한국의 TOP10 콘텐츠" />
        <List category="오늘 넷플릭스에서" />
        <List category="넷플릭스 인기 콘텐츠" />
        <List category="지금 뜨는 콘텐츠" />
        <List category="미국 TV프로그램" />
        <List category="애니메이션" />
      </div>
      <Footer />
    </div>
  );
}

export default Browse;
