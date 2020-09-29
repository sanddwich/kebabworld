import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Category from '../../../Interfaces/Category'
import './FullMenu.scss'

interface FullMenuProps {}

interface FullMenuState {
  categories: Category[]
}

class FullMenu extends React.Component<FullMenuProps, FullMenuState> {
  constructor(props: FullMenuProps) {
    super(props)
    this.state = {
      categories: [
        {
          id: Math.random(),
          name: 'Шашлык',
          menuGroup: 'Блюда на мангале',
          images: 'kebab.png',
          products: [
            {
              id: Math.random(),
              name: 'из свинины',
              price: 90.0,
              weight: '1/100',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'из баранины',
              price: 150.0,
              weight: '1/100',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'из говядины',
              price: 120.0,
              weight: '1/100',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'ханский шашлык',
              price: 60.0,
              weight: '1/100',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'из куриного филе',
              price: 60.0,
              weight: '1/100',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'из куриных крыльев',
              price: 60.0,
              weight: '1/100',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'из куриных ножек',
              price: 60.0,
              weight: '1/100',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'из индейки',
              price: 110.0,
              weight: '1/100',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'из рыбы (сазан, сом, судак)',
              price: 150.0,
              weight: '1/100',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'креветки',
              price: 50.0,
              weight: '1шт',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'Соус красный',
              price: 60.0,
              weight: '1/100',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'Соус белый',
              price: 60.0,
              weight: '1/100',
              ingredients: '',
            },
          ],
        },
        {
          id: Math.random(),
          name: 'Люля-кебаб',
          menuGroup: 'Блюда на мангале',
          images: 'lulya.png',
          products: [
            {
              id: Math.random(),
              name: 'из баранины',
              price: 100.0,
              weight: '1/100',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'из говядины',
              price: 80.0,
              weight: '1/100',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'из курицы',
              price: 70.0,
              weight: '1/100',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'из индейки',
              price: 110.0,
              weight: '1/100',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'из рыбы (сазан)',
              price: 100.0,
              weight: '1/100',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'из картошки',
              price: 150.0,
              weight: '1 шампур',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'Соус красный',
              price: 60.0,
              weight: '1/100',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'Соус белый',
              price: 60.0,
              weight: '1/100',
              ingredients: '',
            },
          ],
        },
        {
          id: Math.random(),
          name: 'Овощи',
          menuGroup: 'Блюда на мангале',
          images: 'veget.png',
          products: [
            {
              id: Math.random(),
              name: 'запеченные грибы',
              price: 70.0,
              weight: '1/100',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'запеченный картофель',
              price: 100.0,
              weight: '1 шампур',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'овощи на мангале',
              price: 50.0,
              weight: '1/100',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'Соус красный',
              price: 60.0,
              weight: '1/100',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'Соус белый',
              price: 60.0,
              weight: '1/100',
              ingredients: '',
            },
          ],
        },
        {
          id: Math.random(),
          name: 'Первые блюда',
          menuGroup: '',
          images: 'first.png',
          products: [
            {
              id: Math.random(),
              name: 'Хашлама',
              price: 160.0,
              weight: '1/300',
              ingredients: 'Баранина или говядина, картофель, лук, перец, морковь, помидоры, бульон, специи',
            },
            {
              id: Math.random(),
              name: 'Жульен с курицей',
              price: 150.0,
              weight: '1/200',
              ingredients: 'Куриное филе, грибы, лук, сыр',
            },
            {
              id: Math.random(),
              name: 'Говядина в горшочке',
              price: 135.0,
              weight: '1/300',
              ingredients: 'Мясо, картошка, бульон, зелень, грибы',
            },
            {
              id: Math.random(),
              name: 'Свинина в горшочке',
              price: 125.0,
              weight: '1/300',
              ingredients: 'Мясо, картошка, бульон, зелень, грибы',
            },
            {
              id: Math.random(),
              name: 'Баранина в горшочке',
              price: 145.0,
              weight: '1/300',
              ingredients: 'Мясо, картошка, бульон, зелень, грибы',
            },
            {
              id: Math.random(),
              name: 'Соус красный',
              price: 60.0,
              weight: '1/100',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'Соус белый',
              price: 60.0,
              weight: '1/100',
              ingredients: '',
            },
          ],
        },
        {
          id: Math.random(),
          name: 'Вторые блюда',
          images: 'second.png',
          menuGroup: '',
          products: [
            {
              id: Math.random(),
              name: 'Макароны "по-флотски"',
              price: 75.0,
              weight: '1/200',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'Котлеты из говядины',
              price: 70.0,
              weight: '1/100',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'Гуляш из говядины',
              price: 65.0,
              weight: '1/100',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'Жаркое по домашнему (из говяджины)',
              price: 100.0,
              weight: '1/200',
              ingredients: 'Мясо, лук, перец, помидоры, картофель',
            },
            {
              id: Math.random(),
              name: 'Жаркое по домашнему (из свинины)',
              price: 100.0,
              weight: '1/200',
              ingredients: 'Мясо, лук, перец, помидоры, картофель',
            },
            {
              id: Math.random(),
              name: 'Жаркое по домашнему (из баранины)',
              price: 120.0,
              weight: '1/200',
              ingredients: 'Мясо, лук, перец, помидоры, картофель',
            },
            {
              id: Math.random(),
              name: 'Мясо "по-французски"',
              price: 250.0,
              weight: '1/220',
              ingredients: 'Свинина, лук, грибы, помидоры, сыр, майонез',
            },
            {
              id: Math.random(),
              name: 'Куриная грудка "по-французски"',
              price: 170.0,
              weight: '1/200',
              ingredients: 'Куриная грудка, овощи, сыр, майонез, перец болгарский',
            },
            {
              id: Math.random(),
              name: 'Жульен с курицей и грибами',
              price: 150.0,
              weight: '1/100',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'Соус красный',
              price: 60.0,
              weight: '1/100',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'Соус белый',
              price: 60.0,
              weight: '1/100',
              ingredients: '',
            },
          ],
        },
        {
          id: Math.random(),
          name: 'Салаты',
          menuGroup: '',
          images: 'salats.png',
          products: [
            {
              id: Math.random(),
              name: 'Шашлычный мир',
              price: 250.0,
              weight: '1/200',
              ingredients: 'Говядина отварная, чернослив, сыр, грецкий орех, гранат, майонез, зелень',
            },
            {
              id: Math.random(),
              name: 'Греческий',
              price: 200.0,
              weight: '1/200',
              ingredients:
                'Лист салата, помидоры, огурцы, перец болгарский, оливки, маслины, сыр Фетакса, соус, оливковое масло, лук',
            },
            {
              id: Math.random(),
              name: 'Южный',
              price: 160.0,
              weight: '1/200',
              ingredients: 'Помидоры, огурцы, лук, зелень, майонез, сметана, масло',
            },
            {
              id: Math.random(),
              name: 'Шамбери',
              price: 230.0,
              weight: '1/200',
              ingredients: 'Язык отварной, корнишоны маринованные, яйцо куриное, грецкий орех, соевый соус',
            },
            {
              id: Math.random(),
              name: 'Морская экзотика',
              price: 250.0,
              weight: '1/200',
              ingredients: 'Морской коктейль, яйцо куриное, огурцы, лимон, майонез',
            },
            {
              id: Math.random(),
              name: 'Цезарь из курицы',
              price: 200.0,
              weight: '1/200',
              ingredients: 'Курица, сухари, лист салата, черри, грецкий орех, сыр, соус',
            },
            {
              id: Math.random(),
              name: 'Цезарь с семгой',
              price: 250.0,
              weight: '1/200',
              ingredients: 'Семга, сухари, лист салата, черри, грецкий орех, сыр, соус',
            },
            {
              id: Math.random(),
              name: 'Цезарь с креветками',
              price: 220.0,
              weight: '1/200',
              ingredients: 'Креветки королевские, сухари, лист салата, черри, сыр, соус',
            },
            {
              id: Math.random(),
              name: 'Черные глаза',
              price: 200.0,
              weight: '1/200',
              ingredients: 'Говядина отварная, чернослив, сыр, грецкий орех, гранат, майонез',
            },
            {
              id: Math.random(),
              name: 'Дамский каприз',
              price: 200.0,
              weight: '1/220',
              ingredients:
                'Куриная грудка, жареные шампиньоны, консервированный ананас, сладкий перец, варенное яйцо, майонез, перец',
            },
            {
              id: Math.random(),
              name: 'Принцесса',
              price: 200.0,
              weight: '1/200',
              ingredients: 'Капуста пекинская, огурцы, креветки очищенные, клюква, соус, оливковое масло',
            },
            {
              id: Math.random(),
              name: 'Фаворит',
              price: 180.0,
              weight: '1/200',
              ingredients: 'Курица отварная, огурцы, сыр, майонез, яйцо куриное, украшается перепелиными яйцами',
            },
            {
              id: Math.random(),
              name: 'Пестрый',
              price: 180.0,
              weight: '1/200',
              ingredients:
                'Ветчина из индейки, сыр, перец болгарский, помидоры, оливки, маслины, соус, оливковое масло',
            },
          ],
        },
        {
          id: Math.random(),
          name: 'Гарниры',
          menuGroup: '',
          images: 'garnirs.png',
          products: [
            {
              id: Math.random(),
              name: 'Картофель фри',
              price: 70.0,
              weight: '1/150',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'Картофель отварной',
              price: 60.0,
              weight: '1/200',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'Картофель по-деревенски',
              price: 80.0,
              weight: '1/200',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'Брокколи, жареные в сливочном соусе',
              price: 120.0,
              weight: '1/200',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'Пюре (в масле)',
              price: 50.0,
              weight: '1/200',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'Грибы жареные со сметаной',
              price: 180.0,
              weight: '1/200',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'Соус красный',
              price: 60.0,
              weight: '1/100',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'Соус белый',
              price: 60.0,
              weight: '1/100',
              ingredients: '',
            },
          ],
        },
        {
          id: Math.random(),
          name: 'Закуски',
          menuGroup: '',
          images: 'zakuson.png',
          products: [
            {
              id: Math.random(),
              name: 'Овощное ассорти',
              price: 200.0,
              weight: '1/200',
              ingredients: 'Помидоры, огурцы, перец болгарский, зелень, маслины',
            },
            {
              id: Math.random(),
              name: 'Брынза с зеленью',
              price: 200.0,
              weight: '1/170',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'Помидоры пикантные',
              price: 160.0,
              weight: '1/250',
              ingredients: 'Помидоры, соус, сыр, оливки, зелень',
            },
            {
              id: Math.random(),
              name: 'Мясная нарезка',
              price: 270.0,
              weight: '1/350',
              ingredients: 'Индейка, ветчина, колбаса сырокопченая, рулет куриный, буженина',
            },
            {
              id: Math.random(),
              name: 'Сырная нарезка',
              price: 250.0,
              weight: '1/220',
              ingredients: 'Мраморный, гауда, маасдам',
            },
            {
              id: Math.random(),
              name: 'Рыбная нарезка',
              price: 280.0,
              weight: '1/300',
              ingredients: 'Семга, балык',
            },
            {
              id: Math.random(),
              name: 'Язык говяжий',
              price: 270.0,
              weight: '1/200',
              ingredients: 'Язык, грецкий орех, сметана',
            },
            {
              id: Math.random(),
              name: 'Грибное лукошко',
              price: 180.0,
              weight: '1/200',
              ingredients: 'Грибы маринованные, лук зеленый, зелень',
            },
            {
              id: Math.random(),
              name: 'Соленья "по-деревенски"',
              price: 100.0,
              weight: '1/200',
              ingredients: 'Огурцы соленые, перец острый, чеснок, черемша',
            },
            {
              id: Math.random(),
              name: 'Селедка "по-астрахански"',
              price: 200.0,
              weight: '1/250',
              ingredients: 'Картошка, селедка, зеленый горошек, лук, лимон',
            },
            {
              id: Math.random(),
              name: 'Сырные трубочки',
              price: 120.0,
              weight: '1/100',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'Фруктовое ассорти',
              price: 270.0,
              weight: '1/450',
              ingredients: 'Яблоки, виноград, бананы, апельсины',
            },
            {
              id: Math.random(),
              name: 'Шаурма из курицы',
              price: 130.0,
              weight: '1шт',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'Шаурма из говядины',
              price: 140.0,
              weight: '1шт',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'Шаурма из баранины',
              price: 150.0,
              weight: '1шт',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'Лаваш тонкий',
              price: 30.0,
              weight: '1шт',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'Лепешка',
              price: 50.0,
              weight: '1шт',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'Лимон',
              price: 70.0,
              weight: '1/100',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'Маслины',
              price: 130.0,
              weight: '1/100',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'Оливки',
              price: 120.0,
              weight: '1/100',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'Соус красный',
              price: 60.0,
              weight: '1/100',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'Соус белый',
              price: 60.0,
              weight: '1/100',
              ingredients: '',
            },
          ],
        },
        {
          id: Math.random(),
          name: 'Напитки',
          menuGroup: '',
          images: 'drink.png',
          products: [
            {
              id: Math.random(),
              name: 'Соки натуральные',
              price: 120.0,
              weight: '1л',
              ingredients: 'Томат, яблоко, персик, вишня, апельсин, мультифрукт, ананас',
            },
            {
              id: Math.random(),
              name: 'Минеральная вода "Рыч Алсу"',
              price: 75.0,
              weight: '0,5л',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'Лимонад',
              price: 80.0,
              weight: '0,5л',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'Кубай (без газа)',
              price: 30.0,
              weight: '0,5л',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'BonAqua (без газа)',
              price: 50.0,
              weight: '0,5л',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'Coca-Cola (стекло)',
              price: 75.0,
              weight: '0,25л',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'Coca-Cola',
              price: 70.0,
              weight: '0,5л',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'Coca-Cola',
              price: 120.0,
              weight: '1л',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'Nestea',
              price: 70.0,
              weight: '0,5л',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'Чай (Зеленый, черный)',
              price: 30.0,
              weight: '1 чашка',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'Чай (Зеленый, зеленый с жасмином, черный, с чабрецом, фруктовый)',
              price: 150.0,
              weight: '1 чайник',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'Кофе (расстворимый)',
              price: 30.0,
              weight: '1 чашка',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'Кофе (черный)',
              price: 50.0,
              weight: '1 чашка',
              ingredients: '',
            },
          ],
        },
        {
          id: Math.random(),
          name: 'К чаю',
          menuGroup: '',
          images: '',
          products: [
            {
              id: Math.random(),
              name: 'Варенье',
              price: 70.0,
              weight: '100г',
              ingredients: 'Малина, смородина, клубника',
            },
            {
              id: Math.random(),
              name: 'Шорколад (молочный темный)',
              price: 100.0,
              weight: '100г',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'Чоко пай',
              price: 40.0,
              weight: '1шт',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'Пирожное',
              price: 50.0,
              weight: '1шт',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'Мороженое (сливочное, шоколадное)',
              price: 50.0,
              weight: '1/100',
              ingredients: '',
            },
          ],
        },
        {
          id: Math.random(),
          name: 'Пиво разливное',
          menuGroup: '',
          images: '',
          products: [
            {
              id: Math.random(),
              name: 'Балтика 7',
              price: 100.0,
              weight: '0,5л',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'Дон',
              price: 100.0,
              weight: '0,5л',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'Балтика 0',
              price: 100.0,
              weight: '0,5л',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'Бавария 0',
              price: 115.0,
              weight: '0,5л',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'Туборг',
              price: 100.0,
              weight: '0,5л',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'Холстен',
              price: 100.0,
              weight: '0,5л',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'Кроненберг',
              price: 100.0,
              weight: '0,5л',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'Гусь жатецкий (светлый/темный)',
              price: 115.0,
              weight: '0,5л',
              ingredients: '',
            },
          ],
        },
        {
          id: Math.random(),
          name: 'К пиву',
          menuGroup: '',
          images: '',
          products: [
            {
              id: Math.random(),
              name: 'Сухарики',
              price: 50.0,
              weight: '1/100',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'Чипсы',
              price: 60.0,
              weight: '1/100',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'Арахис',
              price: 100.0,
              weight: '1/100',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'Ставридка',
              price: 150.0,
              weight: '1/100',
              ingredients: '',
            },
            {
              id: Math.random(),
              name: 'Кальмары сушеные',
              price: 150.0,
              weight: '1/100',
              ingredients: '',
            },
          ],
        },
      ],
    }
  }

