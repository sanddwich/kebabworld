export function displayCategory(category: string) {
  const categories: HTMLElement[] = Array.from(
    document.getElementsByClassName('FullMenu__catCont') as HTMLCollectionOf<HTMLElement>
  )
  categories.forEach((cat: HTMLElement) => {
    if (cat.id !== category) {
      cat.style.display = 'none'
      if (category === 'kebab') {
        const kebab = document.getElementById('kebab')
        const lulya = document.getElementById('lulya')
        const vegetables = document.getElementById('vegetables')
        if (kebab && lulya && vegetables) {
          kebab.style.display = 'block'
          lulya.style.display = 'block'
          vegetables.style.display = 'block'
        }
      }
    } else {
      cat.style.display = 'block'
    }
  })
}
