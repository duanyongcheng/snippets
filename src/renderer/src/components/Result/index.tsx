import './style.scss'
import classNames from 'classnames'
import useCodeSelect from '@renderer/hooks/useCodeSelect'

export default function Result(): JSX.Element {
  const { data, currentIndex, selectItem } = useCodeSelect()
  return (
    <main className="main">
      {data.map((item, index) => (
        <div
          key={index}
          className={classNames(['item', { active: currentIndex === index }])}
          onClick={() => {
            selectItem(index)
          }}
        >
          {item.content}
        </div>
      ))}
    </main>
  )
}
