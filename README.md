![CI](https://github.com/mason478/MHR-DmgCal/actions/workflows/node.js.yml/badge.svg)

# 怪物猎人：崛起/曙光 伤害计算器

based on [Vue.js](https://vuejs.org/) and [ElementUI](https://element.eleme.io/), inspired by [MHWIBDmgCalculator](https://github.com/dzxrly/MHWIBDmgCalculator)

## 特性

- 收录绝大多武器的动作值，无需手动查找动作值表（可自定义）
- 收录各种怪物部位肉质，无需手动查找肉质表（可自定义）
- 支持物品、技能的叠加计算

## 使用界面

## 在线页面

## 本地部署

1. npm

   ```
   npm install
   npm run dev
   ```

2. docker （推荐）

   ```
   docker run build -t dmg-calc .
   docker run -p 80:80 dmg-calc
   ```

## 参考资料

- https://hyperwiki.jp/mhr/
- https://www.monsterhunter.com/rise/en/weapon/
- https://ngabbs.com/read.php?tid=32574416&rand=388
- https://monsterhunter.fandom.com/wiki/MHRise:_Monsters#Large_Monsters
