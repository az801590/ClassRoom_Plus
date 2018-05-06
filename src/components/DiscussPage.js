import React, { Component } from "react";
import { List } from "antd";
import ReplyForm from "./ReplyForm/ReplyForm";

const data = [
  {
    title: "乳酪蛋糕做法",
    sender: "student id",
    content:
      "我不知道該回什麼，只好貼上乳酪蛋糕做法 自己做健康又好吃 準備所有材料。低筋麵粉過篩,奶油放入耐熱容器裡,隔水加熱使其融化。檸檬清洗乾淨外皮再刨絲及榨汁備用。先將奶油乳酪放置於室溫軟化。 製作餅皮,餅乾放入較厚的食物袋中,用桿麵棍敲碎。 製作餅皮,餅乾放入較厚的食物袋中,用桿麵棍敲碎。 將融化的奶油稍微冷卻後備用。 將奶油倒入餅乾袋裡,攪拌混合。將做法4.倒入模型中,用杯子或湯匙等工具輕壓,使其鋪滿模型底部,然後放入冰箱冷藏定型。冷藏約30分鐘以上即可。 將做法4.倒入模型中,用杯子或湯匙等工具輕壓,使其鋪滿模型底部,然後放入冰箱冷藏定型。冷藏約30分鐘以上即可。 將香草豆莢剖半,用刀片刮下香草豆莢籽。 將香草豆莢剖半,用刀片刮下香草豆莢籽。 製作起司蛋糕的麵糊,將軟化的奶油乳酪用橡皮刮刀攪拌,並加入酸奶及2/3的細砂糖攪拌混合。 均勻混合後,加入蛋黃攪拌至表面光滑(這時可改用打蛋攪拌器),接著加入鮮奶油同樣攪拌至表面光滑。 均勻混合後,加入蛋黃攪拌至表面光滑(這時可改用打蛋攪拌器),接著加入鮮奶油同樣攪拌至表面光滑。 加入香草籽及過篩的低筋麵粉一起攪拌均勻。 加入香草籽及過篩的低筋麵粉一起攪拌均勻。 再加入檸檬汁及檸檬皮(絲)混合。 使用一個乾淨的調理碗加入蛋白,剩餘的細砂糖分兩次倒入,並同時用電動攪拌器攪拌,打發至蛋白霜的尖端會往下低垂的柔軟程度。 使用一個乾淨的調理碗加入蛋白,剩餘的細砂糖分兩次倒入,並同時用電動攪拌器攪拌,打發至蛋白霜的尖端會往下低垂的柔軟程度。 加入一半的蛋白霜至起司蛋糕糊中攪拌均勻。再將起司蛋糕糊全部倒回剩下的蛋白霜裡攪拌均勻,動作快速而輕巧。 加入一半的蛋白霜至起司蛋糕糊中攪拌均勻。再將起司蛋糕糊全部倒回剩下的蛋白霜裡攪拌均勻,動作快速而輕巧。 在模型底部包上錫箔紙,(避免隔水加熱時水份會流進模型裡)接著倒入麵糊,用橡皮刮刀將麵糊表面刮平整。 在模型底部包上錫箔紙,(避免隔水加熱時水份會流進模型裡)接著倒入麵糊,用橡皮刮刀將麵糊表面刮平整。 烤箱先預熱170度c備用。烤模放入大烤盤裡,注入約2cm高度的熱水,放進烤箱以170度c烘烤40分鐘,接著再用160度c繼續烘烤10-15分鐘。搖動模型時,蛋糕表面會像布丁般緩緩搖動的半熟狀態,即代表完成。請依各家烤箱的不同,烘烤時間可做調整。 烤箱先預熱170度c備用。烤模放入大烤盤"
  },
  {
    title: "Title 2",
    sender: "student id",
    content: "content"
  },
  {
    title: "Title 3",
    sender: "student id",
    content: "content"
  },
  {
    title: "Title 4",
    sender: "student id",
    content: "content"
  }
];

class DiscussPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      reply: ""
    };
  }
  render() {
    return (
      <div class="discuss">
        <List
          footer={
            <div class="reply">
              <ReplyForm />
            </div>
          }
          bordered
          itemLayout="vertical"
          size="large"
          dataSource={data}
          renderItem={item => (
            <List.Item key={item.title}>
              <List.Item.Meta title={item.title} description={item.sender} />
              {item.content}
            </List.Item>
          )}
        />
      </div>
    );
  }
}

export default DiscussPage;