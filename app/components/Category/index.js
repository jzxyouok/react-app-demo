import React from 'react'
import ReactSwipe from 'react-swipe'
import { Link } from 'react-router'
import './style.less'

class Category extends React.Component {
    /*
    轮播图需要用到一个第三方插件 https://github.com/voronianski/react-swipe 根据其文档要求需要安装插件，
    即`npm install react swipe-js-iso react-swipe --save`，这个插件的日常使用我已经验证过，大家可放心使用
    */
    constructor(props, context) {
        super(props, context);
        this.state = {
            index: 0
        }
    }
    render() {
        const opt = {
            auto: 2500,
            callback: function (index) {
                // 更新当前轮播图的index
                this.setState({index: index});
            }.bind(this)
        }

        return (
            <div id="home-category">
                <ReactSwipe swipeOptions={opt}>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            <Link to="/search/jingdian"><li className="float-left jingdian">景点</li></Link>
                            <Link to="/search/ktv"><li className="float-left ktv">KTV</li></Link>
                            <Link to="/search/gouwu"><li className="float-left gouwu">购物</li></Link>
                            <Link to="/search/shenghuofuwu"><li className="float-left shenghuofuwu">生活服务</li></Link>
                            <Link to="/search/jianshenyundong"><li className="float-left jianshenyundong">健身运动</li></Link>
                            <Link to="/search/meifa"><li className="float-left meifa">美发</li></Link>
                            <Link to="/search/qinzi"><li className="float-left qinzi">亲子</li></Link>
                            <Link to="/search/xiaochikuaican"><li className="float-left xiaochikuaican">小吃快餐</li></Link>
                            <Link to="/search/zizhucan"><li className="float-left zizhucan">自助餐</li></Link>
                            <Link to="/search/jiuba"><li className="float-left jiuba">酒吧</li></Link>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            <Link to="/search/ribencai"><li className="float-left ribencai">日本菜</li></Link>
                            <Link to="/search/spa"><li className="float-left SPA">SPA</li></Link>
                            <Link to="/search/jiehun"><li className="float-left jiehun">结婚</li></Link>
                            <Link to="/search/xuexipeixun"><li className="float-left xuexipeixun">学习培训</li></Link>
                            <Link to="/search/xican"><li className="float-left xican">西餐</li></Link>
                            <Link to="/search/huochejipiao"><li className="float-left huochejipiao">火车机票</li></Link>
                            <Link to="/search/shaokao"><li className="float-left shaokao">烧烤</li></Link>
                            <Link to="/search/jiazhuang"><li className="float-left jiazhuang">家装</li></Link>
                            <Link to="/search/chongwu"><li className="float-left chongwu">宠物</li></Link>
                            <Link to="/search/all"><li className="float-left quanbufenlei">全部分类</li></Link>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            <Link to="/search/ribencai"><li className="float-left ribencai">日本菜</li></Link>
                            <Link to="/search/spa"><li className="float-left SPA">SPA</li></Link>
                            <Link to="/search/jiehun"><li className="float-left jiehun">结婚</li></Link>
                            <Link to="/search/xuexipeixun"><li className="float-left xuexipeixun">学习培训</li></Link>
                            <Link to="/search/xican"><li className="float-left xican">西餐</li></Link>
                            <Link to="/search/huochejipiao"><li className="float-left huochejipiao">火车机票</li></Link>
                            <Link to="/search/shaokao"><li className="float-left shaokao">烧烤</li></Link>
                            <Link to="/search/jiazhuang"><li className="float-left jiazhuang">家装</li></Link>
                            <Link to="/search/chongwu"><li className="float-left chongwu">宠物</li></Link>
                            <Link to="/search/all"><li className="float-left quanbufenlei">全部分类</li></Link>
                        </ul>
                    </div>
                </ReactSwipe>
                <div className="index-container">
                    <ul>
                        <li className={this.state.index === 0 ? "selected" : ''}></li>
                        <li className={this.state.index === 1 ? "selected" : ''}></li>
                        <li className={this.state.index === 2 ? "selected" : ''}></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Category
