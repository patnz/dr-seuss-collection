import * as Models from '../../common/models'

interface Props {
  singleBook: Models.Book
}

function Book({ singleBook }: Props) {
  return (
    <div>
      <img alt={singleBook.title} src={singleBook.cover}></img>
      <h3>{singleBook.title}</h3>
      <h4>Published: {singleBook.year_published}</h4>
    </div>
  )
}

export default Book
