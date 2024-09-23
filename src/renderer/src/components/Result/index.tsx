import './style.scss'
import classNames from 'classnames'
import useSelect from '@renderer/hooks/useSelect'

export default function Result(): JSX.Element {
  const { data, currentIndex, selectItem } = useSelect()
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
