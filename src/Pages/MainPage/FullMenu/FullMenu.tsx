import React from 'react'
import { Col, Container, Modal, Row } from 'react-bootstrap'
import Category from '../../../Interfaces/Category'
import './FullMenu.scss'

interface FullMenuProps {}

interface FullMenuState {
  categories: Category[]
  modal: boolean
  modalImg: string
}

class FullMenu extends React.Component<FullMenuProps, FullMenuState> {
  constructor(props: FullMenuProps) {
    super(props)
    this.state = {
      categories: [
        {
          id: Math.random(),
          name: 'Шашлык',
          menuGroup: '',
          images: 'kebab.png',
          tags: 'kebab',
          products: [
            {
              id: Math.random(),
              name: 'из свинины - шейная вырезка',
              price: 120.0,
              weight: '1/100',
              ingredients: '',
              image: 'свинина.png',
            },
            {
              id: Math.random(),
              name: 'из свинины - спинная вырезка',
              price: 80.0,
              weight: '1/100',
              ingredients: '',
              image: 'свинина.png',
            },
            {
              id: Math.random(),
              name: 'из баранины - мякоть на кости',
              price: 150.0,
              weight: '1/100',
              ingredients: '',
              image: 'баранина.png',
            },
            // {
            //   id: Math.random(),
            //   name: 'из говядины',
            //   price: 120.0,
            //   weight: '1/100',
            //   ingredients: '',
            // },
            {
              id: Math.random(),
              name: 'ханский шашлык',
              price: 60.0,
              weight: '1/100',
              ingredients: 'Печень, сердце, бараньи яйца',
              image: 'ханский.png',
            },
            {
              id: Math.random(),
              name: 'из куриного филе',
              price: 70.0,
              weight: '1/100',
              ingredients: '',
              image: 'курфиле.png',
            },
            {
              id: Math.random(),
              name: 'из куриных крыльев',
              price: 60.0,
              weight: '1/100',
              ingredients: '',
              image: 'куркрылья.png',
            },
            {
              id: Math.random(),
              name: 'из сёмги',
              price: 190.0,
              weight: '1/100',
              ingredients: '',
              image: 'шашлык из семги.png',
            },
            {
              id: Math.random(),
              name: 'из креветок',
              price: 190.0,
              weight: '1/100',
              ingredients: '',
              image: 'креветки.png',
            },
            // {
            //   id: Math.random(),
            //   name: 'из рыбы (сазан, сом, судак)',
            //   price: 150.0,
            //   weight: '1/100',
            //   ingredients: '',
            // },
            // {
            //   id: Math.random(),
            //   name: 'креветки',
            //   price: 50.0,
            //   weight: '1шт',
            //   ingredients: '',
            // },
            {
              id: Math.random(),
              name: 'Соус красный',
              price: 60.0,
              weight: '1/100',
              ingredients: '',
              image: 'соус красный.png',
            },
            {
              id: Math.random(),
              name: 'Соус белый',
              price: 60.0,
              weight: '1/100',
              ingredients: '',
              image: 'соус белый.png',
            },
            {
              id: Math.random(),
              name: 'Соус Чили',
              price: 60.0,
              weight: '1/100',
              ingredients: '',
              image: 'соус красный.png',
            },
          ],
        },
        {
          id: Math.random(),
          name: 'Люля-кебаб',
          menuGroup: '',
          images: 'lulya.png',
          tags: 'lulya',
          products: [
            {
              id: Math.random(),
              name: 'из баранины',
              price: 110.0,
              weight: '1/100',
              ingredients: '',
              image: 'баран.png',
            },
            {
              id: Math.random(),
              name: 'из говядины',
              price: 90.0,
              weight: '1/100',
              ingredients: '',
              image: 'говядина.png',
            },
            {
              id: Math.random(),
              name: 'из курицы',
              price: 80.0,
              weight: '1/100',
              ingredients: '',
              image: 'кур.png',
            },
            {
              id: Math.random(),
              name: 'из свинины',
              price: 100.0,
              weight: '1/100',
              ingredients: '',
              image: 'свинина-1.png',
            },
            // {
            //   id: Math.random(),
            //   name: 'из индейки',
            //   price: 110.0,
            //   weight: '1/100',
            //   ingredients: '',
            // },
            // {
            //   id: Math.random(),
            //   name: 'из рыбы (сазан)',
            //   price: 100.0,
            //   weight: '1/100',
            //   ingredients: '',
            // },
            // {
            //   id: Math.random(),
            //   name: 'из картошки',
            //   price: 150.0,
            //   weight: '1 шампур',
            //   ingredients: '',
            // },
            {
              id: Math.random(),
              name: 'Соус красный',
              price: 60.0,
              weight: '1/100',
              ingredients: '',
              image: 'соус красный.png',
            },
            {
              id: Math.random(),
              name: 'Соус белый',
              price: 60.0,
              weight: '1/100',
              ingredients: '',
              image: 'соус белый.png',
            },
            {
              id: Math.random(),
              name: 'Соус Чили',
              price: 60.0,
              weight: '1/100',
              ingredients: '',
              image: 'соус красный.png',
            },
          ],
        },
        {
          id: Math.random(),
          name: 'Овощи',
          menuGroup: '',
          images: 'veget.png',
          tags: 'vegetables',
          products: [
            {
              id: Math.random(),
              name: 'запеченные грибы',
              price: 80.0,
              weight: '1/100',
              ingredients: '',
              image: 'грибы.png',
            },
            {
              id: Math.random(),
              name: 'запеченный картофель',
              price: 90.0,
              weight: '1 шампур',
              ingredients: '',
              image: 'картоха.png',
            },
            {
              id: Math.random(),
              name: 'овощи на мангале',
              price: 50.0,
              weight: '1/100',
              ingredients: '',
              image: 'овощи.png',
            },
            {
              id: Math.random(),
              name: 'Соус красный',
              price: 60.0,
              weight: '1/100',
              ingredients: '',
              image: 'соус красный.png',
            },
            {
              id: Math.random(),
              name: 'Соус белый',
              price: 60.0,
              weight: '1/100',
              ingredients: '',
              image: 'соус белый.png',
            },
            {
              id: Math.random(),
              name: 'Соус Чили',
              price: 60.0,
              weight: '1/100',
              ingredients: '',
              image: 'соус красный.png',
            },
          ],
        },
        // {
        //   id: Math.random(),
        //   name: 'Первые блюда',
        //   menuGroup: '',
        //   images: 'first.png',
        //   tags: 'firstdish',
        //   products: [
        //     {
        //       id: Math.random(),
        //       name: 'Хашлама',
        //       price: 160.0,
        //       weight: '1/300',
        //       ingredients: 'Баранина или говядина, картофель, лук, перец, морковь, помидоры, бульон, специи',
        //       image: 'хашлама.png',
        //     },

        //     {
        //       id: Math.random(),
        //       name: 'Соус красный',
        //       price: 60.0,
        //       weight: '1/100',
        //       ingredients: '',
        //       image: '',
        //     },
        //     {
        //       id: Math.random(),
        //       name: 'Соус белый',
        //       price: 60.0,
        //       weight: '1/100',
        //       ingredients: '',
        //       image: '',
        //     },
        //   ],
        // },
        {
          id: Math.random(),
          name: 'Вторые блюда',
          images: 'second.png',
          menuGroup: '',
          tags: 'seconddish',
          products: [
            {
              id: Math.random(),
              name: 'Жульен из говяжьего языка',
              price: 220.0,
              weight: '1/200',
              ingredients: 'Говяжий язык, грибы, лук, сыр, сметана',
              image: 'жульен.png',
            },
            {
              id: Math.random(),
              name: 'Жульен с курицей и грибами',
              price: 220.0,
              weight: '1/200',
              ingredients: 'Куриное филе, грибы, лук, сыр, сметана',
              image: 'жульен.png',
            },
            {
              id: Math.random(),
              name: 'Говядина в горшочке',
              price: 230.0,
              weight: '1/300',
              ingredients: 'Мясо, картошка, бульон, зелень, грибы, болгарский перец, лук',
              image: 'горшок.png',
            },
            {
              id: Math.random(),
              name: 'Свинина в горшочке',
              price: 220.0,
              weight: '1/300',
              ingredients: 'Мясо, картошка, бульон, зелень, грибы, болгарский перец, лук',
              image: 'горшок.png',
            },
            {
              id: Math.random(),
              name: 'Баранина в горшочке',
              price: 240.0,
              weight: '1/300',
              ingredients: 'Мясо, картошка, бульон, зелень, грибы, болгарский перец, лук',
              image: 'горшок.png',
            },
            {
              id: Math.random(),
              name: 'Курица в горшочке',
              price: 220.0,
              weight: '1/300',
              ingredients: 'Курица, картошка, бульон, зелень, грибы, болгарский перец, лук',
              image: 'горшок.png',
            },
            // {
            //   id: Math.random(),
            //   name: 'Котлеты из говядины',
            //   price: 70.0,
            //   weight: '1/100',
            //   ingredients: '',
            //   image: 'котлеты.png',
            // },
            // {
            //   id: Math.random(),
            //   name: 'Гуляш из говядины',
            //   price: 65.0,
            //   weight: '1/100',
            //   ingredients: '',
            //   image: 'гуляш.png',
            // },
            {
              id: Math.random(),
              name: 'Жаркое по домашнему (из говядины)',
              price: 200.0,
              weight: '1/200',
              ingredients: 'Мясо, лук, перец, помидоры, картофель',
              image: 'жаркое.png',
            },
            {
              id: Math.random(),
              name: 'Жаркое по домашнему (из свинины)',
              price: 200.0,
              weight: '1/200',
              ingredients: 'Мясо, лук, перец, помидоры, картофель',
              image: 'жаркое.png',
            },
            {
              id: Math.random(),
              name: 'Жаркое по домашнему (из баранины)',
              price: 220.0,
              weight: '1/200',
              ingredients: 'Мясо, лук, перец, помидоры, картофель',
              image: 'жаркое.png',
            },
            {
              id: Math.random(),
              name: 'Мясо "по-французски"',
              price: 250.0,
              weight: '1/220',
              ingredients: 'Свинина, лук, грибы, помидоры, сыр, майонез',
              image: 'мясопофр.png',
            },
            {
              id: Math.random(),
              name: 'Куриная грудка "по-французски"',
              price: 170.0,
              weight: '1/200',
              ingredients: 'Куриная грудка, овощи, сыр, майонез, перец болгарский',
              image: 'грудкаплфо.png',
            },
            // {
            //   id: Math.random(),
            //   name: 'Жульен с курицей и грибами',
            //   price: 150.0,
            //   weight: '1/100',
            //   ingredients: '',
            //   image: 'жульен.png',
            // },
            {
              id: Math.random(),
              name: 'Соус красный',
              price: 60.0,
              weight: '1/100',
              ingredients: '',
              image: 'соус красный.png',
            },
            {
              id: Math.random(),
              name: 'Соус белый',
              price: 60.0,
              weight: '1/100',
              ingredients: '',
              image: 'соус белый.png',
            },
            {
              id: Math.random(),
              name: 'Соус Чили',
              price: 60.0,
              weight: '1/100',
              ingredients: '',
              image: 'соус красный.png',
            },
          ],
        },
        {
          id: Math.random(),
          name: 'Салаты',
          menuGroup: '',
          images: 'salats.png',
          tags: 'salats',
          products: [
            {
              id: Math.random(),
              name: 'Шашлычный мир',
              price: 250.0,
              weight: '1/200',
              ingredients: 'Говядина отварная, чернослив, огурец, сыр, грецкий орех, гранат, майонез, зелень',
              image: 'шашл мир.png',
            },
            {
              id: Math.random(),
              name: 'Греческий',
              price: 200.0,
              weight: '1/200',
              ingredients:
                'Лист салата, помидоры, огурцы, перец болгарский, оливки, маслины, сыр Фетакса, соус, кунжут, лук',
              image: 'греческий.png',
            },
            {
              id: Math.random(),
              name: 'Южный',
              price: 160.0,
              weight: '1/200',
              ingredients: 'Помидоры, огурцы, лук, зелень, сметана, майонез или подсолнечное масло',
              image: 'южный.png',
            },
            // {
            //   id: Math.random(),
            //   name: 'Шамбери',
            //   price: 230.0,
            //   weight: '1/200',
            //   ingredients: 'Язык отварной, корнишоны маринованные, яйцо куриное, грецкий орех, соевый соус',
            // },
            // {
            //   id: Math.random(),
            //   name: 'Морская экзотика',
            //   price: 250.0,
            //   weight: '1/200',
            //   ingredients: 'Морской коктейль, яйцо куриное, огурцы, лимон, майонез',
            // },
            {
              id: Math.random(),
              name: 'Цезарь из курицы',
              price: 200.0,
              weight: '1/200',
              ingredients: 'Курица, сухари, лист салата, черри, перепелиные яйца, сыр, соус',
              image: 'цезарьизкурицы.png',
            },
            {
              id: Math.random(),
              name: 'Цезарь с семгой',
              price: 250.0,
              weight: '1/200',
              ingredients: 'Семга, сухари, лист салата, черри, перепелиные яйца, сыр, соус',
              image: 'цезарьсемга.png',
            },
            {
              id: Math.random(),
              name: 'Цезарь с креветками',
              price: 220.0,
              weight: '1/200',
              ingredients: 'Креветки королевские, сухари, лист салата, черри, перепелиные яйца, сыр, соус',
              image: 'цезарьскреветками.png',
            },
            // {
            //   id: Math.random(),
            //   name: 'Черные глаза',
            //   price: 200.0,
            //   weight: '1/200',
            //   ingredients: 'Говядина отварная, чернослив, сыр, грецкий орех, гранат, майонез',
            //   image: 'черныеглаза.png',
            // },
            {
              id: Math.random(),
              name: 'Дамский каприз',
              price: 200.0,
              weight: '1/220',
              ingredients:
                'Куриная грудка, жареные шампиньоны, консервированный ананас, варенное яйцо, майонез, болгарский перец',
              image: 'дамскийкаприз.png',
            },
            {
              id: Math.random(),
              name: 'Принцесса',
              price: 200.0,
              weight: '1/200',
              ingredients: 'Капуста пекинская, огурцы, креветки очищенные, клюква, соус',
              image: 'принцесса.png',
            },
            {
              id: Math.random(),
              name: 'Фаворит',
              price: 180.0,
              weight: '1/200',
              ingredients: 'Куриная грудка, огурцы, сыр, майонез, яйцо куриное, украшается черри',
              image: 'фаворит.png',
            },
            {
              id: Math.random(),
              name: 'Пестрый',
              price: 180.0,
              weight: '1/200',
              ingredients: 'Ветчина из индейки, сыр, перец болгарский, помидоры, оливки, маслины, оливковое масло',
              image: 'пестрый.png',
            },
            {
              id: Math.random(),
              name: 'Любимый',
              price: 250.0,
              weight: '1/200',
              ingredients: 'Куриная грудка, жареные шампиньоны, огурец, яйцо, сыр, майонез, зеленый лук',
              image: '',
            },
            {
              id: Math.random(),
              name: 'Теплый',
              price: 300.0,
              weight: '1/250',
              ingredients: 'Говядина, перец болгарский, баклажан, соус, кунжут, лук',
              image: '',
            },
            {
              id: Math.random(),
              name: 'Салат из говяжьего языка с овощами',
              price: 230.0,
              weight: '1/200',
              ingredients:
                'Говяжий язык, огурец, помидоры, лист салата, красный лук, жареные грибы, майонез, украшается яйцом',
              image: 'салат из говяжьего языка с овощами.png',
            },
            {
              id: Math.random(),
              name: 'Салат  из  с/с  лосося  с  овощами',
              price: 290.0,
              weight: '1/200',
              ingredients:
                'Пекинская капуста, перец болгарский, красный лук, черри, огурец, с/с лосось, соевый соус, оливковое масло, кунжут',
              image: 'салат из с.с. лосося с овощами.png',
            },
            {
              id: Math.random(),
              name: 'Салат  из  копченой  курицы  с  овощами',
              price: 230.0,
              weight: '1/200',
              ingredients:
                'Копченая курица, помидоры. огурец, болгарский перец, лук красный, лист салата, майонез, украшается яйцом',
              image: 'салат из копченой курицы с овощами.png',
            },
            {
              id: Math.random(),
              name: 'Восхитительный  микс',
              price: 310.0,
              weight: '1/200',
              ingredients: 'Лист салата, филе с/с семги, сыр фета, черри, маслины, сок лимона, оливковое масло, кунжут',
              image: 'восхитительный микс.png',
            },
          ],
        },
        {
          id: Math.random(),
          name: 'Гарниры',
          menuGroup: '',
          images: 'garnirs.png',
          tags: 'garnirs',
          products: [
            {
              id: Math.random(),
              name: 'Картофель фри',
              price: 115.0,
              weight: '1/150',
              ingredients: '',
              image: 'фри.png',
            },
            {
              id: Math.random(),
              name: 'Картофель отварной',
              price: 50.0,
              weight: '1/200',
              ingredients: '',
              image: 'картофель.png',
            },
            {
              id: Math.random(),
              name: 'Картофель по-деревенски',
              price: 115.0,
              weight: '1/200',
              ingredients: '',
              image: 'деревня.png',
            },
            {
              id: Math.random(),
              name: 'Тарелка с наггетсами и картофелем фри',
              price: 230.0,
              weight: '1/300',
              ingredients: 'Наггетсы - 150гр. Картофель фри - 150гр.',
              image: 'наггетсы.png',
            },
            {
              id: Math.random(),
              name: 'Тарелка с крылышками и картофелем фри',
              price: 270.0,
              weight: '1/300',
              ingredients: 'Куриные крылышки - 150гр. Картофель фри - 150гр.',
              image: 'крылья.png',
            },
            {
              id: Math.random(),
              name: 'Брокколи, жареные в сливочном соусе',
              price: 120.0,
              weight: '1/200',
              ingredients: '',
              image: 'БРОКЖАР.png',
            },
            {
              id: Math.random(),
              name: 'Пюре',
              price: 70.0,
              weight: '1/200',
              ingredients: '',
              image: 'пюре.png',
            },
            {
              id: Math.random(),
              name: 'Грибы жареные со сметаной',
              price: 180.0,
              weight: '1/200',
              ingredients: '',
              image: 'грибыжаренные.png',
            },
            {
              id: Math.random(),
              name: 'Соус красный',
              price: 60.0,
              weight: '1/100',
              ingredients: '',
              image: 'соус красный.png',
            },
            {
              id: Math.random(),
              name: 'Соус белый',
              price: 60.0,
              weight: '1/100',
              ingredients: '',
              image: 'соус белый.png',
            },
            {
              id: Math.random(),
              name: 'Соус Чили',
              price: 60.0,
              weight: '1/100',
              ingredients: '',
              image: 'соус красный.png',
            },
          ],
        },
        {
          id: Math.random(),
          name: 'Закуски',
          menuGroup: '',
          images: 'zakuson.png',
          tags: 'snacks',
          products: [
            {
              id: Math.random(),
              name: 'Овощное ассорти',
              price: 200.0,
              weight: '1/200',
              ingredients: 'Помидоры, огурцы, перец болгарский, зелень, оливки, маслины',
              image: 'ассорти.png',
            },
            {
              id: Math.random(),
              name: 'Брынза с зеленью',
              price: 200.0,
              weight: '1/170',
              ingredients: 'Сыр брынза, укроп, петрушка, кинза, зеленый лук',
              image: 'брынза.png',
            },
            {
              id: Math.random(),
              name: 'Помидоры пикантные',
              price: 160.0,
              weight: '1/250',
              ingredients: 'Помидоры, соус, сыр, оливки, маслины, зелень',
              image: 'помидоры.png',
            },
            {
              id: Math.random(),
              name: 'Мясная нарезка',
              price: 270.0,
              weight: '1/350',
              ingredients: 'Колбаса Салями, куриная грудка, говяжий язык, куриный рулет, горчица',
              image: 'мясная.png',
            },
            {
              id: Math.random(),
              name: 'Сырная нарезка',
              price: 250.0,
              weight: '1/220',
              ingredients: 'Мраморный, гауда, маасдам, пармезан, виноград',
              image: 'сырная.png',
            },
            // {
            //   id: Math.random(),
            //   name: 'Рыбная нарезка',
            //   price: 280.0,
            //   weight: '1/300',
            //   ingredients: 'Семга, балык',
            //   image: 'kebab.png',
            // },
            // {
            //   id: Math.random(),
            //   name: 'Язык говяжий',
            //   price: 270.0,
            //   weight: '1/200',
            //   ingredients: 'Язык, грецкий орех, сметана',
            //   image: 'kebab.png',
            // },
            {
              id: Math.random(),
              name: 'Грибное лукошко',
              price: 180.0,
              weight: '1/200',
              ingredients: 'Грибы маринованные, лук зеленый, зелень',
              image: 'лукошко.png',
            },
            {
              id: Math.random(),
              name: 'Соленья "по-деревенски"',
              price: 200.0,
              weight: '1/200',
              ingredients:
                'Соленые огурцы, помидоры, чеснок, черемша, капуста, морковь, цветная капуста, острый перец, стручковая фасоль',
              image: 'соленья.png',
            },
            {
              id: Math.random(),
              name: 'Селедка "по-астрахански"',
              price: 200.0,
              weight: '1/250',
              ingredients: 'Картошка, селедка, зеленый горошек, лук, лимон',
              image: 'сельдь.png',
            },
            // {
            //   id: Math.random(),
            //   name: 'Сырные трубочки',
            //   price: 120.0,
            //   weight: '1/100',
            //   ingredients: '',
            //   image: '',
            // },
            {
              id: Math.random(),
              name: 'Фруктовое ассорти',
              price: 270.0,
              weight: '1/450',
              ingredients: 'Яблоко, виноград, банан, апельсин, киви',
              image: 'фрукт.png',
            },
            {
              id: Math.random(),
              name: 'Шаурма из свинины',
              price: 140.0,
              weight: '1шт',
              ingredients: '',
              image: 'шаурма.png',
            },
            {
              id: Math.random(),
              name: 'Шаурма из курицы',
              price: 130.0,
              weight: '1шт',
              ingredients: '',
              image: 'шаурма.png',
            },
            {
              id: Math.random(),
              name: 'Шаурма из говядины',
              price: 140.0,
              weight: '1шт',
              ingredients: '',
              image: 'шаурма.png',
            },
            {
              id: Math.random(),
              name: 'Шаурма из баранины',
              price: 150.0,
              weight: '1шт',
              ingredients: '',
              image: 'шаурма.png',
            },
            {
              id: Math.random(),
              name: 'Лаваш тонкий',
              price: 30.0,
              weight: '1шт',
              ingredients: '',
              image: 'Лаваш.png',
            },
            {
              id: Math.random(),
              name: 'Лепешка',
              price: 50.0,
              weight: '1шт',
              ingredients: 'Тандырная узбекская, и армянский матнакаш',
              image: 'Лепешка.png',
            },
            {
              id: Math.random(),
              name: 'Лимон',
              price: 70.0,
              weight: '1/100',
              ingredients: '',
              image: 'Лимон.png',
            },
            {
              id: Math.random(),
              name: 'Маслины',
              price: 130.0,
              weight: '1/100',
              ingredients: '',
              image: 'Маслины.png',
            },
            {
              id: Math.random(),
              name: 'Оливки',
              price: 120.0,
              weight: '1/100',
              ingredients: '',
              image: 'Оливки.png',
            },
            {
              id: Math.random(),
              name: 'Соус красный',
              price: 60.0,
              weight: '1/100',
              ingredients: '',
              image: 'соус красный.png',
            },
            {
              id: Math.random(),
              name: 'Соус белый',
              price: 60.0,
              weight: '1/100',
              ingredients: '',
              image: 'соус белый.png',
            },
            {
              id: Math.random(),
              name: 'Соус Чили',
              price: 60.0,
              weight: '1/100',
              ingredients: '',
              image: 'соус красный.png',
            },
          ],
        },
        {
          id: Math.random(),
          name: 'Напитки',
          menuGroup: '',
          images: 'drink.png',
          tags: 'drinks',
          products: [
            {
              id: Math.random(),
              name: 'Соки натуральные',
              price: 135.0,
              weight: '1л',
              ingredients: 'Яблоко, апельсин, мультифрукт, вишня, томат',
              image: 'drink.png',
            },
            {
              id: Math.random(),
              name: 'Минеральная вода "Рычал Су"',
              price: 75.0,
              weight: '0,5л',
              ingredients: '',
              image: 'рыч алсу.png',
            },
            {
              id: Math.random(),
              name: 'Лимонад (Сан-Славия)',
              price: 80.0,
              weight: '0,5л',
              ingredients: 'Груша, апельсин, мохито, тархун',
              image: 'сан славия.png',
            },
            {
              id: Math.random(),
              name: 'Кубай (без газа)',
              price: 50.0,
              weight: '0,5л',
              ingredients: '',
              image: 'кубай.png',
            },
            // {
            //   id: Math.random(),
            //   name: 'BonAqua (без газа)',
            //   price: 70.0,
            //   weight: '0,5л',
            //   ingredients: '',
            //   image: '',
            // },
            // {
            //   id: Math.random(),
            //   name: 'Coca-Cola (стекло)',
            //   price: 75.0,
            //   weight: '0,25л',
            //   ingredients: '',
            //   image: '',
            // },
            {
              id: Math.random(),
              name: 'Coca-Cola',
              price: 80.0,
              weight: '0,5л',
              ingredients: '',
              image: 'кола 0,5.png',
            },
            {
              id: Math.random(),
              name: 'Coca-Cola',
              price: 160.0,
              weight: '1л',
              ingredients: '',
              image: 'кола 0,5.png',
            },
            // {
            //   id: Math.random(),
            //   name: 'Coca-Cola Energy',
            //   price: 120.0,
            //   weight: '0.5л',
            //   ingredients: '',
            //   image: 'cola energy.png',
            // },
            {
              id: Math.random(),
              name: 'Энергетик Drive',
              price: 60.0,
              weight: '0,5л',
              ingredients: '',
              image: 'драйв.png',
            },
            {
              id: Math.random(),
              name: 'Энергетик Burn',
              price: 160.0,
              weight: '0,5л',
              ingredients: '',
              image: 'берн.png',
            },
            {
              id: Math.random(),
              name: 'Энергетик Adrenaline',
              price: 80.0,
              weight: '0,25л',
              ingredients: '',
              image: 'адреналин.png',
            },
            {
              id: Math.random(),
              name: 'Энергетик Adrenaline',
              price: 160.0,
              weight: '0,5л',
              ingredients: '',
              image: 'адреналин.png',
            },
            // {
            //   id: Math.random(),
            //   name: 'Кофе (расстворимый)',
            //   price: 30.0,
            //   weight: '1 чашка',
            //   ingredients: '',
            // },
            // {
            //   id: Math.random(),
            //   name: 'Кофе (черный)',
            //   price: 50.0,
            //   weight: '1 чашка',
            //   ingredients: '',
            // },
          ],
        },
        // {
        //   id: Math.random(),
        //   name: 'К чаю',
        //   menuGroup: '',
        //   images: '',
        //   tags: 'tea',
        //   products: [
        //     {
        //       id: Math.random(),
        //       name: 'Варенье',
        //       price: 70.0,
        //       weight: '100г',
        //       ingredients: 'Малина, смородина, клубника',
        //     },
        //     {
        //       id: Math.random(),
        //       name: 'Шорколад (молочный темный)',
        //       price: 100.0,
        //       weight: '100г',
        //       ingredients: '',
        //     },
        //     {
        //       id: Math.random(),
        //       name: 'Чоко пай',
        //       price: 40.0,
        //       weight: '1шт',
        //       ingredients: '',
        //     },
        //     {
        //       id: Math.random(),
        //       name: 'Пирожное',
        //       price: 50.0,
        //       weight: '1шт',
        //       ingredients: '',
        //     },
        //     {
        //       id: Math.random(),
        //       name: 'Мороженое (сливочное, шоколадное)',
        //       price: 50.0,
        //       weight: '1/100',
        //       ingredients: '',
        //     },
        //   ],
        // },
        // {
        //   id: Math.random(),
        //   name: 'Пиво разливное',
        //   menuGroup: '',
        //   images: '',
        //   tags: 'bear',
        //   products: [
        //     {
        //       id: Math.random(),
        //       name: 'Балтика 7',
        //       price: 100.0,
        //       weight: '0,5л',
        //       ingredients: '',
        //     },
        //     {
        //       id: Math.random(),
        //       name: 'Дон',
        //       price: 100.0,
        //       weight: '0,5л',
        //       ingredients: '',
        //     },
        //     {
        //       id: Math.random(),
        //       name: 'Балтика 0',
        //       price: 100.0,
        //       weight: '0,5л',
        //       ingredients: '',
        //     },
        //     {
        //       id: Math.random(),
        //       name: 'Бавария 0',
        //       price: 115.0,
        //       weight: '0,5л',
        //       ingredients: '',
        //     },
        //     {
        //       id: Math.random(),
        //       name: 'Туборг',
        //       price: 100.0,
        //       weight: '0,5л',
        //       ingredients: '',
        //     },
        //     {
        //       id: Math.random(),
        //       name: 'Холстен',
        //       price: 100.0,
        //       weight: '0,5л',
        //       ingredients: '',
        //     },
        //     {
        //       id: Math.random(),
        //       name: 'Кроненберг',
        //       price: 100.0,
        //       weight: '0,5л',
        //       ingredients: '',
        //     },
        //     {
        //       id: Math.random(),
        //       name: 'Гусь жатецкий (светлый/темный)',
        //       price: 115.0,
        //       weight: '0,5л',
        //       ingredients: '',
        //     },
        //   ],
        // },
        // {
        //   id: Math.random(),
        //   name: 'К пиву',
        //   menuGroup: '',
        //   images: '',
        //   tags: 'bearsnacks',
        //   products: [
        //     {
        //       id: Math.random(),
        //       name: 'Сухарики',
        //       price: 50.0,
        //       weight: '1/100',
        //       ingredients: '',
        //     },
        //     {
        //       id: Math.random(),
        //       name: 'Чипсы',
        //       price: 60.0,
        //       weight: '1/100',
        //       ingredients: '',
        //     },
        //     {
        //       id: Math.random(),
        //       name: 'Арахис',
        //       price: 100.0,
        //       weight: '1/100',
        //       ingredients: '',
        //     },
        //     {
        //       id: Math.random(),
        //       name: 'Ставридка',
        //       price: 150.0,
        //       weight: '1/100',
        //       ingredients: '',
        //     },
        //     {
        //       id: Math.random(),
        //       name: 'Кальмары сушеные',
        //       price: 150.0,
        //       weight: '1/100',
        //       ingredients: '',
        //     },
        //   ],
        // },
        {
          id: Math.random(),
          name: 'Банкетное меню №1 (1000 руб./чел.)',
          menuGroup: '',
          images: 'kebab.png',
          tags: 'banket',
          products: [
            {
              id: Math.random(),
              name: 'Шашлык на выбор',
              price: 0,
              weight: '',
              ingredients: '(из свинины (спинная вырезка), из куриного филе)',
              image: '',
            },
            {
              id: Math.random(),
              name: 'Люля-кебаб на выбор',
              price: 0,
              weight: '',
              ingredients: '(из говядины, из курицы)',
              image: '',
            },
            {
              id: Math.random(),
              name: 'Запеченный картофель на мангале',
              price: 0,
              weight: '',
              ingredients: '',
              image: '',
            },
            {
              id: Math.random(),
              name: 'Мясная нарезка',
              price: 0,
              weight: '',
              ingredients: 'Колбаса Салями, куриная грудка, говяжий язык, куриный рулет, горчица',
              image: '',
            },
            {
              id: Math.random(),
              name: 'Селедка "по-астрахански"',
              price: 0,
              weight: '',
              ingredients: 'Картошка, селедка, зеленый горошек, лимон, лук',
              image: '',
            },
            {
              id: Math.random(),
              name: 'Брынза с зеленью',
              price: 0,
              weight: '',
              ingredients: 'Сыр брынза , укроп, петрушка , кинза',
              image: '',
            },
            {
              id: Math.random(),
              name: '2 салата на выбор из меню',
              price: 0,
              weight: '',
              ingredients: '',
              image: '',
            },
            {
              id: Math.random(),
              name: 'Соленья "по-деревенски"',
              price: 0,
              weight: '',
              ingredients:
                'Соленые огурцы, помидоры, чеснок, черемша, капуста, морковь, цветная капуста, острый перец, стручковая фасоль',
              image: '',
            },
            {
              id: Math.random(),
              name: 'Овощное ассорти',
              price: 0,
              weight: '',
              ingredients: 'Помидоры, огурцы, перец болгарский, зелень, маслины, оливки',
              image: '',
            },
            {
              id: Math.random(),
              name: 'Фруктовое ассорти',
              price: 0,
              weight: '',
              ingredients: 'Яблоко, виноград, банан, апельсин, киви',
              image: '',
            },
            {
              id: Math.random(),
              name: 'Хлеб',
              price: 0,
              weight: '',
              ingredients: 'Лепешка, лаваш тонкий',
              image: '',
            },
            {
              id: Math.random(),
              name: '3 соуса на выбор (красный, белый, чили)',
              price: 0,
              weight: '',
              ingredients: '',
              image: '',
            },
          ],
        },
        {
          id: Math.random(),
          name: 'Банкетное меню №2 (1200 руб./чел.)',
          menuGroup: '',
          images: 'lulya.png',
          tags: 'banket',
          products: [
            {
              id: Math.random(),
              name: 'Шашлык на выбор',
              price: 0,
              weight: '',
              ingredients: '(из свинины (шейная вырезка / спинная вырезка), из куриного филе / куриные крылья)',
              image: '',
            },
            {
              id: Math.random(),
              name: 'Люля-кебаб на выбор',
              price: 0,
              weight: '',
              ingredients: '(из баранины, из свинины, из говядины, из курицы)',
              image: '',
            },
            {
              id: Math.random(),
              name: 'Курица, запеченная на мангале / филе из курицы',
              price: 0,
              weight: '',
              ingredients: '',
              image: '',
            },
            {
              id: Math.random(),
              name: 'Мясная нарезка',
              price: 0,
              weight: '',
              ingredients: 'Колбаса Салями, куриная грудка, говяжий язык, куриный рулет, горчица',
              image: '',
            },
            {
              id: Math.random(),
              name: 'Рыбное ассорти',
              price: 0,
              weight: '',
              ingredients: 'Семга, балык из сома, масляная рыба',
              image: '',
            },
            {
              id: Math.random(),
              name: 'Селедка "по-астрахански"',
              price: 0,
              weight: '',
              ingredients: 'Картошка, селедка, зеленый горошек, лимон, лук',
              image: '',
            },
            {
              id: Math.random(),
              name: 'Брынза с зеленью',
              price: 0,
              weight: '',
              ingredients: 'Сыр брынза , укроп, петрушка , кинза',
              image: '',
            },
            {
              id: Math.random(),
              name: 'Соленья "по-деревенски"',
              price: 0,
              weight: '',
              ingredients:
                'Соленые огурцы, помидоры, чеснок, черемша, капуста, морковь, цветная капуста, острый перец, стручковая фасоль',
              image: '',
            },
            {
              id: Math.random(),
              name: 'Помидоры пикантные',
              price: 0,
              weight: '',
              ingredients: 'Помидоры, соус, сыр, оливки, маслины, зелень',
              image: '',
            },
            {
              id: Math.random(),
              name: '2 салата на выбор из меню',
              price: 0,
              weight: '',
              ingredients: '',
              image: '',
            },
            {
              id: Math.random(),
              name: 'Овощное ассорти',
              price: 0,
              weight: '',
              ingredients: 'Помидоры, огурцы, перец болгарский, зелень, маслины, оливки',
              image: '',
            },
            {
              id: Math.random(),
              name: 'Фруктовое ассорти',
              price: 0,
              weight: '',
              ingredients: 'Яблоко, виноград, банан, апельсин, киви',
              image: '',
            },
            {
              id: Math.random(),
              name: 'Хлеб',
              price: 0,
              weight: '',
              ingredients: 'Лепешка, лаваш тонкий',
              image: '',
            },
            {
              id: Math.random(),
              name: '3 соуса на выбор (красный, белый, чили)',
              price: 0,
              weight: '',
              ingredients: '',
              image: '',
            },
          ],
        },
      ],
      modal: false,
      modalImg: '',
    }
  }

