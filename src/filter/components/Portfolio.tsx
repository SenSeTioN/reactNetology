import { FC, useState } from 'react'
import { data } from '../data'
import ProjectList from './ProjectList/ProjectList'
import Toolbar from './Toolbar'

const Portfolio: FC = () => {
  const [filter, setFilter] = useState('')

  const filteredItems = data.filter((item) => {
    if (filter === 'All') {
      return data
    }

    return item.category === filter
  })

  return (
    <>
      <Toolbar
        filters={['All', 'Websites', 'Flayers', 'Business Cards']}
        selected={filter ? filter : 'All'}
        onSelectFilter={(filter) => {
          setFilter(filter)
        }}
      />

      {filteredItems.length === 0 ? (
        <ProjectList projects={data} />
      ) : (
        <ProjectList projects={filteredItems} />
      )}
    </>
  )
}

export default Portfolio
