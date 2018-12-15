import React, { Component } from 'react';

class Add extends Component {
    constructor(props) {
        super(props)
        this.initState = {
                        // id:null,
                        usid:1, 
                        pro_name: "",
                        pro_type: "",
                        star: 0,
                        pro_picnum:1,
                        title:"",
                        skin:null,
                        age:0,
                        tag:"",
                        text:"",
                        collect:null,
                        report:null,
                        created_at:null,
                        pre_title:"",
                        u_name:"",
                        u_pic:"",
                        art_pic1:[],
                        art_pic2:"",
                        art_pic3:"",
                        gender:"",
                    }
        this.state = this.initState;   
        console.log (this)
        };
    //抓到輸入欄位得值
    handleChange = (evt) => {
        let key = evt.target.id;
        let data = evt.target.value;
        this.setState({
            [key]: data
        })
    } 
    //點擊按钮後的事件處理
    add = (evt) => {
        const{
            // id,
            usid,
            pro_name,
            pro_type,
            star,
            pro_picnum,
            title,
            skin,
            age,
            text,
            collect,
            report,
            pre_title,
            created_at,
            u_name,
            u_pic,
            art_pic1,
            art_pic2,
            art_pic3,
            gender, 
        }=this.state;

        let formData = new FormData();
        // formData.append("id",id);
        formData.append("usid",usid);
        formData.append("pro_name",pro_name);
        formData.append("star",star);
        formData.append("pro_picnum",pro_picnum);
        formData.append("title",title);
        formData.append("skin",skin);
        formData.append("age",age);
        formData.append("text",text);
        formData.append("collect",collect);
        formData.append("report",report);
        formData.append("pre_title",pre_title);
        formData.append("created_at",created_at);
        formData.append("u_name",u_name);
        formData.append("u_pic",u_pic);
        formData.append("art_pic1",art_pic1);
        formData.append("art_pic2",art_pic2);
        formData.append("art_pic3",art_pic3);
        formData.append("gender",gender);
        formData.append("pro_type",pro_type);
       // console.log(art_pic1);
// console.log(this.state);
        //     delete article.id;
            //console.log(this.state)
            fetch('http://localhost:3000/bv/article/articlelist/', {
                method: 'POST',
                body: formData,
                // body: JSON.stringify(this.state),
                // headers: new Headers({
                //     'Content-Type': 'application/json'
                // })
            }).then(res => res.json())
                .then(data => {
                    alert(data.message);
                   // this.getArticle();
                })
            evt.preventDefault();
        }
    getArticle() {
        fetch("http://localhost:3000/bv/article/articlelist")
            .then(res => res.json())
            .then(articles => this.setState({ 
                article: articles,
                // articles:this.initState,
            }))
    }
    img_onChange1 = (evt) => {
        evt.preventDefault();
        // switch (evt.target.name) {
        //     case 'art_pic1':
                this.setState({ art_pic1: evt.target.files[0] });
            //     break;
            // default:
            //     this.setState({ [evt.target.name]: evt.target.value });
       // }
    };
    render() {
        return (
            <React.Fragment>
    <form className="p-3 " method="POST">
    <div className="">
                {/* style={{border:" 1px solid black"}} */}
                   
                    <h3 className="text-center">我的文章</h3>
                    <div className="row pr-3 pl-3 pt-3">
                    <div className="col-lg-1">
                        <label className="" htmlFor="pre_title">類型</label>
                        <select id="pre_title" value={this.state.pre_title} onChange={this.handleChange} name="pre_title" className="form-control border-radius0">
                            <option>推薦</option>
                            <option>提問</option>
                            <option>討論</option>
                            <option>噓</option>
                        </select>
                    </div>
                    <div className="col-lg-5">
                        <label htmlFor="title" className="">標題</label>
                        <input type="text" value={this.state.title.substr(0,20)} onChange={this.handleChange} className="form-control border-radius0 " id="title" placeholder="標題"/>
                    </div>
                    
                    <div className="col-lg-2">
                        <label htmlFor="age" className="">年齡</label>
                        <input type="number" value={this.state.age} onChange={this.handleChange} className="form-control border-radius0" id="age" placeholder="25" />
                    </div>

                    <div className="col-lg-1">
                        <label className="" htmlFor="pre_title">性別</label>
                        <select id="gender" value={this.state.gender} onChange={this.handleChange} name="gender" className="form-control border-radius0" >
                            <option value="女性">女性</option>
                            <option value="男性">男性</option>
                        </select>
                    
                    </div>
                    
                    <div className="col-lg-3">
                        <label htmlFor="pro_type" className="">肌膚類型</label>
                        <select id="skin" value={this.state.skin} onChange={this.handleChange} name="skin" className="form-control border-radius0">
                            <option value="混合肌">混合肌</option>
                            <option value="乾性肌">乾性肌</option>
                            <option value="油性肌">油性肌</option>
                            <option value="熟齡肌">熟齡肌</option>
                        </select>
                    </div>

                    </div>
                    <div className="row pr-3 pl-3 pt-3">

                        <div className="col-lg-2">
                        <label htmlFor="pro_type" className="">商品類型</label>
                        <select id="pro_type" value={this.state.pro_type} onChange={this.handleChange} name="pro_type" className="form-control border-radius0">
                            <option value="化妝水">化妝水</option>
                            <option value="卸妝潔顏">卸妝潔顏</option>
                            <option value="精華液">精華液</option>
                            <option value="乳液">乳液</option>
                            <option value="乳霜">乳霜</option>
                            <option value="眼霜">眼霜</option>
                            <option value="保養油">保養油</option>
                            <option value="防曬">防曬</option>
                            <option value="精油">精油</option>
                        </select>
                        </div>

                        <div className="col-lg-4">
                            <label htmlFor="pro_name">商品名稱</label>
                            <input type="text" value={this.state.pro_name} onChange={this.handleChange} className="form-control border-radius0" id="pro_name" placeholder="商品名稱" />
                        </div>

                        <div className="col-lg-2">
                        <label htmlFor="tag">標籤</label>
                        <select id="tag" value={this.state.tag} onChange={this.handleChange} name="tag" className="form-control border-radius0">
                            <option value="水潤粉嫩">水潤粉嫩</option>
                            <option value="深層清潔">深層清潔</option>
                            <option value="緊緻毛孔">緊緻毛孔</option>
                            <option value="提亮膚色">提亮膚色</option>
                            <option value="彈力澎潤">彈力澎潤</option>
                        </select>
                        </div>

                        <div className="col-lg-1">
                        <label htmlFor="star">星星</label>
                        <select id="star" value={this.state.star} onChange={this.handleChange} name="star" className="form-control border-radius0">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                        </div>

                        <div className="col-lg-3">
                            <label htmlFor="art_pic1">圖像1</label>
                            <input type="file" className="form-control" id="art_pic1" name="art_pic1" multiple onChange={this.img_onChange1} enctype="multipart/form-data" />
                        </div>
                    </div>

                    <div className="row p-4">
                    <div className="col-lg-12"></div>
                        <label htmlFor="text">內文</label>
                        <textarea value={this.state.text} onChange={this.handleChange} name="text" className="form-control border-radius0" id="text" rows="5"></textarea>
                    </div>
                    </div>

                    <button type="button" onClick={this.add} className="lilibtn r-btn ">新增</button>

                                    
                </form> 

            
            </React.Fragment>
        )
    }
}
export default Add;