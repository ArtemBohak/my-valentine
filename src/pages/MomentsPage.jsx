const MomentsPage = () => {
  const images = [
    {
      src: "/photos/1.jpg",
    },
    {
      src: "/photos/2.jpg",
    },
    {
      src: "/photos/3.jpg",
    },
    {
      src: "/photos/4.jpg",
    },
    {
      src: "/photos/5.jpg",
    },
    {
      src: "/photos/6.jpg",
    },
    {
      src: "/photos/7.jpg",
    },
    {
      src: "/photos/8.jpg",
    },
    {
      src: "/photos/9.jpg",
    },
  ]

  return (
    <div className="flex justify-center items-center">
      <div className="max-w-[1000px] flex flex-wrap gap-5 justify-center">
        {images.map((item) => (
          <div
            key={item.src}
            className="border rounded h-[220px] w-[250px] p-2 bg-white"
          >
            <div
              className={`h-full w-full bg-contain bg-no-repeat bg-center`}
              style={{ backgroundImage: `url(${item.src})` }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MomentsPage
