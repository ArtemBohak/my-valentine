import { NavLink } from "react-router-dom"

const HomePage = () => {
  const images = [
    {
      src: "/camera.png",
      label: "Moments",
      href: "/moments",
    },
    {
      src: "/present.png",
      label: "Gifts",
      href: "/gifts",
    },
    {
      src: "/envelop.png",
      label: "Message",
      href: "/valentine",
    },
    // {
    //   src: "/playlist.png",
    //   label: "Playlist",
    //   href: '/playlist'
    // },
  ]

  return (
    <>
      <div className="h-[100vh] flex justify-center items-center">
        <div
          className="
          flex flex-col w-full justify-between max-w-[800px] md:flex-row
          gap-12 md:gap-0
          "
        >
          {images.map((item) => (
            <NavLink
              key={item.label}
              className={() => `
                flex flex-col gap-1 justify-center items-center
              `}
              to={item.href}
            >
              <img src={item.src} className="h-[150px]" />
              <span className="romantic text-xl text-pink-100">
                {item.label}
              </span>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  )
}

export default HomePage
