export default function BackgroundGlow() {
  return (
    <>
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-purple-500/30 blur-3xl rounded-full -z-10"></div>

      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/30 blur-3xl rounded-full -z-10"></div>
    </>
  );
}