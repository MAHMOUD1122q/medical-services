export default function UpdatePassword() {
  return (
    <div className=" border-[1px] w-[800px] mb-5 p-8 ">
      <h3 className=" mb-5 text-xl font-bold ml-44">Update Password</h3>
      <div className=" flex flex-col items-center w-full">
        <form action="">
          <div className="w-full">
            <label htmlFor="">Current Password</label>
            <input
              type="password"
              className=" bg-slate-200/50 block w-[380px] outline-none border-[1px] rounded-md h-9 px-3"
            />
          </div>
          <div className=" mt-4 w-full">
            <label htmlFor="">New Password</label>
            <div className=" flex items-center ">
              <input
                type="password"
                className=" bg-slate-200/50 block w-full outline-none border-[1px] rounded-md h-9 px-3"
              />
            </div>
          </div>
          <button
            type="submit"
            className=" w-full bg-sky-600 text-white mt-5 py-2 font-semibold rounded-md hover:shadow-xl duration-300"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
