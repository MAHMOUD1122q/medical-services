
export default function SrvBox({icon,title,size,visible,margin}: {
  icon: any ,
  title:String,
  size:String,
  visible:String,
  margin:string,
}) {
  
  return (
    <div className={`w-full lg:w-1/5 border-[1px] ${size} ${visible} duration-1000`}>
      <span className=''> {icon} </span>
      <h3 className={` font-semibold text-xl mx-6 ${margin}`}>
        {title}
      </h3>
    </div>  
  )
}