import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "./Disclaimer.scss";

class Disclaimer extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      id: this.props.match.params.id,
      professor: {},
    })
    // console.log('id', this.data)
  }
  componentDidMount() {
    //ajax call
    this.getClass()
    // this.getState()

    console.log(this.props.match.params.id)
  }
  getClass() {
    const th = this
    fetch('/professorId/professor/' + th.state.id)  //http://localhost:3000/professor/api
      .then(res => res.json())
      .then(professor => {
        // console.log(professor)
        this.setState({ professor: professor[0] })
      })
    // fetch("http://localhost:3000/allcroom/newcroom" ) 
    // .then(res => res.json())
    // .then(c_room => {
    //     // console.log(this.state.userid)
    //     this.setState({ c_room: c_room })
    // })
  }
  render() {
    let items = this.state.professor;
    return (
      <React.Fragment>
        <h2 className="mt-5 txt_mes">使用者守法承諾與義務</h2>
        <div className="row mt-3 d-flex justify-content-center mb-3 ">
          您好
                            <h4 className="text-f ml-3 mr-3">{items.teacher_name}</h4>
          講師 請詳細閱讀下列資料
                            </div>

        <div className="container ">
          <div className="row d-flex flex-column border-f">
            <h3 className="mt-5 text-f">Blla Via 開課注意事項  </h3>

            <div className="container col-12 rb-block-w p-5 ">
              <p className="text-left">
                1.
                依據本服務條款提供服務。當講師完成講師申請手續、或開始使用本服務時，即表示已閱讀、瞭解並同意接受本服務條款之所有內容。本公司有權於任何時間修改或變更本條款之內容，並公佈於本服務網頁，且不另行通知個別使用者，建議請隨時注意條款修改或變更。若有違反本服務條款時，本公司隨時依據相關規則暫停或終止您使用本服務，不另行通知。會員於任何修改或變更後繼續使用本服務，視同已閱讀、瞭解並同意接受該等修改或變更。如果不同意本約定書內容，請勿使用本服務。<br/>
                2.
                Blla Via 的拆帳方式是依每一筆訂單，透過本網站購買進行的「分潤比例」拆帳。只要學生透過本網站購買課程，這筆訂單就會歸屬於「老師的行銷分潤」，老師則會拿到該筆訂單 80% 的收入。
                3.
                在新增完課程後Blla Via 會依您提供的資訊去進行課程審核，如果您的資訊有達到基本審核標準，那本公司將會
                開放您此課程的上架權益，讓您能自行進行上架動作。(審查工作天數約2-4天)
                </p>

              <h3 className=" text-center text-f mt-5">免責聲明</h3>
              <p className="text-left ">
                1.
                廠商或個人可能透過本服務或經由本服務連結之其他網站提供商品買賣、服務或其他交易行為。您若因此與該廠商或個人進行交易，各買賣或其他合約均僅存在您與各該廠商或個人兩造之間。本公司絕不介入您與廠商或個人間的任何買賣、服務或其他交易行為，對於您所獲得的商品、服務或其他交易標的物亦不負任何擔保責任。<br/>
                2.
                因網路資料傳輸過程牽涉至第三方以上之其他服務供應商，本公司不擔保使用者所上載的資料將被正常顯示、亦不擔保資料傳輸的正確性；如果使用者發現本服務有錯誤或疏失，請立即通知本公司。<br/>
                3.
                本服務會定期備份資料，但您於使用本服務時宜自行採取防護措施。本公司對於您因使用（或無法使用）本服務而造成的損害，不負任何賠償責任。您對於個人資料、付款資料（包含信用卡資料）及會員密碼等，應妥善保管以避免外洩。所有使用其帳號和密碼進入本系統後之行為，均視為該帳號及密碼持有人之行為。<br/>
                4.
                本公司對於您使用本服務或經由本服務連結至其他網站而取得之資訊、廣告，不擔保其為完全正確無誤。本服務所提供之資訊或建議有權隨時修改或刪除。基於尊重內容提供者之智慧財產權，本公司對內容提供者所提供之內容並不做實質之審查或修改，對該等內容之正確真偽亦不負任何責任。
                </p>

              
            </div>
            
          </div>
          <div className="d-flex justify-content-center mt-4">
                <Link to={`/professor/${items.user_id}`}
                  id="resetB" className="btn bg_er-r text-w col-5 ml-3 mr-3">
                  不同意</Link >

                <Link to={`/class_from/${items.user_id}`}
                  className="btn bg_mes  text-w col-5 ml-3 mr-3">
                  同意</Link>
              </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Disclaimer;
