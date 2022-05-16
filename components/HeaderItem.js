const HeaderItem = ({ title, Icon }) => {
  return (
    <div className="w-12 sm:w-20 group flex flex-col items-center cursor-pointer">
      <Icon className="peer mb-1 h-8 hover:animate-bounce hover:text-white" />
      <p className="opacity-0 peer-hover:opacity-100 peer-hover:text-white tracking-widest">
        {title}
      </p>
    </div>
  )
}
export default HeaderItem