  render() {
    let firstCat = 'Блюда на мангале'
    return (
      <Container className="FullMenu">
        {this.state.categories.map((category, index) => {
          if (category.menuGroup !== firstCat) {
            firstCat = category.menuGroup
          }
          return (
            <Container key={category.id+index} fluid className="FullMenu__catCont">
              {firstCat !== '' ? (
                <Row className="FullMenu__parentCatName p-0 m-0">
                  <Col>{firstCat}</Col>
                </Row>
              ) : (
                ''
              )}

              <Row className="FullMenu__cat p-0 m-0">
                <Col md={4} className="FullMenu__img p-0 m-0 d-flex justify-content-center align-items-center">
                  {category.images !== '' ? <img src={`img/fullmenu/${category.images}`} alt="" /> : ''}
                </Col>
                <Col md={8} className="FullMenu__items p-0 m-0">
                  <Row>
                    <Col className="FullMenu__itemTitle p-0">{category.name}</Col>
                  </Row>

                  {category.products.map((product, index) => {
                    return (
                      <Row  key={product.id+index} className="FullMenu__item">
                        <Col xs={6} className="p-0 d-flex justify-content-start">{product.name}</Col>
                        <Col xs={3} className="p-0 d-flex justify-content-center">{product.weight}</Col>
                        <Col xs={3} className="p-0 d-flex justify-content-end">{product.price.toFixed(0).toString()+' руб.'}</Col>
                      </Row>
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
