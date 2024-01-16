import "./styles/global.scss";
import "./App.css";
import MyRoutes from "./routers";
import { useEffect, useState } from "react";

function App() {
  const [isCookieModal, setIsCookieModal] = useState(false);

  const setCookie = (status) => {
    document.querySelector("#iubenda-cs-banner").remove();
    _setCookie("isAccepted", status);
    setIsCookieModal(true);
  };

  const _setCookie = (cname, cvalue, exdays) => {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  };

  const getCookie = (name) => {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
      begin = dc.indexOf(prefix);
      if (begin != 0) return null;
    } else {
      begin += 2;
      var end = document.cookie.indexOf(";", begin);
      if (end == -1) {
        end = dc.length;
      }
    }
    // because unescape has been deprecated, replaced with decodeURI
    //return unescape(dc.substring(begin + prefix.length, end));
    return decodeURI(dc.substring(begin + prefix.length, end));
  };

  useEffect(() => {
    var isAccepted = getCookie("isAccepted");
    if (isAccepted == null) {
      setIsCookieModal(true);
    }
  }, []);

  return (
    <>
      <MyRoutes></MyRoutes>
      {isCookieModal ? (
        <div
          id="iubenda-cs-banner"
          style={{
            zIndex: "99999998 !important",
            visibility: isCookieModal ? "visible" : "hidden",
          }}
          className="iubenda-cs-default iubenda-cs-bottom iubenda-cs-slidein iubenda-cs-visible"
          role="alertdialog"
          aria-labelledby="iubenda-cs-title"
          aria-describedby="iubenda-cs-paragraph"
        >
          <div className="iubenda-cs-container">
            <div
              className="iubenda-cs-content"
              style={{
                backgroundColor: "#FFFFFF !important",
                color: "#000000 !important",
                fontSize: "14px !important",
              }}
            >
              <div className="iubenda-cs-rationale">
             
                <div
                  className="iubenda-banner-content iubenda-custom-content"
                  role="document"
                >
                  <div id="iubenda-cs-title">Notice</div>
                  <div id="iubenda-cs-paragraph">
                    <p className="iub-p">
                      The website contains general service and market related commentary and opinions that has been prepared and issued by Secure Bailment
                      Solutions or a related entity (“we”), for the review of strictly wholesale and institutional investors only. We are a direct mortgage lender or act as
                      trustee for mortgage lenders and only provide loans for commercial purposes to business and commercial borrowers. By selecting “Agree” below
                      and/or accessing the website, you are hereby warranting that you are a Wholesale Client (as per section 761G of the Corporations Act 2001 Cth) and
                      further agree to any applicable Terms and Conditions of any Information Memorandums or Loan Notes and you should review such documents prior
                      to making any financial decisions. You further confirm and represent that you will not copy, edit or transmit information contained on this website to
                      any investor, borrower or individual that does not meet the definition of a “Wholesale” Client. This website is an introduction to third-party services
                      and contains general information. You should always seek your own independent legal and accounting advice and consider its appropriateness for
                      your situation. This website should not be relied upon, or considered as an offer, solicitation or sale of financial products.
                    </p>
                    <p className="iub-p"></p>
                    <p className="iub-p">
                    Use the “Accept” button to confirm you have read the above notice and to proceed. Use the “Reject” button to close this site.
                    </p>
                  </div>
                </div>
                <div className="iubenda-cs-counter" style={{ display: "none" }}>
                  Press again to continue 0/1
                </div>
                <div
                  className="iubenda-cs-opt-group"
                  style={{ color: "#FFFFFF!important" }}
                >
                 
                  <div className="iubenda-cs-opt-group-consent">
                    <button
                      onClick={() => {
                        setCookie(false)
                        window.location.assign("https://www.smh.com.au");
                      }}
                      className="iubenda-cs-reject-btn iubenda-cs-btn-primary"
                      tabIndex="0"
                      role="button"
                      aria-pressed="false"
                    >
                      Reject
                    </button>
                    <button
                      onClick={() => {
                        setCookie(true);
                      }}
                      className="iubenda-cs-accept-btn iubenda-cs-btn-primary"
                      tabIndex="0"
                      role="button"
                      aria-pressed="false"
                    >
                      Accept
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default App;