  showImgDialog = (image: string): void => {
    let modalImg = ''
    image === '' ? (modalImg = 'img/products/no-photo.png') : (modalImg = `img/products/${image}`)
    this.setState({ modal: true, modalImg })
  }

  closeImgDialog = (): void => {
    this.setState({ modal: false })
  }

  renderModal = (): any => {
    return (
      <Modal id="modalCont" show={this.state.modal} onHide={() => this.closeImgDialog()} animation={false}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <img className="img-fluid" src={this.state.modalImg} alt="" width="100%" />
        </Modal.Body>
      </Modal>
    )
  }

  render() {
    let firstCat = 'Блюда на мангале'
    return (
      <Container className="FullMenu">
        {this.renderModal()}

        {this.state.categories.map((category, index) => {
          if (category.menuGroup !== firstCat) {
            firstCat = category.menuGroup
          }
          return (
            <Container id={`${category.tags}`} key={category.id + index} fluid className="FullMenu__catCont">
              {firstCat !== '' ? (
                <Row className="FullMenu__parentCatName p-0 m-0">
                  <Col>{firstCat}</Col>
                </Row>
              ) : (
                ''
              )}

              <Row className="FullMenu__cat p-0 m-0">
                <Col md={4} className="FullMenu__img p-0 m-0 d-flex justify-content-center align-items-start">
                  {category.images !== '' ? <img src={`img/fullmenu/${category.images}`} alt="" /> : ''}
                </Col>
                <Col md={8} className="FullMenu__items p-0 m-0">
                  <Row>
                    <Col className="FullMenu__itemTitle">{category.name}</Col>
                  </Row>

                  {category.products.map((product, index) => {
                    let addClass = ''
                    product.image !== '' ? (addClass = 'FullMenu__clickable') : (addClass = '')
                    return (
                      <Container
                        key={index}
                        fluid
                        className={`FullMenu__itemCont m-0 p-0 ${addClass}`}
                        onClick={() => {
                          product.image !== '' && this.showImgDialog(product.image)
                        }}
                      >
                        <Row key={product.id + index} className="FullMenu__item">
                          <Col xs={6} className="p-0 d-flex justify-content-start">
                            {product.name}
                          </Col>
                          <Col xs={3} className="p-0 d-flex justify-content-center">
                            {product.weight}
                          </Col>
                          <Col xs={3} className="p-0 d-flex justify-content-end">
                            {category.tags !== 'banket' ? product.price.toFixed(0).toString() + ' руб.' : ''}
                          </Col>
                        </Row>
                        {product.ingredients !== '' && (
                          <Row>
                            <Col className="FullMenu__ingredients p-0">{product.ingredients}</Col>
                          </Row>
                        )}
                      </Container>
                    )
                  })}
                </Col>
              </Row>
            </Container>
          )
        })}
      </Container>
    )
  }
}

export default FullMenu
