
export default function CommenSection({
  title,
  sub,
  subtitle,
}: {
  title: String,
  sub:String,
  subtitle:String,
}) {
  return (
    <>
    <section className='common mt-20'>
    <div>
      <aside className='shadow-side absolute left-0 top-[90px] h-[400px] w-full z-10 overflow-hidden'>
        <div className='absolute z-50 left-12 md:left-20 top-[140px]'>
          <h3 className={` font-semibold text-3xl md:text-5xl w-[300px] md:w-[680px] leading-[1.3] duration-700 bounceIn`}>{title} <span className="text-[#185a9d]">{sub}</span></h3>
          <p className=" text-[#666666] mt-4 text-2xl"> {subtitle}</p>
        </div>
      </aside>
    </div>
    </section>
  </>
  )
}