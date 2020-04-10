<template>
  <div class="home">
    <!-- nav导航 -->
    <div class="nav">
      <ul>
        <li v-for="(item,index) in navData" :key="index">
          <span v-text="item.desc"></span>
          <span v-text="item.num"></span>
          <span>|</span>
        </li>
      </ul>
    </div>

    <!-- user -->
    <div class="user">
      <div class="left">
        <span>联众游戏</span>
        |
        <span>竞拍中心</span>
      </div>
      <div class="right">
        <span @click="repayment()">
          补齐尾款
          <a href>(1)</a>
        </span>
        <span @click="myauctions()">我的拍卖</span>
        <span v-text="userId"></span>
        <span>
          <el-button type="danger" round size="mini">退出按钮</el-button>
        </span>
      </div>
    </div>

    <!-- 我的拍卖 -->
    <div class="myauctions" v-show="hidden1">
      <div class="goxi">恭喜000用户竞拍极品秀</div>
      <div class="detailed-information">
        <div class="imgbox">
          <img
            src="//hbimg.huabanimg.com/fec13d4b811769c76b0a818a6d6b171625224e6494598-cw3F4a_fw658"
            alt
          />
        </div>
        <div class="information">
          <ul>
            <li>倾城之恋(并列)</li>
            <li>
              起拍价格
              <span>3333</span>联众币
              <span>加价333联众币/次</span>
            </li>
            <li>
              竞拍时间
              <span>03月03日10:00-03月03日11:00</span>
            </li>
            <li>
              当前价格
              <span>9899</span>联众币
            </li>
            <li>
              保证金
              <span>333</span>联众币
              <span>确认缴纳</span>提醒：请提交保证金再出价，竞拍失败退还保证金
            </li>
          </ul>
          <div class="addminu">
            <div>
              <span>出价</span>
              <el-input-number
                v-model="num"
                controls-position="right"
                @change="handleChange"
                size="mini"
                :min="1"
              ></el-input-number>
            </div>
            <div>
              <el-button type="danger" size="mini">危险按钮</el-button>
              <span>提醒：如多次出价，以最后出价为准</span>
            </div>
          </div>
        </div>
      </div>
      <div class="xuanxiangka">
        <el-tabs type="border-card">
          <el-tab-pane label="竞拍记录">
            <button>刷新</button>
            <el-table :data="RecordsData" style="width: 100%">
              <el-table-column prop="user" label="出价用户" width="180"></el-table-column>
              <el-table-column prop="price" label="出价金额" width="180"></el-table-column>
              <el-table-column prop="date" label="出价时间"></el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="物品详情">
             <ul>
               <li>有效期：30天</li>
               <li>原会员价：399 现5折：199</li>
               <li>此产品仅可选择“个数”购买并列显示</li>
               <li>起步个数为4个及以上，</li>
             </ul>
          </el-tab-pane>
          <el-tab-pane label="竞拍规则">
            <ul>
              <li>参与竞买的竞买人请认真阅读以下竞买须知</li>
              <li>一、本《竞买须知》根据《中华人名共和国明事诉讼法》等相关法律规定所定制，竞买人应仔细阅读，了解本须知的全部内容。</li>
              <li>二、本次拍卖活动遵循“公开、公平、公正、诚实守信”的原则，拍卖活动具有法律效力。参加本次拍卖活动的当事人和竞买人必须遵守本须知的更像条款，并对自己的行为承担法律责任。</li>
              <li>三、拍卖标的以现状进行拍卖，去外观、结构、固定装修及内在质量以移交时的现状为准。房地产的实际面积已过户时登记机关确认为准。拍卖人对房屋外观、质量问题、结构调整、固定装修损坏、房地产面积等差异不做担保，有收买人自行承担相关责任，由此产生的问题也不影响拍卖成交结果及成交价格</li>
              <li>如有房屋结构与发证时发生改变的，有竞买人自行到相关职能部门了解能否办理过户手续，需修复的相关费用由收买人承担。</li>
              <li>四、【竞买人条件】凡具备完全民事行为能力的自然人和法人均可参加竞买、如参与竞买人未在拍卖平台上开设账户，可委托代理人（具备完全民事行为能力的自然人）进行，但须在竞买开始前向</li>
            </ul>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="chengjiaoxingxi">
        <div>成交信息</div>
        <el-table
    :data="TransactionData"
    style="width: 100%">
    <el-table-column
      prop="userId"
      label="用户ID"
      width="180">
    </el-table-column>
    <el-table-column
      prop="price"
      label="起拍价格"
      width="180">
    </el-table-column>
    <el-table-column
      prop="endprice"
      label="成交价格">
    </el-table-column>
  </el-table>
      </div>
    </div>

    <!-- 控制我的拍卖页面的显示和影藏 -->
    <div class="mypaimai" v-show="show1">
      <!-- banner轮播图 -->
      <div class="banner">
        <el-carousel trigger="click" height="200px">
          <el-carousel-item v-for="item in bannerData" :key="item.id">
            <img :src="item.img" alt />
          </el-carousel-item>
        </el-carousel>
      </div>

      <!-- 控制不叫尾款页面的显示与隐藏 -->
      <div v-if="show" class="weikuan">
        <!-- 竞拍次数  auctions -->
        <div class="auctions">
          <div class="left">
            <span>今日</span>
            <span>竞拍</span>
            <a href>恭喜000用户竞拍极品秀</a>
          </div>
          <div class="right">
            <div class="rightbottom">
              <span v-for="(item,index) in 9" :key="index">{{item}}</span>
              <span>0</span>
              今日竞拍
            </div>
          </div>
        </div>

        <!-- list -->
        <div class="list">
          <ul>
            <li v-for="(item,index) in listData" :key="index">
              <div>正在竞拍</div>
              <div class="imgbox">
                <img src="../assets/img/3.jpg" alt />
              </div>
              <div class="columdown">00:00:00</div>
              <div class="name">倾城之恋(并列)</div>
              <div class="pricetime">
                <div>
                  当前价格:
                  <span>9999</span> 联众币
                </div>
                <div>
                  起拍价格:
                  <span>999</span> 联众币
                </div>
                <div>
                  竞拍时间:
                  <span>3月3日10:00-3月3日11:00</span>
                </div>
              </div>
              <div class="skim">
                <div>
                  23545
                  <span>竞拍次数</span>
                </div>
                <div>
                  25
                  <span>浏览量</span>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <!-- pagination  分页 -->
        <div class="pagination">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="total"
            :page-size="size"
            :current-page="page"
            @current-change="currentHandle"
          ></el-pagination>
        </div>
      </div>
    </div>

    <!-- repy 补交尾款 -->
    <div class="repy" v-show="hidden">
      <el-tabs type="border-card">
        <el-tab-pane label="补交尾款">
          <el-table :data="repyData" style="width: 100%">
            <el-table-column prop="name" label="物品名称" width="180"></el-table-column>

            <el-table-column prop="article" label="物品ID"></el-table-column>

            <el-table-column prop="date" label="竞拍时间"></el-table-column>

            <el-table-column prop="bail" label="保证金"></el-table-column>

            <el-table-column prop="Effectiveness" label="成效金额"></el-table-column>

            <el-table-column prop="needprice" label="需要补款金额"></el-table-column>

            <el-table-column prop="enddate" label="补款结束日期"></el-table-column>

            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button size="mini" type="danger" @click="dialogVisible = true">确认补款</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="我的拍卖">
          <el-table :data="myauctionData" style="width: 100%">
            <el-table-column prop="name" label="物品名称" width="180"></el-table-column>
            <el-table-column prop="article" label="物品ID" width="180"></el-table-column>
            <el-table-column prop="date" label="竞拍时间"></el-table-column>
            <el-table-column prop="yiprice" label="已付价格"></el-table-column>
            <el-table-column prop="weiprice" label="未付价格"></el-table-column>
            <el-table-column prop="totalprice" label="总价价格"></el-table-column>
            <el-table-column prop="iszhong" label="是否中标"></el-table-column>
            <el-table-column prop="state" label="状态"></el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="我的领取">
          <el-table :data="mydrawData" style="width: 100%">
            <el-table-column prop="name" label="物品名称" width="180"></el-table-column>
            <el-table-column prop="article" label="物品ID" width="180"></el-table-column>
            <el-table-column prop="date" label="竞拍时间"></el-table-column>
            <el-table-column prop="bail" label="保证金"></el-table-column>
            <el-table-column prop=" Transactionprice" label="成交金额"></el-table-column>
            <el-table-column prop="repyprice" label="补款金额"></el-table-column>
            <el-table-column prop="repytime" label="补款时间"></el-table-column>
            <el-table-column prop="sure" label="领取确认"></el-table-column>
            <el-table-column prop="state" label="状态"></el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </div>

    <!-- dialog  弹出框 -->
    <div class="dialog">
      <el-dialog title="确认补款" :visible.sync="dialogVisible" width="30%" :modal="false">
        <div>当前联众币不足</div>
        <div>需要购买联众币后确认补款</div>
        <div>
          补交联众币
          <a href>999999</a>
          需要支付
          <a href>999999</a>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button type="danger" @click="dialogVisible = false">去支付</el-button>
        </span>
      </el-dialog>
    </div>

    <!-- 在线 on-line -->
    <div class="online">
      <div>
        <span class="el-icon-user"></span>
        在线提问
      </div>
      <div>
        <span class="el-icon-user"></span>在线充值
      </div>
      <div>
        <span class="el-icon-house"></span>联众论坛
      </div>
    </div>

    <!-- footer -->
    <div class="footer">
      <ul>
        <li>
          <a href>群众简介</a>|
          <a href>合作伙伴</a>|
          <a href>服务条款</a>|
          <a href>联系我们</a>|
          <a href>Investor Relations</a>|
          <a href>招聘信息</a>|
          <a href>友情链接</a>
        </li>
        <li>游戏中使用的游戏币、门票等群为游戏道具，不具有任何财产性功能，只限用户本人在游戏中使用。本公司对于用户所拥有的游戏币、门票不提供任何形式的官方回购、</li>
        <li>直接或变相兑换现金或实物等服务及相关功能。本公司严禁用户之间在游戏中及线下进行任何叫卖、转让游戏币等行为，如一经查出则永久封杀</li>
        <li>通用网址：联众世界</li>
        <li>网络文化经营许可证 京网文[2018]5376-415号 | 增值电信业务经营许可证 京B2-20181260号</li>
        <li>中国计算机信息网络国际联网单位编号：11010502017837|网站备案号：京ICP备09074391号-2 | 京ICP证080029号</li>
        <li>批准文号：科技与数字[2013]20号 | ISBN 978-7-89989-583-2 | 公安机关备案号：11010502017838</li>
        <li>北京联众网络股份有限公司版权所有2014 | 北京联通提供网络带宽</li>
        <li>公司名称：北京联众互联网络有限公司 | 公司邮箱：cs@staff.ourgame.com</li>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      navData: [
        { id: 1, desc: "群众币:", num: 999 },
        { id: 2, desc: "会员:", num: 999 },
        { id: 3, desc: "尤乐豆:", num: 999 },
        { id: 4, desc: "公告" },
        { id: 5, desc: "帮助" }
      ],
      userId: "y43844948",
      bannerData: [
        {
          id: 1,
          img:
            "//hbimg.huabanimg.com/fec13d4b811769c76b0a818a6d6b171625224e6494598-cw3F4a_fw658"
        },
        {
          id: 2,
          img:
            "//hbimg.huabanimg.com/089991409124ea1937eb7369f46c9b9cb617084359824-gMExQT_fw658"
        },
        {
          id: 3,
          img:
            "//hbimg.huabanimg.com/f3f0d8b3ab4db6e86fc80608f83b82f1eb7418ad107d73-ytUMvR_fw658"
        }
      ],
      repyData: [
        {
          name: "21周年秀",
          article: "0001",
          date: "2020-11-11 10:00",
          bail: 300000,
          Effectiveness: 100000,
          needprice: 1500000,
          enddate: "2020-11-11 10:00"
        },
        {
          name: "倾城之恋标志",
          article: "0002",
          date: "2020-11-11 10:00",
          bail: 300000,
          Effectiveness: 100000,
          needprice: 1500000,
          enddate: "2020-11-11 10:00"
        }
      ],
      myauctionData: [
        {
          name: "21周年秀",
          article: "0001",
          date: "2020-11-11 10:00",
          yiprice: 3000000,
          weiprice: 300000,
          totalprice: 15000000,
          iszhong: "是",
          state: "中标用户"
        },
        {
          name: "倾城之恋标志",
          article: "0002",
          date: "2020-11-11 10:00",
          yiprice: 3000000,
          weiprice: 300000,
          totalprice: 100000,
          iszhong: "否",
          state: "退换成功"
        }
      ],
      mydrawData: [
        {
          name: "21周年秀",
          article: "0001",
          date: "2020-11-11 10:00",
          bail: 300000,
          Transactionprice: 100000,
          repyprice: 15000000,
          repytime: "2020-11-11 10:00",
          sure: "确认",
          state: "已处理"
        },
        {
          name: "倾城之恋标志",
          article: "0002",
          date: "2020-11-11 10:00",
          bail: 30000,
          Transactionprice: 100000,
          repyprice: 100000,
          repytime: "2020-11-11 10:00",
          sure: "已确认",
          state: "未处理"
        }
      ],
      RecordsData: [{
          user: '司徒理清',
          price: 100000,
          date: '2020年3月26日 10:15:18'
        },
        {
          user: '司徒理清',
          price: 100000,
          date: '2020年3月26日 10:15:18'
        },
        {
          user: '司徒理清',
          price: 100000,
          date: '2020年3月26日 10:15:18'
        },
        {
          user: '司徒理清',
          price: 100000,
          date: '2020年3月26日 10:15:18'
        },
        {
          user: '司徒理清',
          price: 100000,
          date: '2020年3月26日 10:15:18'
        },
        {
          user: '司徒理清',
          price: 100000,
          date: '2020年3月26日 10:15:18'
        },
        ],
      TransactionData:[
        {
          userId:'司徒墨离',
          price:10000000,
          endprice:1000000000
        },
      ],
      dialogVisible: false,
      total: 30,
      size: 6,
      page: 1,
      listData: 6,
      show: true,
      show1: true,
      hidden: false,
      hidden1: false,
      num: 4520000,
      
    };
  },
  methods: {
    currentHandle(page) {
      this.page = page;
    },
    repayment() {
      this.show = !this.show;
      this.hidden = !this.hidden;
    },
    myauctions() {
      this.show1 = !this.show1;
      this.hidden1 = !this.hidden1;
    },
    handleChange(value) {
      console.log(value);
    }
  },
  components: {}
};
</script>
<style lang="less" scoped>
.home {
  height: 100%;
  > .nav {
    height: 18px;
    background: #909399;
    ul {
      width: 450px;
      height: 18px;
      line-height: 18px;
      display: flex;
      position: absolute;
      top: 0px;
      left: 720px;
      li {
        height: 18px;
        color: #fff;
        span {
          padding-left: 5px;
        }
      }
    }
  }
  > .user {
    height: 40px;
    font-size: 12px;
    background: #fff;
    line-height: 40px;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-around;
    .left {
      height: 100%;
      font-size: 16px;
      font-weight: normal;
    }
    .right {
      height: 100%;
      line-height: 40px;
      span {
        padding-left: 5px;
      }
    }
  }
  > .mypaimai {
    width: 680px;
    margin: auto;
    > .banner {
      height: 200px;
      // background: chartreuse;
      .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
      }

      .el-carousel__item:nth-child(2n + 1) {
        background-color: #d3dce6;
      }
      .el-carousel__item img {
        width: 100%;
        height: 100%;
      }
    }
    > .weikuan {
      width: 680px;
      margin: auto;
      > .auctions {
        width: 680px;
        height: 40px;
        line-height: 60px;
        border-bottom: 1px solid red;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        .left {
          flex: 1;
          height: 100%;
          span {
            font-size: 16px;
            font-weight: 600;
          }
          span:nth-child(1) {
            color: red;
          }
          a {
            color: red;
            padding-left: 5px;
          }
        }
        .right {
          height: 100%;
          .rightbottom {
            width: 100%;
            height: 15px;
            color: red;
            span {
              background: red;
              color: #fff;
              border-right: 1px solid #fff;
            }
          }
        }
      }
      > .list {
        padding-top: 15px;
        width: 680px;
        margin: 0 auto;
        height: 500px;
        box-sizing: border-box;
        > ul {
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          li {
            margin-top: 15px;
            width: 210px;
            height: 250px;
            box-sizing: border-box;
            > div:nth-child(1) {
              box-sizing: border-box;
              width: 60px;
              background: red;
            }
            > .imgbox {
              box-sizing: border-box;
              width: 100px;
              height: 110px;
              margin: 0 auto;
              > img {
                width: 100%;
                height: 100%;
              }
            }
            > .columdown {
              box-sizing: border-box;
              width: 100%;
              background: red;
              text-align: center;
              color: #fff;
            }
            > .name {
              text-align: center;
              font-weight: normal;
              font-size: 14px;
              padding: 5px 0 5px 0;
            }
            > .pricetime {
              padding-left: 5px;
              > div:nth-child(1) {
                width: 100%;
                > span {
                  color: red;
                  font-size: 14px;
                }
              }
              > div:nth-child(3) {
                > span {
                  font-weight: normal;
                }
              }
            }
            > .skim {
              height: 20px;
              width: 100%;
              border: 1px solid #333333;
              display: flex;
              justify-content: space-between;
              background: #ccc;
              > div {
                width: 50%;
                height: 100%;
                font-weight: 600;
                text-align: center;
                > span {
                  font-weight: normal;
                }
              }
              > div:nth-child(1) {
                border-right: 1px solid #fff;
              }
            }
          }
        }
      }
      > .pagination {
        padding-top: 64px;
        height: 20px;
        width: 100%;
        text-align: center;
      }
    }
  }
  > .online {
    width: 680px;
    height: 20px;
    margin: auto;
    padding-top: 40px;
    padding-bottom: 40px;
    display: flex;
    justify-content: space-between;
    > div {
      width: 200px;
      height: 20px;
      line-height: 20px;
      border: 1px solid #ccc;
      text-align: center;
      font-weight: 600;
      > span {
        color: red;
        padding-right: 2px;
        font-size: 15px;
      }
    }
  }
  > .footer {
    padding-top: 20px;
    width: 100%;
    background: #606266;
    margin: auto;
    > ul {
      width: 100%;
      height: 100%;
      padding: 15px 0 15px 0;
      > li {
        width: 100%;
        text-align: center;
        color: #fff;
        padding-top: 10px;
        > a {
          color: #fff;
        }
      }
    }
  }
  > .repy {
    width: 100%;
    margin: auto;
    margin-top: 20px;
    > .el-tabs--border-card {
      border: none;
      box-shadow: none;
    }
  }
  > .myauctions {
    margin: auto;
    width: 680px;
    > div:nth-child(1) {
      color: red;
    }
    > div:nth-child(2) {
      border: 1px solid #ccc;
      width: 680px;
      display: flex;
      > .imgbox {
        width: 200px;
        height: 220px;
        box-sizing: border-box;
        border-right: 1px solid #ccc;
        > img {
          width: 80%;
          height: 80%;
          margin: 20px 0 0 20px;
        }
      }
      > .information {
        box-sizing: border-box;
        flex: 1;
        height: 210px;
        > ul {
          width: 100%;
          height: 150px;
          box-sizing: border-box;
          border: 1px solid #ccc;
          > li {
            margin-top: 11px;
            margin-left: 10px;
          }
          > li:nth-child(1) {
            font-size: 13px;
            font-weight: 600;
          }
          > li:nth-child(2) {
            > span {
              padding-left: 5px;
            }
          }
          > li:nth-child(3) {
            > span {
              padding-left: 5px;
              font-weight: 600;
            }
          }
          > li:nth-child(4) {
            > span {
              padding-left: 5px;
              padding-right: 5px;
              color: red;
              font-size: 14px;
            }
          }
          > li:nth-child(5) {
            > span:nth-child(1) {
              padding-left: 10px;
            }
            > span:nth-child(2) {
              color: #fff;
              background: red;
            }
          }
        }
        > .addminu {
          width: 100%;
          height: 60px;
          box-sizing: border-box;
          > div {
            padding-top: 5px;
          }
          > div:nth-child(1) {
            > span {
              padding-left: 10px;
              padding-right: 10px;
            }
          }
          > div:nth-child(2) {
            padding-left: 45px;
            > .el-button--mini {
              padding: 7px 40px;
            }
            > span {
              padding-left: 5px;
            }
          }
        }
      }
    }
    > div:nth-child(3){
      margin-top: 20px;
      width: 100%;
      height: 700px;
      background: #fff;
     
      button{
        position: relative;
        left:552px;
        top: 0;
        
      }
      .el-table{
        padding-top: 20px;
        border: 1px solid #ccc;
      }
      ul:nth-child(1){
        li{
          padding-top: 20px;
        }
      }
      .el-tabs--border-card{
        border: none;
        box-shadow: none;
      }
    }
    >div:nth-child(4){
      width: 100%;
      border: 1px solid #ccc;
      margin-top: 15px;
      >div:nth-child(1){
        width: 100%;
        height: 80px;
        line-height: 80px;
        font-size: 15px;
        color: red;
        text-align: center;
        border-bottom: 1px solid #ccc;
      }
    }
  }
  //  >.el-dialog__wrapper{
  //   >.el-dialog{
  //      >.el-dialog__header{
  //        background: red;
  //        z-index: 999;
  //      }
  //      >.el-dialog__footer{
  //        text-align: center;
  //        z-index: 999;
  //      }
  //    }
  //  }
}
</style>
