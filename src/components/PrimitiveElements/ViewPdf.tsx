type PropsType = {
  isViewPdf: boolean;
  setIsViewPdf: React.Dispatch<React.SetStateAction<boolean>>;
};

const ViewPdf = ({ isViewPdf, setIsViewPdf }: PropsType) => {
  return (
    <>
      <iframe
        src="Jesus-Chacon.pdf"
        className=" w-full h-full fixed left-0 bottom-0 z-[99]"
      />
      <button
        className="flex items-center justify-center rounded-3xl p-4 bg-red-500 w-18 h-12 fixed right-4 bottom-4 font-bold text-xl z-[99]"
        onClick={() => setIsViewPdf(false)}
      >
        Exit PDF
      </button>
    </>
  );
};

export default ViewPdf;
