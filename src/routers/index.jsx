import { BrowserRouter, Routes, Route } from "react-router-dom";
import Base from "../layout/base/Base";
import Home from "../pages/Home/Main";
import AboutMain from "../pages/About/AboutMain";
import LoanMain from "../pages/Loan/LoanMain";
import MezzMain from "../pages/Mezz/MezMain";
import ManageMain from "../pages/Management/ManageMain";
import LandMain from "../pages/Land/LandMain";
import PrivacyMain from "../pages/Privacy/PrivacyMain";
import DisclosuresMain from "../pages/Disclosures/DisclosuresMain";
import InsightMain from "../pages/Insight/InsightMain";
import ResidenceMain from "../pages/Residence/ResidenceMain";
import InsightDetailMain from "../pages/InsightDetail/InsightDetailMain";
import News from "../pages/News/NewsMain"
import NewsDetails from "../pages/NewsDetail/NewsDetailMain"
function MyRoutes() {
  return (
    <>
      <BrowserRouter>
        <Base>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/about" element={<AboutMain></AboutMain>}></Route>
            <Route path="/loan" element={<LoanMain></LoanMain>}></Route>
            <Route path="/mezz" element={<MezzMain></MezzMain>}></Route>
            <Route path="/manage" element={<ManageMain></ManageMain>}></Route>
            <Route path="/land" element={<LandMain></LandMain>}></Route>
            <Route path="/privacy" element={<PrivacyMain></PrivacyMain>}></Route>
            <Route path="/disclosures" element={<DisclosuresMain></DisclosuresMain>}></Route>
            <Route path="/insight" element={<InsightMain></InsightMain>}></Route>
            <Route path="/residence" element={<ResidenceMain></ResidenceMain>}></Route>
            <Route path="/insight-detail" element={<InsightDetailMain></InsightDetailMain>}></Route>
            <Route path="/news" element={<News></News>}></Route>
            <Route path="/news-details" element={<NewsDetails></NewsDetails>}></Route>
          </Routes>
        </Base>
      </BrowserRouter>
    </>
  );
}

export default MyRoutes;
