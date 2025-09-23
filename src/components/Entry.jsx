export default function Entry(props) {
  return (
    <main className="container">
      {/* Left side: TV frame + video */}
      <section className="left-box">
        <header className="entry-header">
          <h2>Dancing Grannies</h2>
        </header>
        <div className="tv">
          <div className="screen">
            <video src={props.videoSrc} controls playsInline />
          </div>
          <img src={props.frame} alt="TV frame" className="tv-overlay" />
        </div>
      </section>

      {/* Right side: text info */}
      <aside className="right-box">
        <h3>{props.name}</h3>
        <p>
          {props.location}
          {props.mapsLink && (
            <a href={props.mapsLink} target="_blank" rel="noreferrer">
              <img
                src={props.img.src}
                alt={props.img.alt}
                className="map-pin"
              />
            </a>
          )}
        </p>
        <p>{props.hours}</p>
        <p>{props.description}</p>
        {props.comments && props.comments.length > 0 && (
          <ul className="comments">
            {props.comments.map(function (comment) {
              return <li key={comment.id}>{comment.text}</li>
            })}
          </ul>
        )}
      </aside>
    </main>
  )
}
