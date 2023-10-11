export type Comedians = Array<Comedian>

export type Comedian = {
  name: string,
  desc: string,
  imdbURL: string,
  wikiURL: string,
  instagramURL: string,
  specialDetails: Array<Special>,
  ranking: number,
  news: Array<New>,
}

type New = {
  title: string,
  url: string
}

type Role = {
  name: string,
}

type Special = {
  specialDetail: {
    datetime: string
    netflixURL: string
    runtimeDuration: string
    tags: Array<string>
    rating: string
    coverImgURL: string
  }
  specialName: string,
  comments: Array<CommentContent>
}

type CommentContent = {
  content: string,
  author: string
}

type Tag = {
  name: string
  timestamp: string
}

type TVshow = {

}

type Movie = {
  
}

type Image = {
  cdnUrl: string,
  name: string
}