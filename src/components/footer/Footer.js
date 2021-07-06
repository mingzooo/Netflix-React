import './footer.scss';

const Footer = () => {

    const list1 = ["자주 묻는 질문", "쿠키 설정"];
    const list2 = ["고객 센터", " 회사 정보"];
    const list3 = ["이용 약관"];
    const list4 = ["개인 정보"];

    const listItem = (list) => list.map((name) =>
        <li>{name}</li>
    );

    return (
        <div className="footer">
            <div className="container">
                <h3>질문이 있으신가요? 문의 전화:  00-308-321-0058</h3>
                <div className="menu">
                    <ul>{listItem(list1)}</ul>
                    <ul>{listItem(list2)}</ul>
                    <ul>{listItem(list3)}</ul>
                    <ul>{listItem(list4)}</ul>
                </div>
                <div class="sel-lang-wrap">
                    <select class="lang-select">
                        <option>한국어</option>
                        <option>English</option>
                    </select>
                </div>
                <p className="info">
                    넷플릭스서비시스코리아 유한회사 통신판매업신고번호: 제2018-서울종로-0426호 전화번호: 00-308-321-0058<br />
                    대표: 레지널드 숀 톰프슨<br />
                    이메일 주소: korea@netflix.com<br />
                    주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층 우편번호 03161<br />
                    사업자등록번호: 165-87-00119<br />
                    클라우드 호스팅: Amazon Web Services Inc.<br />
                    공정거래위원회 웹사이트<br />
                </p>
            </div>
        </div>
    )
}

export default Footer;