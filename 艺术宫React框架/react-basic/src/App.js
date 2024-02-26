// 根组件
// APP ->index.js ->public/index.html(root)
import "react-photo-view/dist/react-photo-view.css";
// import 'react-basic/src/css/index.css';
import "./css/index.css";
import "./css/quanju.css";
import "./js/h5.js";

function App() {
 

       let btn=document.querySelector('.Btnalert')
       
        let alertEl=document.querySelector('.alert')

        btn.onclick=function(){
            alertEl.style.display='flex'
        }
       
        let btnClose=document.querySelector('.Close')

        btnClose.onclick=function(){
            alertEl.style.display='none'
        }

        alertEl.onclick=function(e){
            console.log(e)
            if(e.target==alertEl){
                alertEl.style.display='none'
            }
            
        }

  return (
    <>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <div className="os">
        <div className="overall_situation">
          <img src={require("./img/640.jpg")} className="shou1" />
          <div className="color_jb" />
        </div>
        {/*  */}
        {/* 展览信息 */}
        <div className="information">
          <h2 className="txt_max">
            —&nbsp;&nbsp;&nbsp;&nbsp;展览信息&nbsp;&nbsp;&nbsp;&nbsp;—
          </h2>
          <table className="tb1">
            <tbody>
              <tr>
                <td className="txt-1">展览地址:</td>
                <td className="txt1-2">
                  上海市浦东新区上南路205号 中华艺术宫（上海美术馆）
                </td>
              </tr>
              <tr>
                <td className="txt-1">展出时间:</td>
                <td className="txt1-2">
                  周二至周日 10:00-18:00（17:00停止进馆）
                  周一闭馆（法定节假日除外）
                </td>
              </tr>
              <tr>
                <td className="txt-1">Address:</td>
                <td className="txt1-2">
                  205, Shangnan Rd. Pudong New District, Shanghai 200126, P.R.
                  China
                </td>
              </tr>
              <tr>
                <td className="txt-1">Opening Hours:</td>
                <td className="txt1-2">
                  10:00-18:00 (admission stops after 17:00)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="introduce">
          <h2 className="txt_max">
            —&nbsp;&nbsp;&nbsp;&nbsp;展览介绍&nbsp;&nbsp;&nbsp;&nbsp;—
          </h2>
          <p className="txt-introduce">
            今年是中法建交60周年，也是中法文化旅游年，因此上海市文化和旅游局指导中华艺术宫（上海美术馆）联手清华大学艺术博物馆、中国上海画院、上海市美术家协会，策划了林风眠、吴冠中艺术大展，以“中国式风景”为主题，遴选了两位艺术家大约200幅佳作，涵盖他们在不同时期创作的中国画、油画、水彩、素描各门类艺术精品，展现他们师生二人融通中西古今的开放视野，传统精髓与时代经验兼备的中国气派。我们真诚欢迎更多市民游客走进上海美术馆，沉浸式体验“中国式风景”，从中华文化和中华美学中得到心灵的滋养、汲取奋进的力量。
          </p>
        </div>
        <div className='important-int"'>
          <div className="txt-blank">
            <h2 className="txt_max blanktxt">
              —&nbsp;&nbsp;&nbsp;&nbsp;重要作品介绍&nbsp;&nbsp;&nbsp;&nbsp;—
            </h2>
          </div>
          <div className="Picture-text">
            <table className="P-txt">
              <tbody>
                <tr>
                  <td>
                    <div className="P-left">
                      <button className="btn-alert" onclick={Btnalert}>
                        <img
                          src={require("./img/28晚钟.jpg")}
                          className="img1"
                        />
                      </button>
                      <p className="left-txt1">静物</p>
                      <p className="left-txt2">林风眠</p>
                    </div>
                    {/* 内部弹窗 */}
                    <div className="alert">
                      <div className="alert-body">
                        <div className="alert-title">
                          <img
                            src={require("./img/28晚钟.jpg")}
                            className="tan1"
                          />
                          <div className="close">x</div>
                        </div>
                        <div className="alert-content">弹窗内容 弹窗内容</div>
                        <div className="tantxt1">舞</div>
                        {/* 介绍 */}
                        <table>
                          <tr>
                            <td></td>
                            <td></td>
                          </tr>
                          <td></td>
                          <td></td>
                        </table>
                        {/* 内容 */}
                        <div></div>
                      </div>
                    </div>
                    {/*  */}

                    {/*  */}
                  </td>
                  <td>
                    <div className="P-right">
                      <button>
                        {" "}
                        <img src={require("./img/1舞.jpg")} className="img1" />
                      </button>
                      <p className="left-txt1">敦煌仕女</p>
                      <p className="left-txt2">林风眠</p>
                    </div>
                  </td>
                </tr>
                {/* 第二 */}
                <tr>
                  <td>
                    <div className="P-left2">
                      <button>
                        <img
                          src={require("./img/2捧白莲红衣仕女 .jpg")}
                          className="img1"
                        />
                      </button>
                      <p className="left-txt1">仕女</p>
                      <p className="left-txt2">林风眠</p>
                    </div>
                  </td>
                  <td>
                    <div className="P-right2">
                      <button>
                        {" "}
                        <img
                          src={require("./img/3黄河.jpg")}
                          className="img1"
                        />
                      </button>
                      <p className="left-txt1">黄河</p>
                      <p className="left-txt2">吴冠中</p>
                    </div>
                  </td>
                </tr>
                {/* 三 */}
                <tr>
                  <td>
                    <div className="P-left3">
                      <button>
                        <img
                          src={require("./img/4紫藤.jpg")}
                          className="img1"
                        />
                      </button>
                      <p className="left-txt1">仕女</p>
                      <p className="left-txt2">林风眠</p>
                    </div>
                  </td>
                  <td>
                    <div className="P-right3">
                      <button>
                        {" "}
                        <img
                          src={require("./img/5蓝色花.jpg")}
                          className="img1"
                        />
                      </button>
                      <p className="left-txt1">黄河</p>
                      <p className="left-txt2">吴冠中</p>
                    </div>
                  </td>
                </tr>
                {/* 四 */}
                <tr>
                  <td>
                    <div className="P-left4">
                      <button>
                        <img
                          src={require("./img/6绣球花.jpg")}
                          className="img1"
                        />
                      </button>
                      <p className="left-txt1">仕女</p>
                      <p className="left-txt2">林风眠</p>
                    </div>
                  </td>
                  <td>
                    <div className="P-right4">
                      <button>
                        {" "}
                        <img
                          src={require("./img/7仕女.jpg")}
                          className="img1"
                        />
                      </button>
                      <p className="left-txt1">黄河</p>
                      <p className="left-txt2">吴冠中</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* 结尾 */}
        <div className="bottom">
          <p className="bt1">中国式风景</p>
          <p className="bt2">林风眠吴冠中艺术大展</p>
        </div>
      </div>
    </>
  );
}

export default App;
