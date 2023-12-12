import SideBar from "./_components/sideBar";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" flex mt-52">
      <SideBar/>
      <main className=" min-h-screen">{children}</main>
    </div>
    );
}
