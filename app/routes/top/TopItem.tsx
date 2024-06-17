import type { PostType } from './types'

export const TopItem = ({ item }: { item: PostType }) => {
  return (
    <div>
      <img
        className={`
          aspect-[1.414/1]
          object-cover
          block
          w-full
          h-auto
        `}
        src={`https://placehold.jp/ddd/ffffff/600x400.jpg?text=${item.id}`}
        alt=""
      />
      <p className={`mt-4`}>{item.title}</p>
    </div>
  )
}
