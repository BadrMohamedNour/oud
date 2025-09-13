import Link from "next/link"

const Links = ({ links }) => {
  return (
    <div className="links">
      {links.map(({ title, links: subLinks }, index) => (
        <div key={index} className="links__section">
          <h3 className="links__title">{title}</h3>
          <ul>
            {subLinks.map(({ name, path }, i) => (
              <li key={i}>
                <Link href={path || "#"}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Links
