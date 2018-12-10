import React, { Component } from 'react';

class aboutUs extends Component {

    render() {
        return (
            <React.Fragment>
                <h2 className="mt-4 mb-5">最新消息</h2>
                <div className="row border-f mb-5">
                    <div className="col-md-6  ellen-pdn  d-flex flex-column justify-content-center ">
                        <h3 className="mb-4 text-f">
                        專業抗痘無痕問題肌膚護理
                        </h3>
                        <div>
                            <p className="ellen-pad text-left pl-4 pr-3">
                            粉刺痘痘問題肌膚 專業技術導向 完整教學
化膿與非化膿性痘痘、粉刺肌膚，一直是美容師的一大難題，粉刺痘痘肌膚，輕者開放性還比較好處理，嚴重者內包膿處理不當引發細菌感染潰爛，不當清除又會留下坑疤，術後修護不當又會引起發炎，所以痘痘問題肌膚是要靠多年經驗與操作才能有效解決客人問題，我們請具資深經歷、臨場經驗豐富老師授課、為您帶來全技術教學與經驗分享，術後護理問題處理與解決～
                            </p>
                        </div>
                        <div className="more">
                            <button href="#" className="btn bg-first text-w ellen_btn">
                                觀看更多
                            </button>
                        </div>
                    </div>
                    <div className="col-md-6 ellen-pdn  ellen-hidd">
                        <img className="ellen-us" src="/images/27459562_456658361417569_7969213993944439229_n.jpg" alt="" />
                    </div>
                </div>

                <div className="row border-f mb-5">
                    <div className="col-md-6 ellen-pdn  ellen-hidd">
                        <img className="ellen-us" src="/images/35244520_515200892229982_5016013251830349824_n.jpg" alt="" />
                    </div>
                    <div className="col-md-6  ellen-pdn d-flex flex-column justify-content-center">
                        <h3 className="mb-4 text-f">
                        Bella Via貝拉薇亞全系列保養品
                        </h3>
                        <div>
                            <p className="ellen-pad text-left pl-4 pr-3">
                            由【國際皮膚研究學院所】與【Bella Via貝拉薇亞研發團隊】投入長時間研發測試，以專業的知識，研發國際最新醫學美容的醫學配方，在產品製成過程中不使用低價對皮膚有害的原料，包括：變性酒精、礦物油、羊毛脂、人工色素、人造香料，秉持著專業皮膚管理的理念，設計推出提供改善各類肌膚狀況且安全有效的全系列護膚聖品。
                            </p>
                        </div>
                        <div className="more">
                            <button href="#" className="btn bg-first text-w ">
                                觀看更多
                            </button>
                        </div>
                    </div>

                </div>

            </React.Fragment>



        )
    }
}

export default aboutUs;