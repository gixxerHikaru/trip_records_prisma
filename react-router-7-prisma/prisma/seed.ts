import { PrismaClient, Prisma } from "../app/generated/prisma/client.js";

const prisma = new PrismaClient();

const prefectureData: Prisma.PrefectureCreateInput[] = [
    { id: "hokkaido", name: "北海道", area: "北海道" },
    { id: "aomori", name: "青森県", area: "東北" },
    { id: "iwate", name: "岩手県", area: "東北" },
    { id: "miyagi", name: "宮城県", area: "東北" },
    { id: "akita", name: "秋田県", area: "東北" },
    { id: "yamagata", name: "山形県", area: "東北" },
    { id: "fukushima", name: "福島県", area: "東北" },
    { id: "ibaraki", name: "茨城県", area: "関東" },
    { id: "tochigi", name: "栃木県", area: "関東" },
    { id: "gunma", name: "群馬県", area: "関東" },
    { id: "saitama", name: "埼玉県", area: "関東" },
    { id: "chiba", name: "千葉県", area: "関東" },
    { id: "tokyo", name: "東京都", area: "関東" },
    { id: "kanagawa", name: "神奈川県", area: "関東" },
    { id: "niigata", name: "新潟県", area: "中部" },
    { id: "toyama", name: "富山県", area: "中部" },
    { id: "ishikawa", name: "石川県", area: "中部" },
    { id: "fukui", name: "福井県", area: "中部" },
    { id: "yamanashi", name: "山梨県", area: "中部" },
    { id: "nagano", name: "長野県", area: "中部" },
    { id: "gifu", name: "岐阜県", area: "中部" },
    { id: "shizuoka", name: "静岡県", area: "中部" },
    { id: "aichi", name: "愛知県", area: "中部" },
    { id: "mie", name: "三重県", area: "関西" },
    { id: "shiga", name: "滋賀県", area: "関西" },
    { id: "kyoto", name: "京都府", area: "関西" },
    { id: "osaka", name: "大阪府", area: "関西" },
    { id: "hyogo", name: "兵庫県", area: "関西" },
    { id: "nara", name: "奈良県", area: "関西" },
    { id: "wakayama", name: "和歌山県", area: "関西" },
    { id: "tottori", name: "鳥取県", area: "中国" },
    { id: "shimane", name: "島根県", area: "中国" },
    { id: "okayama", name: "岡山県", area: "中国" },
    { id: "hiroshima", name: "広島県", area: "中国" },
    { id: "yamaguchi", name: "山口県", area: "中国" },
    { id: "tokushima", name: "徳島県", area: "四国" },
    { id: "kagawa", name: "香川県", area: "四国" },
    { id: "ehime", name: "愛媛県", area: "四国" },
    { id: "kochi", name: "高知県", area: "四国" },
    { id: "fukuoka", name: "福岡県", area: "九州" },
    { id: "saga", name: "佐賀県", area: "九州" },
    { id: "nagasaki", name: "長崎県", area: "九州" },
    { id: "kumamoto", name: "熊本県", area: "九州" },
    { id: "oita", name: "大分県", area: "九州" },
    { id: "miyazaki", name: "宮崎県", area: "九州" },
    { id: "kagoshima", name: "鹿児島県", area: "九州" },
    { id: "okinawa", name: "沖縄県", area: "九州" },
];

export async function main() {
    for (const p of prefectureData) {
        await prisma.prefecture.create({ data: p });
    }
}

main();