# Documents

```js
type UUID = string

/* tokenized markdown */
type Token = {

}

type Date = {}

type Meta = {}

interface Document {
  _id: UUID
  type: 'note' | 'presentation' | 'todo'
  raw: string
  html: string
  title: string
  tokens: Token[]
  flagged: boolean
  readOnly: boolean
  trash: boolean
  created_at: Date
  modifed_at: Date,
  meta: Meta
}
{
  type: 'note',
  markdown: '',
  title: 'untitle'
  toc: {},
  tokens: [],
  tags: [],
  html: '',
  length: 0,
  flagged: false,
  readOnly: false,
  trash: false,
}
`