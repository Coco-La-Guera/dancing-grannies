import Entry from './components/Entry.jsx'
import data from './data.js'

export default function App() {
  const entries = data.map(function (item) {
    return (
      <Entry
        key={item.id}
        name={item.name}
        location={item.location}
        mapsLink={item.mapsLink}
        img={item.img}
        hours={item.hours}
        description={item.description}
        videoSrc={item.videoSrc}
        frame={item.frame}
        comments={item.comments}
      />
    )
  })
  return <>{entries}</>
}
